import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O'zbekiston Respublikasi Sport Portali",
  description:
    "O'zbekiston Respublikasi sport portali — barcha viloyatlar sport boshqarmalari ma'lumotlari.",
  openGraph: {
    title: "O'zbekiston Respublikasi Sport Portali",
    images: ["https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&q=80"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
