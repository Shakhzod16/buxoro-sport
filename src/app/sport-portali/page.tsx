"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

import { useData } from "@/context/DataContext";
import RegionsMap from "@/components/home/RegionsMap";

const MEDAL_ROWS = [
  { rank: 1, name: "Buxoro viloyati", gold: 8, silver: 0, bronze: 0, total: 8 },
  { rank: 2, name: "Toshkent shahri", gold: 2, silver: 13, bronze: 20, total: 35 },
  { rank: 3, name: "Qoraqalpog'iston Respublikasi", gold: 2, silver: 5, bronze: 15, total: 22 },
  { rank: 4, name: "Farg'ona viloyati", gold: 2, silver: 1, bronze: 1, total: 4 },
  { rank: 5, name: "Jizzax viloyati", gold: 1, silver: 0, bronze: 0, total: 1 },
  { rank: 6, name: "Andijon viloyati", gold: 0, silver: 5, bronze: 0, total: 5 },
  { rank: 7, name: "Toshkent viloyati", gold: 0, silver: 4, bronze: 1, total: 5 },
  { rank: 8, name: "Sirdaryo viloyati", gold: 0, silver: 1, bronze: 4, total: 5 },
  { rank: "9 =", name: "Navoiy viloyati", gold: 0, silver: 0, bronze: 1, total: 1 },
  { rank: "9 =", name: "Samarqand viloyati", gold: 0, silver: 0, bronze: 1, total: 1 },
] as const;

const MEDAL_SPORT_ROWS = [
  { rank: 1, name: "Boks", gold: 26, silver: 26, bronze: 52, total: 104 },
  { rank: 2, name: "Taekwondo WTF", gold: 20, silver: 20, bronze: 40, total: 80 },
  { rank: 3, name: "Erkin kurash", gold: 20, silver: 20, bronze: 40, total: 80 },
  { rank: 4, name: "Og'ir atletika", gold: 20, silver: 20, bronze: 20, total: 60 },
  { rank: 5, name: "Yengil atletika", gold: 19, silver: 17, bronze: 18, total: 54 },
  { rank: 6, name: "Dzyudo", gold: 16, silver: 16, bronze: 32, total: 64 },
  { rank: 7, name: "Yunon-rum kurash", gold: 10, silver: 10, bronze: 20, total: 40 },
  { rank: 8, name: "Stol tennisi", gold: 2, silver: 2, bronze: 2, total: 6 },
  { rank: 9, name: "FIBA 3X3 basketbol", gold: 2, silver: 2, bronze: 2, total: 6 },
  { rank: 10, name: "Badiiy gimnastika", gold: 1, silver: 1, bronze: 1, total: 3 },
] as const;

const MEDAL_SPORT_FOOTER = { gold: 136, silver: 134, bronze: 227, total: 497 } as const;

const MOST_VIEWED = [
  {
    date: "21\nAPR",
    title: "Romitan tumanida futbol bo'yicha DXI kubogi guruh bosqichlari...",
    views: 221,
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&q=80",
  },
  {
    date: "13\nAPR",
    title: "Akademik eshkak eshish sport turi bo'yicha yoshlar U-19 va U-23 yoshlar...",
    views: 149,
    img: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400&q=80",
  },
  {
    date: "13\nAPR",
    title: "Toshkent shahar kurash sport turlarida ishtirokchilarni sport maktab...",
    views: 147,
    img: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400&q=80",
  },
  {
    date: "18\nAPR",
    title: "2026 Avri 18 tarixchi uchun Buyroq arashapda Chaptmari...",
    views: 139,
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
  },
  {
    date: "13\nAPR",
    title: "Yoshlar o'rtasida jismoniy tarbiyani sport bilan...",
    views: 133,
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&q=80",
  },
  {
    date: "20\nAPR",
    title: "O'zbekiston Respublikasi Prezidenti ko'rib uchun Pahlavon Mahmud...",
    views: 127,
    img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80",
  },
] as const;

const INTERACTIVE_SERVICES = [
  "Jismoniy tarbiya va sport sohasidagi qonunchilik hujjatlariga xotin-qizlarga berilgan imtiyozlar",
  "Sport turlari va ulardagi xotin-qizlar ishtirokiga oid ma'lumotlar",
  "Sog'lom turmush tarziga oid infografika va video ma'lumotlar",
  "Sog'lom turmush tarziga oid infografika va video ma'lumotlar",
] as const;

const RATING_TOP_10 = [
  { rank: 1, name: "Uchqudug tumani 1-Sport maktabi", news: 750, views: "40.5K", medal: "🥇" as const },
  { rank: 2, name: "Shirin shahar sport maktabi", news: 665, views: "36.8K", medal: "🥈" as const },
  { rank: 3, name: "Romitan tumani sport maktabi", news: 665, views: "34.4K", medal: "🥉" as const },
  { rank: 4, name: "Surxondaryo viloyati sport boshqarmasi", news: 566, views: "33.4K", medal: null },
  { rank: 5, name: "Navoiy shahar 1-son sport maktabi", news: 376, views: "19.8K", medal: null },
  { rank: 6, name: "Sardoba tumani sport maktabi", news: 310, views: "6.1K", medal: null },
  { rank: 7, name: "Vobkent tumani sport maktabi", news: 213, views: "10.7K", medal: null },
  { rank: 8, name: "Sirdaryo viloyati sport boshqarmasi", news: 240, views: "1.6K", medal: null },
  { rank: 9, name: "G'allaorol tumani 2-son sport maktabi", news: 150, views: "4.7K", medal: null },
  { rank: 10, name: "G'allaorol tumani 1-son sport maktabi", news: 129, views: "4.9K", medal: null },
] as const;

const UZ_TZ = "Asia/Tashkent";

function formatPortalDay(d: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: UZ_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}

function formatPortalDateTime(d: Date): string {
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone: UZ_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(d);
}

const newsCardTitleClamp: CSSProperties = {
  fontSize: "0.82rem",
  color: "#2D3748",
  fontWeight: 500,
  lineHeight: 1.4,
  margin: "0 0 8px",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
};

export default function SportPortalPage() {
  const { news } = useData();
  const [medalTab, setMedalTab] = useState<"Hududlar" | "Sport turlari">("Hududlar");
  const [portalDay, setPortalDay] = useState("…");
  const [portalDateTime, setPortalDateTime] = useState("…");
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [expandedSportRow, setExpandedSportRow] = useState<string | null>(null);
  const [sportDateFrom, setSportDateFrom] = useState("");
  const [sportDateTo, setSportDateTo] = useState("");

  useEffect(() => {
    queueMicrotask(() => {
      const d = new Date();
      setPortalDay(formatPortalDay(d));
      setPortalDateTime(formatPortalDateTime(d));
    });
  }, []);

  const athletesByRegion: Record<
    string,
    {
      oltin: { name: string; federation: string; program: string }[];
      kumush: { name: string; federation: string; program: string }[];
      bronza: { name: string; federation: string; program: string }[];
    }
  > = {
    "Buxoro viloyati": {
      oltin: [
        {
          name: "Ibodulloev Asilbek Ilhom o'g'li",
          federation: '"Qilichbozlik" federatsiyasi Buxoro viloyat bulimi',
          program: "shpaga-jamoaviy musobaqalar",
        },
        {
          name: "Naimov Firdavs Farruxovich",
          federation: '"Qilichbozlik" federatsiyasi Buxoro viloyat bulimi',
          program: "shpaga-jamoaviy musobaqalar",
        },
        {
          name: "Hamroboeva Zarina Nurmatovna",
          federation: '"Qilichbozlik" federatsiyasi Buxoro viloyat bulimi',
          program: "shpaga-jamoaviy musobaqalar",
        },
        {
          name: "Ibodulloeva Dilnura Ilhom qizi",
          federation: '"Qilichbozlik" federatsiyasi Buxoro viloyat bulimi',
          program: "shpaga",
        },
        {
          name: "Ibodulloeva Dilnura Ilhom qizi",
          federation: '"Qilichbozlik" federatsiyasi Buxoro viloyat bulimi',
          program: "shpaga-jamoaviy musobaqalar",
        },
        {
          name: "Rashidova Jasmina Mehriddin qizi",
          federation: '"Qilichbozlik" federatsiyasi Buxoro viloyat bulimi',
          program: "shpaga-jamoaviy musobaqalar",
        },
        {
          name: "Hamidov Farhodjon Hamzaevich",
          federation: '"Qilichbozlik" federatsiyasi Buxoro viloyat bulimi',
          program: "shpaga-jamoaviy musobaqalar",
        },
        {
          name: "Timur Samatov Kaxramonovich",
          federation: '"Qilichbozlik" federatsiyasi Buxoro viloyat bulimi',
          program: "shpaga-jamoaviy musobaqalar",
        },
      ],
      kumush: [],
      bronza: [],
    },
    "Toshkent shahri": {
      oltin: [
        {
          name: "Aliyev Jasur Baxtiyorovich",
          federation: "Toshkent shahar sport federatsiyasi",
          program: "individual musobaqa",
        },
        {
          name: "Nazarova Malika Saidovna",
          federation: "Toshkent shahar sport federatsiyasi",
          program: "jamoaviy musobaqa",
        },
      ],
      kumush: [
        {
          name: "Xasanov Bobur Rustamovich",
          federation: "Toshkent shahar sport federatsiyasi",
          program: "individual musobaqa",
        },
      ],
      bronza: [
        {
          name: "Toshmatov Sherzod Alievich",
          federation: "Toshkent shahar sport federatsiyasi",
          program: "individual musobaqa",
        },
      ],
    },
  };

  const toggleRow = (name: string) => {
    setExpandedRow((prev) => (prev === name ? null : name));
  };

  const toggleSportRow = (name: string) => {
    setExpandedSportRow((prev) => (prev === name ? null : name));
  };

  return (
    <div style={{ background: "#F5F7FA", minHeight: "100vh" }}>
      {/* ═══ 1. HERO BANNER ═══ */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,36,71,0.6) 0%, rgba(26,60,107,0.85) 100%), url(https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "320px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            marginLeft: "auto",
            padding: "48px 24px",
          }}
        >
          <p
            style={{
              color: "#fff",
              fontSize: "1.6rem",
              fontWeight: 700,
              fontStyle: "italic",
              lineHeight: 1.5,
              marginBottom: "24px",
            }}
          >
            &ldquo;Sport bilan shug&apos;ullanayotgan yoshlar – ertangi kunda xalqimiz faxri, Vatanimiz sha&apos;nini himoya
            qiladigan kuchdir&rdquo;
          </p>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", textAlign: "right" }}>Shavkat Miromonovich Mirziyoyev</p>
        </div>
      </div>

      {/* ═══ 2. MEDAL JADVAL ═══ */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 24px 0" }}>
        <h2
          style={{
            fontSize: "1.1rem",
            fontWeight: 800,
            color: "#1A3C6B",
            marginBottom: "16px",
            letterSpacing: "0.05em",
          }}
        >
          QILICHBOZLIK BO&apos;YICHA O&apos;ZBEKISTON CHEMPIONATI
        </h2>

        <div style={{ display: "flex", gap: "0", marginBottom: "0", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => setMedalTab("Hududlar")}
            style={{
              padding: "8px 24px",
              border: "1px solid #E2E8F0",
              background: medalTab === "Hududlar" ? "#fff" : "#EEF2F7",
              fontWeight: 600,
              fontSize: "0.875rem",
              color: "#1A3C6B",
              cursor: "pointer",
              borderRadius: "4px 4px 0 0",
            }}
          >
            Hududlar
          </button>
          <button
            type="button"
            onClick={() => setMedalTab("Sport turlari")}
            style={{
              padding: "8px 24px",
              border: "1px solid #E2E8F0",
              borderLeft: "none",
              background: medalTab === "Sport turlari" ? "#fff" : "#EEF2F7",
              fontWeight: 600,
              fontSize: "0.875rem",
              color: "#1A3C6B",
              cursor: "pointer",
              borderRadius: "4px 4px 0 0",
            }}
          >
            Sport turlari
          </button>
        </div>

        {medalTab === "Hududlar" ? (
          <div
            style={{
              background: "#fff",
              borderRadius: "0 8px 8px 8px",
              overflow: "hidden",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              border: "1px solid #E2E8F0",
            }}
          >
            <div className="table-scroll">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr 80px 80px 80px 100px 50px",
                background: "#1A3C6B",
                padding: "12px 16px",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#fff", fontSize: "0.8rem", fontWeight: 600 }} />
              <span style={{ color: "#fff", fontSize: "0.8rem", fontWeight: 600 }}>Hududlar</span>
              <span style={{ textAlign: "center" }}>🥇</span>
              <span style={{ textAlign: "center" }}>🥈</span>
              <span style={{ textAlign: "center" }}>🥉</span>
              <span style={{ color: "#fff", fontSize: "0.8rem", fontWeight: 600, textAlign: "center" }}>Jami</span>
              <span />
            </div>

            {MEDAL_ROWS.map((row, i) => {
              const isExpanded = expandedRow === row.name;
              const athletes = athletesByRegion[row.name];

              return (
                <div key={i}>
                  {/* Main row */}
                  <div
                    onClick={() => toggleRow(row.name)}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "70px 1fr 90px 90px 90px 100px 50px",
                      padding: "13px 16px",
                      gap: "8px",
                      alignItems: "center",
                      borderBottom: "1px solid #F7FAFC",
                      background: isExpanded ? "#EEF3FA" : i % 2 === 0 ? "#fff" : "#FAFBFC",
                      cursor: "pointer",
                      transition: "background 0.15s",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: "#718096",
                        fontWeight: 600,
                        textAlign: "center",
                      }}
                    >
                      {row.rank}
                    </span>
                    <span style={{ fontSize: "0.875rem", color: "#1A3C6B", fontWeight: 600 }}>{row.name}</span>
                    <span style={{ textAlign: "center", fontWeight: 700, color: "#1A3C6B" }}>{row.gold}</span>
                    <span style={{ textAlign: "center", fontWeight: 700, color: "#718096" }}>{row.silver}</span>
                    <span style={{ textAlign: "center", fontWeight: 700, color: "#CD7F32" }}>{row.bronze}</span>
                    <span style={{ textAlign: "center", fontWeight: 800, color: "#1A3C6B", fontSize: "1rem" }}>{row.total}</span>
                    <span
                      style={{
                        textAlign: "center",
                        color: "#1A3C6B",
                        fontSize: "1rem",
                        transition: "transform 0.2s",
                        display: "inline-block",
                        transform: isExpanded ? "rotate(180deg)" : "none",
                      }}
                    >
                      ∧
                    </span>
                  </div>

                  {/* Expanded panel */}
                  {isExpanded && (
                    <div
                      style={{
                        borderBottom: "2px solid #1A3C6B",
                        background: "#F8FAFF",
                        padding: "20px 16px",
                      }}
                    >
                      {athletes ? (
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                          {/* OLTIN */}
                          <div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginBottom: "12px",
                              }}
                            >
                              <div
                                style={{
                                  width: "36px",
                                  height: "36px",
                                  borderRadius: "50%",
                                  background: "#F4A419",
                                  marginBottom: "4px",
                                }}
                              />
                              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#2D3748" }}>{row.gold}</span>
                              <span
                                style={{
                                  fontSize: "0.75rem",
                                  color: "#718096",
                                  background: "#F1F5F9",
                                  padding: "2px 20px",
                                  borderRadius: "20px",
                                  marginTop: "4px",
                                }}
                              >
                                Oltin
                              </span>
                            </div>
                            {athletes.oltin.length === 0 ? (
                              <p style={{ textAlign: "center", color: "#CBD5E0", fontSize: "0.8rem" }}>—</p>
                            ) : (
                              athletes.oltin.map((a, j) => (
                                <div
                                  key={j}
                                  style={{
                                    display: "flex",
                                    gap: "10px",
                                    alignItems: "flex-start",
                                    padding: "10px 12px",
                                    background: "#fff",
                                    borderRadius: "8px",
                                    marginBottom: "8px",
                                    border: "1px solid #E2E8F0",
                                  }}
                                >
                                  <div
                                    style={{
                                      width: "40px",
                                      height: "40px",
                                      borderRadius: "50%",
                                      flexShrink: 0,
                                      background: "linear-gradient(135deg, #1A3C6B, #2563EB)",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      color: "#fff",
                                      fontSize: "0.7rem",
                                      fontWeight: 700,
                                    }}
                                  >
                                    {a.name
                                      .split(" ")
                                      .map((w) => w[0])
                                      .slice(0, 2)
                                      .join("")}
                                  </div>
                                  <div>
                                    <p
                                      style={{
                                        margin: 0,
                                        fontSize: "0.82rem",
                                        fontWeight: 700,
                                        color: "#1A3C6B",
                                        lineHeight: 1.3,
                                      }}
                                    >
                                      {a.name}
                                    </p>
                                    <p style={{ margin: "3px 0 0", fontSize: "0.72rem", color: "#718096", lineHeight: 1.4 }}>
                                      {a.federation}
                                    </p>
                                    <p style={{ margin: "2px 0 0", fontSize: "0.72rem", color: "#718096" }}>
                                      Sport dasturi: {a.program}
                                    </p>
                                  </div>
                                </div>
                              ))
                            )}
                          </div>

                          {/* KUMUSH */}
                          <div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginBottom: "12px",
                              }}
                            >
                              <div
                                style={{
                                  width: "36px",
                                  height: "36px",
                                  borderRadius: "50%",
                                  background: "#9CA3AF",
                                  marginBottom: "4px",
                                }}
                              />
                              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#2D3748" }}>{row.silver}</span>
                              <span
                                style={{
                                  fontSize: "0.75rem",
                                  color: "#718096",
                                  background: "#F1F5F9",
                                  padding: "2px 20px",
                                  borderRadius: "20px",
                                  marginTop: "4px",
                                }}
                              >
                                Kumush
                              </span>
                            </div>
                            {athletes.kumush.length === 0 ? (
                              <p style={{ textAlign: "center", color: "#CBD5E0", fontSize: "0.8rem" }}>—</p>
                            ) : (
                              athletes.kumush.map((a, j) => (
                                <div
                                  key={j}
                                  style={{
                                    display: "flex",
                                    gap: "10px",
                                    alignItems: "flex-start",
                                    padding: "10px 12px",
                                    background: "#fff",
                                    borderRadius: "8px",
                                    marginBottom: "8px",
                                    border: "1px solid #E2E8F0",
                                  }}
                                >
                                  <div
                                    style={{
                                      width: "40px",
                                      height: "40px",
                                      borderRadius: "50%",
                                      flexShrink: 0,
                                      background: "linear-gradient(135deg, #6B7280, #9CA3AF)",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      color: "#fff",
                                      fontSize: "0.7rem",
                                      fontWeight: 700,
                                    }}
                                  >
                                    {a.name
                                      .split(" ")
                                      .map((w) => w[0])
                                      .slice(0, 2)
                                      .join("")}
                                  </div>
                                  <div>
                                    <p
                                      style={{
                                        margin: 0,
                                        fontSize: "0.82rem",
                                        fontWeight: 700,
                                        color: "#1A3C6B",
                                        lineHeight: 1.3,
                                      }}
                                    >
                                      {a.name}
                                    </p>
                                    <p style={{ margin: "3px 0 0", fontSize: "0.72rem", color: "#718096", lineHeight: 1.4 }}>
                                      {a.federation}
                                    </p>
                                    <p style={{ margin: "2px 0 0", fontSize: "0.72rem", color: "#718096" }}>
                                      Sport dasturi: {a.program}
                                    </p>
                                  </div>
                                </div>
                              ))
                            )}
                          </div>

                          {/* BRONZA */}
                          <div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginBottom: "12px",
                              }}
                            >
                              <div
                                style={{
                                  width: "36px",
                                  height: "36px",
                                  borderRadius: "50%",
                                  background: "#CD7F32",
                                  marginBottom: "4px",
                                }}
                              />
                              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#2D3748" }}>{row.bronze}</span>
                              <span
                                style={{
                                  fontSize: "0.75rem",
                                  color: "#718096",
                                  background: "#F1F5F9",
                                  padding: "2px 20px",
                                  borderRadius: "20px",
                                  marginTop: "4px",
                                }}
                              >
                                Bronza
                              </span>
                            </div>
                            {athletes.bronza.length === 0 ? (
                              <p style={{ textAlign: "center", color: "#CBD5E0", fontSize: "0.8rem" }}>—</p>
                            ) : (
                              athletes.bronza.map((a, j) => (
                                <div
                                  key={j}
                                  style={{
                                    display: "flex",
                                    gap: "10px",
                                    alignItems: "flex-start",
                                    padding: "10px 12px",
                                    background: "#fff",
                                    borderRadius: "8px",
                                    marginBottom: "8px",
                                    border: "1px solid #E2E8F0",
                                  }}
                                >
                                  <div
                                    style={{
                                      width: "40px",
                                      height: "40px",
                                      borderRadius: "50%",
                                      flexShrink: 0,
                                      background: "linear-gradient(135deg, #92400E, #CD7F32)",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      color: "#fff",
                                      fontSize: "0.7rem",
                                      fontWeight: 700,
                                    }}
                                  >
                                    {a.name
                                      .split(" ")
                                      .map((w) => w[0])
                                      .slice(0, 2)
                                      .join("")}
                                  </div>
                                  <div>
                                    <p
                                      style={{
                                        margin: 0,
                                        fontSize: "0.82rem",
                                        fontWeight: 700,
                                        color: "#1A3C6B",
                                        lineHeight: 1.3,
                                      }}
                                    >
                                      {a.name}
                                    </p>
                                    <p style={{ margin: "3px 0 0", fontSize: "0.72rem", color: "#718096", lineHeight: 1.4 }}>
                                      {a.federation}
                                    </p>
                                    <p style={{ margin: "2px 0 0", fontSize: "0.72rem", color: "#718096" }}>
                                      Sport dasturi: {a.program}
                                    </p>
                                  </div>
                                </div>
                              ))
                            )}
                          </div>
                        </div>
                      ) : (
                        <p style={{ textAlign: "center", color: "#718096", fontSize: "0.875rem", padding: "20px" }}>
                          Ma&apos;lumot mavjud emas
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr 80px 80px 80px 100px 50px",
                padding: "12px 16px",
                gap: "8px",
                background: "#1A3C6B",
                alignItems: "center",
              }}
            >
              <span />
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.875rem" }}>Jami</span>
              <span style={{ textAlign: "center", color: "#fff", fontWeight: 700 }}>15</span>
              <span style={{ textAlign: "center", color: "#fff", fontWeight: 700 }}>29</span>
              <span style={{ textAlign: "center", color: "#fff", fontWeight: 700 }}>43</span>
              <span style={{ textAlign: "center", color: "#fff", fontWeight: 700 }}>87</span>
              <span />
            </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              background: "#fff",
              borderRadius: "0 8px 8px 8px",
              overflow: "hidden",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              border: "1px solid #E2E8F0",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "12px 16px",
                padding: "10px 16px",
                borderBottom: "1px solid #E2E8F0",
                background: "#FAFBFC",
              }}
            >
              <label
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#4A5568",
                }}
              >
                Sana dan
                <input
                  type="date"
                  value={sportDateFrom}
                  onChange={(e) => setSportDateFrom(e.target.value)}
                  style={{
                    padding: "6px 10px",
                    border: "1px solid #E2E8F0",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    color: "#2D3748",
                    background: "#fff",
                  }}
                />
              </label>
              <label
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#4A5568",
                }}
              >
                Sana gacha
                <input
                  type="date"
                  value={sportDateTo}
                  onChange={(e) => setSportDateTo(e.target.value)}
                  style={{
                    padding: "6px 10px",
                    border: "1px solid #E2E8F0",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    color: "#2D3748",
                    background: "#fff",
                  }}
                />
              </label>
            </div>

            <div className="table-scroll">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr 80px 80px 80px 100px 50px",
                background: "#1A3C6B",
                padding: "12px 16px",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#fff", fontSize: "0.8rem", fontWeight: 600 }} />
              <span style={{ color: "#fff", fontSize: "0.8rem", fontWeight: 600 }}>Sport turlari</span>
              <span style={{ textAlign: "center" }}>🥇</span>
              <span style={{ textAlign: "center" }}>🥈</span>
              <span style={{ textAlign: "center" }}>🥉</span>
              <span style={{ color: "#fff", fontSize: "0.8rem", fontWeight: 600, textAlign: "center" }}>Jami</span>
              <span />
            </div>

            {MEDAL_SPORT_ROWS.map((row, i) => {
              const isExpanded = expandedSportRow === row.name;
              return (
                <div key={`sport-${row.name}-${i}`}>
                  <div
                    onClick={() => toggleSportRow(row.name)}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "70px 1fr 90px 90px 90px 100px 50px",
                      padding: "13px 16px",
                      gap: "8px",
                      alignItems: "center",
                      borderBottom: "1px solid #F7FAFC",
                      background: isExpanded ? "#EEF3FA" : i % 2 === 0 ? "#fff" : "#FAFBFC",
                      cursor: "pointer",
                      transition: "background 0.15s",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: "#718096",
                        fontWeight: 600,
                        textAlign: "center",
                      }}
                    >
                      {row.rank}
                    </span>
                    <span style={{ fontSize: "0.875rem", color: "#1A3C6B", fontWeight: 600 }}>{row.name}</span>
                    <span style={{ textAlign: "center", fontWeight: 700, color: "#1A3C6B" }}>{row.gold}</span>
                    <span style={{ textAlign: "center", fontWeight: 700, color: "#718096" }}>{row.silver}</span>
                    <span style={{ textAlign: "center", fontWeight: 700, color: "#CD7F32" }}>{row.bronze}</span>
                    <span style={{ textAlign: "center", fontWeight: 800, color: "#1A3C6B", fontSize: "1rem" }}>{row.total}</span>
                    <span
                      style={{
                        textAlign: "center",
                        color: "#1A3C6B",
                        fontSize: "1rem",
                        transition: "transform 0.2s",
                        display: "inline-block",
                        transform: isExpanded ? "rotate(180deg)" : "none",
                      }}
                    >
                      ∧
                    </span>
                  </div>
                  {isExpanded && (
                    <div
                      style={{
                        borderBottom: "2px solid #1A3C6B",
                        background: "#F8FAFF",
                        padding: "20px 16px",
                      }}
                    >
                      <p style={{ textAlign: "center", color: "#718096", fontSize: "0.875rem", margin: 0 }}>
                        Ma&apos;lumot mavjud emas
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr 80px 80px 80px 100px 50px",
                padding: "12px 16px",
                gap: "8px",
                background: "#1A3C6B",
                alignItems: "center",
              }}
            >
              <span />
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.875rem" }}>Jami</span>
              <span style={{ textAlign: "center", color: "#fff", fontWeight: 700 }}>{MEDAL_SPORT_FOOTER.gold}</span>
              <span style={{ textAlign: "center", color: "#fff", fontWeight: 700 }}>{MEDAL_SPORT_FOOTER.silver}</span>
              <span style={{ textAlign: "center", color: "#fff", fontWeight: 700 }}>{MEDAL_SPORT_FOOTER.bronze}</span>
              <span style={{ textAlign: "center", color: "#fff", fontWeight: 700 }}>{MEDAL_SPORT_FOOTER.total}</span>
              <span />
            </div>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "16px",
                padding: "14px 16px 18px",
                borderTop: "1px solid #E2E8F0",
                background: "#FAFBFC",
              }}
            >
              <p
                style={{
                  margin: 0,
                  flex: "1 1 280px",
                  fontSize: "0.78rem",
                  fontStyle: "italic",
                  color: "#4A5568",
                  lineHeight: 1.55,
                }}
              >
                <strong style={{ fontStyle: "normal", color: "#2D3748" }}>Izoh:</strong> Milliy sport markazlarida
                ro&apos;yxatdan o&apos;tgan sportchilarning natijalari ularning tug&apos;ilgan hududi bo&apos;yicha
                yig&apos;iladi.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  fontSize: "0.8rem",
                  color: "#2D3748",
                  fontWeight: 600,
                  textAlign: "right",
                  flexShrink: 0,
                }}
              >
                <span>Jami ko&apos;rishlar soni: 7671</span>
                <span>Ko&apos;rishlar soni: 35</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ═══ 3. BOSHQARMALAR XARITA (bosh sahifa bilan bir xil RegionsMap) ═══ */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 24px 0" }}>
        <RegionsMap />
      </div>

      {/* ═══ 4. OLIMPIADA NATIJALARI ═══ */}
      <div style={{ background: "#1A3C6B", marginTop: "48px", padding: "0" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: "280px",
          }}
        >
          <div
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1565992441121-4367fe2034cf?w=600&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div style={{ padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <span style={{ color: "#F4A419", fontSize: "1.2rem" }}>🏆</span>
              <span
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                }}
              >
                OLIMPIADA NATIJALARI
              </span>
            </div>
            <h3 style={{ color: "#fff", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px", lineHeight: 1.4 }}>
              Prezident Olimpiadasi – sportchilarning katta imkoniyati
            </h3>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "24px" }}>
              Respublika bo&apos;ylab o&apos;tkazilayotgan Prezident Olimpiadasi har yili yosh sportchilarimizga o&apos;z mahoratini
              namoyish qilish imkoniyatini beradi. Hududlar va sport turlari bo&apos;yicha oltin, kumush va bronza medallar
              g&apos;oliblari bilan tanishing.
            </p>
            <Link
              href="/faoliyat/natijalar"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#fff",
                color: "#1A3C6B",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.875rem",
                alignSelf: "flex-start",
              }}
            >
              Natijalarni ko&apos;rish ›
            </Link>
          </div>
        </div>
      </div>

      {/* ═══ 5. ENG KO'P KO'RILGANLAR ═══ */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 24px 0" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#1A3C6B", marginBottom: "20px", letterSpacing: "0.05em" }}>
          ENG KO&apos;P KO&apos;RILGANLAR
        </h2>
        <div className="news-grid" style={{ display: "grid", gap: "16px" }}>
          {MOST_VIEWED.map((item, i) => (
            <Link
              key={`${item.title}-${i}`}
              href="/axborot"
              style={{
                textDecoration: "none",
                display: "block",
                borderRadius: "10px",
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "160px" }}>
                <Image src={item.img} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "#1A3C6B",
                    color: "#fff",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textAlign: "center",
                    whiteSpace: "pre-line",
                    lineHeight: 1.2,
                    zIndex: 1,
                  }}
                >
                  {item.date}
                </div>
              </div>
              <div style={{ padding: "12px" }}>
                <p style={{ fontSize: "0.82rem", color: "#2D3748", fontWeight: 500, lineHeight: 1.4, margin: "0 0 8px" }}>{item.title}</p>
                <span style={{ fontSize: "0.75rem", color: "#718096" }}>👁 {item.views}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ═══ 6. INTERAKTIV XIZMATLAR ═══ */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px 0" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#1A3C6B", marginBottom: "16px", letterSpacing: "0.05em" }}>
          INTERAKTIV XIZMATLAR
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
          {INTERACTIVE_SERVICES.map((text, i) => (
            <Link
              key={`${text}-${i}`}
              href="/davlat-xizmatlari"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 20px",
                background: "#fff",
                borderRadius: "10px",
                border: "1px solid #E2E8F0",
                textDecoration: "none",
                color: "#374151",
                fontSize: "0.85rem",
                fontWeight: 500,
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>📋</span>
              <span>{text}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* ═══ 7. YANGILIKLAR ═══ */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px 0" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#1A3C6B", marginBottom: "20px", letterSpacing: "0.05em" }}>YANGILIKLAR</h2>
        <div className="news-grid" style={{ display: "grid", gap: "16px" }}>
          {news
            .filter((n) => n.status === "active")
            .slice(0, 6)
            .map((item) => (
              <Link
                key={item.id}
                href={`/axborot/${item.id}`}
                style={{
                  textDecoration: "none",
                  display: "block",
                  borderRadius: "10px",
                  overflow: "hidden",
                  background: "#fff",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "160px" }}>
                  <Image
                    src={item.image || "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80"}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      background: "#1A3C6B",
                      color: "#fff",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      zIndex: 1,
                    }}
                  >
                    {item.date}
                  </div>
                </div>
                <div style={{ padding: "12px" }}>
                  <p style={newsCardTitleClamp}>{item.title}</p>
                  <span style={{ fontSize: "0.75rem", color: "#718096" }}>👁 {item.views}</span>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* ═══ 8. REYTING TOP 10 ═══ */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px 0" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#1A3C6B", marginBottom: "16px", letterSpacing: "0.05em" }}>
          REYTING - TOP 10
        </h2>
        <div style={{ background: "#fff", borderRadius: "10px", overflow: "hidden", border: "1px solid #E2E8F0" }}>
          <div className="table-scroll">
          <div
            className="reyting-grid"
            style={{
              padding: "10px 16px",
              background: "#F7FAFC",
              gap: "8px",
            }}
          >
            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#718096" }}>O&apos;RIN</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#718096" }}>TASHKILOT</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#718096" }}>YANGILIKLAR</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#718096" }}>KO&apos;RISHLAR</span>
          </div>
          {RATING_TOP_10.map((row, i) => (
            <div
              key={`${row.name}-${row.rank}`}
              className="reyting-grid"
              style={{
                padding: "12px 16px",
                gap: "8px",
                alignItems: "center",
                borderBottom: "1px solid #F7FAFC",
                background: i % 2 === 0 ? "#fff" : "#FAFBFC",
              }}
            >
              <span style={{ fontSize: "1rem" }}>{row.medal ?? row.rank}</span>
              <span style={{ fontSize: "0.875rem", color: "#2D3748", fontWeight: 500 }}>{row.name}</span>
              <span style={{ fontSize: "0.875rem", color: "#1A3C6B", fontWeight: 600 }}>📰 {row.news}</span>
              <span style={{ fontSize: "0.875rem", color: "#718096" }}>👁 {row.views}</span>
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* PASSIV TASHKILOTLAR */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px 0" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#1A3C6B", marginBottom: "16px", letterSpacing: "0.05em" }}>
          PASSIV TASHKILOTLAR
        </h2>
        <div style={{ background: "#fff", borderRadius: "10px", overflow: "hidden", border: "1px solid #E2E8F0" }}>
          <div className="table-scroll">
          <div
            className="reyting-grid"
            style={{
              padding: "10px 16px",
              background: "#F7FAFC",
              gap: "8px",
              borderBottom: "1px solid #E2E8F0",
            }}
          >
            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#718096" }}>O&apos;RIN</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#718096" }}>TASHKILOT</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#718096" }}>YANGILIKLAR</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#718096" }}>KO&apos;RISHLAR</span>
          </div>
          {[
            { rank: 1, name: "Ohangaron tumani sport maktabi" },
            { rank: 2, name: "Yangibozor tumani 1-son sport maktabi" },
            { rank: 3, name: "Samarqand viloyati Gimnastikaga ixtisoslashtirilgan sport maktabi" },
            { rank: 4, name: "Nurobod tumani sport maktabi" },
            { rank: 5, name: "Chortoq tumani sport maktab" },
            { rank: 6, name: "Xo'jaobod tumani sport maktabi" },
            { rank: 7, name: "Izboskan tumani sport maktabi" },
            { rank: 8, name: "Shahrixon tumani sport turlari bo'yicha davlat ixtisoslashtirilgan maktab-internati" },
            { rank: 9, name: "O'rta chirchiq tumani sport maktabi" },
            { rank: 10, name: "Pastdarg'om tumani 2-son sport maktabi" },
          ].map((row, i) => (
            <div
              key={i}
              className="reyting-grid"
              style={{
                padding: "12px 16px",
                gap: "8px",
                alignItems: "center",
                borderBottom: "1px solid #F7FAFC",
                background: i % 2 === 0 ? "#fff" : "#FAFBFC",
              }}
            >
              <span style={{ fontSize: "0.875rem", color: "#718096", fontWeight: 500 }}>{row.rank}</span>
              <span style={{ fontSize: "0.875rem", color: "#2D3748" }}>{row.name}</span>
              <span style={{ fontSize: "0.875rem", color: "#E63946" }}>📰 1</span>
              <span style={{ fontSize: "0.875rem", color: "#718096" }}>👁 0</span>
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* Info bar */}
      <div style={{ marginTop: "40px", borderTop: "1px solid #E2E8F0", background: "#fff", padding: "16px 0" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "200px 1fr 320px",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <select style={{ padding: "6px 10px", border: "1px solid #E2E8F0", borderRadius: "6px", fontSize: "0.875rem", color: "#2D3748" }}>
              {["Andijon", "Buxoro", "Farg'ona", "Namangan", "Navoiy", "Qashqadaryo", "Samarqand", "Sirdaryo", "Surxondaryo", "Toshkent", "Xorazm"].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <span style={{ fontSize: "1.4rem", fontWeight: 700, color: "#2D3748" }}>+27°</span>
            <span style={{ fontSize: "1.4rem" }}>⛅</span>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                background: "#1A3C6B",
                padding: "8px 20px",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "0.8rem",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              🏆 2025-yil sport musobaqalari kubogi
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            <div style={{ background: "#EEF3FA", padding: "10px 14px", borderRadius: "8px", fontSize: "0.8rem", color: "#1A3C6B" }}>
              <div style={{ fontWeight: 700, marginBottom: "4px", fontSize: "0.75rem" }}>
                {portalDay} dan MB valyuta kurslari
              </div>
              <div>1 USD = 12141.94</div>
              <div>1 EUR = 14289.85</div>
              <div>1 RUB = 162.63</div>
            </div>
            <div style={{ background: "#1A3C6B", padding: "10px 14px", borderRadius: "8px", fontSize: "0.8rem", color: "#fff" }}>
              <div style={{ fontWeight: 700, marginBottom: "4px", fontSize: "0.75rem" }}>
                {portalDay} dan MB valyuta kurslari
              </div>
              <div>1 USD = 12141.94</div>
              <div>1 EUR = 14289.85</div>
              <a href="https://cbu.uz" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.7rem" }}>
                www.cbu.uz
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Portal Footer — sport.uz uslubi */}
      <footer style={{ background: "#002D62", marginTop: 0, color: "#fff", paddingBottom: 28 }}>
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.12)", padding: "22px 16px" }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {["PORTAL HAQIDA", "FOYDALANISH SHARTLARI", "MAXFIYLIK SIYOSATI", "DAVLAT ORGANLARI", "HUJJATLAR", "FAOLIYAT"].map((link, i, arr) => (
              <span key={link} style={{ display: "inline-flex", alignItems: "center" }}>
                <a
                  href="#"
                  style={{
                    color: "rgba(255,255,255,0.92)",
                    textDecoration: "none",
                    fontSize: "0.78rem",
                    padding: "0 14px",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                  }}
                >
                  {link}
                </a>
                {i < arr.length - 1 ? <span style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.72rem" }}>|</span> : null}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "28px 24px 8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "conic-gradient(from 200deg, #0099B5 0deg 110deg, #1EB53A 110deg 230deg, #CE1025 230deg 360deg)",
                padding: 3,
                flexShrink: 0,
                boxShadow: "0 2px 10px rgba(0,0,0,0.28)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem",
                }}
              >
                🏃
              </div>
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.72rem", letterSpacing: "0.1em", fontWeight: 600 }}>
                O&apos;ZBEKISTON RESPUBLIKASI
              </div>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: "1.06rem", letterSpacing: "0.06em", marginTop: 4 }}>SPORT PORTALI</div>
            </div>
          </div>

          <div
            aria-hidden
            style={{
              width: "50%",
              maxWidth: 420,
              height: 1,
              background: "rgba(255,255,255,0.38)",
              margin: "4px 0 22px",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 18,
              marginBottom: 26,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, flexShrink: 0 }}>
              <span style={{ fontSize: "2rem", lineHeight: 1 }}>💻</span>
              <span style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.18em", color: "rgba(255,255,255,0.95)" }}>DACC</span>
            </div>
            <div
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: "0.06em",
                textAlign: "left",
                lineHeight: 1.35,
                maxWidth: 340,
              }}
            >
              RAQAMLASHTIRISH VA SERTIFIKATLASH MARKAZI
            </div>
          </div>

          <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.74rem", margin: "0 0 10px", lineHeight: 1.55, maxWidth: 720 }}>
            © 2025-2026 Barcha huquqlar himoyalangan. Ushbu veb-saytdagi ma&apos;lumotlardan foydalanganda havola ko&apos;rsatilishi shart.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: "0.72rem",
              margin: "0 0 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: "1rem", opacity: 0.92 }} aria-hidden>
              🔄
            </span>
            <span>Oxirgi yangilanish: {portalDateTime}</span>
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.68rem", margin: 0, lineHeight: 1.5, maxWidth: 640 }}>
            Diqqat! Agar siz matnda xatoliklarni aniqlasangiz, ularni belgilab, ma&apos;muriyatni xabardor qilish uchun Ctrl/Command+Enter tugmalarini bosing
          </p>
        </div>
      </footer>

      <div style={{ height: "64px" }} />
    </div>
  );
}
