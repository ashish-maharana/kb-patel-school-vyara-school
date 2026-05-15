import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { GlowCard } from "@/components/glow-card";
import { PageHero } from "@/components/page-hero";
import { ProgramCard } from "@/components/program-card";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import { createPageMetadata } from "@/lib/metadata";
import {
  coCurricularItems,
  curriculumCards,
  homeAdmissionsPreview,
  homeCampusMoments,
  homeHero,
  homeHighlights,
  homeLearningPathway,
  homeQuickLinks,
  imageSlots,
  learningIntro,
  parentTestimonials,
  schoolNews,
} from "@/data/home";
import { site } from "@/data/site";

export const metadata = createPageMetadata({
  title: "Home | Khushalbhai B. Patel English Medium School",
  description: "English-medium schooling in Vyara with GSEB readiness, innovation exposure, values, and confident student growth.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="page-grid pb-10">
      <section className="section-wrap">
        <PageHero content={homeHero} variant="kb-ref" />
      </section>

      <section className="section-wrap grid gap-5 md:grid-cols-2">
        {homeQuickLinks.slice(0, 2).map((item, index) => (
          <Link key={item.href} href={item.href} className="block">
            <article className="ref-card flex min-h-32 items-center gap-5 p-5">
              <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#f6f6f6] text-3xl">
                {index === 0 ? "A+" : "Go"}
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-[#151515]">{item.title}</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#5d5a54]">{item.description}</p>
                <p className="mt-3 text-sm font-extrabold text-[#f25aae]">Explore Activities</p>
              </div>
            </article>
          </Link>
        ))}
      </section>

      <section className="section-wrap text-center">
        <SectionHeader
          align="center"
          variant="kb-ref"
          eyebrow="Our Approach"
          title="Learning Made Warm, Clear, and Playful"
          description="A lively rhythm for academics, expression, activities, STEM exposure, and confident daily growth."
        />
        <div className="relative mx-auto mt-10 max-w-4xl">
          <div className="mx-auto h-[360px] max-w-[360px] overflow-hidden rounded-[46%] border-[18px] border-[#f6f6f6] shadow-[0_22px_54px_rgba(49,33,19,0.10)]">
            <Image src={imageSlots.learningSection} alt="Placeholder classroom learning" width={540} height={540} className="h-full w-full object-cover" />
          </div>
          <div className="mt-8 grid gap-4 md:absolute md:inset-0 md:mt-0 md:grid-cols-2">
            {homeHighlights.map((item, index) => (
              <div key={item.title} className={`md:flex ${index % 2 === 0 ? "md:items-start md:justify-start" : "md:items-end md:justify-end"}`}>
                <GlowCard {...item} theme="kb-ref" variant="flat" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cream-band section-wrap py-16">
        <SectionHeader
          align="center"
          variant="kb-ref"
          eyebrow="Learning Stages"
          title="Age-Appropriate Growth for Every Stage"
          description="Programs are designed around English-medium confidence, subject clarity, STEM curiosity, and steady progress."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {curriculumCards.slice(0, 3).map((card, index) => (
            <article key={card.title} className="ref-card overflow-hidden p-4">
              <Image src={card.imageSrc} alt={card.imageAlt} width={640} height={420} className="aspect-[4/3] w-full rounded-[22px] object-cover" />
              <div className="p-3">
                <p className="text-xs font-extrabold text-[#f25aae]">Stage 0{index + 1}</p>
                <h3 className="mt-2 text-xl font-extrabold text-[#151515]">{card.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#5d5a54]">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader
            variant="kb-ref"
            eyebrow="Student Pathway"
            title="A Simple Journey from Comfort to Confidence"
            description="The school journey builds clarity through routine, discovery, expression, innovation, and readiness."
          />
          <div className="mt-8">
            <Timeline items={homeLearningPathway} variant="kb-ref" />
          </div>
        </div>
        <article className="overflow-hidden rounded-[34px] bg-[#f6f6f6] p-5">
          <Image src={imageSlots.coCurricularSection} alt="Placeholder co-curricular learning" width={900} height={620} className="aspect-[4/3] w-full rounded-[28px] object-cover" />
          <div className="grid gap-3 pt-5 sm:grid-cols-2">
            {coCurricularItems.map((item) => (
              <div key={item.title} className="rounded-[22px] bg-white p-4">
                <h3 className="text-base font-extrabold text-[#151515]">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#5d5a54]">{item.description}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="cream-band section-wrap py-16">
        <SectionHeader
          align="center"
          variant="kb-ref"
          eyebrow="Parent Voices"
          title="What Families Look For in a School"
          description={`Warmth, structure, and confidence-building are at the heart of the ${site.shortName} experience.`}
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {parentTestimonials.map((item) => (
            <article key={item.quote} className="ref-card p-6">
              <p className="text-sm font-extrabold text-[#f25aae]">5.0 out of 5</p>
              <blockquote className="mt-4 text-base font-extrabold leading-7 text-[#151515]">"{item.quote}"</blockquote>
              <p className="mt-5 text-sm font-bold text-[#5d5a54]">{item.name}</p>
              <p className="text-xs font-bold text-[#8a8379]">{item.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <SectionHeader
          align="center"
          variant="kb-ref"
          eyebrow="Moments"
          title="Learning, Play, and Growth"
          description="Placeholder visuals show the final gallery rhythm until real school images are ready."
        />
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {homeCampusMoments.map((item, index) => (
            <article key={item.src} className={`${index === 0 ? "md:translate-y-8" : index === 2 ? "md:-translate-y-6" : ""} overflow-hidden rounded-[24px] bg-white p-2 shadow-[0_16px_36px_rgba(49,33,19,0.08)]`}>
              <Image src={item.src} alt={item.alt} width={540} height={540} className="aspect-square w-full rounded-[20px] object-cover" />
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <SectionHeader
          align="center"
          variant="kb-ref"
          eyebrow="School Updates"
          title="Read About School News and Educational Insights"
          description="Short content cards give the homepage the richer rhythm of the reference layout."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {schoolNews.map((item) => (
            <article key={item.title} className="ref-card overflow-hidden">
              <Image src={item.imageSrc} alt={`Placeholder ${item.category}`} width={640} height={420} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <p className="text-xs font-extrabold text-[#8a8379]">{item.category}</p>
                <h3 className="mt-2 text-lg font-extrabold leading-tight text-[#151515]">{item.title}</h3>
                <Link href="/activities" className="mt-4 inline-flex text-sm font-extrabold text-[#f25aae]">Read More</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <article>
          <h2 className="text-4xl font-extrabold leading-[1.03] text-[#151515] sm:text-5xl">Contact us, we would love to hear from you.</h2>
          <p className="mt-4 max-w-lg text-sm font-semibold leading-7 text-[#5d5a54]">
            Share your admission interest and the school team will guide you with availability, process, and visit details.
          </p>
          <div className="mt-6 grid gap-3 text-sm font-bold text-[#5d5a54]">
            <p>+91 98765 43210</p>
            <p>admissions@kbpatelschoolvyara.in</p>
            <p>Vyara, Tapi district, Gujarat</p>
          </div>
        </article>
        <article className="ref-card p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {homeAdmissionsPreview.map((step) => (
              <div key={step.step} className="rounded-[20px] bg-[#f6f6f6] p-4">
                <p className="text-xs font-extrabold text-[#f25aae]">{step.step}</p>
                <h3 className="mt-2 text-lg font-extrabold text-[#151515]">{step.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#5d5a54]">{step.description}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary mt-5">Contact Now</Link>
        </article>
      </section>

      <section className="section-wrap">
        <CTASection
          variant="kb-ref"
          title="Ready to Give Your Child the Best Start?"
          description={`Plan a visit, explore the learning rhythm, and begin the admission conversation with ${site.name}.`}
          primary={{ label: "Schedule a Visit", href: "/contact" }}
          secondary={{ label: "View Admissions", href: "/admissions" }}
        />
      </section>
    </div>
  );
}




