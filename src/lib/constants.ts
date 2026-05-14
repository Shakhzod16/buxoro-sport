/** Saved by admin Sozlamalar → `localStorage` (client-only). */
export const BXS_SITE_CONFIG_KEY = "bxs_site_config" as const;

export type SiteConfigPersisted = {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
};

export const SITE_CONFIG = {
  name: "Buxoro Viloyati Sport Boshqarmasi",
  shortName: "Buxoro Sport",
  url: "https://buxoro-sport.uz",
  phone: "+998 55 520 90 07",
  email: "info@buxoro-sport.uz",
  address: "Buxoro viloyati, Buxoro shahri",
  workHours: "Dushanba–Juma: 9:00–18:00",
};

export const PHONE_NUMBERS = [
  { label: "Ishonch telefoni", number: "+998 55 520 90 07" },
  { label: "Qabul xonasi", number: "+998 55 224 10 05" },
  { label: "Faks", number: "+998 55 224 10 06" },
];
