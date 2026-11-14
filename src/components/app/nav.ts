import { LayoutDashboard, Package, Users, Shirt, CreditCard, Wallet, BarChart3, Settings } from "lucide-react";
import type { DictKey } from "@/i18n/dictionaries";

export const navItems: { to: string; key: DictKey; icon: typeof LayoutDashboard }[] = [
  { to: "/", key: "nav_dashboard", icon: LayoutDashboard },
  { to: "/commandes", key: "nav_orders", icon: Package },
  { to: "/clients", key: "nav_customers", icon: Users },
  { to: "/services", key: "nav_services", icon: Shirt },
  { to: "/paiements", key: "nav_payments", icon: CreditCard },
  { to: "/depenses", key: "nav_expenses", icon: Wallet },
  { to: "/statistiques", key: "nav_stats", icon: BarChart3 },
  { to: "/parametres", key: "nav_settings", icon: Settings },
];

export const isActivePath = (current: string, to: string) =>
  to === "/" ? current === "/" : current === to || current.startsWith(to + "/");
