import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { inter } from "@/data/constants/fonts";
import { ToggleButton } from "@/components/toggle-theme";

export const metadata: Metadata = {
  title: "Balick's portfolio",
  description:
    "A simple and beautiful portfolio to present Théo Balick's work and career.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased overflow-x-hidden bg-[#f8f8f8] dark:bg-cool-black relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ToggleButton />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
