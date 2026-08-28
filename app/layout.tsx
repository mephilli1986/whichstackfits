import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "WhichStackFits — Operations software for small service businesses",
  description:
    "We compare CRM, email & automation, scheduling, and all-in-one platforms for 1–20 person service businesses — with current pricing and who each tool is actually for.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-paper text-slate-900 antialiased">
        <header className="border-b border-slate-200">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 py-5">
            <Link href="/" className="text-lg font-bold tracking-tight text-ink">
              WhichStackFits
            </Link>
            <nav className="flex gap-5 text-sm font-medium text-slate-600 sm:gap-6">
              <Link href="/compare" className="whitespace-nowrap hover:text-ink">Compare</Link>
              <Link href="/how-we-pick" className="whitespace-nowrap hover:text-ink">How we pick</Link>
              <Link href="/about" className="whitespace-nowrap hover:text-ink">About</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-slate-200">
          <div className="mx-auto max-w-5xl space-y-3 px-6 py-10 text-sm text-slate-500">
            <p className="font-medium text-slate-700">WhichStackFits · Scottsdale, AZ</p>
            <p className="max-w-2xl">
              Affiliate disclosure: Some links will be affiliate links. We may earn a
              commission if you buy through them. It does not change the review.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
