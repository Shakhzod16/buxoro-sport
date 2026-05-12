"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  { icon: "📊", label: "Dashboard", href: "/admin" },
  { icon: "📰", label: "Yangiliklar", href: "/admin/yangiliklar" },
  { icon: "📢", label: "E'lonlar", href: "/admin/elonlar" },
  { icon: "🏆", label: "Musobaqalar", href: "/admin/musobaqalar" },
  { icon: "🥇", label: "Sportchilar", href: "/admin/sportchilar" },
  { icon: "📄", label: "Hujjatlar", href: "/admin/hujjatlar" },
  { icon: "🛎️", label: "Xizmatlar", href: "/admin/xizmatlar" },
  { icon: "⚙️", label: "Sozlamalar", href: "/admin/sozlamalar" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (pathname === "/admin/login") return;
    const isLoggedIn = typeof window !== "undefined" ? localStorage.getItem("bxs_admin_auth") : null;
    if (!isLoggedIn) {
      router.replace("/admin/login");
    }
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem("bxs_admin_auth");
    router.push("/admin/login");
  };

  if (pathname === "/admin/login") return <>{children}</>;

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F5F7FA" }}>
      <aside
        style={{
          width: collapsed ? 64 : 240,
          background: "#0F2447",
          transition: "width 0.2s",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 100,
          overflow: "hidden",
        }}
      >
        <div style={{ padding: "20px 16px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div
            style={{
              color: "#fff",
              fontWeight: 800,
              fontSize: collapsed ? "1rem" : "0.875rem",
              whiteSpace: "nowrap",
            }}
          >
            {collapsed ? "🏟️" : "🏟️ BUXORO SPORT"}
          </div>
          {!collapsed && (
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", marginTop: 2 }}>Admin Panel</div>
          )}
        </div>

        <nav style={{ flex: 1, padding: "12px 0" }}>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "11px 16px",
                  textDecoration: "none",
                  background: isActive ? "rgba(255,255,255,0.15)" : "transparent",
                  borderLeft: isActive ? "3px solid #F4A419" : "3px solid transparent",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.7)",
                  fontSize: "0.875rem",
                  fontWeight: isActive ? 600 : 400,
                  transition: "all 0.15s",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{item.icon}</span>
                {!collapsed && item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          style={{
            padding: "16px",
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.5)",
            cursor: "pointer",
            fontSize: "1.2rem",
          }}
        >
          {collapsed ? "→" : "←"}
        </button>

        <button
          type="button"
          onClick={handleLogout}
          style={{
            padding: "16px",
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.8rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            background: "none",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "none",
            cursor: "pointer",
            textAlign: "left",
            width: "100%",
          }}
        >
          {collapsed ? "🚪" : "🚪 Chiqish"}
        </button>
      </aside>

      <div style={{ marginLeft: collapsed ? 64 : 240, flex: 1, transition: "margin-left 0.2s" }}>
        <header
          style={{
            background: "#fff",
            borderBottom: "1px solid #E2E8F0",
            padding: "14px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: 0,
            zIndex: 50,
          }}
        >
          <div style={{ fontWeight: 600, color: "#0F2447", fontSize: "1rem" }}>Buxoro Viloyati Sport Boshqarmasi — Admin</div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <span style={{ fontSize: "0.875rem", color: "#718096" }}>👤 Administrator</span>
            <Link
              href="/"
              target="_blank"
              style={{
                fontSize: "0.8rem",
                color: "#1A3C6B",
                textDecoration: "none",
                border: "1px solid #1A3C6B",
                padding: "4px 12px",
                borderRadius: 6,
              }}
            >
              🌐 Saytni ko&apos;rish
            </Link>
          </div>
        </header>

        <main style={{ padding: "24px" }}>{children}</main>
      </div>
    </div>
  );
}
