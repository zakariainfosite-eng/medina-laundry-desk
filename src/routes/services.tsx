import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/PageHeader";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "PressingPro — nav_services" }, { name: "description", content: "PressingPro" }, { property: "og:title", content: "PressingPro" }, { property: "og:description", content: "Gestion intelligente de votre pressing" }] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return <PageHeader title={t("nav_services")} subtitle="Bientôt disponible" />;
}
