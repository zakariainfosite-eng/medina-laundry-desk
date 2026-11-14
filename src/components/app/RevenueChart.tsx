import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const axis = { stroke: "var(--color-muted-foreground)", fontSize: 12, tickLine: false, axisLine: false } as const;
const tooltipStyle = { background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12, fontSize: 12 };

export function RevenueChart({ data, height = 260 }: { data: { label: string; value: number }[]; height?: number }) {
  return (
    <div dir="ltr" style={{ height }}>
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ left: -10, right: 8, top: 10 }}>
          <defs>
            <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-chart-1)" stopOpacity={0.4} />
              <stop offset="100%" stopColor="var(--color-chart-1)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="var(--color-border)" strokeDasharray="4 4" />
          <XAxis dataKey="label" {...axis} />
          <YAxis {...axis} />
          <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v} MAD`, ""]} />
          <Area type="monotone" dataKey="value" stroke="var(--color-chart-1)" strokeWidth={3} fill="url(#rev)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ComparisonChart({ data, aLabel, bLabel, height = 280 }: { data: { label: string; a: number; b: number }[]; aLabel: string; bLabel: string; height?: number }) {
  return (
    <div dir="ltr" style={{ height }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ left: -10, right: 8, top: 10 }}>
          <CartesianGrid vertical={false} stroke="var(--color-border)" strokeDasharray="4 4" />
          <XAxis dataKey="label" {...axis} />
          <YAxis {...axis} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "var(--color-muted)" }} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="a" name={aLabel} fill="var(--color-chart-2)" radius={[6, 6, 0, 0]} />
          <Bar dataKey="b" name={bLabel} fill="var(--color-chart-1)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SimpleBarChart({ data, height = 220, color = "var(--color-chart-1)" }: { data: { label: string; value: number }[]; height?: number; color?: string }) {
  return (
    <div dir="ltr" style={{ height }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ left: -10, right: 8, top: 10 }}>
          <CartesianGrid vertical={false} stroke="var(--color-border)" strokeDasharray="4 4" />
          <XAxis dataKey="label" {...axis} />
          <YAxis {...axis} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "var(--color-muted)" }} />
          <Bar dataKey="value" fill={color} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
