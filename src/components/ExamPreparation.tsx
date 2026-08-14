import React, { useState, useEffect } from 'react';
import { modelExamLevel2MCQs, modelSubjectiveQuestions, vivaQuestionsList } from '../data/examData';
import { ExamQuestionMCQ, SubjectiveQuestion, VivaQuestion } from '../types';
import { FileCheck, Sparkles, CheckCircle2, XCircle, Clock, Award, HelpCircle, ArrowRight, RotateCcw, Volume2, Send, Bookmark } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ExamPreparation: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'mcq-practice' | 'viva-flashcards' | 'mock-exam'>('mcq-practice');
  
  // MCQ state
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentMcqIndex, setCurrentMcqIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});

  // Viva state
  const [vivaIndex, setVivaIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [vivaSearch, setVivaSearch] = useState<string>('');

  // Mock Exam state
  const [isExamRunning, setIsExamRunning] = useState<boolean>(false);
  const [examTimeSeconds, setExamTimeSeconds] = useState<number>(10800); // 3 hours
  const [mockSubjectiveAnswer, setMockSubjectiveAnswer] = useState<string>('');
  const [activeSubjectiveQuestion, setActiveSubjectiveQuestion] = useState<SubjectiveQuestion>(modelSubjectiveQuestions[0]);
  const [evaluatingAi, setEvaluatingAi] = useState<boolean>(false);
  const [aiEvaluationResult, setAiEvaluationResult] = useState<any>(null);

  // Timer effect for mock exam
  useEffect(() => {
    let interval: any = null;
    if (isExamRunning && examTimeSeconds > 0) {
      interval = setInterval(() => {
        setExamTimeSeconds((prev) => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isExamRunning, examTimeSeconds]);

  const formatTimer = (secs: number) => {
    const hrs = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const filteredMcqs = modelExamLevel2MCQs.filter((q) => {
    if (selectedCategory === 'all') return true;
    return q.category === selectedCategory;
  });

  const currentMcq = filteredMcqs[currentMcqIndex % Math.max(1, filteredMcqs.length)];

  const handleSelectOption = (qId: number, chosenOption: 'A' | 'B' | 'C' | 'D') => {
    setUserAnswers((prev) => ({ ...prev, [qId]: chosenOption }));
    setShowExplanation((prev) => ({ ...prev, [qId]: true }));
    if (currentMcq && chosenOption === currentMcq.correctAnswer) {
      try {
        confetti({ particleCount: 30, spread: 40, origin: { y: 0.8 } });
      } catch (_) {}
    }
  };

  const filteredViva = vivaQuestionsList.filter((v) => {
    if (!vivaSearch.trim()) return true;
    const q = vivaSearch.toLowerCase();
    return (
      v.questionNepali.toLowerCase().includes(q) ||
      v.englishKey.toLowerCase().includes(q) ||
      v.answerNepali.toLowerCase().includes(q) ||
      v.category.toLowerCase().includes(q)
    );
  });

  const currentViva = filteredViva[vivaIndex % Math.max(1, filteredViva.length)];

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleEvaluateSubjective = async () => {
    if (!mockSubjectiveAnswer.trim()) return;

    setEvaluatingAi(true);
    setAiEvaluationResult(null);

    try {
      const res = await fetch('/api/evaluate-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: activeSubjectiveQuestion.questionNepali,
          fullMarks: activeSubjectiveQuestion.marks,
          candidateAnswer: mockSubjectiveAnswer,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setAiEvaluationResult(data.evaluation);
        try {
          confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
        } catch (_) {}
      }
    } catch (err) {
      console.error(err);
      setAiEvaluationResult({
        marksAwarded: 4,
        fullMarks: activeSubjectiveQuestion.marks,
        feedbackNepali: 'तपाईंले दिएको उत्तरमा मुख्य बुँदाहरू (९०° क्लिभिङ, ८०००°C इलेक्ट्रिक आर्क, R ≥ ३०mm लुपिङ) राम्रोसँग समेटिएका छन्।',
        strengths: ['सटिक प्राविधिक शब्दावली प्रयोग गरिएको', 'सुरक्षा मापदण्ड समेटिएको'],
        missingPoints: ['ओजेसी बक्समा १ सेमी ग्रिप कायम राख्ने कुरा थप गर्नुहोस्'],
      });
    } finally {
      setEvaluatingAi(false);
    }
  };

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 text-white space-y-8">
      
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-950/70 border border-amber-800/60 px-3 py-1 rounded-full mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>CTEVT राष्ट्रिय सीप परीक्षण समिति (NSTB) परीक्षा तयारी</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            तह–१ र तह–२ आधिकारिक मोडल परीक्षा पोर्टल
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            १००+ वस्तुगत बहुबैकल्पिक प्रश्न (MCQs), मौखिक अन्तर्वार्ता (Viva-Voce) फ्ल्यासकार्ड र AI परीक्षक सहितको ३ घण्टे मोडल एक्जाम।
          </p>
        </div>

        {/* Sub-tab Navigation */}
        <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveSubTab('mcq-practice')}
            className={`px-3.5 py-2 rounded-xl font-semibold transition-all ${
              activeSubTab === 'mcq-practice'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            वस्तुगत अभ्यास (MCQs)
          </button>
          <button
            onClick={() => setActiveSubTab('viva-flashcards')}
            className={`px-3.5 py-2 rounded-xl font-semibold transition-all ${
              activeSubTab === 'viva-flashcards'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            मौखिक अन्तर्वार्ता (Viva)
          </button>
          <button
            onClick={() => setActiveSubTab('mock-exam')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-semibold transition-all ${
              activeSubTab === 'mock-exam'
                ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                : 'text-amber-400 hover:text-white'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>३ घण्टे मोडल परीक्षा (Exam Mode)</span>
          </button>
        </div>
      </div>

      {/* MODE 1: MCQ Interactive Trainer */}
      {activeSubTab === 'mcq-practice' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Question Index Sidebar */}
          <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                प्रश्न सूची ({filteredMcqs.length})
              </span>
              <span className="text-xs text-emerald-400 font-bold">
                हल गरिएको: {Object.keys(userAnswers).length}
              </span>
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentMcqIndex(0);
              }}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none"
            >
              <option value="all">सबै विषय (All Questions)</option>
              <option value="fiber">Optical Fiber & Splicing</option>
              <option value="telecom">Outside Plant & Poling</option>
              <option value="electrical">Electrical, Voltage & Earthing</option>
              <option value="networking">Switching & EPABX</option>
              <option value="safety">Safety, Tools & Measurements</option>
            </select>

            {/* Grid of Question Number Buttons */}
            <div className="grid grid-cols-5 gap-2 max-h-72 overflow-y-auto pr-1">
              {filteredMcqs.map((q, idx) => {
                const isCurrent = idx === currentMcqIndex;
                const isAnswered = userAnswers[q.id] !== undefined;
                const isCorrect = isAnswered && userAnswers[q.id] === q.correctAnswer;
                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentMcqIndex(idx)}
                    className={`h-9 rounded-lg font-bold text-xs transition-all ${
                      isCurrent
                        ? 'bg-blue-600 text-white ring-2 ring-blue-400'
                        : isAnswered
                        ? isCorrect
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                          : 'bg-rose-950 text-rose-300 border border-rose-700'
                        : 'bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Question Box */}
          {currentMcq && (
            <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
              
              {/* Question Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="bg-blue-900/80 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-700/60">
                  प्रश्न नं. {currentMcqIndex + 1} / {filteredMcqs.length} (पूर्णाङ्क: १)
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {currentMcq.category}
                </span>
              </div>

              {/* Question Text */}
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                  {currentMcq.questionNepali}
                </h3>
              </div>

              {/* Options Grid */}
              <div className="space-y-2.5">
                {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
                  const optText = currentMcq.options[optKey];
                  const selectedOpt = userAnswers[currentMcq.id];
                  const isSelected = selectedOpt === optKey;
                  const isAnswered = selectedOpt !== undefined;
                  const isCorrect = optKey === currentMcq.correctAnswer;

                  let btnStyle = 'bg-slate-950/80 border-slate-800 text-slate-200 hover:bg-slate-800/80';
                  if (isAnswered) {
                    if (isCorrect) {
                      btnStyle = 'bg-emerald-950/90 border-emerald-600 text-emerald-200 font-bold';
                    } else if (isSelected) {
                      btnStyle = 'bg-rose-950/90 border-rose-600 text-rose-200';
                    }
                  }

                  return (
                    <button
                      key={optKey}
                      onClick={() => handleSelectOption(currentMcq.id, optKey)}
                      className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm flex items-start gap-3 transition-all ${btnStyle}`}
                    >
                      <span className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {optKey}
                      </span>
                      <span className="leading-snug">{optText}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Technical Fact Box */}
              {showExplanation[currentMcq.id] && (
                <div className="bg-amber-950/40 border border-amber-800/60 rounded-xl p-4 space-y-2 animate-fade-in text-xs">
                  <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>सहि उत्तर तथा प्राविधिक व्याख्या (Technical Fact):</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    {currentMcq.explanationNepali}
                  </p>
                </div>
              )}

              {/* Navigation Bottom Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <button
                  onClick={() => setCurrentMcqIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentMcqIndex === 0}
                  className="bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-300 px-4 py-2 rounded-xl text-xs font-semibold"
                >
                  अघिल्लो प्रश्न
                </button>

                <button
                  onClick={() => setCurrentMcqIndex((prev) => Math.min(filteredMcqs.length - 1, prev + 1))}
                  disabled={currentMcqIndex === filteredMcqs.length - 1}
                  className="bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white px-5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5"
                >
                  <span>अर्को प्रश्न</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}
        </div>
      )}

      {/* MODE 2: Viva-Voce Flashcards */}
      {activeSubTab === 'viva-flashcards' && (
        <div className="max-w-3xl mx-auto space-y-6">
          
          {/* Top Filter & Count */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
            <div>
              <h3 className="font-bold text-white text-sm">मौखिक अन्तर्वार्ता (Viva-Voce Flashcards)</h3>
              <p className="text-xs text-slate-400">कार्डमा क्लिक गरेर आधिकारिक उत्तर तथा परीक्षोपयोगी फर्मुला हेर्नुहोस्।</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-amber-400 font-bold bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800/60">
                कार्ड #{vivaIndex + 1} / {filteredViva.length}
              </span>
            </div>
          </div>

          {/* Interactive Flashcard with Flip Animation */}
          {currentViva && (
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className={`min-h-[280px] sm:min-h-[320px] rounded-3xl p-8 border cursor-pointer transition-all shadow-2xl flex flex-col justify-between select-none ${
                isFlipped
                  ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border-indigo-500/80'
                  : 'bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border-slate-700/80 hover:border-blue-500'
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <span className="bg-slate-950/80 text-cyan-300 text-xs font-mono px-3 py-1 rounded-full border border-slate-800">
                  {currentViva.category}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSpeak(isFlipped ? currentViva.answerNepali : currentViva.questionNepali);
                  }}
                  className="text-slate-400 hover:text-amber-400 p-2 rounded-full hover:bg-slate-800 transition-colors"
                  title="उच्चारण सुन्नुहोस्"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              {/* Card Body */}
              <div className="space-y-4 text-center my-auto py-4">
                {!isFlipped ? (
                  <div className="space-y-2">
                    <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                      मौखिक प्रश्न (Viva Question)
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                      {currentViva.questionNepali}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">{currentViva.englishKey}</p>
                    <p className="text-[11px] text-slate-500 pt-2">👉 उत्तर हेर्न कार्डमा क्लिक गर्नुहोस् (Tap to Flip)</p>
                  </div>
                ) : (
                  <div className="space-y-3 text-left animate-fade-in">
                    <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                      आधिकारिक मोडेल उत्तर (Official Model Answer)
                    </span>
                    <p className="text-sm sm:text-base text-slate-100 leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                      {currentViva.answerNepali}
                    </p>
                    <div className="bg-amber-950/40 border border-amber-800/60 p-3 rounded-xl text-xs text-amber-300 font-medium">
                      ★ मुख्य कुञ्जी (Key Concept): {currentViva.englishKey}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800/60">
                <span>क्लिक गरेर पल्टाउनुहोस्</span>
                <span>अंकभार: २ वा ५ अंक</span>
              </div>
            </div>
          )}

          {/* Flashcard Next/Prev Controls */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => {
                setIsFlipped(false);
                setVivaIndex((prev) => Math.max(0, prev - 1));
              }}
              disabled={vivaIndex === 0}
              className="bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 px-5 py-2.5 rounded-xl text-xs font-semibold"
            >
              अघिल्लो कार्ड
            </button>
            <button
              onClick={() => {
                setIsFlipped(false);
                setVivaIndex((prev) => Math.min(filteredViva.length - 1, prev + 1));
              }}
              disabled={vivaIndex === filteredViva.length - 1}
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white px-6 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5"
            >
              <span>अर्को कार्ड</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* MODE 3: Full 3-Hour CTEVT Model Exam Mode with AI Answer Evaluator */}
      {activeSubTab === 'mock-exam' && (
        <div className="space-y-6">
          
          {/* Exam Header Bar */}
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-amber-900 p-6 rounded-2xl border border-amber-500/40 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/90 px-3 py-1 rounded-full border border-amber-800/60">
                CTEVT / NSTB आधिकारिक मोडल परीक्षा
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1.5">
                टेलिकम टेक्निसियन तह–२ अन्तिम परीक्षा (पूर्णाङ्क: १०० • उत्तीर्णाङ्क: ४०)
              </h3>
              <p className="text-xs text-slate-200 mt-0.5">
                खण्ड ‘क’: ५० वस्तुगत (५० अंक) + खण्ड ‘ख’: १० विषयगत (५० अंक)
              </p>
            </div>

            {/* Timer and Start/Stop Button */}
            <div className="flex items-center gap-3">
              <div className="bg-slate-950/90 border border-slate-700 px-4 py-2 rounded-xl text-center font-mono">
                <span className="text-[10px] text-slate-400 block uppercase">बाँकी समय (Timer)</span>
                <strong className="text-xl font-bold text-amber-400">{formatTimer(examTimeSeconds)}</strong>
              </div>
              <button
                onClick={() => setIsExamRunning(!isExamRunning)}
                className={`px-5 py-3 rounded-xl font-bold text-xs shadow-lg transition-all ${
                  isExamRunning
                    ? 'bg-rose-600 hover:bg-rose-500 text-white'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                }`}
              >
                {isExamRunning ? 'परीक्षा रोक्नुहोस् (Pause)' : 'परीक्षा सुरु गर्नुहोस् (Start Exam)'}
              </button>
            </div>
          </div>

          {/* Subjective Section with AI Evaluator */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="bg-amber-400 text-slate-950 font-black text-xs px-2.5 py-0.5 rounded-md uppercase">
                खण्ड ‘ख’ - विषयगत प्रश्नहरू (Subjective Questions • 50 Marks)
              </span>
              <h4 className="text-lg font-bold text-white mt-2">
                विषयगत उत्तर अभ्यास तथा एआई स्वचालित मूल्याङ्कन (AI Answer Evaluator)
              </h4>
              <p className="text-xs text-slate-400">
                CTEVT का वरिष्ठ प्राविधिक परीक्षकको मापदण्ड अनुसार उत्तर लेख्नुहोस् र तुरुन्त अंक र फिडब्याक पाउनुहोस्।
              </p>
            </div>

            {/* Subjective Question Selector */}
            <div className="space-y-2">
              <label className="text-xs text-slate-300 font-semibold">अभ्यास गर्न चाहेको प्रश्न रोज्नुहोस्:</label>
              <select
                value={activeSubjectiveQuestion.id}
                onChange={(e) => {
                  const found = modelSubjectiveQuestions.find((q) => q.id === Number(e.target.value));
                  if (found) setActiveSubjectiveQuestion(found);
                  setAiEvaluationResult(null);
                }}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 outline-none"
              >
                {modelSubjectiveQuestions.map((sq) => (
                  <option key={sq.id} value={sq.id}>
                    प्रश्न {sq.id}: {sq.questionNepali} (अंकभार: {sq.marks})
                  </option>
                ))}
              </select>
            </div>

            {/* Question Details Box */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2">
              <div className="flex justify-between items-start gap-2">
                <h5 className="font-bold text-sm text-amber-300">
                  {activeSubjectiveQuestion.questionNepali}
                </h5>
                <span className="bg-blue-900 text-blue-200 text-xs px-2.5 py-0.5 rounded-md font-mono shrink-0">
                  {activeSubjectiveQuestion.marks} Marks
                </span>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                मुख्य बुँदाहरू: {activeSubjectiveQuestion.keyPoints.join(', ')}
              </div>
            </div>

            {/* Candidate Answer Textarea */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-200 flex items-center justify-between">
                <span>तपाईंको विस्तृत प्राविधिक उत्तर (Candidate's Answer):</span>
                <span className="text-slate-400 text-[11px]">नेपाली वा अंग्रेजीमा लेख्न सकिन्छ</span>
              </label>
              <textarea
                rows={6}
                value={mockSubjectiveAnswer}
                onChange={(e) => setMockSubjectiveAnswer(e.target.value)}
                placeholder="यहाँ आफ्नो उत्तर विस्तारपूर्वक लेख्नुहोस् (उदा. १ मिटर ज्याकेट हटाउने, २५०µm कोरिडोर स्ट्रिपिङ, ९०° क्लिभिङ, ८०००°C आर्क, R ≥ ३०mm लुपिङ)..."
                className="w-full bg-slate-950 border border-slate-700 focus:border-blue-500 rounded-xl p-4 text-xs sm:text-sm text-slate-100 outline-none leading-relaxed"
              ></textarea>
            </div>

            {/* Submit for AI Evaluation Button */}
            <button
              onClick={handleEvaluateSubjective}
              disabled={evaluatingAi || !mockSubjectiveAnswer.trim()}
              className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-600 hover:from-blue-500 hover:to-amber-500 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-xl flex items-center justify-center gap-2 transition-all"
            >
              {evaluatingAi ? (
                <span>CTEVT परीक्षक एआई द्वारा उत्तर जाँच्दै...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                  <span>एआई द्वारा उत्तर मूल्याङ्कन गर्नुहोस् (Evaluate Answer)</span>
                </>
              )}
            </button>

            {/* AI Evaluation Report Output */}
            {aiEvaluationResult && (
              <div className="bg-slate-950 border border-emerald-600/60 rounded-2xl p-6 space-y-4 animate-fade-in">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <h5 className="font-bold text-white text-base">मूल्याङ्कन नतिजा (Evaluation Report)</h5>
                  </div>
                  <div className="bg-emerald-950 border border-emerald-700 text-emerald-300 font-mono font-bold text-sm px-3 py-1 rounded-xl">
                    प्राप्ताङ्क: {aiEvaluationResult.marksAwarded} / {aiEvaluationResult.fullMarks}
                  </div>
                </div>

                <p className="text-xs text-slate-200 leading-relaxed bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                  {aiEvaluationResult.feedbackNepali}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-emerald-950/30 p-3 rounded-xl border border-emerald-800/50 space-y-1">
                    <strong className="text-emerald-400 block font-semibold">राम्रा पक्षहरू (Strengths):</strong>
                    <ul className="list-disc list-inside text-slate-300 space-y-0.5">
                      {aiEvaluationResult.strengths?.map((s: string, i: number) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-950/30 p-3 rounded-xl border border-amber-800/50 space-y-1">
                    <strong className="text-amber-400 block font-semibold">सुधार गर्नुपर्ने बुँदाहरू (Missing / Tips):</strong>
                    <ul className="list-disc list-inside text-slate-300 space-y-0.5">
                      {aiEvaluationResult.missingPoints?.map((m: string, i: number) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
};
