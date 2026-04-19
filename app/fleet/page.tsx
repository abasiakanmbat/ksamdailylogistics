import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { fleetIntro, fleetOptions, fleetReasons, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Fleet",
};

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Fleet"
        title={fleetIntro.heading}
        description={fleetIntro.body}
        primaryCta={{ href: "#quote-form", label: "Book consultation" }}
        secondaryCta={{ href: "/services", label: "View services" }}
      />

      <section className="cq-section section-space bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Vehicles"
            title="Built around the three fleet types shown in the design"
            description="Motorbikes, vans, and trucks each play a distinct role in helping Kamdan deliver quickly, safely, and efficiently."
            align="center"
          />

          <div className="cq-grid-3 mt-12">
            {fleetOptions.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className={`rounded-[32px] p-8 shadow-soft ${
                    index === 2 ? "bg-[#031020] text-white" : "border border-slate-200 bg-white"
                  }`}
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-3xl ${
                      index === 2 ? "bg-white/10 text-[#b7ebb8]" : "bg-[#edf7ee] text-[#2F7A3A]"
                    }`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className={`mt-6 text-2xl font-semibold ${index === 2 ? "text-white" : "text-slate-950"}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-4 text-sm leading-7 ${index === 2 ? "text-slate-300" : "text-slate-600"}`}>
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cq-section section-space">
        <div className="container-shell cq-split cq-split-fleet">
          <div>
            <SectionHeading
              eyebrow="Why our fleet stands out"
              title="Trust signals turned into a clearer operations section"
              description="The fleet is supported by monitoring, regular maintenance, trained drivers, insurance support, and broad service reach across regional and nationwide jobs."
            />
            <div className="mt-8 grid gap-4">
              {fleetReasons.map((reason) => (
                <div key={reason} className="surface-card px-5 py-4 text-sm font-medium text-slate-700">
                  {reason}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] bg-[#031020] p-8 text-white shadow-panel">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b7ebb8]">Always on time</p>
              <h3 className="mt-4 text-3xl font-semibold">No delays. No excuses.</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Whether it is a small parcel or a full-load delivery, the fleet is ready to move goods safely and efficiently to their destination.
              </p>
              <div className="mt-6 grid gap-2 text-sm text-slate-300">
                <p>{siteConfig.address}</p>
                <p>{siteConfig.phone}</p>
                <p>{siteConfig.email}</p>
              </div>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}
