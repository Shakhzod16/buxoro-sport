import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '"Prezident Olimpiadasi" Natijalari',
  description: "Prezident Olimpiadasi musobaqalari natijalari va medallar jadvali.",
  openGraph: {
    title: '"Prezident Olimpiadasi" Natijalari',
    images: ["https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1200&q=80"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
