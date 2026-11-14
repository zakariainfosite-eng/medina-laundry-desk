import { Bell, Search } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

export function AppHeader() {
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-30 border-b bg-background/85 backdrop-blur-lg">
      <div className="flex h-16 items-center gap-3 px-4 md:px-8">
        <div className="rounded-xl bg-sidebar p-1.5 lg:hidden">
          <Logo compact />
        </div>
        <div className="relative hidden max-w-md flex-1 md:block">
          <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder={t("search")}
            className="h-10 w-full rounded-xl border bg-card ps-10 pe-4 text-sm outline-none transition focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="font-bold lg:hidden md:hidden">PressingPro</div>
        <div className="ms-auto flex items-center gap-2">
          <LanguageSwitcher />
          <button className="relative grid size-10 place-items-center rounded-xl border bg-card hover:bg-muted" aria-label={t("notifications")}>
            <Bell className="size-4" />
            <span className="absolute end-2 top-2 size-2 rounded-full bg-status-late" />
          </button>
          <div className="hidden items-center gap-2 sm:flex">
            <div className="grid size-10 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">ZE</div>
          </div>
        </div>
      </div>
    </header>
  );
}
