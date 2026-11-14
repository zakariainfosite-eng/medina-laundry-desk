import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Menu, Package, Plus, Users } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/I18nProvider";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { navItems, isActivePath } from "./nav";

export function MobileNav() {
  const { t, dir } = useI18n();
  const path = useRouterState({ select: (r) => r.location.pathname });
  const [open, setOpen] = useState(false);
  const tab = (to: string, label: string, Icon: typeof Package) => {
    const active = to === "/commandes" ? path === "/commandes" : isActivePath(path, to);
    return (
      <Link to={to} className={cn("flex flex-1 flex-col items-center gap-1 py-2 text-[11px] font-medium", active ? "text-accent" : "text-muted-foreground")}>
        <Icon className="size-5" />
        <span className="truncate">{label}</span>
      </Link>
    );
  };
  return (
    <>
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg lg:hidden">
        <div className="mx-auto flex max-w-lg items-end px-2">
          {tab("/", t("nav_dashboard"), LayoutDashboard)}
          {tab("/commandes", t("nav_orders"), Package)}
          <Link to="/commandes/nouvelle" className="-mt-6 flex flex-1 flex-col items-center gap-1 text-[11px] font-medium text-primary">
            <span className="grid size-14 place-items-center rounded-2xl bg-hero text-primary-foreground shadow-elevated">
              <Plus className="size-6" />
            </span>
            <span className="truncate">{t("new_order")}</span>
          </Link>
          {tab("/clients", t("nav_customers"), Users)}
          <button onClick={() => setOpen(true)} className="flex flex-1 flex-col items-center gap-1 py-2 text-[11px] font-medium text-muted-foreground">
            <Menu className="size-5" />
            <span>{t("nav_more")}</span>
          </button>
        </div>
      </nav>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="bottom" dir={dir} className="rounded-t-3xl">
          <SheetHeader><SheetTitle>PressingPro</SheetTitle></SheetHeader>
          <div className="grid grid-cols-3 gap-3 p-4 pt-0">
            {navItems.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
                className={cn("flex flex-col items-center gap-2 rounded-2xl border p-3 text-center text-xs font-medium", isActivePath(path, n.to) ? "border-accent bg-status-new-soft text-primary" : "bg-card")}>
                <n.icon className="size-5" />
                {t(n.key)}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
