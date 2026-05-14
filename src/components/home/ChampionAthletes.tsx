'use client'
import { useData } from '@/context/DataContext'
import { useResponsive } from '@/hooks/useResponsive'

export default function ChampionAthletes() {
  const { athletes } = useData()
  const { isMobile, isTablet } = useResponsive()

  const getGradient = (medal: string) => {
    if (medal === 'Oltin') return 'linear-gradient(135deg, #1A3C6B, #2563EB)'
    if (medal === 'Kumush') return 'linear-gradient(135deg, #334155, #94A3B8)'
    return 'linear-gradient(135deg, #7C2D12, #C2410C)'
  }

  return (
    <section style={{ marginTop: "48px" }}>
      <div
        style={{
          borderLeft: "4px solid #E63946",
          paddingLeft: "12px",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#1A3C6B",
            fontSize: "1.25rem",
            fontWeight: 800,
            textTransform: "uppercase",
          }}
        >
          CHEMPION SPORTCHILAR
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(3, 1fr)" : "repeat(4, 1fr)",
          gap: "16px",
        }}
      >
        {athletes.map((athlete) => (
          <div
            key={athlete.id}
            style={{
              background: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                background: getGradient(athlete.medal),
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  background: "#F4A419",
                  color: "#0F2447",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "4px 8px",
                  borderRadius: "999px",
                }}
              >
                {athlete.medal}
              </div>

              <div
                style={{
                  position: "absolute",
                  left: "10px",
                  bottom: "10px",
                  background: "rgba(15,36,71,0.85)",
                  color: "#fff",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  padding: "4px 8px",
                  borderRadius: "999px",
                }}
              >
                {athlete.sport}
              </div>
            </div>

            <div style={{ padding: "12px" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "#2D3748",
                }}
              >
                {athlete.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
