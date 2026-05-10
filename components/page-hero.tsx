import Image from "next/image";
import Link from "next/link";
import type { HeroContent } from "@/lib/types";

type HeroVariant = "default" | "Legacy" | "kb-ref";

export function PageHero({ content, variant = "default" }: { content: HeroContent; variant?: HeroVariant }) {
  if (variant === "kb-ref") {
    return (
      <section className="purple-band wide-band min-h-[720px] rounded-none px-6 pb-0 pt-12 text-center shadow-[0_30px_90px_rgba(111,11,100,0.28)] sm:px-10 lg:px-12">
        <div className="relative mx-auto max-w-[1500px]">
          <div className="mx-auto max-w-5xl">
            <p className="sticker mx-auto bg-[#2ee876] text-[#111111]">{content.eyebrow}</p>
            <h1 className="mt-8 text-5xl font-extrabold leading-[0.95] text-white sm:text-7xl lg:text-8xl">
              {content.title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-8 text-white/88 sm:text-lg">
              {content.description}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link className="btn-primary" href={content.primaryCta.href}>
                {content.primaryCta.label}
              </Link>
              {content.secondaryCta ? (
                <Link className="btn-secondary" href={content.secondaryCta.href}>
                  {content.secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>
          {content.imageSrc ? (
            <div className="relative mx-auto mt-12 max-w-5xl">
              <div className="absolute -left-8 top-8 hidden h-28 w-28 rotate-12 rounded-[34px] bg-[#ffdf4d] md:block" />
              <div className="absolute -right-10 top-28 hidden h-36 w-36 rounded-full bg-[#f25aae] md:block" />
              <div className="relative mx-auto overflow-hidden rounded-[52px_52px_12px_12px] border-[14px] border-white bg-white shadow-[0_26px_70px_rgba(17,17,17,0.24)]">
                <Image
                  src={content.imageSrc}
                  alt={content.imageAlt ?? content.title}
                  width={1180}
                  height={650}
                  priority
                  className="aspect-[16/7] w-full object-cover"
                />
              </div>
            </div>
          ) : null}
        </div>
      </section>
    );
  }

  if (variant === "Legacy") {
    return (
      <section className="soft-wave relative overflow-hidden bg-[#0f4c5c] p-6 text-white shadow-[0_24px_60px_rgba(15,76,92,0.2)] sm:p-10 lg:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(200,155,60,0.24),transparent_36%),radial-gradient(circle_at_82%_78%,rgba(224,122,95,0.18),transparent_42%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="sticker bg-[#c89b3c] text-[#1e2430]">{content.eyebrow}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.06] text-white sm:text-6xl">{content.title}</h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-white/90 sm:text-lg">{content.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href={content.primaryCta.href}>{content.primaryCta.label}</Link>
              {content.secondaryCta ? <Link className="btn-secondary" href={content.secondaryCta.href}>{content.secondaryCta.label}</Link> : null}
            </div>
          </div>
          {content.imageSrc ? (
            <div className="relative mx-auto w-full max-w-xl">
              <div className="relative overflow-hidden rounded-[2rem_0.7rem_2rem_0.7rem] border-4 border-[#c89b3c]/70 bg-white shadow-[0_22px_56px_rgba(30,36,48,0.28)]">
                <Image src={content.imageSrc} alt={content.imageAlt ?? content.title} width={720} height={560} priority className="aspect-[5/4] w-full object-cover" />
              </div>
            </div>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section className="scallop-y relative overflow-hidden rounded-[2rem] bg-[#6d1b7b] p-6 text-white shadow-[0_24px_70px_rgba(109,27,123,0.22)] sm:p-10 lg:p-12">
      <div className="hero-grid-overlay pointer-events-none absolute inset-0" />
      <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="sticker bg-[#ffd84d] text-[#15112b]">{content.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] text-white sm:text-6xl">{content.title}</h1>
          <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-white/88 sm:text-lg">{content.description}</p>
        </div>
      </div>
    </section>
  );
}





