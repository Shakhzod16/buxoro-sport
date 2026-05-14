'use client'
import Image from 'next/image'
import { useData } from '@/context/DataContext'

export default function AnnouncementsSection() {
  const { announcements } = useData()
  if (announcements.length === 0) return null
  const featured = announcements[0];
  const sideList = announcements.slice(1);
  const fallbackImage = 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80'

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
          E&apos;LONLAR
        </h2>
      </div>

      <div
        className="announcements-grid"
        style={{
          gap: "20px",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            position: "relative",
            borderRadius: "12px",
            overflow: "hidden",
            width: "100%",
            height: "360px",
          }}
        >
          <Image
            src={featured.image || fallbackImage}
            alt={featured.title}
            fill
            sizes="(max-width: 900px) 100vw, 60vw"
            style={{
              objectFit: "cover",
            }}
            priority
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(15,36,71,0.25) 0%, rgba(15,36,71,0.85) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "14px",
              left: "14px",
              background: "#E63946",
              color: "#fff",
              fontSize: "0.75rem",
              fontWeight: 700,
              padding: "6px 10px",
              borderRadius: "6px",
            }}
          >
            {featured.date}
          </div>
          <div
            style={{
              position: "absolute",
              left: "16px",
              right: "16px",
              bottom: "16px",
              color: "#fff",
              fontSize: "1.4rem",
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            {featured.title}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {sideList.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "12px",
                background: "#fff",
                borderRadius: "10px",
                padding: "10px",
                boxShadow: "0 1px 5px rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src={item.image || fallbackImage}
                alt={item.title}
                width={110}
                height={82}
                style={{
                  borderRadius: "8px",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#718096",
                    marginBottom: "6px",
                  }}
                >
                  {item.date}
                </span>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.9rem",
                    color: "#2D3748",
                    fontWeight: 600,
                    lineHeight: 1.35,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
