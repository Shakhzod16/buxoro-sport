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

const sportData = [
  {
    rank: 1,
    sport: "Boks",
    gold: 26,
    silver: 26,
    bronze: 52,
    total: 104,
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
    rank: 2,
    sport: "Taekwondo WFT",
    gold: 20,
    silver: 20,
    bronze: 40,
    total: 80,
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
    rank: 3,
    sport: "Erkin kurash",
    gold: 20,
    silver: 20,
    bronze: 40,
    total: 80,
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
    rank: 4,
    sport: "Og'ir atletika",
    gold: 20,
    silver: 20,
    bronze: 20,
    total: 60,
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
    rank: 5,
    sport: "Yengil atletika",
    gold: 19,
    silver: 17,
    bronze: 18,
    total: 54,
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
    rank: 6,
    sport: "Dzyudo",
    gold: 16,
    silver: 16,
    bronze: 32,
    total: 64,
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
    rank: 7,
    sport: "Yunon-rum kurashi",
    gold: 10,
    silver: 10,
    bronze: 20,
    total: 40,
    regions: [
      { name: "Toshkent viloyati", gold: 3, silver: 3, bronze: 6, total: 12 },
      { name: "Buxoro viloyati", gold: 2, silver: 2, bronze: 4, total: 8 },
      { name: "Xorazm viloyati", gold: 2, silver: 2, bronze: 4, total: 8 },
      { name: "Namangan viloyati", gold: 2, silver: 2, bronze: 4, total: 8 },
      { name: "Samarqand viloyati", gold: 1, silver: 1, bronze: 2, total: 4 },
    ],
  },
  {
    rank: 8,
    sport: "Stol tennisi",
    gold: 2,
    silver: 2,
    bronze: 2,
    total: 6,
    regions: [
      { name: "Toshkent shahar", gold: 1, silver: 1, bronze: 1, total: 3 },
      { name: "Toshkent viloyati", gold: 1, silver: 1, bronze: 1, total: 3 },
    ],
  },
  {
    rank: 9,
    sport: "FIBA 3X3 basketbol",
    gold: 2,
    silver: 2,
    bronze: 2,
    total: 6,
    regions: [
      { name: "Toshkent shahar", gold: 1, silver: 1, bronze: 1, total: 3 },
      { name: "Toshkent viloyati", gold: 1, silver: 1, bronze: 1, total: 3 },
    ],
  },
  {
    rank: 10,
    sport: "Badiiy gimnastika",
    gold: 1,
    silver: 1,
    bronze: 1,
    total: 3,
    regions: [{ name: "Toshkent shahar", gold: 1, silver: 1, bronze: 1, total: 3 }],
  },
];

type SportRegionAthlete = { name: string; org: string; program: string; score?: number };

const sportRegionAthletes: Record<
  string,
  Record<
    string,
    {
      oltin: SportRegionAthlete[];
      kumush: SportRegionAthlete[];
      bronza: SportRegionAthlete[];
    }
  >
> = {
  Boks: {
    "Toshkent viloyati": {
      oltin: [
        { name: "ABDUKАDIROV АSILBEK АBDUMАLIK O'G'LI", org: "Chirchiq olimpiya va paralimpiya sport turlariga tayyorlash markazi", program: "60", score: 60 },
        { name: "TURGUNOVA SAMIRA MADYAR QIZI", org: "Chirchiq olimpiya va paralimpiya sport turlariga tayyorlash markazi", program: "75", score: 75 },
        { name: "Usuba'liev Аsliddin Muzaffar o'g'li", org: "Angren shahar 2-sonli sport maktabi", program: "57", score: 57 },
        { name: "SULTАNBOEV АSАDBEK BOBOMURАT O'G'LI", org: "Respublika olimpiya va paralimpiya sport turlariga tayyorlash markazi", program: "80+", score: 80 },
        { name: "Nishonov Nodirbek G'ulom o'g'li", org: "Chirchiq olimpiya va paralimpiya sport turlariga tayyorlash markazi", program: "50", score: 50 },
      ],
      kumush: [
        { name: "IKROMOV ILG'ORJON ISAQJON-O'G'LI", org: "Chirchiq olimpiya va paralimpiya sport turlariga tayyorlash markazi", program: "54", score: 54 },
        { name: "Fovmidd'inov Javohir G'ulomidd'in o'g'li", org: "Boks bo'yicha Bahodir Jalolov sport mahorati maktabi", program: "50", score: 50 },
      ],
      bronza: [
        { name: "Xusanova Mubina Zohid qizi", org: "Sportning yakka kurash turlariga ixtisoslashtirilgan SM", program: "60", score: 60 },
        { name: "Nаzirova Feruza Nabi qizi", org: "Bekobod shahar sport maktabi", program: "80", score: 80 },
        { name: "SАYDULLАEV RUSHEN RUSTАMOVICH", org: "Sportning yakka kurash turlariga ixtisoslashtirilgan SM", program: "63", score: 63 },
        { name: "MAMURJONOV BEHRUZ ILYOS-O'G'LI", org: "Chirchiq olimpiya va paralimpiya sport turlariga tayyorlash markazi", program: "52", score: 52 },
        { name: "MAHMUDJОNOVA FARZОNABONU ELMUROD QIZI", org: "Chirchiq olimpiya va paralimpiya sport turlariga tayyorlash markazi", program: "50", score: 50 },
        { name: "Pulatova Mubinabonu Rustam qizi", org: "Sportning yakka kurash turlariga ixtisoslashtirilgan SM", program: "50", score: 50 },
      ],
    },
    "Namangan viloyati": {
      oltin: [
        { name: "Тошматов Жасур Шухрат ўғли", org: "Namangan viloyat sport maktabi", program: "60" },
        { name: "Юсупова Нилуфар Нодир қизи", org: "Namangan viloyat sport maktabi", program: "57" },
        { name: "Холиков Санжар Улуғбек ўғли", org: "Namangan shahar sport maktabi", program: "75" },
        { name: "Раҳимова Зулайхо Бахром қизи", org: "Namangan viloyat sport maktabi", program: "50" },
      ],
      kumush: [
        { name: "Матмусаев Фирдавс Алишер ўғли", org: "Namangan viloyat sport maktabi", program: "63" },
        { name: "Хасанова Малика Зафар қизи", org: "Namangan shahar sport maktabi", program: "48" },
        { name: "Кодиров Бобур Фарход ўғли", org: "Namangan viloyat sport maktabi", program: "80" },
        { name: "Нишонова Дилноза Рустам қизи", org: "Namangan viloyat sport maktabi", program: "54" },
        { name: "Усмонов Жамшид Баҳром ўғли", org: "Namangan shahar sport maktabi", program: "69" },
        { name: "Холматова Нилуфар Исмоил қизи", org: "Namangan viloyat sport maktabi", program: "60" },
      ],
      bronza: [{ name: "Юлдашев Акром Баҳодир ўғли", org: "Namangan viloyat sport maktabi", program: "54" }],
    },
    "Buxoro viloyati": {
      oltin: [
        { name: "Ibodulloev Asilbek Ilhom o'g'li", org: '"Qilichbozlik" federatsiyasi Buxoro viloyat bulimi', program: "shpaga-jamoaviy" },
        { name: "Naimov Firdavs Farruxovich", org: '"Qilichbozlik" federatsiyasi Buxoro viloyat bulimi', program: "shpaga-jamoaviy" },
        { name: "Hamroboeva Zarina Nurmatovna", org: '"Qilichbozlik" federatsiyasi Buxoro viloyat bulimi', program: "shpaga-jamoaviy" },
      ],
      kumush: [
        { name: "Yusupov Sherzod Bahodir", org: "Buxoro viloyat sport maktabi", program: "60" },
        { name: "Holmatova Zulfiya Nazar qizi", org: "Buxoro viloyat sport maktabi", program: "57" },
      ],
      bronza: [
        { name: "Toshmatov Akbar Rustam", org: "Buxoro viloyat sport maktabi", program: "69" },
        { name: "Nazarova Mohira Ali qizi", org: "Buxoro viloyat sport maktabi", program: "48" },
        { name: "Karimov Jasur Baxt o'g'li", org: "Buxoro viloyat sport maktabi", program: "75" },
        { name: "Ergasheva Dilnoza Timur qizi", org: "Buxoro viloyat sport maktabi", program: "54" },
        { name: "Mirzaev Bobur Alisher o'g'li", org: "Buxoro viloyat sport maktabi", program: "80" },
        { name: "Xoliqova Sarvinoz Javlon qizi", org: "Buxoro viloyat sport maktabi", program: "50" },
        { name: "Raxmatullayev Sardor Bahodir o'g'li", org: "Buxoro viloyat sport maktabi", program: "63" },
      ],
    },
  },
};

export default function PrezidentOlimpiadasiPage() {
  const [activeTab, setActiveTab] = useState<"hududlar" | "sport">("hududlar");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [expandedSport, setExpandedSport] = useState<string | null>("Boks");
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);

  const toggleSport = (sport: string) => {
    setExpandedSport((prev) => (prev === sport ? null : sport));
  };

  const toggleRegion = (key: string) => {
    setExpandedRegion((prev) => (prev === key ? null : key));
  };

  const totalGold = medalData.reduce((s, r) => s + r.gold, 0);
  const totalSilver = medalData.reduce((s, r) => s + r.silver, 0);
  const totalBronze = medalData.reduce((s, r) => s + r.bronze, 0);
  const totalAll = medalData.reduce((s, r) => s + r.total, 0);

  const totalGoldSport = sportData.reduce((s, r) => s + r.gold, 0);
  const totalSilverSport = sportData.reduce((s, r) => s + r.silver, 0);
  const totalBronzeSport = sportData.reduce((s, r) => s + r.bronze, 0);
  const totalAllSport = sportData.reduce((s, r) => s + r.total, 0);

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
          <div className="table-scroll">
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
            <span style={{ color: "#fff", fontSize: "0.8rem", fontWeight: 600, textAlign: "center" }}>#</span>
            <span style={{ color: "#fff", fontSize: "0.8rem", fontWeight: 600 }}>Hududlar</span>
            <span style={{ textAlign: "center", fontSize: "1.2rem" }}>🥇</span>
            <span style={{ textAlign: "center", fontSize: "1.2rem" }}>🥈</span>
            <span style={{ textAlign: "center", fontSize: "1.2rem" }}>🥉</span>
            <span style={{ color: "#fff", fontSize: "0.8rem", fontWeight: 600, textAlign: "center" }}>Jami</span>
            <span />
          </div>

          {activeTab === "hududlar" &&
            medalData.map((row, i) => (
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

          {activeTab === "sport" &&
            sportData.map((row, i) => {
              const isExp = expandedSport === row.sport;
              return (
                <div key={i}>
                  <div
                    onClick={() => toggleSport(row.sport)}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "70px 1fr 90px 90px 90px 100px 50px",
                      padding: "13px 16px",
                      gap: "8px",
                      alignItems: "center",
                      borderBottom: "1px solid #E2E8F0",
                      background: isExp ? "#EEF3FA" : i % 2 === 0 ? "#fff" : "#FAFBFC",
                      cursor: "pointer",
                    }}
                  >
                    <span style={{ textAlign: "center", fontSize: "0.9rem", color: "#718096", fontWeight: 600 }}>{row.rank}</span>
                    <span style={{ fontSize: "0.875rem", color: "#1A3C6B", fontWeight: 700 }}>{row.sport}</span>
                    <span style={{ textAlign: "center", fontWeight: 700, color: "#1A3C6B" }}>{row.gold}</span>
                    <span style={{ textAlign: "center", fontWeight: 700, color: "#718096" }}>{row.silver}</span>
                    <span style={{ textAlign: "center", fontWeight: 700, color: "#CD7F32" }}>{row.bronze}</span>
                    <span style={{ textAlign: "center", fontWeight: 800, color: "#1A3C6B", fontSize: "1rem" }}>{row.total}</span>
                    <span
                      style={{
                        textAlign: "center",
                        color: "#1A3C6B",
                        fontSize: "1rem",
                        display: "inline-block",
                        transition: "transform 0.2s",
                        transform: isExp ? "rotate(180deg)" : "none",
                      }}
                    >
                      ∧
                    </span>
                  </div>

                  {isExp && (
                    <div style={{ background: "#F8FAFF", borderBottom: "2px solid #1A3C6B" }}>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "70px 1fr 90px 90px 90px 100px 50px",
                          padding: "8px 16px",
                          gap: "8px",
                          background: "#E8EEF7",
                          borderBottom: "1px solid #D1D9E8",
                        }}
                      >
                        <span style={{ fontSize: "0.75rem", color: "#4A5568", fontWeight: 600, textAlign: "center" }}>#</span>
                        <span style={{ fontSize: "0.75rem", color: "#4A5568", fontWeight: 600 }}>Hudud</span>
                        <span style={{ textAlign: "center", fontSize: "1rem" }}>🥇</span>
                        <span style={{ textAlign: "center", fontSize: "1rem" }}>🥈</span>
                        <span style={{ textAlign: "center", fontSize: "1rem" }}>🥉</span>
                        <span style={{ fontSize: "0.75rem", color: "#4A5568", fontWeight: 600, textAlign: "center" }}>Jami</span>
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
                                gridTemplateColumns: "70px 1fr 90px 90px 90px 100px 50px",
                                padding: "11px 16px",
                                gap: "8px",
                                alignItems: "center",
                                borderBottom: "1px solid #EEF3FA",
                                background: isRegExp ? "#E8F0FE" : j % 2 === 0 ? "#fff" : "#F8FAFF",
                                cursor: athletes ? "pointer" : "default",
                              }}
                            >
                              <span style={{ textAlign: "center", fontSize: "0.85rem", color: "#718096" }}>{j + 1}</span>
                              <span style={{ fontSize: "0.82rem", color: "#1A3C6B", fontWeight: isRegExp ? 700 : 500 }}>{reg.name}</span>
                              <span style={{ textAlign: "center", fontWeight: 600, color: "#1A3C6B" }}>{reg.gold}</span>
                              <span style={{ textAlign: "center", fontWeight: 600, color: "#718096" }}>{reg.silver}</span>
                              <span style={{ textAlign: "center", fontWeight: 600, color: "#CD7F32" }}>{reg.bronze}</span>
                              <span style={{ textAlign: "center", fontWeight: 700, color: "#1A3C6B" }}>{reg.total}</span>
                              <span
                                style={{
                                  textAlign: "center",
                                  color: "#1A3C6B",
                                  fontSize: "0.9rem",
                                  display: "inline-block",
                                  transition: "transform 0.2s",
                                  transform: isRegExp ? "rotate(180deg)" : "none",
                                  opacity: athletes ? 1 : 0.3,
                                }}
                              >
                                ∧
                              </span>
                            </div>

                            {isRegExp && athletes && (
                              <div style={{ background: "#F0F4FF", padding: "20px 16px", borderBottom: "2px solid #2563EB" }}>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                                  <div>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "12px" }}>
                                      <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#F4A419", marginBottom: "4px" }} />
                                      <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>{reg.gold}</span>
                                      <span
                                        style={{
                                          fontSize: "0.72rem",
                                          color: "#718096",
                                          background: "#F1F5F9",
                                          padding: "2px 16px",
                                          borderRadius: "20px",
                                          marginTop: "3px",
                                        }}
                                      >
                                        Oltin
                                      </span>
                                    </div>
                                    {athletes.oltin.length === 0 ? (
                                      <p style={{ textAlign: "center", color: "#CBD5E0", fontSize: "0.8rem" }}>—</p>
                                    ) : (
                                      athletes.oltin.map((a, k) => (
                                        <div
                                          key={k}
                                          style={{
                                            display: "flex",
                                            gap: "10px",
                                            padding: "10px 12px",
                                            background: "#fff",
                                            borderRadius: "8px",
                                            marginBottom: "8px",
                                            border: "1px solid #E2E8F0",
                                            alignItems: "flex-start",
                                          }}
                                        >
                                          <div
                                            style={{
                                              width: "38px",
                                              height: "38px",
                                              borderRadius: "50%",
                                              flexShrink: 0,
                                              background: "linear-gradient(135deg, #1A3C6B, #2563EB)",
                                              display: "flex",
                                              alignItems: "center",
                                              justifyContent: "center",
                                              color: "#fff",
                                              fontSize: "0.65rem",
                                              fontWeight: 700,
                                              overflow: "hidden",
                                            }}
                                          >
                                            {a.name
                                              .split(" ")
                                              .filter(Boolean)
                                              .slice(0, 2)
                                              .map((w) => w[0])
                                              .join("")}
                                          </div>
                                          <div style={{ minWidth: 0 }}>
                                            <p style={{ margin: 0, fontSize: "0.78rem", fontWeight: 700, color: "#1A3C6B", lineHeight: 1.3 }}>{a.name}</p>
                                            <p style={{ margin: "3px 0 0", fontSize: "0.7rem", color: "#718096", lineHeight: 1.4 }}>{a.org}</p>
                                            {a.score && (
                                              <p style={{ margin: "2px 0 0", fontSize: "0.7rem", color: "#9CA3AF" }}>Sport dasturi: {a.score}</p>
                                            )}
                                          </div>
                                        </div>
                                      ))
                                    )}
                                  </div>

                                  <div>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "12px" }}>
                                      <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#9CA3AF", marginBottom: "4px" }} />
                                      <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>{reg.silver}</span>
                                      <span
                                        style={{
                                          fontSize: "0.72rem",
                                          color: "#718096",
                                          background: "#F1F5F9",
                                          padding: "2px 16px",
                                          borderRadius: "20px",
                                          marginTop: "3px",
                                        }}
                                      >
                                        Kumush
                                      </span>
                                    </div>
                                    {athletes.kumush.length === 0 ? (
                                      <p style={{ textAlign: "center", color: "#CBD5E0", fontSize: "0.8rem" }}>—</p>
                                    ) : (
                                      athletes.kumush.map((a, k) => (
                                        <div
                                          key={k}
                                          style={{
                                            display: "flex",
                                            gap: "10px",
                                            padding: "10px 12px",
                                            background: "#fff",
                                            borderRadius: "8px",
                                            marginBottom: "8px",
                                            border: "1px solid #E2E8F0",
                                            alignItems: "flex-start",
                                          }}
                                        >
                                          <div
                                            style={{
                                              width: "38px",
                                              height: "38px",
                                              borderRadius: "50%",
                                              flexShrink: 0,
                                              background: "linear-gradient(135deg, #6B7280, #9CA3AF)",
                                              display: "flex",
                                              alignItems: "center",
                                              justifyContent: "center",
                                              color: "#fff",
                                              fontSize: "0.65rem",
                                              fontWeight: 700,
                                            }}
                                          >
                                            {a.name
                                              .split(" ")
                                              .filter(Boolean)
                                              .slice(0, 2)
                                              .map((w) => w[0])
                                              .join("")}
                                          </div>
                                          <div style={{ minWidth: 0 }}>
                                            <p style={{ margin: 0, fontSize: "0.78rem", fontWeight: 700, color: "#1A3C6B", lineHeight: 1.3 }}>{a.name}</p>
                                            <p style={{ margin: "3px 0 0", fontSize: "0.7rem", color: "#718096", lineHeight: 1.4 }}>{a.org}</p>
                                            {a.score && (
                                              <p style={{ margin: "2px 0 0", fontSize: "0.7rem", color: "#9CA3AF" }}>Sport dasturi: {a.score}</p>
                                            )}
                                          </div>
                                        </div>
                                      ))
                                    )}
                                  </div>

                                  <div>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "12px" }}>
                                      <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#CD7F32", marginBottom: "4px" }} />
                                      <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>{reg.bronze}</span>
                                      <span
                                        style={{
                                          fontSize: "0.72rem",
                                          color: "#718096",
                                          background: "#F1F5F9",
                                          padding: "2px 16px",
                                          borderRadius: "20px",
                                          marginTop: "3px",
                                        }}
                                      >
                                        Bronza
                                      </span>
                                    </div>
                                    {athletes.bronza.length === 0 ? (
                                      <p style={{ textAlign: "center", color: "#CBD5E0", fontSize: "0.8rem" }}>—</p>
                                    ) : (
                                      athletes.bronza.map((a, k) => (
                                        <div
                                          key={k}
                                          style={{
                                            display: "flex",
                                            gap: "10px",
                                            padding: "10px 12px",
                                            background: "#fff",
                                            borderRadius: "8px",
                                            marginBottom: "8px",
                                            border: "1px solid #E2E8F0",
                                            alignItems: "flex-start",
                                          }}
                                        >
                                          <div
                                            style={{
                                              width: "38px",
                                              height: "38px",
                                              borderRadius: "50%",
                                              flexShrink: 0,
                                              background: "linear-gradient(135deg, #92400E, #CD7F32)",
                                              display: "flex",
                                              alignItems: "center",
                                              justifyContent: "center",
                                              color: "#fff",
                                              fontSize: "0.65rem",
                                              fontWeight: 700,
                                            }}
                                          >
                                            {a.name
                                              .split(" ")
                                              .filter(Boolean)
                                              .slice(0, 2)
                                              .map((w) => w[0])
                                              .join("")}
                                          </div>
                                          <div style={{ minWidth: 0 }}>
                                            <p style={{ margin: 0, fontSize: "0.78rem", fontWeight: 700, color: "#1A3C6B", lineHeight: 1.3 }}>{a.name}</p>
                                            <p style={{ margin: "3px 0 0", fontSize: "0.7rem", color: "#718096", lineHeight: 1.4 }}>{a.org}</p>
                                            {a.score && (
                                              <p style={{ margin: "2px 0 0", fontSize: "0.7rem", color: "#9CA3AF" }}>Sport dasturi: {a.score}</p>
                                            )}
                                          </div>
                                        </div>
                                      ))
                                    )}
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
            <span style={{ textAlign: "center", color: "#fff", fontWeight: 700 }}>
              {activeTab === "hududlar" ? totalGold : totalGoldSport}
            </span>
            <span style={{ textAlign: "center", color: "#fff", fontWeight: 700 }}>
              {activeTab === "hududlar" ? totalSilver : totalSilverSport}
            </span>
            <span style={{ textAlign: "center", color: "#fff", fontWeight: 700 }}>
              {activeTab === "hududlar" ? totalBronze : totalBronzeSport}
            </span>
            <span style={{ textAlign: "center", color: "#fff", fontWeight: 800, fontSize: "1rem" }}>
              {activeTab === "hududlar" ? totalAll : totalAllSport}
            </span>
            <span />
          </div>
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
            overflow: "hidden",
            border: "1px solid #E2E8F0",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          <div className="table-scroll">
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
        </div>

        <div style={{ height: "48px" }} />
      </div>
    </div>
  );
}
