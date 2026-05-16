import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <div className="page-hero">
      <div className="page-hero-inner">
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
        <h1 className="page-hero-title" style={{ margin: 0 }}>
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
