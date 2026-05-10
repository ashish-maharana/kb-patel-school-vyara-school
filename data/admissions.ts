import { placeholderAssets } from "@/data/placeholders";
import type { FeatureItem, HeroContent } from "@/lib/types";

// Content verification checklist:
// - Confirm final phone numbers and admission window dates before production launch.
// - Confirm exact class intake policy and document requirements with office.

export const admissionsHero: HeroContent = {
  eyebrow: "Admissions",
  title: "A Clear Admission Path for Vyara Families",
  description:
    "Begin the admission conversation for an English-medium, co-educational school environment focused on academics, values, innovation exposure, and confidence.",
  imageSrc: placeholderAssets.reading,
  imageAlt: "Placeholder students during school learning moment",
  primaryCta: { label: "Start Inquiry", href: "/contact" },
  secondaryCta: { label: "Call Admissions", href: "tel:+919876543210" },
};

export const parentReasons: FeatureItem[] = [
  { title: "English-Medium Academics", description: "Subject clarity, communication confidence, and regular academic practice.", icon: "BookOpenCheck" },
  { title: "Safe and Caring Environment", description: "Student well-being, discipline, and emotional support are prioritized.", icon: "HousePlus" },
  { title: "Confidence Development", description: "Students are encouraged to speak, present, and participate regularly.", icon: "MessageCircleHeart" },
  { title: "Balanced Growth", description: "Academics, activities, and values-based learning progress together.", icon: "Scale" },
];

export const processSteps = [
  { step: "01", title: "Inquiry", description: "Contact school for seat availability and admission guidance." },
  { step: "02", title: "School Visit", description: "Meet school staff and understand the learning environment." },
  { step: "03", title: "Submit Documents", description: "Provide required records for admission processing." },
  { step: "04", title: "Enrollment Confirmation", description: "Complete formalities and receive class onboarding details." },
];

export const eligibility = [
  "Admissions are based on class availability.",
  "Admissions are guided by class availability and school intake policy.",
  "Parents may be invited for interaction and orientation.",
];

export const documents = [
  "Student birth certificate copy",
  "Previous school report/transfer details (if applicable)",
  "Passport-size photographs of student",
  "Parent/guardian ID and address proof",
  "Any relevant medical information",
];

export const admissionFaqs = [
  { question: "When should parents apply for admission?", answer: "Parents are advised to apply early in the admission cycle to secure seats based on availability." },
  { question: "Can parents visit the school before admission?", answer: "Yes. School visits are encouraged to understand the campus and learning approach." },
  { question: "Is the school co-educational?", answer: "The school profile is positioned as a co-educational learning environment." },
  { question: "Do you provide activity-based learning opportunities?", answer: "Yes. Activities and participation are integrated into the student development framework." },
];


