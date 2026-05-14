"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

import { BXS_SITE_CONFIG_KEY, SITE_CONFIG } from "@/lib/constants";
import { useResponsive } from "@/hooks/useResponsive";

export function BrandBar() {
  const { isMobile } = useResponsive();
  const [phone, setPhone] = useState(SITE_CONFIG.phone);
  const [orgName, setOrgName] = useState(SITE_CONFIG.name);

  useEffect(() => {
    const saved = localStorage.getItem(BXS_SITE_CONFIG_KEY);
    if (saved) {
      try {
        const config = JSON.parse(saved) as { phone?: string; name?: string };
        if (config.phone) setPhone(config.phone);
        if (config.name) setOrgName(config.name);
      } catch {
        /* ignore */
      }
    }
  }, []);

  return (
    <div style={{ borderBottom: "1px solid #E6EAF0", background: "#fff" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "26px 16px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{
          margin: 0,
          color: "#101828",
          fontWeight: 700,
          fontSize: isMobile ? "0.9rem" : "1.1rem",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}>{orgName}</p>

        <div style={{
          textAlign: "right",
          minWidth: isMobile ? 0 : 320,
          paddingRight: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "12px",
        }}>
          <div style={{ width: "1px", height: "56px", background: "#D7DCE3" }} />
          <div>
            <p style={{ margin: 0, color: "#232A34", fontSize: "14px", letterSpacing: "0.8px", textTransform: "uppercase", lineHeight: 1.05 }}>ISHONCH TELEFONI</p>

            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              style={{
                marginTop: "2px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                color: "#0B4A91",
                fontSize: isMobile ? "1.25rem" : "36px",
                fontWeight: 700,
                lineHeight: 1.05,
              }}
            >
              <Phone className="h-[20px] w-[20px]" />
              {isMobile ? null : <span>{phone}</span>}
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
