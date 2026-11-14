# PressingPro — Frontend UI prototype (FR / AR-RTL)

UI only, mock data, no backend/auth/database.

## Design
- Palette: deep navy primary, sky blue accent, white cards, light gray background; status tokens (new=blue, progress=amber, ready=green, late=red). Light + dark themes.
- Fonts: DM Sans (FR), Noto Sans Arabic (AR), loaded via head links.
- Soft shadows, rounded-2xl cards, generous spacing.

## Shell
- Desktop: left sidebar (8 nav items, business profile + avatar at bottom), collapsible to icons. Flips to right in Arabic.
- Header: search, FR/AR switcher, notifications, profile.
- Mobile: bottom nav (Dashboard, Commandes, + Nouvelle commande, Clients, Plus menu sheet).
- Language context toggles `dir="rtl"` / `lang` on html, all labels/buttons/statuses translated.

## Pages (one route each)
- `/` Dashboard: greeting, 4 KPI cards, weekly revenue chart, status overview, recent orders.
- `/commandes`: filters (order no., client, status, date), table (cards on mobile), click opens details panel with timeline + receipt.
- `/commandes/nouvelle`: client search + card, article rows, delivery/priority, payment section, prominent TOTAL card, live totals.
- `/clients`: CRM cards with avatar, phone, orders, total spent, last order.
- `/services`: categories with services (icon, name, price), add button.
- `/paiements`: 3 summary cards + payments table with badges.
- `/depenses`: categories, monthly expenses, revenue, estimated profit.
- `/statistiques`: monthly revenue, orders, popular service, AOV, customer growth, revenue vs expenses (Recharts).
- `/parametres`: business profile, preferences (currency, language, theme), thermal receipt preview.

## Technical
- `src/data/mock.ts` typed mock data; `src/i18n/` dictionaries + provider.
- Components: AppSidebar, AppHeader, MobileNav, DashboardCard, OrderTable, OrderStatusBadge, CustomerCard, RevenueChart, OrderTimeline, ReceiptPreview, LanguageSwitcher, OrderDetailsSheet.
- shadcn UI primitives + recharts; each route has its own head() metadata.
