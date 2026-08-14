import React, { useState } from 'react';
import { instituteInfo } from '../data/coursesData';
import { MapPin, Phone, Mail, Globe, Award, ShieldCheck, Clock, Send, CheckCircle2 } from 'lucide-react';
import { NitvtLogo } from './NitvtLogo';

interface ContactFooterProps {
  onOpenEnrollment: () => void;
  onSelectTab: (tab: string) => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  onOpenEnrollment,
  onSelectTab,
}) => {
  const [quickPhone, setQuickPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickCallback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPhone.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setQuickPhone('');
    }, 4000);
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1: Institute Overview & Accreditation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <NitvtLogo size="lg" />
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  सुरेन्द्र ऐर (Surendra Air)
                </h3>
                <p className="text-[11px] text-amber-300 font-mono">
                  Nepal Institute of Technical & Vocational Training (NITVT) Pvt. Ltd.
                </p>
                <p className="text-[10px] text-amber-400 font-medium">Estd. 2064 • CTEVT Affiliated</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              विगत <strong>१९ वर्षदेखि</strong> प्राविधिक क्षेत्रमा गुणस्तरीय तालिम प्रदान गर्दै आएको CTEVT तथा घरेलु तथा साना उद्योग विभागबाट सम्बन्धन प्राप्त अग्रिणी संस्था। 
              आफ्नै पूर्ण प्रयोगात्मक पूर्वाधार (Practical Lab) मा दक्ष टेलिकम इन्जिनियरहरूद्वारा १००% सीपमूलक तालिम।
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="bg-purple-950 text-purple-300 border border-purple-800 px-2.5 py-1 rounded-lg text-[10px] font-medium flex items-center gap-1">
                <Award className="w-3 h-3 text-amber-400" />
                CTEVT Affiliated
              </span>
              <span className="bg-emerald-950 text-emerald-300 border border-emerald-800 px-2.5 py-1 rounded-lg text-[10px] font-medium flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                NSTB Skill Test Ready
              </span>
              <span className="bg-indigo-950 text-indigo-300 border border-indigo-800 px-2.5 py-1 rounded-lg text-[10px] font-medium flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-400" />
                १९ वर्षको इतिहास (२०६४)
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              द्रुत लिङ्कहरू (Quick Navigation)
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectTab('courses')}
                  className="hover:text-amber-300 transition-colors"
                >
                  • अप्टिकल फाईबर टेक्निसियन (OFC)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('courses')}
                  className="hover:text-amber-300 transition-colors"
                >
                  • जुनियर टेलिकम टेक्निसियन तह–१
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('courses')}
                  className="hover:text-amber-300 transition-colors"
                >
                  • टेलिकम टेक्निसियन तह–२
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('curriculum')}
                  className="hover:text-amber-300 transition-colors"
                >
                  • डिजिटल पाठ्यक्रम म्यानुअल (९ वटा च्याप्टर)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('tools')}
                  className="hover:text-amber-300 transition-colors"
                >
                  • प्राविधिक औजार तथा उपकरण सूची (९०+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('exams')}
                  className="hover:text-amber-300 transition-colors"
                >
                  • CTEVT राष्ट्रिय सीप परीक्षण मोडल परीक्षा
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('testimonials')}
                  className="hover:text-amber-300 transition-colors text-amber-400 font-semibold"
                >
                  • पूर्व-विद्यार्थी सफलताका कथाहरू (Testimonials)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details & Callback */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              सम्पर्क ठेगाना (Contact & Location)
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>केन्द्रीय कार्यालय / तालिम केन्द्र:</strong> <br />
                  महालक्ष्मी नगरपालिका–२, ललितपुर (थान्सिखेल / रानिबु)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>फोन:</strong> ०१-५२०३५२२ / ९८४८८०५११९
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${instituteInfo.email}`} className="hover:text-amber-400 transition-colors">
                  <strong>इमेल:</strong> {instituteInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <span>
                  <strong>वेबसाइट:</strong> www.nitvt.com.np
                </span>
              </div>
            </div>

            {/* Quick Callback Mini Form */}
            <form onSubmit={handleQuickCallback} className="pt-2">
              <div className="text-[11px] font-semibold text-slate-300 mb-1">
                तत्काल फोन परामर्श चाहियो भने मोबाइल नम्बर राख्नुहोस्:
              </div>
              <div className="flex gap-1.5">
                <input
                  type="tel"
                  placeholder="९८४८८०५११९"
                  value={quickPhone}
                  onChange={(e) => setQuickPhone(e.target.value)}
                  className="flex-1 bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none"
                />
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3.5 py-2 rounded-xl text-xs flex items-center gap-1 shadow-sm transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {submitted && (
                <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>धन्यवाद! हाम्रो शाखाबाट केही बेरमै फोन आउनेछ।</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © २०६४ – {new Date().getFullYear()} सुरेन्द्र ऐर (Surendra Air). सर्वाधिकार सुरक्षित।
          </div>
          <div className="flex items-center gap-4">
            <span>CTEVT Approved</span>
            <span>•</span>
            <span>NSTB Skill Certified</span>
            <span>•</span>
            <span>Lalitpur, Nepal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
