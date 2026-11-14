import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronsLeft, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/I18nProvider";
import { navItems, isActivePath } from "./nav";
import { Logo } from "./Logo";

export function AppSidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  const { t } = useI18n();
  const path = useRouterState({ select: (r) => r.location.pathname });
  return (
    <aside
      className={cn(
        "sticky top-0 hidden h-screen shrink-0 flex-col bg-sidebar text-sidebar-foreground transition-[width] duration-300 lg:flex",
        collapsed ? "w-20" : "w-64",
      )}
    >
      <div className="flex h-16 items-center justify-between px-5">
        <Logo compact={collapsed} />
      </div>
      <nav className="mt-4 flex-1 space-y-1 px-3">
        {navItems.map((item) => {
          const active = isActivePath(path, item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              title={t(item.key)}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-elevated"
                  : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                collapsed && "justify-center",
              )}
            >
              <item.icon className="size-5 shrink-0" />
              {!collapsed && <span className="truncate">{t(item.key)}</span>}
            </Link>
          );
        })}
      </nav>
      <div className="space-y-3 border-t border-sidebar-border p-3">
        {!collapsed && (
          <div className="rounded-xl bg-sidebar-accent p-3">
            <div className="text-xs text-sidebar-foreground/70">{t("business_profile")}</div>
            <div className="text-sm font-semibold text-sidebar-accent-foreground">PressingPro Maârif</div>
            <div className="text-xs text-sidebar-foreground/70">Casablanca</div>
          </div>
        )}
        <div className={cn("flex items-center gap-3", collapsed && "flex-col")}>
          <div className="grid size-9 shrink-0 place-items-center rounded-full bg-sidebar-primary text-sm font-bold text-sidebar-primary-foreground">ZE</div>
          {!collapsed && (
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-sidebar-accent-foreground">Zakaria E.</div>
              <div className="text-xs text-sidebar-foreground/70">{t("owner")}</div>
            </div>
          )}
          <Link to="/parametres" className="rounded-lg p-2 hover:bg-sidebar-accent" aria-label={t("nav_settings")}>
            <Settings className="size-4" />
          </Link>
          <button onClick={onToggle} className="rounded-lg p-2 hover:bg-sidebar-accent" aria-label="Toggle sidebar">
            <ChevronsLeft className={cn("size-4 transition-transform rtl:rotate-180", collapsed && "rotate-180 rtl:rotate-0")} />
          </button>
        </div>
      </div>
    </aside>
  );
}
