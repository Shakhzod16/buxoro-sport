"use client";

import { useState } from "react";

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
  { sport: "BOKS", icon: "🥊", days: [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0] },
  { sport: "ERKIN KURASH (AYOLLAR KURASHI)", icon: "🤼", days: [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
  { sport: "YUNON-RUM KURASHI", icon: "🤼", days: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0] },
  { sport: "TAEKVONDO WT", icon: "🥋", days: [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0] },
  { sport: "DZYUDO", icon: "🥋", days: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0] },
  { sport: "YENGIL ATLETIKA", icon: "🏃", days: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0] },
  { sport: "BASKETBOL 3x3", icon: "🏀", days: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0] },
  { sport: "STOL TENNISI", icon: "🏓", days: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0] },
  { sport: "OG'IR ATLETIKA", icon: "🏋️", days: [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0] },
  { sport: "BADIIY GIMNASTIKA", icon: "🤸", days: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
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

export default function PrezidentOlimpiadasiPage() {
  const [activeTab, setActiveTab] = useState<"hududlar" | "sport">("hududlar");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const totalGold = medalData.reduce((s, r) => s + r.gold, 0);
  const totalSilver = medalData.reduce((s, r) => s + r.silver, 0);
  const totalBronze = medalData.reduce((s, r) => s + r.bronze, 0);
  const totalAll = medalData.reduce((s, r) => s + r.total, 0);

  return (
    <div style={{ background: "#F5F7FA", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1A3C6B", marginBottom: "20px", letterSpacing: "0.05em" }}>
          &ldquo;PREZIDENT OLIMPIADASI&rdquo; NATIJALARI
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", gap: "0" }}>
            {(["hududlar", "sport"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "10px 24px",
                  border: "1px solid #E2E8F0",
                  background: activeTab === tab ? "#fff" : "#F7FAFC",
                  color: activeTab === tab ? "#1A3C6B" : "#718096",
                  fontWeight: activeTab === tab ? 700 : 400,
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  borderRadius: tab === "hududlar" ? "8px 0 0 0" : "0 8px 0 0",
                  borderBottom: activeTab === tab ? "1px solid #fff" : "1px solid #E2E8F0",
                }}
              >
                {tab === "hududlar" ? "Hududlar" : "Sport turlari"}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <label style={{ fontSize: "0.8rem", color: "#718096" }}>Sana dan</label>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              style={{ padding: "6px 10px", border: "1px solid #E2E8F0", borderRadius: "6px", fontSize: "0.8rem" }}
            />
            <label style={{ fontSize: "0.8rem", color: "#718096" }}>Sana gacha</label>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              style={{ padding: "6px 10px", border: "1px solid #E2E8F0", borderRadius: "6px", fontSize: "0.8rem" }}
            />
          </div>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: "0 8px 8px 8px",
            overflow: "hidden",
            border: "1px solid #E2E8F0",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "70px 1fr 90px 90px 90px 100px 50px",
              background: "#1A3C6B",
              padding: "14px 16px",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <span style={{ color: "#fff", fontSize: "0.8rem", fontWeight: 600 }} />
            <span style={{ color: "#fff", fontSize: "0.8rem", fontWeight: 600 }}>Hududlar</span>
            <span style={{ textAlign: "center", fontSize: "1.2rem" }}>🥇</span>
            <span style={{ textAlign: "center", fontSize: "1.2rem" }}>🥈</span>
            <span style={{ textAlign: "center", fontSize: "1.2rem" }}>🥉</span>
            <span style={{ color: "#fff", fontSize: "0.8rem", fontWeight: 600, textAlign: "center" }}>Jami</span>
            <span />
          </div>

          {medalData.map((row, i) => (
            <div
              key={row.rank}
              style={{
                display: "grid",
                gridTemplateColumns: "70px 1fr 90px 90px 90px 100px 50px",
                padding: "13px 16px",
                gap: "8px",
                alignItems: "center",
                borderBottom: "1px solid #F7FAFC",
                background: i % 2 === 0 ? "#fff" : "#FAFBFC",
              }}
            >
              <span style={{ fontSize: "0.9rem", color: "#718096", fontWeight: 600, textAlign: "center" }}>{row.rank}</span>
              <span style={{ fontSize: "0.875rem", color: "#1A3C6B", fontWeight: 600 }}>{row.name}</span>
              <span style={{ textAlign: "center", fontWeight: 700, color: "#1A3C6B", fontSize: "0.9rem" }}>{row.gold}</span>
              <span style={{ textAlign: "center", fontWeight: 700, color: "#718096", fontSize: "0.9rem" }}>{row.silver}</span>
              <span style={{ textAlign: "center", fontWeight: 700, color: "#CD7F32", fontSize: "0.9rem" }}>{row.bronze}</span>
              <span style={{ textAlign: "center", fontWeight: 800, color: "#1A3C6B", fontSize: "1rem" }}>{row.total}</span>
              <span style={{ textAlign: "center", color: "#CBD5E0", fontSize: "0.8rem", cursor: "pointer" }}>∨</span>
            </div>
          ))}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "70px 1fr 90px 90px 90px 100px 50px",
              padding: "14px 16px",
              gap: "8px",
              background: "#1A3C6B",
              alignItems: "center",
            }}
          >
            <span />
            <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>Jami</span>
            <span style={{ textAlign: "center", color: "#fff", fontWeight: 700 }}>{totalGold}</span>
            <span style={{ textAlign: "center", color: "#fff", fontWeight: 700 }}>{totalSilver}</span>
            <span style={{ textAlign: "center", color: "#fff", fontWeight: 700 }}>{totalBronze}</span>
            <span style={{ textAlign: "center", color: "#fff", fontWeight: 800, fontSize: "1rem" }}>{totalAll}</span>
            <span />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "24px", marginTop: "8px" }}>
          <span style={{ fontSize: "0.8rem", color: "#718096" }}>👁 Jami ko&apos;rishlar soni : 7636</span>
          <span style={{ fontSize: "0.8rem", color: "#718096" }}>👁 Ko&apos;rishlar soni : 36</span>
        </div>
        <p style={{ fontSize: "0.78rem", color: "#718096", marginTop: "8px", lineHeight: 1.5 }}>
          <strong>Izoh:</strong> <em>Respublika ahamiyatiga ega bo&apos;lgan</em> Respublika Olimpiya va paralimpiya sport turlariga tayyorlash markazi va Baxodir Jalolov boks mahorati maktabidan chiqqan sovrindor sportchilarning natijalari ularning tug&apos;ilgan hududlari natijalariga qo&apos;shilgan.
        </p>

        <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1A3C6B", margin: "48px 0 20px", letterSpacing: "0.05em" }}>
          &ldquo;PREZIDENT OLIMPIADASI&rdquo; TAQVIMI
        </h2>

        <div
          style={{
            background: "#fff",
            borderRadius: "10px",
            overflow: "auto",
            border: "1px solid #E2E8F0",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "900px" }}>
            <thead>
              <tr style={{ background: "#1A3C6B" }}>
                <th
                  style={{
                    padding: "14px 16px",
                    textAlign: "left",
                    color: "#fff",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    width: "220px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Sport turi / Kunlar
                </th>
                {dateHeaders.map((d, i) => (
                  <th key={`${d.date}-${d.month}-${i}`} style={{ padding: "8px 4px", textAlign: "center", color: "#fff", fontSize: "0.7rem", fontWeight: 600, minWidth: "52px" }}>
                    <div style={{ fontSize: "0.9rem", fontWeight: 800 }}>{d.date}</div>
                    <div style={{ fontSize: "0.65rem", opacity: 0.85 }}>{d.month}</div>
                    <div style={{ fontSize: "0.6rem", opacity: 0.7 }}>{d.day}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, i) => (
                <tr key={row.sport} style={{ borderBottom: "1px solid #F7FAFC", background: i % 2 === 0 ? "#fff" : "#FAFBFC" }}>
                  <td style={{ padding: "12px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{row.icon}</span>
                      <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#2D3748" }}>{row.sport}</span>
                    </div>
                  </td>
                  {row.days.map((active, j) => (
                    <td key={j} style={{ padding: "12px 4px", textAlign: "center", borderLeft: "1px dashed #E2E8F0" }}>
                      {active === 1 ? <span style={{ color: "#2563EB", fontSize: "1.1rem" }}>🏃</span> : null}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ height: "48px" }} />
      </div>
    </div>
  );
}
