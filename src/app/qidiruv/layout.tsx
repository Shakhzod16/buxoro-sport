import type { Metadata } from "next";

export const metadata: Metadata = { title: "Qidiruv" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
