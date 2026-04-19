import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { servicesIntro, servicesPageCards } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={servicesIntro.heading}
        description={servicesIntro.body}
        primaryCta={{ href: "/fleet#quote-form", label: "Get a quote" }}
        secondaryCta={{ href: "/about", label: "Learn about Kamdan" }}
      />

      <section className="cq-section section-space bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Service lines"
            title="Professional delivery support for urgent, sensitive, and repeat jobs"
            description="From fast same-day runs to specialist handling and route planning, Kamdan helps customers match the right service to the delivery in front of them."
            align="center"
          />

          <div className="cq-grid-3 mt-12">
            {servicesPageCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className={`rounded-[32px] p-8 shadow-soft ${
                    index === 1 ? "bg-[#031020] text-white" : "border border-slate-200 bg-white"
                  }`}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      index === 1 ? "bg-white/10 text-[#b7ebb8]" : "bg-[#edf7ee] text-[#2F7A3A]"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className={`mt-6 text-2xl font-semibold ${index === 1 ? "text-white" : "text-slate-950"}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-slate-300" : "text-slate-600"}`}>
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cq-section section-space">
        <div className="container-shell cq-split cq-split-services">
          <div>
            <SectionHeading
              eyebrow="Courier focus"
              title="Same-day movement with the right vehicle for the load"
              description="From urgent paperwork to fragile goods and larger consignments, the fleet is matched to the size, speed, and care requirements of the job."
            />
            <div className="mt-8 grid gap-4 text-sm leading-7 text-slate-600">
              <div className="surface-card px-5 py-4">Bike delivery for small parcels and urgent paperwork</div>
              <div className="surface-card px-5 py-4">Van delivery for medium-sized packages and business runs</div>
              <div className="surface-card px-5 py-4">Truck delivery for bulk items, large loads, and specialist movement</div>
            </div>
          </div>

          <div className="rounded-[32px] bg-[#031020] p-8 text-white shadow-panel">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b7ebb8]">Service finder</p>
            <h3 className="mt-4 text-3xl font-semibold">Find the right logistics solution faster.</h3>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Answer a few simple questions, request a quote, and get matched with the right vehicle and
              service type for your route, timing, and load size.
            </p>
            <div className="cq-actions mt-8">
              <Link
                href="/fleet#quote-form"
                className="inline-flex items-center rounded-full bg-[#7ed38a] px-6 py-3 text-sm font-semibold text-[#031020] transition hover:bg-[#98dfa1]"
              >
                Begin
              </Link>
              <Link
                href="/fleet"
                className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View fleet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
