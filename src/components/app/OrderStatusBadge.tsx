import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/I18nProvider";
import type { OrderStatus, PaymentStatus } from "@/data/mock";

const statusStyle: Record<OrderStatus, string> = {
  new: "bg-status-new-soft text-status-new",
  progress: "bg-status-progress-soft text-status-progress",
  ready: "bg-status-ready-soft text-status-ready",
  late: "bg-status-late-soft text-status-late",
  delivered: "bg-muted text-muted-foreground",
};
const statusKey = { new: "status_new", progress: "status_progress", ready: "status_ready", late: "status_late", delivered: "status_delivered" } as const;

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const { t } = useI18n();
  return (
    <span className={cn("inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold", statusStyle[status])}>
      <span className="size-1.5 rounded-full bg-current" />
      {t(statusKey[status])}
    </span>
  );
}

const payStyle: Record<PaymentStatus | "pending", string> = {
  paid: "bg-status-ready-soft text-status-ready",
  partial: "bg-status-progress-soft text-status-progress",
  unpaid: "bg-status-late-soft text-status-late",
  pending: "bg-status-new-soft text-status-new",
};
const payKey = { paid: "pay_paid", partial: "pay_partial", unpaid: "pay_unpaid", pending: "pay_pending" } as const;

export function PaymentBadge({ status }: { status: PaymentStatus | "pending" }) {
  const { t } = useI18n();
  return (
    <span className={cn("inline-flex whitespace-nowrap rounded-md px-2 py-0.5 text-xs font-medium", payStyle[status])}>{t(payKey[status])}</span>
  );
}
