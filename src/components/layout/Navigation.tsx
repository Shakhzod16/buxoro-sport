"use client";

import { useState, type ReactElement } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { NAV_ITEMS } from "@/data/navigation";

export function Navigation(): ReactElement {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <nav className="hidden border-b border-[#D9DEE6] bg-[#F2F4F6] md:block">
      <div className="mx-auto flex h-[38px] max-w-[1280px] items-center gap-0 px-4">
        {NAV_ITEMS.map((item) => {
          const isOpen = openItem === item.href;

          return (
            <DropdownMenu.Root
              key={item.href}
              open={isOpen}
              onOpenChange={(nextOpen) => setOpenItem(nextOpen ? item.href : null)}
            >
              <DropdownMenu.Trigger asChild>
                <button
                  type="button"
                  onMouseEnter={() => setOpenItem(item.href)}
                  className={[
                    "inline-flex h-full items-center gap-1 px-3 text-[14px] font-medium uppercase transition",
                    "hover:bg-[#0B4A91] hover:text-white",
                    isOpen
                      ? "bg-[#0B4A91] text-white"
                      : "text-[#1B1F27]",
                  ].join(" ")}
                >
                  <span>{item.label}</span>
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              </DropdownMenu.Trigger>

              {item.children && item.children.length > 0 ? (
                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    align="start"
                    sideOffset={0}
                    onMouseLeave={() => setOpenItem(null)}
                    className="z-50 min-w-56 border border-[#0A3E79] bg-[#0B4A91] p-0 shadow-lg"
                  >
                    {item.children.map((child) => (
                      <DropdownMenu.Item key={child.href} asChild>
                        <Link
                          href={child.href}
                          className="block border-b border-white/15 px-3 py-2 text-[13px] text-white outline-none transition hover:bg-[#07376D]"
                        >
                          {child.label}
                        </Link>
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              ) : null}
            </DropdownMenu.Root>
          );
        })}
      </div>
    </nav>
  );
}
