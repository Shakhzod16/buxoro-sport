import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bog'lanish",
};

export default function BoglanishLayout({ children }: { children: React.ReactNode }) {
  return children;
}
