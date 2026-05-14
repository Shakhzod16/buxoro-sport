"use client";

import { useState } from "react";
import { useData } from "@/context/DataContext";
import type { Athlete } from "@/types/models";

export default function AdminAthletesPage() {
  const { athletes, addAthlete, deleteAthlete } = useData();
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [sport, setSport] = useState("");
  const [medal, setMedal] = useState<Athlete["medal"]>("Oltin");
  const [year, setYear] = useState(2025);

  const resetForm = () => {
    setName("");
    setSport("");
    setMedal("Oltin");
    setYear(2025);
    setShowForm(false);
  };

  const handleAdd = () => {
    if (!name.trim()) return;
    addAthlete({
      name: name.trim(),
      sport: sport.trim() || "—",
      medal,
      year,
      image: "",
    });
    resetForm();
  };

  const handleDelete = (id: number) => {
    if (confirm("O'chirishni tasdiqlaysizmi?")) deleteAthlete(id);
  };

  const medalBadge = (m: Athlete["medal"]) => {
    if (m === "Oltin") return { bg: "#FEF3C7", color: "#92400E" };
    if (m === "Kumush") return { bg: "#F1F5F9", color: "#334155" };
    return { bg: "#FED7AA", color: "#92400E" };
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0F2447", margin: 0 }}>Sportchilar</h1>
        <button
          type="button"
          onClick={() => setShowForm(!showForm)}
          style={{
            background: "#1A3C6B",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: 8,
            border: "none",
            fontWeight: 600,
            fontSize: "0.875rem",
            cursor: "pointer",
          }}
        >
          + Yangi qo&apos;shish
        </button>
      </div>

      {showForm && (
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            padding: 24,
            marginBottom: 24,
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            border: "1px solid #E2E8F0",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div>
              <label style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", marginBottom: 6 }}>Ism</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #E2E8F0", boxSizing: "border-box" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", marginBottom: 6 }}>Sport</label>
              <input
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #E2E8F0", boxSizing: "border-box" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", marginBottom: 6 }}>Medal</label>
              <select
                value={medal}
                onChange={(e) => setMedal(e.target.value as Athlete["medal"])}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #E2E8F0", boxSizing: "border-box" }}
              >
                <option value="Oltin">Oltin</option>
                <option value="Kumush">Kumush</option>
                <option value="Bronza">Bronza</option>
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", marginBottom: 6 }}>Yil</label>
              <input
                type="number"
                min={2020}
                max={2030}
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #E2E8F0", boxSizing: "border-box" }}
              />
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
            <button
              type="button"
              onClick={handleAdd}
              style={{
                background: "#1A3C6B",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: 8,
                border: "none",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Qo&apos;shish
            </button>
            <button
              type="button"
              onClick={resetForm}
              style={{
                background: "#fff",
                color: "#64748B",
                padding: "10px 20px",
                borderRadius: 8,
                border: "1px solid #E2E8F0",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Bekor
            </button>
          </div>
        </div>
      )}

      <div style={{ background: "#fff", borderRadius: 12, padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
        <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#F7FAFC" }}>
              {["#", "Ism", "Sport turi", "Medal", "Yil", "Amallar"].map((h) => (
                <th key={h} style={{ textAlign: "left", padding: "10px 12px", fontSize: "0.8rem", color: "#718096", fontWeight: 600 }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {athletes.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ padding: 20, color: "#718096" }}>
                  Sportchilar yo&apos;q.
                </td>
              </tr>
            ) : (
              athletes.map((a, i) => {
                const mb = medalBadge(a.medal);
                return (
                  <tr key={a.id} style={{ borderBottom: "1px solid #F7FAFC" }}>
                    <td style={{ padding: "12px", color: "#718096", fontSize: "0.8rem" }}>{i + 1}</td>
                    <td style={{ padding: "12px", fontWeight: 600, color: "#2D3748" }}>{a.name}</td>
                    <td style={{ padding: "12px", fontSize: "0.875rem" }}>{a.sport}</td>
                    <td style={{ padding: "12px" }}>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          padding: "4px 10px",
                          borderRadius: 20,
                          background: mb.bg,
                          color: mb.color,
                        }}
                      >
                        {a.medal}
                      </span>
                    </td>
                    <td style={{ padding: "12px", fontSize: "0.875rem" }}>{a.year}</td>
                    <td style={{ padding: "12px" }}>
                      <button
                        type="button"
                        onClick={() => handleDelete(a.id)}
                        style={{
                          fontSize: "0.8rem",
                          color: "#E63946",
                          background: "none",
                          border: "1px solid #E63946",
                          padding: "4px 12px",
                          borderRadius: 6,
                          cursor: "pointer",
                        }}
                      >
                        O&apos;chirish
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
