import { Phone, Printer, CheckCircle2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/I18nProvider";
import { getCustomer, getService, type Order } from "@/data/mock";
import { OrderStatusBadge, PaymentBadge } from "./OrderStatusBadge";
import { OrderTimeline } from "./OrderTimeline";
import { ReceiptPreview } from "./ReceiptPreview";
import { Avatar } from "./OrderTable";
import { toast } from "sonner";

export function OrderDetailsSheet({ order, onClose }: { order: Order | null; onClose: () => void }) {
  const { t, dir, lang, formatMAD } = useI18n();
  const c = order ? getCustomer(order.customerId) : null;
  return (
    <Sheet open={!!order} onOpenChange={(o) => !o && onClose()}>
      <SheetContent side={dir === "rtl" ? "left" : "right"} dir={dir} className="w-full overflow-y-auto sm:max-w-xl">
        {order && c && (
          <>
            <SheetHeader className="text-start">
              <div className="text-xs text-muted-foreground">{t("order_details")}</div>
              <SheetTitle className="flex items-center gap-3 text-2xl">#{order.id} <OrderStatusBadge status={order.status} /></SheetTitle>
            </SheetHeader>
            <div className="space-y-5 px-4 pb-8">
              <div className="rounded-2xl border p-4">
                <div className="mb-3 text-xs font-semibold uppercase text-muted-foreground">{t("customer_info")}</div>
                <div className="flex items-center gap-3">
                  <Avatar name={c.name} size="lg" />
                  <div>
                    <div className="font-semibold">{c.name}</div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground" dir="ltr"><Phone className="size-3.5" />{c.phone}</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border p-4">
                <div className="mb-3 text-xs font-semibold uppercase text-muted-foreground">{t("sec_articles")}</div>
                {order.items.map((i) => {
                  const s = getService(i.serviceId);
                  return (
                    <div key={i.serviceId} className="flex items-center justify-between py-1.5 text-sm">
                      <span>{s.icon} {i.qty} × {s.name[lang]}</span>
                      <span className="font-medium">{formatMAD(i.qty * i.unitPrice)}</span>
                    </div>
                  );
                })}
                <div className="mt-2 flex items-center justify-between border-t pt-3">
                  <PaymentBadge status={order.payment} />
                  <span className="text-lg font-bold">{formatMAD(order.total)}</span>
                </div>
              </div>
              <div className="rounded-2xl border p-4">
                <div className="mb-4 text-xs font-semibold uppercase text-muted-foreground">{t("timeline")}</div>
                <OrderTimeline current={order.step} />
              </div>
              <div className="rounded-2xl bg-muted p-4"><ReceiptPreview order={order} /></div>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" onClick={() => toast(t("print_receipt"))}><Printer />{t("print_receipt")}</Button>
                <Button onClick={() => toast.success(t("mark_ready"))}><CheckCircle2 />{t("mark_ready")}</Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
