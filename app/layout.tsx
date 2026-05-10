import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { RouteScrollReset } from "@/components/route-scroll-reset";
import { ScrollProgress } from "@/components/scroll-progress";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "K B Patel English Medium School | Vyara",
  description: "English-medium co-educational learning in Vyara, Tapi with GSEB readiness, values, and ATL-inspired innovation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" className="h-full antialiased">
      <body className="min-h-full bg-[var(--bg)] text-[var(--fg)]">
        <RouteScrollReset />
        <ScrollProgress />
        <div className="min-h-screen">
          <Navbar />
          <main className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
