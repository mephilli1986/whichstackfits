import Link from "next/link";

const categories: { name: string; description: string; href?: string }[] = [
  {
    name: "CRM",
    description:
      "Track leads, clients, and follow-ups without an enterprise sales pipeline you'll never use.",
    href: "/compare/crm",
  },
  {
    name: "Email & automation",
    description:
      "Newsletters, sequences, and the automations that actually save a small team time.",
  },
  {
    name: "Scheduling & booking",
    description:
      "Let clients book calls and appointments without the back-and-forth email thread.",
  },
  {
    name: "All-in-one platforms",
    description:
      "One tool for CRM, email, invoicing, and booking — when consolidating beats best-of-breed.",
    href: "/compare/all-in-one",
  },
];

const rules = [
  {
    title: "We verify pricing from the vendor page.",
    detail:
      "Every price we publish is checked against the vendor's own pricing page, not a stale roundup.",
  },
  {
    title: "We say who a tool is NOT for.",
    detail:
      "Every tool fails somebody. If it's wrong for your size or workflow, we say so plainly.",
  },
  {
    title: "We date every review.",
    detail:
      "You'll always see when a review was written and last checked, so you know it's current.",
  },
  {
    title: "We disclose affiliate relationships.",
    detail:
      "When a link pays us a commission, we tell you. It never changes the verdict.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Find the operations stack that fits a small service business.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          We compare CRM, email &amp; automation, scheduling, and all-in-one
          platforms for teams of 1–20 — with current pricing and a straight
          answer on who each tool is actually for.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link
            href="/compare/all-in-one"
            className="inline-block rounded-md bg-ink px-6 py-3 font-medium text-white transition-colors hover:bg-ink-dark"
          >
            Read the all-in-one guide
          </Link>
          <a href="#categories" className="font-medium text-ink hover:underline">
            Browse categories
          </a>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-5xl scroll-mt-8 px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight text-ink">Categories</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {categories.map((c) =>
            c.href ? (
              <Link
                key={c.name}
                href={c.href}
                className="rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-ink"
              >
                <h3 className="text-lg font-semibold text-ink">{c.name}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{c.description}</p>
                <p className="mt-4 text-sm font-medium text-ink">Read the guide →</p>
              </Link>
            ) : (
              <div key={c.name} className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-ink">{c.name}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{c.description}</p>
                <p className="mt-4 text-sm font-medium text-slate-400">
                  No guide published yet.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight text-ink">How we pick</h2>
        <ol className="mt-8 grid gap-8 sm:grid-cols-2">
          {rules.map((r, i) => (
            <li key={r.title} className="flex gap-4">
              <span className="text-2xl font-bold text-slate-300">{i + 1}</span>
              <div>
                <h3 className="font-semibold text-ink">{r.title}</h3>
                <p className="mt-1 leading-relaxed text-slate-600">{r.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight text-ink">
          Who it&rsquo;s for — and not for
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-ink">For</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              Owners and operators of 1–20 person service businesses: agencies,
              consultancies, coaches, and local professional firms choosing the
              software that runs their operations.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-ink">Not for</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              Enterprise buyers, ecommerce-only stores, or anyone looking for
              construction software, generic AI tool directories, or health,
              finance, or legal advice. That&rsquo;s not what we do.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
