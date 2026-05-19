"use client";

import { useMemo, useState } from "react";

import type { AthleteResult } from "@/types/models";
import { useData } from "@/context/DataContext";

const medalData = [
  { rank: 1, name: "Toshkent shahar", gold: 26, silver: 14, bronze: 8, total: 48 },
  { rank: 2, name: "Toshkent viloyati", gold: 18, silver: 8, bronze: 30, total: 56 },
  { rank: 3, name: "Xorazm viloyati", gold: 16, silver: 12, bronze: 23, total: 51 },
  { rank: 4, name: "Buxoro viloyati", gold: 9, silver: 13, bronze: 25, total: 47 },
  { rank: 5, name: "Namangan viloyati", gold: 8, silver: 17, bronze: 16, total: 41 },
  { rank: 6, name: "Farg'ona viloyati", gold: 8, silver: 6, bronze: 23, total: 37 },
  { rank: 7, name: "Samarqand viloyati", gold: 8, silver: 6, bronze: 17, total: 31 },
  { rank: 8, name: "Sirdaryo viloyati", gold: 7, silver: 7, bronze: 8, total: 22 },
  { rank: 9, name: "Andijon viloyati", gold: 7, silver: 6, bronze: 18, total: 31 },
  { rank: 10, name: "Qashqadaryo viloyati", gold: 7, silver: 6, bronze: 14, total: 27 },
  { rank: 11, name: "Jizzax viloyati", gold: 6, silver: 11, bronze: 11, total: 28 },
  { rank: 12, name: "Navoiy viloyati", gold: 6, silver: 9, bronze: 8, total: 23 },
  { rank: 13, name: "Surxondaryo viloyati", gold: 6, silver: 6, bronze: 11, total: 23 },
  { rank: 14, name: "Qoraqalpog'iston Respublikasi", gold: 4, silver: 13, bronze: 15, total: 32 },
];

const schedule = [
  { sport: "Boks", icon: "🥊", days: [0,0,1,1,1,1,1,1,1,0,0,0,0] },
  { sport: "Erkin kurash", icon: "🤼", days: [0,1,1,1,0,0,0,0,0,0,0,0,0] },
  { sport: "Yunon-rum kurashi", icon: "🤼", days: [0,0,0,0,1,1,0,0,0,0,0,0,0] },
  { sport: "Taekwondo WFT", icon: "🥋", days: [0,0,0,0,0,0,0,1,1,0,0,0,0] },
  { sport: "Dzyudo", icon: "🥋", days: [0,0,0,0,0,0,0,0,0,1,1,1,0] },
  { sport: "Yengil atletika", icon: "🏃", days: [0,0,0,0,1,1,0,0,0,0,0,0,0] },
  { sport: "FIBA 3X3 basketbol", icon: "🏀", days: [0,0,0,0,0,0,0,1,1,1,0,0,0] },
  { sport: "Stol tennisi", icon: "🏓", days: [0,0,0,0,0,0,0,0,0,1,1,0,0] },
  { sport: "Og'ir atletika", icon: "🏋️", days: [0,1,1,1,1,1,1,0,0,0,0,0,0] },
  { sport: "Badiiy gimnastika", icon: "🤸", days: [0,1,0,0,0,0,0,0,0,0,0,0,0] },
];

const dateHeaders = [
  { date: "23", month: "NOV", day: "YAK" },
  { date: "24", month: "NOV", day: "DU" },
  { date: "25", month: "NOV", day: "SE" },
  { date: "26", month: "NOV", day: "CHOR" },
  { date: "27", month: "NOV", day: "PAY" },
  { date: "28", month: "NOV", day: "JU" },
  { date: "29", month: "NOV", day: "SHAN" },
  { date: "30", month: "NOV", day: "YAK" },
  { date: "1", month: "DEK", day: "DU" },
  { date: "2", month: "DEK", day: "SE" },
  { date: "3", month: "DEK", day: "CHOR" },
  { date: "4", month: "DEK", day: "PAY" },
  { date: "5", month: "DEK", day: "JU" },
];

const sportData = [
  {
    rank: 1, sport: "Boks", gold: 26, silver: 26, bronze: 52, total: 104,
    regions: [
      { name: "Toshkent viloyati", gold: 5, silver: 2, bronze: 6, total: 13 },
      { name: "Namangan viloyati", gold: 4, silver: 6, bronze: 1, total: 11 },
      { name: "Toshkent shahar", gold: 3, silver: 2, bronze: 0, total: 5 },
      { name: "Farg'ona viloyati", gold: 3, silver: 1, bronze: 8, total: 12 },
      { name: "Jizzax viloyati", gold: 2, silver: 3, bronze: 4, total: 9 },
      { name: "Samarqand viloyati", gold: 2, silver: 2, bronze: 5, total: 9 },
      { name: "Xorazm viloyati", gold: 2, silver: 1, bronze: 5, total: 8 },
      { name: "Buxoro viloyati", gold: 1, silver: 2, bronze: 7, total: 10 },
      { name: "Qoraqalpog'iston Respublikasi", gold: 1, silver: 2, bronze: 4, total: 7 },
      { name: "Qashqadaryo viloyati", gold: 1, silver: 2, bronze: 2, total: 5 },
      { name: "Andijon viloyati", gold: 1, silver: 1, bronze: 8, total: 10 },
      { name: "Surxondaryo viloyati", gold: 1, silver: 0, bronze: 1, total: 2 },
      { name: "Sirdaryo viloyati", gold: 0, silver: 1, bronze: 1, total: 2 },
      { name: "Navoiy viloyati", gold: 0, silver: 1, bronze: 0, total: 1 },
    ],
  },
  {
    rank: 2, sport: "Taekwondo WFT", gold: 20, silver: 20, bronze: 40, total: 80,
    regions: [
      { name: "Toshkent shahar", gold: 5, silver: 5, bronze: 10, total: 20 },
      { name: "Toshkent viloyati", gold: 4, silver: 4, bronze: 8, total: 16 },
      { name: "Buxoro viloyati", gold: 3, silver: 3, bronze: 6, total: 12 },
      { name: "Samarqand viloyati", gold: 3, silver: 3, bronze: 6, total: 12 },
      { name: "Namangan viloyati", gold: 2, silver: 2, bronze: 5, total: 9 },
      { name: "Farg'ona viloyati", gold: 2, silver: 2, bronze: 4, total: 8 },
      { name: "Xorazm viloyati", gold: 1, silver: 1, bronze: 4, total: 6 },
      { name: "Andijon viloyati", gold: 0, silver: 0, bronze: 3, total: 3 },
    ],
  },
  {
    rank: 3, sport: "Erkin kurash", gold: 20, silver: 20, bronze: 40, total: 80,
    regions: [
      { name: "Buxoro viloyati", gold: 4, silver: 4, bronze: 8, total: 16 },
      { name: "Toshkent viloyati", gold: 4, silver: 3, bronze: 7, total: 14 },
      { name: "Qoraqalpog'iston Respublikasi", gold: 3, silver: 4, bronze: 6, total: 13 },
      { name: "Xorazm viloyati", gold: 3, silver: 3, bronze: 5, total: 11 },
      { name: "Namangan viloyati", gold: 2, silver: 2, bronze: 5, total: 9 },
      { name: "Qashqadaryo viloyati", gold: 2, silver: 2, bronze: 5, total: 9 },
      { name: "Samarqand viloyati", gold: 1, silver: 1, bronze: 4, total: 6 },
      { name: "Andijon viloyati", gold: 1, silver: 1, bronze: 0, total: 2 },
    ],
  },
  {
    rank: 4, sport: "Og'ir atletika", gold: 20, silver: 20, bronze: 20, total: 60,
    regions: [
      { name: "Toshkent shahar", gold: 6, silver: 5, bronze: 5, total: 16 },
      { name: "Buxoro viloyati", gold: 4, silver: 4, bronze: 4, total: 12 },
      { name: "Xorazm viloyati", gold: 4, silver: 4, bronze: 4, total: 12 },
      { name: "Toshkent viloyati", gold: 3, silver: 3, bronze: 3, total: 9 },
      { name: "Namangan viloyati", gold: 2, silver: 2, bronze: 2, total: 6 },
      { name: "Farg'ona viloyati", gold: 1, silver: 2, bronze: 2, total: 5 },
    ],
  },
  {
    rank: 5, sport: "Yengil atletika", gold: 19, silver: 17, bronze: 18, total: 54,
    regions: [
      { name: "Toshkent shahar", gold: 5, silver: 4, bronze: 5, total: 14 },
      { name: "Toshkent viloyati", gold: 4, silver: 4, bronze: 4, total: 12 },
      { name: "Buxoro viloyati", gold: 3, silver: 3, bronze: 3, total: 9 },
      { name: "Samarqand viloyati", gold: 3, silver: 2, bronze: 2, total: 7 },
      { name: "Namangan viloyati", gold: 2, silver: 2, bronze: 2, total: 6 },
      { name: "Andijon viloyati", gold: 2, silver: 2, bronze: 2, total: 6 },
    ],
  },
  {
    rank: 6, sport: "Dzyudo", gold: 16, silver: 16, bronze: 32, total: 64,
    regions: [
      { name: "Toshkent shahar", gold: 4, silver: 4, bronze: 8, total: 16 },
      { name: "Buxoro viloyati", gold: 3, silver: 3, bronze: 6, total: 12 },
      { name: "Qoraqalpog'iston Respublikasi", gold: 3, silver: 3, bronze: 6, total: 12 },
      { name: "Toshkent viloyati", gold: 3, silver: 3, bronze: 6, total: 12 },
      { name: "Xorazm viloyati", gold: 2, silver: 2, bronze: 4, total: 8 },
      { name: "Farg'ona viloyati", gold: 1, silver: 1, bronze: 2, total: 4 },
    ],
  },
  {
    rank: 7, sport: "Yunon-rum kurashi", gold: 10, silver: 10, bronze: 20, total: 40,
    regions: [
      { name: "Toshkent viloyati", gold: 3, silver: 3, bronze: 6, total: 12 },
      { name: "Buxoro viloyati", gold: 2, silver: 2, bronze: 4, total: 8 },
      { name: "Xorazm viloyati", gold: 2, silver: 2, bronze: 4, total: 8 },
      { name: "Namangan viloyati", gold: 2, silver: 2, bronze: 4, total: 8 },
      { name: "Samarqand viloyati", gold: 1, silver: 1, bronze: 2, total: 4 },
    ],
  },
  {
    rank: 8, sport: "Stol tennisi", gold: 2, silver: 2, bronze: 2, total: 6,
    regions: [
      { name: "Toshkent shahar", gold: 1, silver: 1, bronze: 1, total: 3 },
      { name: "Toshkent viloyati", gold: 1, silver: 1, bronze: 1, total: 3 },
    ],
  },
  {
    rank: 9, sport: "FIBA 3X3 basketbol", gold: 2, silver: 2, bronze: 2, total: 6,
    regions: [
      { name: "Toshkent shahar", gold: 1, silver: 1, bronze: 1, total: 3 },
      { name: "Toshkent viloyati", gold: 1, silver: 1, bronze: 1, total: 3 },
    ],
  },
  {
    rank: 10, sport: "Badiiy gimnastika", gold: 1, silver: 1, bronze: 1, total: 3,
    regions: [{ name: "Toshkent shahar", gold: 1, silver: 1, bronze: 1, total: 3 }],
  },
];

type SportRegionAthlete = { name: string; org: string; program: string; score?: number };

function athleteResultToRow(a: AthleteResult): SportRegionAthlete {
  return { name: a.name, org: a.org, program: a.program };
}

// ─── Responsive jadval qatori ───────────────────────────────────────────────
const COL = "40px 1fr 44px 44px 44px 52px 32px";

const headerCellStyle = (centered = true): React.CSSProperties => ({
  color: "#fff",
  fontSize: "0.75rem",
  fontWeight: 600,
  textAlign: centered ? "center" : "left",
  padding: "0 4px",
});

function TableHeader({ activeTab }: { activeTab: "hududlar" | "sport" }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: COL,
        background: "#1A3C6B",
        padding: "12px 12px",
        gap: "4px",
        alignItems: "center",
      }}
    >
      <span style={headerCellStyle()}>#</span>
      <span style={headerCellStyle(false)}>{activeTab === "hududlar" ? "Hududlar" : "Sport turi"}</span>
      <span style={{ textAlign: "center", fontSize: "1rem" }}>🥇</span>
      <span style={{ textAlign: "center", fontSize: "1rem" }}>🥈</span>
      <span style={{ textAlign: "center", fontSize: "1rem" }}>🥉</span>
      <span style={headerCellStyle()}>Jami</span>
      <span />
    </div>
  );
}

function TableFooter({ gold, silver, bronze, total }: { gold: number; silver: number; bronze: number; total: number }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: COL,
        padding: "12px 12px",
        gap: "4px",
        background: "#1A3C6B",
        alignItems: "center",
      }}
    >
      <span />
      <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.85rem" }}>Jami</span>
      <span style={{ textAlign: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem" }}>{gold}</span>
      <span style={{ textAlign: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem" }}>{silver}</span>
      <span style={{ textAlign: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem" }}>{bronze}</span>
      <span style={{ textAlign: "center", color: "#fff", fontWeight: 800, fontSize: "0.9rem" }}>{total}</span>
      <span />
    </div>
  );
}

// ─── Sportchi kartochkasi ────────────────────────────────────────────────────
function AthleteCard({ a, color }: { a: SportRegionAthlete; color: string }) {
  const initials = a.name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("");
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        padding: "8px 10px",
        background: "#fff",
        borderRadius: "8px",
        marginBottom: "6px",
        border: "1px solid #E2E8F0",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "34px",
          height: "34px",
          borderRadius: "50%",
          flexShrink: 0,
          background: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "0.6rem",
          fontWeight: 700,
        }}
      >
        {initials}
      </div>
      <div style={{ minWidth: 0 }}>
        <p style={{ margin: 0, fontSize: "0.75rem", fontWeight: 700, color: "#1A3C6B", lineHeight: 1.3 }}>{a.name}</p>
        <p style={{ margin: "2px 0 0", fontSize: "0.68rem", color: "#718096", lineHeight: 1.4 }}>{a.org}</p>
        {a.program?.trim() && (
          <p style={{ margin: "2px 0 0", fontSize: "0.65rem", color: "#9CA3AF" }}>{a.program}</p>
        )}
      </div>
    </div>
  );
}

// ─── Asosiy komponent ────────────────────────────────────────────────────────
export default function PrezidentOlimpiadasiPage() {
  const { results } = useData();

  const sportRegionAthletes = useMemo(
    () =>
      results.reduce(
        (acc, r) => {
          if (!acc[r.sport]) acc[r.sport] = {};
          acc[r.sport][r.region] = {
            oltin: r.athletes.filter((a) => a.medal === "oltin").map(athleteResultToRow),
            kumush: r.athletes.filter((a) => a.medal === "kumush").map(athleteResultToRow),
            bronza: r.athletes.filter((a) => a.medal === "bronza").map(athleteResultToRow),
          };
          return acc;
        },
        {} as Record<string, Record<string, { oltin: SportRegionAthlete[]; kumush: SportRegionAthlete[]; bronza: SportRegionAthlete[] }>>,
      ),
    [results],
  );

  const [activeTab, setActiveTab] = useState<"hududlar" | "sport">("hududlar");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [expandedSport, setExpandedSport] = useState<string | null>("Boks");
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);

  const toggleSport = (sport: string) => setExpandedSport((p) => (p === sport ? null : sport));
  const toggleRegion = (key: string) => setExpandedRegion((p) => (p === key ? null : key));

  const totalGold = medalData.reduce((s, r) => s + r.gold, 0);
  const totalSilver = medalData.reduce((s, r) => s + r.silver, 0);
  const totalBronze = medalData.reduce((s, r) => s + r.bronze, 0);
  const totalAll = medalData.reduce((s, r) => s + r.total, 0);

  const totalGoldSport = sportData.reduce((s, r) => s + r.gold, 0);
  const totalSilverSport = sportData.reduce((s, r) => s + r.silver, 0);
  const totalBronzeSport = sportData.reduce((s, r) => s + r.bronze, 0);
  const totalAllSport = sportData.reduce((s, r) => s + r.total, 0);

  return (
    <>
      {/* Inline responsive styles */}
      <style>{`
        .po-page { background: #F5F7FA; min-height: 100vh; }
        .po-inner { max-width: 1280px; margin: 0 auto; padding: 24px 12px; }
        @media (min-width: 640px) { .po-inner { padding: 40px 24px; } }

        /* Filtr qatori */
        .po-filters {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 0;
        }
        @media (min-width: 640px) {
          .po-filters {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        /* Sana filtrlari */
        .po-date-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
        }
        .po-date-filters input {
          padding: 6px 8px;
          border: 1px solid #E2E8F0;
          border-radius: 6px;
          font-size: 0.75rem;
          width: 130px;
        }
        .po-date-filters label {
          font-size: 0.75rem;
          color: #718096;
        }

        /* Tab tugmalar */
        .po-tabs { display: flex; gap: 0; }
        .po-tab {
          padding: 8px 16px;
          border: 1px solid #E2E8F0;
          font-size: 0.82rem;
          cursor: pointer;
          white-space: nowrap;
        }

        /* Taqvim jadvali — gorizontal scroll */
        .po-schedule-wrap {
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid #E2E8F0;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        }
        .po-schedule-scroll {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        .po-schedule-scroll table {
          width: 100%;
          border-collapse: collapse;
          min-width: 700px;
        }

        /* Sport turi expand — sportchilar 3 ustun → 1 ustun mobilda */
        .po-athletes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        @media (max-width: 639px) {
          .po-athletes-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Jadval ustunlari matnini qisqartirish */
        .po-cell-name {
          font-size: 0.8rem;
          color: #1A3C6B;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media (min-width: 480px) {
          .po-cell-name { white-space: normal; }
        }
      `}</style>

      <div className="po-page">
        <div className="po-inner">

          {/* Sarlavha */}
          <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#1A3C6B", marginBottom: "16px", letterSpacing: "0.04em" }}>
            &ldquo;PREZIDENT OLIMPIADASI&rdquo; NATIJALARI
          </h2>

          {/* Tab + Filtr qatori */}
          <div className="po-filters">
            <div className="po-tabs">
              {(["hududlar", "sport"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className="po-tab"
                  style={{
                    background: activeTab === tab ? "#fff" : "#F7FAFC",
                    color: activeTab === tab ? "#1A3C6B" : "#718096",
                    fontWeight: activeTab === tab ? 700 : 400,
                    borderRadius: tab === "hududlar" ? "8px 0 0 0" : "0 8px 0 0",
                    borderBottom: activeTab === tab ? "1px solid #fff" : "1px solid #E2E8F0",
                  }}
                >
                  {tab === "hududlar" ? "Hududlar" : "Sport turlari"}
                </button>
              ))}
            </div>
            <div className="po-date-filters">
              <label>Sana dan</label>
              <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
              <label>Sana gacha</label>
              <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
            </div>
          </div>

          {/* Asosiy jadval */}
          <div
            style={{
              background: "#fff",
              borderRadius: "0 8px 8px 8px",
              overflow: "hidden",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}
          >
            <TableHeader activeTab={activeTab} />

            {/* ── HUDUDLAR TAB ── */}
            {activeTab === "hududlar" &&
              medalData.map((row, i) => (
                <div
                  key={row.rank}
                  style={{
                    display: "grid",
                    gridTemplateColumns: COL,
                    padding: "11px 12px",
                    gap: "4px",
                    alignItems: "center",
                    borderBottom: "1px solid #F7FAFC",
                    background: i % 2 === 0 ? "#fff" : "#FAFBFC",
                  }}
                >
                  <span style={{ fontSize: "0.8rem", color: "#718096", fontWeight: 600, textAlign: "center" }}>{row.rank}</span>
                  <span className="po-cell-name">{row.name}</span>
                  <span style={{ textAlign: "center", fontWeight: 700, color: "#1A3C6B", fontSize: "0.85rem" }}>{row.gold}</span>
                  <span style={{ textAlign: "center", fontWeight: 700, color: "#718096", fontSize: "0.85rem" }}>{row.silver}</span>
                  <span style={{ textAlign: "center", fontWeight: 700, color: "#CD7F32", fontSize: "0.85rem" }}>{row.bronze}</span>
                  <span style={{ textAlign: "center", fontWeight: 800, color: "#1A3C6B", fontSize: "0.9rem" }}>{row.total}</span>
                  <span style={{ textAlign: "center", color: "#CBD5E0", fontSize: "0.8rem" }}>∨</span>
                </div>
              ))}

            {/* ── SPORT TURLARI TAB ── */}
            {activeTab === "sport" &&
              sportData.map((row, i) => {
                const isExp = expandedSport === row.sport;
                return (
                  <div key={i}>
                    {/* Sport turi asosiy qator */}
                    <div
                      onClick={() => toggleSport(row.sport)}
                      style={{
                        display: "grid",
                        gridTemplateColumns: COL,
                        padding: "11px 12px",
                        gap: "4px",
                        alignItems: "center",
                        borderBottom: "1px solid #E2E8F0",
                        background: isExp ? "#EEF3FA" : i % 2 === 0 ? "#fff" : "#FAFBFC",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ textAlign: "center", fontSize: "0.8rem", color: "#718096", fontWeight: 600 }}>{row.rank}</span>
                      <span className="po-cell-name" style={{ fontWeight: 700 }}>{row.sport}</span>
                      <span style={{ textAlign: "center", fontWeight: 700, color: "#1A3C6B", fontSize: "0.85rem" }}>{row.gold}</span>
                      <span style={{ textAlign: "center", fontWeight: 700, color: "#718096", fontSize: "0.85rem" }}>{row.silver}</span>
                      <span style={{ textAlign: "center", fontWeight: 700, color: "#CD7F32", fontSize: "0.85rem" }}>{row.bronze}</span>
                      <span style={{ textAlign: "center", fontWeight: 800, color: "#1A3C6B", fontSize: "0.9rem" }}>{row.total}</span>
                      <span
                        style={{
                          textAlign: "center",
                          color: "#1A3C6B",
                          fontSize: "0.9rem",
                          display: "inline-block",
                          transition: "transform 0.2s",
                          transform: isExp ? "rotate(180deg)" : "none",
                        }}
                      >
                        ∧
                      </span>
                    </div>

                    {/* Kengaytirilgan: viloyatlar ro'yxati */}
                    {isExp && (
                      <div style={{ background: "#F8FAFF", borderBottom: "2px solid #1A3C6B" }}>
                        {/* Viloyat sarlavha qatori */}
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: COL,
                            padding: "8px 12px",
                            gap: "4px",
                            background: "#E8EEF7",
                            borderBottom: "1px solid #D1D9E8",
                          }}
                        >
                          <span style={{ fontSize: "0.7rem", color: "#4A5568", fontWeight: 600, textAlign: "center" }}>#</span>
                          <span style={{ fontSize: "0.7rem", color: "#4A5568", fontWeight: 600 }}>Hudud</span>
                          <span style={{ textAlign: "center", fontSize: "0.9rem" }}>🥇</span>
                          <span style={{ textAlign: "center", fontSize: "0.9rem" }}>🥈</span>
                          <span style={{ textAlign: "center", fontSize: "0.9rem" }}>🥉</span>
                          <span style={{ fontSize: "0.7rem", color: "#4A5568", fontWeight: 600, textAlign: "center" }}>Jami</span>
                          <span />
                        </div>

                        {row.regions.map((reg, j) => {
                          const regionKey = `${row.sport}-${reg.name}`;
                          const isRegExp = expandedRegion === regionKey;
                          const athletes = sportRegionAthletes[row.sport]?.[reg.name];

                          return (
                            <div key={j}>
                              <div
                                onClick={() => toggleRegion(regionKey)}
                                style={{
                                  display: "grid",
                                  gridTemplateColumns: COL,
                                  padding: "10px 12px",
                                  gap: "4px",
                                  alignItems: "center",
                                  borderBottom: "1px solid #EEF3FA",
                                  background: isRegExp ? "#E8F0FE" : j % 2 === 0 ? "#fff" : "#F8FAFF",
                                  cursor: athletes ? "pointer" : "default",
                                }}
                              >
                                <span style={{ textAlign: "center", fontSize: "0.78rem", color: "#718096" }}>{j + 1}</span>
                                <span style={{ fontSize: "0.76rem", color: "#1A3C6B", fontWeight: isRegExp ? 700 : 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{reg.name}</span>
                                <span style={{ textAlign: "center", fontWeight: 600, color: "#1A3C6B", fontSize: "0.82rem" }}>{reg.gold}</span>
                                <span style={{ textAlign: "center", fontWeight: 600, color: "#718096", fontSize: "0.82rem" }}>{reg.silver}</span>
                                <span style={{ textAlign: "center", fontWeight: 600, color: "#CD7F32", fontSize: "0.82rem" }}>{reg.bronze}</span>
                                <span style={{ textAlign: "center", fontWeight: 700, color: "#1A3C6B", fontSize: "0.82rem" }}>{reg.total}</span>
                                <span
                                  style={{
                                    textAlign: "center",
                                    color: "#1A3C6B",
                                    fontSize: "0.85rem",
                                    display: "inline-block",
                                    transition: "transform 0.2s",
                                    transform: isRegExp ? "rotate(180deg)" : "none",
                                    opacity: athletes ? 1 : 0.3,
                                  }}
                                >
                                  ∧
                                </span>
                              </div>

                              {/* Sportchilar */}
                              {isRegExp && athletes && (
                                <div style={{ background: "#F0F4FF", padding: "16px 12px", borderBottom: "2px solid #2563EB" }}>
                                  <div className="po-athletes-grid">
                                    {/* Oltin */}
                                    <div>
                                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "10px" }}>
                                        <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#F4A419", marginBottom: "4px" }} />
                                        <span style={{ fontSize: "0.8rem", fontWeight: 700 }}>{reg.gold}</span>
                                        <span style={{ fontSize: "0.68rem", color: "#718096", background: "#F1F5F9", padding: "2px 12px", borderRadius: "20px", marginTop: "2px" }}>Oltin</span>
                                      </div>
                                      {athletes.oltin.length === 0
                                        ? <p style={{ textAlign: "center", color: "#CBD5E0", fontSize: "0.78rem" }}>—</p>
                                        : athletes.oltin.map((a, k) => <AthleteCard key={k} a={a} color="linear-gradient(135deg,#1A3C6B,#2563EB)" />)
                                      }
                                    </div>
                                    {/* Kumush */}
                                    <div>
                                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "10px" }}>
                                        <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#9CA3AF", marginBottom: "4px" }} />
                                        <span style={{ fontSize: "0.8rem", fontWeight: 700 }}>{reg.silver}</span>
                                        <span style={{ fontSize: "0.68rem", color: "#718096", background: "#F1F5F9", padding: "2px 12px", borderRadius: "20px", marginTop: "2px" }}>Kumush</span>
                                      </div>
                                      {athletes.kumush.length === 0
                                        ? <p style={{ textAlign: "center", color: "#CBD5E0", fontSize: "0.78rem" }}>—</p>
                                        : athletes.kumush.map((a, k) => <AthleteCard key={k} a={a} color="linear-gradient(135deg,#6B7280,#9CA3AF)" />)
                                      }
                                    </div>
                                    {/* Bronza */}
                                    <div>
                                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "10px" }}>
                                        <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#CD7F32", marginBottom: "4px" }} />
                                        <span style={{ fontSize: "0.8rem", fontWeight: 700 }}>{reg.bronze}</span>
                                        <span style={{ fontSize: "0.68rem", color: "#718096", background: "#F1F5F9", padding: "2px 12px", borderRadius: "20px", marginTop: "2px" }}>Bronza</span>
                                      </div>
                                      {athletes.bronza.length === 0
                                        ? <p style={{ textAlign: "center", color: "#CBD5E0", fontSize: "0.78rem" }}>—</p>
                                        : athletes.bronza.map((a, k) => <AthleteCard key={k} a={a} color="linear-gradient(135deg,#92400E,#CD7F32)" />)
                                      }
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

            <TableFooter
              gold={activeTab === "hududlar" ? totalGold : totalGoldSport}
              silver={activeTab === "hududlar" ? totalSilver : totalSilverSport}
              bronze={activeTab === "hududlar" ? totalBronze : totalBronzeSport}
              total={activeTab === "hududlar" ? totalAll : totalAllSport}
            />
          </div>

          {/* Ko'rishlar va izoh */}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "16px", marginTop: "8px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.78rem", color: "#718096" }}>👁 Jami ko&apos;rishlar soni : 7636</span>
            <span style={{ fontSize: "0.78rem", color: "#718096" }}>👁 Ko&apos;rishlar soni : 36</span>
          </div>
          <p style={{ fontSize: "0.76rem", color: "#718096", marginTop: "8px", lineHeight: 1.5 }}>
            <strong>Izoh:</strong>{" "}
            <em>Respublika ahamiyatiga ega bo&apos;lgan</em> Respublika Olimpiya va paralimpiya sport turlariga tayyorlash markazi va Baxodir Jalolov boks mahorati maktabidan chiqqan sovrindor sportchilarning natijalari ularning tug&apos;ilgan hududlari natijalariga qo&apos;shilgan.
          </p>

          {/* ── TAQVIM ── */}
          <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#1A3C6B", margin: "40px 0 16px", letterSpacing: "0.04em" }}>
            &ldquo;PREZIDENT OLIMPIADASI&rdquo; TAQVIMI
          </h2>

          <div className="po-schedule-wrap">
            <div className="po-schedule-scroll" style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
              <table>
                <thead>
                  <tr style={{ background: "#1A3C6B" }}>
                    <th style={{ padding: "12px 12px", textAlign: "left", color: "#fff", fontSize: "0.78rem", fontWeight: 600, width: "160px", whiteSpace: "nowrap" }}>
                      Sport turi / Kunlar
                    </th>
                    {dateHeaders.map((d, i) => (
                      <th key={i} style={{ padding: "6px 3px", textAlign: "center", color: "#fff", minWidth: "44px" }}>
                        <div style={{ fontSize: "0.82rem", fontWeight: 800 }}>{d.date}</div>
                        <div style={{ fontSize: "0.6rem", opacity: 0.85 }}>{d.month}</div>
                        <div style={{ fontSize: "0.55rem", opacity: 0.7 }}>{d.day}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row, i) => (
                    <tr key={row.sport} style={{ borderBottom: "1px solid #F7FAFC", background: i % 2 === 0 ? "#fff" : "#FAFBFC" }}>
                      <td style={{ padding: "10px 12px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{row.icon}</span>
                          <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#2D3748" }}>{row.sport}</span>
                        </div>
                      </td>
                      {row.days.map((active, j) => (
                        <td key={j} style={{ padding: "10px 3px", textAlign: "center", borderLeft: "1px dashed #E2E8F0" }}>
                          {active === 1 ? <span style={{ color: "#2563EB", fontSize: "1rem" }}>🏃</span> : null}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ height: "48px" }} />
        </div>
      </div>
    </>
  );
}