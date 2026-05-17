"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

import { BXS_SITE_CONFIG_KEY, SITE_CONFIG } from "@/lib/constants";

export function BrandBar() {
  const [phone, setPhone] = useState(SITE_CONFIG.phone);
  const [orgName, setOrgName] = useState(SITE_CONFIG.name);

  useEffect(() => {
    const saved = localStorage.getItem(BXS_SITE_CONFIG_KEY);
    if (saved) {
      try {
        const config = JSON.parse(saved) as { phone?: string; name?: string };
        /* eslint-disable react-hooks/set-state-in-effect -- load saved branding once on mount */
        if (config.phone) setPhone(config.phone);
        if (config.name) setOrgName(config.name);
        /* eslint-enable react-hooks/set-state-in-effect */
      } catch {
        /* ignore */
      }
    }
  }, []);

  return (
    <div style={{ borderBottom: "1px solid #E6EAF0", background: "#fff" }}>
      <div
        className="brandbar-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "26px 16px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p
          className="brandbar-org-name"
          style={{
            margin: 0,
            color: "#101828",
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          {orgName}
        </p>

        <div
          className="brandbar-phone-block"
          style={{
            textAlign: "right",
            paddingRight: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "12px",
          }}
        >
          <div style={{ width: "1px", height: "56px", background: "#D7DCE3" }} />
          <div>
            <p style={{ margin: 0, color: "#232A34", fontSize: "14px", letterSpacing: "0.8px", textTransform: "uppercase", lineHeight: 1.05 }}>
              ISHONCH TELEFONI
            </p>

            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="brandbar-phone"
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
              <span className="hide-mobile">{phone}</span>
            </a>

            <a
              href="/boglanish#raqamlar"
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
