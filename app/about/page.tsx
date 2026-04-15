import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { aboutIntro, aboutReasons, contactCards, missionVision, whatWeDo } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Kamdan"
        title={aboutIntro.heading}
        description={aboutIntro.body}
        primaryCta={{ href: "/fleet#quote-form", label: "Request a quote" }}
        secondaryCta={{ href: "/services", label: "View services" }}
      />

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-2">
            {missionVision.map((item) => (
              <article key={item.title} className="surface-card p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2F7A3A]">{item.title}</p>
                <p className="mt-4 text-lg leading-8 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="What we do"
            title="Delivery support for urgent, routine, and specialist logistics"
            description="Kamdan supports same-day runs, eCommerce movement, corporate logistics, express dispatch, and safe short-term storage where needed."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whatWeDo.map((item) => {
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
      </section>

      <section className="bg-[#020817] py-20 sm:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Why choose us"
              title="A logistics partner built around speed, visibility, and care"
              description="Fast response times, professional riders and drivers, clear pricing, and responsive support all work together to make delivery easier for the customer."
              theme="dark"
            />

            <div className="mt-10 grid gap-4">
              {aboutReasons.map((reason) => (
                <div key={reason} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-slate-200">
                  {reason}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-white shadow-panel backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b7ebb8]">Our promise</p>
            <h3 className="mt-4 text-3xl font-semibold">Every delivery handled with care.</h3>
            <p className="mt-4 text-base leading-8 text-slate-300">
              We treat every shipment like it is our own, whether it is a document, parcel, or larger load.
              The focus stays the same: careful handling, on-time movement, and clear communication.
            </p>

            <div className="mt-8 grid gap-4">
              {contactCards.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-[#0d1930] p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#7ed38a]/10 text-[#b7ebb8]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">{item.title}</p>
                    </div>
                    <p className="mt-4 text-base font-medium text-white">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
