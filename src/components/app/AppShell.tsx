import { useState, type ReactNode } from "react";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";
import { MobileNav } from "./MobileNav";

export function AppShell({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <AppHeader />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-28 pt-6 md:px-8 lg:pb-10">{children}</main>
      </div>
      <MobileNav />
    </div>
  );
}
