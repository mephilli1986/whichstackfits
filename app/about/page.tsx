import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — WhichStackFits",
};

export default function About() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-ink">About</h1>
      <div className="mt-4 max-w-2xl space-y-4 text-lg leading-relaxed text-slate-600">
        <p>
          WhichStackFits helps owners and operators of 1–20 person service
          businesses — agencies, consultancies, coaches, and local professional
          firms — choose their operations stack: CRM, email &amp; automation,
          scheduling &amp; booking, and all-in-one platforms.
        </p>
        <p>
          We verify pricing from vendor pages, say who each tool is not for,
          date every review, and disclose affiliate relationships.
        </p>
        <p>Based in Scottsdale, AZ.</p>
      </div>
    </main>
  );
}
