export interface ManualChapter {
  id: number;
  chapterNumber: string;
  titleNepali: string;
  titleEnglish: string;
  category: 'osp_telecom' | 'optical_fiber' | 'electrical' | 'electronics' | 'wireless_satellite' | 'networking' | 'safety_tools' | 'ntc_standards';
  pageRef: string;
  summaryNepali: string;
  keyPoints: string[];
  contentNepali: string;
  diagrams?: Array<{
    title: string;
    type: 'ascii' | 'svg' | 'table';
    data: string;
    caption: string;
  }>;
  examHighlights: string[];
  formulaList?: string[];
  vivaQuestions?: Array<{ question: string; answer: string }>;
}

export interface TelecomCheatSheetItem {
  id: string;
  title: string;
  category: string;
  headers: string[];
  rows: string[][];
  notes?: string;
}

export const telecomManualChapters: ManualChapter[] = [
  {
    id: 1,
    chapterNumber: 'खण्ड १',
    titleNepali: 'ल्यान्डलाइन टेलिफोन र PSTN का आधारभूत कुराहरू',
    titleEnglish: 'Landline Telephone, PSTN & Exchange Concept',
    category: 'osp_telecom',
    pageRef: 'म्यानुअल पृष्ठ: १-२',
    summaryNepali: 'PSTN र परम्परागत ल्यान्डलाइन टेलिफोनको कार्य सिद्धान्त, आवाजलाई विद्युत ऊर्जामा रूपान्तरण, र टेलिकम एक्सचेन्जको भूमिका।',
    keyPoints: [
      'ल्यान्डलाइन टेलिफोनले धातुको तार (Copper) वा अप्टिकल फाइबर मार्फत प्रसारण गर्दछ।',
      'PSTN को पूरा रूप Public Switched Telephone Network हो।',
      'प्रयोगकर्ताले बोल्दा ध्वनि तरंग विद्युत ऊर्जामा रूपान्तरण भई तारमार्फत अर्को छेउमा पुगी पुनः ध्वनिमा बदलिन्छ।',
      'एक्सचेन्जले ग्राहकहरू बीच कल स्थापना (Call Establishment), स्विचिङ, रुटिङ र चार्जिङ नियन्त्रण गर्दछ।'
    ],
    contentNepali: `### १. ल्यान्डलाइन टेलिफोनको परिभाषा
ल्यान्डलाइन टेलिफोन (जसलाई ल्यान्ड लाइन, मुख्य लाइन, घरको फोन, फिक्स्ड-लाइन र वायर लाइन पनि भनिन्छ) एउटा यस्तो फोन हो जसले प्रसारणका लागि धातुको तार वा अप्टिकल फाइबर टेलिफोन लाइनको प्रयोग गर्दछ। यो मोबाइल सेलुलर लाइन भन्दा फरक हुन्छ। ल्यान्डलाइन फोनहरू सन् २००३ तिर व्यापक रूपमा विकास भएका हुन्।

### २. ल्यान्डलाइन टेलिफोनले कसरी काम गर्छ?
जब तपाईं ल्यान्डलाइन फोनमा बोल्नुहुन्छ:
1. तपाईंको आवाज साना ध्वनि तरंगहरूमा यात्रा गर्दछ।
2. यो विद्युत ऊर्जा (Electrical Energy) तारको माध्यमबाट अर्को फोनमा जान्छ।
3. पुनः विद्युत ऊर्जाबाट ध्वनि तरंगहरूमा रूपान्तरण हुन्छ, जसलाई फोनको अर्को छेउमा भएको व्यक्तिले सुन्न सक्छ।

### ३. PSTN (Public Switched Telephone Network)
यसको पूर्ण रूप Public Switched Telephone Network हो, जसलाई सामान्यतया टेलिफोन लाइन भनिन्छ। PSTN ले सर्किट-स्विच्ड तामाको फोन लाइनहरू प्रयोग गर्दछ।

### ४. टेलिकम एक्सचेन्जको कार्य
टेलिफोन एक्सचेन्ज वा टेलिफोन स्विच एउटा यस्तो दूरसञ्चार प्रणाली हो जसले ग्राहकहरू बीच टेलिफोन कलहरू स्थापित गर्न ग्राहक लाइनहरूलाई आपसमा जोड्दछ। एक्सचेन्जले कलहरूको पहुँच, नियन्त्रण, स्विचिङ, चार्जिङ र अन्य सञ्चार सत्रहरू सञ्चालन गर्दछ।`,
    diagrams: [
      {
        title: 'ल्यान्डलाइन टेलिफोन नेटवर्क प्रवाह',
        type: 'ascii',
        data: `[ग्राहक १ - फोन सेट] ---> [ड्रप वायर] ---> [DP Box] ---> [क्याबिनेट] ---> [MDF] ---> [टेलिफोन एक्सचेन्ज / स्विच] ---> [MDF] ---> [क्याबिनेट] ---> [DP Box] ---> [ग्राहक २]`,
        caption: 'PSTN नेटवर्कमा दुई ग्राहक बीच कल कनेक्सनको आधारभूत प्रवाह'
      }
    ],
    examHighlights: [
      'PSTN को पूरा रूप Public Switched Telephone Network हो।',
      'फोनमा कुराकानी गर्दा ध्वनि तरंग विद्युत तरंगमा रूपान्तरण हुन्छ।',
      'टेलिकम एक्सचेन्ज कल स्विचिङ र रुटिङ गर्ने मुख्य केन्द्र हो।'
    ]
  },
  {
    id: 2,
    chapterNumber: 'खण्ड २',
    titleNepali: 'एक्सचेन्ज पावर, स्विचिङ र डिजिटल स्विचहरू',
    titleEnglish: 'Exchange Power (-48V DC), Switching & Digital Switches',
    category: 'osp_telecom',
    pageRef: 'म्यानुअल पृष्ठ: २-३',
    summaryNepali: 'एक्सचेन्जको -४८V DC पावर सप्लाई, स्विचिङका आधारभूत कार्यहरू र डिजिटल स्विच (Centrex) को कार्यप्रणाली।',
    keyPoints: [
      'टेलिकम एक्सचेन्जका लागि स्थिर -४८ V DC (Direct Current) पावर आवश्यक पर्दछ।',
      'पावर प्लान्टले स्विच कोठाहरूलाई -४८V र जडानहरूलाई ४८V प्रदान गर्दछ।',
      'ब्याट्रीहरूको मर्मत सम्भारका लागि वर्षमा एक पटक कृत्रिम रूपमा डिस्चार्ज गरिन्छ।',
      'OMC (Operation and Maintenance Control) ले सम्पूर्ण डाटा र बिलिङ डाटाको सञ्चालन नियन्त्रण गर्दछ।'
    ],
    contentNepali: `### १. एक्सचेन्ज पावर आवश्यकता (-48V DC)
टेलिकम एक्सचेन्जमा सुरक्षित र भरपर्दो सञ्चारका लागि **-४८ V D.C.** प्रयोग गरिन्छ।
- **पावर प्लान्ट**: यसले स्विच कोठाहरूलाई -४८V र जडानहरूलाई ४८V प्रदान गर्छ।
- **ब्याट्री बैंक**: पावर फेल हुँदा निरन्तर ब्याकअपका लागि ब्याट्री बैंक राखिन्छ।
- **कुलिङ**: एयर कन्डिसनिङ (AC) र कुलिङ फ्यान मार्फत कोठा चिसो राखिन्छ।
- **अर्थिङ**: सुरक्षाका लागि एक्सचेन्ज अर्थिङ (< ५ ओम) अनिवार्य हुन्छ।

### २. OMC (Operation and Maintenance Control)
यसमा इनपुट-आउटपुट प्रोसेसर टर्मिनलहरू, भिजुअल डिस्प्ले युनिटहरू, प्रिन्टरहरू आदि हुन्छन्। यसले एक्सचेन्ज डाटा, कन्फिगरेसन र बिलिङ डाटाको सम्पूर्ण सञ्चालनलाई नियन्त्रण गर्दछ। नयाँ जडान दिनु, सुविधाहरू थप्नु वा हटाउनु OMC कोठाबाट गरिन्छ।

### ३. स्विचिङका ६ आधारभूत कार्यहरू
1. **Call Establishment**: दुई प्रयोगकर्ता बीच सम्पर्क स्थापित गर्ने।
2. **Call Routing**: कललाई सही गन्तव्यतर्फ पठाउने।
3. **Signal Processing**: प्राप्त सिग्नललाई प्रक्रिया गर्ने।
4. **Call Supervision**: कलको अवस्था नियन्त्रण तथा निगरानी गर्ने।
5. **Charging/Billing**: प्रयोग अनुसार शुल्क गणना गर्ने।
6. **Call Termination**: सञ्चार समाप्त भएपछि जडान हटाउने।`,
    diagrams: [
      {
        title: 'स्विचिङ सिस्टमका मुख्य Functional Elements',
        type: 'ascii',
        data: `+-----------------------------------------------------------+
|                   टेलिफोन एक्सचेन्ज (Switching System)    |
+-----------------------------------------------------------+
|  1. Switching Network  : लाइनहरूलाई आपसमा जोड्ने भाग       |
|  2. Control Unit       : सम्पूर्ण प्रोसेस नियन्त्रण गर्ने  |
|  3. Signaling Unit     : Call Setup र Signal आदानप्रदान    |
|  4. Interface Unit     : Subscriber line र Switch सम्पर्क |
|  5. Processor/Computer : डाटा प्रशोधन र प्रणाली सञ्चालन   |
|  6. Memory Unit        : डाटा, सफ्टवेयर र अभिलेख भण्डारण   |
+-----------------------------------------------------------+`,
        caption: 'स्विचिङ प्रणालीका ६ वटा मुख्य कम्पोनेन्टहरू'
      }
    ],
    examHighlights: [
      'एक्सचेन्जमा -४८V DC विद्युत प्रयोग गरिन्छ।',
      'फोन अन-हुक (On-hook) हुँदा -४८V DC र अफ-हुक (Off-hook) हुँदा ६-१२V DC हुन्छ।',
      'घन्टी बज्दा (Ringing) ७५-९०V AC (२० Hz) सिग्नल आउँछ।'
    ]
  },
  {
    id: 3,
    chapterNumber: 'खण्ड ३',
    titleNepali: 'मेन डिस्ट्रिब्युसन फ्रेम (MDF) र केबल भल्ट',
    titleEnglish: 'Main Distribution Frame (MDF) & Cable Vault',
    category: 'osp_telecom',
    pageRef: 'म्यानुअल पृष्ठ: ३-४, १३२, २१४',
    summaryNepali: 'MDF को संरचना, E-Side बनाम D-Side, जम्पर वायर कनेक्सन र केबल भल्टको भूमिका।',
    keyPoints: [
      'MDF ले एक्सचेन्ज साइड (E-Side) र बाहिरी नेटवर्क लाइन साइड (D-Side) लाई जोड्दछ।',
      'जम्पर वायर (Jumper Wire: ०.४mm/०.५mm सेतो र रातो) प्रयोग गरी लाइन क्रस-कनेक्ट गरिन्छ।',
      'MDF मा फ्युज वा एरेस्टर (Protection Module) राखिएको हुन्छ।',
      'MDF को अर्थिङ प्रतिरोध ५ ओम (५ $\\Omega$) भन्दा कम हुनुपर्दछ।'
    ],
    contentNepali: `### १. मेन डिस्ट्रिब्युसन फ्रेम (MDF) को परिभाषा
Main Distribution Frame (MDF) टेलिफोनीमा प्रयोग हुने सिग्नल डिस्ट्रिब्युसन फ्रेम वा केबल र्‍याक हो, जसले एक्सचेन्ज भित्रका उपकरण र बाहिरी ग्राहक लाइनहरूलाई आपसमा जोड्न र व्यवस्थापन गर्न काम गर्दछ।

### २. MDF का मुख्य भागहरू
- **E-Side (Exchange Side / Number Side)**: एक्सचेन्ज उपकरणबाट आउने स्विच टर्मिनलहरू।
- **D-Side (Distribution Side / Line Side)**: बाहिरी फिल्ड नेटवर्क र क्याबिनेटतर्फ जाने लाइनहरू।
- **Jumper Wire**: E-Side र D-Side लाई आपसमा जोड्ने कम प्रतिरोधात्मक सेतो र रातो तार।
- **Protection Unit**: चट्याङ र ओभर भोल्टेजबाट उपकरण जोगाउन राखिने ग्यास डिस्चार्ज ट्युब वा फ्युज।

### ३. केबल भल्ट (Cable Vault)
भूमिगत वितरण केबल भल्ट भूमिगत डक्ट प्रणालीमा एउटा खुला कोठा/च्याम्बर हो जहाँ सबै प्राइमरी केबलहरू एक्सचेन्ज भित्र प्रवेश गर्छन्। यहाँ केबल स्प्लाइसिङ र १०० पेयर सेतो सिथ भएको स्विचबोर्ड केबलसँग जडान गरिन्छ।`,
    diagrams: [
      {
        title: 'MDF Jumpering Architecture',
        type: 'ascii',
        data: `[ Exchange Switch ] ---> [ E-Side Terminal ] (MDF)
                                    |
                            [ Jumper Wire ] (०.४mm White/Red)
                                    |
[ Feeder Cable / DP ] <--- [ D-Side Terminal ] (MDF)`,
        caption: 'MDF मा एक्सचेन्ज साइड र लाइन साइड बीच जम्पर जडान'
      }
    ],
    examHighlights: [
      'MDF को पूरा रूप Main Distribution Frame हो।',
      'MDF नम्बर साइडलाई E-Side र लाइन साइडलाई D-Side भनिन्छ।',
      'MDF को अर्थिङ Frame मा गरिन्छ र ५ ओम भन्दा कम हुनुपर्छ।'
    ]
  },
  {
    id: 4,
    chapterNumber: 'खण्ड ४',
    titleNepali: 'भूमिगत केबलिङ: म्यानहोल, ट्रेन्च र प्राइमरी केबलहरू',
    titleEnglish: 'Underground Cabling: Manhole, Handhole, Ducting & Primary Cables',
    category: 'osp_telecom',
    pageRef: 'म्यानुअल पृष्ठ: ४-५, २२६, २३३',
    summaryNepali: 'भूमिगत नेटवर्क संरचना, म्यानहोलका प्रकार (Shallow, Normal, Deep / S, L, T), डक्टिङ र प्राइमरी केबल (३००-२४०० पेयर)।',
    keyPoints: [
      'म्यानहोल भूमिगत केबल जोड्न, तान्न र मर्मत गर्न बनाइएको च्याम्बर हो।',
      'म्यानहोल ३ प्रकारका हुन्छन्: Shallow (७५-९० सेमी), Medium/Normal (१.५ मिटर), Deep (>२ मिटर)।',
      'दुई म्यानहोल बीचको दूरी सामान्यतया २०० देखि २५० मिटर हुन्छ।',
      'प्राइमरी केबल MDF देखि क्याबिनेटसम्म जाने ३०० देखि २४०० पेयरसम्मको कपर केबल हो (कन्डक्टर ०.४mm)।'
    ],
    contentNepali: `### १. म्यानहोल (Manhole) र ह्यान्डहोल (Handhole)
- **म्यानहोल (Manhole)**: ठूला भूमिगत प्राइमरी/ब्याकबोन केबलहरू जोड्न, तान्न र प्राविधिक मानिस पसेर काम गर्न बनाइएको ठूलो च्याम्बर। प्रकार: Shallow (७५-९०cm), Normal (१५०cm), Deep (>२००cm)। आकारका आधारमा: S-Type, L-Type, T-Type।
- **ह्यान्डहोल (Handhole)**: म्यानहोल भन्दा सानो च्याम्बर जहाँ मानिस पस्न मिल्दैन तर हात हालेर सेकेन्डरी केबल तान्न वा मर्मत गर्न सकिन्छ।

### २. डक्टिङ (Ducting) र ट्रेन्चिङ (Trenching)
- **PLB HDPE Duct**: सिलिकन लेयर भएको पाइप जसले घर्षण कम गर्छ र केबललाई हावाको चाप (Blowing Method: १०-११ bar) बाट सजिलै छिराउन सकिन्छ।
- **ट्रेन्चिङ**: जमिन खनेर डक्ट पाइप र केबल बिछ्याउने प्रक्रिया।

### ३. प्राइमरी केबल (Primary Cable)
MDF देखि क्याबिनेटसम्म जाने मुख्य ठूलो केबल। ३००, ६००, ९००, १२००, १५००, १८००, २४०० पेयरमा उपलब्ध हुन्छ। यसको कन्डक्टर व्यास ०.४ mm हुन्छ।`,
    diagrams: [
      {
        title: 'भूमिगत नेटवर्क लेआउट',
        type: 'ascii',
        data: `[Central Exchange] ===(MDF)=== [Cable Vault] ===(HDPE Duct)=== [Manhole 1] ===(200-250m)===> [Manhole 2] ===> [Cabinet]`,
        caption: 'एक्सचेन्जदेखि क्याबिनेटसम्म भूमिगत डक्ट र म्यानहोल प्रणाली'
      }
    ],
    examHighlights: [
      'म्यानहोल बीचको दूरी २००-२५० मिटर हुन्छ।',
      'म्यानहोलमा पस्नु अघि Toxic Gas जाँच गरी ३० मिनेट खुला राखी भेन्टिलेसन गराउनुपर्छ।',
      'प्राइमरी केबलको कन्डक्टर व्यास ०.४ mm हुन्छ।'
    ]
  },
  {
    id: 5,
    chapterNumber: 'खण्ड ५',
    titleNepali: 'क्याबिनेट, सेकेन्डरी एरियल नेटवर्क र पोल एसेसरिजहरू',
    titleEnglish: 'Cabinets, Secondary Aerial Network & Pole Accessories',
    category: 'osp_telecom',
    pageRef: 'म्यानुअल पृष्ठ: ५-६, ९६, २२३, २६६',
    summaryNepali: 'क्याबिनेट जडान (३०० Primary : ४५० Secondary), पोलका प्रकार (७m, ७.५m, ८m), पोल फिटिङ र एसेसरिजहरूको स्थान।',
    keyPoints: [
      'क्याबिनेटमा प्राइमरी र सेकेन्डरी केबल जम्पर तारद्वारा जोडिन्छ (Fudge factor अनुपात १:१.३ देखि १:१.५)।',
      'पोलको लम्बाइ: ७ मिटर (जमिनमा १.४m), ७.५ मिटर (जमिनमा १.५m), ८ मिटर (जमिनमा १.६m) अर्थात् लम्बाइको १/६ भाग गाडिन्छ।',
      'दुई पोल बीचको दूरी (Span): ४० देखि ५० मिटर हुन्छ।',
      'पोलको टुप्पोबाट: डिस्ट्रिब्युसन ब्राकेट २०cm तल, पिन ब्र्याकेट/सस्पेन्सन क्ल्याम्प ५०cm तल, DP Box ११०cm तल, ब्राइडल रिङ ११५-१२०cm तल राखिन्छ।'
    ],
    contentNepali: `### १. क्याबिनेट (Distribution Cabinet)
प्राइमरी केबल र सेकेन्डरी केबललाई जोड्ने मध्यवर्ती वितरण बाकस। यसमा प्रायः ३०० प्राइमरी पेयर र ४५० देखि ५०० सेकेन्डरी पेयर जडान हुन्छ। क्याबिनेटको बाहिरी कभरले घाम पानीबाट जोगाउँछ भने भित्री मेटालिक बेसमा अर्थिङ (< १० ओम) गरिन्छ।

### २. पोल (Poles) र गाड्ने मापदण्ड
- **प्रकार**: स्टिल पोल, कंक्रीट पोल र काठको पोल।
- **गाड्ने गहिराइ**: सामान्य माटोमा पोलको उचाइको **१/६ भाग** गाडिन्छ।
  - ७ मिटर पोल $\\rightarrow$ १.४ मिटर गहिरो
  - ७.५ मिटर पोल $\\rightarrow$ १.५ मिटर गहिरो
  - ८ मिटर पोल $\\rightarrow$ १.६ मिटर गहिरो
- **खाल्डोको चौडाइ**: ५०-६० सेमी (Cylindrical वा Step खनिन्छ)।

### ३. पोल एसेसरिजहरूको फिटिङ मापदण्ड
- **Distribution Bracket**: पोलको टुप्पोबाट २० cm तल।
- **Pin Type Bracket / Suspension Clamp / Anchoring Eye**: पोलको टुप्पोबाट ५० cm तल (सिधा रुटमा Suspension, बाङ्गो रुटमा Anchoring Eye)।
- **दोस्रो केबल**: पोलको टुप्पोबाट ७० cm तल।
- **Stay Seat / Stay Wire**: पोलको टुप्पोबाट ४०-४५ cm तल ($४५^\\circ$ कोणमा जमिनमा बाँधिन्छ)।
- **Distribution Point (DP Box)**: पोलको टुप्पोबाट ११० cm तल।
- **Bridle Ring**: DP भन्दा तल १२० cm मा।`,
    diagrams: [
      {
        title: 'टेलिकम पोल फिटिङ उचाइ रेखाचित्र',
        type: 'ascii',
        data: `+================+ ० cm (पोलको टुप्पो)
|  Dist. Bracket | २० cm तल
|  Stay Seat     | ४५ cm तल
|  Susp. Clamp   | ५० cm तल (सिधा रुट) / Anchoring Eye (बाङ्गो रुट)
|  2nd Cable     | ७० cm तल
|  DP Box (१०/२०)| ११० cm तल
|  Bridle Ring   | १२० cm तल
+----------------+
|  Ground Level  | (बाटोबाट केबल उचाइ >= ५ मिटर)
|  जमिनमुनि भाग  | १/६ भाग (१.४m - १.६m गहिराइ)`,
        caption: 'नेपाल टेलिकम मानक अनुसार पोल एसेसरिज फिटिङ दूरी'
      }
    ],
    examHighlights: [
      'क्याबिनेटमा प्राइमरी र सेकेन्डरी पेयरको अनुपात १:१.३ देखि १:१.५ राखिन्छ।',
      'पोलमा भर्‍याङ राख्दा ७५ डिग्री ($७५^\\circ$) को कोणमा राख्नुपर्छ।',
      'सडक माथिबाट जाने एरियल केबलको उचाइ कम्तीमा ५ मिटर हुनुपर्छ।'
    ]
  },
  {
    id: 6,
    chapterNumber: 'खण्ड ६',
    titleNepali: 'डिस्ट्रिब्युसन पोइन्ट (DP) र अप्टिकल फाइबर नेटवर्क',
    titleEnglish: 'Distribution Point (DP) & Optical Fiber Network Structure',
    category: 'optical_fiber',
    pageRef: 'म्यानुअल पृष्ठ: ६, २१-२२, १३५',
    summaryNepali: 'DP बक्स (१०-२० पेयर), अप्टिकल फाइबरको परिचय, प्रकाश प्रसारण र Total Internal Reflection (TIR) सिद्धान्त।',
    keyPoints: [
      'DP ले सेकेन्डरी केबलबाट ग्राहकको घरसम्म ड्रप वायरमार्फत लाइन वितरण गर्दछ।',
      'अप्टिकल फाइबर ग्लास वा प्लास्टिकको अत्यन्तै मसिनो त्यान्द्रो हो जसले प्रकाश (Light Pulses) मार्फत डाटा लैजान्छ।',
      'फाइबरको कार्य सिद्धान्त Total Internal Reflection (पूर्ण आन्तरिक परावर्तन) मा आधारित छ।',
      'TIR हुनका लागि प्रकाश सघन माध्यमबाट विरल माध्यममा जानुपर्छ र Incident Angle > Critical Angle हुनुपर्छ।'
    ],
    contentNepali: `### १. डिस्ट्रिब्युसन पोइन्ट (DP Box)
DP बक्स ग्राहक नजिकको पोल वा भवनको भित्तामा राखिने टर्मिनल बक्स हो।
- **क्षमता**: १० पेयर वा २० पेयर।
- **प्रकार**: Tail DP / Tail-less DP, Protective DP / Non-protective DP।
- **जडान**: १ देखि ५ नम्बर पेयर देब्रेतिर र ६ देखि १० नम्बर पेयर दाहिनेतिर राखिन्छ।

### २. अप्टिकल फाइबर कम्युनिकेसन (OFC)
अप्टिकल फाइबर प्रकाशको माध्यमद्वारा सूचना, डाटा र आवाज उच्च गतिमा प्रसारण गर्ने प्रविधि हो।
- **फाइदाहरू**: उच्च गति (High Bandwidth), न्यून सिग्नल लस (Low Loss), विद्युत चुम्बकीय हस्तक्षेप नहुने (No EMI), लामो दूरीमा भरपर्दो।

### ३. Total Internal Reflection (पूर्ण आन्तरिक परावर्तन)
फाइबरको कोर (Core) को Refractive Index ($n_1$) बाहिरी तह Cladding ($n_2$) भन्दा बढी हुन्छ ($n_1 > n_2$)। जब प्रकाश Critical Angle भन्दा ठूलो कोणमा प्रवेश गर्छ, प्रकाश बाहिर ननिस्की कोर भित्रै १००% परावर्तित हुँदै अगाडि बढ्छ।

### ४. Snell's Law र Critical Angle
- **Snell's Law**: $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$
- **Critical Angle**: $\\sin\\theta_c = \\frac{n_2}{n_1}$`,
    diagrams: [
      {
        title: 'Total Internal Reflection in Optical Fiber',
        type: 'ascii',
        data: `+---------------------------------------------------+
|  CLADDING (कम Refractive Index n2)                |
|  ...............................................  |
|  CORE (उच्च n1)   /\\      /\\      /\\              |
|  ======Light===> /  \\    /  \\    /  \\  =====>    |
|                 /    \\  /    \\  /    \\            |
|  ...............................................  |
|  CLADDING (n2)                                    |
+---------------------------------------------------+`,
        caption: 'कोर र क्लाइडिङको सीमामा प्रकाशको पूर्ण आन्तरिक परावर्तन'
      }
    ],
    examHighlights: [
      'फाइबर Total Internal Reflection (TIR) सिद्धान्तमा काम गर्छ।',
      'कोरको रिफ्र्याक्टिभ इन्डेक्स क्लाइडिङको भन्दा सधैं बढी हुनुपर्छ ($n_1 > n_2$)।',
      'फाइबरमा प्रकाशको गति लगभग $३ \\times १०^८$ मिटर प्रति सेकेन्ड हुन्छ।'
    ]
  },
  {
    id: 7,
    chapterNumber: 'खण्ड ७',
    titleNepali: 'फाइबर कम्पोनेन्टहरू, एटेनुएसन र फाइबरका प्रकारहरू',
    titleEnglish: 'Fiber Parts (Core, Cladding, Coating, Jacket), Attenuation & SMF vs MMF',
    category: 'optical_fiber',
    pageRef: 'म्यानुअल पृष्ठ: ७-८, २३-२५, ९८',
    summaryNepali: 'फाइबरका तहहरू (Core, Cladding, Coating, Strength Member, Jacket), Single-mode (SMF) बनाम Multi-mode (MMF) र सिग्नल लसका कारण।',
    keyPoints: [
      'फाइबरका मुख्य ४ भाग: १. Core (८-१०µm SMF, ५०-६२.५µm MMF), २. Cladding (१२५µm), ३. Coating/Buffer (२५०µm), ४. Outer Jacket।',
      'Single Mode Fiber (SMF): सानो कोर (८-१० µm), १ मात्र प्रकाश मोड, लामो दूरी र उच्च गतिका लागि प्रयोग (लेजर लाइट प्रयोग)।',
      'Multi Mode Fiber (MMF): ठूलो कोर (५०-६२.५ µm), धेरै प्रकाश मोड, छोटो दूरी (LAN, डाटा सेन्टर) मा सस्तो एलईडी प्रयोग।',
      'Attenuation (क्षीणता): दूरीसँगै प्रकाश शक्ति घट्नु, यसलाई dB वा dB/km मा नापिन्छ।'
    ],
    contentNepali: `### १. अप्टिकल फाइबरका भागहरू
1. **Core (कोर)**: सिसाको भित्री भाग जहाँबाट प्रकाश यात्रा गर्छ।
2. **Cladding (क्लाइडिङ)**: कोरलाई घेर्ने कम अपवर्तक सूचकांक भएको सिसाको तह जसले TIR गराउँछ (व्यास १२५ µm)।
3. **Coating / Buffer (कोटिङ/बफर)**: कोर र क्लाइडिङलाई ओस र स्क्र्याचबाट जोगाउने २५० µm को सुरक्षात्मक प्लास्टिक तह।
4. **Strength Member (FRP / Steel)**: तन्किने तनाव (Tensile stress) सहन केबल भित्र राखिने कडा तार।
5. **Outer Jacket (बाहिरी ज्याकेट)**: वातावरणीय सुरक्षा दिने बाहिरी कालो पोलिथिन कभर।

### २. Single Mode (SMF) बनाम Multi Mode (MMF)
| विशेषता | Single Mode Fiber (SMF) | Multi Mode Fiber (MMF) |
| :--- | :--- | :--- |
| **कोर व्यास** | ८ देखि १० माइक्रोमिटर (µm) | ५० देखि ६२.५ माइक्रोमिटर (µm) |
| **प्रकाश मोड** | एउटा मात्र सिधा मोड | धेरै मोडहरू (विभिन्न कोणमा) |
| **प्रकाश स्रोत** | LASER (१३१०nm / १५५०nm) | LED (८५०nm / १३००nm) |
| **दूरी र गति** | लामो दूरी, धेरै उच्च गति | छोटो दूरी (क्याम्पस/ल्यान), कम लागत |
| **Dispersion / Loss** | न्यून लस र डिस्पर्शन | तुलनात्मक रूपमा बढी मोडेल डिस्पर्शन |`,
    diagrams: [
      {
        title: 'Cross Section of Optical Fiber',
        type: 'ascii',
        data: `+---------------------------------------+
|  [ Jacket ] बाहिरी कभर                |
|    +-----------------------------+    |
|    |  [ Strength Member FRP ]    |    |
|    |    +-------------------+    |    |
|    |    | [ Coating 250µm ] |    |    |
|    |    |   +-----------+   |    |    |
|    |    |   | Cladding  |   |    |    |
|    |    |   |  (125µm)  |   |    |    |
|    |    |   |   +---+   |   |    |    |
|    |    |   |   |Core|  |   |    |    |
|    |    |   |   +---+   |   |    |    |
|    |    |   +-----------+   |    |    |
|    |    +-------------------+    |    |
|    +-----------------------------+    |
+---------------------------------------+`,
        caption: 'अप्टिकल फाइबरको तहगत क्रस-सेक्सन संरचना'
      }
    ],
    examHighlights: [
      'SMF को कोर व्यास ८-१० माइक्रोमिटर हुन्छ।',
      'MMF को कोर व्यास ५० वा ६२.५ माइक्रोमिटर हुन्छ।',
      'क्लडिङको बाहिरी व्यास १२५ माइक्रोमिटर हुन्छ।'
    ]
  },
  {
    id: 8,
    chapterNumber: 'खण्ड ८',
    titleNepali: 'फाइबर स्प्लाइसिङ, क्लिभिङ र जोइन्ट क्लोजर विधिहरू',
    titleEnglish: 'Fusion Splicing, Precision Cleaving & Joint Closure (OJC)',
    category: 'optical_fiber',
    pageRef: 'म्यानुअल पृष्ठ: ८, २६-२८, १३५-१३६, २१०',
    summaryNepali: 'फ्युजन स्प्लाइसिङका ७ चरणहरू, ९०° क्लिभिङ, १ मिटर सिथ ओपनिङ र OJC क्लोजरमा १ सेमी लकको प्राविधिक कारण।',
    keyPoints: [
      'फ्युजन स्प्लाइसिङमा इलेक्ट्रिक आर्क (८०००°C+) द्वारा दुई फाइबर कोर पगालेर स्थायी रूपमा जोडिन्छ।',
      'स्प्लाइसिङका चरण: १. Cable Prep, २. Stripping, ३. Alcohol Cleaning (९९% IPA), ४. ९०° Cleaving, ५. Fusion Splicing, ६. Protection Sleeve (Heat Shrink), ७. OTDR/Power Test।',
      'ट्रेमा लुपिङका लागि केबल सिथ १ देखि १.५ मिटर खोलिन्छ।',
      'जोइन्ट क्लोजर (OJC) को क्ल्याम्पमा बाहिरी ज्याकेट ठीक १ सेन्टिमिटर (१ cm) मात्र छिराएर स्ट्रेंथ मेम्बर (FRP) लक गरिन्छ।'
    ],
    contentNepali: `### १. फाइबर स्प्लाइसिङ (Fiber Splicing)
दुई फाइबरलाई स्थायी (Fusion) वा अस्थायी (Mechanical) रूपमा जोड्ने प्रक्रिया।

### २. फ्युजन स्प्लाइसिङका ७ अनिवार्य चरणहरू:
1. **Cable Preparation**: बाहिरी आवरण हटाउने।
2. **Fiber Stripping**: स्ट्रिपरले २५० µm को कोटिङ हटाएर नाङ्गो सिसा (Bare Glass) निकाल्ने।
3. **Cleaning**: ९९% शुद्ध आइसोप्रोपाइल अल्कोहल (IPA) र लिन्ट-फ्री टिस्युले सफा गर्ने।
4. **Cleaving**: फाइबर क्लिभर (Fiber Cleaver) ले नाङ्गो कोरलाई ठीक **९० डिग्री ($९०^\\circ$)** को कोणमा समतल काट्ने।
5. **Fusion Splicing**: मेसिनमा राखेर अटोमेटिक अलाइनमेन्ट पछि इलेक्ट्रिक आर्क डिस्चार्जद्वारा जोड्ने (लस < ०.०२ dB)।
6. **Protection**: ६० mm को हिट श्रिंक स्लिभ (Heat Shrink Sleeve) तातो हिटरमा राखेर मजबुत बनाउने।
7. **Tray Management & Testing**: स्प्लाइस ट्रेमा घुमाएर (Looping) राख्ने र OTDR/OPM ले जाँच गर्ने।

### ३. सिथ ओपनिङ मापदण्ड:
- **१ मिटर सिथ ओपनिङ**: स्प्लाइस ट्रेमा फाइबरलाई तनावमुक्त (Macro-bending loss नहुने गरी) सजिलै घुमाउन र बिग्रेमा पुनः जोड्न पर्याप्त लम्बाइ राख्न १ मिटर खोलिन्छ।
- **OJC भित्र १ सेमी मात्र सिथ राख्नुको कारण**: क्लोजरको रबर बुसिङले बाहिरी कडा कभरलाई च्यापेर वाटरप्रुफ बनाउन र भित्रको FRP तारलाई स्क्रुमा लक गरी फाइबर तन्किन नदिन ठीक १ सेमी राखिन्छ।`,
    diagrams: [
      {
        title: 'Optical Fiber Splicing Sequence Flow',
        type: 'ascii',
        data: `[१. Stripper ले कोटिङ तास्ने] 
          |
[२. 99% IPA Alcohol ले पुछ्ने] 
          |
[३. Cleaver ले 90° मा काट्ने] 
          |
[४. Fusion Splicer मा Electric Arc ले जोड्ने (Splice Loss < 0.02 dB)] 
          |
[५. Heat Shrink Sleeve (60mm) हिटरमा तताउने] 
          |
[६. Splice Tray मा Looping (Dia 5cm) गरी Closure बन्द गर्ने]`,
        caption: 'फाइबर स्प्लाइसिङको आधिकारिक कार्यविधि'
      }
    ],
    examHighlights: [
      'फाइबर क्लिभरले ठीक ९० डिग्री ($९०^\\circ$) मा काट्नुपर्छ।',
      'स्प्लाइस प्रोटेक्सन स्लिभको लम्बाइ ६० mm (६ सेमी) वा ४० mm हुन्छ।',
      'फाइबर सफा गर्न Isopropyl Alcohol (IPA) प्रयोग गरिन्छ।'
    ]
  },
  {
    id: 9,
    chapterNumber: 'खण्ड ९',
    titleNepali: 'FTTH नेटवर्क उपकरणहरू: OLT, ODF, FDC र CPE',
    titleEnglish: 'FTTH Network Architecture: OLT, ODF, FDC, FAP & CPE',
    category: 'optical_fiber',
    pageRef: 'म्यानुअल पृष्ठ: ९-१०, ९८, २११, २२२',
    summaryNepali: 'FTTH नेटवर्कको पूर्ण संरचना, केन्द्रदेखि ग्राहकसम्म सिग्नल प्रवाहको क्रम र उपकरणहरूको भूमिका।',
    keyPoints: [
      'एक्सचेन्जदेखि ग्राहकको घरसम्म सिग्नल प्रवाहको सही क्रम: OLT $\\rightarrow$ ODF $\\rightarrow$ FDC $\\rightarrow$ FAP $\\rightarrow$ ONT/ONU (CPE)।',
      'OLT (Optical Line Terminal): एक्सचेन्जमा रहने मुख्य यन्त्र जसले इन्टरनेट सिग्नल फाइबरमा पठाउँछ।',
      'ODF (Optical Distribution Frame): एक्सचेन्ज भित्र फाइबरहरू टर्मिनेट र प्याचिङ गर्ने फ्रेम।',
      'FDC (Fiber Distribution Cabinet): सडकमा रहने ठूलो क्याबिनेट जसले फिडर केबललाई विभिन्न टोलहरूमा १:८ स्प्लिटरमार्फत बाँड्दछ।',
      'FAP (Fiber Access Point): ग्राहक नजिकको पोलमा राखिने बक्स जसबाट ड्रप केबल तानेर घरको राउटरमा जोडिन्छ।'
    ],
    contentNepali: `### १. FTTH (Fiber To The Home) को अवधारणा
FTTH मा एक्सचेन्ज (OLT) बाट ग्राहकको घरभित्रको राउटर (ONT) सम्म पूर्ण रूपमा अप्टिकल फाइबर मार्फत उच्च गतिको इन्टरनेट, भ्वाइस र टेलिभिजन (IPTV) सेवा प्रदान गरिन्छ।

### २. मुख्य उपकरणहरू र पूर्ण रूप:
- **OLT (Optical Line Terminal)**: एक्सचेन्जमा रहने मुख्य प्रणाली।
- **ODF (Optical Distribution Frame)**: एक्सचेन्ज भित्र फाइबर प्याच गर्ने फ्रेम।
- **Feeder Cable**: OLT/ODF बाट FDC क्याबिनेटसम्म जाने मुख्य फाइबर केबल।
- **FDC (Fiber Distribution Cabinet)**: बाहिरी चोकहरूमा राखिने क्याबिनेट, जहाँ १:८ स्प्लिटर हुन्छ।
- **Distribution Cable**: FDC बाट पोलका FAP बक्ससम्म जाने केबल।
- **FAP / FAT (Fiber Access Point / Terminal)**: पोलमा राखिने बक्स जहाँ १:८ स्प्लिटर हुन्छ र ८ जना ग्राहकलाई कनेक्सन दिन्छ।
- **Drop Cable**: FAP बाट ग्राहकको घरसम्म जाने १ वा २ कोरको लचिलो केबल।
- **ONT / ONU (Optical Network Terminal / Unit - CPE)**: ग्राहकको घरमा रहने वाइफाइ राउटर।`,
    diagrams: [
      {
        title: 'FTTH End-to-End Network Hierarchy',
        type: 'ascii',
        data: `[ Internet / IP Core ]
         |
    [ OLT (Exchange) ]
         | (Patch Cord)
    [ ODF (Optical Frame) ]
         | (Feeder OFC: 48C/96C)
    [ FDC (Cabinet) - 1:8 Splitter ]
         | (Distribution OFC: 12C/24C)
    [ FAP / FAT (Pole Box) - 1:8 Splitter ]
         | (Bow-Type Drop Cable)
    [ ONT / Wi-Fi Router (Customer House) ]`,
        caption: 'नेपाल टेलिकम FTTH नेटवर्क आर्किटेक्चर (५१२ क्षमताको FDC)'
      }
    ],
    examHighlights: [
      'FTTH को सिग्नल प्रवाहको सही क्रम: OLT -> ODF -> FDC -> FAP -> ONT हो।',
      'नेपालमा FTTH सेवा सन् २०१५/२०१६ बाट सुरु भएको हो।',
      'FAP बाट ग्राहकको घरसम्म जाने केबललाई Optical Drop Cable भनिन्छ।'
    ]
  },
  {
    id: 10,
    chapterNumber: 'खण्ड १०',
    titleNepali: '१२-कोर र २४-कोर फाइबर कलर कोडिङ',
    titleEnglish: '12-Core, 24-Core & 144-Core Fiber Color Code (TIA/EIA-598 & NTC)',
    category: 'optical_fiber',
    pageRef: 'म्यानुअल पृष्ठ: १०, ९८-९९, १९६',
    summaryNepali: 'नेपाल टेलिकम र TIA/EIA-598 मानक १२-कोर कलर कोड, २४ कोर स्ट्राइप विधि र १४४ कोर लुज ट्युब रङ क्रम।',
    keyPoints: [
      '१२ कोर फाइबर रङ क्रम: १-नीलो (Blue), २-सुन्तला (Orange), ३-हरियो (Green), ४-खैरो (Brown), ५-खरानी (Slate/Grey), ६-सेतो (White), ७-रातो (Red), ८-कालो (Black), ९-पहेंलो (Yellow), १०-बैजनी (Violet), ११-गुलाबी (Pink/Rose), १२-फिरोजा/आकाशी (Aqua)।',
      '२४ कोरमा पहिलो १२ कोर सामान्य र पछिल्लो १२ कोर (१३-२४) मा कालो धर्का (Black Stripe) वा रिङ मार्क हुन्छ।',
      '१४४ कोर केबलमा १२ वटा लुज ट्युब हुन्छन् र प्रत्येक ट्युबमा १२ वटा फाइबर कोर हुन्छन् ($१२ \\times १२ = १४४$)।'
    ],
    contentNepali: `### १. १२ कोर फाइबर कलर कोड (TIA/EIA-598 & NTC Standard)
| कोर नं. | रङ (नेपाली) | Color (English) | Hex Code |
| :---: | :---: | :---: | :---: |
| **१** | नीलो | Blue | #2563EB |
| **२** | सुन्तला | Orange | #F97316 |
| **३** | हरियो | Green | #16A34A |
| **४** | खैरो | Brown | #854D0E |
| **५** | खरानी | Slate / Grey | #64748B |
| **६** | सेतो | White | #F8FAFC |
| **७** | रातो | Red | #DC2626 |
| **८** | कालो | Black | #0F172A |
| **९** | पहेंलो | Yellow | #EAB308 |
| **१०** | बैजनी | Violet / Purple | #9333EA |
| **११** | गुलाबी | Pink / Rose | #EC4899 |
| **१२** | फिरोजा (आकाशी) | Aqua / Cyan | #06B6D4 |

### २. २४ कोर केबल पहिचान
१ देखि १२ सम्म माथिका रङहरू हुन्छन्। १३ देखि २४ सम्म तिनै रङहरूमा **कालो धर्का (Black Stripe)** हुन्छ:
- कोर १३ = Blue + Black Stripe
- कोर १४ = Orange + Black Stripe
- ...
- कोर २४ = Aqua + Black Stripe

### ३. १४४ कोर केबल (Loose Tube System)
१२ वटा लुज ट्युब (Red, Green, Blue, White, Violet, Orange, Grey, Yellow, Brown, Pink, Black, Aqua) र प्रत्येक ट्युब भित्र १२ वटा कोर हुन्छन्।`,
    diagrams: [
      {
        title: '१२-कोर फाइबर रङ क्रम तालिका',
        type: 'table',
        data: '1:Blue | 2:Orange | 3:Green | 4:Brown | 5:Slate | 6:White | 7:Red | 8:Black | 9:Yellow | 10:Violet | 11:Pink | 12:Aqua',
        caption: 'नेपाल टेलिकम तथा अन्तर्राष्ट्रिय मानक फाइबर कलर कोड'
      }
    ],
    examHighlights: [
      '१ नम्बर कोरको रङ Blue (नीलो) र १२ नम्बरको Aqua (आकाशी) हुन्छ।',
      '५ नम्बर कोरको रङ Slate/Grey (खरानी) र ६ नम्बरको White (सेतो) हुन्छ।',
      'फाइबर स्प्लाइसिङ गर्दा एउटै रङका कोरहरू मात्र आपसमा जोडिन्छ।'
    ]
  },
  {
    id: 11,
    chapterNumber: 'खण्ड ११',
    titleNepali: 'कपर केबलका प्रकार, २५-पेयर कलर कोड र लुप रेसिस्टेन्स',
    titleEnglish: 'Copper Cable Types, 25-Pair Color Code, Binders & Loop Resistance',
    category: 'osp_telecom',
    pageRef: 'म्यानुअल पृष्ठ: ११-१२, ९६-९७, २२४-२२५',
    summaryNepali: 'कपर केबलका प्रकार (प्राइमरी, सेकेन्डरी, ड्रप वायर), २५-पेयर कलर कोड (५ Major x ५ Minor), युनिट बाइन्डर र कन्डक्टर व्यास अनुसार रेसिस्टेन्स।',
    keyPoints: [
      '५ Major Colors: White (सेतो), Red (रातो), Black (कालो), Yellow (पहेंलो), Violet (बैजनी)।',
      '५ Minor Colors: Blue (नीलो), Orange (सुन्तला), Green (हरियो), Brown (खैरो), Slate/Grey (खरानी)।',
      '१० पेयरमा ५ जोडी White सँग (१-५) र ५ जोडी Red सँग (६-१०) बन्दछ।',
      'कन्डक्टर व्यास र रेसिस्टेन्स: ०.४mm = २८० $\\Omega$/km, ०.५mm = १७५ $\\Omega$/km, ०.९mm = ६३.२ $\\Omega$/km।',
      'MDF देखि ग्राहकसम्म अधिकतम लुप रेसिस्टेन्स सीमा २००० $\\Omega$ (वा १५०० $\\Omega$) हुन्छ।'
    ],
    contentNepali: `### १. २५-पेयर कपर कलर कोड सिस्टम
कपर टेलिफोन केबलमा ५ मुख्य (Major/Tip) र ५ सहायक (Minor/Ring) रङहरूको संयोजनबाट २५ जोडी तार बन्दछन्:
- **Major (Tip Wire)**: White, Red, Black, Yellow, Violet
- **Minor (Ring Wire)**: Blue, Orange, Green, Brown, Slate

#### पहिलो १० पेयरको संयोजन:
1. White - Blue
2. White - Orange
3. White - Green
4. White - Brown
5. White - Slate
6. Red - Blue
7. Red - Orange
8. Red - Green
9. Red - Brown
10. Red - Slate

### २. युनिट बाइन्डर (Unit Binder Ribbon Colors)
धेरै पेयर भएका केबलमा प्रत्येक १० वा ५० पेयरलाई छुट्याउन रङगिन रिबनले बाँधिन्छ:
- १ (१-१०): Blue रिबन
- २ (११-२०): Orange रिबन
- ३ (२१-३०): Green रिबन
- ४ (३१-४०): Brown रिबन
- ५ (४१-५०): Slate रिबन
- ६ (५१-६०): Blue + Red
- ७ (६१-७०): Orange + Red
- ८ (७१-८०): Green + Red
- ९ (८१-९०): Brown + Red
- १० (९१-१००): Slate + Red

### ३. कपर केबल लुप रेसिस्टेन्स (Loop Resistance)
- **०.४ mm कन्डक्टर**: २८० $\\Omega$/km
- **०.५ mm कन्डक्टर**: १७५ $\\Omega$/km
- **०.९ mm कन्डक्टर**: ६३.२ $\\Omega$/km
- **०.९ mm ड्रप वायर लुप रेसिस्टेन्स**: २७५ $\\Omega$/km
- **MDF देखि घरसम्म अधिकतम सीमा**: २००० $\\Omega$`,
    diagrams: [
      {
        title: '२५-पेयर कलर कोड म्याट्रिक्स',
        type: 'ascii',
        data: `Tip \\ Ring  | Blue (1) | Orange (2) | Green (3) | Brown (4) | Slate (5)
------------------------------------------------------------------
White (1-5)  | Pair 1   | Pair 2     | Pair 3    | Pair 4    | Pair 5
Red (6-10)   | Pair 6   | Pair 7     | Pair 8    | Pair 9    | Pair 10
Black (11-15)| Pair 11  | Pair 12    | Pair 13   | Pair 14   | Pair 15
Yellow(16-20)| Pair 16  | Pair 17    | Pair 18   | Pair 19   | Pair 20
Violet(21-25)| Pair 21  | Pair 22    | Pair 23   | Pair 24   | Pair 25`,
        caption: 'टेलिफोन कपर केबलको २५-पेयर मानक म्याट्रिक्स'
      }
    ],
    examHighlights: [
      '१० पेयर केबलमा ५ औं पेयर White-Slate र ६ औं पेयर Red-Blue हुन्छ।',
      '०.४mm केबलको प्रति किमी लुप रेसिस्टेन्स २८० ओम हुन्छ।',
      '०.५mm केबलको प्रति किमी लुप रेसिस्टेन्स १७५ ओम हुन्छ।'
    ]
  },
  {
    id: 12,
    chapterNumber: 'खण्ड १२',
    titleNepali: 'इलेक्ट्रिकल सिद्धान्त: ओम्स ल, किर्चोफ्स ल र पावर',
    titleEnglish: 'Electrical Principles: Ohms Law, Kirchhoffs Laws, Power & Energy',
    category: 'electrical',
    pageRef: 'म्यानुअल पृष्ठ: १३, ४४-४८, १२४',
    summaryNepali: 'भोल्टेज, करेन्ट, रेसिस्टेन्स, ओम्स ल ($V=IR$), किर्चोफ्स ल (KCL, KVL), पावर ($P=VI=I^2R=V^2/R$) र ऊर्जा ($E=Pt$) का सूत्र र हिसाब।',
    keyPoints: [
      'ओम्स ल: $V = I \\times R$, जहाँ $V$ भोल्टेज (Volt), $I$ करेन्ट (Ampere), र $R$ रेसिस्टेन्स (Ohm) हो।',
      'पावर: $P = V \\times I = I^2 R = \\frac{V^2}{R}$ (एकाइ: Watt, १ HP = ७४६ W)।',
      'ऊर्जा: $E = P \\times t$ (एकाइ: Watt-hour वा Joules)।',
      'Kirchhoff’s Current Law (KCL): नोडमा प्रवेश गर्ने कुल करेन्ट = बाहिरिने कुल करेन्ट ($\\sum I_{in} = \\sum I_{out}$)।',
      'Kirchhoff’s Voltage Law (KVL): बन्द लुपमा सबै भोल्टेज ड्रपको योग शून्य हुन्छ ($\\sum V = 0$)।'
    ],
    contentNepali: `### १. आधारभूत परिमाणहरू
- **Voltage (V)**: विद्युत विभावान्तर वा दबाब, एकाइ Volt (V)।
- **Current (I)**: इलेक्ट्रोनहरूको प्रवाह दर, एकाइ Ampere (A)।
- **Resistance (R)**: करेन्ट प्रवाहमा अवरोध, एकाइ Ohm ($\\Omega$)।
  - सूत्र: $R = \\rho \\frac{L}{A}$

### २. Ohm's Law (ओमको नियम)
$$V = I \\times R \\implies I = \\frac{V}{R} \\implies R = \\frac{V}{I}$$
**उदाहरण**: यदि $V = 12V$ र $R = 4\\Omega$ भए, $I = \\frac{12}{4} = 3A$।

### ३. Kirchhoff's Laws (किर्चोफका नियमहरू)
1. **KCL (Current Law)**: कुनै Junction (Node) मा आउने करेन्ट = जाने करेन्ट।
   $$\\sum I_{in} = \\sum I_{out} \\quad \\text{उदा: } 5A + 3A = 8A$$
2. **KVL (Voltage Law)**: कुनै Closed Loop मा सबै भोल्टेजको योगफल शून्य हुन्छ।
   $$\\sum V = 0 \\quad \\text{उदा: } 12V - 7V - 5V = 0$$

### ४. Electrical Power र Energy
- **Power**: $P = V \\times I = I^2 R = \\frac{V^2}{R}$ (Watt)
- **Energy**: $E = P \\times t$ (Watt-hour / Wh)
  - उदा: २४W को उपकरण ५ घण्टा चलाउँदा $E = 24 \\times 5 = 120\\text{ Wh}$।`,
    diagrams: [
      {
        title: 'Ohm’s Law & Power Triangle',
        type: 'ascii',
        data: `    [ V ]                  [ P ]
   /     \\                /     \\
  [ I * R ]              [ V * I ]`,
        caption: 'ओम्स ल र पावर गणना त्रिकोण'
      }
    ],
    formulaList: [
      'V = I * R',
      'I = V / R',
      'R = V / I',
      'P = V * I',
      'P = I^2 * R',
      'P = V^2 / R',
      'E = P * t',
      '1 HP = 746 Watts',
      'R = \\rho * L / A'
    ],
    examHighlights: [
      'KCL जंक्सनमा लागु हुन्छ (करेन्ट संरक्षण)।',
      'KVL बन्द लुपमा लागु हुन्छ (ऊर्जा संरक्षण)।',
      '१ हर्सपावर (HP) मा ७४६ वाट हुन्छ।'
    ]
  },
  {
    id: 13,
    chapterNumber: 'खण्ड १३',
    titleNepali: 'ब्याट्री बैंक, चार्जिङ मेकानिक्स र सिरिज-प्यारालाल',
    titleEnglish: 'Battery Banks, Series vs Parallel, Hydrometer & Specific Gravity',
    category: 'electrical',
    pageRef: 'म्यानुअल पृष्ठ: १४-१६, ४९-५०, १३९-१४०',
    summaryNepali: 'प्राइमरी vs सेकेन्डरी ब्याट्री, सिरिज (भोल्टेज जोडिन्छ) vs प्यारालाल (करेन्ट क्षमता बढ्छ), हाइड्रोमिटर परीक्षण र इलेक्ट्रोलाइट (३:१)।',
    keyPoints: [
      'Primary Cell: रिचार्ज गर्न नमिल्ने (ड्राई सेल, कार्बन-जिंक)।',
      'Secondary Cell: रासायनिक प्रक्रिया उल्ट्याएर पुनः चार्ज गर्न मिल्ने (Lead-Acid, Li-ion, Ni-Cd)।',
      'Series Connection: भोल्टेज थपिन्छ ($V_T = V_1 + V_2 + V_3$), करेन्ट उही रहन्छ।',
      'Parallel Connection: करेन्ट क्षमता थपिन्छ ($I_T = I_1 + I_2 + I_3$), भोल्टेज उही रहन्छ।',
      'पूर्ण चार्ज अवस्थामा लेड-एसिड ब्याट्रीको Specific Gravity १.२६० देखि १.२८० हुन्छ (हाइड्रोमिटरले नापिन्छ)।',
      'प्रति सेल भोल्टेज २.१V (नो-लोड) र डिस्चार्ज थ्रेसहोल्ड १.९V हुन्छ।'
    ],
    contentNepali: `### १. ब्याट्रीका प्रकारहरू
- **Primary Cell**: एक पटक मात्र प्रयोग हुने (Dry cell, Alkaline)।
- **Secondary Cell**: पटक-पटक चार्ज गर्न सकिने (Lead Acid, Lithium-ion)।

### २. सिरिज बनाम प्यारालाल जडान
- **Series Connection (भोल्टेज बढाउन)**:
  - $(+) \\rightarrow (-)$ क्रमैसँग जोडिन्छ।
  - कुल भोल्टेज = सबै सेलको भोल्टेजको योग ($V_T = 12V + 12V + 12V = 36V$)।
  - करेन्ट क्षमता समान रहन्छ।
- **Parallel Connection (करेन्ट/ब्याकअप बढाउन)**:
  - सबै $(+)$ एक ठाउँ र सबै $(-)$ अर्को ठाउँमा जोडिन्छ।
  - भोल्टेज समान रहन्छ ($12V$), करेन्ट क्षमता थपिन्छ ($120A + 120A + 120A = 360A$)।

### ३. ब्याट्री व्यवस्थापन र Specific Gravity
- **मापन यन्त्र**: हाइड्रोमिटर (Hydrometer)।
- **पूर्ण चार्ज अवस्था**: Specific Gravity = **१.२६० देखि १.२८०** (भोल्टेज ≈ २.१V देखि २.२V प्रति सेल)।
- **डिस्चार्ज अवस्था**: Specific Gravity = **१.२५० भन्दा कम** (भोल्टेज ≈ १.९V प्रति सेल)।
- **इलेक्ट्रोलाइट अनुपात**: ३ भाग पानी र १ भाग सल्फ्युरिक एसिड ($H_2SO_4$) अर्थात् **३:१**।`,
    diagrams: [
      {
        title: 'ब्याट्री सिरिज र प्यारालाल सर्किट',
        type: 'ascii',
        data: `[ SERIES ]: (+) --[ 12V ]--[ 12V ]--[ 12V ]-- (-)  ===> Total: 36V, 100Ah

             +---[ 12V ]---+
[ PARALLEL ]: (+)--+---[ 12V ]---+-- (-)  ===> Total: 12V, 300Ah
             +---[ 12V ]---+`,
        caption: 'सिरिजमा भोल्टेज बढ्छ, प्यारालालमा एम्पियर-आवर (Ah) क्षमता बढ्छ'
      }
    ],
    examHighlights: [
      'ब्याट्रीको भोल्टेज बढाउन सिरिज जडान गरिन्छ।',
      'ब्याट्रीको करेन्ट/ब्याकअप बढाउन प्यारालाल जडान गरिन्छ।',
      'पूर्ण चार्ज लेड एसिड ब्याट्रीको विशिष्ट गुरुत्व १.२६० - १.२८० हुन्छ।'
    ]
  },
  {
    id: 14,
    chapterNumber: 'खण्ड १४',
    titleNepali: 'इलेक्ट्रोनिक्स कम्पोनेन्टहरू: डायोड, ट्रान्जिस्टर र रेक्टिफायर',
    titleEnglish: 'Electronics: Diode, Transistor, Half/Full Wave Rectifiers & Filters',
    category: 'electronics',
    pageRef: 'म्यानुअल पृष्ठ: १६-१९, ५१-५२, ६३-७८',
    summaryNepali: 'सेमिकन्डक्टर फिजिक्स (P-type/N-type), PN जंक्सन डायोड, हाफ-वेभ र फुल-वेभ रेक्टिफायर, क्यापेसिटर फिल्टर र ट्रान्जिस्टर एम्प्लिफिकेसन।',
    keyPoints: [
      'सेमिकन्डक्टर: Silicon र Germanium (P-type मा Holes, N-type मा Electrons बढी)।',
      'Diode: करेन्टलाई Forward Bias मा मात्र बग्न दिने र Reverse Bias मा रोक्ने उपकरण।',
      'Rectifier: AC भोल्टेजलाई DC भोल्टेजमा बदल्ने सर्किट (Half-wave मा १ डायोड, Full-wave Bridge मा ४ डायोड)।',
      'Filter Circuit: रेक्टिफायरबाट आएको DC मा भएको रिपल (Ripple) हटाएर स्मूथ बनाउन Capacitor प्रयोग गरिन्छ।',
      'Transistor: सानो Base करेन्टले ठूलो Collector करेन्ट नियन्त्रण गरी एम्प्लिफायर वा स्विचको काम गर्छ (३ टर्मिनल: Emitter, Base, Collector)।'
    ],
    contentNepali: `### १. सेमिकन्डक्टर र डायोड
- **P-Type**: Hole (धनात्मक) बहुसंख्यक।
- **N-Type**: Electron (ऋणात्मक) बहुसंख्यक।
- **PN Junction Diode**: Forward Bias मा अन हुन्छ (करेन्ट बग्छ), Reverse Bias मा अफ हुन्छ (करेन्ट रोक्छ)।
- **विशेष डायोडहरू**:
  - **Zener Diode**: भोल्टेज रेगुलेसन (Reverse Breakdown मा स्थिर भोल्टेज राख्छ)।
  - **LED (Light Emitting Diode)**: विद्युतलाई प्रकाशमा बदल्छ।
  - **Photodiode**: प्रकाशलाई विद्युतमा बदल्छ (Receiver मा प्रयोग)।

### २. रेक्टिफायर सर्किट (Rectifiers)
- **Half Wave Rectifier**: १ वटा डायोड प्रयोग; AC को केवल पोजिटिभ हाफ साइकल पास गर्छ।
- **Full Wave Bridge Rectifier**: ४ वटा डायोड प्रयोग; AC को दुवै हाफ साइकललाई DC मा बदल्छ (दक्षता धेरै बढी)।
- **Filter (क्यापेसिटर)**: DC आउटपुटमा बाँकी रहेको AC कम्पोनेन्ट (Ripple) हटाउँछ।

### ३. ट्रान्जिस्टर (BJT Transistor)
तीन टर्मिनल: Emitter (E), Base (B), Collector (C)।
- **सिद्धान्त**: सानो Base करेन्टले ठूलो Collector-Emitter करेन्ट नियन्त्रण गर्छ।
- **प्रयोग**: Signal Amplifier र Electronic Switch।`,
    diagrams: [
      {
        title: 'Full Wave Bridge Rectifier with Capacitor Filter',
        type: 'ascii',
        data: `230V AC ---> [ Transformer ] ---> [ 4 Diode Bridge ] ---> [ Capacitor C ] ---> Pure DC Out
                                     (D1, D2, D3, D4)       (Ripple Removal)`,
        caption: 'फुल वेभ ब्रिज रेक्टिफायर र क्यापेसिटर फिल्टर सर्किट'
      }
    ],
    examHighlights: [
      'रेक्टिफायरले AC लाई DC मा बदल्छ।',
      'फिल्टरले DC बाट Ripple हटाउँछ।',
      'ट्रान्जिस्टरका ३ वटा टर्मिनल Emitter, Base, र Collector हुन्छन्।'
    ]
  },
  {
    id: 15,
    chapterNumber: 'खण्ड १५',
    titleNepali: 'डिजिटल इलेक्ट्रोनिक्स र बुलियन अलजेब्रा',
    titleEnglish: 'Digital Electronics, Boolean Theorems, Logic Gates & De Morgan’s Laws',
    category: 'electronics',
    pageRef: 'म्यानुअल पृष्ठ: ८०-८२, १७९-१८०',
    summaryNepali: 'बाइनरी प्रणाली (० र १), लजिक गेटहरू (AND, OR, NOT, NAND, NOR, XOR), बुलियन नियमहरू र डि मोर्गन्स ल।',
    keyPoints: [
      'बाइनरी प्रणाली: ० (Low/False) र १ (High/True)।',
      'AND Gate: सबै इनपुट १ हुँदा मात्र आउटपुट १ ($Y = A \\cdot B$)।',
      'OR Gate: कुनै एक इनपुट १ हुँदा आउटपुट १ ($Y = A + B$)।',
      'NOT Gate: इनपुटलाई उल्ट्याउने ($Y = A\'$)।',
      'De Morgan’s Laws: $(A \\cdot B)\' = A\' + B\'$ तथा $(A + B)\' = A\' \\cdot B\'$।'
    ],
    contentNepali: `### १. मुख्य लजिक गेटहरू
1. **AND Gate**: $Y = A \\cdot B$ (दुवै १ भए १, नत्र ०)।
2. **OR Gate**: $Y = A + B$ (कुनै १ भए १, दुवै ० भए ०)।
3. **NOT Gate (Inverter)**: $Y = A'$ (० को १, १ को ०)।
4. **NAND Gate**: NOT of AND ($Y = (A \\cdot B)'$) - युनिभर्सल गेट।
5. **NOR Gate**: NOT of OR ($Y = (A + B)'$) - युनिभर्सल गेट।
6. **XOR Gate**: दुई इनपुट फरक हुँदा १, समान हुँदा ० ($Y = A \\oplus B$) ।

### २. मुख्य बुलियन नियमहरू (Boolean Theorems)
- **Identity Law**: $A + 0 = A$, $A \\cdot 1 = A$
- **Null / Domination Law**: $A + 1 = 1$, $A \\cdot 0 = 0$
- **Idempotent Law**: $A + A = A$, $A \\cdot A = A$
- **Complement Law**: $A + A' = 1$, $A \\cdot A' = 0$
- **Commutative Law**: $A + B = B + A$, $A \\cdot B = B \\cdot A$
- **Distributive Law**: $A \\cdot (B + C) = AB + AC$, $A + BC = (A + B)(A + C)$
- **De Morgan's Theorem**:
  $$(A \\cdot B)' = A' + B'$$
  $$(A + B)' = A' \\cdot B'$$`,
    diagrams: [
      {
        title: 'Truth Table for Primary Logic Gates',
        type: 'ascii',
        data: `A  B | AND (A.B) | OR (A+B) | NAND | NOR | XOR
-----------------------------------------------
0  0 |     0     |    0     |  1   |  1  |  0
0  1 |     0     |    1     |  1   |  0  |  1
1  0 |     0     |    1     |  1   |  0  |  1
1  1 |     1     |    1     |  0   |  0  |  0`,
        caption: 'डिजिटल लजिक गेटहरूको सत्यता तालिका (Truth Table)'
      }
    ],
    formulaList: [
      'A + 0 = A, A * 1 = A',
      'A + 1 = 1, A * 0 = 0',
      'A + A = A, A * A = A',
      'A + A\' = 1, A * A\' = 0',
      '(A * B)\' = A\' + B\'',
      '(A + B)\' = A\' * B\''
    ],
    examHighlights: [
      'NAND र NOR गेटलाई Universal Gates भनिन्छ किनभने यिनीहरूबाट कुनै पनि सर्किट बनाउन सकिन्छ।',
      'De Morgan को पहिलो नियम $(A \\cdot B)\' = A\' + B\'$ हो।',
      'AND गेटमा सबै इनपुट १ हुँदा मात्र आउटपुट १ हुन्छ।'
    ]
  },
  {
    id: 16,
    chapterNumber: 'खण्ड १६',
    titleNepali: 'सुरक्षा उपकरण: फ्युज, एरेस्टर, MCB, MCCB र अर्थिङ',
    titleEnglish: 'Safety & Protection: Fuse vs Arrester, MCB, MCCB, ELCB & Earth Pit Specs',
    category: 'safety_tools',
    pageRef: 'म्यानुअल पृष्ठ: ९१-९३, ११३-११७, १२९-१३१, २०४',
    summaryNepali: 'फ्युज (Over-current, Series) बनाम एरेस्टर (Over-voltage/Surge, Parallel), MCB/MCCB, र अर्थिङ मापदण्ड (<५Ω Exchange, <१०Ω Field)।',
    keyPoints: [
      'Fuse: Over-Current (Short Circuit/Overload) हुँदा तार पग्लिएर लाइन काट्छ (सिरिजमा जडान)।',
      'Arrester (SPD): चट्याङ वा High Voltage Surge आउँदा भोल्टेजलाई जमिनमा डिस्चार्ज गर्छ (प्यारालालमा जडान, रियुजेबल)।',
      'MCB (Miniature Circuit Breaker): ०.५A देखि ६३A सम्म, ३-१०kA ब्रेकिङ क्षमता भएको अटोमेटिक स्विच।',
      'MCCB: ६३A देखि ३०००A सम्मको ठूलो औद्योगिक ब्रेकर (ACDB मा प्रयोग)।',
      'अर्थिङ मापदण्ड: सेन्ट्रल एक्सचेन्ज/MDF < ५ ओम, सेकेन्डरी नेटवर्क/क्याबिनेट/DP < १० ओम, संवेदनशील उपकरण < १ ओम।'
    ],
    contentNepali: `### १. फ्युज (Fuse) बनाम एरेस्टर (Arrester)
| आधार | फ्युज (Fuse) | एरेस्टर (Arrester / SPD) |
| :--- | :--- | :--- |
| **मुख्य काम** | Over-Current बाट सुरक्षा | High Voltage / Lightning Surge बाट सुरक्षा |
| **कार्य सिद्धान्त** | बढी करेन्ट आउँदा तार पग्लिन्छ | उच्च भोल्टेजलाई Earth तर्फ discharge गर्छ |
| **जडान तरिका** | **Series (श्रेणीक्रम)** मा | **Parallel / Earth सँग** |
| **काम गरेपछिको अवस्था** | पग्लिएपछि फेर्नुपर्छ (Disposable) | पुनः काम गर्छ (Reusable) |
| **लागत** | सस्तो | तुलनात्मक रूपमा महँगो |

### २. स्विचगियर (MCB, MCCB, RCCB)
- **MCB (Miniature Circuit Breaker)**: Bimetal strip (थर्मल ओभरलोड) र Magnetic coil (सर्ट सर्किट) ले स्वचालित रूपमा सर्किट ट्रिप गराउँछ।
- **MCCB (Molded Case Circuit Breaker)**: ६३A देखि ३०००A सम्म, ACDB (Alternating Current Distribution Box) मा प्रयोग।
- **RCCB / ELCB**: करेन्ट लिकेज हुँदा मानिसलाई करेन्ट लाग्नबाट जोगाउन ०.१ सेकेन्ड भित्र सर्किट काट्छ।

### ३. अर्थिङ प्रणाली (Earthing Specifications)
- **सामग्री**: GI Earth Rod, Earth Pit Chamber, Charcoal (कोइला), Salt (नुन), Bentonite Powder, Copper Wire।
- **मानक प्रतिरोध मान**:
  - एक्सचेन्ज / MDF / Power House: **< ५ $\\Omega$**
  - क्याबिनेट / DP / पोल / सेकेन्डरी: **< १० $\\Omega$**
  - संवेदनशील टेलिकम उपकरण: **< १ $\\Omega$**
  - समानान्तर अर्थिङ रड बीचको दूरी: कम्तीमा **३ मिटर**।`,
    diagrams: [
      {
        title: 'Fuse vs Arrester Connection Schematic',
        type: 'ascii',
        data: `[ FUSE (Series) ]:       Live Line ----[ FUSE ]----> [ LOAD (उपकरण) ]

[ ARRESTER (Parallel) ]: Live Line -----------------> [ LOAD (उपकरण) ]
                                    |
                             [ Surge Arrester ]
                                    |
                                  [Earth ⏚] (Surge Discharge to Ground)`,
        caption: 'फ्युज सिरिजमा र एरेस्टर प्यारालाल अर्थसँग जोडिन्छ'
      }
    ],
    examHighlights: [
      'चट्याङबाट बचाउन Arrestor (Lightning Arrester) राखिन्छ, फ्युज ओभर करेन्टबाट बचाउन राखिन्छ।',
      'सेकेन्डरी नेटवर्कमा अर्थिङ रेसिस्टेन्स १० ओम भन्दा कम हुनुपर्छ।',
      'अर्थिङ रड गाड्दा नुन र कोइला माटोको ओसिलोपन र कन्डक्टिभिटी बढाउन राखिन्छ।'
    ]
  },
  {
    id: 17,
    chapterNumber: 'खण्ड १७',
    titleNepali: 'टेलिकम फिल्ड टेस्टिङ उपकरणहरू: OTDR, Power Meter, VFL र Megger',
    titleEnglish: 'Field Testing Tools: OTDR, Optical Power Meter, VFL, Megger & DSP Meter',
    category: 'safety_tools',
    pageRef: 'म्यानुअल पृष्ठ: ९४-९५, १००-१०८, १६०',
    summaryNepali: 'OTDR को कार्य (दूरी, लस र फल्ट ग्राफ), OPM (dBm पावर), VFL (६५०nm रातो लेजर), Megger (इन्सुलेसन MΩ) र DSP मिटर।',
    keyPoints: [
      'OTDR (Optical Time Domain Reflectometer): फाइबर केबल भित्र प्रकाश पठाएर लम्बाइ, लस, स्प्लाइस पोइन्ट र फल्ट भएको दूरी नाप्ने ग्राफिकल यन्त्र।',
      'Optical Power Meter (OPM): फाइबरमा आइरहेको प्रकाशको शक्ति (dBm मा) नाप्ने यन्त्र।',
      'VFL (Visual Fault Locator): ६५० nm रातो लेजर लाइट पठाएर फाइबर कोर भाँचिएको वा मोडिएको ठाउँ आँखाले देखिने गरी पत्ता लगाउने सानो यन्त्र।',
      'Megger (Mega Ohm Meter): उच्च DC भोल्टेज दिएर केबलको इन्सुलेसन प्रतिरोध (Mega Ohm - MΩ) नाप्ने सुरक्षा उपकरण।',
      'C-Meter (Capacitance Meter): क्यापेसिटन्स नाप्ने र ड्रप वायरको दूरी पत्ता लगाउन प्रयोग हुने मिटर।'
    ],
    contentNepali: `### १. OTDR (Optical Time Domain Reflectometer)
- **कार्य सिद्धान्त**: लेजर पल्स पठाएर फर्किएको Backscatter र Reflection विश्लेषण गर्छ।
- **नाप्ने कुराहरू**: कुल फाइबर लम्बाइ, अटिन्युएसन लस (dB/km), स्प्लाइस लस (dB), रिफ्लेक्सन्स, र फल्ट/ब्रेक भएको दूरी।
- **OTDR Trace**:
  - Spike / Peak: कनेक्टर वा स्प्लाइसको रिफ्लेक्सन्स।
  - Step Drop: स्प्लाइस लस वा बेन्ड लस।
  - Complete Fall: फाइबर ब्रेक (केबल काटिएको ठाउँ)।

### २. Optical Power Meter (OPM)
फाइबर भित्रको प्रकाश शक्ति dBm (Decibel-milliwatt) वा µW मा नाप्छ।
- **OTDR बनाम OPM**: OTDR ले दूरी र ग्राफसहित विस्तृत फल्ट देखाउँछ भने OPM ले तत्काल पावर स्तर मात्र नाप्छ।

### ३. VFL (Visual Fault Locator)
६५० nm को देखिने रातो लेजर पठाउँछ। फाइबर भाँचिएको वा चर्किएको ठाउँबाट रातो बत्ती बाहिर चम्किन्छ।

### ४. Megger (इन्सुलेसन टेस्टर)
केबलको इन्सुलेसन लिकेज जाँच गर्न ५००V/१०००V DC दिन्छ।
- **उच्च प्रतिरोध ($> २००\\text{ M}\\Omega$)**: सुरक्षित र राम्रो इन्सुलेसन।
- **न्यून प्रतिरोध**: इन्सुलेसन कमजोर, ओस वा लिकेज फल्ट भएको।`,
    diagrams: [
      {
        title: 'OTDR Trace Waveform Representation',
        type: 'ascii',
        data: `Power (dB)
 ^
 |  [Initial Pulse]
 |     |\\__
 |     |   \\___ [Connector Reflection Peak]
 |     |       |\\__
 |     |       |   \\___ [Splice Loss Drop]
 |     |       |       |\\__
 |     |       |       |   \\___ [Fiber End Break Drop]
 0 +---+-------+-------+-------+---------------------------> Distance (km)
       0      1.2km   3.5km   8.4km (Fault Location)`,
        caption: 'OTDR ट्रेस वेभफर्ममा कनेक्टर, स्प्लाइस र फल्ट ब्रेक पोइन्ट'
      }
    ],
    examHighlights: [
      'फाइबरमा फल्ट भएको दूरी पत्ता लगाउन OTDR प्रयोग गरिन्छ।',
      'VFL ले ६५० nm रातो लेजर प्रयोग गर्छ।',
      'मेगरले इन्सुलेसन रेसिस्टेन्स Mega Ohm (MΩ) मा नाप्छ।'
    ]
  },
  {
    id: 18,
    chapterNumber: 'खण्ड १८',
    titleNepali: 'नेटवर्क माइग्रेसन (Copper to Fiber) र सुरक्षा कार्यविधि',
    titleEnglish: 'Network Migration, Cutover Steps, Safety at Height & Underground',
    category: 'osp_telecom',
    pageRef: 'म्यानुअल पृष्ठ: ११८, १३२-१३४, २०९-२१६',
    summaryNepali: 'कपर (ADSL/PSTN) बाट फाइबर (FTTH/GPON) मा माइग्रेसनका चरणहरू, अभिलेख (Record) को महत्त्व र फिल्ड सुरक्षा नियमहरू।',
    keyPoints: [
      'Network Migration: पुरानो प्रविधि (Copper/PSTN/2G) बाट आधुनिक उच्च गतिको प्रणाली (Fiber/FTTH/4G/5G) मा सेवा स्थानान्तरण गर्ने प्रक्रिया।',
      'माइग्रेसनका ६ चरण: १. Planning & Survey, २. Installation, ३. Configuration, ४. Testing, ५. Cutover (कटओभर), ६. Service Verification।',
      'Record को महत्त्व: सही ग्राहक पहिचान, शून्य त्रुटि र सेवा अवरोध नहुनका लागि डाटा रेकर्ड अनिवार्य हुन्छ।',
      'उचाइमा सुरक्षा: Safety Belt (Double Lanyard), Helmet, Safety Shoes, ७५° कोणमा भर्‍याङ, ३३kV/६६kV लाइनसँग कम्तीमा २ मिटर दूरी।'
    ],
    contentNepali: `### १. नेटवर्क माइग्रेसन (Network Migration)
- **कारणहरू**: ब्यान्डविथको माग वृद्धि, पुरानो प्रविधि अप्रचलित हुनु (Obsolete Technology), मर्मत खर्च घटाउनु र सेवाको गुणस्तर बढाउनु।
- **माइग्रेसन प्रवाह**:
  1. **Planning**: सर्भे, डिमान्ड विश्लेषण र डिजाइन।
  2. **Installation**: OLT, ODF, FDC, FAP र फाइबर केबल जडान।
  3. **Configuration**: IP, VLAN, PPPoE र सफ्टवेयर सेटिङ।
  4. **Testing**: OTDR, Power Meter र लुप टेस्ट।
  5. **Cutover (कटओभर)**: पुरानो कपर लाइन हटाएर फाइबरमा ट्रान्सफर।
  6. **Verification**: ग्राहकको घरमा इन्टरनेट र फोन चालू भएको पुष्टि।

### २. पोल तथा उचाइमा काम गर्दा सुरक्षा नियमहरू:
1. सम्बद्ध निकायबाट वर्क पर्मिट (NOC) लिने।
2. पोल बलियो छ कि छैन जाँच गर्ने।
3. Safety Helmet, Double Lanyard Safety Belt, Safety Shoes र Gloves अनिवार्य लगाउने।
4. भर्‍याङ प्रयोग गर्दा **$७५^\\circ$ कोण** मिलाउने।
5. बिजुलीको ११kV लाइनसँग १.२-१.५ मिटर र ३३kV/६६kV लाइनसँग **कम्तीमा २ मिटर दूरी** कायम गर्ने।
6. बिजुली लाइन क्रसिङ गर्दा **$९०^\\circ$ कोण**मा क्रस गर्ने।

### ३. म्यानहोल तथा अण्डरग्राउन्ड सुरक्षा:
1. म्यानहोल खोल्दा ३० मिनेट खुला राखेर ग्यास भेन्टिलेसन गराउने।
2. ग्यास डिटेक्टरले हावा सुरक्षित भएको पुष्टि गरेपछि मात्र पस्ने।
3. म्यानहोल बाहिर अनिवार्य रूपमा १ जना Standby Person बस्ने।
4. ट्राफिक कोन र चेतावनी बोर्डहरू राख्ने।`,
    diagrams: [
      {
        title: 'Network Migration Cutover Workflow',
        type: 'ascii',
        data: `[ १. योजना र सर्भे ] 
          |
[ २. पूर्वाधार स्थापना (OLT, ODF, FDC, FAP) ] 
          |
[ ३. कन्फिगरेसन (VLAN, IP, PPPoE) ] 
          |
[ ४. टेस्टिङ (OTDR, Power Meter) ] 
          |
[ ५. कटओभर (Cutover - सेवा स्थानान्तरण) ] 
          |
[ ६. सेवा प्रमाणीकरण (Verification & Monitoring) ]`,
        caption: 'नेपाल टेलिकम नेटवर्क माइग्रेसनको ६-चरणीय कार्यप्रवाह'
      }
    ],
    examHighlights: [
      'माइग्रेसन गर्दा सेवा अवरोध (Downtime) न्यून हुनुपर्छ।',
      'उच्च भोल्टेज ३३kV/६६kV लाइनसँग कम्तीमा २ मिटरको क्लेयरेन्स चाहिन्छ।',
      'म्यानहोलमा पस्नुअघि ग्यास टेस्ट अनिवार्य गर्नुपर्छ।'
    ]
  },
  {
    id: 19,
    chapterNumber: 'खण्ड १९',
    titleNepali: 'कम्प्युटर नेटवर्क टोपोलोजीहरू (Topologies)',
    titleEnglish: 'Network Topologies: Bus, Star, Ring, Mesh, Tree & Hybrid',
    category: 'networking',
    pageRef: 'म्यानुअल पृष्ठ: ९-१०, ८८-९२',
    summaryNepali: 'कम्प्युटर तथा टेलिकम सञ्जालमा डिभाइसहरूको भौतिक र तार्किक संरचना (Layout), फाइदा तथा बेफाइदा।',
    keyPoints: [
      'Bus Topology: एउटै मुख्य ब्याकबोन केबलमा सबै कम्प्युटर जोडिन्छ (सानो ल्याबमा सस्तो र सजिलो, तर मुख्य केबल काटिए पूरै नेटवर्क बन्द)।',
      'Star Topology: केन्द्रीय स्विच वा हबमा सबै कम्प्युटर जोडिन्छ (सबैभन्दा बढी प्रयोग हुने; एउटा पीसी बिग्रिए अरूलाई असर गर्दैन)।',
      'Ring Topology: गोलाकार रूपमा डाटा एक दिशामा मात्र सर्कुलेट हुन्छ (फाइबर अप्टिक नेटवर्कमा बढी प्रयोग)।',
      'Mesh Topology: प्रत्येक डिभाइस अन्य सबै डिभाइससँग सिधै जोडिएको हुन्छ (सबैभन्दा भरपर्दो र सुरक्षित, सैन्य तथा इन्टरनेट ब्याकबोनमा प्रयोग)।',
      'Tree Topology: हाइरार्किकल (Hierarchical) संरचना, ठूला विश्वविद्यालय र बैंकिङ नेटवर्कमा प्रयोग।'
    ],
    contentNepali: `### १. नेटवर्क टोपोलोजीको परिचय
Network Topology भनेको कम्प्युटर वा सञ्चार नेटवर्कमा विभिन्न उपकरण (Nodes) र केबलहरू कसरी आपसमा जोडिएका छन् भन्ने संरचना वा Layout हो।

### २. मुख्य टोपोलोजीहरू र विशेषताहरू
1. **Bus Topology**:
   - **संरचना**: \`PC1 --- PC2 --- PC3 --- PC4\` (Single Backbone Cable)
   - **प्रयोग**: सानो अफिस वा स्कुल कम्प्युटर ल्याब (कम खर्चिलो)।
   - **कमजोरी**: मुख्य केबल बिग्रिए पूरै नेटवर्क ठप्प हुन्छ।
2. **Star Topology**:
   - **संरचना**: सेन्ट्रल Switch/Hub बाट प्रत्येक PC मा अलग-अलग केबल।
   - **प्रयोग**: बैंक, कर्पोरेट अफिस र घरहरू (सबैभन्दा बढी प्रयोग हुने)।
   - **फाइदा**: कुनै एउटा कम्प्युटर वा केबल बिग्रिए पनि बाँकी नेटवर्क चल्छ।
3. **Ring Topology**:
   - **संरचना**: \`PC1 -> PC2 -> PC3 -> PC4 -> PC1\` (एक दिशामा घुम्ने)।
   - **प्रयोग**: टेलिकम ब्याकबोन र फाइबर रिङ नेटवर्क (SDH/DWDM)।
4. **Mesh Topology**:
   - **संरचना**: हरेक नोड एकअर्कासँग प्रत्यक्ष (Point-to-Point) रूपमा जोडिन्छ।
   - **प्रयोग**: सैन्य सञ्चार, हाई सेक्युरिटी नेटवर्क र मुख्य इन्टरनेट ब्याकबोन।
   - **फाइदा**: सबैभन्दा भरपर्दो (Most Reliable), तर धेरै केबल लाग्ने भएकाले महँगो।
5. **Tree Topology**:
   - **संरचना**: Main Server $\\rightarrow$ Switch $\\rightarrow$ Client PCs (Hierarchy)।`,
    diagrams: [
      {
        title: 'Network Topologies Compared',
        type: 'ascii',
        data: `[ BUS ]:  PC1===PC2===PC3===PC4        [ STAR ]:      PC1
                                                       |
[ RING ]: PC1 ---> PC2                       PC2---[SWITCH]---PC3
           ^        |                                  |
           |        v                                 PC4
          PC4 <--- PC3                 [ MESH ]: Fully Connected Grid`,
        caption: 'बस, स्टार, रिङ र मेस टोपोलोजीहरूको दृश्य संरचना'
      }
    ],
    examHighlights: [
      'सबैभन्दा बढी प्रयोग हुने टोपोलोजी Star Topology हो।',
      'सबैभन्दा सुरक्षित र Reliable टोपोलोजी Mesh Topology हो।',
      'Bus टोपोलोजीको मुख्य केबललाई Backbone Cable भनिन्छ।'
    ]
  },
  {
    id: 20,
    chapterNumber: 'खण्ड २०',
    titleNepali: 'एन्टेना, एन्टेना सिस्टम र विकिरण ढाँचा',
    titleEnglish: 'Antennas & Antenna Systems: Types, Gain, Radiation Pattern & Beamwidth',
    category: 'wireless_satellite',
    pageRef: 'म्यानुअल पृष्ठ: ११-१२, २२',
    summaryNepali: 'विद्युत संकेतलाई विद्युत-चुम्बकीय तरंग (EM Waves) मा बदल्ने एन्टेना, प्रकार (Dipole, Parabolic, Yagi-Uda, Horn) र विशेषताहरू।',
    keyPoints: [
      'एन्टेना एक ट्रान्सड्यूसर (Transducer) हो जसले विद्युत संकेतलाई रेडियो तरंग (RF) मा र रेडियो तरंगलाई पुनः विद्युतमा रूपान्तरण गर्छ।',
      'प्रकारहरू: Wire (Dipole), Loop, Array, Parabolic Dish (स्याटेलाइट), Horn (माइक्रोवेभ), Microstrip Patch (मोबाइल/GPS), Yagi-Uda (टिभी रिसेप्सन)।',
      'Gain (गेन): निश्चित दिशामा सिग्नल कति शक्तिशाली रूपमा प्रसारण वा ग्रहण गर्न सक्छ भन्ने क्षमता।',
      'Directivity: कुनै निश्चित दिशामा सिग्नल केन्द्रित गर्ने गुण।',
      'Radiation Pattern: अन्तरिक्षमा सिग्नल कुन दिशामा कति फैलिन्छ भन्ने ३-आयामी नक्सा।'
    ],
    contentNepali: `### १. एन्टेनाको परिचय
Antenna विद्युत संकेत (Electrical Signal) लाई विद्युत चुम्बकीय तरंग (Electromagnetic Radio Waves) मा परिवर्तन गरेर हावा वा खुला अन्तरिक्ष (Free Space) मा प्रसारण गर्ने तथा प्राप्त गर्ने उपकरण हो।

### २. एन्टेनाका प्रकारहरू
1. **Wire Antenna (Dipole)**: तारबाट बनाइने सरल एन्टेना।
2. **Parabolic Dish Antenna**: कचौरा/डिश आकारको उच्च गेन भएको एन्टेना (स्याटेलाइट र VSAT मा प्रयोग)।
3. **Horn Antenna**: हर्न आकारको एन्टेना (माइक्रोवेभ प्रसारणमा प्रयोग)।
4. **Microstrip / Patch Antenna**: सानो र पातलो एन्टेना (स्मार्टफोन र GPS मा प्रयोग)।
5. **Yagi-Uda Antenna**: टिभी रिसेप्सनका लागि प्रयोग हुने दिशात्मक (Directional) एन्टेना।

### ३. एन्टेनाका प्राविधिक विशेषताहरू (Characteristics)
- **Gain**: सिग्नल प्रसारण वा ग्रहण गर्ने क्षमता (dBi मा नापिन्छ)।
- **Directivity**: निश्चित दिशामा सिग्नल पठाउने शक्ति।
- **Radiation Pattern**: सिग्नल अन्तरिक्षमा कसरी फैलिन्छ भन्ने ज्यामितीय ढाँचा।
- **Polarization**: विद्युत क्षेत्र (E-Field) को कम्पन दिशा (Vertical, Horizontal, Circular)।
- **Impedance Matching**: एन्टेना र ट्रान्समिसन लाइन बीचको विद्युत मिलान (प्रायः ५० $\\Omega$ वा ७५ $\\Omega$)।
- **Beamwidth**: मुख्य सिग्नल केन्द्रित हुने कोणीय चौडाइ।`,
    diagrams: [
      {
        title: 'Radio Transmission & Antenna System Elements',
        type: 'ascii',
        data: `[Mic/Audio] -> [Modulator] -> [Tx Transmitter] -> [Transmitting Antenna] ===(Radio Waves)===> [Receiving Antenna] -> [Rx Receiver] -> [Demodulator] -> [Speaker]`,
        caption: 'रेडियो सञ्चार प्रणाली र एन्टेनाको कार्य प्रवाह'
      }
    ],
    examHighlights: [
      'स्याटेलाइट तथा VSAT मा Parabolic Dish एन्टेना प्रयोग हुन्छ।',
      'मोबाइल र GPS मा Patch/Microstrip एन्टेना प्रयोग हुन्छ।',
      'एन्टेनाले विद्युत संकेतलाई इलेक्ट्रोम्याग्नेटिक वेभमा रूपान्तरण गर्छ।'
    ]
  },
  {
    id: 21,
    chapterNumber: 'खण्ड २१',
    titleNepali: 'मोबाइल सञ्चार, १G देखि ५G को विकास र GSM संरचना',
    titleEnglish: 'Mobile Communications: 1G to 5G Evolution & GSM Architecture',
    category: 'wireless_satellite',
    pageRef: 'म्यानुअल पृष्ठ: १३-१६',
    summaryNepali: 'मोबाइल सञ्चारको पुस्तागत विकास (१G-५G), GSM ब्लक डायग्राम, MS, BSS (BTS, BSC), NSS (MSC, HLR, VLR, AuC, EIR) र इन्टरफेसहरू।',
    keyPoints: [
      '1G: एनालग भ्वाइस मात्र; 2G (GSM): डिजिटल भ्वाइस, SMS; 3G: उच्च गतिको इन्टरनेट, भिडियो कल; 4G (LTE): HD स्ट्रिमिङ, १००+ Mbps; 5G: अति न्यून लेटन्सी, IoT, AI।',
      'GSM Architecture का ३ मुख्य भाग: १. Mobile Station (MS - Handset+SIM), २. Base Station Subsystem (BSS - BTS, BSC), ३. Network Switching Subsystem (NSS - MSC, HLR, VLR, AuC, EIR)।',
      'HLR (Home Location Register): स्थायी ग्राहक डाटाबेस; VLR (Visitor Location Register): अस्थायी भ्रमण डाटाबेस।',
      'EIR (Equipment Identity Register): मोबाइल सेटको IMEI नम्बर ट्र्याक गर्ने प्रणाली; AuC: प्रमाणीकरण र सुरक्षा।'
    ],
    contentNepali: `### १. GSM (Global System for Mobile Communications)
GSM मोबाइल सञ्चारका लागि विश्वव्यापी डिजिटल वायरलेस मानक हो जसले सिमकार्ड (SIM) प्रयोग गर्दछ।

### २. १G देखि ५G को विकास (Evolution)
- **1G (First Generation)**: एनालग, भ्वाइस कल मात्र, न्यून सुरक्षा (नेपालमा नर्टेल १G बाट सुरु)।
- **2G (Second Generation - GSM)**: डिजिटल, भ्वाइस र SMS सुरु, राम्रो सुरक्षा।
- **3G (Third Generation)**: मोबाइल इन्टरनेट, भिडियो कल र मल्टिमिडिया।
- **4G (Fourth Generation - LTE)**: उच्च गतिको डाटा, HD भिडियो (नेपालमा २०१७ जनवरी १ बाट सुरु)।
- **5G (Fifth Generation)**: अति कम लेटन्सी (<१ms), गिगाबिट स्पीड, IoT र स्मार्ट सिटी।

### ३. GSM नेटवर्क संरचना (Architecture Elements)
1. **Mobile Station (MS)**: मोबाइल सेट र सिम कार्ड (Subscriber Identity Module)।
2. **Base Station Subsystem (BSS)**:
   - **BTS (Base Transceiver Station)**: मोबाइलसँग रेडियो सिग्नल आदानप्रदान गर्ने टावर।
   - **BSC (Base Station Controller)**: धेरै BTS हरूलाई नियन्त्रण गर्ने कन्ट्रोलर।
3. **Network Switching Subsystem (NSS)**:
   - **MSC (Mobile Switching Center)**: कल स्विचिङ र रुटिङ गर्ने मुख्य केन्द्र।
   - **HLR (Home Location Register)**: ग्राहकको स्थायी जानकारी राख्ने डाटाबेस।
   - **VLR (Visitor Location Register)**: नयाँ क्षेत्रमा आएका पाहुना ग्राहकको अस्थायी जानकारी।
   - **AuC (Authentication Center)**: प्रयोगकर्ताको सेक्युरिटी र पिन प्रमाणीकरण।
   - **EIR (Equipment Identity Register)**: मोबाइल सेटको १५ अंकको IMEI नम्बर दर्ता र चोरी नियन्त्रण।
4. **OSS (Operation & Support System)**: नेटवर्क मोनिटरिङ र मर्मत।`,
    diagrams: [
      {
        title: 'Cellular Mobile Communication Flow',
        type: 'ascii',
        data: `[ Mobile User / MS ]
        |  (Um Interface - Radio)
        v
[ BTS (Tower) ]
        |  (Abis Interface)
        v
[ BSC (Base Station Controller) ]
        |  (A Interface)
        v
[ MSC (Mobile Switching Center) ] <---> [ HLR / VLR / AuC / EIR ]
        |
   +----+----+
   |         |
 [PSTN]  [Internet]`,
        caption: 'सेलुलर मोबाइल नेटवर्कको आधारभूत ब्लक डायग्राम'
      }
    ],
    examHighlights: [
      'HLR ले ग्राहकको स्थायी डाटा र VLR ले अस्थायी डाटा राख्छ।',
      'EIR ले मोबाइल सेटको IMEI नम्बर जाँच गर्छ।',
      'BTS र BSC बीचको इन्टरफेसलाई Abis Interface भनिन्छ।'
    ]
  },
  {
    id: 22,
    chapterNumber: 'खण्ड २२',
    titleNepali: 'CDMA, स्प्रेड स्पेक्ट्रम र फेडिङ नियन्त्रण',
    titleEnglish: 'CDMA, Spread Spectrum (FHSS/DSSS), Rake Receiver & Power Control',
    category: 'wireless_satellite',
    pageRef: 'म्यानुअल पृष्ठ: १७-२०',
    summaryNepali: 'CDMA प्रविधि, स्प्रेड स्पेक्ट्रम (FHSS, DSSS), मल्टिपाथ फेडिङ, रेक रिसिभर (Rake Receiver), Near-Far समस्या र पावर कन्ट्रोल।',
    keyPoints: [
      'CDMA (Code Division Multiple Access): सबै प्रयोगकर्ताले एउटै फ्रिक्वेन्सी ब्यान्डमा छुट्टाछुट्टै युनिक कोड प्रयोग गरी सञ्चार गर्छन्।',
      'DSSS (Direct Sequence Spread Spectrum): सिग्नललाई उच्च गतिको Pseudo-random कोडसँग मिलाएर ठूलो ब्यान्डविथमा फैलाइन्छ।',
      'FHSS (Frequency Hopping): फ्रिक्वेन्सी छिटो-छिटो परिवर्तन गरी जम्प गराइन्छ (ब्लुटुथ र सैन्य सञ्चारमा प्रयोग)।',
      'Rake Receiver: मल्टिपाथबाट ढिलो र कमजोर आएका सिग्नलहरूलाई कम्बाइन गरी बलियो मूल सिग्नल बनाउँछ।',
      'Near-Far Problem: नजिकको मोबाइलले टाढाको मोबाइलको सिग्नल दबाउने समस्या, जसलाई Power Control ले समाधान गर्छ।'
    ],
    contentNepali: `### १. CDMA (Code Division Multiple Access)
CDMA मा विभिन्न प्रयोगकर्ताहरूलाई छुट्टाछुट्टै गणितीय कोड (Orthogonal Codes) दिएर एउटै फ्रिक्वेन्सी च्यानलमा एकै समयमा धेरै कलहरू प्रसारण गरिन्छ।

### २. Spread Spectrum प्रविधिहरू
- **DSSS (Direct Sequence)**: मूल सिग्नललाई चिप कोडले गुणन गरी विस्तृत ब्यान्डविथमा प्रसारण गर्छ।
- **FHSS (Frequency Hopping)**: पूर्वनिर्धारित Hopping Pattern अनुसार फ्रिक्वेन्सी परिवर्तन गरिन्छ (सैन्य सञ्चार र Bluetooth मा)।

### ३. Multipath Fading र समाधान
- **कारणहरू**: रेडियो सिग्नल घर, पहाड र रुखबाट Reflection, Refraction, Scattering र Diffraction हुँदा विभिन्न बाटोबाट समय फरक परी रिसिभरमा पुग्नु।
- **समाधान**: **Rake Receiver** प्रयोग गरिन्छ जसले विभिन्न बाटोबाट आएका सिग्नललाई मिलाएर (Combine) स्पष्ट बनाउँछ।

### ४. Near-Far Problem र Power Control
- **समस्या**: टावर नजिकको मोबाइलको सिग्नल धेरै शक्तिशाली भएर टाढाको मोबाइलको कमजोर सिग्नल दबिनु।
- **समाधान**: **Power Control Technique** मार्फत सबै मोबाइलको सिग्नल टावरमा पुग्दा समान शक्ति (Equal Strength) हुने गरी ट्रान्समिसन पावर नियन्त्रण गरिन्छ (Open Loop, Closed Loop, Outer Loop)।`,
    diagrams: [
      {
        title: 'CDMA Channels & Architecture',
        type: 'ascii',
        data: `[ Base Station ] ===(Forward: Pilot, Sync, Paging, Traffic)===> [ Mobile Station ]
[ Base Station ] <===(Reverse: Access, Traffic Channels)======== [ Mobile Station ]`,
        caption: 'CDMA प्रणालीमा फरवार्ड र रिभर्स च्यानलहरू'
      }
    ],
    examHighlights: [
      'मल्टिपाथ सिग्नलहरूलाई कम्बाइन गर्न Rake Receiver प्रयोग गरिन्छ।',
      'Near-Far समस्या समाधान गर्न Power Control प्रविधि प्रयोग हुन्छ।',
      'ब्लुटुथमा Frequency Hopping Spread Spectrum (FHSS) प्रयोग हुन्छ।'
    ]
  },
  {
    id: 23,
    chapterNumber: 'खण्ड २३',
    titleNepali: 'स्याटेलाइट सञ्चार, पृथ्वीको कक्षहरू र केप्लरका नियमहरू',
    titleEnglish: 'Satellite Communications, Orbits (LEO, MEO, GEO), Kepler’s Laws & VSAT',
    category: 'wireless_satellite',
    pageRef: 'म्यानुअल पृष्ठ: २९-३५, १९४',
    summaryNepali: 'स्याटेलाइट कम्युनिकेसन, अपलिङ्क/डाउनलिङ्क, फ्रिक्वेन्सी ब्यान्डहरू (C, Ku, Ka), केप्लरका ३ नियम, कक्षहरू (LEO, MEO, GEO ३५,७८६ किमी), र VSAT।',
    keyPoints: [
      'Uplink: पृथ्वीबाट स्याटेलाइटतर्फ सिग्नल पठाउने (उच्च फ्रिक्वेन्सी); Downlink: स्याटेलाइटबाट पृथ्वीतर्फ पठाउने।',
      'Geostationary Orbit (GEO): पृथ्वीबाट ३५,७८६ किमी उचाइमा रहन्छ, पृथ्वीको घुमाइको समान गतिमा घुम्छ (टिभी तथा दूरसञ्चारमा प्रयोग)।',
      'LEO (१६०-२,००० किमी): स्याटेलाइट इन्टरनेट (Starlink आदि) मा प्रयोग; MEO (२,०००-३५,७८६ किमी): GPS र नेभिगेसनमा प्रयोग।',
      'Kepler’s 3rd Law: परिक्रमा समयको वर्ग अर्ध-मुख्य अक्षको घनफलसँग समानुपाती हुन्छ ($T^2 \\propto a^3$)।',
      'VSAT (Very Small Aperture Terminal): सानो डिश एन्टेना (BUC, LNB, Modem) प्रयोग गरी दुर्गम तथा हिमाली क्षेत्रमा दिइने स्याटेलाइट इन्टरनेट/फोन।'
    ],
    contentNepali: `### १. स्याटेलाइट सञ्चारको अवधारणा
पृथ्वीको कक्ष (Orbit) मा रहेका कृत्रिम उपग्रह (Satellite) प्रयोग गरेर पृथ्वीको एक स्थानबाट अर्को स्थानमा सिग्नल प्रसारण गर्ने प्रणाली।
- **Uplink**: Ground Station $\\rightarrow$ Satellite
- **Downlink**: Satellite $\\rightarrow$ Ground Station

### २. स्याटेलाइट फ्रिक्वेन्सी ब्यान्डहरू
- **L-Band (१-२ GHz)**: मोबाइल स्याटेलाइट र GPS।
- **S-Band (२-४ GHz)**: मौसम रडार।
- **C-Band (४-८ GHz)**: टिभी प्रसारण र लामो दूरीको टेलिकम।
- **X-Band (८-१२ GHz)**: सैन्य तथा रडार।
- **Ku-Band (१२-१८ GHz)**: DTH टिभी (DishHome) र स्याटेलाइट इन्टरनेट।
- **Ka-Band (२६-४० GHz)**: आधुनिक उच्च गतिको स्याटेलाइट इन्टरनेट।

### ३. केप्लरका नियमहरू (Kepler's Laws)
1. **First Law (Law of Orbits)**: ग्रह/स्याटेलाइट अण्डाकार (Elliptical Orbit) मा घुम्छन्।
2. **Second Law (Law of Areas)**: समान समयमा समान क्षेत्रफल तय गर्छ (नजिक हुँदा गति बढी, टाढा हुँदा कम)।
3. **Third Law (Law of Periods)**: $T^2 \\propto a^3$ ($T$ = परिक्रमा समय, $a$ = Semi-major axis)।

### ४. स्याटेलाइट कक्षहरू (Earth Orbits)
- **LEO (Low Earth Orbit)**: १६० - २,००० किमी (कम लेटन्सी इन्टरनेट)।
- **MEO (Medium Earth Orbit)**: २,००० - ३५,७८६ किमी (GPS नेभिगेसन)।
- **GEO (Geostationary Earth Orbit)**: ठीक **३५,७८६ किमी** (पृथ्वीको गतिसँगै घुम्ने, सधैं एउटै ठाउँमा देखिने)।`,
    diagrams: [
      {
        title: 'Satellite Uplink and Downlink Flow',
        type: 'ascii',
        data: `[ Earth Station A ] ---( Uplink: High Freq )---> [ SATELLITE (Transponder) ]
                                                          |
[ Earth Station B ] <---( Downlink: Low Freq )------------+`,
        caption: 'स्याटेलाइट अपलिङ्क र डाउनलिङ्क सञ्चार'
      }
    ],
    examHighlights: [
      'Geostationary Orbit (GEO) को उचाइ ३५,७८६ किमी हुन्छ।',
      'DTH टिभीमा Ku-Band (१२-१८ GHz) प्रयोग हुन्छ।',
      'Uplink फ्रिक्वेन्सी Downlink फ्रिक्वेन्सी भन्दा सधैं बढी हुन्छ।'
    ]
  },
  {
    id: 24,
    chapterNumber: 'खण्ड २४',
    titleNepali: 'इन्टरनेट, IP नेटवर्किङ, OSI मोडल र सर्टफर्महरू',
    titleEnglish: 'Internet, IP Networking, OSI 7 Layers & Comprehensive Abbreviations',
    category: 'networking',
    pageRef: 'म्यानुअल पृष्ठ: ३७-३९, ४२, ८६-८७',
    summaryNepali: 'IP नेटवर्किङ, OSI ७ लेयर, IPv4 (32-bit) vs IPv6 (128-bit), Router/Switch/Modem र ३०+ प्राविधिक संक्षिप्त रूपहरू।',
    keyPoints: [
      'OSI Model का ७ लेयर: १. Physical, २. Data Link, ३. Network, ४. Transport, ५. Session, ६. Presentation, ७. Application।',
      'IPv4: ३२-बिट (४ बाइट्स, उदा: 192.168.1.1); IPv6: १२८-बिट (१६ बाइट्स, उदा: 2001:db8::1)।',
      'Router ले Layer 3 (Network Layer) मा IP Address प्रयोग गरी विभिन्न नेटवर्क जोड्छ।',
      'Switch ले Layer 2 (Data Link Layer) मा MAC Address प्रयोग गरी एउटै नेटवर्क भित्रका डिभाइस जोड्छ।',
      'Modem ले Analog लाई Digital र Digital लाई Analog सिग्नलमा रूपान्तरण गर्छ।'
    ],
    contentNepali: `### १. OSI Model का ७ लेयरहरू
| Layer No. | Layer Name | मुख्य कार्य (Function) | प्रयोग हुने उपकरण / प्रोटोकल |
| :---: | :--- | :--- | :--- |
| **७** | **Application** | प्रयोगकर्ता सेवा र सफ्टवेयर इन्टरफेस | HTTP, HTTPS, FTP, SMTP, DNS |
| **६** | **Presentation** | डाटा ढाँचा, इन्क्रिप्सन र कम्प्रेसन | SSL, TLS, JPEG, ASCII |
| **५** | **Session** | कनेक्सन स्थापना, व्यवस्थापन र समाप्ति | NetBIOS, RPC, PPTP |
| **४** | **Transport** | भरपर्दो डाटा डेलिभरी र फ्लो कन्ट्रोल | TCP (भरपर्दो), UDP (छिटो) |
| **३** | **Network** | प्याकेट रुटिङ र लजिकल ठेगाना | IP (IPv4, IPv6), Router, ICMP |
| **२** | **Data Link** | भौतिक फ्रेम र MAC ठेगाना व्यवस्थापन | Switch, Bridge, Ethernet, MAC |
| **१** | **Physical** | तारमार्फत बिट्स/सिग्नलको भौतिक प्रसारण | Cable, Hub, Repeater, Fiber |

### २. IPv4 बनाम IPv6
- **IPv4**: ३२ बिट ठेगाना, संख्या सीमित (४.३ अर्ब), डट-डेसिमल नोटेसन (उदा: 192.168.1.1)।
- **IPv6**: १२८ बिट ठेगाना, असीमित ठेगाना क्षमता, हेक्साडेसिमल नोटेसन (उदा: 2001:db8::1)।

### ३. मुख्य सर्टफर्महरू (Abbreviations List):
- **IP**: Internet Protocol (डाटा पठाउने नियम)
- **TCP**: Transmission Control Protocol (भरपर्दो प्रोटोकल)
- **UDP**: User Datagram Protocol (छिटो स्ट्रिमिङ प्रोटोकल)
- **DNS**: Domain Name System (वेबसाइट नामलाई IP मा बदल्ने)
- **DHCP**: Dynamic Host Configuration Protocol (अटोमेटिक IP दिने)
- **MAC**: Media Access Control (हार्डवेयरको भौतिक ४८-बिट ठेगाना)
- **NAT**: Network Address Translation (प्राइभेट IP लाई पब्लिक IP मा बदल्ने)
- **VPN**: Virtual Private Network (सुरक्षित इन्क्रिप्टेड सुरुङ)
- **ISP**: Internet Service Provider (इन्टरनेट सेवा प्रदायक)
- **VoIP**: Voice over Internet Protocol (इन्टरनेटबाट भ्वाइस कल)
- **QoS**: Quality of Service (नेटवर्क गुणस्तर व्यवस्थापन)
- **TTL**: Time To Live (प्याकेटको आयु/हप काउन्ट)`,
    diagrams: [
      {
        title: 'OSI 7 Layers Stack',
        type: 'ascii',
        data: `[ Layer 7: Application  ] -> HTTP, DNS, Email
[ Layer 6: Presentation ] -> Encryption, Data format
[ Layer 5: Session      ] -> Connection management
[ Layer 4: Transport    ] -> TCP, UDP, Port addressing
[ Layer 3: Network      ] -> IP, Routing (Router)
[ Layer 2: Data Link    ] -> MAC addressing (Switch)
[ Layer 1: Physical     ] -> Electrical/Optical bits (Cable, Hub)`,
        caption: 'OSI ७ तहको स्ट्याक संरचना'
      }
    ],
    examHighlights: [
      'Switch ले Layer 2 (MAC Address) मा काम गर्छ।',
      'Router ले Layer 3 (IP Address) मा काम गर्छ।',
      'IPv4 ३२-बिट र IPv6 १२८-बिट ठेगानाको हुन्छ।'
    ]
  },
  {
    id: 25,
    chapterNumber: 'खण्ड २५',
    titleNepali: 'कम्प्युटर फन्डामेन्टल्स र पेरिफेरल डिभाइसहरू',
    titleEnglish: 'Computer Fundamentals: CPU (ALU/CU), Peripherals & Basic Skills',
    category: 'networking',
    pageRef: 'म्यानुअल पृष्ठ: ८३-८७, २०७-२०८',
    summaryNepali: 'कम्प्युटर आर्किटेक्चर, CPU का भागहरू (ALU, CU, Memory), इनपुट/आउटपुट डिभाइसहरू, र आधारभूत सर्टकटहरू।',
    keyPoints: [
      'CPU (Central Processing Unit): कम्प्युटरको दिमाग जसले सबै डाटा प्रोसेस गर्छ।',
      'CPU का ३ भाग: १. ALU (Arithmetic Logic Unit - गणितीय र लजिकल काम), २. CU (Control Unit - सम्पूर्ण प्रणाली नियन्त्रण), ३. Memory Unit (RAM/ROM - डाटा भण्डारण)।',
      'Input Devices: Keyboard, Mouse, Scanner, Mic; Output Devices: Monitor, Printer, Speaker।',
      'Storage Devices: Hard Disk, SSD, Pen Drive, CD/DVD; Communication: Modem, NIC (Network Interface Card)।',
      'सर्टकटहरू: Ctrl+C (Copy), Ctrl+V (Paste), Ctrl+S (Save), Ctrl+Z (Undo)।'
    ],
    contentNepali: `### १. कम्प्युटर संरचना (Computer Architecture)
कम्प्युटर एक इलेक्ट्रोनिक उपकरण हो जसले प्रयोगकर्ताबाट इनपुट लिई प्रोसेस गरी उपयोगी नतिजा (Output) प्रदान गर्दछ।

### २. CPU का मुख्य भागहरू:
1. **ALU (Arithmetic Logic Unit)**: जोड, घटाउ, गुणन, भाग र तुलनात्मक लजिक अपरेशन गर्छ।
2. **CU (Control Unit)**: इनपुट, आउटपुट, मेमोरी र प्रोसेसिङ बीच समन्वय र नियन्त्रण गर्छ।
3. **Memory Unit**:
   - **RAM (Random Access Memory)**: अस्थायी प्राथमिक मेमोरी (Volatile)।
   - **ROM (Read Only Memory)**: स्थायी बुट मेमोरी (Non-volatile)।

### ३. पेरिफेरल डिभाइसहरू (Peripheral Devices)
- **Input**: कीबोर्ड, माउस, स्क्यानर, बारकोड रिडर।
- **Output**: मनिटर, प्रिन्टर, स्पिकर, प्रोजेक्टर।
- **Storage**: हार्ड डिस्क, पेनड्राइभ, मेमोरी कार्ड।`,
    diagrams: [
      {
        title: 'Computer Block Diagram',
        type: 'ascii',
        data: `[ Input Devices ] ---> [   CPU (Central Processing Unit)   ] ---> [ Output Devices ]
(Keyboard, Mouse)      |  +-----------------------------+  |      (Monitor, Printer)
                       |  | ALU (Arithmetic & Logic)    |  |
                       |  | CU  (Control Unit)          |  |
                       |  | Memory (RAM / ROM)          |  |
                       |  +-----------------------------+  |
                       +-----------------------------------+
                                        ^
                                        |
                             [ Secondary Storage ]
                             (HDD, SSD, Pen Drive)`,
        caption: 'कम्प्युटरको आधारभूत ब्लक डायग्राम'
      }
    ],
    examHighlights: [
      'CPU को पूरा रूप Central Processing Unit हो।',
      'ALU ले गणितीय र लजिकल गणना गर्छ।',
      'RAM भोलटाइल (अस्थायी) मेमोरी हो।'
    ]
  },
  {
    id: 26,
    chapterNumber: 'खण्ड २६',
    titleNepali: 'AC/DC ब्रिजहरू, इलेक्ट्रोस्ट्याटिक्स र इन्डक्टरहरू',
    titleEnglish: 'AC/DC Bridges (Wheatstone), Electrostatics & Inductors ($V=L di/dt$)',
    category: 'electrical',
    pageRef: 'म्यानुअल पृष्ठ: ५३-५७',
    summaryNepali: 'ह्वीटस्टोन ब्रिज ($R_1/R_2 = R_x/R_3$), इलेक्ट्रोस्ट्याटिक चार्ज र फिल्ड ($E=F/q$), क्यापेसिटर ($C=Q/V$) र इन्डक्टर ($V=L di/dt$)।',
    keyPoints: [
      'Wheatstone Bridge: अज्ञात प्रतिरोध (Unknown Resistance) मापन गर्ने प्रसिद्ध DC ब्रिज (सन्तुलन अवस्था: $R_1/R_2 = R_x/R_3$)।',
      'AC Bridges: Maxwell, Wien, Schering, र Anderson ब्रिज (Inductance, Capacitance र Frequency मापन गर्न)।',
      'Electric Field: चार्ज भएको वस्तु वरपरको प्रभाव क्षेत्र ($E = F / q$)।',
      'Inductor: चुम्बकीय क्षेत्र (Magnetic Field) मा ऊर्जा सञ्चय गर्ने कोइल ($V = L \\frac{di}{dt}$); करेन्टको अचानक परिवर्तनको विरोध गर्दछ।'
    ],
    contentNepali: `### १. AC/DC ब्रिजहरू (Bridges)
ब्रिज सर्किटहरू तुलनात्मक सिद्धान्तमा आधारित संवेदनशील मापन प्रणाली हुन्:
- **DC Wheatstone Bridge**: अज्ञात रेसिस्टेन्स ($R_x$) शुद्ध रूपमा नाप्न प्रयोग हुन्छ।
  - जब ग्याल्भानोमिटरमा करेन्ट शून्य हुन्छ ($I_G = 0$): $\\frac{R_1}{R_2} = \\frac{R_x}{R_3} \\implies R_x = R_3 \\times \\frac{R_1}{R_2}$।
- **AC Bridges**: Inductance ($L$) र Capacitance ($C$) मापन गर्न:
  - Maxwell Bridge, Wien Bridge, Schering Bridge, Anderson Bridge।

### २. इलेक्ट्रोस्ट्याटिक चार्ज र इलेक्ट्रिक फिल्ड
- समान चार्जले विकर्षण (Repel) र विपरीत चार्जले आकर्षण (Attract) गर्छन्।
- **इलेक्ट्रिक फिल्ड**: $E = \\frac{F}{q}$ (न्युटन प्रति कुलम्ब - N/C)।

### ३. इन्डक्टर (Inductor)
तारलाई कोइल आकारमा बेरेर बनाइन्छ। यसले चुम्बकीय क्षेत्रमा ऊर्जा सञ्चय गर्छ।
- **प्रेरित भोल्टेज**: $V = L \\frac{di}{dt}$ ($L$ = Inductance, एकाइ: Henry)।
- **प्रयोग**: फिल्टर सर्किट, चोक कोइल, ट्रान्सफर्मर र रेडियो ट्युनिङ।`,
    diagrams: [
      {
        title: 'Wheatstone Bridge Balanced Circuit',
        type: 'ascii',
        data: `        (+)
         |
      /\\   /\\
    R1  \\ /  R2
         |
      ---[G]--- (Galvanometer IG=0 when Balanced)
         |
    Rx  / \\  R3
      \\/   \\/
         |
        (-)`,
        caption: 'ह्वीटस्टोन ब्रिजको सन्तुलित सर्किट'
      }
    ],
    formulaList: [
      'R1 / R2 = Rx / R3',
      'E = F / q',
      'C = Q / V',
      'V = L * (di / dt)'
    ],
    examHighlights: [
      'ह्वीटस्टोन ब्रिजले अज्ञात रेसिस्टेन्स नाप्छ।',
      'इन्डक्टरले चुम्बकीय क्षेत्रमा ऊर्जा सञ्चय गर्छ।',
      'इन्डक्ट्यान्सको एकाइ हेनरी (Henry) हो।'
    ]
  },
  {
    id: 27,
    chapterNumber: 'खण्ड २७',
    titleNepali: 'पावर इनभर्टरहरू र वेभफर्म मेकानिक्स',
    titleEnglish: 'Power Inverters: Square Wave, Modified Sine Wave & Pure Sine Wave',
    category: 'electrical',
    pageRef: 'म्यानुअल पृष्ठ: १८, ६२, १९४',
    summaryNepali: 'इनभर्टरको कार्य (DC बाट AC), प्रकार (Square, Modified Sine, Pure Sine Wave), र संवेदनशील टेलिकम उपकरणका लागि प्रयोग।',
    keyPoints: [
      'Inverter: ब्याट्री वा सोलारबाट आउने DC विद्युतलाई घर/अफिसमा चाहिने AC विद्युत (२३०V, ५०Hz) मा बदल्ने उपकरण।',
      'Square Wave Inverter: सस्तो तर हार्मोनिक्स बढी, संवेदनशील उपकरणका लागि उपयुक्त छैन।',
      'Modified Sine Wave Inverter: सामान्य घरायसी बत्ती/पंखाका लागि उपयुक्त।',
      'Pure Sine Wave Inverter: विद्युत प्राधिकरणको जस्तै शुद्ध Sine Wave आउटपुट दिने, कम्प्युटर र टेलिकम उपकरणका लागि उत्कृष्ट।'
    ],
    contentNepali: `### १. इनभर्टरको परिभाषा
इनभर्टर एक इलेक्ट्रिकल उपकरण हो जसले DC (Direct Current) विद्युतलाई AC (Alternating Current) मा रूपान्तरण गर्दछ। यसले ब्याट्रीमा भण्डारण भएको विद्युतलाई टेलिकम एक्सचेन्ज, सर्भर वा घरायसी लोड चलाउन योग्य बनाउँछ।

### २. इनभर्टरका मुख्य ३ प्रकारहरू
1. **Square Wave Inverter**:
   - आउटपुट आयताकार (Square) हुन्छ।
   - बढी न्वाइज र तातो निकाल्छ, मोटर र टेलिकममा प्रयोग गर्न मिल्दैन।
2. **Modified Sine Wave Inverter**:
   - स्टेप गरिएको वेभफर्म हुन्छ।
   - साधारण घरायसी प्रयोजनका लागि उपयुक्त।
3. **Pure Sine Wave Inverter**:
   - ग्रिडको जस्तै चिल्लो र शुद्ध $y = A \\sin(\\omega t)$ साइन वेभ दिन्छ।
   - कम्प्युटर, टेलिकम स्विच, OLT र मेडिकल उपकरणका लागि अनिवार्य।`,
    diagrams: [
      {
        title: 'Inverter Waveforms Compared',
        type: 'ascii',
        data: `[ Pure Sine Wave ]:       _.-'''-._       _.-'''-._
                        -'         '-._.-'         '-.
[ Modified Sine Wave ]: +---+       +---+
                        |   |       |   |
                    ----+   +-------+   +-------
[ Square Wave ]:        +-------+       +-------+
                        |       |       |       |
                        +-------+-------+-------+`,
        caption: 'प्योर साइन वेभ, मोडिफाइड साइन वेभ र स्क्वायर वेभको तुलना'
      }
    ],
    examHighlights: [
      'इनभर्टरले DC लाई AC मा बदल्छ।',
      'कम्प्युटर र टेलिकमका लागि Pure Sine Wave इनभर्टर उपयुक्त हुन्छ।',
      'नेपालमा AC फ्रिक्वेन्सी ५० Hz (५० साइकल प्रति सेकेन्ड) हुन्छ।'
    ]
  },
  {
    id: 28,
    chapterNumber: 'खण्ड २८',
    titleNepali: 'एम्प्लिफायर, फिडब्याक र ओसिलेटरका सिद्धान्तहरू',
    titleEnglish: 'Amplifiers, Positive/Negative Feedback & Oscillators',
    category: 'electronics',
    pageRef: 'म्यानुअल पृष्ठ: ७८-७९, १८७',
    summaryNepali: 'कमजोर सिग्नल बढाउने एम्प्लिफायर, Positive Feedback (ओसिलेटर) बनाम Negative Feedback (स्थिरता, न्यून न्वाइज), र ओसिलेटर सर्किट।',
    keyPoints: [
      'Amplifier: कमजोर इनपुट सिग्नलको आयाम (Amplitude) बढाएर शक्तिशाली बनाउने सर्किट।',
      'Positive Feedback: आउटपुटको केही भाग इनपुटसँग एउटै फेजमा मिलाइन्छ (Gain बढ्छ, ओसिलेटरमा प्रयोग)।',
      'Negative Feedback: आउटपुटको केही भाग इनपुटको विपरीत फेजमा दिइन्छ (Gain घट्छ तर न्वाइज र डिस्टर्सन कम भई आवाज सफा र स्थिर हुन्छ)।',
      'Oscillator: बिना कुनै बाहिरी एसी इनपुट आफ्नै पोजिटिभ फिडब्याकले निरन्तर एसी वेभ (Radio Carrier/Clock) उत्पादन गर्ने सर्किट।'
    ],
    contentNepali: `### १. एम्प्लिफायर (Amplifier)
कमजोर इलेक्ट्रिकल सिग्नललाई ठूलो वा बलियो बनाउने इलेक्ट्रोनिक सर्किट।
- उदाहरण: माइक्रोफोनको आवाज बढाउन, अडियो एम्प्लिफायर, रेडियो रिसेप्शन।
- **Gain ($A$)**: $A = \\frac{V_{out}}{V_{in}}$

### २. फिडब्याक (Feedback System)
आउटपुट सिग्नलको केही अंश फिर्ता इनपुटमा पठाउने प्रक्रिया:
- **Positive Feedback**:
  - आउटपुट र इनपुट एउटै दिशामा थपिन्छ।
  - गेन अत्यधिक बढ्छ र सर्किट ओसिलेट हुन्छ (Oscillator मा प्रयोग)।
- **Negative Feedback**:
  - आउटपुटको अंश इनपुटको विरोधमा घटाइन्छ।
  - फाइदा: न्वाइज र डिस्टर्सन कम हुन्छ, ब्यान्डविथ बढ्छ, सर्किट स्थिर हुन्छ (High Fidelity Audio मा प्रयोग)।

### ३. ओसिलेटर (Oscillator)
DC पावर सप्लाईलाई निरन्तर फ्रिक्वेन्सी भएको AC तरंगमा परिवर्तन गर्ने उपकरण।
- **प्रयोग**: रेडियो ट्रान्समिटर, क्लक सर्किट, मोबाइल क्यारियर सिग्नल जेनेरेटर।`,
    diagrams: [
      {
        title: 'Amplifier Feedback Loop',
        type: 'ascii',
        data: `In ---> (+) ---> [ Amplifier (A) ] ---> Out
                 ^                     |
                 |                     |
                 +---[ Feedback (β) ]--+`,
        caption: 'एम्प्लिफायर र फिडब्याक लुप'
      }
    ],
    examHighlights: [
      'ओसिलेटरमा Positive Feedback प्रयोग हुन्छ।',
      'अडियो एम्प्लिफायरमा न्वाइज घटाउन Negative Feedback प्रयोग हुन्छ।',
      'ओसिलेटरले बिना बाहिरी इनपुट निरन्तर AC सिग्नल उत्पन्न गर्छ।'
    ]
  },
  {
    id: 29,
    chapterNumber: 'खण्ड २९',
    titleNepali: 'सोलार पावर (Solar PV) र चार्ज कन्ट्रोलर',
    titleEnglish: 'Solar PV Systems, MPPT Charge Controllers & Installation Steps',
    category: 'electrical',
    pageRef: 'म्यानुअल पृष्ठ: ६२, २३०',
    summaryNepali: 'घामबाट विद्युत उत्पादन (Solar PV), चार्ज कन्ट्रोलरको भूमिका, ब्याट्री ब्याकअप र जडानको सही क्रम।',
    keyPoints: [
      'Solar Panel: सूर्यको प्रकाशलाई फोटोभोल्टिक प्रभाव (Photovoltaic effect) द्वारा DC विद्युतमा रूपान्तरण गर्दछ।',
      'चार्ज कन्ट्रोलर (Charge Controller): प्यानलबाट आएको भोल्टेज नियन्त्रण गरी ब्याट्रीलाई ओभरचार्ज र ओभर-डिस्चार्ज हुनबाट जोगाउँछ।',
      'जडानको सही क्रम: Solar Panel $\\rightarrow$ Control Box (Charge Controller) $\\rightarrow$ Battery $\\rightarrow$ Load।',
      'टेलिकम टावर (BTS Shelter) र दुर्गम रिपिटर स्टेशनहरूमा २४ घण्टा पावर ब्याकअपका लागि सोलार प्रणाली अनिवार्य हुन्छ।'
    ],
    contentNepali: `### १. सोलार फोटोभोल्टिक (Solar PV) प्रणाली
सूर्यको प्रकाशलाई सिलिकन अर्धचालक तहहरू मार्फत सिधै DC विद्युतमा रूपान्तरण गर्ने नवीकरणीय ऊर्जा प्रणाली।

### २. मुख्य कम्पोनेन्टहरू
1. **Solar PV Panel**: प्रकाश संकलन गरी DC करेन्ट निकाल्छ।
2. **Charge Controller (PWM / MPPT)**: भोल्टेज नियमन गर्छ र ब्याट्रीको आयु बढाउँछ।
3. **Battery Bank**: सौर्य ऊर्जा रासायनिक रूपमा भण्डारण गर्छ।
4. **Inverter**: DC लाई २३०V AC मा बदल्छ।
5. **Load**: बत्ती, पंखा वा टेलिकम BTS उपकरण।

### ३. जडानको स्वाभाविक क्रम (Connection Order)
$$\\text{Solar Panel} \\longrightarrow \\text{Charge Controller} \\longrightarrow \\text{Battery} \\longrightarrow \\text{Load}$$`,
    diagrams: [
      {
        title: 'Solar PV System Architecture',
        type: 'ascii',
        data: `[ Solar Panels (DC) ]
         |
         v
[ Charge Controller / MPPT ] <---> [ Battery Bank (12V/24V/48V) ]
         |
         v
[ Inverter (DC to AC) ]
         |
         v
[ Telecom Loads / AC Equipment ]`,
        caption: 'अफ-ग्रिड सोलार पावर प्रणालीको लेआउट'
      }
    ],
    examHighlights: [
      'सोलार सिस्टम जडानको सही क्रम: Solar Panel -> Control Box -> Battery -> Load हो।',
      'चार्ज कन्ट्रोलरले ब्याट्रीलाई ओभरचार्ज हुनबाट जोगाउँछ।',
      'सोलार प्यानलले DC विद्युत उत्पादन गर्छ।'
    ]
  },
  {
    id: 30,
    chapterNumber: 'खण्ड ३०',
    titleNepali: 'पावर ट्रान्सफर्मर: संरचना, सिद्धान्त र प्रकारहरू',
    titleEnglish: 'Power Transformers: Mutual Induction, Step-up/down, Parts & Oil Cooling',
    category: 'electrical',
    pageRef: 'म्यानुअल पृष्ठ: १५-१६, २०५, २२८',
    summaryNepali: 'विद्युत-चुम्बकीय प्रेरण (Mutual Induction), स्टेप-अप र स्टेप-डाउन ट्रान्सफर्मर, कोर, वाइन्डिङ, कन्जर्भेटर ट्याङ्क र आयल कुलिङ।',
    keyPoints: [
      'Transformer: फ्रिक्वेन्सी परिवर्तन नगरी विद्युत चुम्बकीय प्रेरण (Electromagnetic Induction) द्वारा AC भोल्टेज बढाउने वा घटाउने स्थिर उपकरण।',
      'Step-up Transformer: भोल्टेज बढाउँछ ($V_S > V_P$, $N_S > N_P$), करेन्ट घटाउँछ।',
      'Step-down Transformer: भोल्टेज घटाउँछ ($V_S < V_P$, $N_S < N_P$), करेन्ट बढाउँछ।',
      'ट्रान्सफर्मरका मुख्य भागहरू: Primary Winding, Secondary Winding, Iron Core, Main Tank, Conservator Tank, Breather (सिलिका जेल), र Bushings।'
    ],
    contentNepali: `### १. ट्रान्सफर्मरको परिभाषा र सिद्धान्त
Transformer एक स्थिर (Static) इलेक्ट्रिकल मेसिन हो जसले फ्रिक्वेन्सी नबदलीकन म्युचुअल इन्डक्सन (Mutual Induction) को आधारमा AC भोल्टेज स्तर रूपान्तरण गर्दछ।
$$\\frac{V_P}{V_S} = \\frac{N_P}{N_S} = \\frac{I_S}{I_P}$$

### २. ट्रान्सफर्मरका प्रकारहरू
1. **भोल्टेजका आधारमा**:
   - **Step-Up**: $N_S > N_P$ (विद्युत उत्पादन केन्द्रबाट प्रसारण गर्दा भोल्टेज बढाउन)।
   - **Step-Down**: $N_S < N_P$ (गाउँ/सहरमा ११kV बाट ४००V/२३०V मा झार्न)।
   - **Isolation**: $N_S = N_P$ (सुरक्षा र विद्युतीय अलगावका लागि)।
2. **सप्लाईका आधारमा**: Single Phase र Three Phase (३-फेज)।
3. **कुलिङका आधारमा**: Air Natural, Air Forced, Oil Cooled।

### ३. मुख्य भागहरू
- **Iron Core**: चुम्बकीय फ्लक्स बहन गर्ने लामिनेटेड सिलिकन स्टिल कोर।
- **Conservator Tank**: तेल तातेर फैलिँदा र खुम्चिँदा सन्तुलन राख्ने सहायक ट्याङ्की।
- **Breather**: ओस छिर्न नदिन सिलिका जेल (Silica Gel) राखिएको हावा फेर्ने नली।`,
    diagrams: [
      {
        title: 'Step-Up vs Step-Down Transformer',
        type: 'ascii',
        data: `[ STEP-DOWN ]: Primary (धेरै फन्का NP) ===[ Core ]=== Secondary (थोरै फन्का NS)  ===> Low V Out
[ STEP-UP   ]: Primary (थोरै फन्का NP) ===[ Core ]=== Secondary (धेरै फन्का NS)   ===> High V Out`,
        caption: 'स्टेप-डाउन र स्टेप-अप ट्रान्सफर्मरको वाइन्डिङ संरचना'
      }
    ],
    formulaList: [
      'Vp / Vs = Np / Ns = Is / Ip',
      'Power In = Power Out (आदर्श ट्रान्सफर्मरमा)'
    ],
    examHighlights: [
      'ट्रान्सफर्मरले फ्रिक्वेन्सी परिवर्तन गर्दैन (नेपालमा ५०Hz नै रहन्छ)।',
      'स्टेप-डाउन ट्रान्सफर्मरले भोल्टेज घटाउँछ र करेन्ट बढाउँछ।',
      'ट्रान्सफर्मर म्युचुअल इन्डक्सन (Mutual Induction) सिद्धान्तमा काम गर्छ।'
    ]
  },
  {
    id: 31,
    chapterNumber: 'खण्ड ३१',
    titleNepali: 'टेलिकम कोठामा एअर कन्डिसनिङ (A/C) र भेन्टिलेसन',
    titleEnglish: 'Air Conditioning (A/C) in Telecom Rooms, Server Rooms & Shelters',
    category: 'safety_tools',
    pageRef: 'म्यानुअल पृष्ठ: १७-१८, २१३',
    summaryNepali: 'एक्सचेन्ज कोठा, सर्भर रुम, MDF रुम र BTS सेल्टरमा उपकरणको अत्यधिक तातो (Overheating) नियन्त्रण र स्थिर सञ्चालन।',
    keyPoints: [
      'A/C ले टेलिकम उपकरणहरूको तापक्रम (१८°-२२°C) र आर्द्रता (४५-५५%) नियन्त्रण गर्छ।',
      'प्रयोग हुने स्थानहरू: १. Exchange Room (Switch/Router), २. Data Center / Server Room, ३. MDF Room, ४. Battery & Power Room (Rectifier), ५. BTS Outdoor Shelter।',
      'A/C का मुख्य कम्पोनेन्ट: Compressor, Condenser Coil, Evaporator Coil, Expansion Valve, र Refrigerant Gas (R410A आदि)।',
      'ओभरहिटिङले उपकरण ह्याङ हुने, ब्याट्री सुक्ने र नेटवर्क डाउन हुने समस्या रोक्छ।'
    ],
    contentNepali: `### १. टेलिकममा एअर कन्डिसनिङ (A/C) को आवश्यकता
टेलिकम उपकरणहरू (स्विच, OLT, सर्भर, रेक्टिफायर, ब्याट्री) निरन्तर २४ घण्टा चल्दा अत्यधिक ताप उत्सर्जन हुन्छ। अत्यधिक तातोले सेमीकन्डक्टर बिग्रने र ब्याट्रीको केमिकल सुक्ने हुँदा तापक्रम स्थिर राख्न A/C अनिवार्य हुन्छ।

### २. प्रयोग हुने मुख्य स्थानहरू
1. **Exchange Room (Switching Room)**: ठूला कोर स्विच र OLT उपकरण राख्ने कोठा।
2. **Data Center / Server Room**: उच्च गतिको प्रोसेसिङ र क्लाउड सर्भर सुरक्षित राख्न।
3. **MDF Room**: कपर र फाइबर टर्मिनेसन उपकरणको सुरक्षा।
4. **Battery / Power Room**: ब्याट्री बैंक र रेक्टिफायरको ताप नियन्त्रण गर्न।
5. **BTS Shelter (Mobile Tower Site)**: बाहिरी पोल/टावरका उपकरणहरू सुरक्षित राख्न।

### ३. मुख्य कम्पोनेन्टहरू
- **Compressor (कम्प्रेसर)**: ग्यासलाई कम्प्रेस गरी उच्च चाप र तापक्रम बनाउँछ (मुख्य इन्जिन)।
- **Condenser (कन्डेन्सर)**: कोठाको तापलाई बाहिर फाल्छ।
- **Evaporator (इभापोरेटर)**: भित्री कोठाबाट ताप सोसेर चिसो हावा फाल्छ।`,
    diagrams: [
      {
        title: 'Air Conditioning Refrigeration Cycle',
        type: 'ascii',
        data: `[ Evaporator (कोठा चिसो पार्ने) ] <--- (चिसो तरल) --- [ Expansion Valve ]
              |                                                     ^
        (तातो ग्यास)                                            (उच्च चाप तरल)
              v                                                     |
    [ Compressor (इन्जिन) ] ---> (उच्च चाप तातो ग्यास) ---> [ Condenser (बाहिर ताप फाल्ने) ]`,
        caption: 'रेफ्रिजरेसन साइकलका ४ मुख्य चरणहरू'
      }
    ],
    examHighlights: [
      'A/C ले टेलिकम उपकरणलाई Overheating बाट जोगाउँछ।',
      'ब्याट्री कोठामा अत्यधिक तातो भए ब्याट्रीको आयु ह्वात्तै घट्छ।',
      'कम्प्रेसरले रेफ्रिजेरेन्ट ग्यासको चाप र तापक्रम बढाउँछ।'
    ]
  },
  {
    id: 32,
    chapterNumber: 'खण्ड ३२',
    titleNepali: 'वायरलाइन नेटवर्क योजना र डिमान्ड सर्भे (Demand Survey)',
    titleEnglish: 'Wireline Network Planning, Demand Survey & Area Selection',
    category: 'osp_telecom',
    pageRef: 'म्यानुअल पृष्ठ: ११२-११३, १६२-१६३',
    summaryNepali: 'टेलिकम नेटवर्क विस्तार अघि गरिने डिमान्ड सर्भे, जनसंख्या/घरधुरी संकलन, केबल रुट प्लानिङ र सर्भे रिपोर्ट तयारी।',
    keyPoints: [
      'Demand Survey: कुनै क्षेत्रमा फोन वा फाइबर इन्टरनेट सेवाको आवश्यकता कति छ भनी अग्रिम अध्ययन गर्ने प्रक्रिया।',
      'उद्देश्य: ग्राहकको माग पत्ता लगाउने, नेटवर्क विस्तारको निर्णय गर्ने, लागत अनुमान गर्ने र गुणस्तर सुधार गर्ने।',
      'सर्भेका ५ चरण: १. Area Selection, २. Field Visit, ३. Data Collection, ४. Demand Analysis, ५. Final Survey Report।',
      'संकलन गरिने विवरण: घरधुरी संख्या, जनसंख्या, व्यापारिक प्रतिष्ठान, विद्यमान सेवा र इन्टरनेटको माग।'
    ],
    contentNepali: `### १. डिमान्ड सर्भे (Demand Survey) को परिचय
Demand Survey भनेको कुनै निश्चित भौगोलिक क्षेत्रमा टेलिकम सेवा (फोन, इन्टरनेट, FTTH) को माग र सम्भावना कति छ भनी स्थलगत अध्ययन गरी नेटवर्क डिजाइन गर्ने प्रक्रिया हो।

### २. डिमान्ड सर्भेका ५ मुख्य चरणहरू:
1. **Area Selection**: सेवा विस्तार गर्नुपर्ने नयाँ वडा वा बस्तीको छनोट।
2. **Field Visit**: प्राविधिक टोलीद्वारा स्थलगत भ्रमण।
3. **Data Collection**: घर संख्या, जनसंख्या, व्यावसायिक फर्म, बाटोको अवस्था, पोलहरूको उपलब्धता आदि संकलन।
4. **Demand Analysis**: कति ग्राहकले तुरुन्तै सेवा लिन्छन् र आगामी ३-५ वर्षमा कति माग बढ्छ भनी हिसाब गर्ने।
5. **Report Preparation**: क्याबिनेट, DP र फाइबर केबलको आकार तय गरी Final Network Plan तयार गर्ने।

### ३. महत्त्व
- अनावश्यक लगानी र केबलको नोक्सानी रोक्छ।
- सही क्षमताको क्याबिनेट र DP राख्न मद्दत गर्छ।
- ग्राहकलाई छिटो र प्रभावकारी सेवा दिन सकिन्छ।`,
    diagrams: [
      {
        title: 'Demand Survey to Deployment Workflow',
        type: 'ascii',
        data: `[ Area Selection ] -> [ Field Survey ] -> [ Data Collection ] -> [ Demand Analysis ] -> [ Final Report ] -> [ Network Plan & Deployment ]`,
        caption: 'डिमान्ड सर्भेदेखि नेटवर्क निर्माणसम्मको प्रक्रिया'
      }
    ],
    examHighlights: [
      'डिमान्ड सर्भेले नेटवर्कको लागत र अनावश्यक इन्स्टलेसन घटाउँछ।',
      'सर्भे गर्दा घर संख्या र सम्भावित ग्राहक माग संकलन गरिन्छ।',
      'सर्भे रिपोर्टको आधारमा क्याबिनेट र DP को लोकेसन तय हुन्छ।'
    ]
  },
  {
    id: 33,
    chapterNumber: 'खण्ड ३३',
    titleNepali: 'पिक अप ज्वाइन्ट (PUJ) र नन-इन्ट्रुसिभ स्प्लाइसिङ',
    titleEnglish: 'Pick Up Joint (PUJ), Non-intrusive Branching & UY Connectors',
    category: 'osp_telecom',
    pageRef: 'म्यानुअल पृष्ठ: १२६-१२८',
    summaryNepali: 'मुख्य केबल नकाटी सेवा अवरुद्ध नगरी अतिरिक्त ग्राहक लाइन निकाल्ने पिक अप ज्वाइन्ट (PUJ) विधि, संरचना र सावधानी।',
    keyPoints: [
      'Pick Up Joint: मुख्य टेलिफोन केबल (Main Pair) नकाटीकन चलिरहेको सेवा अवरुद्ध नगरी नयाँ ग्राहकलाई लाइन दिन गरिने विशेष स्प्लाइस।',
      'संरचना: Main Cable Pair, Drop Pair, UY2/UDW Contact Blade Connector, Protective Cover, Locking Clip।',
      'यसले तारको इन्सुलेसन नताछी सिधै कन्डक्टरमा कन्ट्याक्ट बनाएर नयाँ जडान गर्छ।',
      'फाइदा: मुख्य केबल काट्नु पर्दैन, छिटो र सस्तो जडान, लाइन डिस्टर्ब नहुने।'
    ],
    contentNepali: `### १. पिक अप ज्वाइन्ट (Pick Up Joint - PUJ)
टेलिकम ल्यान्डलाइनमा प्रयोग हुने "Pick Up Joint" मुख्य केबललाई पूर्ण रूपमा नकाटी आवश्यक पेयरबाट नयाँ ग्राहक (Drop Wire) निकाल्ने विशेष प्रविधि हो।

### २. जडान गर्ने सामान्य प्रक्रिया:
1. मुख्य केबलको सिथ सावधानीपूर्वक खोल्ने तर तार नकाट्ने।
2. चाहिएको उपयुक्त पेयर पहिचान गर्ने।
3. मुख्य पेयरलाई UY2 कनेक्टर वा स्लटमा राख्ने।
4. नयाँ ग्राहकको ड्रप वायर जोड्ने।
5. Crimping Plier ले कनेक्टर थिचेर लक गर्ने (यसले इन्सुलेसन छेडेर तामामा कन्ट्याक्ट बनाउँछ र सिलिकन जेलले ओस रोक्छ)।
6. जोइन्टलाई वाटरप्रुफ बक्स वा कभरले सुरक्षित बन्द गर्ने।

### ३. प्रयोग हुने ठाउँहरू:
- एरियल कपर केबल पोलहरूमा।
- DP Box, पिलर बक्स, र म्यानहोल भित्र शाखा लाइन निकाल्न।`,
    diagrams: [
      {
        title: 'Pick Up Joint (PUJ) Branching',
        type: 'ascii',
        data: `Main Cable Pair (Uncut) =====================●=====================
                                             | (UY Connector Joint)
                                             |
                                  [ Drop Wire to Customer ]`,
        caption: 'मुख्य तार नकाटी ग्राहक लाइन निकाल्ने पिक अप ज्वाइन्ट'
      }
    ],
    examHighlights: [
      'पिक अप ज्वाइन्ट गर्दा मुख्य केबल काट्नु पर्दैन।',
      'कपर ड्रप वायर जोड्न UY2 / UDW कनेक्टर प्रयोग गरिन्छ।',
      'कनेक्टर भित्रको जेलले पानी पस्न र खिया लाग्न दिँदैन।'
    ]
  },
  {
    id: 34,
    chapterNumber: 'खण्ड ३४',
    titleNepali: 'टेलिफोन र पावर केबल सेपरेसन र EMI सुरक्षा',
    titleEnglish: 'Separation Between Power & Telecom Cables, EMI Mitigation & Clearances',
    category: 'safety_tools',
    pageRef: 'म्यानुअल पृष्ठ: १२२, १४६-१४७',
    summaryNepali: 'पावर लाइन र टेलिकम लाइन बीचको दूरी मापदण्ड (LV २३०V >= ३०cm, HV ३३kV/६६kV >= २m), ९०° क्रसिङ र इलेक्ट्रोम्याग्नेटिक इन्टरफेरेन्स।',
    keyPoints: [
      'सेपरेसन राख्नुको मुख्य कारण: विद्युत सुरक्षा (Safety), न्वाइज तथा क्रसटक नियन्त्रण (EMI Reduction), र भरपर्दो सञ्चार।',
      'Low Voltage Line (२३०V) सँग: कम्तीमा ३० सेमी (०.३ मिटर) दूरी; समानान्तर जाँदा ०.५ देखि १ मिटर।',
      'High Voltage Line (३३kV / ६६kV) सँग: कम्तीमा २ मिटर (२ m) ठाडो दूरी (Vertical Clearance)।',
      'विद्युत लाइनसँग क्रसिङ गर्दा सधैं ठीक ९० डिग्री ($९०^\\circ$) को कोणमा क्रस गर्नुपर्छ।'
    ],
    contentNepali: `### १. टेलिफोन र पावर केबल सेपरेसन किन चाहिन्छ?
1. **विद्युत चुम्बकीय हस्तक्षेप (EMI / Noise)**: पावर केबलको चुम्बकीय क्षेत्रले टेलिफोनमा आवाज बिगार्ने, हसिङ न्वाइज आउने र इन्टरनेट स्पिड घटाउने गर्छ।
2. **सुरक्षा (Safety)**: पावर लाइनमा सर्ट वा लिकेज हुँदा टेलिफोन तारमा हाइ भोल्टेज करेन्ट आएर प्राविधिक वा ग्राहकलाई करेन्ट लाग्न सक्छ।
3. **उपकरण सुरक्षा**: एक्सचेन्ज, क्याबिनेट वा राउटर डढ्नबाट जोगाउन।

### २. दूरी मापदण्ड (Standard Clearances):
- **२३०V घरायसी लाइन**: कम्तीमा ३० cm (०.३ m) दूरी।
- **समानान्तर रुट (Parallel Run)**: ०.५ मिटर देखि १ मिटर।
- **११ kV लाइन**: १.२ मिटर देखि १.५ मिटर।
- **३३ kV र ६६ kV लाइन**: **कम्तीमा २ मिटर**।
- **क्रसिङ कोण**: ठीक **$९०^\\circ$ (Right Angle)** मा प्रोटेक्टिभ स्लिभ राखेर क्रस गर्ने।`,
    diagrams: [
      {
        title: 'Power & Telecom Separation Clearances',
        type: 'ascii',
        data: `[ High Voltage Power Line (33kV / 66kV) ]
                  |
                  |  <--- कम्तीमा २ मिटर (2 m) ठाडो दूरी --->
                  v
[ Telecom / Optical Fiber Aerial Cable ]`,
        caption: 'उच्च भोल्टेज विद्युत लाइन र टेलिकम केबल बीचको न्यूनतम दूरी'
      }
    ],
    examHighlights: [
      '३३kV/६६kV लाइनसँग टेलिकम केबल कम्तीमा २ मिटर तल हुनुपर्छ।',
      'पावर लाइन र टेलिकम लाइन ९० डिग्री कोणमा क्रस गर्नुपर्छ।',
      'पावर लाइन नजिक हुँदा आउने न्वाइजलाई Electromagnetic Interference (EMI) भनिन्छ।'
    ]
  },
  {
    id: 35,
    chapterNumber: 'खण्ड ३५',
    titleNepali: 'बाहिरी प्लान्ट (OSP) बेस म्यापिङ र GIS',
    titleEnglish: 'Outside Plant (OSP) Base Mapping, GIS & Plant Records',
    category: 'osp_telecom',
    pageRef: 'म्यानुअल पृष्ठ: २५-२६, २१८',
    summaryNepali: 'Outside Plant (OSP) को परिभाषा, बेस म्याप (Base Maps), भौगोलिक सूचना प्रणाली (GIS), र नेटवर्क एसेट ट्र्याकिङ।',
    keyPoints: [
      'Outside Plant (OSP): एक्सचेन्ज भवन बाहिर रहने सबै भौतिक संरचनाहरू (पोल, केबल, क्याबिनेट, DP, म्यानहोल, डक्ट)।',
      'Base Maps: सडक, सीमाना र घरधुरी भएको आधारभूत नक्सा जसमाथि टेलिकम नेटवर्क डिजाइन गरिन्छ।',
      'GIS (Geographic Information System): सम्पूर्ण टेलिकम पूर्वाधारको डिजिटल नक्सा र डाटाबेस व्यवस्थापन।',
      'सटीक म्यापिङले फल्ट लोकेसन छिटो पत्ता लगाउन र नयाँ ग्राहक विस्तार गर्न मद्दत गर्छ।'
    ],
    contentNepali: `### १. आउट साइड प्लान्ट (Outside Plant - OSP)
Outside Plant भनेको टेलिकम एक्सचेन्ज वा सेन्ट्रल अफिस बाहिर (Outdoor Area) मा स्थापना गरिएका र ग्राहकसम्म सेवा पुर्‍याउने सम्पूर्ण नेटवर्क संरचना हो। यसमा पोल, भूमिगत केबल, क्याबिनेट, DP, म्यानहोल, फाइबर बक्स आदि पर्दछन्।

### २. बेस म्याप (Base Maps) र GIS
- **Base Map**: एउटा आधारभूत सादा नक्सा हो जसले सडक, चोक, नदी, राजनीतिक सीमा र घरहरू देखाउँछ।
- **GIS एकीकरण**: इन्जिनियरहरूले बेस म्यापमाथि टेलिफोन, कपर र फाइबर नेटवर्कका रुटहरू, च्याम्बरहरू र पोलहरूको सटीक जीपीएस लोकेसन इन्ट्री गर्छन्।`,
    diagrams: [
      {
        title: 'OSP Asset Hierarchy in GIS',
        type: 'ascii',
        data: `[ Central Exchange ] ===(Primary GIS Route)===> [ Cabinet / FDC ] ===(Secondary Route)===> [ DP / FAP ] ---> [ Home ]`,
        caption: 'GIS म्यापिङमा बाहिरी प्लान्ट संरचना'
      }
    ],
    examHighlights: [
      'OSP को पूरा रूप Outside Plant हो।',
      'एक्सचेन्ज बाहिरका सबै पोल, केबल र क्याबिनेट OSP मा पर्छन्।',
      'नेटवर्क नक्साङ्कनका लागि GIS प्रणाली प्रयोग गरिन्छ।'
    ]
  },
  {
    id: 36,
    chapterNumber: 'खण्ड ३६',
    titleNepali: 'नेपाल टेलिकम महत्त्वपूर्ण कोड, नम्बर तथा सेवा मितिहरू',
    titleEnglish: 'NTC Emergency/Inquiry Short Codes, Technology Milestones & Service Standards',
    category: 'ntc_standards',
    pageRef: 'म्यानुअल पृष्ठ: २२९, २३५, २३७, २३८',
    summaryNepali: 'नेपाल टेलिकमका सोधपुछ तथा मर्मत नम्बरहरू (१९८, १९७, १६०६ आदि), प्रविधि सुरुवातका ऐतिहासिक मितिहरू र सेवा मापदण्ड।',
    keyPoints: [
      '१९८: टेलिफोन, ADSL तथा FTTH मर्मत र कम्प्लेन दर्ता (Complaint Registration)।',
      '१९७: टेलिफोन सोधपुछ सेवा (Directory Enquiry - नम्बर पत्ता लगाउन)।',
      '१६०६: ल्यान्डलाइन (PSTN) बिल सोधपुछ; १६००: सामान्य सेवा IVR सोधपुछ; १६०१: कक्षा ११, १२ र SEE नतिजा; १६०२: TU नतिजा।',
      'प्रविधि सुरुवात मितिहरू: 4G/LTE: १ जनवरी २०१७ (२०७३ पुस १७), NTTV (IPTV): १ जनवरी २०२१ (२०७७ पुस १७), eSIM: १६ सेप्टेम्बर २०२२ (२०७९ भदौ ३१)।',
      'नेपाल दूरसञ्चार संस्थानबाट नेपाल टेलिकम कम्पनीमा रूपान्तरण: वि.सं. २०६१ साल।'
    ],
    contentNepali: `### १. नेपाल टेलिकमका उपयोगी सर्टकोडहरू:
- **१९८**: टेलिफोन/इन्टरनेट मर्मत तथा कम्प्लेन दर्ता
- **१९७**: टेलिफोन नम्बर सोधपुछ (Directory Enquiry)
- **१६०६**: PSTN टेलिफोन बिल सोधपुछ
- **१६००**: NTC सेवाहरूको सामान्य जानकारी (IVR)
- **१६०१**: SEE, कक्षा ११ र १२ नतिजा सोधपुछ
- **१६०२**: त्रिभुवन विश्वविद्यालय नतिजा सोधपुछ
- **१८०**: अन्तरदेशीय ट्रंक बुकिङ (STD)
- **१८७**: भारत ट्रंक बुकिङ
- **१८६**: अन्तर्राष्ट्रिय ट्रंक बुकिङ (ISD)

### २. ऐतिहासिक प्रविधि सुरुवात मितिहरू:
- **नेपाल टेलिकम कम्पनी स्थापना**: वि.सं. २०६१ साल
- **FTTH सेवा सुरुवात**: सन् २०१५/२०१६
- **4G / LTE सेवा सुरुवात**: १ जनवरी २०१७ (वि.सं. २०७३ पुस १७)
- **NTTV (IPTV) सेवा सुरुवात**: १ जनवरी २०२१ (वि.सं. २०७७ पुस १७)
- **eSIM सेवा सुरुवात**: १६ सेप्टेम्बर २०२२ (वि.सं. २०७९ भदौ ३१)`,
    diagrams: [
      {
        title: 'NTC Short Codes Cheat Sheet',
        type: 'table',
        data: '198: Repair/Complaint | 197: Directory Enquiry | 1606: PSTN Bill | 1600: IVR Info | 1601: SEE/Class 12 | 1602: TU Result',
        caption: 'नेपाल टेलिकम आधिकारिक सोधपुछ सर्टकोडहरू'
      }
    ],
    examHighlights: [
      'नेपाल टेलिकममा कम्प्लेन दर्ता गर्ने नम्बर १९८ हो।',
      'नेपालमा 4G सेवा १ जनवरी २०१७ मा सुरु भएको हो।',
      'PSTN बिल सोधपुछका लागि १६०६ डायल गरिन्छ।'
    ]
  },
  {
    id: 37,
    chapterNumber: 'खण्ड ३७',
    titleNepali: 'परीक्षोपयोगी Top-20 प्रश्नोत्तर र द्रुत सारांश',
    titleEnglish: 'Top-20 Frequently Asked Exam Questions & Quick Revision Points',
    category: 'ntc_standards',
    pageRef: 'म्यानुअल पृष्ठ: १७४-१७८, १८४-१९०',
    summaryNepali: 'CTEVT तथा नेपाल टेलिकम परीक्षामा बारम्बार सोधिने टप-२० प्रश्नहरूको स्पष्ट उत्तर र द्रुत परीक्षा सूत्रहरू।',
    keyPoints: [
      'Rectifier: AC लाई DC मा बदल्छ; Filter: DC बाट Ripple हटाउँछ।',
      'Transistor: Signal Amplify र Switch गर्छ (३ टर्मिनल: E, B, C); Oscillator: बिना इनपुट AC सिग्नल बनाउँछ।',
      'Boolean Algebra: ० र १ मा आधारित लजिक प्रणाली; De Morgan’s: $(A \\cdot B)\' = A\' + B\'$।',
      'OTDR: अप्टिकल फाइबरमा फल्ट, लस र दूरी पत्ता लगाउँछ; VFL: ६५०nm रातो लेजरले देखिने गरी फल्ट देखाउँछ।',
      'Megger: इन्सुलेसन रेसिस्टेन्स (MΩ) नाप्छ; Earth Meter: अर्थिङ प्रतिरोध (<५Ω/<१०Ω) नाप्छ।'
    ],
    contentNepali: `### १. Top 20 परीक्षोपयोगी प्रश्नोत्तरहरू:
1. **Rectifier के हो?** $\\rightarrow$ AC लाई DC मा परिवर्तन गर्ने उपकरण।
2. **Filter को काम के हो?** $\\rightarrow$ DC सिग्नलबाट रिपल (Ripple) हटाउने।
3. **Transistor के हो?** $\\rightarrow$ सिग्नल एम्प्लिफाई र स्विच गर्ने सेमीकन्डक्टर डिभाइस।
4. **Transistor का कति टर्मिनल हुन्छन्?** $\\rightarrow$ ३ वटा (Emitter, Base, Collector)।
5. **Oscillator के हो?** $\\rightarrow$ बिना इनपुट निरन्तर AC सिग्नल बनाउने सर्किट।
6. **Boolean Algebra के हो?** $\\rightarrow$ लजिक (० र १) मा आधारित गणितीय प्रणाली।
7. **AND Gate को आउटपुट कहिले १ हुन्छ?** $\\rightarrow$ सबै इनपुट १ हुँदा मात्र।
8. **OR Gate को आउटपुट कहिले ० हुन्छ?** $\\rightarrow$ सबै इनपुट ० हुँदा।
9. **Optical Fiber के हो?** $\\rightarrow$ प्रकाशको माध्यमबाट उच्च गतिमा डाटा पठाउने तार।
10. **OTDR को काम के हो?** $\\rightarrow$ फाइबरमा फल्ट, लस र दूरी पत्ता लगाउने।
11. **VFL के हो?** $\\rightarrow$ रातो लेजर लाइटले फाइबरको फल्ट आँखाले देखिने बनाउने टुल।
12. **Optical Power Meter के हो?** $\\rightarrow$ फाइबरको प्रकाश शक्ति (dBm) नाप्ने मिटर।
13. **Photodiode के हो?** $\\rightarrow$ प्रकाशलाई विद्युत सिग्नलमा बदल्ने उपकरण।
14. **Splice के हो?** $\\rightarrow$ दुई फाइबरलाई स्थायी रूपमा जोड्ने प्रक्रिया।
15. **Primary Network के हो?** $\\rightarrow$ Exchange देखि क्याबिनेटसम्मको फिडर नेटवर्क।
16. **Secondary Network के हो?** $\\rightarrow$ क्याबिनेटदेखि DP सम्मको वितरण नेटवर्क।
17. **Drop Wire के हो?** $\\rightarrow$ DP बाट ग्राहकको घरसम्म जाने अन्तिम तार।
18. **Megger के हो?** $\\rightarrow$ केबलको इन्सुलेसन प्रतिरोध (MΩ) नाप्ने सुरक्षा उपकरण।
19. **Earth Meter के हो?** $\\rightarrow$ जमिनको अर्थिङ प्रतिरोध नाप्ने मिटर।
20. **Star Topology मा केन्द्रीय उपकरण के हुन्छ?** $\\rightarrow$ Switch वा Hub।`,
    diagrams: [
      {
        title: 'Quick Success Exam Formula Table',
        type: 'table',
        data: 'Rectifier=AC->DC | Filter=Ripple Remove | Transistor=Amp+Switch | OTDR=Fiber Fault/Distance | VFL=Red Light | Megger=Insulation (MΩ) | Earth Meter=Earthing (<5Ω)',
        caption: 'परीक्षामा शतप्रतिशत सोधिने द्रुत सूत्रहरू'
      }
    ],
    examHighlights: [
      'Top 20 प्रश्नहरू CTEVT परीक्षामा ९०% भन्दा बढी दोहोरिन्छन्।',
      'इन्सुलेसन रेसिस्टेन्स सधैं उच्च (High MΩ) भएको राम्रो मानिन्छ।',
      'लुप रेसिस्टेन्स र अर्थिङ रेसिस्टेन्स सधैं कम (Low Ω) भएको राम्रो मानिन्छ।'
    ]
  },
  {
    id: 38,
    chapterNumber: 'खण्ड ३८',
    titleNepali: 'CTEVT प्रयोगात्मक सीप परीक्षण (Skill Test Practical Guidelines)',
    titleEnglish: 'CTEVT Level-1 & Level-2 Practical Skill Test Master Guide',
    category: 'ntc_standards',
    pageRef: 'म्यानुअल पृष्ठ: १-३ (Practical Section)',
    summaryNepali: 'CTEVT र NSTB द्वारा लिइने प्रयोगात्मक परीक्षाका ३ वटै सेटहरू, कार्य सम्पादन चेकलिस्ट र भाइभा तयारी।',
    keyPoints: [
      'Practical Set 1: टेलिफोन नेटवर्क रेखाचित्र, इलेक्ट्रिकल टेस्ट (Continuity/Voltage), ग्राहक लाइन जडान, MDF सिफ्टिङ, १० पेयर एरियल केबल स्प्लाइसिङ।',
      'Practical Set 2: पोलमा एसेसरिज फिटिङ, केबल तान्ने (Cable Pulling), प्राइमरी पेयरमा जम्पर र फ्युज, सिथ कन्टिन्युटी, ADSL स्प्लिटर जडान।',
      'Practical Set 3: पोल फिटिङ, ब्याट्री भोल्टेज टेस्ट रिपोर्ट, क्याबिनेट टर्मिनेसन, DP फिटिङ र मौखिक भाइभा (VIVA)।',
      'सीप परीक्षणमा PPE को प्रयोग, उपकरणको सही ह्यान्डलिङ, र सफाइमा विशेष अंक छुट्याइन्छ।'
    ],
    contentNepali: `### १. CTEVT / NSTB प्रयोगात्मक परीक्षा सेटहरू
- **सेट १**:
  1. टेलिफोन नेटवर्क डायग्राम तयार पार्नुहोस्।
  2. Electrical Test (Voltage & Continuity) गर्नुहोस्।
  3. ग्राहकको टेलिफोन लाइन जडान गर्नुहोस्।
  4. MDF Shifting गर्नुहोस्।
  5. Drop Wire मर्मत गर्नुहोस्।
  6. १० पेयर एरियल केबल स्प्लाइसिङ गर्नुहोस्।
- **सेट २**:
  1. Pole मा Accessories (Suspension Clamp, Pin Bracket, DP, Bridle Ring) फिट गर्नुहोस्।
  2. एक पोलदेखि अर्को पोलसम्म Cable Pulling गर्नुहोस्।
  3. १० पेयर कपर केबल स्प्लाइसिङ गर्नुहोस्।
  4. दिएको टेलिफोन नम्बर प्राइमरी पेयरमा जम्पर गरी फ्युज राख्नुहोस्।
  5. केबललाई सिथ कन्टिन्युटी गर्नुहोस्।
  6. ADSL स्प्लिटरमा फोन र इन्टरनेट लाइन जोडेर देखाउनुहोस्।
- **सेट ३**:
  1. ब्याट्री भोल्टेज र कन्टिन्युटी नापी Test Report बनाउनुहोस्।
  2. क्याबिनेट टर्मिनेसन (Cabinet Termination) गर्नुहोस्।
  3. DP फिटिङ गर्नुहोस्।
  4. VIVA Voice मा प्राविधिक प्रश्नहरूको उत्तर दिनुहोस्।`,
    diagrams: [
      {
        title: 'Practical Exam Setup & Evaluation Workflow',
        type: 'ascii',
        data: `[ १. सुरक्षा तयारी (PPE: Helmet, Gloves, Safety Belt) ]
                      |
[ २. उपकरण पहिचान र चेक (OTDR, Splicer, Multimeter, Cleaver) ]
                      |
[ ३. कार्य सम्पादन (Cable Pulling, Pole Fitting, Splicing, Punching) ]
                      |
[ ४. मापन तथा परीक्षण (Voltage, Continuity, Earth Resistance, Loss) ]
                      |
[ ५. मौखिक भाइभा (VIVA Oral Exam) ]`,
        caption: 'CTEVT राष्ट्रिय सीप परीक्षण परीक्षा प्रक्रिया'
      }
    ],
    examHighlights: [
      'प्रयोगात्मक परीक्षामा सुरक्षा उपकरण (PPE) प्रयोग नगरे अङ्क काटिन्छ।',
      'Krone Tool ले पन्च गर्दा तार काट्ने ब्लेड बाहिरपट्टि फर्किनुपर्छ।',
      'फाइबर स्प्लाइसिङ गर्दा स्प्लाइस लस ०.०२ dB भन्दा कम हुनुपर्छ।'
    ]
  }
];

export const telecomSymbolsList = [
  { symbol: '○', nameNepali: 'पोल (Pole)', description: 'केबल वा तार बोक्ने खम्बा (७m, ७.५m, ८m)' },
  { symbol: '⊡', nameNepali: 'DP (Distribution Point)', description: 'ग्राहक लाइन वितरण गर्ने बाकस (१० वा २० पेयर)' },
  { symbol: '□', nameNepali: 'क्याबिनेट (Cabinet)', description: 'प्राइमरी र सेकेन्डरी नेटवर्क जोड्ने मुख्य वितरण बाकस' },
  { symbol: '△', nameNepali: 'ज्वाइन्ट / स्प्लाइस (Joint / Splice)', description: 'केबल वा फाइबर स्थायी रूपमा जोडिएको स्थान' },
  { symbol: '⬒', nameNepali: 'म्यानहोल (Manhole)', description: 'भूमिगत केबल निरीक्षण, तान्ने र स्प्लाइसिङ गर्ने च्याम्बर' },
  { symbol: '────', nameNepali: 'कपर केबल (Copper Cable)', description: 'परम्परागत बहु-जोडी तामाको टेलिफोन केबल' },
  { symbol: '════', nameNepali: 'अप्टिकल फाइबर केबल (Optical Fiber Cable)', description: 'प्रकाशको माध्यमबाट डाटा प्रवाह गर्ने आधुनिक केबल' },
  { symbol: '⚡', nameNepali: 'लाइटनिङ एरेस्टर (Lightning Arrester)', description: 'चट्याङ र हाइ भोल्टेज सर्जबाट जोगाउने सुरक्षा उपकरण' },
  { symbol: '⏚', nameNepali: 'अर्थिङ (Ground Connection)', description: 'लिकेज करेन्ट जमिनमा पठाउने सुरक्षित ग्राउन्ड जडान' },
  { symbol: '☎', nameNepali: 'टेलिफोन एक्सचेन्ज (Telephone Exchange)', description: 'केन्द्रीय टेलिफोन तथा इन्टरनेट स्विचिङ स्टेशन' },
  { symbol: '⇄', nameNepali: 'अप्टिकल कनेक्टर (Optical Connector)', description: 'फाइबर कनेक्टर (SC, LC, FC, ST)' },
  { symbol: '▣', nameNepali: 'ONU / Modem / ONT', description: 'ग्राहकको घरमा रहने FTTH राउटर उपकरण' },
  { symbol: '⬢', nameNepali: 'अप्टिकल स्प्लिटर (Optical Splitter)', description: 'फाइबर सिग्नल बाँड्ने उपकरण (१:४, १:८, १:१६)' },
  { symbol: '🗼', nameNepali: 'दूरसञ्चार टावर (Telecom BTS Tower)', description: 'मोबाइल तथा वायरलेस रेडियो सिग्नल आदानप्रदान गर्ने टावर' }
];

export const ntcImportantNumbers = [
  { number: '198', service: 'मर्मत तथा कम्प्लेन दर्ता (Maintenance & Complaint for Landline, ADSL, FTTH)' },
  { number: '197', service: 'टेलिफोन सोधपुछ सेवा (Directory Enquiry - नम्बर खोज्न)' },
  { number: '1606', service: 'PSTN ल्यान्डलाइन बिल सोधपुछ (PSTN Bill Enquiry)' },
  { number: '1600', service: 'नेपाल टेलिकम सेवा जानकारी (General IVR Enquiry)' },
  { number: '1601', service: 'कक्षा ११, १२ तथा SEE नतिजा सोधपुछ (Exam Result Enquiry)' },
  { number: '1602', service: 'त्रिभुवन विश्वविद्यालय नतिजा सोधपुछ (TU Result Enquiry)' },
  { number: '180', service: 'अन्तरदेशीय ट्रंक बुकिङ (STD Trunk Booking)' },
  { number: '187', service: 'भारत ट्रंक बुकिङ (India Trunk Booking)' },
  { number: '186', service: 'अन्तर्राष्ट्रिय ट्रंक बुकिङ (ISD Trunk Booking)' }
];

export const manualCategories = [
  { id: 'all', labelNepali: 'सबै ३८ खण्डहरू (All 38 Chapters)', count: 38 },
  { id: 'osp_telecom', labelNepali: 'OSP तथा टेलिफोन नेटवर्क (OSP & Telecom)', count: 12 },
  { id: 'optical_fiber', labelNepali: 'अप्टिकल फाइबर र FTTH (Optical Fiber & FTTH)', count: 6 },
  { id: 'wireless_satellite', labelNepali: 'मोबाइल, रेडियो र स्याटेलाइट (Wireless & Satellite)', count: 4 },
  { id: 'networking', labelNepali: 'कम्प्युटर नेटवर्किङ र IP (Networking & IP)', count: 4 },
  { id: 'electrical', labelNepali: 'विद्युत, ब्याट्री र अर्थिङ (Electrical & Earthing)', count: 7 },
  { id: 'electronics', labelNepali: 'इलेक्ट्रोनिक्स र लजिक गेट्स (Electronics & Logic)', count: 2 },
  { id: 'safety_tools', labelNepali: 'सुरक्षा, औजार र A/C (Safety, Tools & Cooling)', count: 2 },
  { id: 'ntc_standards', labelNepali: 'NTC मापदण्ड, परीक्षा र प्रयोगात्मक (Exam & Practical)', count: 3 }
];
