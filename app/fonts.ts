import { Baloo_2, Nunito } from "next/font/google";

/** Self-hosted via `next/font` so headings match on Android, iOS, and desktop (no missing “Cooper Black”). */
export const fontHeading = Baloo_2({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-heading-family",
  display: "swap",
});

export const fontBody = Nunito({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body-family",
  display: "swap",
});
