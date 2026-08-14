import React from 'react';
import { Award, CheckCircle2, Phone, MapPin, Zap, ArrowRight, ShieldAlert, Sparkles, BookOpen, Users, Compass } from 'lucide-react';
import { instituteInfo } from '../data/coursesData';
import { NitvtLogo } from './NitvtLogo';

interface HeroSectionProps {
  onOpenEnrollment: () => void;
  onExploreCurriculum: () => void;
  onOpenSimulator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEnrollment,
  onExploreCurriculum,
  onOpenSimulator,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 border-b border-slate-800 text-white py-12 lg:py-16">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Core Details */}
          <div className="lg:col-span-7 space-y-6">
            {/* Accreditation Badge with Official Logo */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-purple-950/90 border border-purple-600/50 text-purple-200 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                <NitvtLogo size="xs" />
                <span>सुरेन्द्र ऐर (Surendra Air)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-blue-950/80 border border-blue-700/50 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>CTEVT सम्बन्धन प्राप्त • स्था. २०६४</span>
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                टेलिकम तथा अप्टिकल फाइबर <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-purple-400 via-cyan-300 to-amber-400 bg-clip-text text-transparent">
                  व्यावसायिक प्राविधिक तालिम
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                विगत <strong>१९ वर्षदेखि</strong> नेपालकै उत्कृष्ट टेलिकम इन्जिनियरहरूद्वारा १००% प्रयोगात्मक (Practical) कक्षा सञ्चालन। 
                CTEVT राष्ट्रिय सीप परीक्षण (NSTB) तह-१ र तह-२ को सम्पूर्ण तयारी तथा रोजगारीको सुनिश्चित सहजीकरण।
              </p>
            </div>

            {/* Key Feature Bullets from the prompt */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-2.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-100 block font-semibold">CTEVT आधिकारिक प्रमाणपत्र</strong>
                  <span className="text-slate-300">राष्ट्रिय सीप परीक्षण समितिबाट सीप परीक्षण पश्चात प्रमाणपत्र।</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-100 block font-semibold">आफ्नै पूर्ण प्रयोगात्मक पूर्वाधार</strong>
                  <span className="text-slate-300">Fusion Splicer, OTDR, Power Meter, Cable Yard भएको एकमात्र संस्था।</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-100 block font-semibold">नेपाल टेलिकम र ISP मा रोजगारी</strong>
                  <span className="text-slate-300">NTC, Ncell, WorldLink, Vianet, Subisu र विदेशमा उच्च माग।</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-100 block font-semibold">Skill Test तयारी तथा सहजीकरण</strong>
                  <span className="text-slate-300">सीप भएका तर प्रमाणपत्र नभएकाहरूको लागि विशेष सहजीकरण कक्षा।</span>
                </div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenEnrollment}
                className="flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-xl shadow-amber-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>आजै सिट सुरक्षित गर्नुहोस्</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onExploreCurriculum}
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all"
              >
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>डिजिटल म्यानुअल हेर्नुहोस्</span>
              </button>

              <button
                onClick={onOpenSimulator}
                className="flex items-center gap-2 bg-blue-900/60 hover:bg-blue-800/80 text-blue-200 border border-blue-700/60 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>प्रयोगात्मक सिमुलेटर</span>
              </button>
            </div>

            {/* Location & Direct Hotline */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span>महालक्ष्मी-२, ललितपुर (थान्सिखेल / रानिबु)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold text-white">०१-५२०३५२२ / ९८४८८०५११९</span>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Course Highlight Box with Live Seat Stats */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl p-6 shadow-2xl space-y-5">
              
              {/* Badge & Seat Counter */}
              <div className="flex items-center justify-between gap-2 border-b border-slate-700/80 pb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 border border-amber-800/80 px-2.5 py-1 rounded-full">
                    नयाँ भर्ना
                  </span>
                  <h2 className="text-base font-bold text-white mt-1.5">उपलब्ध तालिमहरू (Level 1, 2 & OFC)</h2>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-amber-400 block leading-none">१७</span>
                  <span className="text-[10px] text-slate-400">सिटहरू बाँकी</span>
                </div>
              </div>

              {/* Course Badges List */}
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-blue-900/50 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                      OFC
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-100">अप्टिकल फाईबर टेक्निसियन</h3>
                      <p className="text-[10px] text-slate-400">Fusion Splicing, OTDR, VFL, FTTH</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-blue-900/80 text-blue-200 px-2 py-0.5 rounded-full font-medium">
                    १ महिना / १५ दिन
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-emerald-900/50 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                      L-1
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-100">जुनियर टेलिकम टेक्निसियन तह–१</h3>
                      <p className="text-[10px] text-slate-400">OSP, Poling, Drop Wire, DP Box</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-900/80 text-emerald-200 px-2 py-0.5 rounded-full font-medium">
                    CTEVT Level 1
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-purple-900/50 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold text-xs">
                      L-2
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-100">टेलिकम टेक्निसियन तह–२</h3>
                      <p className="text-[10px] text-slate-400">MDF, EPABX, Earthing, GSM/CDMA</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-purple-900/80 text-purple-200 px-2 py-0.5 rounded-full font-medium">
                    CTEVT Level 2
                  </span>
                </div>
              </div>

              {/* Quick Eligibility Note */}
              <div className="bg-amber-950/30 border border-amber-700/40 p-3 rounded-xl text-xs text-amber-200/90 flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>को-कसले तालिम लिने?</strong> साधारण लेखपढ जान्ने, ISP मा कार्यरत, NTC बढुवा चाहने, र वैदेशिक रोजगारीका लागि सीप चाहने सम्पूर्णका लागि।
                </span>
              </div>

              {/* Primary Card CTA */}
              <button
                onClick={onOpenEnrollment}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                <span>फारम भर्नुहोस् / सिट बुकिङ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
