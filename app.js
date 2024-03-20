const express = require('express');
const bodyParser = require('body-parser');
const natural = require('natural');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//app.use(favicon(path.join(__dirname + '/images/ashoka.jpg')));

// Sample responses from the legal chatbot
const legalResponses = {
  greeting: "Hello! How can I assist you with legal matters?",
  farewell: "Thank you for using our legal chatbot. Have a great day!",
  default: "I'm sorry, I didn't understand that. How may I assist you with legal questions?"
};

const classifier = new natural.BayesClassifier();

// Train the classifier with sample legal intents
// common questions
classifier.addDocument('en','What are my legal rights?', 'legal_rights');
classifier.addDocument('How can I get legal help?', 'legal_help');
classifier.addDocument('Tell me about legal contracts.', 'legal_contracts');
classifier.addDocument('What is the process for filing a lawsuit?', 'file_lawsuit');
classifier.addDocument('what is your name', 'jytfs');
classifier.addDocument('unn peru enna', 'tamil');
classifier.addDocument('hi, hii, hello, hey', 'greetings')
classifier.addDocument('how are you', 'fine');
classifier.addDocument('good', 'good');
classifier.addDocument('i love you', 'love');


// language English
classifier.addDocument('neighbour dog bite me what can i do', 'article_1');
classifier.addDocument('neighbour cat bite me what can i do', 'article_2');
classifier.addDocument('someone is repeatedly calling me', 'article_3');

// language Tamil
classifier.addDocument('Pakkattu vittuu nay ennai katittatu naan enna ceyya ventum', 'article_1_tamil');
classifier.addDocument('Pakkattu punai ennai katittatu naan enna ceyya ventum', 'article_2_tamil');
classifier.addDocument('yaro tirumpa tirumpa ennai alaikkirarkal', 'article_3_tamil')

// language Hindi
classifier.addDocument('padosee kute ne mujhe kaat liya, main kya karoon?', 'article_1_hindi');
classifier.addDocument('padosee bille ne mujhe kaat liya, main kya karoon', 'article_2_hindi');
classifier.addDocument('koee mujhe baar-baar kol kar raha hai', 'article_3_hindi');


// classifier training
classifier.train();

classifier.save('train.json', function (err, classifier) {
  if (err) {
    console.log(err)
  }
})


app.get('/', (req, res) => {
  res.sendFile(__dirname + './login-page/login.php');
});

app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/chat', (req, res) => {
  const userMessage = req.body.message.trim();

  // Classify the user's input using the trained NLP classifier
  const intent = classifier.classify(userMessage.toLowerCase());

  // Respond based on the classified intent
  let botResponse;
  switch (intent) {
    case 'legal_rights':
      botResponse = 'welcome to the legal rights....';
      break;
    case 'greetings':
      const random = ['Hello there!', 'Welcome', 'Welcome to the legal rights']
      botResponse = random[(Math.floor(Math.random() * arr.length))];
      console.log(botResponse, random[botResponse]);
      break;
    case 'legal_help':
      botResponse = 'You can seek legal help by...';
      break;
    case 'legal_contracts':
      botResponse = 'Legal contracts typically involve...';
      break;
    case 'file_lawsuit':
      botResponse = 'To file a lawsuit, you need to...';
      break;
    case 'fine':
      botResponse = 'I am fine.. What do you';
      break;
    case 'good':
      botResponse = 'Ahhh okay...';
      break;
    case 'love':
      botResponse = 'Love you too😘';
      break;
    case 'jytfs':
      botResponse = 'My name is legalbot';
      break;
    case 'tamil':
      botResponse = 'My name is தினேஷ்';
      break;
    case 'article_1':
      botResponse = 'which has the exact same wordings as Section 291 of the BNS, imposed a fine of upto Rs 1,000, along with imprisonment upto six months.';
      break;
    case 'article_2':
      botResponse = 'There is no any specific law for the cat bitten, but Under the BNS pet animal attacks a human, the  can be fined upto 5000 INR along with imprisonment upto six months.';
      break;
    case 'article_3':
      botResponse = 'According to the section 264 in criminal code, contacting someone regularly either to harassing or threaten another will end up him being for 10 years.';
      break;
    case 'article_1_tamil':
      botResponse = 'பிஎன்எஸ் பிரிவு 291-ன் அதே வார்த்தைகளைக் கொண்டிருப்பதால், ஆறு மாதங்கள் வரை சிறைத்தண்டனையுடன் ரூ.1,000 வரை அபராதம் விதிக்கப்பட்டது..';
      break;
    case 'article_2_tamil':
      botResponse = 'கடிக்கப்பட்ட பூனைக்கு எந்த குறிப்பிட்ட சட்டமும் இல்லை, ஆனால் BNS செல்லப்பிராணியின் கீழ் மனிதனை தாக்கினால், ஆறு மாதங்கள் வரை சிறைத்தண்டனையுடன் 5000 INR வரை அபராதம் விதிக்கப்படலாம்.';
      break;
    case 'article_3_tamil':
      botResponse = 'குற்றவியல் சட்டப்பிரிவு 264ன் படி, ஒருவரைத் தொடர்ந்து துன்புறுத்தவோ அல்லது அச்சுறுத்தவோ தொடர்பு கொண்டால், அவர் 10 ஆண்டுகள் இருக்க முடியும்..';
      break;
    case 'article_1_hindi':
      botResponse = 'जिसमें बिल्कुल बीएनएस की धारा 291 के समान शब्द हैं, जिसमें छह महीने तक की कैद के साथ 1,000 रुपये तक का जुर्माना लगाया गया है।';
      break;
    case 'article_2_hindi':
      botResponse = 'बिल्ली के काटने पर कोई विशेष कानून नहीं है, लेकिन बीएनएस के तहत पालतू जानवर द्वारा किसी इंसान पर हमला करने पर छह महीने तक की कैद के साथ 5000 रुपये तक का जुर्माना लगाया जा सकता है।.';
      break;
    case 'article_3_hindi':
      botResponse = 'आपराधिक संहिता की धारा 264 के अनुसार, किसी को परेशान करने या धमकी देने के लिए नियमित रूप से संपर्क करने पर उसे 10 साल की सजा होगी।.';
      break;
    default:
      botResponse = legalResponses.default;
      break;
  }

  res.json({ userMessage, botResponse });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
