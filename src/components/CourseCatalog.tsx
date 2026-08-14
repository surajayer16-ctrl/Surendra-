import React, { useState } from 'react';
import { coursesList } from '../data/coursesData';
import { Course } from '../types';
import { Zap, Radio, Cpu, Wrench, CheckCircle2, Clock, Award, Users, Briefcase, ArrowRight, BookOpen } from 'lucide-react';

interface CourseCatalogProps {
  onSelectCourse: (course: Course) => void;
  onOpenCurriculumForCourse: (courseId: string) => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({
  onSelectCourse,
  onOpenCurriculumForCourse,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'telecom' | 'fiber' | 'vocational'>('all');

  const filteredCourses = coursesList.filter((c) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'fiber') return c.id === 'optical-fiber-technician';
    if (selectedCategory === 'telecom') return c.id === 'junior-telecom-level-1' || c.id === 'telecom-technician-level-2';
    if (selectedCategory === 'vocational') return c.id === 'building-vocational-trades';
    return true;
  });

  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Radio':
        return <Radio className="w-6 h-6 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Wrench':
      default:
        return <Wrench className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section className="py-12 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/60 mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>CTEVT तथा राष्ट्रिय सीप परीक्षण समिति (NSTB) मान्यता</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              सञ्चालित व्यावसायिक तालिमहरू (Course Catalog)
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              सैद्धान्तिक भन्दा बढी प्रयोगात्मक (Practical) अभ्यासमा आधारित, राष्ट्रिय तथा अन्तर्राष्ट्रिय बजारमा तत्काल रोजगारी दिलाउने तालिमहरू।
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60 text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedCategory === 'all' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              सबै कोर्सहरू
            </button>
            <button
              onClick={() => setSelectedCategory('fiber')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedCategory === 'fiber' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              Optical Fiber
            </button>
            <button
              onClick={() => setSelectedCategory('telecom')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedCategory === 'telecom' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              Telecom L1 & L2
            </button>
            <button
              onClick={() => setSelectedCategory('vocational')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedCategory === 'vocational' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              Building Trades
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-slate-800/60 border border-slate-700/70 hover:border-blue-500/60 rounded-2xl p-6 shadow-xl flex flex-col justify-between transition-all hover:shadow-blue-950/40 group"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                      {getCourseIcon(course.icon)}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/70 border border-amber-800/60 px-2 py-0.5 rounded-full">
                        {course.badge}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1 group-hover:text-blue-300 transition-colors">
                        {course.titleNepali}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">{course.titleEnglish}</p>
                    </div>
                  </div>
                </div>

                {/* Duration & Practical Ratio */}
                <div className="grid grid-cols-2 gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <span className="text-slate-400 block text-[10px]">अवधि (Duration)</span>
                      <strong className="text-slate-200">{course.duration}</strong>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-slate-400 block text-[10px]">प्रयोगात्मक (Practical)</span>
                      <strong className="text-emerald-400">{course.practicalPercentage}% Hands-On Lab</strong>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {course.description}
                </p>

                {/* Features List */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                    <span>मुख्य तालिम सामग्री तथा सीपहरू:</span>
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {course.features.slice(0, 4).map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Audience & Job Opportunities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-700/60 text-xs">
                  <div>
                    <span className="text-[11px] font-semibold text-amber-300 flex items-center gap-1">
                      <Users className="w-3 h-3" /> कसले लिने?
                    </span>
                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5">
                      {course.targetAudience.join(', ')}
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-cyan-300 flex items-center gap-1">
                      <Briefcase className="w-3 h-3" /> रोजगारीको क्षेत्र
                    </span>
                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5">
                      {course.jobProspects.join(', ')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-5 mt-4 border-t border-slate-700/80">
                <button
                  onClick={() => onSelectCourse(course)}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  <span>सिट सुरक्षित गर्नुहोस्</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenCurriculumForCourse(course.id)}
                  className="bg-slate-700/80 hover:bg-slate-700 text-white font-medium py-2.5 px-3.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden sm:inline">पाठ्यक्रम</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Building & Construction Trade Courses Callout from the Manual */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 text-xs text-slate-300 space-y-3">
          <div className="flex items-center gap-2">
            <Wrench className="w-4 h-4 text-amber-400" />
            <h4 className="font-bold text-sm text-white">अन्य निर्माण तथा व्यावसायिक तालिमहरू (Building & Vocational Trades):</h4>
          </div>
          <p className="text-slate-400">
            यस इन्स्टिच्युटबाट टेलिकमका अतिरिक्त स्वदेश तथा विदेशमा रोजगारीको प्रशस्तै सम्भावना रहेका निम्न प्राविधिक तालिमहरू पनि सञ्चालन भइरहेका छन्:
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {['1. Mason (मेसन)', '2. Plumber (प्लम्बर)', '3. Carpenter (Finishing/Shuttering)', '4. Welder (वेल्डर)', '5. Electrician (इलेक्ट्रिसियन)', '6. Tailoring (टेलरिङ)', '7. Steel Fixer (स्टिल फिक्सर)', '8. Assistant Beautician (असिस्टेन्ट ब्युटिसियन)'].map((trade, i) => (
              <span key={i} className="bg-slate-800/90 border border-slate-700 text-slate-200 px-3 py-1 rounded-lg font-medium">
                {trade}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
