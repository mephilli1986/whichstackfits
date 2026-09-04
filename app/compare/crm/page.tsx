import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM software for small service businesses — WhichStackFits",
  description:
    "Pipedrive vs HubSpot CRM vs Zoho CRM vs Less Annoying CRM for 1–20 person service businesses: who each is for, who it's not for, and what each actually includes.",
};

const PIPEDRIVE_URL = "https://aff.trypipedrive.com/0573qp3twuo9";

type Tool = {
  name: string;
  url: string;
  affiliate?: boolean;
  forWho: string;
  notFor: string;
  includes: { label: string; note: string }[];
  pricingNotes: string[];
};

const tools: Tool[] = [
  {
    name: "Pipedrive",
    url: PIPEDRIVE_URL,
    affiliate: true,
    forWho:
      "Owner-led teams that win work through an actual sales pipeline: agencies and consultancies with named deals, stages, and follow-ups that slip when nobody chases them. The visual pipeline is the whole product philosophy — you drag deals through stages, and the CRM nags you when a deal has no next activity. Of the four, it's the most focused on getting you to close.",
    notFor:
      "Anyone expecting a client-portal studio. Pipedrive is a sales-pipeline CRM, not a HoneyBook — there's no client portal, no native contracts or invoicing, and the extras (email campaigns, documents, lead capture) are paid add-ons that raise the real monthly cost. Also not for teams that just need a shared address book; you'd be paying for pipeline discipline you won't use. Not construction software.",
    includes: [
      { label: "CRM pipeline", note: "Visual, activity-driven pipeline — its strongest suit." },
      { label: "Email", note: "Two-way sync and templates; marketing campaigns are a paid add-on." },
      { label: "Scheduling", note: "Built-in meeting scheduler." },
      { label: "Invoicing / quotes", note: "No native invoicing; documents and quotes come via the paid Smart Docs add-on." },
      { label: "Contracts", note: "No native contracts; e-sign lives in the Smart Docs add-on." },
    ],
    pricingNotes: [
      "Lite: $14 per seat/month, billed annually.",
      "Growth: $39 per seat/month, billed annually.",
      "Premium: $59 per seat/month, billed annually.",
      "Ultimate: $79 per seat/month, billed annually.",
      "Monthly billing costs more (the vendor page quotes up to 42% savings on annual).",
      "No free plan — 14-day free trial, no credit card required. Add-ons are priced separately.",
    ],
  },
  {
    name: "HubSpot CRM",
    url: "https://www.hubspot.com/pricing/crm",
    forWho:
      "Teams that want a genuinely free start: the free tier covers 2 users and 1,000 contacts with no time limit, and it's a real CRM — contacts, deals, email connection, a meeting scheduler. If you're not sure you need a CRM yet, this is the cheapest way to find out, with room to grow into paid tools later.",
    notFor:
      "Anyone who reads \"free CRM\" as \"HubSpot is free forever for everything.\" It isn't — the free tier is a foundation, and the paid hubs cost real money, with the Professional tiers priced for teams far bigger than 20 people. If you know today that you'll need serious marketing automation or reporting, price the paid tiers before you commit, not after your data lives there. Not construction software.",
    includes: [
      { label: "CRM pipeline", note: "Deals and pipeline included on the free tier." },
      { label: "Email", note: "Connects Gmail/Outlook; lite marketing email on free, more in paid hubs." },
      { label: "Scheduling", note: "Meeting scheduler included on the free tier." },
      { label: "Invoicing / quotes", note: "Basic quotes exist; payments and invoicing depend on region — verify for yours." },
      { label: "Contracts", note: "No native contract e-sign; typically paired with a separate tool." },
    ],
    pricingNotes: [
      "Free: $0 — up to 2 users and 1,000 contacts, no time limit, no credit card.",
      "Starter Customer Platform: $20/month per seat (a $7/month new-customer promotion was running at time of check).",
      "Professional and Enterprise hubs cost substantially more. Verify on vendor pricing page.",
    ],
  },
  {
    name: "Zoho CRM",
    url: "https://www.zoho.com/crm/pricing.html",
    forWho:
      "Budget-conscious teams that want suite economics: real workflow automation and mass email at the lowest paid price here, plus a free edition for up to 3 users. If you're already inside the wider Zoho ecosystem (Books, Bookings, Sign), the pieces connect into a cheap, capable stack.",
    notFor:
      "Anyone who values polish and a short learning curve over price. Zoho CRM's interface is busier than the other three, and the \"suite\" answer to scheduling, invoicing, and contracts means configuring separate Zoho apps rather than flipping a switch. Solo operators who just want contacts and follow-ups will find it more machine than they need. Not construction software.",
    includes: [
      { label: "CRM pipeline", note: "Pipelines, workflows, and automation — deep for the price." },
      { label: "Email", note: "Templates and mass email from the CRM." },
      { label: "Scheduling", note: "Not native — handled by Zoho Bookings, a separate app." },
      { label: "Invoicing / quotes", note: "Quotes in CRM; invoicing lives in Zoho Books/Invoice, separate apps." },
      { label: "Contracts", note: "E-sign via Zoho Sign, a separate app." },
    ],
    pricingNotes: [
      "Free: $0 — up to 3 users.",
      "Standard: $14/user/month.",
      "Professional: $23/user/month.",
      "Enterprise: $40/user/month.",
      "Local taxes may apply; confirm billing-period details on the vendor page.",
    ],
  },
  {
    name: "Less Annoying CRM",
    url: "https://www.lessannoyingcrm.com/pricing",
    forWho:
      "Solo operators and very small teams who want a CRM they'll actually keep using: contacts, unlimited simple pipelines, tasks, and a calendar at one flat price with everything included and free phone support from real humans. It's the only one of the four where the pricing page needs no calculator.",
    notFor:
      "Teams that want automation, email marketing, or a client-facing anything. There are no workflow automations, no marketing email, no quotes, no contracts — it logs email rather than sending campaigns. If you expect the CRM to do work while you sleep, or your team is heading past a handful of seats, you'll outgrow it. Not construction software.",
    includes: [
      { label: "CRM pipeline", note: "Unlimited simple pipelines and unlimited contacts." },
      { label: "Email", note: "Email logging only — no campaigns or sequences." },
      { label: "Scheduling", note: "Built-in calendar and tasks; no client-facing booking page." },
      { label: "Invoicing / quotes", note: "None." },
      { label: "Contracts", note: "None." },
    ],
    pricingNotes: [
      "$15/user/month flat, plus applicable tax — one plan, everything included, no tiers.",
      "30-day free trial, no credit card required, cancel anytime.",
    ],
  },
];

export default function Crm() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <p className="text-sm font-medium text-slate-400">Compare · CRM</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        CRM software for small service businesses
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-600">
        Four CRMs that fit a 1–20 person service business — agency,
        consultancy, coaching practice, or local professional firm — rather
        than a 50-person sales org. They solve different problems: one is a
        pipeline machine, one is a free foundation, one is a budget suite,
        and one is deliberately simple. Here&rsquo;s who each actually fits.
      </p>
      <p className="mt-4 text-sm text-slate-500">
        Some links are affiliate links. Commissions do not change the review.
      </p>

      <p className="mt-6">
        <span className="inline-block rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-medium text-ink">
          Pricing checked September 4, 2026
        </span>
      </p>

      <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left">
              <th className="p-3 font-semibold text-ink"></th>
              <th className="p-3 font-semibold text-ink">Pipedrive</th>
              <th className="p-3 font-semibold text-ink">HubSpot CRM</th>
              <th className="p-3 font-semibold text-ink">Zoho CRM</th>
              <th className="p-3 font-semibold text-ink">Less Annoying CRM</th>
            </tr>
          </thead>
          <tbody className="align-top text-slate-600">
            {[
              [
                "Best for",
                "Pipeline-driven selling",
                "Free start with room to grow",
                "Suite power on a budget",
                "Simple solo CRM",
              ],
              [
                "Pipeline",
                "Excellent — the core product",
                "Included on free tier",
                "Deep, with automation",
                "Unlimited, deliberately simple",
              ],
              [
                "Email",
                "Sync + templates; campaigns are an add-on",
                "Lite marketing email on free",
                "Templates and mass email",
                "Logging only",
              ],
              [
                "Scheduling",
                "Built in",
                "Built in (free tier)",
                "Separate app (Zoho Bookings)",
                "Calendar only, not client-facing",
              ],
              [
                "Starting price",
                "$14/seat/mo (annual)",
                "Free; Starter $20/seat/mo",
                "Free (3 users); $14/user/mo",
                "$15/user/mo flat",
              ],
              [
                "Who should skip it",
                "Anyone wanting portals, contracts, invoicing",
                "Anyone counting on paid hubs being cheap",
                "Anyone allergic to busy interfaces",
                "Automation and marketing-email teams",
              ],
            ].map(([label, ...cells]) => (
              <tr key={label} className="border-b border-slate-100 last:border-0">
                <th className="p-3 text-left font-medium text-slate-800">{label}</th>
                {cells.map((cell, i) => (
                  <td key={i} className="p-3 leading-relaxed">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          ["Best pipeline CRM", "Pipedrive"],
          ["Best free start", "HubSpot CRM"],
          ["Best suite on a budget", "Zoho CRM"],
          ["Best simple solo CRM", "Less Annoying CRM"],
        ].map(([label, tool]) => (
          <li
            key={label}
            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm"
          >
            <span className="font-medium text-slate-500">{label}: </span>
            <span className="font-semibold text-ink">{tool}</span>
          </li>
        ))}
      </ul>

      <div className="mt-12 space-y-12">
        {tools.map((t, i) => (
          <section
            key={t.name}
            className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8"
          >
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              {i + 1}. {t.name}
            </h2>

            <h3 className="mt-5 font-semibold text-ink">Who it&rsquo;s for</h3>
            <p className="mt-1 leading-relaxed text-slate-600">{t.forWho}</p>

            <h3 className="mt-5 font-semibold text-ink">Who it&rsquo;s not for</h3>
            <p className="mt-1 leading-relaxed text-slate-600">{t.notFor}</p>

            <h3 className="mt-5 font-semibold text-ink">What it actually includes</h3>
            <ul className="mt-2 space-y-1.5 text-slate-600">
              {t.includes.map((inc) => (
                <li key={inc.label} className="leading-relaxed">
                  <span className="font-medium text-slate-800">{inc.label}:</span>{" "}
                  {inc.note}
                </li>
              ))}
            </ul>

            <h3 className="mt-5 font-semibold text-ink">
              Pricing — checked September 4, 2026
            </h3>
            <ul className="mt-2 space-y-1.5 text-slate-600">
              {t.pricingNotes.map((p) => (
                <li key={p} className="leading-relaxed">{p}</li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-slate-500">
              Prices change. Recheck the vendor pricing page before you buy.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={t.url}
                target="_blank"
                rel={t.affiliate ? "sponsored noopener" : "noopener"}
                className="inline-block rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink-dark"
              >
                Visit {t.name}
              </a>
              {t.affiliate && (
                <span className="text-sm text-slate-500">
                  Affiliate link. We may earn a commission.
                </span>
              )}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="text-2xl font-bold tracking-tight text-ink">
          How to choose
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            Start from your real bottleneck. If deals stall because follow-ups
            slip, Pipedrive&rsquo;s activity-driven pipeline earns its per-seat
            price. If you&rsquo;re not yet sure a CRM will stick, HubSpot&rsquo;s
            free tier is the lowest-risk way to build the habit — just price
            the paid hubs honestly before your data settles in.
          </p>
          <p>
            If you want the most automation per dollar and don&rsquo;t mind a
            busier interface, Zoho CRM at $14 is hard to beat. And if
            you&rsquo;re a solo operator who mostly needs contacts, notes, and
            follow-ups you&rsquo;ll actually do, Less Annoying CRM&rsquo;s flat
            $15 with human phone support is the one you won&rsquo;t abandon.
          </p>
          <p>
            None of these replaces a client-portal studio — proposals,
            contracts, and invoicing live in tools like the ones in our{" "}
            <a href="/compare/all-in-one" className="text-ink underline">
              all-in-one comparison
            </a>
            . Run your next few real leads through a trial before you migrate
            anything; the CRM you keep updating is the right one.
          </p>
        </div>
      </section>
    </main>
  );
}
