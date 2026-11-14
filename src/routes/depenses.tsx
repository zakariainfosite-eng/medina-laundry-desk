import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/PageHeader";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/depenses")({
  head: () => ({ meta: [{ title: "PressingPro — nav_expenses" }, { name: "description", content: "PressingPro" }, { property: "og:title", content: "PressingPro" }, { property: "og:description", content: "Gestion intelligente de votre pressing" }] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return <PageHeader title={t("nav_expenses")} subtitle="Bientôt disponible" />;
}
