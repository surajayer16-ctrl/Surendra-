import React, { useState } from 'react';
import { Sparkles, Send, Bot, User, Volume2, ShieldCheck, HelpCircle, X } from 'lucide-react';
import { instituteInfo } from '../data/coursesData';
import { NitvtLogo } from './NitvtLogo';

interface Message {
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

interface AITelecomTutorProps {
  onClose?: () => void;
}

export const AITelecomTutor: React.FC<AITelecomTutorProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'assistant',
      text: `नमस्कार! म सुरेन्द्र ऐर (Surendra Air) को मुख्य टेलिकम तथा अप्टिकल फाइबर प्रशिक्षक (प्राविधिक गुरु) हुँ। 
तपाईंलाई CTEVT तह-१, तह-२, Fusion Splicing, OTDR, Krone Punching, वा Color Coding सम्बन्धी कुनै पनि प्राविधिक प्रश्न वा परीक्षा तयारीबारे केही सोध्नु छ भने निसङ्कोच सोध्नुहोस्।`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const suggestedQuestions = [
    'नेपाल टेलिकमको १२ कोर फाइबरको कलर कोड के के हुन् ?',
    'फ्युजन स्प्लाइसिङ गर्दा ९० डिग्री क्लिभिङ किन अनिवार्य छ ?',
    'अर्थिङ रेसिस्टेन्स ५ ओम वा १ ओम भन्दा कम कसरी बनाउने ?',
    '३३ केभी (33kV) र ११ केभी लाइनसँग टेलिकम केबलको सुरक्षित दूरी कति हुनुपर्छ ?',
    'OTDR मा स्टेप ड्रप र रिफ्लेक्टिभ पिक बीच के फरक छ ?',
    'Krone Insertion Tool ले १० पेयर ट्याग ब्लकमा कसरी पन्च गरिन्छ ?',
    'GSM मोबाइल नेटवर्कमा HLR र VLR बीचको मुख्य भिन्नता के हो ?',
    'नेपाल टेलिकमका मुख्य सर्टकोडहरू (१९८, १९७, १६०६) को काम के हो ?',
  ];

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = queryText || inputValue;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = {
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInputValue('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend, question: textToSend }),
      });
      const data = await res.json();
      const assistantReply =
        data.reply ||
        'फ्युजन स्प्लाइसिङमा नाङ्गो कोरलाई ठीक ९० डिग्री क्लिभ गरी ८०००°C इलेक्ट्रिक आर्कमा पग्लिएर ०.०२ dB भन्दा कम लसमा जोडिन्छ। थप विवरणका लागि इन्स्टिच्युटमा सम्पर्क गर्नुहोस्।';

      setMessages((prev) => [
        ...prev,
        {
          sender: 'assistant',
          text: assistantReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'assistant',
          text: `नेपाल टेलिकम १२-कोर फाइबरको रङ: १. नीलो, २. सुन्तला, ३. हरियो, ४. खैरो, ५. सेतो, ६. रातो, ७. कालो, ८. पहेँलो, ९. बैजनी, १०. गुलावी, ११. फिरोजा, १२. लेमन। थप जानकारीका लागि ०१-५२०३५२२ मा सम्पर्क गर्न सक्नुहुन्छ।`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[650px] max-w-4xl mx-auto text-white">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-800 via-indigo-800 to-amber-600 p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <NitvtLogo size="sm" />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-white text-base">सुरेन्द्र ऐर AI प्राविधिक गुरु (Telecom Instructor)</h3>
              <span className="bg-emerald-500/30 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full font-bold border border-emerald-400/40">
                LIVE 24/7
              </span>
            </div>
            <p className="text-xs text-amber-200">
              CTEVT तह-१ र तह-२ पाठ्यक्रम तथा ओएसपी मापदण्डमा आधारित वरिष्ठ प्रशिक्षक
            </p>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-slate-950/60 text-xs sm:text-sm">
        {messages.map((m, idx) => {
          const isAssistant = m.sender === 'assistant';
          return (
            <div
              key={idx}
              className={`flex gap-3 items-start ${isAssistant ? 'justify-start' : 'justify-end'}`}
            >
              {isAssistant && (
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[85%] p-4 rounded-2xl space-y-2 shadow-lg leading-relaxed ${
                  isAssistant
                    ? 'bg-slate-900 border border-slate-800 text-slate-100'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                }`}
              >
                <p className="whitespace-pre-line">{m.text}</p>
                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/60">
                  <span>{m.timestamp}</span>
                  {isAssistant && (
                    <button
                      onClick={() => handleSpeak(m.text)}
                      className="hover:text-amber-300 p-0.5 transition-colors"
                      title="सुन्नुहोस्"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
              {!isAssistant && (
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-md font-bold text-xs">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-3 text-slate-400 text-xs">
            <div className="w-8 h-8 rounded-lg bg-blue-600/50 flex items-center justify-center animate-spin">
              <Sparkles className="w-4 h-4 text-amber-300" />
            </div>
            <span>प्राविधिक गुरु जवाफ तयार गर्दै हुनुहुन्छ...</span>
          </div>
        )}
      </div>

      {/* Suggested Questions Pills */}
      <div className="p-3 bg-slate-900/90 border-t border-slate-800 overflow-x-auto flex items-center gap-2 no-scrollbar text-xs">
        <span className="text-slate-400 text-[11px] shrink-0 font-medium">सुझाइएका प्रश्नहरू:</span>
        {suggestedQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => handleSendMessage(q)}
            className="bg-slate-800 hover:bg-slate-750 text-slate-200 whitespace-nowrap px-3 py-1.5 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors text-[11px]"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="टेलिकम वा फाइबर सम्बन्धी कुनै पनि प्रश्न सोध्नुहोस्..."
          className="flex-1 bg-slate-950 border border-slate-700/80 focus:border-blue-500 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-100 outline-none transition-colors"
        />
        <button
          onClick={() => handleSendMessage()}
          disabled={isLoading || !inputValue.trim()}
          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-40 text-slate-950 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm shadow-md flex items-center justify-center gap-1.5 transition-all"
        >
          <span>सोध्नुहोस्</span>
          <Send className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
