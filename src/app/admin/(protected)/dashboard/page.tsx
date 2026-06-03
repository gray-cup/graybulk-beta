"use client";

import Link from "next/link";
import { ORDERS, ACTIVE_VENDORS, PENDING_VENDORS, STATUS_COLORS, RISK_COLORS } from "../../_components/data";
import { StatCard, Badge, SectionHeader } from "../../_components/ui";

export default function DashboardPage() {
  const completedOrders = ORDERS.filter(o => o.status === "Completed").length;
  const readyOrders = ORDERS.filter(o => o.status === "Ready for Dispatch").length;
  const pendingPayment = ORDERS.filter(o => o.status === "Paid").length;
  const pendingSettlement = ORDERS.filter(o => o.settlementStatus === "Pending" || o.settlementStatus === "On Hold").length;
  const recentOrders = [...ORDERS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);
  const almostReady = PENDING_VENDORS.filter(v => Object.values(v.checklist).filter(Boolean).length >= 7);

  return (
    <div>
      <SectionHeader
        title="Dashboard"
        sub={`Overview · ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}`}
      />

      {/* KPI Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Total Orders"
          value={String(ORDERS.length)}
          sub="All time"
          color="text-gray-900"
          icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>}
        />
        <StatCard
          label="Active Vendors"
          value={String(ACTIVE_VENDORS.length)}
          sub="Fully onboarded"
          color="text-emerald-600"
          icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
        />
        <StatCard
          label="Pending Onboarding"
          value={String(PENDING_VENDORS.length)}
          sub="Awaiting approval"
          color="text-amber-600"
          icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>}
        />
        <StatCard
          label="Gross GMV"
          value="₹9.5 Cr+"
          sub="Total marketplace value"
          color="text-violet-600"
          icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
      </div>

      {/* Second row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Completed Orders" value={String(completedOrders)} color="text-emerald-600" />
        <StatCard label="Ready for Dispatch" value={String(readyOrders)} color="text-violet-600" />
        <StatCard label="Awaiting Vendor" value={String(pendingPayment)} sub="Payment received, not accepted" color="text-blue-600" />
        <StatCard label="Settlements Pending" value={String(pendingSettlement)} sub="Pending or on-hold" color="text-orange-600" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent orders */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-900 text-sm">Recent Orders</h2>
            <Link href="/admin/orders" className="text-xs text-gray-500 hover:text-gray-900 font-medium transition-colors">
              View all →
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {recentOrders.map(o => (
              <div key={o.id} className="px-5 py-3.5 flex items-center gap-3 hover:bg-gray-50/60 transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xs text-gray-400">{o.id}</span>
                    <Badge label={o.status} className={STATUS_COLORS[o.status]} />
                  </div>
                  <p className="text-sm font-semibold text-gray-900 mt-0.5 truncate">{o.buyer}</p>
                  <p className="text-xs text-gray-400">{o.product} · {o.quantity}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-bold text-gray-900">{o.amount}</p>
                  <p className="text-xs text-gray-400">{o.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-5">
          {/* Onboarding alerts */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-bold text-gray-900 text-sm">Onboarding Alerts</h2>
              <Link href="/admin/onboarding" className="text-xs text-gray-500 hover:text-gray-900 font-medium transition-colors">
                View all →
              </Link>
            </div>
            <div className="divide-y divide-gray-100">
              {PENDING_VENDORS.map(v => {
                const done = Object.values(v.checklist).filter(Boolean).length;
                const total = Object.keys(v.checklist).length;
                const pct = Math.round((done / total) * 100);
                return (
                  <Link key={v.id} href={`/admin/onboarding/${v.id}`} className="block px-5 py-3 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate">{v.businessName}</p>
                        <p className="text-xs text-gray-400">{v.entityType} · {v.city}</p>
                      </div>
                      <Badge label={v.riskRating} className={RISK_COLORS[v.riskRating]} />
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                        <span>{done}/{total} checks</span>
                        <span>{pct}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full ${pct >= 80 ? "bg-emerald-500" : pct >= 40 ? "bg-amber-400" : "bg-red-400"}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Almost-ready vendors */}
          {almostReady.length > 0 && (
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
              <p className="text-xs font-bold text-emerald-800 uppercase tracking-wide mb-2">Ready to Approve</p>
              {almostReady.map(v => (
                <Link key={v.id} href={`/admin/onboarding/${v.id}`} className="block text-sm font-medium text-emerald-900 hover:underline py-0.5">
                  {v.businessName} →
                </Link>
              ))}
            </div>
          )}

          {/* Settlement summary */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <h2 className="font-bold text-gray-900 text-sm mb-4">Settlement Overview</h2>
            <div className="space-y-3">
              {[
                { label: "Released", value: ORDERS.filter(o => o.settlementStatus === "Released").length, color: "bg-emerald-500" },
                { label: "Pending", value: ORDERS.filter(o => o.settlementStatus === "Pending").length, color: "bg-amber-400" },
                { label: "On Hold", value: ORDERS.filter(o => o.settlementStatus === "On Hold").length, color: "bg-orange-400" },
                { label: "N/A", value: ORDERS.filter(o => o.settlementStatus === "N/A").length, color: "bg-gray-300" },
              ].map(s => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className={`h-2.5 w-2.5 rounded-full ${s.color} flex-shrink-0`} />
                  <span className="text-sm text-gray-600 flex-1">{s.label}</span>
                  <span className="text-sm font-bold text-gray-900">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
