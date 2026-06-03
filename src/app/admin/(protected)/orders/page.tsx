"use client";

import { useState } from "react";
import { ORDERS, STATUS_COLORS, SETTLEMENT_COLORS } from "../../_components/data";
import { StatCard, Badge, SectionHeader } from "../../_components/ui";
import type { OrderStatus } from "../../_components/types";

type Filter = "All" | OrderStatus;

export default function OrdersPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<(typeof ORDERS)[0] | null>(null);

  const filtered = ORDERS.filter(o => {
    const matchStatus = filter === "All" || o.status === filter;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      o.id.toLowerCase().includes(q) ||
      o.buyer.toLowerCase().includes(q) ||
      o.product.toLowerCase().includes(q) ||
      o.vendor.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  const statuses: Filter[] = ["All", "Paid", "Accepted", "Ready for Dispatch", "Completed", "Cancelled"];

  return (
    <div>
      <SectionHeader title="Orders" sub={`${filtered.length} of ${ORDERS.length} orders`} />

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
        {[
          { label: "Total", value: ORDERS.length, color: "text-gray-900" },
          { label: "Paid", value: ORDERS.filter(o => o.status === "Paid").length, color: "text-blue-600" },
          { label: "Accepted", value: ORDERS.filter(o => o.status === "Accepted").length, color: "text-amber-600" },
          { label: "Ready for Dispatch", value: ORDERS.filter(o => o.status === "Ready for Dispatch").length, color: "text-violet-600" },
          { label: "Completed", value: ORDERS.filter(o => o.status === "Completed").length, color: "text-emerald-600" },
        ].map(s => (
          <StatCard key={s.label} label={s.label} value={String(s.value)} color={s.color} />
        ))}
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-5">
        <div className="px-5 py-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between border-b border-gray-100">
          <div className="flex gap-1.5 flex-wrap">
            {statuses.map(s => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all ${
                  filter === s
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search orders, buyers, vendors…"
            className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-gray-400 focus:bg-white transition-colors w-full sm:w-64"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left">
                {["Order ID", "Buyer", "Product / Category", "Qty", "Amount", "Vendor", "Shipping", "Status", "Settlement", "Date"].map(h => (
                  <th key={h} className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map(o => (
                <tr
                  key={o.id}
                  onClick={() => setSelectedOrder(o)}
                  className="hover:bg-blue-50/40 cursor-pointer transition-colors"
                >
                  <td className="px-4 py-3.5 font-mono text-xs text-gray-500 whitespace-nowrap">{o.id}</td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <p className="font-semibold text-gray-900">{o.buyer}</p>
                    <p className="text-xs text-gray-400">{o.buyerCity}</p>
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <p className="text-gray-800 font-medium">{o.product}</p>
                    <p className="text-xs text-gray-400">{o.category}</p>
                  </td>
                  <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap text-xs">{o.quantity}</td>
                  <td className="px-4 py-3.5 font-bold text-gray-900 whitespace-nowrap">{o.amount}</td>
                  <td className="px-4 py-3.5 text-gray-700 whitespace-nowrap text-xs">{o.vendor}</td>
                  <td className="px-4 py-3.5 text-gray-500 whitespace-nowrap text-xs">{o.shippingProvider}</td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <Badge label={o.status} className={STATUS_COLORS[o.status]} />
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <Badge label={o.settlementStatus} className={SETTLEMENT_COLORS[o.settlementStatus]} />
                  </td>
                  <td className="px-4 py-3.5 text-xs text-gray-400 whitespace-nowrap">{o.date}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={10} className="px-4 py-12 text-center text-sm text-gray-400">No orders match your filters.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order detail modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-start justify-between">
              <div>
                <p className="font-mono text-xs text-gray-400">{selectedOrder.id}</p>
                <h2 className="text-lg font-bold text-gray-900 mt-0.5">{selectedOrder.buyer}</h2>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Badge label={selectedOrder.status} className={STATUS_COLORS[selectedOrder.status]} />
                <button onClick={() => setSelectedOrder(null)} className="text-gray-400 hover:text-gray-700 text-2xl font-bold cursor-pointer ml-2 leading-none">×</button>
              </div>
            </div>

            <div className="px-6 py-5 space-y-5">
              {/* Buyer info */}
              <section>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Buyer Information</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ["Company", selectedOrder.buyer],
                    ["Email", selectedOrder.buyerEmail],
                    ["Phone", selectedOrder.buyerPhone],
                    ["City", selectedOrder.buyerCity],
                    ["Delivery Address", selectedOrder.deliveryAddress],
                    ["Shipping Provider", selectedOrder.shippingProvider],
                  ].map(([l, v]) => (
                    <div key={l} className={`bg-gray-50 rounded-lg px-3 py-2.5 ${l === "Delivery Address" ? "col-span-2" : ""}`}>
                      <p className="text-xs text-gray-400">{l}</p>
                      <p className="text-sm font-medium text-gray-900 mt-0.5">{v}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Order details */}
              <section>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Order Details</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ["Product", selectedOrder.product],
                    ["Category", selectedOrder.category],
                    ["Quantity", selectedOrder.quantity],
                    ["Unit Price", selectedOrder.unitPrice],
                    ["Total Amount", selectedOrder.amount],
                    ["Vendor", selectedOrder.vendor],
                    ["Payment Ref", selectedOrder.paymentRef],
                    ["Order Date", selectedOrder.date],
                  ].map(([l, v]) => (
                    <div key={l} className="bg-gray-50 rounded-lg px-3 py-2.5">
                      <p className="text-xs text-gray-400">{l}</p>
                      <p className="text-sm font-medium text-gray-900 mt-0.5">{v}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Settlement */}
              <section>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Settlement</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg px-3 py-2.5">
                    <p className="text-xs text-gray-400">Settlement Status</p>
                    <Badge label={selectedOrder.settlementStatus} className={`${SETTLEMENT_COLORS[selectedOrder.settlementStatus]} mt-1`} />
                  </div>
                  <div className="bg-gray-50 rounded-lg px-3 py-2.5">
                    <p className="text-xs text-gray-400">Settlement Amount</p>
                    <p className="text-sm font-bold text-gray-900 mt-0.5">{selectedOrder.settlementAmount}</p>
                  </div>
                  {selectedOrder.settlementDate && (
                    <div className="bg-gray-50 rounded-lg px-3 py-2.5">
                      <p className="text-xs text-gray-400">Settlement Date</p>
                      <p className="text-sm font-medium text-gray-900 mt-0.5">{selectedOrder.settlementDate}</p>
                    </div>
                  )}
                </div>
              </section>

              {/* Fulfillment checklist */}
              <section>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Fulfillment Checklist</h3>
                <div className="space-y-2">
                  {[
                    { label: "Payment received", done: selectedOrder.status !== "Cancelled" },
                    { label: "Vendor accepted order", done: ["Accepted", "Ready for Dispatch", "Completed"].includes(selectedOrder.status) },
                    { label: "Shipment photos uploaded by vendor", done: selectedOrder.shipmentPhotosUploaded },
                    { label: "Buyer verified shipment readiness", done: selectedOrder.buyerVerified },
                    { label: "Order completed", done: selectedOrder.status === "Completed" },
                  ].map(item => (
                    <div key={item.label} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 ${item.done ? "bg-emerald-50 border border-emerald-100" : "bg-gray-50 border border-gray-100"}`}>
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 ${item.done ? "bg-emerald-500" : "bg-gray-200"}`}>
                        {item.done ? (
                          <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />}
                      </div>
                      <span className={`text-sm ${item.done ? "text-gray-800" : "text-gray-500"}`}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-100 px-6 py-4 flex gap-3">
              <button className="flex-1 rounded-lg bg-gray-900 text-white text-sm font-semibold py-2.5 cursor-pointer hover:bg-gray-800 transition-colors">
                Release Settlement
              </button>
              <button onClick={() => setSelectedOrder(null)} className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm text-gray-600 cursor-pointer hover:bg-gray-100 transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
