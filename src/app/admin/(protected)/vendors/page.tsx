"use client";

import { useState } from "react";
import { ACTIVE_VENDORS, ORDERS } from "../../_components/data";
import { StatCard, Badge, SectionHeader } from "../../_components/ui";

export default function VendorsPage() {
  const [search, setSearch] = useState("");
  const [selectedVendor, setSelectedVendor] = useState<(typeof ACTIVE_VENDORS)[0] | null>(null);

  const filtered = ACTIVE_VENDORS.filter(v => {
    const q = search.toLowerCase();
    return (
      !q ||
      v.name.toLowerCase().includes(q) ||
      v.gstin.toLowerCase().includes(q) ||
      v.category.toLowerCase().includes(q) ||
      v.city.toLowerCase().includes(q)
    );
  });

  const vendorOrders = selectedVendor
    ? ORDERS.filter(o => o.vendorId === selectedVendor.id)
    : [];

  const totalSettledAll = "₹7,53,50,000";
  const totalPendingAll = "₹1,15,55,000";

  return (
    <div>
      <SectionHeader title="Active Vendors" sub={`${filtered.length} verified vendors on the marketplace`} />

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Active Vendors" value={String(ACTIVE_VENDORS.length)} sub="Fully verified" color="text-emerald-600" />
        <StatCard label="Total Settled" value={totalSettledAll} sub="All time payouts" color="text-gray-900" />
        <StatCard label="Pending Settlement" value={totalPendingAll} sub="Awaiting release" color="text-amber-600" />
        <StatCard label="Avg. Rating" value="4.6 ★" sub="Across all vendors" color="text-violet-600" />
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by name, GSTIN, category, city…"
          className="w-full sm:w-80 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-900/10 shadow-sm transition-all"
        />
      </div>

      {/* Vendor grid */}
      <div className="grid gap-4 lg:grid-cols-2">
        {filtered.map(v => (
          <button
            key={v.id}
            onClick={() => setSelectedVendor(v)}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 text-left hover:border-gray-400 hover:shadow-md cursor-pointer transition-all"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-gray-900">{v.name}</h3>
                  <span className="font-mono text-xs text-gray-400">{v.id}</span>
                  <Badge
                    label={v.status}
                    className={v.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-0.5">{v.email} · {v.phone}</p>
                <p className="text-xs text-gray-400 mt-0.5">{v.city}, {v.state}</p>
              </div>
              <div className="flex items-center gap-1 bg-amber-50 rounded-lg px-2.5 py-1.5 flex-shrink-0">
                <svg className="h-3.5 w-3.5 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-sm font-bold text-amber-700">{v.rating}</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div>
                <p className="text-xs text-gray-400">Category</p>
                <p className="text-sm font-semibold text-gray-800 mt-0.5">{v.category}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Orders</p>
                <p className="text-sm font-bold text-gray-900 mt-0.5">{v.ordersCompleted}/{v.ordersAccepted}</p>
                <p className="text-[10px] text-gray-400">completed/accepted</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Joined</p>
                <p className="text-sm text-gray-700 mt-0.5">{v.joinedDate}</p>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-100 flex gap-4 items-end">
              <div>
                <p className="text-xs text-gray-400">Total Settled</p>
                <p className="text-sm font-bold text-emerald-600 mt-0.5">{v.totalSettled}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Pending</p>
                <p className={`text-sm font-bold mt-0.5 ${v.pendingSettlement === "₹0" ? "text-gray-400" : "text-amber-600"}`}>
                  {v.pendingSettlement}
                </p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <a
                  href="/graybulk-tie-up-agreement.pdf"
                  download="graybulk-tie-up-agreement.pdf"
                  onClick={e => e.stopPropagation()}
                  className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-100 hover:border-gray-300 transition-colors"
                  title="Download Tie-Up Agreement"
                >
                  <svg className="h-3.5 w-3.5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
                  </svg>
                  Agreement
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Vendor detail drawer */}
      {selectedVendor && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSelectedVendor(null)} />
          <div className="relative z-50 w-full max-w-xl bg-white shadow-2xl overflow-y-auto flex flex-col">

            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-start justify-between z-10">
              <div>
                <p className="font-mono text-xs text-gray-400">{selectedVendor.id}</p>
                <h2 className="text-lg font-bold text-gray-900 mt-0.5">{selectedVendor.name}</h2>
                <p className="text-sm text-gray-500">{selectedVendor.category} · {selectedVendor.city}, {selectedVendor.state}</p>
              </div>
              <button onClick={() => setSelectedVendor(null)} className="text-gray-400 hover:text-gray-700 text-2xl font-bold leading-none cursor-pointer mt-1">×</button>
            </div>

            <div className="px-6 py-5 space-y-6 flex-1">

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-gray-50 rounded-xl px-3 py-3 text-center">
                  <p className="text-xl font-black text-gray-900">{selectedVendor.ordersAccepted}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Accepted</p>
                </div>
                <div className="bg-gray-50 rounded-xl px-3 py-3 text-center">
                  <p className="text-xl font-black text-emerald-600">{selectedVendor.ordersCompleted}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Completed</p>
                </div>
                <div className="bg-amber-50 rounded-xl px-3 py-3 text-center">
                  <p className="text-xl font-black text-amber-600">{selectedVendor.rating} ★</p>
                  <p className="text-xs text-gray-400 mt-0.5">Rating</p>
                </div>
              </div>

              {/* Contact */}
              <section>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Contact & Business</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ["Email", selectedVendor.email],
                    ["Phone", selectedVendor.phone],
                    ["City", `${selectedVendor.city}, ${selectedVendor.state}`],
                    ["Joined", selectedVendor.joinedDate],
                    ["GSTIN", selectedVendor.gstin],
                    ["PAN", selectedVendor.pan],
                    ["Last Activity", selectedVendor.lastActivity],
                    ["Status", selectedVendor.status],
                  ].map(([l, v]) => (
                    <div key={l} className="bg-gray-50 rounded-lg px-3 py-2.5">
                      <p className="text-xs text-gray-400">{l}</p>
                      <p className="text-sm font-medium text-gray-900 mt-0.5 font-mono-if-gstin break-all">{v}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Banking */}
              <section>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Settlement Bank Account</h3>
                <div className="rounded-xl border border-gray-200 divide-y divide-gray-100 overflow-hidden">
                  {[
                    ["Account Holder", selectedVendor.accountHolder],
                    ["Bank", selectedVendor.bankName],
                    ["IFSC", selectedVendor.ifsc],
                  ].map(([l, v]) => (
                    <div key={l} className="flex justify-between px-4 py-3 bg-gray-50">
                      <span className="text-xs text-gray-400">{l}</span>
                      <span className="text-xs font-semibold text-gray-900">{v}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Settlement */}
              <section>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Settlement Summary</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                    <p className="text-xs text-emerald-600">Total Settled</p>
                    <p className="text-lg font-black text-emerald-700 mt-0.5">{selectedVendor.totalSettled}</p>
                  </div>
                  <div className={`rounded-xl px-4 py-3 border ${selectedVendor.pendingSettlement === "₹0" ? "bg-gray-50 border-gray-100" : "bg-amber-50 border-amber-100"}`}>
                    <p className="text-xs text-amber-600">Pending Settlement</p>
                    <p className={`text-lg font-black mt-0.5 ${selectedVendor.pendingSettlement === "₹0" ? "text-gray-400" : "text-amber-700"}`}>
                      {selectedVendor.pendingSettlement}
                    </p>
                  </div>
                </div>
              </section>

              {/* Tie-Up Agreement */}
              <section>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Tie-Up Agreement</h3>
                <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4">
                  <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">graybulk-tie-up-agreement.pdf</p>
                    <p className="text-xs text-gray-400 mt-0.5">Standard vendor tie-up agreement · Gray Bulk Marketplace</p>
                  </div>
                  <a
                    href="/graybulk-tie-up-agreement.pdf"
                    download="graybulk-tie-up-agreement.pdf"
                    className="flex items-center gap-2 rounded-xl bg-gray-900 text-white text-xs font-bold px-4 py-2.5 hover:bg-gray-800 transition-colors flex-shrink-0 cursor-pointer"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </a>
                </div>
              </section>

              {/* Orders */}
              <section>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">
                  Order History ({vendorOrders.length})
                </h3>
                {vendorOrders.length === 0 ? (
                  <p className="text-sm text-gray-400">No order history found.</p>
                ) : (
                  <div className="space-y-2">
                    {vendorOrders.map(o => (
                      <div key={o.id} className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-2.5 bg-gray-50">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs text-gray-400">{o.id}</span>
                            <Badge label={o.status} className={`bg-gray-100 text-gray-600 text-[10px]`} />
                          </div>
                          <p className="text-sm font-medium text-gray-800 mt-0.5 truncate">{o.product} — {o.buyer}</p>
                        </div>
                        <p className="text-sm font-bold text-gray-900 flex-shrink-0">{o.amount}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-4 flex gap-3">
              <button className="flex-1 rounded-lg bg-gray-900 text-white text-sm font-semibold py-2.5 cursor-pointer hover:bg-gray-800 transition-colors">
                Initiate Settlement
              </button>
              <button className="rounded-lg border border-red-200 bg-red-50 text-red-600 px-4 py-2.5 text-sm font-semibold cursor-pointer hover:bg-red-100 transition-colors">
                Suspend
              </button>
              <button onClick={() => setSelectedVendor(null)} className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-500 cursor-pointer hover:bg-gray-50 transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
