import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/I18nProvider";
import type { TimelineStep } from "@/data/mock";

const steps: { id: TimelineStep; icon: string; key: "tl_received" | "tl_washing" | "tl_drying" | "tl_ironing" | "tl_ready" | "tl_delivered" }[] = [
  { id: "received", icon: "📥", key: "tl_received" },
  { id: "washing", icon: "🧼", key: "tl_washing" },
  { id: "drying", icon: "🧺", key: "tl_drying" },
  { id: "ironing", icon: "👔", key: "tl_ironing" },
  { id: "ready", icon: "📦", key: "tl_ready" },
  { id: "delivered", icon: "✅", key: "tl_delivered" },
];

export function OrderTimeline({ current }: { current: TimelineStep }) {
  const { t } = useI18n();
  const idx = steps.findIndex((s) => s.id === current);
  return (
    <ol className="relative space-y-1">
      {steps.map((s, i) => {
        const done = i < idx;
        const active = i === idx;
        return (
          <li key={s.id} className="relative flex gap-4 pb-4 last:pb-0">
            {i < steps.length - 1 && (
              <span className={cn("absolute start-5 top-11 h-[calc(100%-2.5rem)] w-0.5 -translate-x-1/2 rtl:translate-x-1/2", done ? "bg-status-ready" : "bg-border")} />
            )}
            <span
              className={cn(
                "relative z-10 grid size-10 shrink-0 place-items-center rounded-full border-2 text-base",
                done && "border-status-ready bg-status-ready-soft",
                active && "border-accent bg-card ring-4 ring-accent/20",
                !done && !active && "border-border bg-muted opacity-60",
              )}
            >
              {done ? <Check className="size-4 text-status-ready" /> : s.icon}
            </span>
            <div className="pt-2">
              <div className={cn("text-sm font-semibold", !done && !active && "text-muted-foreground")}>{t(s.key)}</div>
              {active && <span className="mt-1 inline-block rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase text-accent-foreground">{t("current")}</span>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
