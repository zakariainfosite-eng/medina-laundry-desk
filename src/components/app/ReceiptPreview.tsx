import { useI18n } from "@/i18n/I18nProvider";
import { getCustomer, getService, type Order } from "@/data/mock";

export function ReceiptPreview({ order, businessName = "PRESSINGPRO", footer }: { order: Order; businessName?: string; footer?: string }) {
  const { t, lang } = useI18n();
  const c = getCustomer(order.customerId);
  const fmt = (n: number) => n.toLocaleString("fr-FR", { minimumFractionDigits: 2 });
  return (
    <div className="mx-auto w-full max-w-[300px] rounded-sm bg-card p-5 text-card-foreground shadow-elevated receipt-font text-xs" style={{ maskImage: "linear-gradient(transparent 0, #000 6px, #000 calc(100% - 6px), transparent 100%)" }}>
      <div className="text-center">
        <div className="text-lg font-bold tracking-[0.2em]">{businessName.toUpperCase()}</div>
        <div className="text-muted-foreground">Bd Zerktouni, Casablanca</div>
        <div className="text-muted-foreground" dir="ltr">05 22 00 00 00</div>
      </div>
      <Dash />
      <div>{t("col_order")} #{order.id}</div>
      <div>{t("col_customer")}: {c.name}</div>
      <div>{t("col_date")}: {order.dropoff}</div>
      <Dash />
      {order.items.map((i) => {
        const s = getService(i.serviceId);
        return (
          <div key={i.serviceId} className="flex justify-between">
            <span>{i.qty} × {s.name[lang]}</span>
            <span dir="ltr">{fmt(i.qty * i.unitPrice)}</span>
          </div>
        );
      })}
      <Dash />
      <div className="flex justify-between text-sm font-bold"><span>{t("total").toUpperCase()}</span><span dir="ltr">{fmt(order.total)} MAD</span></div>
      <div className="flex justify-between"><span>{t("paid")}:</span><span dir="ltr">{fmt(order.paid)} MAD</span></div>
      <div className="flex justify-between"><span>{t("remaining")}:</span><span dir="ltr">{fmt(order.total - order.paid)} MAD</span></div>
      <Dash />
      <div className="text-center">{footer ?? t("thanks")}</div>
      <div className="mt-3 flex h-8 justify-center gap-[2px]" aria-hidden>
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="bg-foreground" style={{ width: (i * 7) % 3 + 1 }} />
        ))}
      </div>
    </div>
  );
}
const Dash = () => <div className="my-2 border-t border-dashed border-foreground/40" />;
