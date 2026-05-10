import type { NavItem, SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "K B Patel English Medium School",
  shortName: "K B Patel School",
  location: "Vyara, Tapi, Gujarat",
  email: "admissions@kbpatelschoolvyara.in",
  phones: ["+91 98765 43210", "+91 02626 000000"],
  address: "Near Old Bus Stand, Kanpura, Vyara, Tapi, Gujarat - 394650",
  brand: {
    palette: {
      bg: "#F6F6F6",
      ink: "#111111",
      primary: "#6F0B64",
      accent: "#2EE876",
      support: "#F25AAE",
      highlight: "#FFDF4D",
    },
    motif: "default",
    buttonStyle: "pill",
    sectionSpacing: "airy",
  },
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Activities", href: "/activities" },
  { label: "AI Learning", href: "/ai-learning" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  quick: navigation,
  admissions: [
    { label: "Admissions Process", href: "/admissions#process" },
    { label: "Documents Required", href: "/admissions#documents" },
    { label: "FAQ", href: "/admissions#faq" },
  ],
};

export const socialLinks = [
  { platform: "Facebook", url: "https://facebook.com/", ariaLabel: "Follow us on Facebook" },
  { platform: "Instagram", url: "https://instagram.com/", ariaLabel: "Follow us on Instagram" },
  { platform: "YouTube", url: "https://youtube.com/", ariaLabel: "Follow us on YouTube" },
] as const;

