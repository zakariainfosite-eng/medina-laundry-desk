// Mock data — replace with API calls later. Shapes mirror a future backend schema.
export type OrderStatus = "new" | "progress" | "ready" | "late" | "delivered";
export type PaymentStatus = "paid" | "partial" | "unpaid";
export type PaymentMethod = "cash" | "card" | "transfer";
export type TimelineStep = "received" | "washing" | "drying" | "ironing" | "ready" | "delivered";

export interface Customer {
  id: string;
  name: string;
  phone: string;
  orders: number;
  totalSpent: number;
  lastOrder: string;
}

export interface OrderItem {
  serviceId: string;
  qty: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  customerId: string;
  items: OrderItem[];
  dropoff: string;
  due: string;
  total: number;
  paid: number;
  payment: PaymentStatus;
  status: OrderStatus;
  step: TimelineStep;
  priority: "normal" | "express";
}

export type ServiceCategory = "clothes" | "special" | "home";
export interface Service {
  id: string;
  name: { fr: string; ar: string };
  icon: string;
  price: number;
  category: ServiceCategory;
}

export const services: Service[] = [
  { id: "chemise", name: { fr: "Chemise", ar: "قميص" }, icon: "👔", price: 15, category: "clothes" },
  { id: "pantalon", name: { fr: "Pantalon", ar: "سروال" }, icon: "👖", price: 20, category: "clothes" },
  { id: "tshirt", name: { fr: "T-shirt", ar: "تيشيرت" }, icon: "👕", price: 12, category: "clothes" },
  { id: "costume", name: { fr: "Costume", ar: "بدلة" }, icon: "🤵", price: 80, category: "clothes" },
  { id: "manteau", name: { fr: "Manteau", ar: "معطف" }, icon: "🧥", price: 50, category: "special" },
  { id: "robe", name: { fr: "Robe", ar: "فستان" }, icon: "👗", price: 40, category: "special" },
  { id: "djellaba", name: { fr: "Djellaba", ar: "جلابة" }, icon: "🥻", price: 45, category: "special" },
  { id: "couverture", name: { fr: "Couverture", ar: "غطاء" }, icon: "🛏️", price: 80, category: "home" },
  { id: "rideaux", name: { fr: "Rideaux", ar: "ستائر" }, icon: "🪟", price: 60, category: "home" },
];

export const customers: Customer[] = [
  { id: "c1", name: "Mohamed Amrani", phone: "06 12 34 56 78", orders: 15, totalSpent: 4250, lastOrder: "14/11/2026" },
  { id: "c2", name: "Sara El Idrissi", phone: "06 61 22 90 14", orders: 9, totalSpent: 1980, lastOrder: "14/11/2026" },
  { id: "c3", name: "Youssef Alaoui", phone: "07 70 45 12 33", orders: 22, totalSpent: 6120, lastOrder: "14/11/2026" },
  { id: "c4", name: "Fatima Zahra Bennani", phone: "06 55 87 21 09", orders: 6, totalSpent: 1340, lastOrder: "12/11/2026" },
  { id: "c5", name: "Karim Tazi", phone: "06 78 33 44 10", orders: 11, totalSpent: 2890, lastOrder: "10/11/2026" },
  { id: "c6", name: "Nadia Chraibi", phone: "07 61 09 88 52", orders: 4, totalSpent: 760, lastOrder: "08/11/2026" },
  { id: "c7", name: "Omar Berrada", phone: "06 20 14 77 63", orders: 18, totalSpent: 5210, lastOrder: "13/11/2026" },
  { id: "c8", name: "Imane Fassi", phone: "06 47 52 36 81", orders: 3, totalSpent: 420, lastOrder: "05/11/2026" },
];

export const orders: Order[] = [
  { id: "PR-1025", customerId: "c1", items: [{ serviceId: "chemise", qty: 3, unitPrice: 15 }, { serviceId: "pantalon", qty: 2, unitPrice: 20 }], dropoff: "13/11/2026", due: "15/11/2026", total: 120, paid: 50, payment: "partial", status: "progress", step: "ironing", priority: "normal" },
  { id: "PR-1026", customerId: "c2", items: [{ serviceId: "robe", qty: 1, unitPrice: 40 }, { serviceId: "chemise", qty: 2, unitPrice: 15 }], dropoff: "12/11/2026", due: "14/11/2026", total: 85, paid: 85, payment: "paid", status: "ready", step: "ready", priority: "normal" },
  { id: "PR-1027", customerId: "c3", items: [{ serviceId: "chemise", qty: 4, unitPrice: 15 }, { serviceId: "costume", qty: 1, unitPrice: 80 }, { serviceId: "pantalon", qty: 2, unitPrice: 20 }], dropoff: "14/11/2026", due: "16/11/2026", total: 210, paid: 0, payment: "unpaid", status: "new", step: "received", priority: "express" },
  { id: "PR-1024", customerId: "c4", items: [{ serviceId: "couverture", qty: 2, unitPrice: 80 }], dropoff: "10/11/2026", due: "13/11/2026", total: 160, paid: 0, payment: "unpaid", status: "late", step: "drying", priority: "normal" },
  { id: "PR-1023", customerId: "c5", items: [{ serviceId: "manteau", qty: 1, unitPrice: 50 }, { serviceId: "tshirt", qty: 5, unitPrice: 12 }], dropoff: "11/11/2026", due: "14/11/2026", total: 110, paid: 110, payment: "paid", status: "ready", step: "ready", priority: "normal" },
  { id: "PR-1022", customerId: "c7", items: [{ serviceId: "djellaba", qty: 2, unitPrice: 45 }], dropoff: "11/11/2026", due: "13/11/2026", total: 90, paid: 90, payment: "paid", status: "delivered", step: "delivered", priority: "normal" },
  { id: "PR-1021", customerId: "c6", items: [{ serviceId: "rideaux", qty: 2, unitPrice: 60 }], dropoff: "09/11/2026", due: "14/11/2026", total: 120, paid: 60, payment: "partial", status: "progress", step: "washing", priority: "normal" },
  { id: "PR-1020", customerId: "c8", items: [{ serviceId: "chemise", qty: 5, unitPrice: 15 }], dropoff: "09/11/2026", due: "12/11/2026", total: 75, paid: 0, payment: "unpaid", status: "late", step: "ironing", priority: "express" },
];

export const getCustomer = (id: string) => customers.find((c) => c.id === id)!;
export const getService = (id: string) => services.find((s) => s.id === id)!;
export const itemCount = (o: Order) => o.items.reduce((s, i) => s + i.qty, 0);

export const weeklyRevenue = [
  { day: { fr: "Lun", ar: "الإثنين" }, value: 650 },
  { day: { fr: "Mar", ar: "الثلاثاء" }, value: 920 },
  { day: { fr: "Mer", ar: "الأربعاء" }, value: 780 },
  { day: { fr: "Jeu", ar: "الخميس" }, value: 1200 },
  { day: { fr: "Ven", ar: "الجمعة" }, value: 950 },
  { day: { fr: "Sam", ar: "السبت" }, value: 850 },
];

export const todayKpis = { revenue: 850, revenueDelta: 12, orders: 24, inProgress: 9, ready: 12 };
export const statusCounts = { new: 5, progress: 9, ready: 12, late: 2 };

export const payments = [
  { id: "P-501", orderId: "PR-1026", customerId: "c2", date: "14/11/2026", amount: 85, method: "cash" as PaymentMethod, status: "paid" as PaymentStatus },
  { id: "P-500", orderId: "PR-1025", customerId: "c1", date: "13/11/2026", amount: 50, method: "card" as PaymentMethod, status: "partial" as PaymentStatus },
  { id: "P-499", orderId: "PR-1023", customerId: "c5", date: "11/11/2026", amount: 110, method: "transfer" as PaymentMethod, status: "paid" as PaymentStatus },
  { id: "P-498", orderId: "PR-1027", customerId: "c3", date: "14/11/2026", amount: 210, method: "cash" as PaymentMethod, status: "unpaid" as PaymentStatus },
  { id: "P-497", orderId: "PR-1021", customerId: "c6", date: "09/11/2026", amount: 60, method: "cash" as PaymentMethod, status: "partial" as PaymentStatus },
  { id: "P-496", orderId: "PR-1022", customerId: "c7", date: "11/11/2026", amount: 90, method: "card" as PaymentMethod, status: "paid" as PaymentStatus },
];
export const paymentSummary = { collected: 18450, pending: 1240, unpaid: 445 };

export type ExpenseCategory = "utilities" | "products" | "maintenance" | "salaries" | "transport" | "other";
export const expenseCategories: { id: ExpenseCategory; icon: string; amount: number }[] = [
  { id: "utilities", icon: "⚡", amount: 1850 },
  { id: "products", icon: "🧴", amount: 1200 },
  { id: "maintenance", icon: "🛠️", amount: 600 },
  { id: "salaries", icon: "👷", amount: 6000 },
  { id: "transport", icon: "🚚", amount: 450 },
  { id: "other", icon: "📦", amount: 300 },
];
export const recentExpenses = [
  { date: "12/11/2026", category: "products" as ExpenseCategory, description: "Détergent professionnel 20L", amount: 480 },
  { date: "10/11/2026", category: "utilities" as ExpenseCategory, description: "Facture LYDEC / ONEE", amount: 1850 },
  { date: "08/11/2026", category: "maintenance" as ExpenseCategory, description: "Réparation machine à laver", amount: 600 },
  { date: "05/11/2026", category: "transport" as ExpenseCategory, description: "Carburant livraisons", amount: 450 },
];
export const monthlyFinance = { revenue: 21500 };

export const monthlyStats = [
  { month: { fr: "Juin", ar: "يونيو" }, revenue: 14200, expenses: 9100, orders: 410, customers: 180 },
  { month: { fr: "Juil", ar: "يوليوز" }, revenue: 15800, expenses: 9400, orders: 452, customers: 196 },
  { month: { fr: "Août", ar: "غشت" }, revenue: 13900, expenses: 9000, orders: 398, customers: 205 },
  { month: { fr: "Sept", ar: "شتنبر" }, revenue: 17400, expenses: 9800, orders: 501, customers: 228 },
  { month: { fr: "Oct", ar: "أكتوبر" }, revenue: 19800, expenses: 10200, orders: 566, customers: 251 },
  { month: { fr: "Nov", ar: "نونبر" }, revenue: 21500, expenses: 10400, orders: 612, customers: 274 },
];
