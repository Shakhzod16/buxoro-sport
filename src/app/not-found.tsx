export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <div style={{ fontSize: "5rem", marginBottom: "16px" }}>🏟️</div>
      <h1 style={{ fontSize: "3rem", fontWeight: 800, color: "#1A3C6B", margin: "0 0 8px" }}>404</h1>
      <p style={{ fontSize: "1.1rem", color: "#718096", marginBottom: "32px" }}>Sahifa topilmadi</p>
      <a
        href="/"
        style={{
          background: "#1A3C6B",
          color: "#fff",
          padding: "12px 32px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: 700,
        }}
      >
        Bosh sahifaga qaytish →
      </a>
    </div>
  );
}
