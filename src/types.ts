export interface Course {
  id: string;
  titleNepali: string;
  titleEnglish: string;
  level: string;
  duration: string;
  practicalPercentage: number;
  description: string;
  features: string[];
  targetAudience: string[];
  jobProspects: string[];
  badge: string;
  icon: string;
  feeText?: string;
  upcomingBatch: string;
}

export interface TechnicalTool {
  id: number;
  nepaliName: string;
  englishName: string;
  category: 'optical-fiber' | 'copper-splicing' | 'measuring-testing' | 'pole-civil' | 'electrical-power' | 'safety-ppe';
  description: string;
  usagePlace: string;
  keyExamFact: string;
  imageUrl?: string;
}

export interface ColorCodeItem {
  number: number;
  nepaliName: string;
  englishName: string;
  hexColor: string;
  textColor?: string;
  internationalColor?: string;
  internationalNepali?: string;
  internationalHex?: string;
}

export interface CopperPairItem {
  pairNo: number;
  tipWire: string; // Primary
  ringWire: string; // Secondary
  primaryColorHex: string;
  secondaryColorHex: string;
  binderGroup?: string;
}

export interface ExamQuestionMCQ {
  id: number;
  questionNepali: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanationNepali: string;
  category: 'fiber' | 'copper' | 'tools' | 'electrical' | 'safety' | 'networking' | 'telecom';
}

export interface VivaQuestion {
  id: number;
  questionNepali: string;
  answerNepali: string;
  englishKey: string;
  category: string;
}

export interface SubjectiveQuestion {
  id: number;
  marks: number;
  questionNepali: string;
  modelAnswerNepali: string;
  keyPoints: string[];
  category: string;
}

export interface TelecomSymbol {
  id: number;
  nameNepali: string;
  nameEnglish: string;
  category: 'outside-plant' | 'electrical-schematic' | 'network-hierarchy';
  description: string;
  symbolAsciiOrSvg: string;
  statusVariants?: {
    existing: string;
    toInstall: string;
    dismantled: string;
  };
}

export interface ManualChapter {
  id: string;
  chapterNumber: number;
  titleNepali: string;
  titleEnglish: string;
  summary: string;
  contentMarkdown: string;
  keyTakeaways: string[];
  relatedTools: number[];
  relatedExamQuestions: number[];
}

export interface Enrollment {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  course: string;
  batch: string;
  experience: string;
  purpose: string;
  createdAt: string;
  seatNumber: string;
}

export type TestimonialCategory = 'all' | 'fiber' | 'telecom' | 'isp' | 'abroad' | 'women-tech' | 'entrepreneur';

export interface Testimonial {
  id: string;
  nameNepali: string;
  nameEnglish: string;
  batchYear: string;
  courseTaken: string;
  currentRole: string;
  company: string;
  location: string;
  avatarColor: string;
  rating: number;
  certificationBadge: string;
  quoteNepali: string;
  quoteEnglish: string;
  careerHighlight: string;
  skillsMastered: string[];
  category: TestimonialCategory;
  featured?: boolean;
  salaryGrowth?: string;
}
