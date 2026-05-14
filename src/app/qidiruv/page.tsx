"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import PageHero from "@/components/sections/PageHero";
import { useData } from "@/context/DataContext";

function QidiruvContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const { news, competitions, documents, athletes } = useData();

  const query = q.toLowerCase().trim();

  const newsResults = query
    ? news.filter(
        (n) =>
          n.status === "active" &&
          (n.title.toLowerCase().includes(query) ||
            n.category.toLowerCase().includes(query) ||
            n.content.toLowerCase().includes(query)),
      )
    : [];

  const compResults = query
    ? competitions.filter(
        (c) =>
          c.title.toLowerCase().includes(query) ||
          c.sport.toLowerCase().includes(query) ||
          c.location.toLowerCase().includes(query),
      )
    : [];

  const docResults = query
    ? documents.filter((d) => d.title.toLowerCase().includes(query) || d.category.toLowerCase().includes(query))
    : [];

  const athleteResults = query
    ? athletes.filter((a) => a.name.toLowerCase().includes(query) || a.sport.toLowerCase().includes(query))
    : [];

  const total = newsResults.length + compResults.length + docResults.length + athleteResults.length;

  const sectionStyle = { marginBottom: "32px" };
  const sectionTitle = {
    fontSize: "0.85rem",
    fontWeight: 700 as const,
    color: "#1A3C6B",
    letterSpacing: "0.08em",
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };
  const divider = { flex: 1, height: "1px", background: "#E2E8F0" };
  const card = {
    display: "flex",
    gap: "12px",
    padding: "14px 16px",
    background: "#fff",
    border: "1px solid #E2E8F0",
    borderRadius: "10px",
    marginBottom: "8px",
    textDecoration: "none",
    color: "inherit",
  };
  const iconBox = (bg: string) => ({
    width: "44px",
    height: "44px",
    borderRadius: "8px",
    flexShrink: 0,
    background: bg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
  });

  return (
    <div>
      <PageHero
        title={q ? `"${q}" bo'yicha qidiruv` : "Qidiruv"}
        subtitle={q ? `${total} ta natija topildi` : "Qidirish uchun kalit so'z kiriting"}
        breadcrumb={[{ label: "Qidiruv", href: "/qidiruv" }]}
      />

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "32px 24px" }}>
        <form action="/qidiruv" method="get" style={{ marginBottom: "32px" }}>
          <div
            style={{
              display: "flex",
              gap: "12px",
              border: "2px solid #1A3C6B",
              borderRadius: "10px",
              padding: "10px 16px",
              background: "#fff",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>🔍</span>
            <input
              name="q"
              defaultValue={q}
              placeholder="Qidiruv..."
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "1rem",
                color: "#2D3748",
              }}
            />
            <button
              type="submit"
              style={{
                background: "#1A3C6B",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                padding: "6px 20px",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              Qidirish
            </button>
          </div>
        </form>

        {!q ? (
          <div style={{ textAlign: "center", padding: "48px", color: "#718096" }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🔍</div>
            <p>Qidirish uchun yuqoridagi maydonga kalit so&apos;z kiriting</p>
          </div>
        ) : null}

        {q && total === 0 ? (
          <div style={{ textAlign: "center", padding: "48px", color: "#718096" }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>😕</div>
            <p style={{ fontWeight: 600, color: "#2D3748", fontSize: "1.1rem" }}>
              {`"${q}"`} bo&apos;yicha hech narsa topilmadi
            </p>
            <p style={{ marginTop: "8px" }}>Boshqa kalit so&apos;z bilan urinib ko&apos;ring</p>
          </div>
        ) : null}

        {newsResults.length > 0 ? (
          <div style={sectionStyle}>
            <div style={sectionTitle}>
              <span>📰 YANGILIKLAR ({newsResults.length})</span>
              <div style={divider} />
            </div>
            {newsResults.map((item) => (
              <a key={item.id} href={`/axborot/${item.id}`} style={card}>
                <div style={iconBox("#1A3C6B")}>📰</div>
                <div>
                  <p style={{ margin: 0, fontWeight: 600, color: "#1A3C6B" }}>{item.title}</p>
                  <p style={{ margin: "4px 0 0", fontSize: "0.8rem", color: "#718096" }}>
                    {item.category} • {item.date} • 👁 {item.views}
                  </p>
                </div>
              </a>
            ))}
          </div>
        ) : null}

        {compResults.length > 0 ? (
          <div style={sectionStyle}>
            <div style={sectionTitle}>
              <span>🏆 MUSOBAQALAR ({compResults.length})</span>
              <div style={divider} />
            </div>
            {compResults.map((item) => (
              <a key={item.id} href="/faoliyat/musobaqalar" style={card}>
                <div style={iconBox("#F4A419")}>🏆</div>
                <div>
                  <p style={{ margin: 0, fontWeight: 600, color: "#1A3C6B" }}>{item.title}</p>
                  <p style={{ margin: "4px 0 0", fontSize: "0.8rem", color: "#718096" }}>
                    {item.sport} • {item.date} • 📍 {item.location}
                  </p>
                </div>
              </a>
            ))}
          </div>
        ) : null}

        {docResults.length > 0 ? (
          <div style={sectionStyle}>
            <div style={sectionTitle}>
              <span>📄 HUJJATLAR ({docResults.length})</span>
              <div style={divider} />
            </div>
            {docResults.map((item) => (
              <a key={item.id} href="/hujjatlar" style={card}>
                <div style={iconBox("#8B5CF6")}>📄</div>
                <div>
                  <p style={{ margin: 0, fontWeight: 600, color: "#1A3C6B" }}>{item.title}</p>
                  <p style={{ margin: "4px 0 0", fontSize: "0.8rem", color: "#718096" }}>
                    {item.category} • {item.date}
                  </p>
                </div>
              </a>
            ))}
          </div>
        ) : null}

        {athleteResults.length > 0 ? (
          <div style={sectionStyle}>
            <div style={sectionTitle}>
              <span>🥇 SPORTCHILAR ({athleteResults.length})</span>
              <div style={divider} />
            </div>
            {athleteResults.map((item) => (
              <a key={item.id} href="/faoliyat/sportchilar" style={card}>
                <div style={iconBox("#10B981")}>🥇</div>
                <div>
                  <p style={{ margin: 0, fontWeight: 600, color: "#1A3C6B" }}>{item.name}</p>
                  <p style={{ margin: "4px 0 0", fontSize: "0.8rem", color: "#718096" }}>
                    {item.sport} • {item.medal} medal • {item.year}
                  </p>
                </div>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function QidiruvPage() {
  return (
    <Suspense
      fallback={
        <div style={{ textAlign: "center", padding: "80px", color: "#718096" }}>Yuklanmoqda...</div>
      }
    >
      <QidiruvContent />
    </Suspense>
  );
}
