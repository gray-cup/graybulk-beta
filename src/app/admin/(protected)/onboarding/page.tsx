"use client";

import { useState } from "react";
import Link from "next/link";
import { PENDING_VENDORS, CHECKLIST_LABELS, RISK_COLORS } from "../../_components/data";
import { StatCard, Badge, SectionHeader } from "../../_components/ui";

export default function OnboardingPage() {
  const [search, setSearch] = useState("");
  const [riskFilter, setRiskFilter] = useState("All");

  const filtered = PENDING_VENDORS.filter(v => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      v.businessName.toLowerCase().includes(q) ||
      v.contactName.toLowerCase().includes(q) ||
      v.email.toLowerCase().includes(q) ||
      v.city.toLowerCase().includes(q);
    const matchRisk = riskFilter === "All" || v.riskRating === riskFilter;
    return matchSearch && matchRisk;
  });

  const completionPct = (v: (typeof PENDING_VENDORS)[0]) => {
    const done = Object.values(v.checklist).filter(Boolean).length;
    const total = Object.keys(v.checklist).length;
    return { done, total, pct: Math.round((done / total) * 100) };
  };

  return (
    <div>
      <SectionHeader
        title="Vendor Onboarding"
        sub="Review and approve pending vendor applications"
      />

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Pending Applications" value={String(PENDING_VENDORS.length)} color="text-amber-600" />
        <StatCard
          label="Almost Ready"
          value={String(PENDING_VENDORS.filter(v => Object.values(v.checklist).filter(Boolean).length >= 7).length)}
          sub="7+ checks complete"
          color="text-emerald-600"
        />
        <StatCard
          label="Low Risk"
          value={String(PENDING_VENDORS.filter(v => v.riskRating === "Low").length)}
          color="text-emerald-600"
        />
        <StatCard
          label="Unassigned Risk"
          value={String(PENDING_VENDORS.filter(v => v.riskRating === "Unassigned").length)}
          color="text-gray-500"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by business, contact, city…"
          className="flex-1 sm:max-w-xs rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-gray-400 shadow-sm transition-all"
        />
        <div className="flex gap-1.5 flex-wrap">
          {["All", "Low", "Medium", "High", "Unassigned"].map(r => (
            <button
              key={r}
              onClick={() => setRiskFilter(r)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all ${riskFilter === r ? "bg-gray-900 text-white" : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-100"}`}
            >
              {r} Risk
            </button>
          ))}
        </div>
      </div>

      {/* Application cards */}
      <div className="space-y-4">
        {filtered.map(v => {
          const { done, total, pct } = completionPct(v);
          return (
            <div key={v.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              {/* Card header */}
              <div className="px-5 py-4 border-b border-gray-100 flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xs text-gray-400">{v.id}</span>
                    <Badge label={v.entityType} className="bg-gray-100 text-gray-600" />
                    <Badge label={v.riskRating} className={RISK_COLORS[v.riskRating]} />
                  </div>
                  <h2 className="text-base font-bold text-gray-900 mt-1">{v.businessName}</h2>
                  <p className="text-sm text-gray-500">{v.contactName} · {v.email}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{v.city}, {v.state} · Applied {v.appliedDate} · {v.category}</p>
                </div>
                <Link
                  href={`/admin/onboarding/${v.id}`}
                  className="rounded-xl bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 hover:bg-gray-800 transition-colors flex items-center gap-1.5 whitespace-nowrap"
                >
                  Review →
                </Link>
              </div>

              <div className="px-5 py-4">
                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                    <span className="font-semibold">Onboarding Progress</span>
                    <span className="font-bold">{done}/{total} · {pct}% complete</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${pct >= 80 ? "bg-emerald-500" : pct >= 40 ? "bg-amber-400" : "bg-red-400"}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>

                {/* Checklist pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {(Object.entries(v.checklist) as [string, boolean][]).map(([key, val]) => (
                    <span
                      key={key}
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium border ${
                        val
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "bg-gray-50 text-gray-400 border-gray-200"
                      }`}
                    >
                      {val ? (
                        <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-gray-300 inline-block" />
                      )}
                      {CHECKLIST_LABELS[key]}
                    </span>
                  ))}
                </div>

                {/* Agreement strip */}
                <div className="space-y-2">
                  {/* Vendor's uploaded agreement */}
                  <div className="flex items-center justify-between rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                        <svg className="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Vendor-uploaded agreement</p>
                        <p className="text-sm font-semibold text-gray-800">{v.agreementFileName}</p>
                        <p className="text-xs text-gray-400">{v.agreementSize} · Uploaded {v.agreementUploadedAt}</p>
                      </div>
                    </div>
                    <Link
                      href={`/admin/onboarding/${v.id}#agreement`}
                      className="text-xs font-bold text-gray-700 border border-gray-300 rounded-lg px-3 py-1.5 hover:bg-gray-100 transition-colors whitespace-nowrap"
                    >
                      View →
                    </Link>
                  </div>
                  {/* Gray Bulk standard tie-up agreement */}
                  <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">
                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Gray Bulk standard agreement</p>
                        <p className="text-sm font-semibold text-gray-800">graybulk-tie-up-agreement.pdf</p>
                      </div>
                    </div>
                    <a
                      href="/graybulk-tie-up-agreement.pdf"
                      download="graybulk-tie-up-agreement.pdf"
                      className="flex items-center gap-1.5 text-xs font-bold text-gray-700 border border-gray-300 rounded-lg px-3 py-1.5 hover:bg-gray-100 transition-colors whitespace-nowrap"
                    >
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </a>
                  </div>
                </div>

                {v.notes && (
                  <div className="mt-3 rounded-lg bg-blue-50 border border-blue-100 px-3 py-2 text-xs text-blue-800">
                    <strong>Note:</strong> {v.notes}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-sm">No applications match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
