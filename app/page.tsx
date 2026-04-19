import Link from "next/link";
import {
  coreStats,
  heroHighlights,
  heroSupportCards,
  homeValuePillars,
  industries,
  serviceCards,
  whyChooseUs,
} from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { PageHero } from "@/components/page-hero";
import { FaqList } from "@/components/faq-list";

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Same-day logistics"
        title="Fast same-day delivery across the UK"
        description="Fast, reliable logistics for businesses and individuals with bike, van, and truck delivery for urgent, scheduled, and specialist jobs."
        primaryCta={{ href: "/fleet#quote-form", label: "Get a quote" }}
        secondaryCta={{ href: "/services", label: "View services" }}
      />

      <section className="cq-section relative z-10 -mt-16">
        <div className="container-shell">
          <div className="cq-grid-3 gap-5">
            {heroSupportCards.map((item) => (
              <article key={item.title} className="surface-card p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2F7A3A]">{item.title}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cq-section section-space section-grid">
        <div className="container-shell">
          <div className="flex flex-wrap gap-3">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#dbeedc] bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-soft"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="cq-split cq-split-main mt-16">
            <SectionHeading
              eyebrow="What we do"
              title="Delivery support for urgent, routine, and specialist logistics"
              description="From small parcels and documents to bulk consignments and repeat business runs, Kamdan provides the vehicle, timing, and visibility needed to keep goods moving."
            />

            <div className="cq-grid-3 gap-5">
              {serviceCards.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="surface-card p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf7ee] text-[#2F7A3A]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="cq-section section-space bg-[#020817]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why choose Kamdan"
            title="Trusted support for same-day delivery across the UK"
            description="Every job is handled by trained staff with the right vehicle, real-time visibility, and a simple service approach built around speed and care."
            theme="dark"
          />

          <div className="cq-grid-4 mt-12">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="surface-card-dark p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7ed38a]/10 text-[#b7ebb8]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </article>
              );
            })}
          </div>

          <div className="cq-grid-3 mt-12">
            {coreStats.map((item, index) => (
              <article
                key={item.value}
                className={`rounded-[30px] border p-8 ${
                  index === 2 ? "border-[#7ed38a]/20 bg-[#102136]" : "border-white/10 bg-white/5"
                }`}
              >
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cq-section section-space bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Operational strengths"
            title="A stronger presentation of the brand promises"
            description="Kamdan combines fast collection, dependable communication, specialist handling, and flexible delivery planning for businesses that need speed without losing control."
            align="center"
          />

          <div className="cq-grid-2 mt-12">
            {homeValuePillars.map((item, index) => (
              <article key={item.title} className="surface-card p-8">
                <span className="inline-flex rounded-full bg-[#031020] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cq-section section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Industries served"
            title="Flexible logistics support for a wide mix of sectors"
            description="Retail, construction, events, professional services, medical supply, and specialist production teams all need reliable movement. Kamdan is built to support that demand."
          />

          <div className="mt-10 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-soft"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="cq-section section-space bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="FAQ"
            title="Common delivery questions"
            description="Quick answers to the questions customers ask most when booking same-day or specialist courier support."
          />

          <div className="mt-12">
            <FaqList />
          </div>
        </div>
      </section>

      <section className="cq-section section-space">
        <div className="container-shell">
          <div className="home-cta-panel rounded-[36px] bg-[#031020] px-8 py-12 text-white shadow-panel">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b7ebb8]">Ready to move</p>
            <h2 className="home-cta-title mt-4 max-w-3xl text-balance font-semibold">
              Join UK businesses that need delivery support they can trust.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Request a quote, share your route details, and get matched with the right delivery option for the job.
            </p>
            <div className="cq-actions mt-8">
              <Link
                href="/fleet#quote-form"
                className="inline-flex items-center rounded-full bg-[#7ed38a] px-6 py-3 text-sm font-semibold text-[#031020] transition hover:bg-[#98dfa1]"
              >
                Get instant quotation
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Learn more about us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
