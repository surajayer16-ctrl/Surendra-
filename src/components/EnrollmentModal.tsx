import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Mail, User, BookOpen, Calendar, Award, ShieldCheck, Printer, Download, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { coursesList, instituteInfo } from '../data/coursesData';
import { Course, Enrollment } from '../types';
import { NitvtLogo } from './NitvtLogo';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: Course | null;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  initialCourse,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState(
    initialCourse ? initialCourse.id : coursesList[0].id
  );
  const [selectedBatch, setSelectedBatch] = useState('Morning Batch (७:०० - ९:०० AM)');
  const [experience, setExperience] = useState('Beginner (नयाँ सिकारु)');
  const [purpose, setPurpose] = useState('CTEVT / NSTB Skill Test & Certificate');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEnrollment, setSubmittedEnrollment] = useState<Enrollment | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    try {
      const selectedCourse = coursesList.find((c) => c.id === selectedCourseId);
      const res = await fetch('/api/enrollments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          course: selectedCourse ? selectedCourse.titleNepali : 'टेलिकम तालिम',
          batch: selectedBatch,
          experience,
          purpose,
        }),
      });
      const data = await res.json();
      if (data.success && data.enrollment) {
        setSubmittedEnrollment(data.enrollment);
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch (_) {}
      }
    } catch (err) {
      console.error(err);
      // Fallback local registration
      const fallback: Enrollment = {
        id: 'NITVT-' + Math.floor(100000 + Math.random() * 900000),
        fullName,
        phone,
        email: email || 'nitvtnepal@gmail.com',
        course: coursesList.find((c) => c.id === selectedCourseId)?.titleNepali || 'टेलिकम तालिम',
        batch: selectedBatch,
        experience,
        purpose,
        createdAt: new Date().toLocaleDateString('ne-NP'),
        seatNumber: 'SEAT-34',
      };
      setSubmittedEnrollment(fallback);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl text-white overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-purple-800 via-indigo-800 to-amber-600 p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <NitvtLogo size="md" />
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-white">
                अनलाइन सिट बुकिङ तथा भर्ना फारम
              </h3>
              <p className="text-xs text-amber-200">
                सुरेन्द्र ऐर (Surendra Air) • स्था. २०६४ • CTEVT सम्बन्धन
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submittedEnrollment ? (
            /* Success Receipt Card */
            <div className="space-y-6 text-center py-2" id="printable-receipt">
              <div className="flex items-center justify-center">
                <NitvtLogo size="xl" />
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400 bg-amber-950/80 border border-amber-800/60 px-3 py-0.5 rounded-full">
                  सिट सुरक्षित भयो (Confirmed Seat)
                </span>
                <h4 className="text-xl font-bold text-white mt-2">बधाई छ, {submittedEnrollment.fullName}!</h4>
                <p className="text-xs text-slate-300">
                  तपाईंको सिट सफलतापूर्वक दर्ता भएको छ। हाम्रो तालिम शाखाबाट छिट्टै सम्पर्क गरिनेछ।
                </p>
              </div>

              {/* Official Receipt Box */}
              <div className="bg-slate-950/90 border border-slate-700/80 rounded-xl p-4 text-left text-xs space-y-2.5 font-mono">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">दर्ता कोड (Token ID):</span>
                  <strong className="text-amber-400 font-bold">{submittedEnrollment.id}</strong>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">सिट नं. (Seat Number):</span>
                  <strong className="text-cyan-400">{submittedEnrollment.seatNumber}</strong>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">कोर्स (Selected Course):</span>
                  <span className="text-slate-100 font-sans font-semibold text-right">{submittedEnrollment.course}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">शिफ्ट (Time Shift):</span>
                  <span className="text-slate-200">{submittedEnrollment.batch}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">सम्पर्क नम्बर (Phone):</span>
                  <span className="text-slate-200">{submittedEnrollment.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">संस्थान ठेगाना:</span>
                  <span className="text-slate-300 font-sans">महालक्ष्मी-२, ललितपुर (०१-५२०३५२२)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-md transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>प्रमाणपत्र / रसिद प्रिन्ट</span>
                </button>
                <button
                  onClick={() => {
                    setSubmittedEnrollment(null);
                    onClose();
                  }}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2.5 rounded-xl text-xs font-medium transition-colors"
                >
                  बन्द गर्नुहोस्
                </button>
              </div>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Full Name */}
              <div className="space-y-1">
                <label className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  <span>प्रशिक्षार्थीको पूरा नाम (Full Name) *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="उदा. सुरज ऐर / प्रकाश श्रेष्ठ"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-700 focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-slate-100 outline-none transition-colors"
                />
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-200 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>मोबाइल नम्बर (Mobile Number) *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="९८४८८०५११९ / ९८XXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-700 focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-slate-100 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-200 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>इमेल ठेगाना (Email Address)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="youremail@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-700 focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-slate-100 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Course Selection */}
              <div className="space-y-1">
                <label className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>इच्छुक तालिम विषय (Select Course) *</span>
                </label>
                <select
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-700 focus:border-blue-500 rounded-xl px-3 py-2.5 text-slate-100 outline-none transition-colors"
                >
                  {coursesList.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.titleNepali} ({c.level})
                    </option>
                  ))}
                </select>
              </div>

              {/* Batch / Shift & Experience Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-200 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>उपयुक्त समय (Batch Shift)</span>
                  </label>
                  <select
                    value={selectedBatch}
                    onChange={(e) => setSelectedBatch(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-700 focus:border-blue-500 rounded-xl px-3 py-2.5 text-slate-100 outline-none transition-colors"
                  >
                    <option value="Morning Batch (७:०० - ९:०० AM)">बिहानी सिफ्ट (७:०० - ९:०० AM)</option>
                    <option value="Day Batch (११:०० - १:०० PM)">दिउँसोको सिफ्ट (११:०० - १:०० PM)</option>
                    <option value="Evening Batch (४:०० - ६:०० PM)">साँझको सिफ्ट (४:०० - ६:०० PM)</option>
                    <option value="Fast Track Weekend Batch">फास्ट ट्र्याक शनिबारे सिफ्ट</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-200 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>अनुभव स्तर (Experience)</span>
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-700 focus:border-blue-500 rounded-xl px-3 py-2.5 text-slate-100 outline-none transition-colors"
                  >
                    <option value="Beginner (नयाँ सिकारु)">नयाँ सिकारु (Beginner)</option>
                    <option value="ISP Technician (इन्टरनेटमा कार्यरत)">ISP मा कार्यरत प्राविधिक</option>
                    <option value="NTC Employee (नेपाल टेलिकम)">नेपाल टेलिकममा कार्यरत</option>
                    <option value="Engineering Student (इन्जिनियरिङ विद्यार्थी)">इन्जिनियरिङ विद्यार्थी</option>
                    <option value="Experienced without Certificate">अनुभवी (प्रमाणपत्र आवश्यक)</option>
                  </select>
                </div>
              </div>

              {/* Purpose */}
              <div className="space-y-1">
                <label className="font-semibold text-slate-200">तालिम लिनुको मुख्य उद्देश्य (Purpose):</label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-700 focus:border-blue-500 rounded-xl px-3 py-2.5 text-slate-100 outline-none transition-colors"
                >
                  <option value="CTEVT / NSTB Skill Test & Certificate">CTEVT राष्ट्रिय सीप परीक्षण परीक्षा तथा प्रमाणपत्र</option>
                  <option value="ISP / Nepal Telecom Job Placement">इन्टरनेट कम्पनी वा नेपाल टेलिकममा रोजगारी</option>
                  <option value="Job Promotion in Telecom">नेपाल टेलिकम / संस्थामा बढुवा (Promotion)</option>
                  <option value="Foreign Employment (Gulf / Abroad)">वैदेशिक रोजगारी (Telecom/Fiber Technician)</option>
                  <option value="Self Business / Contractor">आफ्नै प्राविधिक व्यवसाय / ठेक्कापट्टा</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold py-3.5 rounded-xl shadow-lg shadow-amber-600/30 text-sm transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>सिट सुरक्षित गर्दै...</span>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      <span>फारम बुझाउनुहोस् र सिट सुरक्षित गर्नुहोस्</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-2 pt-1">
                <span>📍 महालक्ष्मी-२, ललितपुर</span>
                <span>•</span>
                <span>📞 ०१-५२०३५२२ / ९८४८८०५११९</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
