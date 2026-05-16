import type { ReactNode } from "react";

interface PageLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
}

export default function PageLayout({ sidebar, children }: PageLayoutProps) {
  return (
    <div className="page-layout-wrap">
      <aside
        className="page-sidebar"
        style={{
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        {sidebar}
      </aside>
      <main style={{ minWidth: 0 }}>{children}</main>
    </div>
  );
}
