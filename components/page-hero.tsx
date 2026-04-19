import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="cq-section relative overflow-hidden hero-mesh">
      <div className="absolute inset-0 hero-grid opacity-20" />
      <div className="absolute left-[-18%] top-10 h-[420px] w-[420px] rounded-full bg-[#7ed38a]/10 blur-3xl" />
      <div className="absolute bottom-[-80px] right-[-10%] h-[320px] w-[320px] rounded-full bg-[#58ba79]/15 blur-3xl" />
      <div className="absolute inset-x-0 bottom-[-110px] h-[220px] -rotate-[4deg] bg-[#020817]" />

      <div className="container-shell hero-shell">
        <div className="hero-layout">
          <div className="max-w-2xl min-w-0">
            <span className="badge-kicker">{eyebrow}</span>
            <h1 className="hero-title">{title}</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">{description}</p>

            {(primaryCta || secondaryCta) && (
              <div className="cq-actions mt-10">
                {primaryCta ? (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center rounded-full bg-[#7ed38a] px-6 py-3 text-sm font-semibold text-[#031020] transition hover:bg-[#98dfa1]"
                  >
                    {primaryCta.label}
                  </Link>
                ) : null}
                {secondaryCta ? (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    {secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            )}
          </div>

          <div className="hero-card-shell">
            <div className="rounded-[34px] border border-white/10 bg-white/5 p-6 shadow-panel backdrop-blur">
              <div className="rounded-[30px] border border-white/10 bg-[#0b1630]/90 p-6">
                <div className="hero-panel-grid">
                  <div className="rounded-[28px] border border-white/6 bg-white/6 p-6">
                    <p className="text-sm font-medium text-[#b7ebb8]">Fast pickup</p>
                    <p className="mt-4 text-3xl font-semibold leading-tight text-white">Within the hour</p>
                    <p className="mt-4 text-sm leading-6 text-slate-300">
                      Quick local collection for urgent documents and parcels.
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-[#7ed38a]/10 bg-[#112539] p-6">
                    <p className="text-sm font-medium text-[#b7ebb8]">Live visibility</p>
                    <p className="mt-4 text-3xl font-semibold leading-tight text-white">Tracked delivery</p>
                    <p className="mt-4 text-sm leading-6 text-slate-300">
                      Clear movement updates from dispatch through final drop-off.
                    </p>
                  </div>

                  <div className="hero-wide-panel rounded-[28px] border border-slate-200 bg-[#f8fafc] p-6">
                    <p className="text-sm font-medium text-slate-500">Built for urgent and planned jobs</p>
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-[#031020]">
                      <span className="rounded-full bg-[#e7f6ea] px-4 py-2 text-sm font-semibold text-[#236b33]">
                        Bike delivery
                      </span>
                      <span className="rounded-full bg-[#e7f6ea] px-4 py-2 text-sm font-semibold text-[#236b33]">
                        Van delivery
                      </span>
                      <span className="rounded-full bg-[#031020] px-4 py-2 text-sm font-semibold text-white">
                        Truck delivery
                      </span>
                    </div>
                    <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
                      Direct collection, careful handling, and the right vehicle for documents, parcels, fragile items,
                      and larger consignments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
