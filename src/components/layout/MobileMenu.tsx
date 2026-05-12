"use client";

import { useState, type ReactElement } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

import { NAV_ITEMS } from "@/data/navigation";

export function MobileMenu(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="relative">
        <button
          type="button"
          aria-label="Menyuni ochish"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
          className="block md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>

        <div
          className={[
            "absolute left-0 top-full z-50 w-screen bg-primary text-white shadow-lg transition-all duration-300",
            isOpen
              ? "pointer-events-auto max-h-[80vh] translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0",
          ].join(" ")}
        >
          <div className="mx-auto w-full max-w-7xl px-4 py-4">
            <div className="mb-3 flex justify-end">
              <button
                type="button"
                aria-label="Menyuni yopish"
                onClick={() => setIsOpen(false)}
                className="rounded-md p-2 text-white/90 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <Accordion.Root type="multiple" className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <Accordion.Item
                  key={item.href}
                  value={item.href}
                  className="border-b border-white/20 pb-1"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between py-2 text-left text-base font-medium">
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                  </Accordion.Header>

                  <Accordion.Content className="overflow-hidden">
                    <div className="space-y-1 pb-3 pl-3">
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-1 text-sm font-medium text-white transition hover:underline"
                      >
                        {item.label} bo&apos;limiga o&apos;tish
                      </Link>
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-1 text-sm text-white/90 transition hover:text-white hover:underline"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
