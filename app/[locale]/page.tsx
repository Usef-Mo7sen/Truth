import { notFound } from "next/navigation";
import { dictionary, isLocale } from "@/lib/i18n";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = dictionary[locale];

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{content.headline}</h1>
        <p className="text-lg text-foreground/80">{content.subheadline}</p>
        <div className="flex flex-wrap gap-4">
          <button className="rounded-full bg-primary px-6 py-3 font-medium text-white transition hover:opacity-90">
            {content.primaryCta}
          </button>
          <button className="rounded-full border border-primary px-6 py-3 font-medium text-primary transition hover:bg-primary/10">
            {content.secondaryCta}
          </button>
        </div>
      </div>

      <div className="min-h-56 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-6">
        <h2 className="text-base font-semibold text-primary">{content.visualPlaceholder}</h2>
      </div>
    </section>
  );
}
