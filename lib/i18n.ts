export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

export const dictionary: Record<
  Locale,
  {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    visualPlaceholder: string;
  }
> = {
  en: {
    headline: "Rebuild Meaning Through Revealed Wisdom",
    subheadline:
      "For hearts burdened by confusion, anxiety, and fragmented modern narratives, begin a clearer path rooted in truth.",
    primaryCta: "Start Learning",
    secondaryCta: "Explore Curriculum",
    visualPlaceholder: "Visual Learning Component Placeholder",
  },
  ar: {
    headline: "أعد بناء المعنى على هدي الوحي",
    subheadline:
      "لمن أثقلتهم الحيرة والقلق وتشتت السرديات الحديثة، ابدأ مسارًا أوضح راسخًا في الحقيقة.",
    primaryCta: "ابدأ التعلّم",
    secondaryCta: "استكشف المنهج",
    visualPlaceholder: "Visual Learning Component Placeholder",
  },
};
