import { placeholderAssets } from "@/data/placeholders";
import type { FeatureItem, HeroContent, ProgramItem, TimelineItem } from "@/lib/types";

// Content verification checklist:
// - Confirm exact class range, streams, board affiliation, and subject offerings.
// - Confirm facility list, lab details, timetable, and examination policy with school admin.

export const academicsHero: HeroContent = {
  eyebrow: "English-Medium Academics",
  title: "Clear Concepts, Strong Study Habits, Future Readiness",
  description:
    "A student-focused academic pathway for Vyara learners, combining English-medium instruction, state-board readiness, discipline, and practical learning exposure.",
  imageSrc: placeholderAssets.classroom,
  imageAlt: "Placeholder English-medium classroom learning scene",
  primaryCta: { label: "Admissions Open", href: "/admissions" },
  secondaryCta: { label: "Contact School", href: "/contact" },
};

export const academicPrograms: ProgramItem[] = [
  { title: "English Communication", description: "Reading, writing, speaking, and classroom expression for confident academic participation.", icon: "Languages" },
  { title: "Mathematics Readiness", description: "Concept clarity, regular practice, logical thinking, and exam-oriented preparation.", icon: "Sigma" },
  { title: "Science and Inquiry", description: "Observation, practical thinking, and lab-inspired exploration connected to real-world ideas.", icon: "Beaker" },
  { title: "Social Understanding", description: "Civic awareness, culture, geography, history, and responsible community thinking.", icon: "BookMarked" },
  { title: "Digital and STEM Exposure", description: "Technology awareness and innovation mindset supported by ATL-style project learning.", icon: "MonitorCog" },
  { title: "Board Preparation Habits", description: "Revision rhythm, written practice, assessment discipline, and study planning.", icon: "ClipboardCheck" },
];

export const pedagogy: FeatureItem[] = [
  { title: "Concept First", description: "Lessons are structured to build understanding before memorization or exam practice.", icon: "Lightbulb" },
  { title: "Guided Practice", description: "Students receive regular classroom practice, correction, and feedback.", icon: "GraduationCap" },
  { title: "Project Exposure", description: "Activities and lab-inspired tasks make learning more practical and memorable.", icon: "Puzzle" },
  { title: "Parent Connection", description: "Families can stay aligned with progress, expectations, and admission guidance.", icon: "MessagesSquare" },
];

export const learningPathway: TimelineItem[] = [
  { year: "Step 1", title: "Language Confidence", description: "Build English reading, writing, speaking, and classroom participation." },
  { year: "Step 2", title: "Subject Clarity", description: "Strengthen mathematics, science, social studies, and core academic foundations." },
  { year: "Step 3", title: "Practical Learning", description: "Use activities, lab exposure, presentations, and projects to apply ideas." },
  { year: "Step 4", title: "Exam Readiness", description: "Develop revision habits, written accuracy, discipline, and board-oriented confidence." },
];
