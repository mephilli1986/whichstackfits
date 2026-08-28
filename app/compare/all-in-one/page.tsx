import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All-in-one operations software for small service businesses — WhichStackFits",
  description:
    "HoneyBook vs Dubsado vs 17hats vs Systeme.io for 1–20 person service businesses: who each is for, who it's not for, and what each actually includes.",
};

const SYSTEME_URL =
  "https://systeme.io/?sa=sa017760682052e865e7e0fc3a668ff7a599d5d3d7";

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
    name: "HoneyBook",
    url: "https://www.honeybook.com",
    forWho:
      "Solo service providers and small studios who sell projects to individual clients — photographers, planners, designers, coaches — and want proposals, contracts, invoicing, and payments in one polished flow. If your bottleneck is the lead-to-booked-client handoff, this is the strongest of the four at it.",
    notFor:
      "Teams that need serious email marketing (broadcasts and automation are thin compared to a dedicated email tool), businesses selling courses or digital products at volume, or anyone outside the US and Canada — availability and payment processing are limited by region. Not construction software; it manages clients, not job sites.",
    includes: [
      { label: "CRM", note: "Lead capture, pipeline, and client workspaces built around projects." },
      { label: "Email", note: "Client communication and templates; not a marketing email platform." },
      { label: "Scheduling", note: "Built-in session and meeting scheduler." },
      { label: "Invoicing", note: "Invoices with integrated payment processing." },
      { label: "Contracts", note: "Templates with e-signature; contract-to-payment in one flow." },
    ],
    pricingNotes: [
      "Starter: $36/month, or $29/month billed annually.",
      "Essentials: $59/month, or $49/month billed annually.",
      "Premium: $129/month, or $109/month billed annually.",
      "Payment processing fees are extra, on top of the subscription.",
      "US and Canada availability still matters — check before committing.",
    ],
  },
  {
    name: "Dubsado",
    url: "https://www.dubsado.com",
    forWho:
      "Service businesses that want deep customization: multi-step workflows, conditional forms, branded client portals, and automations you design yourself. Popular with virtual assistants, doulas, designers, and anyone who has outgrown template-shaped tools and wants the system to match their exact process.",
    notFor:
      "Anyone who wants to be up and running in an afternoon. Dubsado's flexibility is real but so is its setup curve — expect days, not hours, and many owners pay a setup specialist. Also not for email marketing or course delivery, and not construction software.",
    includes: [
      { label: "CRM", note: "Projects, lead capture forms, and a customizable client portal." },
      { label: "Email", note: "Canned emails and workflow-triggered sends; no marketing broadcasts." },
      { label: "Scheduling", note: "Built-in scheduler tied to workflows." },
      { label: "Invoicing", note: "Invoices, payment plans, and recurring billing." },
      { label: "Contracts", note: "Contracts and sub-agreements with e-signature." },
    ],
    pricingNotes: [
      "Starter: $335/year.",
      "Premier: $525/year.",
      "The official page presents annual pricing; free to start.",
      "Unlimited clients on both listed plans.",
    ],
  },
  {
    name: "17hats",
    url: "https://www.17hats.com",
    forWho:
      "Solo operators who want the basics — lead capture, quotes, contracts, invoices, bookkeeping-lite — handled in one place without building custom workflows. It leans practical over pretty: a working back office for a one-person business, now sold as a single plan instead of a feature ladder.",
    notFor:
      "Growing teams (it's built around a solo operator), design-sensitive businesses that want a branded client experience, or anyone who needs strong integrations and marketing email. If you expect to hire staff this year, look at HoneyBook or Dubsado first. Not construction software.",
    includes: [
      { label: "CRM", note: "Contacts, leads, and project tracking." },
      { label: "Email", note: "Templates and simple automations; not a marketing platform." },
      { label: "Scheduling", note: "Online scheduling included; advanced scheduling is a paid add-on." },
      { label: "Invoicing", note: "Quotes, invoices, recurring billing, and basic bookkeeping." },
      { label: "Contracts", note: "Contracts with e-signature." },
    ],
    pricingNotes: [
      "One paid plan with billing choices commonly shown as $60/month, $600/year, or $800 for two years — the old Essentials / Standard / Premier ladder is no longer the current public offer.",
      "A limited Free CRM tier exists.",
      "Document limits and add-ons (extra users, advanced scheduling, bank connect) still apply.",
      "Confirm the live grid on 17hats.com/pricing — their page has changed structure.",
    ],
  },
  {
    name: "Systeme.io",
    url: SYSTEME_URL,
    affiliate: true,
    forWho:
      "Coaches, consultants, and creators who make money from an audience: sales funnels, email broadcasts and automation, courses, and simple digital-product checkout — on a budget, with a genuinely usable free tier. If your growth engine is a funnel and an email list, it covers a lot for very little.",
    notFor:
      "Client-service studios. Systeme.io is not a client-portal / contract / invoicing tool like HoneyBook or Dubsado — there are no proposals, no e-signature contracts, no per-client project portal. If you book clients, send contracts, and invoice for projects, it is the wrong tool as your core system. It's a marketing and course platform, plainly.",
    includes: [
      { label: "CRM", note: "Contact list with tags — an email list, not a client-project CRM." },
      { label: "Email", note: "Broadcasts, sequences, and automation rules — its strongest suit here." },
      { label: "Scheduling", note: "No native booking calendar; you'd pair an external scheduler." },
      { label: "Invoicing", note: "Checkout and order forms for products; not client project invoicing." },
      { label: "Contracts", note: "None. No proposals or e-signatures." },
    ],
    pricingNotes: [
      "Free: $0 — up to 2,000 contacts and 3 funnels. No credit card required.",
      "Startup: $17/month — up to 5,000 contacts and 10 funnels.",
      "Webinar: $47/month — up to 10,000 contacts, adds evergreen webinars.",
      "Unlimited: $97/month — unlimited contacts, funnels, and automation rules.",
    ],
  },
];

export default function AllInOne() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <p className="text-sm font-medium text-slate-400">
        Compare · All-in-one platforms
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        All-in-one operations software for small service businesses
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-600">
        Four platforms that promise to run a 1–20 person service business —
        agency, consultancy, coaching practice, or local professional firm —
        from one login. They are not interchangeable: three are built for
        client work, one is built for audiences. Here&rsquo;s who each one
        actually fits.
      </p>
      <p className="mt-4 text-sm text-slate-500">
        Some links are affiliate links. Commissions do not change the review.
      </p>

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
              Pricing — checked August 28, 2026
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
            Start from how you make money, not from feature lists. If clients
            book you for projects and you send proposals, contracts, and
            invoices, you want HoneyBook (fastest to a polished client
            experience), Dubsado (deepest customization if you&rsquo;ll invest
            the setup time), or 17hats (cheapest working back office for a
            solo operator).
          </p>
          <p>
            If your business runs on an audience — funnels, an email list,
            courses — none of those three is built for that, and Systeme.io
            covers it at the lowest cost. Some coaching businesses genuinely
            need both halves; in that case pick one client tool and one
            marketing tool rather than forcing either to do the other job.
          </p>
          <p>
            Whatever you pick, run your next three real clients (or your next
            real launch) through the trial before you migrate anything. The
            tool that survives contact with your actual workflow is the right
            one.
          </p>
        </div>
      </section>
    </main>
  );
}
