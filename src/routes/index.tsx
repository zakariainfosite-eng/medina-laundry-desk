import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardCard } from "@/components/app/DashboardCard";
import { Section } from "@/components/app/Section";
import { RevenueChart } from "@/components/app/RevenueChart";
import { OrderTable } from "@/components/app/OrderTable";
import { useI18n } from "@/i18n/I18nProvider";
import { orders, todayKpis, weeklyRevenue } from "@/data/mock";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Tableau de bord — PressingPro" }, { name: "description", content: "Activité du jour de votre pressing" }, { property: "og:title", content: "Tableau de bord — PressingPro" }, { property: "og:description", content: "Activité du jour de votre pressing" }] }),
  component: Dashboard,
});

function Dashboard() {
  const { t, lang, formatMAD } = useI18n();
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold md:text-3xl">{t("greeting")}</h1><p className="text-sm text-muted-foreground">PressingPro · {t("today")}</p></div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <DashboardCard highlight label={t("kpi_revenue")} value={formatMAD(todayKpis.revenue)} icon="💰" hint={`+${todayKpis.revenueDelta}% ${t("vs_yesterday")}`} />
        <DashboardCard label={t("kpi_orders")} value={todayKpis.orders} icon="📦" tone="new" />
        <DashboardCard label={t("kpi_progress")} value={todayKpis.inProgress} icon="⏳" tone="progress" />
        <DashboardCard label={t("kpi_ready")} value={todayKpis.ready} icon="✅" tone="ready" />
      </div>
      <Section title={t("weekly_revenue")}><RevenueChart data={weeklyRevenue.map((d) => ({ label: d.day[lang], value: d.value }))} /></Section>
      <Section title={t("recent_orders")} action={<Link to="/commandes" className="text-sm font-medium text-accent">{t("view_all")}</Link>}>
        <OrderTable orders={orders.slice(0, 3)} compact />
      </Section>
    </div>
  );
}
