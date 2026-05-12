import type { NavItem } from "@/types/navigation";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Tashkilot haqida",
    href: "/tashkilot",
    children: [
      { label: "Rahbariyat", href: "/tashkilot/rahbariyat" },
      { label: "Tuzilma", href: "/tashkilot/tuzilma" },
      { label: "Vazifalari", href: "/tashkilot/vazifalari" },
      { label: "Tarix", href: "/tashkilot/tarix" },
    ],
  },
  {
    label: "Faoliyat",
    href: "/faoliyat",
    children: [
      { label: "Musobaqalar", href: "/faoliyat/musobaqalar" },
      { label: "Natijalar", href: "/faoliyat/natijalar" },
      { label: "Sportchilar", href: "/faoliyat/sportchilar" },
      { label: "Sport turlari", href: "/faoliyat/sport-turlari" },
    ],
  },
  {
    label: "Davlat xizmatlari",
    href: "/davlat-xizmatlari",
    children: [
      {
        label: "Sport unvonlari",
        href: "/davlat-xizmatlari/sport-unvonlari",
      },
      { label: "Razryadlar", href: "/davlat-xizmatlari/razryadlar" },
      { label: "Litsenziya", href: "/davlat-xizmatlari/litsenziya" },
    ],
  },
  {
    label: "Hujjatlar",
    href: "/hujjatlar",
    children: [
      { label: "Qonunlar", href: "/hujjatlar/qonunlar" },
      { label: "Buyruqlar", href: "/hujjatlar/buyruqlar" },
      { label: "Reglamentlar", href: "/hujjatlar/reglamentlar" },
    ],
  },
  {
    label: "Ochiq ma'lumotlar",
    href: "/ochiq-malumotlar",
    children: [
      { label: "Statistika", href: "/ochiq-malumotlar" },
      { label: "Byudjet", href: "/ochiq-malumotlar/byudjet" },
      { label: "Hisobotlar", href: "/ochiq-malumotlar/hisobotlar" },
    ],
  },
  {
    label: "Axborot xizmatlari",
    href: "/axborot",
    children: [
      { label: "Yangiliklar", href: "/axborot" },
      { label: "Press-reliz", href: "/axborot" },
      { label: "Media", href: "/axborot" },
    ],
  },
  {
    label: "Bog'lanish",
    href: "/boglanish",
    children: [
      { label: "Manzil", href: "/boglanish" },
      { label: "Murojaat", href: "/boglanish" },
      { label: "Qabul vaqti", href: "/boglanish" },
    ],
  },
];
