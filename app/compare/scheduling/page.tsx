import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scheduling software for small service businesses — WhichStackFits",
  description:
    "Calendly vs Squarespace Scheduling (Acuity) vs Cal.com vs HoneyBook's scheduler for 1–20 person service businesses: who each is for, who it's not for, and what each actually includes.",
};

type Tool = {
  name: string;
  url: string;
  forWho: string;
  notFor: string;
  includes: { label: string; note: string }[];
  pricingNotes: string[];
};

const tools: Tool[] = [
  {
    name: "Calendly",
    url: "https://calendly.com/pricing",
    forWho:
      "Anyone whose scheduling problem is meetings: discovery calls, client check-ins, sales conversations. You share a link, people pick a slot, reminders go out, no-shows drop. The free plan covers a single event type, and the paid tiers add automations, payments via Stripe or PayPal, and team round-robin. It's the fastest of the four to be useful.",
    notFor:
      "Anyone expecting it to manage clients. Calendly is a scheduler, not a CRM — it hands booking data to your CRM (HubSpot and Mailchimp connect on Standard) rather than replacing one. Also not built for appointment businesses selling classes, packages, or gift certificates; that's Acuity territory. Not construction job-site scheduling.",
    includes: [
      { label: "CRM", note: "None — connects to HubSpot and Mailchimp on paid plans." },
      { label: "Email", note: "Booking notifications and reminders only; no marketing email." },
      { label: "Scheduling", note: "The core product: booking pages, automations, round-robin on Teams." },
      { label: "Invoicing", note: "None — collects payment at booking via Stripe/PayPal on paid plans." },
      { label: "Contracts", note: "None." },
    ],
    pricingNotes: [
      "Free: $0 — one event type, one calendar connection.",
      "Standard: $10 per seat/month, billed yearly.",
      "Teams: $16 per seat/month, billed yearly.",
      "Monthly billing costs more (the page quotes 17–20% yearly savings).",
      "Enterprise starts at $15,000/year at 50 seats — not a small-business plan.",
    ],
  },
  {
    name: "Squarespace Scheduling (Acuity)",
    url: "https://www.acuityscheduling.com/pricing",
    forWho:
      "Appointment-based businesses: coaches, studios, salons, therapists, tutors — anyone selling sessions, classes, packages, memberships, or gift certificates. Client intake forms, waitlists, and text reminders are built in, and payments run through Stripe, Square, PayPal, or Venmo. Of the four, it's the one built around selling your time rather than just booking it.",
    notFor:
      "Anyone who wants a free tier or just a simple meeting link — there's no free plan, and the packages/memberships machinery is wasted on plain discovery calls. Teams needing lead routing or CRM-grade pipelines should look elsewhere; the client list is a booking record, not a sales pipeline. Not construction job-site scheduling.",
    includes: [
      { label: "CRM", note: "A client list with intake forms — booking history, not a pipeline." },
      { label: "Email", note: "Appointment reminders; text reminders on Standard and up." },
      { label: "Scheduling", note: "Appointments, classes, waitlists, multiple calendars and staff." },
      { label: "Invoicing", note: "Payments at booking; sells packages, memberships, gift certificates." },
      { label: "Contracts", note: "None — custom intake forms are the closest thing." },
    ],
    pricingNotes: [
      "Starter: $16/month — 1 calendar.",
      "Standard: $27/month — up to 6 calendars, text reminders, packages and gift certificates.",
      "Premium: $49/month — up to 36 calendars, HIPAA BAA, logo removal.",
      "Figures shown with the annual-billing toggle (paying annually saves 20%); 7-day free trial, no free plan.",
    ],
  },
  {
    name: "Cal.com",
    url: "https://cal.com/pricing",
    forWho:
      "Individuals who want the most generous free scheduler going — the free-forever plan has no usage limits: unlimited event types, unlimited calendars, email and SMS notifications, and Stripe/PayPal payment collection, plus a one-click Calendly import. It's open source, so technical owners can self-host or embed it. Teams pay only when they need shared availability.",
    notFor:
      "Anyone who wants hand-holding or an appointment-shop feature set. There are no packages, memberships, or gift certificates, no client records, and the polish assumes you're comfortable configuring things yourself. Teams features (round-robin, routing forms) sit behind the paid plan. Not construction job-site scheduling.",
    includes: [
      { label: "CRM", note: "None — two-way Salesforce and HubSpot sync, even on free." },
      { label: "Email", note: "Email and SMS booking notifications; no marketing email." },
      { label: "Scheduling", note: "Unlimited event types and calendars free; round-robin and routing on Teams." },
      { label: "Invoicing", note: "None — accepts Stripe and PayPal payments at booking." },
      { label: "Contracts", note: "None." },
    ],
    pricingNotes: [
      "Free: $0 forever — 1 user, unlimited event types and calendars.",
      "Teams: $12 per user/month, billed yearly.",
      "Organizations: $28 per user/month, billed yearly.",
      "Yearly billing saves 25%; Enterprise is custom-priced.",
    ],
  },
  {
    name: "HoneyBook (as a scheduler)",
    url: "https://www.honeybook.com/pricing",
    forWho:
      "Client businesses that already want the studio around the calendar. HoneyBook's scheduler books sessions inside the same flow as proposals, contracts, invoices, and the client portal — the booking is one step in a client relationship, not a standalone link. If you're going to buy HoneyBook anyway, you don't need a separate scheduler.",
    notFor:
      "Anyone shopping for a cheap calendar. HoneyBook scheduling is part of a client-studio suite, not a standalone booking tool — you're buying the whole studio to get it, and the full scheduler (unlimited session types, SMS reminders) sits on the Essentials plan, not Starter. Read our full review in the all-in-one comparison before buying it for scheduling alone. Not construction job-site scheduling.",
    includes: [
      { label: "CRM", note: "Full client projects and pipeline — see the all-in-one guide." },
      { label: "Email", note: "Client communication and automations; not marketing email." },
      { label: "Scheduling", note: "Session booking; 1 session type on Starter, unlimited plus SMS reminders on Essentials." },
      { label: "Invoicing", note: "Full invoicing and payments." },
      { label: "Contracts", note: "Contracts with e-signature." },
    ],
    pricingNotes: [
      "Starter: $29/month, billed yearly — scheduler limited to 1 session type.",
      "Essentials: $49/month, billed yearly — full scheduler, automations, SMS reminders.",
      "Premium: $109/month, billed yearly.",
      "Monthly billing costs more (yearly saves up to 18%); payment processing fees are extra.",
    ],
  },
];

export default function Scheduling() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <p className="text-sm font-medium text-slate-400">
        Compare · Scheduling &amp; booking
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Scheduling software for small service businesses
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-600">
        Four ways a 1–20 person service business can stop playing email tag
        over meeting times. Two are dedicated booking links, one is built for
        appointment shops, and one is a scheduler that comes attached to an
        entire client studio. Here&rsquo;s who each actually fits.
      </p>
      <p className="mt-4 text-sm text-slate-500">
        Some links on this site are affiliate links. None of the links on this
        page are. Commissions never change the review.
      </p>

      <p className="mt-6">
        <span className="inline-block rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-medium text-ink">
          Pricing checked September 7, 2026
        </span>
      </p>

      <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left">
              <th className="p-3 font-semibold text-ink"></th>
              <th className="p-3 font-semibold text-ink">Calendly</th>
              <th className="p-3 font-semibold text-ink">Acuity</th>
              <th className="p-3 font-semibold text-ink">Cal.com</th>
              <th className="p-3 font-semibold text-ink">HoneyBook</th>
            </tr>
          </thead>
          <tbody className="align-top text-slate-600">
            {[
              [
                "Best for",
                "Simple meeting links",
                "Appointment shops — classes, packages",
                "Free power for individuals",
                "Booking inside a client studio",
              ],
              [
                "Free plan",
                "Yes — 1 event type",
                "No — 7-day trial",
                "Yes — unlimited event types",
                "No — free trial only",
              ],
              [
                "Payments at booking",
                "Paid plans (Stripe/PayPal)",
                "All plans (Stripe, Square, PayPal, Venmo)",
                "Yes, even free (Stripe/PayPal)",
                "Yes — full invoicing behind it",
              ],
              [
                "Reminders",
                "Email; automations on paid",
                "Email; text on Standard+",
                "Email & SMS",
                "Email; SMS on Essentials",
              ],
              [
                "Starting price",
                "Free; $10/seat/mo",
                "$16/mo",
                "Free; Teams $12/user/mo",
                "$29/mo (annual)",
              ],
              [
                "Who should skip it",
                "Anyone needing packages or a CRM",
                "Anyone wanting free or minimal",
                "Anyone wanting hand-holding",
                "Anyone who only needs a calendar",
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
          ["Best simple booking link", "Calendly"],
          ["Best for appointment businesses", "Acuity"],
          ["Best free scheduler", "Cal.com"],
          ["Best inside a client studio", "HoneyBook"],
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
              Pricing — checked September 7, 2026
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
                rel="noopener"
                className="inline-block rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink-dark"
              >
                Visit {t.name.replace(" (as a scheduler)", "")}
              </a>
              {t.name.startsWith("HoneyBook") && (
                <Link
                  href="/compare/all-in-one"
                  className="text-sm font-medium text-ink underline"
                >
                  Read the full HoneyBook review →
                </Link>
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
            Match the tool to what you&rsquo;re selling. If bookings are just
            meetings — sales calls, check-ins — Calendly gets you live in ten
            minutes, and Cal.com does the same for free with more headroom if
            you don&rsquo;t mind configuring it yourself.
          </p>
          <p>
            If bookings are your product — sessions, classes, packages,
            memberships — Acuity is the only one of the four built for that,
            and it earns its lack of a free plan. And if the booking is one
            step in a longer client relationship with proposals, contracts,
            and invoices attached, you&rsquo;re really shopping for a client
            studio, not a scheduler — start with our{" "}
            <Link href="/compare/all-in-one" className="text-ink underline">
              all-in-one comparison
            </Link>{" "}
            instead.
          </p>
          <p>
            Whichever you pick, put your real availability rules through the
            trial — buffer times, minimum notice, time zones — before you put
            the link in your email signature. The scheduler that never
            double-books you is the right one.
          </p>
        </div>
      </section>
    </main>
  );
}
