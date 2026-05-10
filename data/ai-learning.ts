import { placeholderAssets } from "@/data/placeholders";
import type { FeatureItem, HeroContent, ProgramItem } from "@/lib/types";

// Content verification checklist:
// - Confirm exact ATAL Tinkering Lab facilities and mentor availability.
// - Confirm class-wise technology modules before publishing detailed mapping.

export const aiHero: HeroContent = {
  eyebrow: "ATL and Future Skills",
  title: "Innovation Learning for Curious Students",
  description:
    "Inspired by the school's public ATAL Tinkering Lab presence, this page positions coding, robotics, design thinking, and responsible technology as guided student experiences.",
  imageSrc: placeholderAssets.technology,
  imageAlt: "Placeholder students exploring STEM and technology concepts",
  primaryCta: { label: "View Academics", href: "/academics" },
  secondaryCta: { label: "Admissions", href: "/admissions" },
};

export const aiPrograms: ProgramItem[] = [
  { title: "Robotics Readiness", description: "Introductory logic, sensors, making, and machine-thinking concepts through guided activities.", icon: "Bot" },
  { title: "Coding Mindset", description: "Sequencing, patterns, problem solving, and computational thinking without unnecessary complexity.", icon: "GitBranch" },
  { title: "Design Thinking", description: "Students learn to observe a problem, imagine ideas, prototype, test, and improve.", icon: "Lightbulb" },
  { title: "STEM Projects", description: "Small project cards connect science, mathematics, creativity, and practical experimentation.", icon: "Puzzle" },
  { title: "Digital Responsibility", description: "Safe, balanced, and purposeful technology habits are treated as part of future readiness.", icon: "Shield" },
  { title: "Presentation Confidence", description: "Students explain project ideas through posters, demos, short talks, and showcases.", icon: "Presentation" },
];

export const howStudentsLearn: FeatureItem[] = [
  { title: "Think", description: "Students begin with a simple challenge, question, or real-life observation.", icon: "BookOpenCheck" },
  { title: "Make", description: "Hands-on experiments and prototypes help students learn by doing.", icon: "Construction" },
  { title: "Team Up", description: "Group tasks encourage communication, leadership, and shared problem solving.", icon: "UsersRound" },
  { title: "Improve", description: "Reflection helps students refine ideas and celebrate practical progress.", icon: "RefreshCcwDot" },
];

export const tomorrowSkills = [
  "Problem Solving",
  "Coding Logic",
  "Robotics Curiosity",
  "Design Thinking",
  "STEM Confidence",
  "Teamwork",
  "Communication",
  "Responsible Technology",
];

export const showcaseCards: FeatureItem[] = [
  { title: "ATL-Inspired Showcases", description: "Project displays can highlight making, innovation, and practical learning moments.", icon: "GalleryHorizontalEnd" },
  { title: "Integrated Learning", description: "STEM activities can connect with mathematics, science, language, and presentation work.", icon: "Orbit" },
  { title: "Future-Ready Identity", description: "The school brand can stand apart through innovation, confidence, and student creativity.", icon: "Sparkles" },
];
