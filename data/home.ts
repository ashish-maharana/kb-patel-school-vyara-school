import { placeholderAssets } from "@/data/placeholders";
import type {
  AdmissionsUpdatesContent,
  CoCurricularItem,
  CurriculumCardItem,
  FeatureItem,
  GalleryItem,
  HeroContent,
  LegacyStatItem,
  TimelineItem,
} from "@/lib/types";

// Content verification checklist:
// - Confirm official phone, email, principal name, and exact class availability before launch.
// - Public listings support English medium, co-ed, Vyara/Tapi, GSEB context, and ATL/innovation lab positioning.

export const homeHero: HeroContent = {
  eyebrow: "English Medium Learning in Vyara",
  title: "Welcome to Brightminds at Khushalbhai B. Patel School",
  description:
    "A lively English-medium school experience where academics, innovation, values, and student confidence grow together.",
  imageSrc: placeholderAssets.kidsRun,
  imageAlt: "Placeholder children running at school",
  primaryCta: { label: "Get Started Now", href: "/admissions" },
  secondaryCta: { label: "Enjoy Class", href: "/activities" },
};

export const imageSlots = {
  learningSection: placeholderAssets.classroom,
  principalSection: placeholderAssets.students,
  coCurricularSection: placeholderAssets.sports,
  curriculum: {
    computerScience: placeholderAssets.lab,
    primaryEducation: placeholderAssets.classroom,
    science: placeholderAssets.science,
    publicSpeaking: placeholderAssets.students,
    mathematics: placeholderAssets.library,
    languages: placeholderAssets.library,
  },
} as const;

export const learningIntro = {
  title: "Discover a World of Wonder and Learning",
  paragraphs: [
    "Khushalbhai B. Patel English Medium School, Vyara is positioned around English-medium learning, co-educational development, and future-ready student exposure.",
    "The school story is strengthened by public references to GSEB/state-board schooling and an ATAL Tinkering Lab ecosystem for hands-on innovation.",
  ],
  link: { label: "About Us", href: "/about" },
};

export const schoolAtAGlance = "School Snapshot";

export const legacyStats: LegacyStatItem[] = [
  { value: "1990", label: "Listed Establishment Year" },
  { value: "English", label: "Medium" },
  { value: "Co-Ed", label: "School Type" },
  { value: "ATL", label: "Innovation Lab Signal" },
];

export const homeHighlights: FeatureItem[] = [
  { title: "Interactive Lessons", description: "Clear teaching, practice, and activities keep students engaged in everyday learning.", icon: "Blocks" },
  { title: "GSEB Readiness", description: "State-board aligned academic direction for secondary and higher-secondary learners.", icon: "BookMarked" },
  { title: "Learning Games and Quizzes", description: "Playful review moments help students build confidence with concepts.", icon: "Sparkles" },
  { title: "Safe, Focused Environment", description: "A structured school routine supports discipline, care, and student belonging.", icon: "ShieldCheck" },
];

export const homeLearningPathway: TimelineItem[] = [
  { year: "Step 1", title: "Concept Clarity", description: "Students build strong subject understanding through guided lessons." },
  { year: "Step 2", title: "Practice and Discussion", description: "Classroom interaction strengthens confidence and recall." },
  { year: "Step 3", title: "Projects and Innovation", description: "ATL-inspired exposure encourages design thinking and hands-on learning." },
  { year: "Step 4", title: "Exam and Future Readiness", description: "Students prepare for next academic steps with discipline and purpose." },
];

export const homeCampusMoments: GalleryItem[] = [
  { src: placeholderAssets.gallery[0], alt: "Placeholder student classroom moment", title: "Active Classrooms" },
  { src: placeholderAssets.gallery[1], alt: "Placeholder science learning moment", title: "STEM Curiosity" },
  { src: placeholderAssets.gallery[2], alt: "Placeholder reading activity", title: "Reading Confidence" },
  { src: placeholderAssets.gallery[3], alt: "Placeholder student collaboration", title: "Team Learning" },
];

export const homeAdmissionsPreview = [
  { step: "01", title: "Inquiry", description: "Contact the school for current class availability and admission guidance." },
  { step: "02", title: "Visit and Discuss", description: "Understand academics, facilities, school routine, and required documents." },
  { step: "03", title: "Confirm Admission", description: "Submit documents and complete enrollment formalities with the office team." },
];

export const homeQuickLinks = [
  { title: "Programs for Secondary", description: "Academic pathways with English-medium instruction.", icon: "School", href: "/academics" },
  { title: "Innovation Activities", description: "ATL-inspired STEM, projects, clubs, and practical exposure.", icon: "Rocket", href: "/activities" },
  { title: "AI Learning", description: "Coding, robotics, design thinking, and safe digital skills.", icon: "BotMessageSquare", href: "/ai-learning" },
  { title: "Admissions", description: "Process, documents, eligibility, and parent FAQs.", icon: "ClipboardCheck", href: "/admissions" },
];

export const parentTestimonials = [
  { quote: "The English-medium focus and structured academics give students a confident path forward.", name: "Parent Voice", role: "Vyara" },
  { quote: "Innovation exposure makes learning feel practical, not only textbook-based.", name: "Parent Voice", role: "Secondary Section" },
  { quote: "The school environment supports discipline, participation, and steady student growth.", name: "Parent Voice", role: "Admissions Inquiry" },
];

export const schoolNews = [
  { title: "How ATL-style projects can build design thinking", category: "Innovation", imageSrc: placeholderAssets.gallery[4] },
  { title: "English-medium learning habits for stronger confidence", category: "Academics", imageSrc: placeholderAssets.gallery[5] },
  { title: "Student activities that make school life more expressive", category: "Activities", imageSrc: placeholderAssets.students },
];

export const principalSection = {
  quote: "Every student deserves learning that is clear, creative, disciplined, and connected to the future.",
  author: "School Leadership Team - Khushalbhai B. Patel English Medium School",
};

export const curriculumOverview = {
  title: "Academic and Innovation Overview",
  description: "A school direction combining English-medium academics, GSEB readiness, and hands-on STEM exposure.",
};

export const curriculumCards: CurriculumCardItem[] = [
  { title: "Secondary Academics", description: "Subject learning with regular practice and board-oriented clarity.", imageSrc: imageSlots.curriculum.primaryEducation, imageAlt: "Placeholder secondary academics" },
  { title: "Higher Secondary Pathway", description: "Focused academic preparation for senior learners and future study.", imageSrc: imageSlots.curriculum.languages, imageAlt: "Placeholder higher secondary pathway" },
  { title: "ATAL Tinkering Exposure", description: "Robotics, electronics, design thinking, and innovation project signals.", imageSrc: imageSlots.curriculum.computerScience, imageAlt: "Placeholder tinkering lab" },
  { title: "Science and Practical Thinking", description: "Observation, experimentation, and curiosity-led subject confidence.", imageSrc: imageSlots.curriculum.science, imageAlt: "Placeholder science learning" },
  { title: "Communication", description: "English-medium expression, reading, writing, and classroom discussion.", imageSrc: imageSlots.curriculum.publicSpeaking, imageAlt: "Placeholder communication practice" },
  { title: "Library and Study Habits", description: "Reading culture, revision routines, and independent learning support.", imageSrc: imageSlots.curriculum.mathematics, imageAlt: "Placeholder study habits" },
];

export const coCurricular = {
  title: "Games, Activities, and Innovation",
  description: "Students grow through sports, projects, clubs, quizzes, presentations, and practical learning exposure.",
};

export const coCurricularItems: CoCurricularItem[] = [
  { title: "ATL and STEM Projects", description: "Hands-on innovation activities introduce robotics, electronics, and design thinking." },
  { title: "Sports and Teamwork", description: "Games and movement strengthen fitness, discipline, and peer collaboration." },
  { title: "Clubs and Quizzes", description: "Skill-based activities encourage curiosity, confidence, and healthy competition." },
  { title: "Presentation and Events", description: "Stage and classroom opportunities help students express ideas clearly." },
];

export const admissionsUpdatesCta: AdmissionsUpdatesContent = {
  title: "Want admission updates?",
  description: "Share your details and the school office can guide you with class availability and next steps.",
  fields: [
    { label: "Parent Name", name: "parent_name", type: "text", placeholder: "Parent Name" },
    { label: "Email", name: "email", type: "email", placeholder: "Email Address" },
    { label: "Phone", name: "phone", type: "text", placeholder: "Phone Number" },
  ],
  message: { label: "Message", name: "message", placeholder: "Admission inquiry" },
  submitLabel: "Submit",
};

