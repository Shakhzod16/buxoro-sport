import type { Metadata } from "next";

export const metadata: Metadata = { title: "Tashkiliy tuzilma" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
