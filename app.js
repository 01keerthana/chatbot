const express = require('express');
const bodyParser = require('body-parser');
const natural = require('natural');


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


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
classifier.addDocument('hi, hii, hello, hey, hiii', 'greetings')
classifier.addDocument('how are you', 'fine');
classifier.addDocument('good', 'good');
classifier.addDocument('i love you', 'love');


// language English
classifier.addDocument('neighbour dog bite me what can i do', 'article_1');
classifier.addDocument('neighbour cat bite me what can i do', 'article_2');
classifier.addDocument('someone is repeatedly calling me', 'article_3');
classifier.addDocument("cheating by giving false evidence, deceiving someone by telling them something they don't know, cheating another person using someone else's handle, a person who is not at a particular place on a particular day and a person who knows no news instead of fake news about that person", 'article_4');
classifier.addDocument('rape', 'article_5');
classifier.addDocument('Abandoning a child', 'article_6');
classifier.addDocument('abandonment of a child', 'article_7');
classifier.addDocument('adulteration of food or drink for sale', 'article_8');
classifier.addDocument('adulteration of drugs, sale of adulterated drugs', 'article_9');
classifier.addDocument('unlawful compulsory labour', 'article_10');
classifier.addDocument('rash driving', 'article_11');
classifier.addDocument('what is the punishment to a person who is involved in illegal arms dealing in india', 'article_12');
classifier.addDocument('what is the punishment for a person who is under 18 after committing a murder in india', 'article_13');
classifier.addDocument('what is the punishment for smuggling in India?', 'article_14');
classifier.addDocument('what is the punishment for gold smuggling in India?', 'article_15');
classifier.addDocument('should murder and attempted murder carry equal punishments?', 'article_16');
classifier.addDocument('what is the law if many people steal together', 'article_17');
classifier.addDocument('what is the law for maiming animals by mischievous activity, what is the law against maiming or killing animal for fun', 'article_18');
classifier.addDocument('what is the law for trespassing, what to do if a trespasser enters the house to commit a wrongdoing', 'article_19');
classifier.addDocument('what is the law for my property mark is mentioned on items that are not related to me, what to do if someone misleads that they are not responsible for the item marked on their property', 'article_20');
classifier.addDocument('what is the law for making false accounts, falsification of accounts.', 'article_21');
classifier.addDocument('fake property, counterfeiting a property mark.', 'article_22');
classifier.addDocument('counterfeiting a property mark, create a fake property', 'article_23');
classifier.addDocument('making or possession of any instrument for counterfeiting a property mark', 'article_24');
classifier.addDocument('selling goods marked with a counterfeit property mark', 'article_25');
classifier.addDocument('intentional insult with intent to provoke breach of peace', 'article_26');
classifier.addDocument('statements conducing to public mischief', 'article_27');
classifier.addDocument('act caused by inducing person to believe that he will be rendered an object of Divine displeasure.', 'article_28');
classifier.addDocument('murder', 'article_29');
classifier.addDocument('dowry death', 'article_30');
classifier.addDocument('attempt to murder', 'article_31');
classifier.addDocument('attempt to commit sucide', 'article_32');
classifier.addDocument('voluntarily causing hurt', 'article_33');
classifier.addDocument('theft', 'article_34');
classifier.addDocument('robbery', 'article_35');
classifier.addDocument('dacoity', 'article_36');
classifier.addDocument('cheating', 'article_37');
classifier.addDocument('house-trespass, what is the law for house trespass', 'article_38');
classifier.addDocument('forgery', 'article_39');
classifier.addDocument('defamation', 'article_40');
classifier.addDocument('cheating by personation', 'article_41');
classifier.addDocument('misconduct in public by a drunken person', 'article_42');
classifier.addDocument('breach of contract to attend on and supply wants of helpless person', 'article_43');
classifier.addDocument('repeal and savings', 'article_44');
classifier.addDocument('culpable homicide by causing death of person other than person whose death was intended', 'article_45');
classifier.addDocument('assault', 'article_46');
classifier.addDocument('Abettor present when offence is committed', 'article_47');
classifier.addDocument('nontreatment of victim', 'article_48');
classifier.addDocument('abetting commission of offence by public or by more than ten person', 'article_49');
classifier.addDocument('criminal conspiracy', 'article_50');


// language Tamil
classifier.addDocument('Pakkathu veettu naai ennai kadithal naan enna seiya vendum', 'article_1_tamil');
classifier.addDocument('Pakkattu poonai ennai katittatu naan enna seiya vendum', 'article_2_tamil');
classifier.addDocument('yaro thirumba thirumba ennai alaikkirargal', 'article_3_tamil');
classifier.addDocument('poi aadhaaram kondu yematruvathu, oruvaruku theriyathathai kondu yematrvathu, veru oruvarin kai eluthai payanpaduthi matroruvarai yematruthal', 'article_4_tamil');
classifier.addDocument('karpalipu', 'article_5_tamil');
classifier.addDocument('Oru kuḻanthayai kaividuthal', 'article_6_tamil');
classifier.addDocument('oru kulanthayai kaividuthal, kulanthayai thooki poduthal', 'article_7_tamil');
classifier.addDocument('unavil kalappadam seithu vitral, kalapada madhu kallai vitral', 'article_8_tamil');
classifier.addDocument('kalapada marunthu, kalapada marunthai vitral, kalapada marunthu virpanai', 'article_9_tamil');
classifier.addDocument('satta virothamaga velai vanguthal, athigama velai vanguthal, kuraivaga panam kuduthal', 'article_10_tamil');
classifier.addDocument('vegamaga vandiyai ootuthal, athi vegamaga vandiyai ootuthal', 'article_11_tamil');
classifier.addDocument('india vil satta virothamaga ayutha virpanayil eedupattal enna thandanai', 'article_12_tamil');
classifier.addDocument('18 vayathuku keel ullavargal kolai seiythal? enna thandanai ', 'article_13_tamil');
classifier.addDocument('kadathaluku india vil enna thandanai, porul kadathaluku india vil enna thandanai', 'article_14_tamil');
classifier.addDocument('thangam kadathal, thanga nagai kadathaluku enna thandanai', 'article_15_tamil');
classifier.addDocument('kolai kum kolai muyarchikum ore thandanaiya', 'article_16_tamil');
classifier.addDocument('koottaga ah thirutil eedupaduthal, kootaga thiruduthal', 'article_17_tamil');
classifier.addDocument('vilangugalai kolai seithal, vilayadirkaga mirugangalai thunpuruthuthal, uyirinangalai thunpuruthuthal', 'article_18_tamil');
classifier.addDocument('veetukul athumeeri ulle varuthal, veetukul aathumeeri ulle nulaithal', 'article_19_tamil');
classifier.addDocument('thangal sothil avar ku pangu illai endru kooruvathu, sothu unaku illai endru yaravathu sollinal naan enna seivathu', 'article_20_tamil');
classifier.addDocument('sothukalai sethapaduthuthal, sothai setha paduthukirar', 'article_22_tamil');
classifier.addDocument('poliyana sotthai uruvakuthal, poi ana sotthu', 'article_23_tamil');
classifier.addDocument('poli ana sotthu allathu athai uruvaakka payanpaduthum upagaranangalai vaithu iruthal', 'article_24_tamil');
classifier.addDocument('poli ana sotthai vitral', 'article_25_tamil');
classifier.addDocument('amaithi meeralai thunduthal, amaithi meeralai thoondum nokkathudan vendumentre avamathipathu, amaithiyai seerkulaipathu', 'article_26_tamil');
classifier.addDocument('pothu avadhooruku vali vaguthal, avadhooru pothu valaku', 'article_27_tamil');
classifier.addDocument('theiviga athiparuku ', 'article_28_tamil');
classifier.addDocument('kolai', 'article_29_tamil');
classifier.addDocument('varathatchanai kolai, varathatchanai maranam, varathatchanai kodumai', 'article_30_tamil');
classifier.addDocument('kolai muyarchi', 'article_31_tamil');
classifier.addDocument('tharkolai muyarchi', 'article_32_tamil');
classifier.addDocument('thaanaga munn vanthu kayapaduthuthal, kayapaduthuthal', 'article_33_tamil');
classifier.addDocument('thirutu', 'article_34_tamil');
classifier.addDocument('kollai', 'article_35_tamil');
classifier.addDocument('mosadi', 'article_36_tamil');
classifier.addDocument('yematruthal', 'article_37_tamil');
classifier.addDocument('athumeeral, veetukul athumeeral', 'article_38_tamil');
classifier.addDocument('poli', 'article_39_tamil');
classifier.addDocument('avathooru', 'article_40_tamil');
classifier.addDocument('aalumai moolam yematruthal', 'article_41_tamil');
classifier.addDocument('kudi bothaiyil pothu idathil thavaraga  nadanthu kolvathu', 'article_42_tamil');
classifier.addDocument('aatharavu attravaruku thevaigalai poorthi seiyaamal vithigalai meeruthal', 'article_43_tamil');
classifier.addDocument('ratthu mattrum semippu', 'article_44_tamil');
classifier.addDocument('kuttravaali moolam kolai seithal, kuttravali udan iruthal, koolipadai yevuthal', 'article_45_tamil');
classifier.addDocument('oru naparin meethu thakuthal, thakuthal', 'article_46_tamil');
classifier.addDocument('kutrathai thoondubavar, kuttram seiya thoondi vidubavar', 'article_47_tamil');
classifier.addDocument('bathika pattavaruku sigichai kudukathathu', 'article_48_tamil');
classifier.addDocument('pothu makkal allathu pathuku merpatta nabargalal kuttram seiya thoonduthal,kootaga kutram seithal', 'article_49_tamil');
classifier.addDocument('kutraviyal sathi,sathi', 'article_50_tamil');


// language Hindi
classifier.addDocument('padosee kute ne mujhe kaat liya, main kya karoon?', 'article_1_hindi');
classifier.addDocument('padosee bille ne mujhe kaat liya, main kya karoon', 'article_2_hindi');
classifier.addDocument('koee mujhe baar-baar kol kar raha hai', 'article_3_hindi');
classifier.addDocument('jhothe saakshy dekar dhokhaadhadee keepata nahin, kisee ko kuchh aisee baat bataakar dhokha dena jo ve nahin jaanate, ek vyakti jo kisee vishesh din par kisee vishesh sthaan par nahin hai aur ek vyakti jo us vyakti ke baare mein pharjee khabaron ke bajaay koee khabar nahin jaanata hai, kisee any vyakti ke haindal ka upayog karake kisee any vyakti ko dhokha dena', 'article_4_hindi');
classifier.addDocument('balaatkaar', 'article_5_hindi');
classifier.addDocument('ek bachche ko chhodana', 'article_6_hindi');
classifier.addDocument('ek bachche ka parityaag', 'article_7_hindi');
classifier.addDocument('bikree ke lie khaady ya pey padaarth mein milaavat', 'article_9_hindi');
classifier.addDocument('aushadhiyon mein milaavat, milaavatee davaon kee bikree', 'article_8_hindi');
classifier.addDocument('gairakaanoonee anivaary shram', 'article_10_hindi');
classifier.addDocument('laaparavaahee se gaadee chalaana', 'article_11_hindi');
classifier.addDocument('bhaarat mein avaidh hathiyaaron ke kaarobaar mein shaamil vyakti ko kya saja dee ja sakatee hai?', 'article_12_hindi');
classifier.addDocument('bhaarat mein hatya karane ke baad 18 varsh se kam umr ke vyakti ko kya saza dee jaatee hai?', 'article_13_hindi');
classifier.addDocument('bhaarat mein taskaree kee saza kya hai?', 'article_14_hindi');
classifier.addDocument('bhaarat mein sone kee taskaree ke lie kya saza hai?', 'article_15_hindi');
classifier.addDocument('kya hatya aur hatya ke prayaas mein samaan saza honee chaahie?', 'article_16_hindi');
classifier.addDocument('agar kaee log ek saath choree karen to yah kaisa kaanoon hai?', 'article_17_hindi');
classifier.addDocument('manoranjan ke lie jaanavar ko apang banaane ya maarane ke khilaaph kya kaanoon hai?', 'article_18_hindi');
classifier.addDocument('agar koee atichaaree galat kaam karane ke lie ghar mein ghus jae to kya karen?', 'article_19_hindi');
classifier.addDocument('agar koee gumaraah kare ki vah apanee sampatti par ankit vastu ke lie jimmedaar nahin hai to kya karen', 'article_20_hindi');
classifier.addDocument('khaaton ka mithyaakaran', 'article_22_hindi');
classifier.addDocument('sampatti chihn kee jaalasaajee karana', 'article_23_hindi');
classifier.addDocument('sampatti chihn kee jaalasaajee ke lie koee upakaran banaana ya kabza karanaWhoever makes or has in his possession any die, plate or other instrument for the purpose of counterfeiting a property mark, or has in his possession a property mark for the purpose of denoting that any goods belong to a person to whom they do not belong, shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both.', 'article_24_hindi');
classifier.addDocument('nakale sampatti chihn se chihnit saamaan bechana', 'article_25_hindi');
classifier.addDocument('shaanti bhang karane ke iraade se jaanaboojhakar apamaan', 'article_26_hindi');
classifier.addDocument('saarvajanik sharaarat ko badhaava dene vaale bayaan', 'article_27_hindi');
classifier.addDocument('hatya', 'article_28_hindi');
classifier.addDocument('dahej hatya', 'article_29_hindi');
classifier.addDocument('hatya ka prayaas', 'article_30_hindi');
classifier.addDocument('hatya ka praya', 'article_31_hindi');
classifier.addDocument('aatmahatya karane ka prayaas', 'article_32_hindi');
classifier.addDocument('svechchha se chot pahunchaana', 'article_33_hindi');
classifier.addDocument('choree', 'article_34_hindi');
classifier.addDocument('dakaitee', 'article_35_hindi');
classifier.addDocument('dakaite', 'article_36_hindi');
classifier.addDocument('beeemaanee karana', 'article_37_hindi');
classifier.addDocument('ghar mein atikraman', 'article_38_hindi');
classifier.addDocument('jaalasaajee', 'article_39_hindi');
classifier.addDocument('maanahaani', 'article_40_hindi');
classifier.addDocument('vyaktitv ke aadhaar par dhokhaadhadee', 'article_41_hindi');
classifier.addDocument('sharaabee vyakti dvaara saarvajanik sthaan par duvryavahaar', 'article_42_hindi');
classifier.addDocument('asahaay vyakti kee jarooraton ko poora karane aur aapoorti karane ke anubandh ka ullanghan', 'article_43_hindi');
classifier.addDocument('nirasan aur bachat', 'article_44_hindi');
classifier.addDocument('jis vyakti kee mrtyu ka iraada tha usake alaava kisee any vyakti kee mrtyu kaarit karake gair iraadatan hatya', 'article_45_hindi');
classifier.addDocument('hamala', 'article_46_hindi');
classifier.addDocument('jab aparaadh kiya jaata hai to dushprerak upasthit hota hai', 'article_47_hindi');
classifier.addDocument('peedita ka ilaaj na karana', 'article_48_hindi');
classifier.addDocument('janata ya das se adhik vyaktiyon dvaara aparaadh karane ke lie ukasaana', 'article_49_hindi');
classifier.addDocument('aaparaadhik shadayantr', 'article_50_hindi');


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
      botResponse = 'Hello there!🙌';
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
      botResponse = 'Digital legalbot';
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
      botResponse = 'Imprisonment up to 6 months, fine up to Rs 5,000, or both. Imprisonment up to life, and a fine up to Rs 10 lakh for manufacture, storage, sale of unsafe food.  Sentence proportionate to damage caused.';
      break;
    case 'article_7':
      botResponse = 'Parent or guardian abandoning a child below the age of 12 is punishable with imprisonment up to 7 years, fine, or both.';
      break;
    case 'article_8':
      botResponse = 'Adulteration penalised with imprisonment up to a year, fine up to Rs 5,000, or both. Sale of adulterated drugs penalised with imprisonment up to 6 months, fine up to Rs 5,000 or both.';
      break;
    case 'article_9':
      botResponse = 'Consumption of adulterated drugs causing death or grievous hurt penalised with imprisonment between 10 years and life, and fine of at least Rs 10 lakh, or 3 times the value of the seized drugs, whichever is higher.';
      break;
    case 'article_10':
      botResponse = 'Imprisonment up to one year, fine, or both. Imprisonment up to 3 years and fine up to Rs 2,000.';
      break;
    case 'article_11':
      botResponse = ' Punishment for first offence: imprisonment up to 6 months, and/or fine up to Rs 5,000.  Subsequent offence within three years: imprisonment up to 2 years and/or a fine up to Rs 10,000.  Cognizable, bailable, compoundable.';
      break;
    case 'article_12':
      botResponse = 'Under this act, Chapter 5 and more importantly the Section 25, deals with punishments for offences in dealing with illegal arms under various contexts by which mostly it includes imprisonment from 7 years to 14 years and fine as well.';
      break;
    case 'article_13':
      botResponse = 'The act of juvenile justice treats a minor of age between sixteen & eighteen years as an adult if he/she has committed any heinous crime in a conflict of the law. Minor who have committed a serious offence may be tried as an adult only if he/she is apprehended after the age of twenty-one years.';
      break;
    case 'article_14':
      botResponse = 'Under Indian Law, smuggling is defined in Section 2(39) of the Customs Act, 1962 as any activity in relation to any goods, means any act or omission which will render such goods liable to confiscation under section 111 or section 113 of the Customs Act, 1962. As per Customs Act, 1962 the maximum punishment is 7 years imprisonment.';
      break;
    case 'article_15':
      botResponse = 'Any violation of the above provisions would also tentament to violation of provisions of Foreign Trade (Development and Regulation) Act, 1992 and the Baggage Rules, 2016. Also, when the above condition is not fulfilled, the gold brought becomes prohibited goods. On such violation, the gold is liable to absolute confiscation under section 111 (d), (l) and (m) of the Customs Act, 1962. For smuggling of prohibited goods, the person is liable to be arrested. Further, the person is liable to penalty, which will be around 25% of the value of gold under section 112 of the Customs Act, 1962. If the duty evaded on gold exceeds Rs. fifty lakh, the offence becomes non-bailable.';
      break;
    case 'article_16':
      botResponse = 'You caused an accident which hospitalised someone, but didn’t kill him. Still, you could have killed him, and your reckless behaviour needs to be checked. Had the person died, it would have been no more reckless on your part - his death or survival would be unlucky or lucky on your part, and it is the same lesson you need to be taught either way. Indeed, if you had caused his death, that shock alone could be enough to set you straight in future, whereas an accident which happens to cause no harm does not teach you much - meaning you’d be more likely to be as reckless in the future. So there is no logical reason why correction should be less severe.';
      break;
    case 'article_17':
      botResponse = 'Whoever belongs to any gang of persons associated in habitually committing theft or robbery, and not being a gang of dacoits, shall be punished with rigorous imprisonment for a term which may extend to seven years, and shall also be liable to fine.';
      break;
    case 'article_18':
      botResponse = 'Whoever commits mischief by killing, poisoning, maiming or rendering useless any animal shall be punished with imprisonment of either description for a term which may extend to five years, or with fine, or with both.';
      break;
    case 'article_19':
      botResponse = 'punishable with imprisonment, shall be punished with imprisonment of either description for a term which may extend to two years, and shall also be liable to fine: Provided that if the offence intended to be committed is theft, the term of the imprisonment may be extended to seven years.';
      break;
    case 'article_20':
      botResponse = 'Whoever uses any false property mark shall, unless he proves that he acted without intent to defraud, be punished with imprisonment of either description for a term which may extend to one year, or with fine, or with both.';
      break;
    case 'article_21':
      botResponse = 'Whoever, being a clerk, officer or servant, or employed or acting in the capacity of a clerk, officer or servant, wilfully, and with intent to defraud, destroys, alters, mutilates or falsifies any book, electronic record, paper, writing, valuable security or account which belongs to or is in the possession of his employer, or has been received by him for or on behalf of his employer, or wilfully, and with intent to defraud, makes or abets the making of any false entry in, or omits or alters or abets the omission or alteration of any material particular from or in, any such book, electronic record, paper, writing, valuable security or account, shall be punished with imprisonment of either description for a term which may extend to seven years, or with fine, or with both.';
      break;
    case 'article_22':
      botResponse = ' Whoever removes, destroys, defaces or adds to any property mark, intending or knowing it to be likely that he may thereby cause injury to any person, shall be punished with imprisonment of either description for a term which may extend to one year, or with fine, or with both.';
      break;
    case 'article_23':
      botResponse = 'Whoever counterfeits any property mark used by a public servant, or any mark used by a public servant to denote that any property has been manufactured by a particular person or at a particular time or place, or that the property is of a particular quality or has passed through a particular office, or that it is entitled to any exemption, or uses as genuine any such mark knowing the same to be counterfeit, shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine.';
      break;
    case 'article_24':
      botResponse = 'Whoever makes or has in his possession any die, plate or other instrument for the purpose of counterfeiting a property mark, or has in his possession a property mark for the purpose of denoting that any goods belong to a person to whom they do not belong, shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both.';
      break;
    case 'article_25':
      botResponse = 'Whoever sells, or exposes, or has in possession for sale, any goods or things with a counterfeit property mark affixed to or impressed upon the same or to or upon any case';
      break;
      case 'article_26':
        botResponse = 'Whoever intentionally insults in any manner, and thereby gives provocation to any person, intending or knowing it to be likely that such provocation will cause him to break the public peace, or to commit any other offence, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both.';
        break;
      case 'article_27':
        botResponse = 'Whoever makes, publishes or circulates any statement or report containing false information, rumour or alarming news, including through electronic means, with intent to create or promote, or which is likely to create or promote, on grounds of religion, race, place of birth, residence, language, caste or community or any other ground whatsoever, feelings of enmity, hatred or ill will between different religious, racial, language or regional groups or castes or communities, shall be punished with imprisonment which may extend to three years, or with fine, or with both.';
        break;
      case 'article_28':
        botResponse = 'A prison sentence of up to seven years and a fine has been mentioned as punishment.';
        break;
      case 'article_29':
        botResponse = 'Imprisonment for a term which shall not be less than seven years but which may extend to imprisonment for life.';
        break;
      case 'article_30':
        botResponse = 'Imprisonment for a term which shall not be less than seven years but which may extend to imprisonment for life.';
        break;
      case 'article_31':
        botResponse = 'Punishment can extend up to 10 years and in case the victim is hurt, then the maximum punishment is imprisonment for life.';
        break;
      case 'article_32':
        botResponse = 'Simple imprisonment for a term which may extend to one year or with fine or with both or with community service.';
        break;
      case 'article_33':
        botResponse = 'Section 115 voluntarily causing hurt of either description for a term which may extend to one year, or with fine which may extend to one thousand rupees, or with both.';
        break;
      case 'article_34':
        botResponse = 'Section 303 theft, imprisonment of either description for a term which may extend to three years, or with fine, or with both.';
        break;
      case 'article_35':
        botResponse = 'Section 317 robbery, rigorous imprisonment for a term which may extend to ten years, and shall also be liable to fine.';
        break;
      case 'article_36':
        botResponse = 'Imprisonment for life, or with rigorous imprisonment for a term which may extend to ten years, and shall also be liable to fine.';
        break;
      case 'article_37':
        botResponse = 'Section 318 cheating, basic offense of cheating is punishable by up to three years in prison, a fine, or both.';
        break;
      case 'article_38':
        botResponse = 'Imprisonment of either description for a term up to one year, or fine up to five thousand rupees, or both.';
        break;
      case 'article_39':
        botResponse = 'Imprisonment for a term extending up to 7 years.';
        break;
      case 'article_40':
        botResponse = 'Imprisonment for a term which may extend to two years, or with fine, or with both.';
        break;
      case 'article_41':
        botResponse = 'Imprisonment of either description for a term up to five years, or fine, or both.';
        break;
      case 'article_42':
        botResponse = 'Whoever, in a state of intoxication, appears in any public place, or in any place which it is a trespass in him to enter, and there conducts himself in such a manner as to cause annoyance to any person, shall be punished with simple imprisonment for a term which may extend to twenty-four hours, or with fine which may extend to one thousand rupees, or with both or with community service.';
        break;
      case 'article_43':
        botResponse = 'Whoever, being bound by a lawful contract to attend on or to supply the wants of any person who, by reason of youth, or of unsoundness of mind, or of a disease or bodily weakness, is helpless or incapable of providing for his own safety or of supplying his own wants, voluntarily omits so to do, shall be punished with imprisonment of either description for a term which may extend to three months, or with fine which may extend to five thousand rupees, or with both.';
        break;
      case 'article_44':
        botResponse = 'If a person, by doing anything which he intends or knows to be likely to cause death, commits culpable homicide by causing the death of any person, whose death he neither intends nor knows himself to be likely to cause, the culpable homicide committed by the offender is of the description of which it would have been if he had caused the death of the person whose death he intended or knew himself to be likely to cause.';
        break;
      case 'article_45':
        botResponse = 'Whoever makes any gesture, or any preparation intending or knowing it to be likely that such gesture or preparation will cause any person present to apprehend that he who makes that gesture or preparation is about to use criminal force to that person, is said to commit an assault.';
        break;
      case 'article_46':
        botResponse = 'Whoever makes any gesture, or any preparation intending or knowing it to be likely that such gesture or preparation will cause any person present to apprehend that he who makes that gesture or preparation is about to use criminal force to that person, is said to commit an assault';
        break;
      case 'article_47':
        botResponse = 'Whenever any person, who is absent would be liable to be punished as an abettor, is present when the act or offence for which he would be punishable in consequence of the abetment is committed, he shall be deemed to have committed such act or offence.';
        break;
      case 'article_48':
        botResponse = 'Whoever abets the commission of an offence punishable with death or imprisonment for life, shall, if that offence be not committed in consequence of the abetment, and no express provision is made under this Sanhita for the punishment of such abetment, be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine; and if any act for which the abettor is liable in consequence of the abetment, and which causes hurt to any person, is done, the abettor shall be liable to imprisonment of either description for a term which may extend to fourteen years, and shall also be liable to fine.';
        break;
      case 'article_49':
        botResponse = 'Whoever abets the commission of an offence by the public generally or by any number or class of persons exceeding ten, shall be punished with imprisonment of either description for a term which may extend to seven years and with fine.';
        break;
      case 'article_50':
        botResponse = 'Whoever is a party to a criminal conspiracy, to commit an offence punishable with death, imprisonment for life or rigorous imprisonment for a term of two years or upwards, shall, where no express provision is made in this Sanhita for the punishment of such a conspiracy, be punished in the same manner as if he had abetted such offence';
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
      botResponse = 'பாதுகாப்பற்ற உணவுகளை தயாரித்தல், சேமித்தல், விற்பனை செய்தல் ஆகியவற்றுக்கு ஆயுள் வரை சிறைத்தண்டனையும், 10 லட்சம் ரூபாய் வரை அபராதமும் விதிக்கப்படும். ஏற்பட்ட சேதத்தின் விகிதத்தில் தண்டனை.';
      break;
    case 'article_7_tamil':
      botResponse = '12 வயதிற்குட்பட்ட குழந்தையை பெற்றோர் அல்லது பாதுகாவலர் கைவிடுவது 7 ஆண்டுகள் வரை சிறைத்தண்டனை, அபராதம் அல்லது இரண்டும் விதிக்கப்படும்.';
      break;
    case 'article_8_tamil':
      botResponse = '6 மாதங்கள் வரை சிறைத்தண்டனை, 5,000 ரூபாய் வரை அபராதம் அல்லது இரண்டும். பாதுகாப்பற்ற உணவுகளை தயாரித்தல், சேமித்தல், விற்பனை செய்தல் ஆகியவற்றுக்கு ஆயுள் வரை சிறைத்தண்டனையும், 10 லட்சம் ரூபாய் வரை அபராதமும் விதிக்கப்படும். ஏற்பட்ட சேதத்தின் விகிதத்தில் தண்டனை.';
      break;
    case 'article_9_tamil':
      botResponse = 'கலப்படம் செய்தால் ஓராண்டு வரை சிறைத்தண்டனை, ரூ. 5,000 வரை அபராதம் அல்லது இரண்டும் விதிக்கப்படும். கலப்படம் செய்யப்பட்ட போதைப்பொருள் விற்பனைக்கு 6 மாதம் வரை சிறைத்தண்டனை, 5,000 ரூபாய் வரை அபராதம் அல்லது இரண்டும் விதிக்கப்படும்.';
      break;
    case 'article_10_tamil':
      botResponse = 'ஒரு வருடம் வரை சிறைத்தண்டனை, அபராதம் அல்லது இரண்டும். 3 ஆண்டுகள் வரை சிறைத்தண்டனை மற்றும் ரூ 2,000 வரை அபராதம்.';
      break;
    case 'article_11_tamil':
      botResponse = 'முதல் குற்றத்திற்கான தண்டனை: 6 மாதங்கள் வரை சிறைத்தண்டனை, மற்றும்/அல்லது ரூ 5,000 வரை அபராதம். மூன்று ஆண்டுகளுக்குள் அடுத்தடுத்த குற்றம்: 2 ஆண்டுகள் வரை சிறைத்தண்டனை மற்றும்/அல்லது ரூ 10,000 வரை அபராதம். அறியக்கூடிய, பிணையெடுக்கக்கூடிய, கூட்டு.';
      break;
    case 'article_12_tamil':
      botResponse = 'இந்தச் சட்டத்தின் கீழ், அத்தியாயம் 5 மற்றும் மிக முக்கியமாக பிரிவு 25, பல்வேறு சூழல்களின் கீழ் சட்டவிரோத ஆயுதங்களைக் கையாள்வதில் குற்றங்களுக்கான தண்டனைகளைக் கையாள்கிறது, இதில் பெரும்பாலும் 7 ஆண்டுகள் முதல் 14 ஆண்டுகள் வரை சிறைத்தண்டனை மற்றும் அபராதம் ஆகியவை அடங்கும்.';
      break;
    case 'article_13_tamil':
      botResponse = 'பதினாறு மற்றும் பதினெட்டு வயதுக்குட்பட்ட மைனர், சட்டத்தின் முரண்பாட்டில் ஏதேனும் கொடூரமான குற்றத்தைச் செய்திருந்தால், சிறார் நீதிச் சட்டம் அவரை வயது வந்தவராகக் கருதுகிறது. இருபத்தொரு வயதுக்குப் பிறகு கைது செய்யப்பட்டால் மட்டுமே, கடுமையான குற்றத்தைச் செய்த மைனர் வயது வந்தவராக விசாரிக்கப்படுவார்.';
      break;
    case 'article_14_tamil':
      botResponse = 'இந்தியச் சட்டத்தின்படி, கடத்தல் என்பது சுங்கச் சட்டம், 1962 இன் பிரிவு 2(39) இல் எந்தவொரு பொருட்கள் தொடர்பான எந்தவொரு நடவடிக்கையாக வரையறுக்கப்பட்டுள்ளது, அதாவது சுங்கத்தின் பிரிவு 111 அல்லது பிரிவு 113 இன் கீழ் பறிமுதல் செய்யக்கூடிய எந்தவொரு செயல் அல்லது புறக்கணிப்பு. சட்டம், 1962. சுங்கச் சட்டம், 1962 இன் படி அதிகபட்ச தண்டனை 7 ஆண்டுகள் சிறைத்தண்டனை.';
      break;
    case 'article_15_tamil':
      botResponse = 'மேற்கூறிய விதிகளை மீறுவது, வெளிநாட்டு வர்த்தக (மேம்பாடு மற்றும் ஒழுங்குமுறை) சட்டம், 1992 மற்றும் பேக்கேஜ் விதிகள், 2016 ஆகியவற்றின் விதிகளை மீறுவதாகவும் இருக்கும். மேலும், மேற்கூறிய நிபந்தனையை பூர்த்தி செய்யாதபோது, ​​கொண்டு வரப்படும் தங்கம் தடைசெய்யப்பட்ட பொருட்களாக மாறும். அப்படி மீறினால், 1962 சுங்கச் சட்டம் பிரிவு 111 (d), (l) மற்றும் (m) இன் கீழ் தங்கம் முழுமையாக பறிமுதல் செய்யப்படும். தடைசெய்யப்பட்ட பொருட்களை கடத்தியதற்காக, நபர் கைது செய்யப்படுவார். மேலும், நபர் அபராதம் விதிக்கப்படுவார், இது 1962 சுங்கச் சட்டம் பிரிவு 112 இன் கீழ் தங்கத்தின் மதிப்பில் 25% ஆக இருக்கும். ஐம்பது லட்சம், குற்றம் ஜாமீனில் வெளிவர முடியாததாகிவிடும்.';
      break;
    case 'article_16_tamil':
      botResponse = 'நீங்கள் ஒருவரை மருத்துவமனையில் அனுமதித்த விபத்தை ஏற்படுத்தினீர்கள், ஆனால் அவரைக் கொல்லவில்லை. இருப்பினும், நீங்கள் அவரைக் கொன்றிருக்கலாம், உங்கள் பொறுப்பற்ற நடத்தை சரிபார்க்கப்பட வேண்டும். அந்த நபர் இறந்திருந்தால், அது உங்கள் பங்கில் பொறுப்பற்றதாக இருந்திருக்காது - அவரது மரணம் அல்லது உயிர்வாழ்வது உங்கள் பங்கில் துரதிர்ஷ்டவசமாகவோ அல்லது அதிர்ஷ்டமாகவோ இருக்கும், அதே பாடத்தை நீங்கள் எந்த வழியிலும் கற்பிக்க வேண்டும். உண்மையில், நீங்கள் அவரது மரணத்தை ஏற்படுத்தியிருந்தால், அந்த அதிர்ச்சி மட்டுமே எதிர்காலத்தில் உங்களை நேராக்குவதற்கு போதுமானதாக இருக்கும், அதேசமயம் எந்தத் தீங்கும் செய்யாத விபத்து உங்களுக்கு அதிகம் கற்பிக்காது - அதாவது நீங்கள் பொறுப்பற்றவராக இருப்பீர்கள். எதிர்காலம். எனவே திருத்தம் குறைவாக இருக்க வேண்டும் என்பதற்கு எந்த தர்க்கரீதியான காரணமும் இல்லை.';
      break;
    case 'article_17_tamil':
      botResponse = 'பழக்கத்தில் ஈடுபடும் நபர்களின் கும்பலைச் சேர்ந்தவர் திருட்டு அல்லது கொள்ளை, மற்றும் கொள்ளை கும்பல் அல்ல, கடுமையான சிறைத்தண்டனையுடன் தண்டிக்கப்பட வேண்டும் ஏழு ஆண்டுகள் வரை நீட்டிக்கக்கூடிய ஒரு காலத்திற்கு, மேலும் அபராதம் விதிக்கப்படும்.';
      break;
    case 'article_18_tamil':
      botResponse = 'எந்த ஒரு மிருகத்தையும் கொன்று, விஷம் வைத்து, ஊனமாக்கி அல்லது பயனற்றதாக மாற்றுவதன் மூலம் தீங்கு விளைவிப்பவர் ஐந்து ஆண்டுகள் வரை நீட்டிக்கக்கூடிய ஒரு விளக்கத்துடன் கூடிய சிறைத்தண்டனை அல்லது அபராதம் அல்லது இரண்டும் சேர்த்து தண்டிக்கப்படுவார்.';
      break;
    case 'article_19_tamil':
      botResponse = 'சிறைத்தண்டனையுடன் கூடிய தண்டனை, இரண்டு ஆண்டுகள் வரை நீட்டிக்கப்படக்கூடிய ஒரு காலத்திற்கான விளக்கத்துடன் கூடிய சிறைத்தண்டனையுடன் தண்டிக்கப்பட வேண்டும், மேலும் அபராதம் விதிக்கப்படும்: செய்ய நினைத்த குற்றம் திருட்டாக இருந்தால், சிறைத்தண்டனையின் காலம் நீட்டிக்கப்படலாம். ஏழு ஆண்டுகள் வரை.';
      break;
    case 'article_20_tamil':
      botResponse = 'எவரேனும் தவறான சொத்துக் குறியைப் பயன்படுத்துபவர், அவர் மோசடி செய்யும் நோக்கமின்றி செயல்பட்டார் என்று நிரூபிக்கும் வரையில், ஒரு வருடம் வரை நீட்டிக்கக்கூடிய ஒரு விளக்கத்துடன் கூடிய சிறைத்தண்டனை, அல்லது அபராதம் அல்லது இரண்டும் தண்டனையாக விதிக்கப்படும்.';
      break;
    case 'article_21_tamil':
      botResponse = 'ஒரு எழுத்தராக, அதிகாரியாக அல்லது பணியாளராக இருந்து, அல்லது ஒரு எழுத்தர், அதிகாரி அல்லது வேலைக்காரன் என்ற தகுதியில் பணியமர்த்தப்பட்டவர் அல்லது செயல்படுபவர், வேண்டுமென்றே மற்றும் ஏமாற்றும் நோக்கத்துடன், ஏதேனும் புத்தகம், மின்னணு பதிவு, காகிதம், எழுத்து, அழித்தல், மாற்றுதல், சிதைத்தல் அல்லது பொய்யாக்குதல் மதிப்புமிக்க பாதுகாப்பு அல்லது கணக்கு அவரது முதலாளிக்கு சொந்தமானது அல்லது அவருக்கு சொந்தமானது, அல்லது அவர் தனது முதலாளியின் சார்பாக அல்லது வேண்டுமென்றே பெறப்பட்ட மற்றும் மோசடி செய்யும் நோக்கத்துடன், ஏதேனும் தவறான நுழைவுகளைச் செய்யச் செய்கிறது அல்லது ஊக்குவிக்கிறது, அல்லது அத்தகைய புத்தகம், மின்னணுப் பதிவு, காகிதம், எழுத்து, மதிப்புமிக்க பாதுகாப்பு அல்லது கணக்கு ஆகியவற்றிலிருந்து அல்லது அதில் உள்ள எந்தவொரு பொருளையும் விட்டுவிடுவது அல்லது மாற்றுவது அல்லது மாற்றுவது அல்லது மாற்றுவது, ஏழு வரை நீட்டிக்கப்படக்கூடிய ஒரு விளக்கத்தின் சிறைத்தண்டனையுடன் தண்டிக்கப்படும். ஆண்டுகள், அல்லது அபராதத்துடன், அல்லது இரண்டும்.';
      break;
    case 'article_22_tamil':
      botResponse = 'எவரேனும் ஒரு நபருக்குக் காயம் ஏற்படுத்தலாம் என்று எண்ணியோ அல்லது அறிந்தோ ஏதேனும் சொத்துக் குறியை நீக்கினாலோ, அழித்தாலோ, சிதைத்தாலோ அல்லது சேர்த்தாலோ, அவருக்கு ஓராண்டு வரை நீட்டிக்கப்படக்கூடிய சிறைத்தண்டனை விதிக்கப்படும். நன்றாக, அல்லது இரண்டும்.';
      break;
    case 'article_23_tamil':
      botResponse = 'ஒரு பொது ஊழியரால் பயன்படுத்தப்படும் எந்தவொரு சொத்து அடையாளத்தையும், அல்லது ஒரு குறிப்பிட்ட நபரால் அல்லது ஒரு குறிப்பிட்ட நேரத்தில் அல்லது இடத்தில், அல்லது அந்தச் சொத்து ஒரு குறிப்பிட்ட தரம் வாய்ந்ததாக இருப்பதைக் குறிக்க, அல்லது ஒரு பொது ஊழியரால் பயன்படுத்தப்படும் எந்த அடையாளத்தையும் போலியாக உருவாக்குபவர் ஒரு குறிப்பிட்ட அலுவலகம் மூலம் அனுப்பப்பட்டது, அல்லது அதற்கு விதிவிலக்கு பெற உரிமை உள்ளது, அல்லது போலியானது என்று தெரிந்தும் அத்தகைய அடையாளத்தை உண்மையானதாகப் பயன்படுத்தினால், மூன்று ஆண்டுகள் வரை நீட்டிக்கப்படக்கூடிய ஒரு விளக்கத்துடன் கூடிய சிறைத்தண்டனை விதிக்கப்படும். அபராதம் விதிக்கப்படும்.';
      break;
    case 'article_24_tamil':
      botResponse = 'ஒரு சொத்தின் அடையாளத்தை போலியாக மாற்றும் நோக்கத்திற்காக எந்த ஒரு டை, பிளேட் அல்லது பிற கருவியை தயாரித்து வைத்திருந்தாலும் அல்லது வைத்திருந்தாலும், அல்லது எந்தவொரு பொருட்களும் அவை சொந்தமில்லாத நபருக்கு சொந்தமானது என்பதைக் குறிக்கும் நோக்கத்திற்காக ஒரு சொத்து அடையாளத்தை வைத்திருந்தால், மூன்று ஆண்டுகள் வரை நீட்டிக்கப்படக்கூடிய ஒரு காலத்திற்கான விளக்கத்துடன் கூடிய சிறைத்தண்டனை அல்லது அபராதம் அல்லது இரண்டும் சேர்த்து தண்டிக்கப்பட வேண்டும்.';
      break;
    case 'article_25_tamil':
      botResponse = 'யாரேனும் விற்பனை செய்தாலும், அம்பலப்படுத்தினாலும், அல்லது விற்பனைக்கு வைத்திருந்தாலும், போலியான சொத்துக் குறியுடன் கூடிய எந்தப் பொருட்களையும் அல்லது பொருட்களையும், அதே அல்லது ஏதேனும் ஒரு வழக்கின் மீது ஒட்டப்பட்ட அல்லது ஈர்க்கப்பட்ட வழக்கு.';
      break;
      case 'article_26_tamil':
        botResponse = 'யாரேனும் வேண்டுமென்றே எந்த விதத்திலும் அவமதித்து, அதன்மூலம் யாரேனும் ஒருவரைத் தூண்டிவிடுபவர், அத்தகைய ஆத்திரமூட்டல் பொது அமைதியைக் குலைக்கும் அல்லது வேறு ஏதேனும் குற்றத்தைச் செய்யக்கூடும் என்று எண்ணியோ அல்லது அறிந்தோ, அவருக்கு விளக்கத்துடன் கூடிய சிறைத்தண்டனை விதிக்கப்படும். இரண்டு வருடங்கள், அல்லது அபராதம் அல்லது இரண்டையும் சேர்த்து நீட்டிக்கக்கூடிய ஒரு காலம்.';
        break;
      case 'article_27_tamil':
        botResponse = 'மதம், இனம், பிறந்த இடம் ஆகியவற்றின் அடிப்படையில் உருவாக்க அல்லது ஊக்குவிக்கும் நோக்கத்துடன் மின்னணு வழிமுறைகள் உட்பட தவறான தகவல், வதந்தி அல்லது ஆபத்தான செய்திகள் அடங்கிய அறிக்கை அல்லது அறிக்கையை வெளியிடுபவர் அல்லது பரப்புபவர். , வசிப்பிடம், மொழி, சாதி அல்லது சமூகம் அல்லது வேறு ஏதேனும் காரணங்களுக்காக, பல்வேறு மத, இன, மொழி அல்லது பிராந்திய குழுக்கள் அல்லது சாதிகள் அல்லது சமூகங்களுக்கு இடையே பகை, வெறுப்பு அல்லது தீய உணர்வுகள் இருந்தால், மூன்று ஆண்டுகள் வரை சிறைத்தண்டனை விதிக்கப்படும், அல்லது நன்றாக, அல்லது இரண்டையும் சேர்த்து.';
        break;
      case 'article_28_tamil':
        botResponse = 'ஏழு ஆண்டுகள் வரை சிறைத்தண்டனை மற்றும் அபராதம் தண்டனையாக குறிப்பிடப்பட்டுள்ளது.';
        break;
      case 'article_29_tamil':
        botResponse = 'ஏழாண்டுகளுக்குக் குறையாத, ஆனால் ஆயுள் தண்டனை வரை நீட்டிக்கக் கூடிய சிறைத்தண்டனை.';
        break;
      case 'article_30_tamil':
        botResponse = 'ஏழாண்டுகளுக்குக் குறையாத ஆனால் ஆயுள் தண்டனை வரை நீட்டிக்கக் கூடிய ஒரு காலச் சிறைத்தண்டனை.';
        break;
      case 'article_31_tamil':
        botResponse = 'தண்டனை 10 ஆண்டுகள் வரை நீட்டிக்கப்படலாம் மற்றும் பாதிக்கப்பட்டவருக்கு காயம் ஏற்பட்டால், அதிகபட்ச தண்டனை ஆயுள் தண்டனையாகும்.';
        break;
      case 'article_32_tamil':
        botResponse = 'ஒரு வருடம் வரை நீட்டிக்கக்கூடிய ஒரு காலத்திற்கான எளிய சிறைத்தண்டனை அல்லது அபராதம் அல்லது இரண்டும் அல்லது சமூக சேவையுடன்.';
        break;
      case 'article_33_tamil':
        botResponse = 'பிரிவு 115 தானாக முன்வந்து ஒரு வருடத்திற்கு நீட்டிக்கக்கூடிய ஒரு காலத்திற்கான விளக்கத்தை காயப்படுத்துகிறது, அல்லது ஆயிரம் ரூபாய் வரை நீட்டிக்கக்கூடிய அபராதம் அல்லது இரண்டும்.';
        break;
      case 'article_34_tamil':
        botResponse = 'பிரிவு 303 திருட்டு, மூன்று ஆண்டுகள் வரை நீட்டிக்கக்கூடிய ஒரு விளக்கத்தின் சிறைத்தண்டனை, அல்லது அபராதம் அல்லது இரண்டும்.';
        break;
      case 'article_35_tamil':
        botResponse = 'பிரிவு 317 கொள்ளை, பத்து ஆண்டுகள் வரை நீட்டிக்கக்கூடிய கடுமையான சிறைத்தண்டனை மற்றும் அபராதம் விதிக்கப்படும்.';
        break;
      case 'article_36_tamil':
        botResponse = 'ஆயுள் தண்டனை, அல்லது பத்து ஆண்டுகள் வரை நீட்டிக்கக்கூடிய கடுமையான சிறைத்தண்டனை மற்றும் அபராதம் விதிக்கப்படும்.';
        break;
      case 'article_37_tamil':
        botResponse = 'பிரிவு 318 ஏமாற்றுதல், ஏமாற்றுதல் அடிப்படைக் குற்றமாக மூன்று ஆண்டுகள் வரை சிறைத் தண்டனை, அபராதம் அல்லது இரண்டும் விதிக்கப்படும்.';
        break;
      case 'article_38_tamil':
        botResponse = 'ஒரு வருடம் வரையிலான சிறைத்தண்டனை, அல்லது ஐயாயிரம் ரூபாய் வரை அபராதம் அல்லது இரண்டும்.';
        break;
      case 'article_39_tamil':
        botResponse = '7 ஆண்டுகள் வரை நீட்டிக்கக்கூடிய சிறைத்தண்டனை.';
        break;
      case 'article_40_tamil':
        botResponse = 'இரண்டு ஆண்டுகள் வரை நீட்டிக்கக் கூடிய சிறைத்தண்டனை, அல்லது அபராதம் அல்லது இரண்டும் சேர்த்து.';
        break;
      case 'article_41_tamil':
        botResponse = 'ஐந்து ஆண்டுகள் வரையிலான சிறைத்தண்டனை, அல்லது அபராதம் அல்லது இரண்டும்.';
        break;
      case 'article_42_tamil':
        botResponse = 'குடிபோதையில், பொது இடத்திலோ அல்லது எந்த இடத்திலோ அவர் நுழைந்து அத்துமீறலாகத் தோன்றி, எவருக்கும் தொந்தரவை ஏற்படுத்தும் வகையில் நடந்து கொண்டால், அவருக்கு சிறைத் தண்டனை விதிக்கப்படும். இருபத்தி நான்கு மணிநேரம் வரை நீட்டிக்கக்கூடிய ஒரு காலத்திற்கு, அல்லது ஆயிரம் ரூபாய் வரை நீட்டிக்கக்கூடிய அபராதம் அல்லது இரண்டும் அல்லது சமூக சேவையுடன்.';
        break;
      case 'article_43_tamil':
        botResponse = 'இளமையின் காரணமாகவோ, மனநிலை சரியில்லாத காரணத்தாலோ, நோய் அல்லது உடல் பலவீனம் காரணமாகவோ, உதவியற்றவராகவோ அல்லது தனது சொந்தப் பாதுகாப்பை வழங்க இயலாமையாகவோ இருக்கும் எந்தவொரு நபரின் தேவைகளையும் பூர்த்தி செய்ய சட்டப்பூர்வமான ஒப்பந்தத்திற்குக் கட்டுப்பட்டவர். அல்லது தனது சொந்த தேவைகளை வழங்கினால், தானாக முன்வந்து அவ்வாறு செய்யத் தவறினால், மூன்று மாதங்கள் வரை நீட்டிக்கக்கூடிய ஒரு விளக்கத்தின் சிறைத்தண்டனை அல்லது ஐயாயிரம் ரூபாய் வரை நீட்டிக்கக்கூடிய அபராதம் அல்லது இரண்டும் தண்டனையாக விதிக்கப்படும்.';
        break;
      case 'article_44_tamil':
        botResponse = 'ஒரு நபர், அவர் விரும்புகிற அல்லது ஏற்படுத்தக்கூடியதாகத் தெரிந்த எதையும் செய்வதன் மூலம் மரணம், எந்தவொரு நபரின் மரணத்தையும் ஏற்படுத்துவதன் மூலம் குற்றமற்ற கொலையைச் செய்கிறது அவர் செய்த குற்றமிழைக்கக்கூடிய கொலைக்கு காரணமானவராக இருக்க வேண்டும் என்று நினைக்கவில்லை அல்லது தெரியாது குற்றவாளியின் மரணத்தை அவர் ஏற்படுத்தியிருந்தால் அது எப்படி இருந்திருக்கும் என்பது பற்றிய விளக்கம் யாருடைய மரணத்தை அவர் உத்தேசித்திருந்தாரோ அல்லது தன்னைத் தானே ஏற்படுத்தக்கூடியதாக அறிந்தவர்.';
        break;
      case 'article_45_tamil':
        botResponse = 'யாரேனும் சைகை செய்தாலும், அல்லது எந்தத் தயாரிப்பை நோக்கமாகவோ அல்லது தெரிந்தே செய்தாலும் அத்தகைய சைகை அல்லது தயாரிப்பு, அங்கு இருக்கும் எந்தவொரு நபரையும் அவர் புரிந்து கொள்ள வைக்கும் அந்த சைகை அல்லது தயாரிப்பை யார் செய்கிறார்களோ அந்த நபருக்கு குற்றவியல் சக்தியைப் பயன்படுத்தப் போகிறார் என்று கூறப்படுகிறது ஒரு தாக்குதலை செய்யுங்கள்.';
        break;
      case 'article_46_tamil':
        botResponse = 'யாரேனும் சைகை செய்தாலும், அல்லது தயாரிப்பின் நோக்கம் அல்லது தயாரிப்பால், அந்த சைகையை அல்லது தயாரிப்பை செய்பவர் அந்த நபருக்கு கிரிமினல் பலத்தை பிரயோகிக்கப் போகிறார் என்று அங்குள்ள எந்தவொரு நபரும் கண்டுகொள்ளச் செய்யும். தாக்குதல்.';
        break;
      case 'article_47_tamil':
        botResponse = 'யாரேனும், இல்லாத ஒரு நபர், ஒரு தூண்டுதலாக தண்டிக்கப்பட வேண்டியவர், தூண்டுதலின் விளைவாக அவர் தண்டிக்கப்படக்கூடிய செயல் அல்லது குற்றம் செய்யப்படும்போது, ​​அவர் அத்தகைய செயலை அல்லது குற்றத்தைச் செய்ததாகக் கருதப்படுவார்.';
        break;
      case 'article_48_tamil':
        botResponse = 'மரண தண்டனை அல்லது ஆயுள் சிறைத்தண்டனையுடன் கூடிய ஒரு குற்றத்திற்கு உடந்தையாக இருப்பவர், அந்தத் தூண்டுதலின் விளைவாக அந்தக் குற்றத்தைச் செய்யாமல் இருந்தால், அத்தகைய தூண்டுதலுக்கான தண்டனைக்கான வெளிப்படையான ஏற்பாடு எதுவும் இந்த சந்ஹிதாவின் கீழ் செய்யப்படவில்லை என்றால், சிறைத்தண்டனையுடன் தண்டிக்கப்பட வேண்டும். ஏழு ஆண்டுகள் வரை நீட்டிக்கக்கூடிய ஒரு காலத்திற்கான விளக்கம், மேலும் அபராதம் விதிக்கப்படலாம்; மேலும், தூண்டுதலின் விளைவாக, எந்த ஒரு நபருக்குப் புண்படுத்தும் செயலுக்குத் தூண்டுகோல் பொறுப்பேற்றுக் கொண்டிருக்கிறாரோ, அது செய்யப்பட்டால், ஊக்குவிப்பவர் பதினான்கு ஆண்டுகள் வரை நீட்டிக்கப்படக்கூடிய ஒரு விளக்கத்தின் சிறைத்தண்டனைக்கு ஆளாக நேரிடும், மேலும் அபராதம் விதிக்கப்படும்.';
        break;
      case 'article_49_tamil':
        botResponse = 'பொது மக்களால் அல்லது பத்துக்கும் மேற்பட்ட நபர்களின் எண்ணிக்கை அல்லது வகுப்பினரால் ஒரு குற்றத்திற்கு உடந்தையாக இருப்பவர், ஏழு ஆண்டுகள் வரை நீட்டிக்கக்கூடிய ஒரு விளக்கத்துடன் கூடிய சிறைத்தண்டனை மற்றும் அபராதத்துடன் தண்டிக்கப்படுவார்.';
        break;
      case 'article_50_tamil':
        botResponse = 'கிரிமினல் சதியில் பங்காளியாக இருப்பவர், மரண தண்டனை, ஆயுள் தண்டனை அல்லது இரண்டு ஆண்டுகள் அல்லது அதற்கு மேல் கடுங்காவல் சிறைத்தண்டனை விதிக்கக்கூடிய குற்றத்தைச் செய்தல், அத்தகைய சதித் தண்டனைக்கு இந்த சன்ஹிதாவில் வெளிப்படையான ஏற்பாடு எதுவும் செய்யப்படவில்லை. , அவர் அத்தகைய குற்றத்திற்கு உடந்தையாக இருந்தால் அதே முறையில் தண்டிக்கப்பட வேண்டும்';
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
      botResponse = 'इस अधिनियम के तहत, अध्याय 5 और अधिक महत्वपूर्ण धारा 25, विभिन्न संदर्भों के तहत अवैध हथियारों से निपटने में अपराधों के लिए दंड से संबंधित है, जिसमें ज्यादातर 7 साल से 14 साल तक की कैद और जुर्माना भी शामिल है।  ';
      break;
    case 'article_7_hindi':
      botResponse = '12 वर्ष से कम उम्र के बच्चे को छोड़ने वाले माता-पिता या अभिभावक को 7 साल तक की कैद, जुर्माना या दोनों की सजा हो सकती है।.';
      break;
    case 'article_8_hindi':
      botResponse = '6 महीने तक की कैद, 5,000 रुपये तक का जुर्माना या दोनों। असुरक्षित भोजन के निर्माण, भंडारण, बिक्री पर आजीवन कारावास और 10 लाख रुपये तक का जुर्माना। क्षति के अनुपात में सज़ा.';
      break;
    case 'article_9_hindi':
      botResponse = 'मिलावट करने पर एक साल तक की कैद, 5,000 रुपये तक का जुर्माना या दोनों से दंडित किया जा सकता है। मिलावटी दवाओं की बिक्री पर 6 महीने तक की कैद, 5,000 रुपये तक का जुर्माना या दोनों का प्रावधान है।';
      break;
    case 'article_10_hindi':
      botResponse = 'एक साल तक की कैद, जुर्माना या दोनों। 3 साल तक की कैद और 2,000 रुपये तक का जुर्माना।';
      break;
    case 'article_11_hindi':
      botResponse = 'पहले अपराध के लिए सज़ा: 6 महीने तक कारावास, और/या 5,000 रुपये तक जुर्माना। तीन साल के भीतर अगला अपराध: 2 साल तक की कैद और/या 10,000 रुपये तक का जुर्माना। संज्ञेय, जमानतीय, समझौता योग्य।';
      break;
    case 'article_12_hindi':
      botResponse = 'इस अधिनियम के तहत, अध्याय 5 और अधिक महत्वपूर्ण धारा 25, विभिन्न संदर्भों के तहत अवैध हथियारों से निपटने में अपराधों के लिए दंड से संबंधित है, जिसमें ज्यादातर 7 साल से 14 साल तक की कैद और जुर्माना भी शामिल है।';
      break;
    case 'article_13_hindi':
      botResponse = 'किशोर न्याय का अधिनियम सोलह से अठारह वर्ष के बीच के नाबालिग को वयस्क मानता है यदि उसने कानून के उल्लंघन में कोई जघन्य अपराध किया है। नाबालिग जिसने गंभीर अपराध किया है उस पर वयस्क के रूप में मुकदमा चलाया जा सकता है यदि उसे इक्कीस वर्ष की आयु के बाद पकड़ा गया हो।';
      break;
    case 'article_14_hindi':
      botResponse = 'भारतीय कानून के तहत, तस्करी को सीमा शुल्क अधिनियम, 1962 की धारा 2(39) में परिभाषित किया गया है, किसी भी सामान के संबंध में कोई भी गतिविधि, इसका मतलब कोई भी कार्य या चूक है जो सीमा शुल्क की धारा 111 या धारा 113 के तहत ऐसे सामान को जब्त करने के लिए उत्तरदायी होगा। अधिनियम, 1962. सीमा शुल्क अधिनियम, 1962 के अनुसार अधिकतम सज़ा 7 वर्ष कारावास है।';
      break;
    case 'article_15_hindi':
      botResponse = 'उपरोक्त प्रावधानों का कोई भी उल्लंघन विदेश व्यापार (विकास और विनियमन) अधिनियम, 1992 और सामान नियम, 2016 के प्रावधानों का उल्लंघन भी माना जाएगा। साथ ही, जब उपरोक्त शर्त पूरी नहीं होती है, तो लाया गया सोना निषिद्ध माल बन जाता है। इस तरह के उल्लंघन पर, सीमा शुल्क अधिनियम, 1962 की धारा 111 (डी), (एल) और (एम) के तहत सोना पूरी तरह से जब्त किया जा सकता है। प्रतिबंधित वस्तुओं की तस्करी के लिए, व्यक्ति को गिरफ्तार किया जा सकता है। इसके अलावा, व्यक्ति दंड के लिए उत्तरदायी है, जो सीमा शुल्क अधिनियम, 1962 की धारा 112 के तहत सोने के मूल्य का लगभग 25% होगा। यदि सोने पर शुल्क चोरी रुपये से अधिक है। पचास लाख, अपराध गैर-जमानती हो जाता है।';
      break;
    case 'article_16_hindi':
      botResponse = 'आपने एक दुर्घटना कारित की जिससे कोई व्यक्ति अस्पताल में भर्ती हुआ, लेकिन उसकी मौत नहीं हुई। फिर भी, आप उसे मार सकते थे, और आपके लापरवाह व्यवहार की जाँच की जानी चाहिए। यदि वह व्यक्ति मर गया होता, तो यह आपकी ओर से कोई लापरवाही नहीं होती - उसकी मृत्यु या जीवित रहना आपके लिए दुर्भाग्यपूर्ण या भाग्यशाली होता, और यह वही सबक है जिसे आपको किसी भी तरह से सिखाया जाना चाहिए। वास्तव में, यदि आपने उसकी मृत्यु का कारण बना दिया था, तो वह सदमा ही आपको भविष्य में ठीक करने के लिए पर्याप्त हो सकता है, जबकि एक दुर्घटना जिसमें कोई नुकसान नहीं होता है वह आपको बहुत कुछ नहीं सिखाती है - जिसका अर्थ है कि आपके उतने ही लापरवाह होने की अधिक संभावना होगी भविष्य। इसलिए कोई तार्किक कारण नहीं है कि सुधार कम गंभीर क्यों होना चाहिए।';
      break;
    case 'article_17_hindi':
      botResponse = 'जो कोई भी आदतन अपराध करने वाले व्यक्तियों के किसी गिरोह से संबंधित हो चोरी या डकैती और डकैतों का गिरोह नहीं होने पर कठोर कारावास से दंडित किया जाएगा जिसकी अवधि सात वर्ष तक हो सकती है और जुर्माना भी लगाया जा सकता है।';
      break;
    case 'article_18_hindi':
      botResponse = 'जो कोई भी किसी जानवर को मारकर, जहर देकर, अपंग बनाकर या बेकार करके शरारत करेगा, उसे पांच साल तक की कैद या जुर्माना या दोनों से दंडित किया जाएगा।';
      break;
    case 'article_19_hindi':
      botResponse = 'कारावास से दंडनीय, किसी एक अवधि के लिए कारावास से दंडित किया जाएगा जिसे दो वर्ष तक बढ़ाया जा सकता है, और जुर्माने के लिए भी उत्तरदायी होगा: बशर्ते कि यदि किया जाने वाला अपराध चोरी है, तो कारावास की अवधि बढ़ाई जा सकती है सात साल तक.';
      break;
    case 'article_20_hindi':
      botResponse = 'जो कोई भी किसी झूठे संपत्ति चिह्न का उपयोग करता है, जब तक कि वह यह साबित नहीं कर देता कि उसने धोखाधड़ी के इरादे से काम किया है, उसे एक वर्ष तक की कैद या जुर्माना या दोनों से दंडित किया जा सकता है।';
      break;
    case 'article_21_hindi':
      botResponse = 'जो कोई, एक क्लर्क, अधिकारी या नौकर होने के नाते, या एक क्लर्क, अधिकारी या नौकर की क्षमता में नियोजित या कार्य करता है, जानबूझकर और धोखाधड़ी के इरादे से, किसी भी किताब, इलेक्ट्रॉनिक रिकॉर्ड, कागज, लेखन को नष्ट, परिवर्तित, विकृत या मिथ्या बनाता है, मूल्यवान सुरक्षा या खाता जो उसके नियोक्ता का है या उसके कब्जे में है, या उसके द्वारा अपने नियोक्ता के लिए या उसकी ओर से प्राप्त किया गया है, या जानबूझकर, और धोखाधड़ी के इरादे से, कोई गलत प्रविष्टि करता है या करने के लिए उकसाता है, या ऐसी किसी पुस्तक, इलेक्ट्रॉनिक रिकॉर्ड, कागज, लेखन, मूल्यवान सुरक्षा या खाते से किसी विशेष सामग्री को हटाने या बदलने या बदलने के लिए उकसाने पर, किसी अवधि के लिए कारावास की सजा दी जाएगी जिसे सात तक बढ़ाया जा सकता है। साल, या जुर्माना, या दोनों।';
      break;
    case 'article_22_hindi':
      botResponse = 'जो कोई किसी संपत्ति चिह्न को इस आशय से या यह जानते हुए कि उसके द्वारा किसी व्यक्ति को चोट लग सकती है, हटाएगा, नष्ट करेगा, विरूपित करेगा या उसमें कुछ जोड़ देगा, उसे एक वर्ष तक की अवधि के लिए कारावास या कारावास से दंडित किया जाएगा। ठीक है, या दोनों के साथ।';
      break;
    case 'article_23_hindi':
      botResponse = 'जो कोई किसी लोक सेवक द्वारा उपयोग किए गए किसी संपत्ति चिह्न, या किसी लोक सेवक द्वारा उपयोग किए गए किसी चिह्न की नकल करता है, जिससे यह पता चलता है कि किसी संपत्ति का निर्माण किसी विशेष व्यक्ति द्वारा या किसी विशेष समय या स्थान पर किया गया है, या संपत्ति एक विशेष गुणवत्ता की है या है किसी विशेष कार्यालय के माध्यम से पारित किया गया है, या यह किसी भी छूट का हकदार है, या नकली होने के बारे में जानते हुए भी ऐसे किसी भी निशान को असली के रूप में उपयोग करता है, तो उसे एक अवधि के लिए कारावास की सजा दी जाएगी जिसे तीन साल तक बढ़ाया जा सकता है, और साथ ही उसे दंडित भी किया जाएगा। जुर्माने का भागी होगा.';
      break;
    case 'article_24_hindi':
      botResponse = 'जो कोई किसी संपत्ति चिह्न की जालसाजी के प्रयोजन से कोई डाई, प्लेट या अन्य उपकरण बनाता है या अपने कब्जे में रखता है, या यह दर्शाने के प्रयोजन से कोई संपत्ति चिह्न अपने कब्जे में रखता है कि कोई सामान उस व्यक्ति का है जिसका वह नहीं है, उसे किसी एक अवधि के लिए कारावास, जिसे तीन साल तक बढ़ाया जा सकता है, या जुर्माना, या दोनों से दंडित किया जाएगा।';
      break;
    case 'article_25_hindi':
      botResponse = 'जो कोई किसी सामान या चीजों को बेचता है, या उजागर करता है, या बिक्री के लिए अपने कब्जे में रखता है, जिस पर नकली संपत्ति का निशान चिपका हुआ है या उस पर या किसी भी मामले में अंकित है.';
      break;
      case 'article_26_hindi':
        botResponse = 'जो कोई जानबूझकर किसी भी तरीके से अपमान करता है, और इस तरह किसी व्यक्ति को उकसाता है, यह इरादा रखते हुए या यह जानते हुए कि इस तरह के उकसावे से उसे सार्वजनिक शांति भंग हो जाएगी, या कोई अन्य अपराध हो जाएगा, उसे दोनों में से किसी भी तरह के कारावास से दंडित किया जाएगा। जिसकी अवधि दो वर्ष तक बढ़ाई जा सकती है, या जुर्माना, या दोनों से दंडित किया जा सकता है।';
        break;
      case 'article_27_hindi':
        botResponse = 'जो कोई धर्म, जाति, जन्म स्थान के आधार पर गलत जानकारी, अफवाह या चौंकाने वाली खबरें, जिनमें इलेक्ट्रॉनिक माध्यम भी शामिल हैं, बनाने या बढ़ावा देने के इरादे से कोई बयान या रिपोर्ट बनाता है, प्रकाशित या प्रसारित करता है, या जिसके बनाने या बढ़ावा देने की संभावना है। , निवास, भाषा, जाति या समुदाय या किसी भी अन्य आधार पर, विभिन्न धार्मिक, नस्लीय, भाषाई या क्षेत्रीय समूहों या जातियों या समुदायों के बीच शत्रुता, घृणा या द्वेष की भावना, कारावास से दंडित किया जाएगा जिसे तीन साल तक बढ़ाया जा सकता है, या जुर्माने से या दोनों से।';
        break;
      case 'article_28_hindi':
        botResponse = 'सजा के तौर पर सात साल तक की जेल और जुर्माने का प्रावधान किया गया है.';
        break;
      case 'article_29_hindi':
        botResponse = 'ऐसी अवधि के लिए कारावास जो सात वर्ष से कम नहीं होगी लेकिन जिसे आजीवन कारावास तक बढ़ाया जा सकता है.';
        break;
      case 'article_30_hindi':
        botResponse = 'ऐसी अवधि के लिए कारावास जो सात वर्ष से कम नहीं होगी लेकिन जिसे आजीवन कारावास तक बढ़ाया जा सकता है.';
        break;
      case 'article_31_hindi':
        botResponse = 'सज़ा 10 साल तक बढ़ सकती है और अगर पीड़ित को चोट पहुंची है तो अधिकतम सज़ा आजीवन कारावास है';
        break;
      case 'article_32_hindi':
        botResponse = 'एक अवधि के लिए साधारण कारावास जिसे एक वर्ष तक बढ़ाया जा सकता है या जुर्माना या दोनों या सामुदायिक सेवा के साथ दंडित किया जा सकता है.';
        break;
      case 'article_32_hindi':
        botResponse = 'एक अवधि के लिए साधारण कारावास जिसे एक वर्ष तक बढ़ाया जा सकता है या जुर्माना या दोनों या सामुदायिक सेवा के साथ दंडित किया जा सकता है।';
        break;
      case 'article_33_hindi':
        botResponse = 'धारा 115 स्वेच्छा से किसी भी तरह की चोट पहुंचाने पर एक साल तक का जुर्माना या एक हजार रुपए तक का जुर्माना या दोनों हो सकते हैं।';
        break;
      case 'article_34_hindi':
        botResponse = 'धारा 303 चोरी, एक अवधि के लिए कारावास जिसे तीन साल तक बढ़ाया जा सकता है, या जुर्माना, या दोनों से दंडित किया जा सकता है';
        break;
      case 'article_35_hindi':
        botResponse = 'धारा 317 डकैती, दस वर्ष तक का कठोर कारावास और जुर्माना भी देना होगा।';
        break;
      case 'article_36_hindi':
        botResponse = 'आजीवन कारावास या दस वर्ष तक का कठोर कारावास और जुर्माना भी हो सकता है।';
        break;
      case 'article_37_hindi':
        botResponse = 'धारा 318 धोखाधड़ी, धोखाधड़ी का मूल अपराध तीन साल तक की जेल, जुर्माना या दोनों से दंडनीय है।';
        break;
      case 'article_38_hindi':
        botResponse = 'एक साल तक की कैद, या पांच हजार रुपये तक जुर्माना, या दोनों.';
        break;
      case 'article_39_hindi':
        botResponse = '7 वर्ष तक की अवधि के लिए कारावास.';
        break;
      case 'article_40_hindi':
        botResponse = 'एक अवधि के लिए कारावास जिसे दो वर्ष तक बढ़ाया जा सकता है, या जुर्माना, या दोनों.';
        break;
      case 'article_41_hindi':
        botResponse = 'पाँच वर्ष तक की अवधि के लिए कारावास, या जुर्माना, या दोनों.';
        break;
      case 'article_42_hindi':
        botResponse = 'जो कोई नशे की हालत में किसी सार्वजनिक स्थान या किसी ऐसे स्थान पर दिखाई देता है जहां प्रवेश करना उसके लिए अपराध है, और वहां इस तरह का व्यवहार करता है कि किसी भी व्यक्ति को परेशानी हो, उसे साधारण कारावास से दंडित किया जाएगा। एक अवधि के लिए जिसे चौबीस घंटे तक बढ़ाया जा सकता है, या जुर्माना जो एक हजार रुपये तक बढ़ाया जा सकता है, या दोनों से या सामुदायिक सेवा से दंडित किया जा सकता है.';
        break;
      case 'article_43_hindi':
        botResponse = 'जो कोई, किसी ऐसे व्यक्ति की देखभाल करने या उसकी ज़रूरतों को पूरा करने के लिए एक वैध अनुबंध से बंधा हुआ है, जो युवावस्था, या मानसिक रूप से अस्वस्थता, या किसी बीमारी या शारीरिक कमजोरी के कारण, अपनी सुरक्षा प्रदान करने में असहाय या असमर्थ है। या अपनी जरूरतों को पूरा करने के लिए, स्वेच्छा से ऐसा करने से चूक जाता है, तो उसे किसी एक अवधि के लिए कारावास की सजा दी जाएगी जिसे तीन महीने तक बढ़ाया जा सकता है, या जुर्माना जो पांच हजार रुपये तक बढ़ाया जा सकता है, या दोनों से दंडित किया जाएगा.';
        break;
      case 'article_44_hindi':
        botResponse = 'यदि कोई व्यक्ति, ऐसा कुछ भी करके जिसका वह इरादा रखता है या जानता है कि मृत्यु कारित होने की संभावना है, किसी ऐसे व्यक्ति की मृत्यु कारित करके गैर इरादतन हत्या करता है, जिसकी मृत्यु न तो वह चाहता है और न ही जानता है कि मौत कारित होने की संभावना है, तो यह गैर इरादतन हत्या है। अपराधी उस विवरण का है जो तब होता यदि उसने उस व्यक्ति की मृत्यु कारित की होती जिसकी मृत्यु वह चाहता था या जानता था कि वह मृत्यु कारित करने वाला है।';
        break;
      case 'article_45_hindi':
        botResponse = 'जो कोई कोई इशारा करता है, या कोई तैयारी करता है, यह इरादा रखता है या यह जानता है कि ऐसा इशारा या तैयारी किसी भी उपस्थित व्यक्ति को यह आशंका पैदा कर देगी कि वह इशारा या तैयारी करने वाला उस व्यक्ति पर आपराधिक बल का प्रयोग करने वाला है, ऐसा कहा जाता है। हमला';
        break;
      case 'article_46_hindi':
        botResponse = 'जो कोई कोई इशारा करता है, या कोई तैयारी करता है, यह इरादा रखता है या यह जानता है कि ऐसा इशारा या तैयारी किसी भी उपस्थित व्यक्ति को यह आशंका पैदा कर देगी कि वह इशारा या तैयारी करने वाला उस व्यक्ति पर आपराधिक बल का प्रयोग करने वाला है, ऐसा कहा जाता है। हमला';
        break;
      case 'article_47_hindi':
        botResponse = 'जब भी कोई व्यक्ति, जो अनुपस्थित है, दुष्प्रेरक के रूप में दंडित किया जा सकता है, उस समय उपस्थित होता है जब वह कार्य या अपराध जिसके लिए वह दुष्प्रेरक के परिणामस्वरूप दंडनीय होगा, उपस्थित होता है, तो उसे ऐसा कार्य या अपराध किया हुआ माना जाएगा।';
        break;
      case 'article_48_hindi':
        botResponse = 'जो कोई मृत्यु या आजीवन कारावास से दंडनीय किसी अपराध को करने के लिए दुष्प्रेरित करता है, यदि वह अपराध दुष्प्रेरण के परिणामस्वरूप नहीं किया गया है, और इस संहिता के तहत ऐसे दुष्प्रेरण की सजा के लिए कोई स्पष्ट प्रावधान नहीं किया गया है, तो उसे कारावास से दंडित किया जाएगा। या तो एक अवधि के लिए विवरण जिसे सात साल तक बढ़ाया जा सकता है, और जुर्माना भी लगाया जा सकता है; और यदि कोई ऐसा कार्य किया जाता है जिसके लिए दुष्प्रेरक दुष्प्रेरण के परिणामस्वरूप उत्तरदायी है, और जो किसी व्यक्ति को चोट पहुंचाता है, तो दुष्प्रेरक को चौदह वर्ष तक की अवधि के लिए कारावास की सजा दी जाएगी, और साथ ही उसे दंडित भी किया जाएगा। जुर्माने का भागी होगा.';
        break;
      case 'article_49_hindi':
        botResponse = 'जो कोई भी आम जनता द्वारा या दस से अधिक व्यक्तियों की संख्या या वर्ग द्वारा अपराध करने के लिए उकसाता है, उसे किसी एक अवधि के लिए कारावास जिसे सात साल तक बढ़ाया जा सकता है और जुर्माने से दंडित किया जाएगा।';
        break;
      case 'article_50_hindi':
        botResponse = 'जो कोई मृत्युदंड, आजीवन कारावास या दो साल या उससे अधिक की अवधि के लिए कठोर कारावास से दंडनीय अपराध करने के लिए आपराधिक साजिश का एक पक्ष है, जहां इस संहिता में ऐसी साजिश की सजा के लिए कोई स्पष्ट प्रावधान नहीं किया गया है। को उसी तरह दंडित किया जाएगा जैसे कि उसने ऐसे अपराध के लिए उकसाया हो.';
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
