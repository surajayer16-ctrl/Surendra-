import React, { useState } from 'react';
import { Layers, Network, CheckCircle2, ChevronRight, Info, Radio, Zap } from 'lucide-react';

interface NetworkNode {
  id: string;
  nameNepali: string;
  nameEnglish: string;
  roleNepali: string;
  specsNepali: string;
  cableType: string;
  colorTheme: string;
}

export const NetworkDiagramViewer: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('exchange');

  const nodes: NetworkNode[] = [
    {
      id: 'exchange',
      nameNepali: '१. टेलिकम एक्सचेन्ज (Central Office / Exchange)',
      nameEnglish: 'Central Office / OLT / Switch Room',
      roleNepali: 'मुख्य स्विच, सर्भर, OLT र -४८ भोल्ट ब्याट्री बैंक भएको केन्द्र जहाँ सम्पूर्ण कल र इन्टरनेट ट्राफिक प्रोसेस हुन्छ।',
      specsNepali: 'पावर: -४८V DC ब्याट्री बैंक, अर्थिङ: < १ ओम, ACDB/DCDB प्यानल।',
      cableType: 'Exchange Internal Busbar & ODF',
      colorTheme: 'from-blue-600 to-indigo-600',
    },
    {
      id: 'mdf',
      nameNepali: '२. मुख्य वितरण फ्रेम (Main Distribution Frame - MDF / ODF)',
      nameEnglish: 'MDF / ODF (Optical Distribution Frame)',
      roleNepali: 'एक्सचेन्जको भित्री लाइन र बाहिरी अन्डरग्राउन्ड फिडर केबल जोड्ने मुख्य क्रस-कनेक्सन प्यानल।',
      specsNepali: 'Krone LSA-PLUS 10-pair म्यागजिन, ग्यास डिस्चार्ज ट्युब (GDT) र १०० कोर फाइबर ODF।',
      cableType: 'Feeder Underground Cable (१०० देखि २४०० पेयर कपर वा ९६ कोर OFC)',
      colorTheme: 'from-indigo-600 to-purple-600',
    },
    {
      id: 'feeder',
      nameNepali: '३. प्राथमिक फिडर केबल (Primary Feeder Cable)',
      nameEnglish: 'Primary Feeder Route',
      roleNepali: 'एक्सचेन्जदेखि सडकमा रहेको वितरण क्याबिनेट (Cabinet) सम्म भूमिगत रूपमा आउने ठूलो क्षमताको केबल।',
      specsNepali: 'प्रेसराइज्ड नाइट्रोजन ग्यास युक्त वा जेली-फिल्ड आर्मर्ड केबल, म्यानहोल चेम्बरमा सुरक्षित।',
      cableType: '०.५ वा ०.६३ मिमी कपर पेयर / G.652D सिंगलमोड फाइबर',
      colorTheme: 'from-purple-600 to-pink-600',
    },
    {
      id: 'cabinet',
      nameNepali: '४. वितरण क्याबिनेट (Cross Connection Cabinet - CCC / FDC)',
      nameEnglish: 'Street Pillar Cabinet / FDC',
      roleNepali: 'सडक किनारमा ठडिएको धातु वा फाइबरग्लासको क्याबिनेट जहाँ फिडर लाइनलाई स-साना सेकेन्डरी लाइनमा विभाजन गरिन्छ।',
      specsNepali: 'प्राथमिक टर्मिनल (Primary Tag Block) र सेकेन्डरी टर्मिनल (Secondary Tag Block) बीच जम्पर वायर कनेक्सन।',
      cableType: 'Jumper Wire (Red/White कपर वा SC/APC फाइबर प्याच कर्ड)',
      colorTheme: 'from-amber-600 to-orange-600',
    },
    {
      id: 'distribution',
      nameNepali: '५. सेकेन्डरी वितरण केबल (Secondary Distribution Cable)',
      nameEnglish: 'Secondary Aerial / Underground Cable',
      roleNepali: 'क्याबिनेटबाट निस्किएर पोल वा पर्खाल हुँदै ग्राहकको घर नजिकको डीपी बक्स (DP) सम्म पुग्ने केबल।',
      specsNepali: '१०, २०, वा ५० पेयर सेल्फ-सपोर्टिङ फिगर-८ केबल वा १२/२४ कोर एरियल फाइबर।',
      cableType: 'Aerial Figure-8 with Steel Messenger Wire',
      colorTheme: 'from-teal-600 to-emerald-600',
    },
    {
      id: 'dp',
      nameNepali: '६. डिस्ट्रिब्युसन प्वाइन्ट (Distribution Point - DP / FAT Box)',
      nameEnglish: 'Pole DP Box / Fiber Access Terminal (FAT)',
      roleNepali: 'पोल वा घरको पर्खालमा राखिने १०-पेयर टर्मिनल बक्स वा ८/१६ पोर्ट Optical Splitter भएको FAT बक्स।',
      specsNepali: '१० पेयर स्क्रू/क्रोन टर्मिनल वा १:८ / १:१६ PLC स्प्लिटर, वाटरप्रुफ रबर ग्यास्केट।',
      cableType: 'Drop Wire / FTTH Flat Drop Cable',
      colorTheme: 'from-emerald-600 to-green-600',
    },
    {
      id: 'drop',
      nameNepali: '७. ड्रप वायर तथा लिडिङ-इन (Drop Wire / Subscriber Lead-in)',
      nameEnglish: 'Drop Wire to Customer Premises',
      roleNepali: 'डीपी पोलबाट ग्राहकको घरको छत वा झ्यालसम्म हावामा तानिने २-कोर कपर ड्रप वा १/२ कोर फाइबर ड्रप केबल।',
      specsNepali: '०.९ मिमी स्टिल स्ट्रेन्थ मेम्बर भएको घाम-पानी खप्ने कालो काउन्ट्री ज्याकेट, P-Clamp ले पोलमा बाँधिन्छ।',
      cableType: 'Self-Supporting Flat Drop Wire (G.657A2 Bend-Insensitive)',
      colorTheme: 'from-cyan-600 to-blue-600',
    },
    {
      id: 'subscriber',
      nameNepali: '८. ग्राहकको अन्तिम उपकरण (Subscriber ONT / Telephone)',
      nameEnglish: 'Customer Premises Equipment (CPE / ONT / Rosette)',
      roleNepali: 'ग्राहकको कोठामा जडान गरिएको रोजेट बक्स (Rosette Box), Wi-Fi Router, ONT वा ल्यान्डलाइन टेलिफोन सेट।',
      specsNepali: 'RJ-11 पोर्ट वा SC/APC अप्टिकल इनपुट, -१९ देखि -२४ dBm अप्टिकल पावर रिसिभ।',
      cableType: 'RJ-11 Telephone Cord / Fiber Patch Cord',
      colorTheme: 'from-blue-600 to-indigo-600',
    },
  ];

  const activeNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl text-white space-y-6">
      
      {/* Top Banner */}
      <div className="border-b border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 bg-cyan-950/70 border border-cyan-800/60 px-3 py-0.5 rounded-full mb-1">
          <Network className="w-3.5 h-3.5" />
          <span>Interactive Telecom Outside Plant Network Architecture</span>
        </div>
        <h3 className="text-xl font-bold text-white">टेलिकम नेटवर्क आर्किटेक्चर (Exchange to Subscriber)</h3>
        <p className="text-xs text-slate-400">
          एक्सचेन्ज देखि MDF, फिडर केबल, क्याबिनेट, डीपी बक्स र ग्राहकको घरसम्मको पूर्ण सञ्जाल।
        </p>
      </div>

      {/* Horizontal Flow Pipeline */}
      <div className="flex items-center gap-1 overflow-x-auto pb-3 pt-1 no-scrollbar text-xs">
        {nodes.map((nd, idx) => {
          const isSelected = nd.id === selectedNodeId;
          return (
            <React.Fragment key={nd.id}>
              <button
                onClick={() => setSelectedNodeId(nd.id)}
                className={`px-3 py-2.5 rounded-xl whitespace-nowrap font-medium transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400 shadow-md scale-105 z-10'
                    : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-slate-900/80 flex items-center justify-center font-bold text-[10px]">
                  {idx + 1}
                </span>
                <span>{nd.nameNepali.split('(')[0]}</span>
              </button>
              {idx < nodes.length - 1 && (
                <span className="text-slate-600 shrink-0 font-bold">&rarr;</span>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Selected Node Details Card */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <h4 className="text-lg font-bold text-white">{activeNode.nameNepali}</h4>
            <p className="text-xs text-slate-400 font-mono">{activeNode.nameEnglish}</p>
          </div>
          <span className="text-xs bg-blue-900/60 text-blue-300 border border-blue-700/60 px-3 py-1 rounded-full font-mono self-start sm:self-auto">
            {activeNode.cableType}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1.5">
            <strong className="text-cyan-300 block font-semibold">नेटवर्कमा भूमिका र महत्त्व:</strong>
            <p className="text-slate-300 leading-relaxed">{activeNode.roleNepali}</p>
          </div>

          <div className="bg-amber-950/30 p-4 rounded-xl border border-amber-800/50 space-y-1.5">
            <strong className="text-amber-300 block font-semibold">प्राविधिक विवरण (Technical Specs):</strong>
            <p className="text-amber-200/90 leading-relaxed">{activeNode.specsNepali}</p>
          </div>
        </div>
      </div>

    </div>
  );
};
