"use client";

import { useData } from "@/context/DataContext";

export default function AdminDashboard() {
  const { news, competitions, athletes, documents } = useData();

  const stats = [
    { icon: "📰", label: "Yangiliklar", value: news.length, color: "#2563EB" },
    { icon: "🏆", label: "Musobaqalar", value: competitions.length, color: "#F4A419" },
    { icon: "🥇", label: "Sportchilar", value: athletes.length, color: "#10B981" },
    { icon: "📄", label: "Hujjatlar", value: documents.length, color: "#8B5CF6" },
  ];

  const recentNews = news.slice(0, 5);

  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0F2447", marginBottom: 24 }}>Dashboard</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: "20px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              borderTop: `4px solid ${s.color}`,
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: 8 }}>{s.icon}</div>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: "0.875rem", color: "#718096" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ background: "#fff", borderRadius: 12, padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#0F2447", margin: 0 }}>So&apos;nggi yangiliklar</h2>
          <a href="/admin/yangiliklar" style={{ fontSize: "0.875rem", color: "#1A3C6B" }}>
            Barchasi →
          </a>
        </div>
        {recentNews.length === 0 ? (
          <p style={{ margin: 0, color: "#718096" }}>Yangiliklar yo&apos;q.</p>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #E2E8F0" }}>
                {["Sarlavha", "Sana", "Holat", "Amal"].map((h) => (
                  <th key={h} style={{ textAlign: "left", padding: "8px", fontSize: "0.8rem", color: "#718096", fontWeight: 600 }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentNews.map((n) => (
                <tr key={n.id} style={{ borderBottom: "1px solid #F7FAFC" }}>
                  <td style={{ padding: "12px 8px", fontSize: "0.875rem", color: "#2D3748" }}>{n.title}</td>
                  <td style={{ padding: "12px 8px", fontSize: "0.8rem", color: "#718096" }}>{n.date}</td>
                  <td style={{ padding: "12px 8px" }}>
                    <span
                      style={{
                        background: n.status === "active" ? "#D1FAE5" : "#FEF3C7",
                        color: n.status === "active" ? "#065F46" : "#92400E",
                        fontSize: "0.75rem",
                        padding: "2px 10px",
                        borderRadius: 20,
                      }}
                    >
                      {n.status === "active" ? "Chop etilgan" : "Qoralama"}
                    </span>
                  </td>
                  <td style={{ padding: "12px 8px" }}>
                    <a
                      href="/admin/yangiliklar"
                      style={{
                        fontSize: "0.8rem",
                        color: "#1A3C6B",
                        textDecoration: "none",
                        border: "1px solid #1A3C6B",
                        padding: "3px 10px",
                        borderRadius: 6,
                        display: "inline-block",
                      }}
                    >
                      Tahrirlash
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
