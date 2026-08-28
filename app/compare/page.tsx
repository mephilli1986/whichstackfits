import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare — WhichStackFits",
};

export default function Compare() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-ink">Compare</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
        First comparison guides publish this week.
      </p>
    </main>
  );
}
