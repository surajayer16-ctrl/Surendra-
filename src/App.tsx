import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CourseCatalog } from './components/CourseCatalog';
import { CurriculumViewer } from './components/CurriculumViewer';
import { ToolsCatalog } from './components/ToolsCatalog';
import { FusionSplicingSimulator } from './components/InteractiveSimulators/FusionSplicingSimulator';
import { ColorCodeGame } from './components/InteractiveSimulators/ColorCodeGame';
import { OtdrSimulator } from './components/InteractiveSimulators/OtdrSimulator';
import { OhmsLawCalculator } from './components/InteractiveSimulators/OhmsLawCalculator';
import { EpabxCommandTester } from './components/InteractiveSimulators/EpabxCommandTester';
import { NetworkDiagramViewer } from './components/InteractiveSimulators/NetworkDiagramViewer';
import { ExamPreparation } from './components/ExamPreparation';
import { AITelecomTutor } from './components/AITelecomTutor';
import { EnrollmentModal } from './components/EnrollmentModal';
import { StudentTestimonials } from './components/StudentTestimonials';
import { ContactFooter } from './components/ContactFooter';
import { Course, TechnicalTool } from './types';
import { coursesList, instituteInfo } from './data/coursesData';
import { Sparkles, Award, ShieldCheck, Phone, BookOpen, Wrench, FileCheck, Layers, Zap } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState<boolean>(false);
  const [selectedCourseForEnrollment, setSelectedCourseForEnrollment] = useState<Course | null>(null);
  const [isAiTutorModalOpen, setIsAiTutorModalOpen] = useState<boolean>(false);
  const [activeSimulatorSubTab, setActiveSimulatorSubTab] = useState<
    'fusion-splice' | 'color-code' | 'otdr' | 'ohms-law' | 'epabx' | 'network-topology'
  >('fusion-splice');

  const handleOpenEnrollment = (course?: Course) => {
    setSelectedCourseForEnrollment(course || coursesList[0]);
    setIsEnrollmentOpen(true);
  };

  const handleOpenCurriculumForCourse = (courseId: string) => {
    setActiveTab('curriculum');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenEnrollment={() => handleOpenEnrollment()}
        onOpenAiTutor={() => setIsAiTutorModalOpen(true)}
      />

      {/* Main Content Area Based on Active Tab */}
      <main className="flex-1">
        {/* HOME TAB */}
        {activeTab === 'home' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <HeroSection
              onOpenEnrollment={() => handleOpenEnrollment()}
              onExploreCurriculum={() => setActiveTab('curriculum')}
              onOpenSimulator={() => setActiveTab('simulators')}
            />

            {/* Institute Credibility & History Highlights */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800/60">
                      १९ वर्षको गौरवमय प्राविधिक इतिहास
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
                      सुरेन्द्र ऐर (Surendra Air)
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                      विगत <strong>१९ वर्षदेखि</strong> निरन्तर रूपमा टेलिकम, अप्टिकल फाइबर, इलेक्ट्रिकल तथा निर्माण सम्बन्धी सीपमूलक तालिमहरू सञ्चालन।
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenEnrollment()}
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-transform active:scale-95"
                    >
                      नयाँ भर्ना सिट सुरक्षित गर्नुहोस्
                    </button>
                  </div>
                </div>

                {/* 4 Feature Highlights Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">
                      <Award className="w-4 h-4" />
                    </div>
                    <strong className="text-white block font-bold text-sm">CTEVT / NSTB मान्यता</strong>
                    <p className="text-slate-300">
                      राष्ट्रिय सीप परीक्षण समितिबाट सीप परीक्षण (Skill Test) गराई आधिकारिक प्रमाणपत्र प्रदान।
                    </p>
                  </div>

                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold">
                      <Zap className="w-4 h-4" />
                    </div>
                    <strong className="text-white block font-bold text-sm">१००% प्रयोगात्मक पूर्वाधार</strong>
                    <p className="text-slate-300">
                      आफ्नै Optical Fiber Lab, Fusion Splicer, OTDR, Power Meter, र पोल इरेक्सन यार्ड।
                    </p>
                  </div>

                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <strong className="text-white block font-bold text-sm">रोजगारीको उच्च सम्भावना</strong>
                    <p className="text-slate-300">
                      नेपाल टेलिकम, एनसेल, विभिन्न ISP हरू, जलविद्युत तथा विदेशमा उच्च माग।
                    </p>
                  </div>

                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold">
                      <Phone className="w-4 h-4" />
                    </div>
                    <strong className="text-white block font-bold text-sm">अनुभवी इन्जिनियर समूह</strong>
                    <p className="text-slate-300">
                      नेपाल टेलिकमका पूर्व मुख्य इन्जिनियर तथा फिल्ड विज्ञहरूद्वारा प्रत्यक्ष प्रशिक्षण।
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Courses Overview Section */}
            <CourseCatalog
              onSelectCourse={(course) => handleOpenEnrollment(course)}
              onOpenCurriculumForCourse={handleOpenCurriculumForCourse}
            />

            {/* Quick Interactive Simulator Teaser on Home */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-xs font-semibold text-cyan-400 bg-cyan-950/70 border border-cyan-800/60 px-3 py-0.5 rounded-full mb-1 inline-block">
                      भर्चुअल प्रयोगात्मक ल्याब
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      फ्युजन स्प्लाइसिङ तथा कलर कोडिङ सिमुलेटर
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveTab('simulators')}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 self-start sm:self-auto"
                  >
                    <span>सम्पूर्ण सिमुलेटरहरू खोल्नुहोस्</span>
                    <span>&rarr;</span>
                  </button>
                </div>
                <FusionSplicingSimulator />
              </div>
            </section>

            {/* Student Testimonials Section on Home */}
            <div className="py-4">
              <StudentTestimonials
                onOpenEnrollment={() => handleOpenEnrollment()}
                onSelectCourse={handleOpenCurriculumForCourse}
              />
            </div>
          </div>
        )}

        {/* COURSES TAB */}
        {activeTab === 'courses' && (
          <div className="py-6">
            <CourseCatalog
              onSelectCourse={(course) => handleOpenEnrollment(course)}
              onOpenCurriculumForCourse={handleOpenCurriculumForCourse}
            />
          </div>
        )}

        {/* CURRICULUM TAB */}
        {activeTab === 'curriculum' && (
          <div className="py-6">
            <CurriculumViewer
              onOpenTool={(toolId) => {
                setActiveTab('tools');
              }}
              onOpenExamPrep={() => {
                setActiveTab('exams');
              }}
            />
          </div>
        )}

        {/* TOOLS 90+ CATALOG TAB */}
        {activeTab === 'tools' && (
          <div className="py-6">
            <ToolsCatalog />
          </div>
        )}

        {/* INTERACTIVE SIMULATORS SUITE TAB */}
        {activeTab === 'simulators' && (
          <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 bg-cyan-950/70 border border-cyan-800/60 px-3 py-1 rounded-full mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>NITVT Virtual Engineering Lab Suite</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  इन्टरएक्टिभ टेलिकम ल्याब सिमुलेटरहरू
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  फ्युजन स्प्लाइसिङ, १२-कोर कलर कोड स्पिड ट्रेनर, ओटीडीआर वेभफर्म ग्राफ, ओम्स ल तथा लुप रेसिस्टेन्स, ईपीएबीएक्स कमान्ड र टेलिकम सञ्जालको प्रत्यक्ष अभ्यास।
                </p>
              </div>

              {/* Simulator Sub-tab Pill Selector */}
              <div className="flex items-center gap-1.5 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 text-xs overflow-x-auto no-scrollbar max-w-full">
                <button
                  onClick={() => setActiveSimulatorSubTab('fusion-splice')}
                  className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-semibold transition-all ${
                    activeSimulatorSubTab === 'fusion-splice'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  फ्युजन स्प्लाइसिङ
                </button>
                <button
                  onClick={() => setActiveSimulatorSubTab('color-code')}
                  className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-semibold transition-all ${
                    activeSimulatorSubTab === 'color-code'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  कलर कोड स्पिड ट्रेनर
                </button>
                <button
                  onClick={() => setActiveSimulatorSubTab('otdr')}
                  className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-semibold transition-all ${
                    activeSimulatorSubTab === 'otdr'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  OTDR ट्रेस सिमुलेटर
                </button>
                <button
                  onClick={() => setActiveSimulatorSubTab('ohms-law')}
                  className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-semibold transition-all ${
                    activeSimulatorSubTab === 'ohms-law'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ओम्स ल र अर्थिङ
                </button>
                <button
                  onClick={() => setActiveSimulatorSubTab('epabx')}
                  className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-semibold transition-all ${
                    activeSimulatorSubTab === 'epabx'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  EPABX कमान्ड टेस्टर
                </button>
                <button
                  onClick={() => setActiveSimulatorSubTab('network-topology')}
                  className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-semibold transition-all ${
                    activeSimulatorSubTab === 'network-topology'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  टेलिकम सञ्जाल (Network)
                </button>
              </div>
            </div>

            {/* Active Sub-Simulator Component */}
            {activeSimulatorSubTab === 'fusion-splice' && <FusionSplicingSimulator />}
            {activeSimulatorSubTab === 'color-code' && <ColorCodeGame />}
            {activeSimulatorSubTab === 'otdr' && <OtdrSimulator />}
            {activeSimulatorSubTab === 'ohms-law' && <OhmsLawCalculator />}
            {activeSimulatorSubTab === 'epabx' && <EpabxCommandTester />}
            {activeSimulatorSubTab === 'network-topology' && <NetworkDiagramViewer />}
          </div>
        )}

        {/* CTEVT EXAMS TAB */}
        {activeTab === 'exams' && (
          <div className="py-6">
            <ExamPreparation />
          </div>
        )}

        {/* ALUMNI SUCCESS STORIES & TESTIMONIALS TAB */}
        {activeTab === 'testimonials' && (
          <div className="py-8">
            <StudentTestimonials
              onOpenEnrollment={() => handleOpenEnrollment()}
              onSelectCourse={handleOpenCurriculumForCourse}
            />
          </div>
        )}
      </main>

      {/* Floating AI Telecom Instructor Widget / Modal */}
      {isAiTutorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl">
            <AITelecomTutor onClose={() => setIsAiTutorModalOpen(false)} />
          </div>
        </div>
      )}

      {/* Enrollment Reservation Modal */}
      <EnrollmentModal
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
        initialCourse={selectedCourseForEnrollment}
      />

      {/* Institute Footer */}
      <ContactFooter
        onOpenEnrollment={() => handleOpenEnrollment()}
        onSelectTab={setActiveTab}
      />

    </div>
  );
}
