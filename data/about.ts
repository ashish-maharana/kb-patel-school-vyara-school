import { placeholderAssets } from "@/data/placeholders";
import type {
  AboutQuickNavItem,
  FacultyContent,
  FeatureItem,
  HeroContent,
  ManagementContent,
  TimelineItem,
} from "@/lib/types";

// Content verification checklist:
// - Confirm school leadership names/designations before production.
// - Confirm establishment year, official trust/management name, and milestone timeline.
// - Confirm exact board/class range from school administration before publishing.

export const aboutHero: HeroContent = {
  eyebrow: "About K B Patel English Medium School",
  title: "English-Medium Learning with Vyara Values",
  description:
    "A co-educational school environment in Vyara, Tapi, shaped around academic discipline, confident communication, and future-ready student growth.",
  imageSrc: placeholderAssets.classroom,
  imageAlt: "Placeholder students in an English-medium school setting",
  primaryCta: { label: "View Academics", href: "/academics" },
  secondaryCta: { label: "Admissions", href: "/admissions" },
};

export const missionVision = {
  mission: "To support students with clear English-medium instruction, disciplined study habits, values-led development, and opportunities to explore technology, creativity, and leadership.",
  vision: "To prepare confident learners from Vyara who are academically ready, socially responsible, and curious enough to build meaningful futures.",
};

export const coreValues: FeatureItem[] = [
  { title: "Discipline", description: "Structured routines help students build consistency, respect, and responsibility.", icon: "ShieldCheck" },
  { title: "Confidence", description: "English communication, presentations, and participation support a strong student voice.", icon: "Megaphone" },
  { title: "Innovation", description: "STEM exposure and lab-inspired learning encourage curiosity and practical thinking.", icon: "Lightbulb" },
  { title: "Community", description: "The school experience stays connected to families and the Vyara learning community.", icon: "Handshake" },
];

export const differentiators: FeatureItem[] = [
  { title: "English-Medium Focus", description: "Classroom communication and academic practice are shaped for English-medium confidence.", icon: "School" },
  { title: "Secondary Readiness", description: "Learning habits, exam preparation, and concept clarity support higher academic stages.", icon: "GraduationCap" },
  { title: "Innovation Mindset", description: "ATAL Tinkering Lab positioning gives the brand a strong STEM and future-skills identity.", icon: "Rocket" },
];

export const philosophyTimeline: TimelineItem[] = [
  { year: "01", title: "Belonging", description: "Students feel welcomed, safe, and connected to school routines." },
  { year: "02", title: "Foundation", description: "Language, mathematics, science, and values are strengthened through steady practice." },
  { year: "03", title: "Exploration", description: "Activities, labs, projects, and events help students discover interests." },
  { year: "04", title: "Readiness", description: "Students grow toward board readiness, confidence, and future academic choices." },
];

export const aboutQuickNav: AboutQuickNavItem[] = [
  { label: "Management", href: "#management" },
  { label: "Faculty", href: "#faculty" },
];

export const managementContent: ManagementContent = {
  quickIntro: "Leadership details are kept as editable placeholders until the school confirms final names and designations.",
  chairmanMessage: {
    title: "Message from School Leadership",
    intro: "Our purpose is to create a school culture where discipline, English-medium confidence, and innovation grow together.",
    quote: "Education should open both the mind and the courage to use it well.",
    quoteSource: "School Editorial Placeholder",
    paragraphs: [
      "K B Patel English Medium School is positioned around steady academics, responsible conduct, and meaningful participation.",
      "Students are encouraged to think clearly, communicate confidently, and explore modern learning opportunities through guided projects and activities.",
      "Parents remain important partners in helping students build good habits, confidence, and long-term readiness.",
    ],
  },
  leaders: [
    {
      name: "School Leadership Team",
      role: "Management",
      imageSrc: placeholderAssets.campus,
      imageAlt: "Placeholder school leadership representative",
      bio: "Guides school culture, academic direction, and community confidence for the Vyara campus.",
      tags: ["Vision", "Governance"],
    },
    {
      name: "Principal (To Be Confirmed)",
      role: "Principal",
      imageSrc: placeholderAssets.reading,
      imageAlt: "Placeholder principal profile",
      bio: "Leads academic planning, student discipline, and teacher support. Replace with verified profile before launch.",
      tags: ["Academic Leadership", "Student Growth"],
    },
  ],
};

export const facultyContent: FacultyContent = {
  quickIntro: "Faculty copy is written as a neutral baseline and should be updated with verified department details later.",
  members: [
    {
      name: "Academic Faculty",
      role: "English-Medium Educators",
      imageSrc: placeholderAssets.classroom,
      imageAlt: "Placeholder faculty profile representative",
      bio: "Supports subject clarity, English communication, classroom discipline, and regular academic progress.",
      tags: ["English", "Science", "Mathematics"],
    },
    {
      name: "Activity and Innovation Mentors",
      role: "Co-Curricular Support",
      imageSrc: placeholderAssets.activity,
      imageAlt: "Placeholder activity mentor representative",
      bio: "Encourages students through events, STEM exploration, sports, arts, and participation-based learning.",
      tags: ["ATL", "Activities", "Confidence"],
    },
  ],
};
