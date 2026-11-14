import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
export function Section({ title, action, children, className }: { title?: ReactNode; action?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={cn("card-surface p-5", className)}>
      {(title || action) && (
        <div className="mb-4 flex items-center justify-between gap-2">
          <h2 className="font-semibold">{title}</h2>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}
