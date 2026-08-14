import React from 'react';
import { Phone, Mail, Award, BookOpen, Wrench, FileCheck, HelpCircle, ShieldCheck, Sparkles, GraduationCap } from 'lucide-react';
import { instituteInfo } from '../data/coursesData';
import { NitvtLogo } from './NitvtLogo';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenEnrollment: () => void;
  onOpenAiTutor: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenEnrollment,
  onOpenAiTutor
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl">
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-purple-800 via-indigo-800 to-amber-600 py-1.5 px-4 text-xs font-medium text-white shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider animate-pulse">
              नयाँ भर्ना खुला
            </span>
            <span>{instituteInfo.establishedNepali} • CTEVT तथा घरेलु उद्योग विभागबाट सम्बन्धन प्राप्त</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href={`tel:${instituteInfo.phonePrimary}`} className="flex items-center gap-1 hover:text-amber-200 transition-colors">
              <Phone className="w-3 h-3" />
              <span>{instituteInfo.phonePrimary}</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <a href={`tel:${instituteInfo.phoneSecondary}`} className="flex items-center gap-1 hover:text-amber-200 transition-colors">
              <Phone className="w-3 h-3" />
              <span>{instituteInfo.phoneSecondary}</span>
            </a>
            <span className="hidden md:inline">|</span>
            <a href={`mailto:${instituteInfo.emailTop || 'surajayer16@gmail.com'}`} className="hidden md:flex items-center gap-1 text-slate-200 hover:text-amber-300 transition-colors">
              <Mail className="w-3 h-3 text-amber-400" />
              <span>{instituteInfo.emailTop || 'surajayer16@gmail.com'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <NitvtLogo size="md" />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                सुरेन्द्र ऐर (Surendra Air)
              </h1>
              <span className="hidden lg:inline-flex items-center gap-1 bg-purple-950 border border-purple-800 text-purple-300 text-[11px] px-2 py-0.5 rounded-full font-medium">
                <Award className="w-3 h-3 text-amber-400" /> CTEVT Approved
              </span>
            </div>
            <p className="text-[11px] text-slate-300 line-clamp-1">
              Nepal Institute of Technical & Vocational Training (NITVT) Pvt. Ltd.
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60 text-sm">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'home'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            गृहपृष्ठ (Home)
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'courses'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            तालिमहरू (Courses)
          </button>
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'curriculum'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>म्यानुअल (Curriculum)</span>
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'tools'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Wrench className="w-4 h-4 text-emerald-400" />
            <span>औजार सूची (Tools 90+)</span>
          </button>
          <button
            onClick={() => setActiveTab('simulators')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'simulators'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>सिमुलेटर (Lab Tools)</span>
          </button>
          <button
            onClick={() => setActiveTab('exams')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'exams'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <FileCheck className="w-4 h-4 text-amber-400" />
            <span>परीक्षा तयारी (CTEVT Prep)</span>
          </button>
          <button
            onClick={() => setActiveTab('testimonials')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'testimonials'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            <span>सफलताका कथाहरू (Alumni)</span>
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenAiTutor}
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-800/80 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-cyan-900/30"
            title="AI Telecom Instructor"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="hidden sm:inline">AI प्राविधिक गुरु</span>
            <span className="sm:hidden">AI Guru</span>
          </button>

          <button
            onClick={onOpenEnrollment}
            className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-amber-600/30 hover:scale-105 active:scale-95 transition-all"
          >
            <ShieldCheck className="w-4 h-4 text-slate-950" />
            <span>सिट सुरक्षित गर्नुहोस्</span>
          </button>
        </div>
      </div>

      {/* Mobile Secondary Tab Navigation */}
      <div className="xl:hidden flex items-center gap-1 overflow-x-auto px-4 py-2 border-t border-slate-800/80 bg-slate-950/60 no-scrollbar text-xs">
        <button
          onClick={() => setActiveTab('home')}
          className={`px-3 py-1 rounded-lg whitespace-nowrap font-medium transition-colors ${
            activeTab === 'home' ? 'bg-blue-600 text-white' : 'text-slate-300'
          }`}
        >
          गृहपृष्ठ
        </button>
        <button
          onClick={() => setActiveTab('courses')}
          className={`px-3 py-1 rounded-lg whitespace-nowrap font-medium transition-colors ${
            activeTab === 'courses' ? 'bg-blue-600 text-white' : 'text-slate-300'
          }`}
        >
          तालिमहरू
        </button>
        <button
          onClick={() => setActiveTab('curriculum')}
          className={`px-3 py-1 rounded-lg whitespace-nowrap font-medium transition-colors ${
            activeTab === 'curriculum' ? 'bg-blue-600 text-white' : 'text-slate-300'
          }`}
        >
          म्यानुअल
        </button>
        <button
          onClick={() => setActiveTab('tools')}
          className={`px-3 py-1 rounded-lg whitespace-nowrap font-medium transition-colors ${
            activeTab === 'tools' ? 'bg-blue-600 text-white' : 'text-slate-300'
          }`}
        >
          औजार (90+)
        </button>
        <button
          onClick={() => setActiveTab('simulators')}
          className={`px-3 py-1 rounded-lg whitespace-nowrap font-medium transition-colors ${
            activeTab === 'simulators' ? 'bg-blue-600 text-white' : 'text-slate-300'
          }`}
        >
          सिमुलेटर
        </button>
        <button
          onClick={() => setActiveTab('exams')}
          className={`px-3 py-1 rounded-lg whitespace-nowrap font-medium transition-colors ${
            activeTab === 'exams' ? 'bg-blue-600 text-white' : 'text-slate-300'
          }`}
        >
          CTEVT परीक्षा
        </button>
        <button
          onClick={() => setActiveTab('testimonials')}
          className={`px-3 py-1 rounded-lg whitespace-nowrap font-medium transition-colors ${
            activeTab === 'testimonials' ? 'bg-blue-600 text-white' : 'text-slate-300'
          }`}
        >
          सफलताका कथाहरू
        </button>
      </div>
    </header>
  );
};
