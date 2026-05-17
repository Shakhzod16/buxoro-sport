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
    description:
      "Buxoro viloyatida sport sohasini rivojlantirish va davlat xizmatlarini ko'rsatishga qaratilgan rasmiy portal.",
    url: "https://buxoro-sport.vercel.app",
    siteName: "Buxoro Sport",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Buxoro Viloyati Sport Boshqarmasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buxoro Viloyati Sport Boshqarmasi",
    description:
      "Buxoro viloyatida sport sohasini rivojlantirish va davlat xizmatlarini ko'rsatishga qaratilgan rasmiy portal.",
    images: ["https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&q=80"],
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
