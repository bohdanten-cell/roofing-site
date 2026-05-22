import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "RoofMaster — Покрівельні роботи в Києві | Монтаж та ремонт",
  description:
    "Професійний монтаж та ремонт покрівлі в Києві. М'яка покрівля, металочерепиця, плоска покрівля, профнастил. Гарантія 5 років. Безкоштовна оцінка.",
  keywords:
    "покрівля Київ, монтаж покрівлі, ремонт дах, металочерепиця, м'яка покрівля, плоска покрівля",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${manrope.variable} h-full`}>
      <body className="min-h-full bg-white text-zinc-900 font-sans">
        {children}
      </body>
    </html>
  );
}
