"use client";

import { useState } from "react";
import { useData } from "@/context/DataContext";

export default function AdminAnnouncementsPage() {
  const { announcements, addAnnouncement, deleteAnnouncement } = useData();
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const resetForm = () => {
    setTitle("");
    setContent("");
    setImage("");
    setShowForm(false);
  };

  const handleAdd = () => {
    if (!title.trim()) return;
    addAnnouncement({
      title: title.trim(),
      content: content.trim(),
      image: image.trim(),
      date: new Date().toLocaleDateString("uz-UZ"),
    });
    resetForm();
  };

  const handleDelete = (id: number) => {
    if (confirm("O'chirishni tasdiqlaysizmi?")) deleteAnnouncement(id);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0F2447", margin: 0 }}>E&apos;lonlar</h1>
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
          <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem", marginBottom: 6 }}>Sarlavha</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px",
              marginBottom: 14,
              borderRadius: 8,
              border: "1px solid #E2E8F0",
              boxSizing: "border-box",
            }}
          />
          <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem", marginBottom: 6 }}>Matn</label>
          <textarea
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px",
              marginBottom: 14,
              borderRadius: 8,
              border: "1px solid #E2E8F0",
              resize: "vertical",
              boxSizing: "border-box",
            }}
          />
          <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem", marginBottom: 6 }}>Rasm URL</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://..."
            style={{
              width: "100%",
              padding: "10px 12px",
              marginBottom: 16,
              borderRadius: 8,
              border: "1px solid #E2E8F0",
              boxSizing: "border-box",
            }}
          />
          <div style={{ display: "flex", gap: 10 }}>
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
              {["#", "Sarlavha", "Sana", "Amallar"].map((h) => (
                <th key={h} style={{ textAlign: "left", padding: "10px 12px", fontSize: "0.8rem", color: "#718096", fontWeight: 600 }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {announcements.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ padding: 20, color: "#718096" }}>
                  E&apos;lonlar yo&apos;q.
                </td>
              </tr>
            ) : (
              announcements.map((a, i) => (
                <tr key={a.id} style={{ borderBottom: "1px solid #F7FAFC" }}>
                  <td style={{ padding: "12px", color: "#718096", fontSize: "0.8rem" }}>{i + 1}</td>
                  <td style={{ padding: "12px", fontWeight: 600, color: "#2D3748" }}>{a.title}</td>
                  <td style={{ padding: "12px", fontSize: "0.85rem", color: "#718096" }}>{a.date}</td>
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
              ))
            )}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
