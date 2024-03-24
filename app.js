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
classifier.addDocument("cheating by giving false evidence, deceiving someone by telling them something they don't know, cheating another person using someone else's handle, a person who is not at a particular place on a particular day and a person who knows no news instead of fake news about that person", 'article_4');
classifier.addDocument('rape', 'article_5');
classifier.addDocument('', 'article_6');
classifier.addDocument('', 'article_7');
classifier.addDocument('', 'article_8');
classifier.addDocument('', 'article_9');
classifier.addDocument('', 'article_10');
classifier.addDocument('', 'article_11');
classifier.addDocument('', 'article_12');
classifier.addDocument('', 'article_13');
classifier.addDocument('', 'article_14');
classifier.addDocument('', 'article_15');
classifier.addDocument('', 'article_16');
classifier.addDocument('', 'article_17');
classifier.addDocument('', 'article_18');
classifier.addDocument('', 'article_19');
classifier.addDocument('', 'article_20');
classifier.addDocument('', 'article_21');
classifier.addDocument('', 'article_22');
classifier.addDocument('', 'article_23');
classifier.addDocument('', 'article_24');
classifier.addDocument('', 'article_25');



// language Tamil
classifier.addDocument('Pakkattu vittuu nay ennai katittatu naan enna ceyya ventum', 'article_1_tamil');
classifier.addDocument('Pakkattu punai ennai katittatu naan enna ceyya ventum', 'article_2_tamil');
classifier.addDocument('yaro tirumpa tirumpa ennai alaikkirarkal', 'article_3_tamil');
classifier.addDocument('poi aatharam kondru yambathuvathu, oruvaruku theriyathaithai kondu yammaturvathu, veru oruvarien kaai eluthai bayanpaduthi matroruvarai yamathuthal', 'article_4_tamil');
classifier.addDocument('karpalipu', 'article_5_tamil');
classifier.addDocument('', 'article_6_tamil');
classifier.addDocument('', 'article_7_tamil');
classifier.addDocument('', 'article_8_tamil');
classifier.addDocument('', 'article_9_tamil');
classifier.addDocument('', 'article_10_tamil');
classifier.addDocument('', 'article_11_tamil');
classifier.addDocument('', 'article_12_tamil');
classifier.addDocument('', 'article_13_tamil');
classifier.addDocument('', 'article_14_tamil');
classifier.addDocument('', 'article_15_tamil');
classifier.addDocument('', 'article_16_tamil');
classifier.addDocument('', 'article_17_tamil');
classifier.addDocument('', 'article_18_tamil');
classifier.addDocument('', 'article_19_tamil');
classifier.addDocument('', 'article_20_tamil');
classifier.addDocument('', 'article_22_tamil');
classifier.addDocument('', 'article_22_tamil');
classifier.addDocument('', 'article_23_tamil');
classifier.addDocument('', 'article_24_tamil');
classifier.addDocument('', 'article_25_tamil');


// language Hindi
classifier.addDocument('padosee kute ne mujhe kaat liya, main kya karoon?', 'article_1_hindi');
classifier.addDocument('padosee bille ne mujhe kaat liya, main kya karoon', 'article_2_hindi');
classifier.addDocument('koee mujhe baar-baar kol kar raha hai', 'article_3_hindi');
classifier.addDocument('jhothe saakshy dekar dhokhaadhadee keepata nahin, kisee ko kuchh aisee baat bataakar dhokha dena jo ve nahin jaanate, ek vyakti jo kisee vishesh din par kisee vishesh sthaan par nahin hai aur ek vyakti jo us vyakti ke baare mein pharjee khabaron ke bajaay koee khabar nahin jaanata hai, kisee any vyakti ke haindal ka upayog karake kisee any vyakti ko dhokha dena', 'article_4_hindi');
classifier.addDocument('balaatkaar', 'article_5_hindi');
classifier.addDocument('', 'article_6_hindi');
classifier.addDocument('', 'article_7_hindi');
classifier.addDocument('', 'article_9_hindi');
classifier.addDocument('', 'article_8_hindi');
classifier.addDocument('', 'article_10_hindi');
classifier.addDocument('', 'article_11_hindi');
classifier.addDocument('', 'article_12_hindi');
classifier.addDocument('', 'article_13_hindi');
classifier.addDocument('', 'article_14_hindi');
classifier.addDocument('', 'article_15_hindi');
classifier.addDocument('', 'article_16_hindi');
classifier.addDocument('', 'article_17_hindi');
classifier.addDocument('', 'article_18_hindi');
classifier.addDocument('', 'article_19_hindi');
classifier.addDocument('', 'article_20_hindi');
classifier.addDocument('', 'article_22_hindi');
classifier.addDocument('', 'article_22_hindi');
classifier.addDocument('', 'article_23_hindi');
classifier.addDocument('', 'article_24_hindi');
classifier.addDocument('', 'article_25_hindi');


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

app.all('/', (req, res) => { 
  res.status(404).send('<h1>404! Page not found</h1>'); 
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
    case 'art_hindi':
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
    case 'article_4':
      botResponse = 'Section 227 of the BNS embodies Section 193 of the IPC, which provided punishment for false evidence. If a person intentionally gives or fabricates false evidence to be used in any stage of judicial proceeding, the BNS now provides a maximum fine of up to ten thousand rupees. In all other cases where a person gives or fabricates false evidence, the BNS provides a maximum fine of up to five thousand rupees.';
      break;
    case 'article_5':
      botResponse = 'In consensual rape cases, the existing age limit has been raised from 15 years to 18 years. and it will be differ from age based.';
      break;
    case 'article_6':
      botResponse = '';
      break;
    case 'article_7':
      botResponse = '';
      break;
    case 'article_8':
      botResponse = '';
      break;
    case 'article_9':
      botResponse = '';
      break;
    case 'article_10':
      botResponse = '';
      break;
    case 'article_11':
      botResponse = '';
      break;
    case 'article_12':
      botResponse = '';
      break;
    case 'article_13':
      botResponse = '';
      break;
    case 'article_14':
      botResponse = '';
      break;
    case 'article_15':
      botResponse = '';
      break;
    case 'article_16':
      botResponse = '';
      break;
    case 'article_17':
      botResponse = '';
      break;
    case 'article_18':
      botResponse = '';
      break;
    case 'article_19':
      botResponse = '';
      break;
    case 'article_20':
      botResponse = '';
      break;
    case 'article_21':
      botResponse = '';
      break;
    case 'article_22':
      botResponse = '';
      break;
    case 'article_23':
      botResponse = '';
      break;
    case 'article_24':
      botResponse = '';
      break;
    case 'article_25':
      botResponse = '';
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
    case 'article_4_tamil':
      botResponse = 'BNS இன் பிரிவு 227 IPC இன் பிரிவு 193 ஐ உள்ளடக்கியது, இது தவறான சாட்சியங்களுக்கு தண்டனை வழங்கியது. ஒரு நபர் வேண்டுமென்றே தவறான ஆதாரங்களை வழங்கினால் அல்லது புனையப்பட்டால், நீதித்துறை நடவடிக்கைகளின் எந்த கட்டத்திலும் பயன்படுத்தினால், BNS இப்போது அதிகபட்சமாக பத்தாயிரம் ரூபாய் வரை அபராதம் விதிக்கிறது. மற்ற எல்லா வழக்குகளிலும் ஒரு நபர் தவறான சாட்சியங்களை வழங்கினால் அல்லது புனையப்பட்டால், BNS அதிகபட்சமாக ஐயாயிரம் ரூபாய் வரை அபராதம் விதிக்கிறது.';
      break;
    case 'article_5_tamil':
      botResponse = 'ஒருமித்த கற்பழிப்பு வழக்குகளில் தற்போதுள்ள வயது வரம்பு 15 ஆண்டுகளில் இருந்து 18 ஆக உயர்த்தப்பட்டுள்ளது, மேலும் அது வயது அடிப்படையில் வேறுபடும்.';
      break;
    case 'article_6_tamil':
      botResponse = '';
      break;
    case 'article_7_tamil':
      botResponse = '';
      break;
    case 'article_8_tamil':
      botResponse = '';
      break;
    case 'article_9_tamil':
      botResponse = '';
      break;
    case 'article_10_tamil':
      botResponse = '';
      break;
    case 'article_11_tamil':
      botResponse = '';
      break;
    case 'article_12_tamil':
      botResponse = '';
      break;
    case 'article_13_tamil':
      botResponse = '';
      break;
    case 'article_14_tamil':
      botResponse = '';
      break;
    case 'article_15_tamil':
      botResponse = '';
      break;
    case 'article_16_tamil':
      botResponse = '';
      break;
    case 'article_17_tamil':
      botResponse = '';
      break;
    case 'article_18_tamil':
      botResponse = '';
      break;
    case 'article_19_tamil':
      botResponse = '';
      break;
    case 'article_20_tamil':
      botResponse = '';
      break;
    case 'article_21_tamil':
      botResponse = '';
      break;
    case 'article_22_tamil':
      botResponse = '';
      break;
    case 'article_23_tamil':
      botResponse = '';
      break;
    case 'article_24_tamil':
      botResponse = '';
      break;
    case 'article_25_tamil':
      botResponse = '';
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
    case 'article_4_hindi':
      botResponse = 'बीएनएस की धारा 227 आईपीसी की धारा 193 का प्रतीक है, जिसमें झूठे साक्ष्य के लिए सजा का प्रावधान है। यदि कोई व्यक्ति न्यायिक कार्यवाही के किसी भी चरण में इस्तेमाल करने के लिए जानबूझकर झूठे सबूत देता है या गढ़ता है, तो बीएनएस अब अधिकतम दस हजार रुपये तक का जुर्माना प्रदान करता है। अन्य सभी मामलों में जहां कोई व्यक्ति गलत साक्ष्य देता है या गढ़ता है, बीएनएस अधिकतम पांच हजार रुपये तक का जुर्माना प्रदान करता है.';
      break;
    case 'article_5_hindi':
      botResponse = 'सहमति से बलात्कार के मामलों में मौजूदा उम्र सीमा 15 साल से बढ़ाकर 18 साल कर दी गई है और यह उम्र के आधार पर अलग होगी.';
      break;
    case 'article_6_hindi':
      botResponse = '';
      break;
    case 'article_7_hindi':
      botResponse = '';
      break;
    case 'article_8_hindi':
      botResponse = '';
      break;
    case 'article_9_hindi':
      botResponse = '';
      break;
    case 'article_10_hindi':
      botResponse = '';
      break;
    case 'article_11_hindi':
      botResponse = '';
      break;
    case 'article_12_hindi':
      botResponse = '';
      break;
    case 'article_13_hindi':
      botResponse = '';
      break;
    case 'article_14_hindi':
      botResponse = '';
      break;
    case 'article_15_hindi':
      botResponse = '';
      break;
    case 'article_16_hindi':
      botResponse = '';
      break;
    case 'article_17_hindi':
      botResponse = '';
      break;
    case 'article_18_hindi':
      botResponse = '';
      break;
    case 'article_19_hindi':
      botResponse = '';
      break;
    case 'article_20_hindi':
      botResponse = '';
      break;
    case 'article_21_hindi':
      botResponse = '';
      break;
    case 'article_22_hindi':
      botResponse = '';
      break;
    case 'article_23_hindi':
      botResponse = '';
      break;
    case 'article_24_hindi':
      botResponse = '';
      break;
    case 'article_25_hindi':
      botResponse = '';
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
