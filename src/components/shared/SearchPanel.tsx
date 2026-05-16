"use client";

import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { useData } from "@/context/DataContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchPanel({ isOpen, onClose }: Props) {
  const router = useRouter();
  const { news, competitions, documents } = useData();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      /* eslint-disable react-hooks/set-state-in-effect -- reset query when overlay closes */
      setQuery("");
      /* eslint-enable react-hooks/set-state-in-effect */
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const q = query.toLowerCase().trim();

  const newsResults =
    q.length >= 2
      ? news
          .filter(
            (n) =>
              n.status === "active" &&
              (n.title.toLowerCase().includes(q) || n.category.toLowerCase().includes(q)),
          )
          .slice(0, 4)
      : [];

  const compResults =
    q.length >= 2
      ? competitions
          .filter(
            (c) =>
              c.title.toLowerCase().includes(q) ||
              c.sport.toLowerCase().includes(q) ||
              c.location.toLowerCase().includes(q),
          )
          .slice(0, 3)
      : [];

  const docResults =
    q.length >= 2
      ? documents
          .filter((d) => d.title.toLowerCase().includes(q) || d.category.toLowerCase().includes(q))
          .slice(0, 3)
      : [];

  const totalResults = newsResults.length + compResults.length + docResults.length;

  const navigateToFullSearch = () => {
    const t = query.trim();
    if (!t) return;
    router.push(`/qidiruv?q=${encodeURIComponent(t)}`);
    onClose();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigateToFullSearch();
  };

  const handleResultClick = (href: string) => {
    router.push(href);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 998,
        }}
      />

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "#fff",
          zIndex: 999,
          boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
          padding: "20px 0",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  border: "2px solid #1A3C6B",
                  borderRadius: "10px",
                  padding: "10px 16px",
                }}
              >
                <span style={{ fontSize: "1.2rem", color: "#1A3C6B" }}>🔍</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Qidiruv: yangiliklar, musobaqalar, hujjatlar..."
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    fontSize: "1rem",
                    color: "#2D3748",
                    background: "transparent",
                  }}
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#718096",
                      fontSize: "1.1rem",
                      padding: "0",
                    }}
                  >
                    ✕
                  </button>
                ) : null}
              </div>
              <button
                type="submit"
                style={{
                  background: "#1A3C6B",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  padding: "12px 20px",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  whiteSpace: "nowrap",
                }}
              >
                Qidirish
              </button>
              <button
                type="button"
                onClick={onClose}
                style={{
                  background: "#F7FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: "10px",
                  padding: "12px 16px",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  color: "#718096",
                }}
              >
                Yopish
              </button>
            </div>
          </form>

          {!q ? (
            <div>
              <p style={{ fontSize: "0.8rem", color: "#718096", marginBottom: "12px", fontWeight: 600 }}>TEZKOR HAVOLALAR</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {[
                  { label: "Musobaqalar", href: "/faoliyat/musobaqalar" },
                  { label: "Yangiliklar", href: "/axborot" },
                  { label: "Hujjatlar", href: "/hujjatlar" },
                  { label: "Sportchilar", href: "/faoliyat/sportchilar" },
                  { label: "Davlat xizmatlari", href: "/davlat-xizmatlari" },
                  { label: "Bog'lanish", href: "/boglanish" },
                ].map((link, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleResultClick(link.href)}
                    style={{
                      background: "#EEF3FA",
                      color: "#1A3C6B",
                      border: "none",
                      borderRadius: "20px",
                      padding: "6px 16px",
                      cursor: "pointer",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                    }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {q.length >= 2 ? (
            <div>
              {totalResults === 0 ? (
                <div style={{ textAlign: "center", padding: "32px", color: "#718096" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>🔍</div>
                  <p style={{ fontWeight: 600, color: "#2D3748" }}>
                    {`"${query}"`} bo&apos;yicha natija topilmadi
                  </p>
                  <p style={{ fontSize: "0.875rem" }}>Boshqa kalit so&apos;z bilan urinib ko&apos;ring</p>
                </div>
              ) : (
                <p style={{ fontSize: "0.8rem", color: "#718096", marginBottom: "16px", fontWeight: 600 }}>
                  {`"${query}"`} — {totalResults} ta natija topildi
                </p>
              )}

              {newsResults.length > 0 ? (
                <div style={{ marginBottom: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1A3C6B", letterSpacing: "0.08em" }}>
                      📰 YANGILIKLAR
                    </span>
                    <div style={{ flex: 1, height: "1px", background: "#E2E8F0" }} />
                  </div>
                  {newsResults.map((item, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleResultClick(`/axborot/${item.id}`)}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        width: "100%",
                        padding: "10px 12px",
                        marginBottom: "6px",
                        background: "#F8FAFF",
                        border: "1px solid #E2E8F0",
                        borderRadius: "8px",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#EEF3FA";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#F8FAFF";
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "6px",
                          flexShrink: 0,
                          background: "#1A3C6B",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: "1rem",
                        }}
                      >
                        📰
                      </div>
                      <div>
                        <p style={{ margin: 0, fontSize: "0.875rem", fontWeight: 600, color: "#1A3C6B" }}>{item.title}</p>
                        <p style={{ margin: "3px 0 0", fontSize: "0.75rem", color: "#718096" }}>
                          {item.category} • {item.date}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              ) : null}

              {compResults.length > 0 ? (
                <div style={{ marginBottom: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1A3C6B", letterSpacing: "0.08em" }}>
                      🏆 MUSOBAQALAR
                    </span>
                    <div style={{ flex: 1, height: "1px", background: "#E2E8F0" }} />
                  </div>
                  {compResults.map((item, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleResultClick("/faoliyat/musobaqalar")}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        width: "100%",
                        padding: "10px 12px",
                        marginBottom: "6px",
                        background: "#F8FAFF",
                        border: "1px solid #E2E8F0",
                        borderRadius: "8px",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#EEF3FA";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#F8FAFF";
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "6px",
                          flexShrink: 0,
                          background: "#F4A419",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1rem",
                        }}
                      >
                        🏆
                      </div>
                      <div>
                        <p style={{ margin: 0, fontSize: "0.875rem", fontWeight: 600, color: "#1A3C6B" }}>{item.title}</p>
                        <p style={{ margin: "3px 0 0", fontSize: "0.75rem", color: "#718096" }}>
                          {item.sport} • {item.date} • {item.location}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              ) : null}

              {docResults.length > 0 ? (
                <div style={{ marginBottom: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1A3C6B", letterSpacing: "0.08em" }}>
                      📄 HUJJATLAR
                    </span>
                    <div style={{ flex: 1, height: "1px", background: "#E2E8F0" }} />
                  </div>
                  {docResults.map((item, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleResultClick("/hujjatlar")}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        width: "100%",
                        padding: "10px 12px",
                        marginBottom: "6px",
                        background: "#F8FAFF",
                        border: "1px solid #E2E8F0",
                        borderRadius: "8px",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#EEF3FA";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#F8FAFF";
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "6px",
                          flexShrink: 0,
                          background: "#8B5CF6",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1rem",
                        }}
                      >
                        📄
                      </div>
                      <div>
                        <p style={{ margin: 0, fontSize: "0.875rem", fontWeight: 600, color: "#1A3C6B" }}>{item.title}</p>
                        <p style={{ margin: "3px 0 0", fontSize: "0.75rem", color: "#718096" }}>
                          {item.category} • {item.date}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              ) : null}

              {totalResults > 0 ? (
                <button
                  type="button"
                  onClick={navigateToFullSearch}
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "#1A3C6B",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
                >
                  {`"${query}"`} bo&apos;yicha barcha natijalarni ko&apos;rish →
                </button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
