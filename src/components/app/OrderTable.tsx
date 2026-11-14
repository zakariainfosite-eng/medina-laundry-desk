import { Eye, MoreHorizontal } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { getCustomer, itemCount, type Order } from "@/data/mock";
import { OrderStatusBadge, PaymentBadge } from "./OrderStatusBadge";

export function OrderTable({ orders, onSelect, compact = false }: { orders: Order[]; onSelect?: (o: Order) => void; compact?: boolean }) {
  const { t, formatMAD } = useI18n();
  return (
    <>
      {/* Desktop table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-start text-xs uppercase tracking-wide text-muted-foreground">
              <th className="px-4 py-3 text-start font-medium">{t("col_order")}</th>
              <th className="px-4 py-3 text-start font-medium">{t("col_customer")}</th>
              {compact ? (
                <th className="px-4 py-3 text-start font-medium">{t("col_items")}</th>
              ) : (
                <>
                  <th className="px-4 py-3 text-start font-medium">{t("col_dropoff")}</th>
                  <th className="px-4 py-3 text-start font-medium">{t("col_due")}</th>
                </>
              )}
              <th className="px-4 py-3 text-start font-medium">{t("col_total")}</th>
              {!compact && <th className="px-4 py-3 text-start font-medium">{t("col_payment")}</th>}
              <th className="px-4 py-3 text-start font-medium">{t("col_status")}</th>
              {!compact && <th className="px-4 py-3 text-end font-medium">{t("col_actions")}</th>}
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => {
              const c = getCustomer(o.customerId);
              return (
                <tr key={o.id} onClick={() => onSelect?.(o)} className="cursor-pointer border-b last:border-0 transition-colors hover:bg-muted/60">
                  <td className="px-4 py-3.5 font-semibold text-primary dark:text-accent">#{o.id}</td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <Avatar name={c.name} />
                      <span className="font-medium">{c.name}</span>
                    </div>
                  </td>
                  {compact ? (
                    <td className="px-4 py-3.5 text-muted-foreground">{itemCount(o)} {t("articles")}</td>
                  ) : (
                    <>
                      <td className="px-4 py-3.5 text-muted-foreground">{o.dropoff}</td>
                      <td className="px-4 py-3.5 text-muted-foreground">{o.due}</td>
                    </>
                  )}
                  <td className="px-4 py-3.5 font-semibold">{formatMAD(o.total)}</td>
                  {!compact && <td className="px-4 py-3.5"><PaymentBadge status={o.payment} /></td>}
                  <td className="px-4 py-3.5"><OrderStatusBadge status={o.status} /></td>
                  {!compact && (
                    <td className="px-4 py-3.5 text-end">
                      <div className="inline-flex gap-1">
                        <button className="rounded-lg p-2 hover:bg-secondary" aria-label="view"><Eye className="size-4" /></button>
                        <button className="rounded-lg p-2 hover:bg-secondary" aria-label="more" onClick={(e) => e.stopPropagation()}><MoreHorizontal className="size-4" /></button>
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Mobile cards */}
      <div className="space-y-2 md:hidden">
        {orders.map((o) => {
          const c = getCustomer(o.customerId);
          return (
            <button key={o.id} onClick={() => onSelect?.(o)} className="flex w-full items-center gap-3 rounded-xl border bg-card p-3 text-start active:bg-muted">
              <Avatar name={c.name} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate font-semibold">{c.name}</span>
                  <span className="font-bold">{formatMAD(o.total)}</span>
                </div>
                <div className="mt-1 flex items-center justify-between gap-2 text-xs text-muted-foreground">
                  <span>#{o.id} · {itemCount(o)} {t("articles")}</span>
                  <OrderStatusBadge status={o.status} />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}

export function Avatar({ name, size = "sm" }: { name: string; size?: "sm" | "lg" }) {
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("");
  return (
    <span className={size === "lg" ? "grid size-14 shrink-0 place-items-center rounded-2xl bg-hero text-lg font-bold text-primary-foreground" : "grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground"}>
      {initials}
    </span>
  );
}
