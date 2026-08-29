"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full border border-primary/30 px-3 py-1 text-sm text-foreground transition hover:bg-primary/10"
      aria-label="Toggle dark mode"
    >
      Toggle theme
    </button>
  );
}
