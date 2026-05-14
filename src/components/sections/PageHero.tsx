import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <div
      className="page-hero-shell"
      style={{
        background: "linear-gradient(135deg, #0F2447 0%, #1A3C6B 100%)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {breadcrumb && (
          <div style={{ display: "flex", gap: "8px", marginBottom: "12px", fontSize: "0.8rem", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
              Bosh sahifa
            </Link>
            {breadcrumb.map((b, i) => (
              <span key={`${b.href}-${i}`}>
                <span style={{ color: "rgba(255,255,255,0.4)", margin: "0 4px" }}>›</span>
                <Link
                  href={b.href}
                  style={{
                    color: i === breadcrumb.length - 1 ? "#fff" : "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                  }}
                >
                  {b.label}
                </Link>
              </span>
            ))}
          </div>
        )}
        <h1 className="page-hero-title" style={{ color: "#fff", fontSize: "1.75rem", fontWeight: 800, margin: 0 }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "8px", fontSize: "0.95rem", marginBottom: 0 }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
