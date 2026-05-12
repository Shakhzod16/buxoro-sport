import type { ReactNode } from "react";

interface PageLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
}

export default function PageLayout({ sidebar, children }: PageLayoutProps) {
  return (
    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "32px 24px",
        display: "grid",
        gridTemplateColumns: "260px 1fr",
        gap: "32px",
        alignItems: "start",
      }}
    >
      <aside
        style={{
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          position: "sticky",
          top: "90px",
        }}
      >
        {sidebar}
      </aside>
      <main style={{ minWidth: 0 }}>{children}</main>
    </div>
  );
}
