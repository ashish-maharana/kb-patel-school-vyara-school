"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SchoolBrandTitle } from "@/components/school-brand-title";
import { placeholderAssets } from "@/data/placeholders";
import { navigation, site } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#6f0b64]/10 bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-[1500px] items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8" aria-label="Main navigation">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3 lg:flex-none lg:max-w-70 min-[1200px]:max-w-80 xl:max-w-none"
        >
          <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[20px] bg-white shadow-[0_10px_24px_rgba(49,33,19,0.10)] sm:h-16 sm:w-16">
            <Image src={placeholderAssets.logo} alt={`${site.name} logo placeholder`} width={58} height={58} className="h-full w-full object-cover" priority />
          </span>
          <span className="min-w-0 pr-1">
            <SchoolBrandTitle variant="nav" />
          </span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-[18px] px-5 py-3 text-sm font-extrabold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f0b64] ${
                  active ? "bg-[#6f0b64] text-white" : "text-[#444b5a] hover:bg-[#f6f6f6] hover:text-[#6f0b64]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] border border-[#f25aae]/20 bg-white text-[#151515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f0b64] lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[#f25aae]/10 bg-[#ffffff] px-4 py-3 lg:hidden">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-[16px] px-3 py-2 text-sm font-extrabold ${
                      active ? "bg-[#6f0b64] text-white" : "text-[#444b5a] hover:bg-[#f6f6f6]"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </header>
  );
}



