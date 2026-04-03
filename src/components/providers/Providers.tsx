"use client";

import { ThemeProvider } from "next-themes";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { DocumentAttributes } from "@/components/providers/DocumentAttributes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <LocaleProvider>
        <DocumentAttributes />
        {children}
      </LocaleProvider>
    </ThemeProvider>
  );
}
