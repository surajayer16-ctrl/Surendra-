import { ExamQuestionMCQ, VivaQuestion, SubjectiveQuestion } from '../types';

export const modelExamLevel2MCQs: ExamQuestionMCQ[] = [
  {
    id: 1,
    questionNepali: 'Fiber to the Home (FTTH) मा कुन केबल प्रयोग गरिन्छ ?',
    options: { A: 'Copper cable', B: 'Optical fiber cable', C: 'Aluminium cable', D: 'Electrical cable' },
    correctAnswer: 'B',
    explanationNepali: 'FTTH मा ग्राहकको घरसम्म उच्च गतिको इन्टरनेट र भ्वाइस सेवा दिन Optical fiber cable प्रयोग गरिन्छ।',
    category: 'fiber'
  },
  {
    id: 2,
    questionNepali: 'ADSL को अधिकतम रिसिभ गति कतिसम्म हुन्छ ?',
    options: { A: '8 MBPS', B: '10 MBPS', C: '12 MBPS', D: '14 MBPS' },
    correctAnswer: 'A',
    explanationNepali: 'परम्परागत ADSL मा अधिकतम डाउनलोड गति ८ Mbps सम्म हुन्छ।',
    category: 'telecom'
  },
  {
    id: 3,
    questionNepali: 'पुनः प्रयोग गर्न सकिने ब्याट्री तलका मध्ये कुन हो ?',
    options: { A: 'Rechargeable Battery', B: 'Secondary Battery', C: 'Reusable Battery', D: 'Primary Battery' },
    correctAnswer: 'B',
    explanationNepali: 'विद्युतको रासायनिक प्रक्रिया उल्ट्याएर पुनः चार्ज गर्न मिल्ने ब्याट्रीलाई Secondary Battery भनिन्छ।',
    category: 'electrical'
  },
  {
    id: 4,
    questionNepali: 'Central Processing Unit (CPU) मा तलका के के पर्दछन् ?',
    options: { A: 'Control unit, input device, output device', B: 'ALU, memory unit, output control unit', C: 'Control unit, ALU, memory unit', D: 'Output device, input device' },
    correctAnswer: 'C',
    explanationNepali: 'CPU मा मुख्यतया Control Unit (CU), Arithmetic Logic Unit (ALU) र Memory Unit पर्दछन्।',
    category: 'networking'
  },
  {
    id: 5,
    questionNepali: 'ADSL मा अति नराम्रो Signal to Noise Ratio (SNR) कुन मानिन्छ ?',
    options: { A: '40 dB भन्दा कम', B: '30 dB भन्दा कम', C: '20 dB भन्दा कम', D: '10 dB भन्दा कम' },
    correctAnswer: 'D',
    explanationNepali: '१० dB भन्दा कम SNR भएमा लाइनमा अत्यधिक न्वाइज आई इन्टरनेट बारम्बार ड्रप हुन्छ।',
    category: 'telecom'
  },
  {
    id: 6,
    questionNepali: 'Primary network र Secondary network को अनुपात कति राखिन्छ ?',
    options: { A: '1:1:3', B: '1:1:4', C: '1:1:5', D: '1:1:6' },
    correctAnswer: 'A',
    explanationNepali: 'नेपाल टेलिकममा प्राथमिक नेटवर्कको तुलनामा सेकेन्डरी नेटवर्कमा १.३ गुणा (१:१.३) बढी पेयर (Fudge Factor) व्यवस्था गरिन्छ।',
    category: 'telecom'
  },
  {
    id: 7,
    questionNepali: 'Electrical Transmission line मा कुन केबल प्रयोग गरिन्छ ?',
    options: { A: 'ADCS', B: 'ADSS', C: 'OPCGW / OPGW', D: 'OPGSS' },
    correctAnswer: 'C',
    explanationNepali: 'हाई भोल्टेज विद्युत प्रसारण टावरको सबैभन्दा माथि Optical Ground Wire (OPGW) प्रयोग गरिन्छ।',
    category: 'fiber'
  },
  {
    id: 8,
    questionNepali: 'MDF मा नम्बर साईडलाई के भनिन्छ ?',
    options: { A: 'D-Side', B: 'E-Side (Exchange Side)', C: 'F-side', D: 'G-side' },
    correctAnswer: 'B',
    explanationNepali: 'MDF मा स्विच वा एक्सचेन्जबाट आउने नम्बर साइडलाई E-Side र ग्राहक लाइन साइडलाई D-Side भनिन्छ।',
    category: 'telecom'
  },
  {
    id: 9,
    questionNepali: 'Bridle ring को काम के हो ?',
    options: { A: 'House wire गाईड गर्ने', B: 'Drop wire गाईड गर्ने', C: 'Jumper wire गाईड गर्ने', D: 'Telephone wire गाईड गर्ने' },
    correctAnswer: 'B',
    explanationNepali: 'पोलमा DP बाट निस्केका ड्रप वायरहरूलाई व्यवस्थित रूपमा तल झार्न गाईड गर्ने काम ब्राइडल रिङले गर्छ।',
    category: 'tools'
  },
  {
    id: 10,
    questionNepali: 'Modem को काम के हो ?',
    options: { A: 'Digital signal लाई modulation गर्ने', B: 'Digital signal लाई Analog signal बनाउने', C: 'Analog signal लाई Digital signal बनाउने', D: 'Analog लाई Digital वा Digital लाई Analog signal बनाउने' },
    correctAnswer: 'D',
    explanationNepali: 'Modem ले Modulator र Demodulator दुवैको काम गरी Analog र Digital बीच सिग्नल रूपान्तरण गर्छ।',
    category: 'networking'
  },
  {
    id: 11,
    questionNepali: 'Telephone set मा Busy tone आएमा के बुझिन्छ ?',
    options: { A: 'Cable open हुन सक्छ', B: 'Cable ground हुन सक्छ', C: 'Cable short हुन सक्छ', D: 'Low voltage हुन सक्छ' },
    correctAnswer: 'C',
    explanationNepali: 'दुई कन्डक्टर आपसमा छुँदा (Cable Short) टेलिफोनमा Busy Tone आउने गर्दछ।',
    category: 'telecom'
  },
  {
    id: 12,
    questionNepali: 'UG modular connector कति पेयर सम्म जोड्न प्रयोग गरिन्छ ?',
    options: { A: '10 pair', B: '20 pair', C: '25 pair', D: '50 pair' },
    correctAnswer: 'C',
    explanationNepali: '३M अन्डरग्राउन्ड मोड्युलर कनेक्टरले एक पटकमा २५ पेयर तार एकैसाथ जोड्न सक्छ।',
    category: 'copper'
  },
  {
    id: 13,
    questionNepali: '१५० पेयर भन्दा माथिको एरियल केबल मा कति sheath open गरिन्छ ?',
    options: { A: '35 cm', B: '39 cm', C: '43 cm', D: '48 cm' },
    correctAnswer: 'D',
    explanationNepali: '१५० पेयर भन्दा माथिका ठूला एरियल केबलमा ४७ देखि ४८ सेमी शीथ ओपन गरिन्छ।',
    category: 'copper'
  },
  {
    id: 14,
    questionNepali: 'Solar PV system कसरी जडान गरिन्छ (ऊर्जा प्रवाह क्रम) ?',
    options: { A: 'panel -> charge controller -> battery -> load', B: 'panel -> charge controller -> load', C: 'Battery -> panel', D: 'Charge controller -> panel' },
    correctAnswer: 'A',
    explanationNepali: 'सोलार प्यानलले घाम संकलन गरी चार्ज कन्ट्रोलर हुँदै ब्याट्रीमा जम्मा गर्छ र लोडमा विद्युत दिन्छ।',
    category: 'electrical'
  },
  {
    id: 15,
    questionNepali: 'Splitter जडान गर्ने सहि तरिका कुन हो ?',
    options: { A: 'Telephone -> Splitter', B: 'Drop wire -> Splitter -> Telephone & Internet', C: 'Drop wire -> Splitter', D: 'LAN wire -> Splitter' },
    correctAnswer: 'B',
    explanationNepali: 'ड्रप वायर स्प्लिटरमा इनपुट भएर एउटा पोर्ट टेलिफोन र अर्को पोर्ट इन्टरनेट मोडेममा जान्छ।',
    category: 'telecom'
  },
  {
    id: 16,
    questionNepali: 'Optical fiber cable को सब भन्दा भित्री भाग कुन हो ?',
    options: { A: 'cladding', B: 'buffer', C: 'core', D: 'all of Above' },
    correctAnswer: 'C',
    explanationNepali: 'फाइबरको सबैभन्दा भित्री केन्द्र जहाँबाट प्रकाश यात्रा गर्छ, त्यसलाई Core भनिन्छ।',
    category: 'fiber'
  },
  {
    id: 17,
    questionNepali: 'Underground network मा केबल लाई सुरक्षाको लागी कुन equipment प्रयोग गरिन्छ ?',
    options: { A: 'duct', B: 'manhole', C: 'handhole', D: 'all of above' },
    correctAnswer: 'A',
    explanationNepali: 'जमिनमुनि केबललाई बाहिरी चाप र चोटबाट जोगाउन PLB HDPE Duct Pipe प्रयोग गरिन्छ।',
    category: 'fiber'
  },
  {
    id: 18,
    questionNepali: 'Aerial Network तलका मध्ये कुन हो ?',
    options: { A: 'underground cable pulling', B: 'pole to pole connecting cable', C: 'primary network', D: 'none of above' },
    correctAnswer: 'B',
    explanationNepali: 'पोलदेखि पोलसम्म हावामा झुण्ड्याएर लगिने केबललाई Aerial Network भनिन्छ।',
    category: 'telecom'
  },
  {
    id: 19,
    questionNepali: 'Secondary network भन्नाले कहाँ देखी कहाँ सम्म बुझिन्छ ?',
    options: { A: 'exchange to cabinet network', B: 'D.P to user network', C: 'cabinet to Distribution point (DP)', D: 'all of above' },
    correctAnswer: 'C',
    explanationNepali: 'क्याबिनेट (Cabinet) देखि डिस्ट्रिब्युसन प्वाइन्ट (DP) सम्मको केबल नेटवर्कलाई Secondary Network भनिन्छ।',
    category: 'telecom'
  },
  {
    id: 20,
    questionNepali: 'Secondary network मा ८ मिटरको पोल गाड्दा सामान्य माटो भए कति गाड्नु पर्छ ?',
    options: { A: '2/6', B: '1/6 (1.6 mtr)', C: '3/7', D: 'all of above' },
    correctAnswer: 'B',
    explanationNepali: '८ मिटर पोलको १/६ भाग अर्थात् १.६ मिटर गहिरो खाडल खनेर गाड्नुपर्दछ।',
    category: 'safety'
  },
  {
    id: 21,
    questionNepali: 'Pin type bracket पोलको टुप्पो भन्दा कति से. मी मुनी राखिन्छ ?',
    options: { A: '40 cm', B: '50 cm', C: '45 cm', D: '20 cm' },
    correctAnswer: 'B',
    explanationNepali: 'पिन टाइप ब्राकेट, सस्पेन्सन क्ल्याम्प र एन्करिङ आई पोलको टुप्पोबाट ठीक ५० सेमी तल राखिन्छ।',
    category: 'tools'
  },
  {
    id: 22,
    questionNepali: 'Distribution bracket पोलको टुप्पो भन्दा कति से.मी तल राखिन्छ ?',
    options: { A: '20 cm', B: '40 cm', C: '50 cm', D: '80 to 110 cm' },
    correctAnswer: 'A',
    explanationNepali: 'डिस्ट्रिब्युसन ब्राकेट पोलको टुप्पोबाट २० से.मी. तल फिक्स गरिन्छ।',
    category: 'tools'
  },
  {
    id: 23,
    questionNepali: 'RJ-45 jack मा कति वटा pin हुन्छन् ?',
    options: { A: '4 pin', B: '8 pin', C: '2 pin', D: '10 pin' },
    correctAnswer: 'B',
    explanationNepali: 'ईथरनेट LAN केबलको RJ-45 ज्याकमा ८ वटा पिन (४ जोडी तार) हुन्छन्।',
    category: 'networking'
  },
  {
    id: 24,
    questionNepali: 'विद्युतको 33kv line छ भने टेलिकम लाईन देखी कति मुनी राख्नुपर्छ ?',
    options: { A: '1.5 m', B: '1.7 m', C: '2 m', D: '1.9 m' },
    correctAnswer: 'C',
    explanationNepali: '३३ kV र ६६ kV हाई भोल्टेज लाइन मुनि टेलिकम केबल राख्दा कम्तीमा २ मिटर (2 m) ठाडो दूरी कायम गर्नुपर्छ।',
    category: 'safety'
  },
  {
    id: 25,
    questionNepali: '0.4 mm व्यास भएको कपर केबलको Loop resistance कति हुनु पर्छ ?',
    options: { A: '280 ohm/km', B: '175 ohm/km', C: '63 ohm/km', D: 'all of Above' },
    correctAnswer: 'A',
    explanationNepali: '०.४ mm कपर केबलको लुप रेजिस्टेन्स २८० Ohm/km हुन्छ (०.५ mm = १७५ Ω/km, ०.९ mm = ६३.२ Ω/km)।',
    category: 'copper'
  },
  {
    id: 26,
    questionNepali: 'सेकेन्डरी नेटवर्कमा अर्थिङ्ग रेजिस्तेन्स कति हुनुपर्छ ?',
    options: { A: '20 ohm भन्दा कम', B: '5 ohm भन्दा कम', C: '10 ohm भन्दा कम', D: '3 ohm भन्दा कम' },
    correctAnswer: 'C',
    explanationNepali: 'क्याबिनेट, DP र सेकेन्डरी सपोर्टहरूमा अर्थिङ रेजिस्टेन्स १० ओहम भन्दा कम हुनुपर्छ।',
    category: 'electrical'
  },
  {
    id: 27,
    questionNepali: 'नेपाल टेलिकम नेटवर्क विस्तार गर्दा एम.डि.एफ. देखी ग्राहकको घर सम्म कति ओह्म हुनुपर्छ ?',
    options: { A: '100 ohm', B: '2000 ohm', C: '1500 ohm', D: '500 ohm' },
    correctAnswer: 'B',
    explanationNepali: 'नेपाल टेलिकममा कुल लुप रेजिस्टेन्सको अधिकतम स्वीकार्य व्यावहारिक सीमा २००० ओहम राखिएको हुन्छ।',
    category: 'telecom'
  },
  {
    id: 28,
    questionNepali: 'टेलिफोन सेटमा एक अर्को व्यक्ति विच कुरा गर्दा कति भोल्टेज आउछ (Off-Hook / Talking) ?',
    options: { A: '-44 v', B: '-48 to -53 v', C: '75 to 125 v', D: '18 to 25 v (वा 6-12V)' },
    correctAnswer: 'D',
    explanationNepali: 'ह्यान्डसेट उठाउँदा भोल्टेज घटेर १८-२५ भोल्ट (औसत ६-१२V DC) मा झर्छ जसले सुरक्षित कुराकानी गराउँछ।',
    category: 'telecom'
  },
  {
    id: 29,
    questionNepali: 'नेपाल टेलिकम १२ कोर अप्टिकल फाइबरमा दोस्रो (२ नं.) कोरको रङ कुन हो ?',
    options: { A: 'सुन्तला (Orange)', B: 'सेतो (White)', C: 'पहेंलो (Yellow)', D: 'हरियो (Green)' },
    correctAnswer: 'B',
    explanationNepali: 'नेपाल टेलिकम मानक अनुसार २ नं. कोर सेतो (White) हुन्छ (अन्तर्राष्ट्रिय TIA/EIA-598 मा सुन्तला हुन्छ)।',
    category: 'fiber'
  },
  {
    id: 30,
    questionNepali: 'OTDR को पूरा नाम के हो ?',
    options: { A: 'Optical Time Data Reader', B: 'Optical Time Domain Reflectometer', C: 'Optical Telecom Data Router', D: 'Output Time Data Recorder' },
    correctAnswer: 'B',
    explanationNepali: 'OTDR को पूरा रूप Optical Time Domain Reflectometer हो, जसले फाइबर फल्ट र लस नाप्छ।',
    category: 'tools'
  }
];

export const modelSubjectiveQuestions: SubjectiveQuestion[] = [
  {
    id: 1,
    marks: 5,
    category: 'fiber',
    questionNepali: 'Optical Fiber Cable Splicing गर्न प्रयोग गरिने सामानको नाम उल्लेख गर्नुहोस् ?',
    keyPoints: [
      'Fusion Splicer Machine (फ्युजन स्प्लाइसर मेसिन)',
      'Fiber Cleaver (फाइबर क्लिभर ९०° कटर)',
      'Fiber Stripper (मिलर स्ट्रिपर)',
      '९९% शुद्ध Isopropyl Alcohol (IPA) र Lint-free Wipes/Tissue',
      'Heat Shrink Protection Sleeves (४०-६० मिमी स्लिभ्स)'
    ],
    modelAnswerNepali: `अप्टिकल फाइबर केबल स्प्लाइसिङ (Fusion Splicing) का लागि आवश्यक मुख्य उपकरण तथा सामग्रीहरू:
१. **Fusion Splicer Machine**: दुईवटा ग्लास कोरलाई इलेक्ट्रिक आर्क (८०००°C) दिएर स्थायी रूपमा जोड्न।
२. **Fiber Cleaver (FC-6S)**: स्ट्रिप गरिएको फाइबरलाई ९० डिग्रीको समतल कोणमा काट्न।
३. **Fiber Stripper (Miller Stripper)**: २५०µm को बाहिरी कलर कोटिंगलाई १२५µm क्ल्याडिङ नबिगारी ताछ्न।
४. **Isopropyl Alcohol (IPA - ९९% शुद्ध) र Lint-free Wipes**: फाइबर कोरलाई धूलो र तेलरहित बनाउन।
५. **Protection Sleeve (Heat Shrink Sleeve)**: जोडिएको नाङ्गो फाइबरलाई बाहिरी चापबाट जोगाउन तातो हिटरमा तताएर कभर गर्न।
६. **OTDR / Optical Power Meter & VFL**: स्प्लाइस लस र सिग्नल कन्टिन्युटी परीक्षण गर्न।`
  },
  {
    id: 2,
    marks: 5,
    category: 'electrical',
    questionNepali: 'Earthing को परिभाषा लेखी अर्थिङ्ग गर्न आवश्यक पर्ने सामानको नाम लेख्नुहोस ?',
    keyPoints: [
      'परिभाषा: लिकेज वा फल्ट करेन्टलाई सुरक्षित रूपमा जमिनमा पठाउने',
      'Earth Rod / GI Electrode',
      'Charcoal (कोइला) र Salt (नुन)',
      'Earth Wire / Strip (GI वा Copper)',
      'Earth Pit Chamber र Clamp/Washer'
    ],
    modelAnswerNepali: `**अर्थिङको परिभाषा:**
विद्युतीय वा टेलिकम उपकरणहरूमा आएको लिकेज करेन्ट वा चट्याङको उच्च भोल्टेजलाई सुरक्षित रूपमा जमिन (Earth) तर्फ पठाउने प्रक्रियालाई अर्थिङ भनिन्छ। यसले मानव जीवनलाई करेन्ट लाग्नबाट र उपकरणलाई क्षति हुनबाट बचाउँछ।

**आवश्यक पर्ने सामानहरूको सूची:**
१. **Earth Rod / GI Earth Electrode**: जमिनमुनि गाडिने तामा वा ग्याल्भानाइज्ड फलामको रड।
२. **Earth Pit Chamber**: कंक्रीट वा प्लास्टिकको निरीक्षण चेम्बर।
३. **Earth Wire (GI / Copper Wire)**: उपकरणदेखि रडसम्म जोड्ने कन्डक्टर।
४. **नुन (Salt) र कोइला (Charcoal)**: माटोको ओसिलोपन र कन्डक्टिभिटी बढाउन।
५. **बेन्टोनाइट पाउडर (Bentonite Powder)**: माटोको रेजिस्टेन्स घटाउन।
६. **अर्थ क्लैम्प, नट-बोल्ट र थिम्बल**: रड र तारलाई बलियोसँग कस्न।`
  },
  {
    id: 3,
    marks: 5,
    category: 'telecom',
    questionNepali: 'Main Distribution Frame (MDF) बारेमा वर्णन गर्नुहोस् र यसका मुख्य कामहरू लेख्नुहोस् ?',
    keyPoints: [
      'एक्सचेन्ज र बाहिरी केबल बीचको मुख्य इन्टरफेस',
      'Line Testing र Fault Isolation',
      'Jumper Wire द्वारा कनेक्सन व्यवस्थापन',
      'Surge Protector / Arrester द्वारा एक्सचेन्ज सुरक्षा'
    ],
    modelAnswerNepali: `**MDF (Main Distribution Frame) को परिचय:**
MDF टेलिकम एक्सचेन्जमा अवस्थित मुख्य टर्मिनेसन फ्रेम हो, जसले एक्सचेन्ज साइड (E-Side) बाट आउने लाइनलाई बाहिरी केबल साइड (D-Side) सँग जोड्ने काम गर्दछ।

**मुख्य कामहरू:**
१. **Signal Interconnection**: एक्सचेन्ज उपकरण र ग्राहक लाइनलाई जम्पर वायरद्वारा जोड्ने।
२. **Line Testing & Fault Finding**: कुनै ग्राहकको लाइन बिग्रिएमा MDF बाटै मिटर लगाएर एक्सचेन्ज भित्र वा बाहिर फल्ट भएको पत्ता लगाउने।
३. **Network Flexibility**: ग्राहकले नम्बर परिवर्तन गर्दा वा लाइन सार्दा जम्पर परिवर्तन गरी सजिलै लाइन मिलाउने।
४. **Overvoltage Protection**: चट्याङ वा हाइ-भोल्टेजबाट एक्सचेन्ज उपकरण जोगाउन प्रोटेक्सन फ्युज र एरेस्टर राख्ने।`
  },
  {
    id: 4,
    marks: 5,
    category: 'telecom',
    questionNepali: 'तपाईं नेपाल टेलिकमको Telecom Technician पदमा हुनुहुन्छ, ग्राहक बढाउन के-के कुरामा जोड दिनुहुन्छ ?',
    keyPoints: [
      'Service Quality (सेवा गुणस्तर सुधार)',
      'Fault तुरुन्त समाधान (Quick Repair & Low Downtime)',
      'Customer Handling & Polite Communication',
      'FTTH & Modern Services Promotion',
      'Preventive Maintenance'
    ],
    modelAnswerNepali: `नेपाल टेलिकमको प्राविधिक कर्मचारीका रूपमा ग्राहक संख्या बढाउन र टिकाइराख्न म निम्न कुराहरूमा जोड दिन्छु:
१. **सेवाको गुणस्तर (Service Quality)**: ग्राहकको घरमा निरन्तर, द्रुत र स्थिर FTTH इन्टरनेट तथा स्पष्ट फोन सेवा सुनिश्चित गर्ने।
२. **छिटो फल्ट समाधान (Quick Response)**: कुनै लाइन बिग्रिएमा वा गुनासो आएमा २४ घण्टाभित्र स्थलमै पुगेर तुरुन्त मर्मत गर्ने।
३. **नम्र र व्यावसायिक व्यवहार (Customer Handling)**: ग्राहकसँग बोल्दा सधैँ शिष्ट, धैर्यवान र सहयोगी भावनाका साथ प्रस्तुत हुने।
४. **FTTH प्रवर्द्धन (Fiber Promotion)**: पुराना कपर/ADSL ग्राहकहरूलाई फाइबर नेटवर्कमा अपग्रेड गर्न र नयाँ क्षेत्रमा कभरेज विस्तार गर्न सहयोग गर्ने।
५. **नियमित मर्मत (Preventive Maintenance)**: समस्या आउनु अगावै ओडीबी बक्स, पोल क्लैम्प र ड्रप वायरको नियमित निरीक्षण गरी अवरोध रोक्ने।`
  }
];

export const vivaQuestionsList: VivaQuestion[] = [
  { id: 1, questionNepali: 'Rectifier ले के काम गर्छ ?', answerNepali: 'AC (Alternating Current) लाई DC (Direct Current) मा बदल्ने काम गर्छ।', englishKey: 'AC to DC Conversion', category: 'Electrical' },
  { id: 2, questionNepali: 'Filter Circuit को काम के हो ?', answerNepali: 'DC आउटपुटबाट Ripple (अनावश्यक AC कम्पोनेन्ट) हटाएर सफा र स्थिर DC बनाउने।', englishKey: 'Ripple Removal', category: 'Electrical' },
  { id: 3, questionNepali: 'Transistor का कतिवटा टर्मिनल हुन्छन् ?', answerNepali: '३ वटा: Emitter (E), Base (B), र Collector (C)।', englishKey: '3 Terminals (E, B, C)', category: 'Electronics' },
  { id: 4, questionNepali: 'OTDR केका लागि प्रयोग हुन्छ ?', answerNepali: 'Optical fiber मा fault, splice loss र distance मापन गर्न।', englishKey: 'Optical Time Domain Reflectometer', category: 'Fiber Tools' },
  { id: 5, questionNepali: 'Megger ले के नाप्छ ?', answerNepali: 'केबल वा तारको Insulation Resistance (MΩ मा) र अर्थिङ सुरक्षा जाँच गर्छ।', englishKey: 'Insulation Resistance Tester', category: 'Instruments' },
  { id: 6, questionNepali: 'C-Meter ले के नाप्छ ?', answerNepali: 'Capacitance नाप्छ र ड्रप वायरको दूरी (५० nF = १००० मिटर) पत्ता लगाउँछ।', englishKey: 'Capacitance Meter', category: 'Instruments' },
  { id: 7, questionNepali: 'DSP Meter केका लागि प्रयोग हुन्छ ?', answerNepali: 'डिजिटल सिग्नल प्रोसेसिङ, टेलिफोन लाइनको न्वाइज र इन्सुलेसन रेजिस्टेन्स परीक्षण गर्न।', englishKey: 'Digital Signal Processor Meter', category: 'Instruments' },
  { id: 8, questionNepali: 'Star Topology मा मुख्य डिभाइस के हुन्छ ?', answerNepali: 'केन्द्रीय स्विच (Switch) वा हब (Hub)।', englishKey: 'Central Switch / Hub', category: 'Networking' },
  { id: 9, questionNepali: 'VFL ले कुन रङको बत्ती बाल्छ ?', answerNepali: '६५० nm को देखिने रातो लेजर लाइट (Visible Red Laser)।', englishKey: '650nm Red Laser', category: 'Fiber Tools' },
  { id: 10, questionNepali: 'Nepal Telecom १२ कोर फाइबरमा पहिलो कोरको रङ के हो ?', answerNepali: 'नीलो (Blue)।', englishKey: '1st Core is Blue', category: 'Fiber' },
  { id: 11, questionNepali: 'Nepal Telecom १२ कोर फाइबरमा दोस्रो कोरको रङ के हो ?', answerNepali: 'सेतो (White) (अन्तर्राष्ट्रिय TIA/EIA मा सुन्तला हुन्छ)।', englishKey: '2nd Core is White', category: 'Fiber' },
  { id: 12, questionNepali: 'MDF को पूरा नाम के हो ?', answerNepali: 'Main Distribution Frame।', englishKey: 'Main Distribution Frame', category: 'Telecom' },
  { id: 13, questionNepali: 'DP को पूरा नाम के हो ?', answerNepali: 'Distribution Point।', englishKey: 'Distribution Point', category: 'Telecom' },
  { id: 14, questionNepali: 'OLT को पूरा नाम के हो ?', answerNepali: 'Optical Line Termination।', englishKey: 'Optical Line Termination', category: 'FTTH' },
  { id: 15, questionNepali: 'ONT को पूरा नाम के हो ?', answerNepali: 'Optical Network Terminal।', englishKey: 'Optical Network Terminal', category: 'FTTH' },
  { id: 16, questionNepali: 'FAP / FAT को पूरा नाम के हो ?', answerNepali: 'Fiber Access Point / Fiber Access Terminal।', englishKey: 'Fiber Access Terminal', category: 'FTTH' },
  { id: 17, questionNepali: 'टेलिफोन लाइनमा फोन नउठाउँदा (On-Hook) कति भोल्टेज हुन्छ ?', answerNepali: 'लगभग -४८ V DC (स्थिर भोल्टेज)।', englishKey: '-48V DC Idle Voltage', category: 'Telecom' },
  { id: 18, questionNepali: 'टेलिफोनमा घण्टी बज्दा (Ringing) कति भोल्टेज आउँछ ?', answerNepali: '७५ देखि ९० V AC (२० हर्जको सिग्नल)।', englishKey: '75-90V AC Ringing', category: 'Telecom' },
  { id: 19, questionNepali: 'कुरा गर्दा (Off-Hook / Talking) टेलिफोनमा कति भोल्टेज हुन्छ ?', answerNepali: '६ देखि १२ V DC (औसत १८-२५V DC)।', englishKey: '6-12V DC Talking Voltage', category: 'Telecom' },
  { id: 20, questionNepali: '३३ kV बिजुली लाइनसँग टेलिकम केबलको न्यूनतम दूरी कति हुनुपर्छ ?', answerNepali: 'कम्तीमा २.० मिटर (2 m) को ठाडो दूरी (Vertical Clearance)।', englishKey: '2.0m Clearance for 33kV', category: 'Safety' },
  { id: 21, questionNepali: 'पोलमा चढ्दा भर्‍याङ कति डिग्रीको कोणमा राख्नुपर्छ ?', answerNepali: '७५ डिग्री (75°) को कोणमा।', englishKey: '75 Degree Ladder Angle', category: 'Safety' },
  { id: 22, questionNepali: 'फ्युज र एरेस्टरमा के फरक छ ?', answerNepali: 'फ्युज Series मा जडान भई Overcurrent बाट बचाउँछ; एरेस्टर Parallel मा जडान भई चट्याङको High Voltage लाई अर्थमा पठाउँछ।', englishKey: 'Fuse (Series/Current) vs Arrester (Parallel/Voltage)', category: 'Electrical' },
  { id: 23, questionNepali: '३M मोड्युलर कनेक्टरले एक पटकमा कति पेयर जोड्न सक्छ ?', answerNepali: '२५ पेयर (25 Pair)।', englishKey: '25 Pair Splicing per Module', category: 'Copper' },
  { id: 24, questionNepali: 'ड्रप वायरको व्यास कति हुन्छ ?', answerNepali: '०.९ mm कन्डक्टर व्यास।', englishKey: '0.9mm Copper Conductor', category: 'Copper' },
  { id: 25, questionNepali: 'संवेदनशील टेलिकम उपकरणका लागि अर्थ रेजिस्टेन्स कति हुनुपर्छ ?', answerNepali: '१ ओहम भन्दा कम (<= 1 Ohm)।', englishKey: '<= 1 Ohm Sensitive Earth', category: 'Earthing' },
  { id: 26, questionNepali: 'एक्सचेन्ज MDF मा अर्थ रेजिस्टेन्स कति हुनुपर्छ ?', answerNepali: '५ ओहम भन्दा कम (< 5 Ohm)।', englishKey: '< 5 Ohm Exchange Earth', category: 'Earthing' },
  { id: 27, questionNepali: 'सेकेन्डरी नेटवर्क क्याबिनेट तथा DP मा अर्थ रेजिस्टेन्स कति हुनुपर्छ ?', answerNepali: '१० ओहम भन्दा कम (< 10 Ohm)।', englishKey: '< 10 Ohm Secondary Earth', category: 'Earthing' },
  { id: 28, questionNepali: 'फाइबर स्प्लाइसिङ गर्दा क्लिभरले कति डिग्रीमा काट्छ ?', answerNepali: 'ठीक ९० डिग्री (90°) को समतल कोणमा।', englishKey: '90 Degree Precision Cleave', category: 'Fiber' },
  { id: 29, questionNepali: 'फाइबर सफा गर्न कुन रसायन प्रयोग गरिन्छ ?', answerNepali: '९९% शुद्ध Isopropyl Alcohol (IPA) र Lint-free वाइप्स।', englishKey: '99% Isopropyl Alcohol', category: 'Fiber' },
  { id: 30, questionNepali: 'Hi-Tech EPABX को डिफल्ट पासवर्ड के हो ?', answerNepali: '101234 (STAR EPABX को 641234*)।', englishKey: 'Password: 101234', category: 'EPABX' }
];
