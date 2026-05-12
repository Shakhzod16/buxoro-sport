import { Phone } from "lucide-react";

import { SITE_CONFIG } from "@/lib/constants";

export function BrandBar() {
  return (
    <div style={{ borderBottom: "1px solid #E6EAF0", background: "#fff" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "26px 16px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ margin: 0, color: "#101828", fontWeight: 700, fontSize: "30px", letterSpacing: "2px", textTransform: "uppercase" }}>
          BUXORO VILOYATI SPORT BOSHQARMASI
        </p>

        <div style={{ textAlign: "right", minWidth: 320, paddingRight: "4px", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "12px" }}>
          <div style={{ width: "1px", height: "56px", background: "#D7DCE3" }} />
          <div>
          <p style={{ margin: 0, color: "#232A34", fontSize: "14px", letterSpacing: "0.8px", textTransform: "uppercase", lineHeight: 1.05 }}>
            ISHONCH TELEFONI
          </p>

          <a
            href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`}
            style={{
              marginTop: "2px",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              color: "#0B4A91",
              fontSize: "36px",
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            <Phone className="h-[20px] w-[20px]" />
            <span>{SITE_CONFIG.phone}</span>
          </a>

          <a
            href="#"
            style={{
              marginTop: "2px",
              display: "block",
              color: "#111827",
              textDecoration: "none",
              fontSize: "14px",
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              lineHeight: 1.05,
            }}
          >
            BARCHA RAQAMLAR
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
