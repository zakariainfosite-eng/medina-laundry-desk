import { Sparkles } from "lucide-react";
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground shadow-elevated">
        <Sparkles className="size-5" />
      </div>
      {!compact && (
        <div className="min-w-0">
          <div className="text-base font-bold tracking-tight text-sidebar-accent-foreground">PressingPro</div>
          <div className="truncate text-[11px] text-sidebar-foreground/70">Gestion intelligente</div>
        </div>
      )}
    </div>
  );
}
