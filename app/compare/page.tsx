import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compare — WhichStackFits",
};

export default function Compare() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-ink">Compare</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
        Side-by-side guides to the software that runs a small service business.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Link
          href="/compare/all-in-one"
          className="rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-ink"
        >
          <h2 className="text-lg font-semibold text-ink">
            All-in-one platforms
          </h2>
          <p className="mt-2 leading-relaxed text-slate-600">
            HoneyBook vs Dubsado vs 17hats vs Systeme.io — who each is
            actually for, and who should skip it.
          </p>
          <p className="mt-4 text-sm font-medium text-ink">Read the guide →</p>
        </Link>
        <div className="rounded-lg border border-dashed border-slate-300 p-6">
          <h2 className="text-lg font-semibold text-slate-400">
            CRM · Email &amp; automation · Scheduling
          </h2>
          <p className="mt-2 leading-relaxed text-slate-500">
            More comparison guides publish this week.
          </p>
        </div>
      </div>
    </main>
  );
}
