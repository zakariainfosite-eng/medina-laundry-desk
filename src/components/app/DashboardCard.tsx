import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const tones = {
  new: "bg-status-new-soft text-status-new",
  progress: "bg-status-progress-soft text-status-progress",
  ready: "bg-status-ready-soft text-status-ready",
  late: "bg-status-late-soft text-status-late",
} as const;

export function DashboardCard({ label, value, icon, tone = "new", hint, highlight }: {
  label: string; value: ReactNode; icon: ReactNode; tone?: keyof typeof tones; hint?: ReactNode; highlight?: boolean;
}) {
  if (highlight)
    return (
      <div className="relative overflow-hidden rounded-2xl bg-hero p-5 text-primary-foreground shadow-elevated">
        <div className="absolute -end-8 -top-8 size-32 rounded-full bg-primary-foreground/10" />
        <div className="flex items-center justify-between">
          <span className="text-sm opacity-85">{label}</span>
          <span className="grid size-10 place-items-center rounded-xl bg-primary-foreground/15 text-lg">{icon}</span>
        </div>
        <div className="mt-4 text-3xl font-bold tracking-tight">{value}</div>
        {hint && <div className="mt-1 text-xs opacity-85">{hint}</div>}
      </div>
    );
  return (
    <div className="card-surface p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className={cn("grid size-10 place-items-center rounded-xl text-lg", tones[tone])}>{icon}</span>
      </div>
      <div className="mt-4 text-3xl font-bold tracking-tight">{value}</div>
      {hint && <div className="mt-1 text-xs text-muted-foreground">{hint}</div>}
    </div>
  );
}
