import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How we pick — WhichStackFits",
};

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

export default function HowWePick() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-ink">How we pick</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
        Four rules govern every review we publish.
      </p>
      <ol className="mt-10 max-w-2xl space-y-8">
        {rules.map((r, i) => (
          <li key={r.title} className="flex gap-4">
            <span className="text-2xl font-bold text-slate-300">{i + 1}</span>
            <div>
              <h2 className="font-semibold text-ink">{r.title}</h2>
              <p className="mt-1 leading-relaxed text-slate-600">{r.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
