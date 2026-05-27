import Link from "next/link";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Total Orders", value: "142", change: "+12 this month" },
  { label: "Total Spend", value: "₹38.4L", change: "+₹4.2L this month" },
  { label: "Active Suppliers", value: "9", change: "3 categories" },
  { label: "Pending Deliveries", value: "6", change: "Est. 3–5 days" },
];

const recentOrders = [
  { id: "GB-2847", product: "HDPE Granules (Natural)", qty: "5 MT", supplier: "Polyplast India", amount: "₹5,25,000", status: "Delivered" },
  { id: "GB-2831", product: "43\" 4K Smart TV", qty: "5 pcs", supplier: "VisionTech India", amount: "₹92,500", status: "In Transit" },
  { id: "GB-2819", product: "Round Tin Container 500ml", qty: "1,000 pcs", supplier: "Bharat Tin Works", amount: "₹43,000", status: "Processing" },
  { id: "GB-2801", product: "Desert Air Cooler 60L", qty: "10 pcs", supplier: "CoolBreeze Industries", amount: "₹98,000", status: "Delivered" },
  { id: "GB-2788", product: "Executive Office Desk 1.8m", qty: "5 pcs", supplier: "Woodcraft Furnishings", amount: "₹92,500", status: "Delivered" },
];

const statusColors: Record<string, string> = {
  Delivered: "bg-green-50 text-green-700 border-green-100",
  "In Transit": "bg-blue-50 text-blue-700 border-blue-100",
  Processing: "bg-amber-50 text-amber-700 border-amber-100",
};

export default function DashboardPage() {
  return (
    <div className="py-10 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Dashboard</h1>
          <p className="text-sm text-neutral-500 mt-0.5">
            Welcome back, Demo User · <span className="text-neutral-400">demo@graybulk.com</span>
          </p>
        </div>
        <Link href="/categories">
          <Button variant="black" size="sm">
            Browse Products
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white border border-neutral-200 rounded-2xl p-5 space-y-1"
          >
            <p className="text-xs font-medium text-neutral-400 uppercase tracking-wide">{s.label}</p>
            <p className="text-2xl font-bold text-neutral-900">{s.value}</p>
            <p className="text-xs text-neutral-400">{s.change}</p>
          </div>
        ))}
      </div>

      {/* Recent orders */}
      <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-neutral-800">Recent Orders</h2>
          <span className="text-xs text-neutral-400">Demo data only</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-100 bg-neutral-50">
                <th className="text-left px-6 py-3 text-xs font-medium text-neutral-400 uppercase tracking-wide">Order ID</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-neutral-400 uppercase tracking-wide">Product</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-neutral-400 uppercase tracking-wide hidden md:table-cell">Supplier</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-neutral-400 uppercase tracking-wide hidden sm:table-cell">Qty</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-neutral-400 uppercase tracking-wide">Amount</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-neutral-400 uppercase tracking-wide">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-50">
              {recentOrders.map((o) => (
                <tr key={o.id} className="hover:bg-neutral-50 transition-colors">
                  <td className="px-6 py-3.5 font-mono text-xs text-neutral-500">{o.id}</td>
                  <td className="px-6 py-3.5 text-neutral-800 font-medium max-w-[200px] truncate">{o.product}</td>
                  <td className="px-6 py-3.5 text-neutral-500 hidden md:table-cell">{o.supplier}</td>
                  <td className="px-6 py-3.5 text-neutral-500 hidden sm:table-cell">{o.qty}</td>
                  <td className="px-6 py-3.5 font-semibold text-neutral-800 tabular-nums">{o.amount}</td>
                  <td className="px-6 py-3.5">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${statusColors[o.status]}`}>
                      {o.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Demo note */}
      <p className="text-center text-xs text-neutral-300">
        This is a demo dashboard — all data is hardcoded and for display purposes only.
      </p>
    </div>
  );
}
