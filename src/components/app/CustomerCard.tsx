import { Package, Phone, Wallet } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import type { Customer } from "@/data/mock";
import { Avatar } from "./OrderTable";

export function CustomerCard({ customer }: { customer: Customer }) {
  const { t, formatMAD } = useI18n();
  return (
    <div className="card-surface p-5 transition hover:-translate-y-0.5 hover:shadow-elevated">
      <div className="flex items-center gap-3">
        <Avatar name={customer.name} size="lg" />
        <div className="min-w-0">
          <div className="truncate font-semibold">{customer.name}</div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground" dir="ltr"><Phone className="size-3.5" />{customer.phone}</div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-muted p-3">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><Package className="size-3.5" />{t("orders_count")}</div>
          <div className="mt-1 font-bold">{customer.orders}</div>
        </div>
        <div className="rounded-xl bg-muted p-3">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><Wallet className="size-3.5" />{t("total_spent")}</div>
          <div className="mt-1 font-bold">{formatMAD(customer.totalSpent)}</div>
        </div>
      </div>
      <div className="mt-3 text-xs text-muted-foreground">{t("last_order")}: <span className="font-medium text-foreground">{customer.lastOrder}</span></div>
    </div>
  );
}
