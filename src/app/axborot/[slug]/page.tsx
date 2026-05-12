"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import PageHero from "@/components/sections/PageHero";
import { useData } from "@/context/DataContext";

export default function AxborotSlugPage() {
  const params = useParams();
  const raw = params?.slug;
  const slug = Array.isArray(raw) ? raw[0] : raw;
  const { news } = useData();

  const article = useMemo(() => {
    if (!slug) return undefined;
    const id = Number(slug);
    if (Number.isNaN(id)) return undefined;
    return news.find((n) => n.id === id);
  }, [news, slug]);

  const related = useMemo(() => {
    if (!article) return [];
    return news.filter((n) => n.id !== article.id && n.status === "active").slice(0, 3);
  }, [article, news]);

  const fallbackImage = "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80";

  if (!article) {
    return (
      <>
        <PageHero title="Yangilik topilmadi" subtitle="Sahifa mavjud emas yoki o‘chirilgan" />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px" }}>
          <Link href="/axborot" style={{ color: "#1A3C6B", fontWeight: 700, textDecoration: "none" }}>
            ← Orqaga
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHero title={article.title} subtitle={`${article.category} · ${article.date}`} />
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "32px 24px 48px" }}>
        <Link href="/axborot" style={{ display: "inline-block", marginBottom: "20px", color: "#1A3C6B", fontWeight: 700, textDecoration: "none" }}>
          ← Orqaga
        </Link>
        <article style={{ background: "#fff", borderRadius: "12px", padding: "28px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "600px",
              margin: "0 auto 24px",
              aspectRatio: "4 / 3",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <Image
              src={article.image || fallbackImage}
              alt=""
              fill
              sizes="(max-width: 800px) 100vw, 600px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{ display: "flex", gap: "12px", marginBottom: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <span
              style={{
                background: "#EEF3FA",
                color: "#1A3C6B",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "4px 10px",
                borderRadius: "20px",
              }}
            >
              {article.category}
            </span>
            <span style={{ fontSize: "0.85rem", color: "#94A3B8" }}>{article.date}</span>
            <span style={{ fontSize: "0.85rem", color: "#94A3B8" }}>👁 {article.views} ko‘rish</span>
          </div>
          <div style={{ fontSize: "1rem", lineHeight: 1.85, color: "#334155", whiteSpace: "pre-wrap" }}>{article.content}</div>
        </article>

        {related.length > 0 && (
          <div style={{ marginTop: "40px" }}>
            <h3 style={{ margin: "0 0 16px", fontSize: "1.1rem", fontWeight: 800, color: "#0F2447" }}>Boshqa yangiliklar</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
              {related.map((r) => (
                <a
                  key={r.id}
                  href={`/axborot/${r.id}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    background: "#fff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                    border: "1px solid #E8ECF2",
                  }}
                >
                  <div style={{ position: "relative", width: "100%", height: "120px" }}>
                    <Image src={r.image || fallbackImage} alt="" fill sizes="(max-width: 900px) 33vw, 300px" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "12px", fontWeight: 700, fontSize: "0.85rem", color: "#0F2447", lineHeight: 1.35 }}>{r.title}</div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
