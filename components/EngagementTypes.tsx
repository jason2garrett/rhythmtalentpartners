"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ENGAGEMENT_TYPES } from "@/lib/content";

export function EngagementTypes() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="grid gap-4">
      {ENGAGEMENT_TYPES.map((e) => {
        const isOpen = open === e.value;
        const panelId = `engagement-${e.value}`;
        return (
          <div
            key={e.value}
            className={`rounded-2xl border bg-card transition-colors ${
              isOpen ? "border-secondary/40" : "border-border hover:border-secondary/40"
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : e.value)}
              className="flex w-full items-start justify-between gap-4 rounded-2xl p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span>
                <span className="block font-heading text-lg font-semibold text-foreground">
                  {e.label}
                </span>
                <span className="mt-1.5 block font-body text-sm text-muted-foreground">
                  {e.desc}
                </span>
              </span>
              <ChevronDown
                size={20}
                className={`mt-1 shrink-0 text-secondary transition-transform duration-300 motion-reduce:transition-none ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-label={e.label}
              className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="mx-6 border-t border-border pb-6 pt-4 font-body text-[15px] leading-relaxed text-foreground">
                  {e.detail}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
