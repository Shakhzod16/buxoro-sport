import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import AppShell from "@/components/layout/AppShell";
import { DataProvider } from "@/context/DataContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Buxoro Viloyati Sport Boshqarmasi",
    template: "%s | Buxoro Sport",
  },
  description:
    "Buxoro viloyatida sport sohasini rivojlantirish va davlat xizmatlarini ko'rsatishga qaratilgan rasmiy portal.",
  keywords: ["Buxoro", "sport", "boshqarma", "musobaqa", "sportchilar"],
  openGraph: {
    title: "Buxoro Viloyati Sport Boshqarmasi",
    description: "Rasmiy sport portali",
    locale: "uz_UZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <DataProvider>
          <AppShell>{children}</AppShell>
        </DataProvider>
      </body>
    </html>
  );
}
