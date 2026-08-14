import React, { useState, useMemo } from 'react';
import { 
  Award, 
  Star, 
  Quote, 
  Briefcase, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Users, 
  TrendingUp, 
  Globe2, 
  Search, 
  Filter, 
  Send, 
  MessageSquareHeart, 
  GraduationCap, 
  ArrowUpRight,
  ShieldCheck,
  Phone,
  Languages,
  PlusCircle,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Testimonial, TestimonialCategory } from '../types';
import { alumniStats, hiringPartners, testimonialsList } from '../data/testimonialsData';

interface StudentTestimonialsProps {
  onOpenEnrollment: () => void;
  onSelectCourse?: (courseId: string) => void;
  compact?: boolean;
}

export const StudentTestimonials: React.FC<StudentTestimonialsProps> = ({
  onOpenEnrollment,
  onSelectCourse,
  compact = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<TestimonialCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSpotlightIndex, setActiveSpotlightIndex] = useState<number>(0);
  const [expandedEnglishQuotes, setExpandedEnglishQuotes] = useState<Record<string, boolean>>({});
  const [allTestimonials, setAllTestimonials] = useState<Testimonial[]>(testimonialsList);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  // New submission state
  const [formName, setFormName] = useState('');
  const [formBatch, setFormBatch] = useState('२०८० ब्याच (2023)');
  const [formCourse, setFormCourse] = useState('अप्टिकल फाईबर टेक्निसियन (FTTH & OFC Specialist)');
  const [formCompany, setFormCompany] = useState('');
  const [formRole, setFormRole] = useState('');
  const [formLocation, setFormLocation] = useState('काठमाडौँ');
  const [formQuote, setFormQuote] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formCategory, setFormCategory] = useState<TestimonialCategory>('fiber');

  // Featured testimonials for spotlight
  const featuredTestimonials = useMemo(() => {
    return allTestimonials.filter((t) => t.featured);
  }, [allTestimonials]);

  const currentFeatured = featuredTestimonials[activeSpotlightIndex] || featuredTestimonials[0];

  const handleNextSpotlight = () => {
    setActiveSpotlightIndex((prev) => (prev + 1) % featuredTestimonials.length);
  };

  const handlePrevSpotlight = () => {
    setActiveSpotlightIndex((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);
  };

  const toggleEnglishQuote = (id: string) => {
    setExpandedEnglishQuotes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filtered testimonials
  const filteredTestimonials = useMemo(() => {
    return allTestimonials.filter((t) => {
      const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        t.nameNepali.toLowerCase().includes(q) ||
        t.nameEnglish.toLowerCase().includes(q) ||
        t.company.toLowerCase().includes(q) ||
        t.currentRole.toLowerCase().includes(q) ||
        t.courseTaken.toLowerCase().includes(q) ||
        t.location.toLowerCase().includes(q) ||
        t.skillsMastered.some((s) => s.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [allTestimonials, selectedCategory, searchQuery]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formQuote.trim() || !formCompany.trim()) return;

    const newTestimonial: Testimonial = {
      id: `test-custom-${Date.now()}`,
      nameNepali: formName.trim(),
      nameEnglish: formName.trim(),
      batchYear: formBatch,
      courseTaken: formCourse,
      currentRole: formRole.trim() || 'Telecom Specialist',
      company: formCompany.trim(),
      location: formLocation.trim() || 'नेपाल',
      avatarColor: 'from-amber-600 to-red-600',
      rating: formRating,
      certificationBadge: 'NITVT Verified Graduate',
      quoteNepali: formQuote.trim(),
      quoteEnglish: formQuote.trim(),
      careerHighlight: 'नयाँ पूर्व-विद्यार्थी सफलताको कथा (Recently Added)',
      skillsMastered: ['Optical Fiber', 'Telecom Operations', 'Practical Engineering'],
      category: formCategory,
      featured: false,
    };

    setAllTestimonials((prev) => [newTestimonial, ...prev]);
    setSubmitSuccess(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // safe fallback
    }

    setTimeout(() => {
      setSubmitSuccess(false);
      setIsSubmitModalOpen(false);
      // Reset form
      setFormName('');
      setFormCompany('');
      setFormRole('');
      setFormQuote('');
    }, 2000);
  };

  return (
    <section className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-blue-500/20 to-purple-500/20 border border-amber-500/40 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-inner">
          <GraduationCap className="w-4 h-4 text-amber-400" />
          <span>NITVT पूर्व-विद्यार्थी सफलताका कथाहरू (Alumni Success Stories)</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          हाम्रा दक्ष ग्राजुयटहरू: स्वदेश तथा विदेशमा उत्कृष्ट रोजगारी
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          विगत <strong>१९ वर्षमा</strong> ५,२०० भन्दा बढी प्रशिक्षार्थीहरूले सुरेन्द्र ऐर (NITVT) बाट १००% प्रयोगात्मक तालिम लिई नेपाल टेलिकम, Ncell, प्रमुख ISP हरू, तथा खाडी र युरोपेली मुलुकहरूमा उच्च तलबका साथ काम गरिरहेका छन्।
        </p>
      </div>

      {/* Real-time Alumni Impact Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/90 border border-slate-800 p-4 sm:p-5 rounded-2xl relative overflow-hidden group hover:border-blue-500/50 transition-colors">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            <Users className="w-16 h-16 text-blue-400" />
          </div>
          <span className="text-xs text-slate-400 font-medium block">कुल उत्तीर्ण प्राविधिक</span>
          <strong className="text-2xl sm:text-3xl font-black text-white mt-1 block">
            {alumniStats.totalGraduates}
          </strong>
          <span className="text-[11px] text-blue-400 font-semibold mt-1 inline-flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> २०६४ सालदेखि निरन्तर
          </span>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 p-4 sm:p-5 rounded-2xl relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            <TrendingUp className="w-16 h-16 text-emerald-400" />
          </div>
          <span className="text-xs text-slate-400 font-medium block">रोजगारी तथा प्लेसमेन्ट दर</span>
          <strong className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1 block">
            {alumniStats.employmentRate}
          </strong>
          <span className="text-[11px] text-emerald-300 font-semibold mt-1 inline-flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> उच्च माग भएको सीप
          </span>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 p-4 sm:p-5 rounded-2xl relative overflow-hidden group hover:border-purple-500/50 transition-colors">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            <Building2 className="w-16 h-16 text-purple-400" />
          </div>
          <span className="text-xs text-slate-400 font-medium block">रोजगारदाता कम्पनी सञ्जाल</span>
          <strong className="text-2xl sm:text-3xl font-black text-purple-400 mt-1 block">
            {alumniStats.partnerCompanies}
          </strong>
          <span className="text-[11px] text-purple-300 font-semibold mt-1 inline-flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> NTC, Ncell, WorldLink, Vianet
          </span>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 p-4 sm:p-5 rounded-2xl relative overflow-hidden group hover:border-amber-500/50 transition-colors">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            <Globe2 className="w-16 h-16 text-amber-400" />
          </div>
          <span className="text-xs text-slate-400 font-medium block">वैदेशिक रोजगारी (Gulf & Abroad)</span>
          <strong className="text-2xl sm:text-3xl font-black text-amber-400 mt-1 block">
            {alumniStats.abroadPlacement}
          </strong>
          <span className="text-[11px] text-amber-300 font-semibold mt-1 inline-flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> UAE, Qatar, Saudi, Japan
          </span>
        </div>
      </div>

      {/* Filter and Search Bar Section */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 max-w-full">
            {[
              { id: 'all', label: 'सबै कथाहरू (All Stories)' },
              { id: 'fiber', label: 'अप्टिकल फाइबर (FTTH & OFC)' },
              { id: 'telecom', label: 'नेपाल टेलिकम (NTC/Telecom)' },
              { id: 'isp', label: 'ISP टेक्निसियन (WorldLink/Vianet)' },
              { id: 'abroad', label: 'वैदेशिक रोजगारी (Gulf/Abroad)' },
              { id: 'women-tech', label: 'महिला प्राविधिक (Women)' },
              { id: 'entrepreneur', label: 'उद्यमी (Entrepreneurs)' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as TestimonialCategory)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box & Add Story Button */}
          <div className="flex items-center gap-2">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="नाम, कम्पनी वा सीप खोज्नुहोस्..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3.5 py-2 rounded-xl text-xs whitespace-nowrap flex items-center gap-1.5 shadow-md transition-transform active:scale-95 shrink-0"
            >
              <PlusCircle className="w-4 h-4" />
              <span className="hidden sm:inline">आफ्नो अनुभव पठाउनुहोस्</span>
              <span className="sm:hidden">समीक्षा पठाउनुहोस्</span>
            </button>
          </div>

        </div>

        {/* Search Result Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span>
            देखाउँदै: <strong className="text-white">{filteredTestimonials.length}</strong> सफलताका कथाहरू
          </span>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-blue-400 hover:underline text-[11px]"
            >
              सबै वर्ग देखाउनुहोस्
            </button>
          )}
        </div>
      </div>

      {/* Grid of Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTestimonials.map((t) => (
          <div
            key={t.id}
            className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between space-y-4 hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="space-y-3.5">
              
              {/* Card Header: Avatar, Name & Batch */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${t.avatarColor} p-0.5 shadow-md shrink-0 flex items-center justify-center`}>
                    <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white font-bold text-base">
                      {t.nameNepali.slice(0, 2)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      {t.nameNepali}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium">
                      {t.nameEnglish} • <span className="font-mono text-slate-300">{t.batchYear.split(' ')[0]}</span>
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center text-amber-400 gap-0.5 shrink-0 bg-amber-950/60 border border-amber-800/60 px-1.5 py-0.5 rounded-md">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span className="text-[11px] font-bold text-amber-300">५.०</span>
                </div>
              </div>

              {/* Role & Company Tag */}
              <div className="space-y-1 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800/80">
                <p className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 line-clamp-1">
                  <Briefcase className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.currentRole}</span>
                </p>
                <div className="flex items-center justify-between gap-2 text-[11px] text-slate-300">
                  <span className="flex items-center gap-1 line-clamp-1 text-white font-medium">
                    <Building2 className="w-3 h-3 text-blue-400 shrink-0" />
                    {t.company}
                  </span>
                  <span className="text-slate-400 shrink-0 flex items-center gap-0.5">
                    <MapPin className="w-2.5 h-2.5 text-red-400" />
                    {t.location.split(' ')[0]}
                  </span>
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="space-y-2">
                <p className="text-xs text-slate-200 leading-relaxed italic">
                  "{t.quoteNepali}"
                </p>

                {/* English toggle for international or bilingual readers */}
                <div>
                  <button
                    onClick={() => toggleEnglishQuote(t.id)}
                    className="text-[11px] text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-medium"
                  >
                    <Languages className="w-3 h-3" />
                    <span>{expandedEnglishQuotes[t.id] ? 'नेपाली मात्र' : 'English Summary'}</span>
                  </button>

                  {expandedEnglishQuotes[t.id] && (
                    <p className="text-[11px] text-slate-300 italic bg-slate-950 p-2.5 rounded-lg mt-1.5 border border-slate-800">
                      "{t.quoteEnglish}"
                    </p>
                  )}
                </div>
              </div>

            </div>

            {/* Card Footer: Skills and Certification */}
            <div className="space-y-2.5 pt-3 border-t border-slate-800/80">
              <div className="flex flex-wrap gap-1">
                {t.skillsMastered.slice(0, 3).map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3 h-3" /> {t.certificationBadge}
                </span>
                <span className="text-slate-400 font-mono">
                  {t.courseTaken.split(' ')[0]}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Employer & Hiring Partners Showcase */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs uppercase font-bold text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/60">
              रोजगारदाता साझेदार (Hiring Partners)
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1.5">
              हाम्रा विद्यार्थीहरू कार्यरत प्रमुख टेलिकम तथा इन्टरनेट सेवा प्रदायकहरू
            </h3>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            NITVT बाट तालिम लिने विद्यार्थीहरूलाई नेपालका ख्यातिप्राप्त कम्पनीहरूमा उच्च प्राथमिकता दिइन्छ।
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3.5">
          {hiringPartners.map((partner, index) => (
            <div
              key={index}
              className="bg-slate-950/80 border border-slate-800/80 hover:border-blue-500/40 p-3.5 rounded-xl space-y-1 transition-colors"
            >
              <div className="flex items-center justify-between">
                <strong className="text-xs sm:text-sm text-white font-bold block">
                  {partner.name}
                </strong>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="text-[11px] text-amber-400 font-medium block">
                {partner.type}
              </span>
              <p className="text-[10px] text-slate-400">
                {partner.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Alumni Call to Action Card */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-amber-950/70 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold text-amber-400 bg-amber-950/80 border border-amber-800/60 px-3 py-1 rounded-full">
            तपाईंको सफलताको यात्रा आजै सुरु गर्नुहोस्
          </span>
          <h3 className="text-xl sm:text-3xl font-black text-white">
            आफ्नो भविष्यलाई प्राविधिक सीपले सुरक्षित बनाउनुहोस्
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            सुरेन्द्र ऐर (NITVT) को १ महिना (दैनिक ६ घण्टा) वा १० महिना (१६९६ घण्टा) को CTEVT तह-२ तालिममा भर्ना भई राष्ट्रिय तथा अन्तर्राष्ट्रिय स्तरको सीप सिक्नुहोस्।
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <button
            onClick={onOpenEnrollment}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3.5 rounded-xl text-sm shadow-xl transition-all transform hover:scale-105 active:scale-95"
          >
            नयाँ भर्ना फारम भर्नुहोस् &rarr;
          </button>
        </div>
      </div>

      {/* Modal: Submit Alumni Success Story */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-8">
            
            {/* Close Button */}
            <button
              onClick={() => setIsSubmitModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 bg-amber-950/80 border border-amber-800/60 px-2.5 py-1 rounded-full">
                <MessageSquareHeart className="w-3.5 h-3.5" />
                <span>पूर्व-विद्यार्थी प्रतिक्रिया फारम</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                आफ्नो अनुभव तथा सफलताको कथा सेयर गर्नुहोस्
              </h3>
              <p className="text-xs text-slate-300">
                तपाईंको अनुभवले नयाँ भर्ना हुने विद्यार्थीहरूलाई सही मार्गदर्शन र प्रेरणा दिनेछ।
              </p>
            </div>

            {submitSuccess ? (
              <div className="bg-emerald-950/90 border border-emerald-700 rounded-2xl p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  धन्यवाद! तपाईंको समीक्षा सफलतापूर्वक सुरक्षित भयो!
                </h4>
                <p className="text-xs text-emerald-200">
                  तपाईंको सफलताको कथा सफलता पृष्ठमा प्रत्यक्ष थपिएको छ।
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      पूरा नाम (Full Name) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="उदा: सुजन महर्जन"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      ब्याच वर्ष (Batch Year)
                    </label>
                    <select
                      value={formBatch}
                      onChange={(e) => setFormBatch(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="२०८१ ब्याच (2024)">२०८१ ब्याच (2024)</option>
                      <option value="२०८० ब्याच (2023)">२०८० ब्याच (2023)</option>
                      <option value="२०७९ ब्याच (2022)">२०७९ ब्याच (2022)</option>
                      <option value="२०७८ ब्याच (2021)">२०७८ ब्याच (2021)</option>
                      <option value="२०७७ ब्याच (2020)">२०७७ ब्याच (2020)</option>
                      <option value="२०७५ वा अघि">२०७५ वा अघि (Senior Alumni)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    पूरा गरेको तालिम (Course Completed)
                  </label>
                  <select
                    value={formCourse}
                    onChange={(e) => setFormCourse(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="अप्टिकल फाईबर टेक्निसियन (FTTH & OFC Specialist)">
                      अप्टिकल फाईबर टेक्निसियन तालिम (FTTH & OFC)
                    </option>
                    <option value="टेलिकम टेक्निसियन तालिम तह–२ (CTEVT Level-2)">
                      टेलिकम टेक्निसियन तालिम तह–२ (CTEVT Level-2)
                    </option>
                    <option value="जुनियर टेलिकम टेक्निसियन तह–१">
                      जुनियर टेलिकम टेक्निसियन तालिम तह–१
                    </option>
                    <option value="इलेक्ट्रिकल तथा सबस्टेशन तालिम">
                      इलेक्ट्रिकल तथा अन्य प्राविधिक तालिम
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      कार्यरत कम्पनी / संस्था (Company) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="उदा: WorldLink, Nepal Telecom, Du UAE"
                      value={formCompany}
                      onChange={(e) => setFormCompany(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      हालको पद (Current Designation)
                    </label>
                    <input
                      type="text"
                      placeholder="उदा: Fiber Splicer, Field Engineer"
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      कार्यस्थल / शहर (Location)
                    </label>
                    <input
                      type="text"
                      placeholder="उदा: काठमाडौँ / दुबई / पोखरा"
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      श्रेणी (Category)
                    </label>
                    <select
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value as TestimonialCategory)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="fiber">अप्टिकल फाइबर (FTTH)</option>
                      <option value="telecom">टेलिकम (NTC/Ncell)</option>
                      <option value="isp">ISP टेक्निसियन</option>
                      <option value="abroad">वैदेशिक रोजगारी (Gulf/Abroad)</option>
                      <option value="women-tech">महिला प्राविधिक</option>
                      <option value="entrepreneur">उद्यमी / कन्ट्राक्टर</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    तपाईंको अनुभव र नयाँ विद्यार्थीलाई सल्लाह (Your Review / Story) *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="NITVT को ल्याब अभ्यास, सुरेन्द्र सरको पढाइ र रोजगारी पाउन कसरी सहयोग भयो लेख्नुहोस्..."
                    value={formQuote}
                    onChange={(e) => setFormQuote(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500 leading-relaxed"
                  />
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsSubmitModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
                  >
                    रद्द गर्नुहोस्
                  </button>

                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl shadow-lg flex items-center gap-1.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>समीक्षा पठाउनुहोस्</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
