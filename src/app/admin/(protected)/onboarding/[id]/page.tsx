"use client";

import { use, useState } from "react";
import Link from "next/link";
import { PENDING_VENDORS, CHECKLIST_LABELS, RISK_COLORS, PENNY_COLORS } from "../../../_components/data";
import { Badge } from "../../../_components/ui";
import type { ChecklistKey } from "../../../_components/types";

function Section({ num, title, badge, children }: { num: string; title: string; badge?: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-5 py-4 border-b border-gray-100 text-left cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <span className="h-6 w-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{num}</span>
        <span className="font-bold text-gray-900 flex-1">{title}</span>
        {badge}
        <svg className={`h-4 w-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="px-5 py-5">{children}</div>}
    </div>
  );
}

function InfoGrid({ items }: { items: [string, string | React.ReactNode][] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map(([label, value]) => (
        <div key={label} className="bg-gray-50 rounded-lg px-3 py-2.5">
          <p className="text-xs text-gray-400">{label}</p>
          <div className="text-sm font-medium text-gray-900 mt-0.5">{value || <span className="text-gray-300 italic">Not provided</span>}</div>
        </div>
      ))}
    </div>
  );
}

function DocRow({ label, filename }: { label: string; filename: string }) {
  return (
    <div className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 ${filename ? "border-gray-200 bg-gray-50" : "border-dashed border-gray-300 bg-white"}`}>
      <div className={`h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0 ${filename ? "bg-red-100" : "bg-gray-100"}`}>
        <svg className={`h-4 w-4 ${filename ? "text-red-500" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-400">{label}</p>
        <p className={`text-sm truncate mt-0.5 ${filename ? "font-medium text-gray-800" : "italic text-gray-400"}`}>
          {filename || "Not submitted"}
        </p>
      </div>
      {filename && (
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] bg-white border border-gray-200 text-gray-500 rounded-full px-2 py-0.5">PDF</span>
          <button className="text-xs text-gray-500 hover:text-gray-900 border border-gray-200 rounded-lg px-2.5 py-1 cursor-pointer hover:bg-gray-100 transition-colors">
            ↓
          </button>
        </div>
      )}
    </div>
  );
}

export default function OnboardingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const vendor = PENDING_VENDORS.find(v => v.id === id);
  const [agreementModalOpen, setAgreementModalOpen] = useState(false);

  if (!vendor) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 text-sm">Vendor not found.</p>
        <Link href="/admin/onboarding" className="text-sm text-gray-900 underline mt-2 inline-block">← Back to Onboarding</Link>
      </div>
    );
  }

  const done = Object.values(vendor.checklist).filter(Boolean).length;
  const total = Object.keys(vendor.checklist).length;
  const pct = Math.round((done / total) * 100);

  return (
    <>
      {/* Agreement modal */}
      {agreementModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Vendor Tie-Up Agreement</p>
                <p className="font-bold text-gray-900 mt-0.5">{vendor.businessName}</p>
              </div>
              <button onClick={() => setAgreementModalOpen(false)} className="text-gray-400 hover:text-gray-700 text-2xl font-bold leading-none cursor-pointer">×</button>
            </div>
            <div className="px-6 py-5">
              <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-red-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 truncate">{vendor.agreementFileName}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{vendor.agreementSize} · PDF Document</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  ["Uploaded by", vendor.contactName],
                  ["Uploaded at", vendor.agreementUploadedAt],
                  ["Entity Type", vendor.entityType],
                  ["Agreement Signed", vendor.checklist.agreementSigned ? "Yes — digitally signed" : "Not yet signed"],
                ].map(([l, v]) => (
                  <div key={l} className="bg-gray-50 rounded-lg px-3 py-2">
                    <p className="text-xs text-gray-400">{l}</p>
                    <p className={`text-sm font-medium mt-0.5 ${l === "Agreement Signed" && !vendor.checklist.agreementSigned ? "text-red-500" : "text-gray-900"}`}>{v}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-xs text-amber-900">
                <strong>Compliance Note:</strong> This agreement was uploaded by the vendor during onboarding. All agreements must be reviewed before approval. Per policy, agreements are timestamped and digitally stored.
              </div>
            </div>
            <div className="flex gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50">
              <button className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gray-900 text-white text-sm font-bold py-2.5 cursor-pointer hover:bg-gray-800 transition-colors">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Agreement
              </button>
              <button onClick={() => setAgreementModalOpen(false)} className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-5">
          <Link href="/admin/onboarding" className="hover:text-gray-700 transition-colors">Onboarding</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{vendor.businessName}</span>
        </div>

        {/* Page header */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-6 py-5 mb-6">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-mono text-xs text-gray-400">{vendor.id}</span>
                <Badge label={vendor.entityType} className="bg-gray-100 text-gray-600" />
                <Badge label={vendor.riskRating} className={RISK_COLORS[vendor.riskRating]} />
                <Badge label={vendor.status} className="bg-amber-100 text-amber-700" />
              </div>
              <h1 className="text-xl font-black text-gray-900 mt-1">{vendor.businessName}</h1>
              <p className="text-sm text-gray-500 mt-0.5">{vendor.contactName} · {vendor.email} · {vendor.phone}</p>
              <p className="text-xs text-gray-400 mt-0.5">{vendor.city}, {vendor.state} · {vendor.category} · Applied {vendor.appliedDate}</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setAgreementModalOpen(true)}
                className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
                </svg>
                View Agreement
              </button>
              <button className="rounded-xl bg-emerald-600 text-white text-sm font-bold px-5 py-2.5 cursor-pointer hover:bg-emerald-700 transition-colors">
                Approve Vendor
              </button>
              <button className="rounded-xl border border-red-200 bg-red-50 text-red-600 text-sm font-bold px-5 py-2.5 cursor-pointer hover:bg-red-100 transition-colors">
                Reject
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-5">
            <div className="flex justify-between text-xs mb-1.5">
              <span className="font-semibold text-gray-600">Onboarding Progress</span>
              <span className="font-bold text-gray-900">{done}/{total} checks · {pct}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full transition-all ${pct >= 80 ? "bg-emerald-500" : pct >= 40 ? "bg-amber-400" : "bg-red-400"}`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4">

          {/* 1. Settlement Approval Checklist */}
          <Section
            num="1"
            title="Settlement Approval Checklist"
            badge={
              <span className={`text-xs font-bold rounded-full px-2.5 py-1 ${pct === 100 ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                {done}/{total}
              </span>
            }
          >
            <div className="grid sm:grid-cols-2 gap-2">
              {(Object.entries(vendor.checklist) as [ChecklistKey, boolean][]).map(([key, val]) => (
                <div
                  key={key}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 border ${val ? "bg-emerald-50 border-emerald-100" : "bg-white border-gray-200"}`}
                >
                  <div className={`h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 ${val ? "bg-emerald-500" : "bg-gray-200"}`}>
                    {val ? (
                      <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : <span className="h-2 w-2 rounded-full bg-gray-400" />}
                  </div>
                  <span className={`text-sm font-medium ${val ? "text-gray-900" : "text-gray-500"}`}>{CHECKLIST_LABELS[key]}</span>
                  <span className={`ml-auto text-xs font-bold flex-shrink-0 ${val ? "text-emerald-600" : "text-gray-400"}`}>{val ? "✓ Done" : "Pending"}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* 2. Business & Contact */}
          <Section num="2" title="Business & Contact Details">
            <InfoGrid items={[
              ["Business Name", vendor.businessName],
              ["Entity Type", vendor.entityType],
              ["Contact Person", vendor.contactName],
              ["Email", vendor.email],
              ["Phone", vendor.phone],
              ["City / State", `${vendor.city}, ${vendor.state}`],
              ["Category", vendor.category],
              ["Applied On", vendor.appliedDate],
            ]} />
            {vendor.products.length > 0 && (
              <div className="mt-3">
                <p className="text-xs text-gray-400 mb-2">Products to be listed</p>
                <div className="flex flex-wrap gap-2">
                  {vendor.products.map(p => (
                    <span key={p} className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-medium">{p}</span>
                  ))}
                </div>
              </div>
            )}
          </Section>

          {/* 3. Tax Verification */}
          <Section
            num="3"
            title="Tax Verification (GST & PAN)"
            badge={
              <span className={`text-xs font-bold rounded-full px-2.5 py-1 ${vendor.checklist.gstVerified && vendor.checklist.panVerified ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                {vendor.checklist.gstVerified && vendor.checklist.panVerified ? "Verified" : "Pending"}
              </span>
            }
          >
            <div className="space-y-3">
              {[
                {
                  label: "GST Verification",
                  items: [
                    ["GST Status", "Active"],
                    ["GSTIN", "33AAKCK1234M1Z5"],
                    ["GST Legal Name matches", vendor.checklist.gstVerified ? "Yes" : "Unverified"],
                    ["Filing History", vendor.checklist.gstVerified ? "Checked" : "Pending"],
                  ],
                  done: vendor.checklist.gstVerified,
                },
                {
                  label: "PAN Verification",
                  items: [
                    ["PAN Number", "AAKCK1234M"],
                    ["PAN Name match", vendor.checklist.panVerified ? "Confirmed" : "Unverified"],
                  ],
                  done: vendor.checklist.panVerified,
                },
              ].map(block => (
                <div key={block.label} className={`rounded-xl border p-4 ${block.done ? "border-emerald-100 bg-emerald-50/40" : "border-gray-200 bg-white"}`}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-bold text-gray-800">{block.label}</p>
                    <Badge
                      label={block.done ? "Verified" : "Pending"}
                      className={block.done ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {block.items.map(([l, v]) => (
                      <div key={l} className="bg-white/80 rounded-lg px-3 py-2">
                        <p className="text-xs text-gray-400">{l}</p>
                        <p className="text-sm font-medium text-gray-900 mt-0.5">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* 4. UBO */}
          <Section
            num="4"
            title="Beneficial Ownership Verification (UBO)"
            badge={
              <Badge
                label={vendor.checklist.uboVerified ? "Verified" : "Pending"}
                className={vendor.checklist.uboVerified ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}
              />
            }
          >
            <InfoGrid items={[
              ["Full Name", vendor.ubo.name],
              ["Date of Birth", vendor.ubo.dob],
              ["Nationality", vendor.ubo.nationality],
              ["Ownership %", vendor.ubo.ownershipPct],
            ]} />
            <div className="mt-3 bg-gray-50 rounded-xl px-4 py-3">
              <p className="text-xs text-gray-400 mb-2">Residential Address</p>
              <p className="text-sm font-medium text-gray-900">{vendor.ubo.address}</p>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { label: "PAN Verified", done: vendor.ubo.panVerified },
                { label: "Sanctions Cleared", done: vendor.ubo.sanctionsCleared },
                { label: "PEP Cleared", done: vendor.ubo.pepCleared },
              ].map(item => (
                <div key={item.label} className={`rounded-xl px-3 py-2.5 text-center border ${item.done ? "bg-emerald-50 border-emerald-100" : "bg-white border-gray-200"}`}>
                  <div className={`text-lg mb-0.5 ${item.done ? "text-emerald-500" : "text-gray-300"}`}>{item.done ? "✓" : "○"}</div>
                  <p className="text-xs font-medium text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* 5. Authorized Signatory */}
          <Section num="5" title="Authorized Signatory Verification">
            <InfoGrid items={[
              ["Authorized Person", vendor.contactName],
              ["Role / Designation", "Director / Managing Partner"],
              ["Authority to Sign Agreements", vendor.checklist.agreementSigned ? "Confirmed" : "Pending"],
              ["Authority to Receive Payments", vendor.checklist.bankAccountVerified ? "Confirmed" : "Pending"],
            ]} />
          </Section>

          {/* 6. Banking */}
          <Section
            num="6"
            title="Banking Verification"
            badge={
              <Badge
                label={vendor.checklist.bankAccountVerified ? "Verified" : "Pending"}
                className={vendor.checklist.bankAccountVerified ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}
              />
            }
          >
            {vendor.bankDetails.bankName ? (
              <>
                <InfoGrid items={[
                  ["Account Holder", vendor.bankDetails.accountHolder],
                  ["Bank Name", vendor.bankDetails.bankName],
                  ["IFSC Code", vendor.bankDetails.ifsc],
                  ["Account Number", vendor.bankDetails.accountNo],
                ]} />
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {[
                    { label: "Penny Drop", done: vendor.bankDetails.pennyDropStatus === "Verified", status: vendor.bankDetails.pennyDropStatus },
                    { label: "Beneficiary Match", done: vendor.bankDetails.beneficiaryMatch },
                    { label: "3rd Party Check", done: true },
                  ].map(item => (
                    <div key={item.label} className={`rounded-xl px-3 py-2.5 border text-center ${item.done ? "bg-emerald-50 border-emerald-100" : "bg-white border-gray-200"}`}>
                      <p className={`text-sm font-bold ${item.done ? PENNY_COLORS["Verified"] : "text-amber-600"}`}>
                        {"status" in item ? item.status : item.done ? "Passed" : "Pending"}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-xl bg-amber-50 border border-amber-100 px-4 py-3 text-xs text-amber-800">
                  Settlement will only be released to this verified account. Third-party accounts are strictly prohibited per policy.
                </div>
              </>
            ) : (
              <div className="text-center py-8 text-gray-400">
                <p className="text-sm">Bank details not yet submitted by vendor.</p>
              </div>
            )}
          </Section>

          {/* 7. Address Verification */}
          <Section num="7" title="Address Verification">
            <InfoGrid items={[
              ["Registered Office", `${vendor.city}, ${vendor.state}`],
              ["Operational Address", `${vendor.city}, ${vendor.state}`],
              ["Warehouse Address", `Survey / Industrial Area, ${vendor.city}`],
              ["Address Consistency", vendor.checklist.businessVerification ? "Consistent across docs" : "Not verified"],
            ]} />
          </Section>

          {/* 8. Submitted Documents */}
          <Section num="8" title="Submitted Documents">
            <div className="space-y-2">
              {[
                ["GST Certificate", vendor.documents.gstCertificate],
                ["PAN Card", vendor.documents.panCard],
                ["Cancelled Cheque", vendor.documents.cancelledCheque],
                ["Incorporation Certificate / Partnership Deed", vendor.documents.incorporationCertificate],
                ["Address Proof", vendor.documents.addressProof],
                ["UBO Aadhaar / Passport", vendor.documents.uboAadhaar],
                ["Board Resolution / Authorization Letter", vendor.documents.boardResolution],
              ].map(([label, file]) => (
                <DocRow key={label} label={label} filename={file} />
              ))}
            </div>
          </Section>

          {/* 9. Marketplace Risk Assessment */}
          <Section
            num="9"
            title="Marketplace Risk Assessment"
            badge={<Badge label={vendor.riskRating} className={RISK_COLORS[vendor.riskRating]} />}
          >
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { label: "Products Legal to Sell", done: vendor.checklist.productReviewApproved },
                { label: "No Counterfeit Goods", done: vendor.checklist.productReviewApproved },
                { label: "No IP Infringement", done: vendor.checklist.productReviewApproved },
                { label: "No Prohibited Goods", done: vendor.checklist.productReviewApproved },
              ].map(item => (
                <div key={item.label} className={`flex items-center gap-3 rounded-xl px-4 py-3 border ${item.done ? "bg-emerald-50 border-emerald-100" : "bg-white border-gray-200"}`}>
                  <div className={`h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 ${item.done ? "bg-emerald-500" : "bg-gray-200"}`}>
                    {item.done ? (
                      <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />}
                  </div>
                  <span className={`text-sm font-medium ${item.done ? "text-gray-900" : "text-gray-500"}`}>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Risk Rating</span>
                <Badge label={vendor.riskRating} className={RISK_COLORS[vendor.riskRating]} />
              </div>
              {vendor.reviewedBy && (
                <p className="text-xs text-gray-400 mt-1.5">Reviewed by: {vendor.reviewedBy}</p>
              )}
            </div>
          </Section>

          {/* 10. Vendor Agreement */}
          <Section num="10" title="Vendor Tie-Up Agreement">
            <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 mb-4">
              <div className="h-12 w-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900">{vendor.agreementFileName}</p>
                <p className="text-sm text-gray-400 mt-0.5">{vendor.agreementSize} · Uploaded {vendor.agreementUploadedAt}</p>
                <p className="text-xs text-gray-400 mt-0.5">By {vendor.contactName} during onboarding</p>
              </div>
              <button
                onClick={() => setAgreementModalOpen(true)}
                className="rounded-xl bg-gray-900 text-white text-sm font-bold px-5 py-2.5 cursor-pointer hover:bg-gray-800 transition-colors flex-shrink-0"
              >
                View Agreement
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Agreement Signed", vendor.checklist.agreementSigned ? "Yes — digitally signed" : "Not yet signed"],
                ["Marketplace T&C", vendor.checklist.agreementSigned ? "Accepted" : "Pending"],
                ["Commission Structure", vendor.checklist.agreementSigned ? "Acknowledged" : "Pending"],
                ["Settlement Terms", vendor.checklist.agreementSigned ? "Acknowledged" : "Pending"],
                ["Dispute Resolution", vendor.checklist.agreementSigned ? "Accepted" : "Pending"],
                ["Digitally Stored", "Yes — timestamped"],
              ].map(([l, v]) => (
                <div key={l} className="bg-gray-50 rounded-lg px-3 py-2.5">
                  <p className="text-xs text-gray-400">{l}</p>
                  <p className={`text-sm font-medium mt-0.5 ${v.includes("Not") || v === "Pending" ? "text-amber-600" : "text-gray-900"}`}>{v}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Admin notes */}
          {vendor.notes && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-4">
              <p className="text-xs font-bold text-blue-500 uppercase tracking-wide mb-1">Admin Notes</p>
              <p className="text-sm text-blue-900">{vendor.notes}</p>
            </div>
          )}

          {/* Final actions */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <h3 className="font-bold text-gray-900 mb-1">Onboarding Decision</h3>
            <p className="text-sm text-gray-500 mb-4">
              All 9 checklist items must be complete before approving. Current: {done}/{total} done.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button
                disabled={pct < 100}
                className="rounded-xl bg-emerald-600 text-white text-sm font-bold px-6 py-2.5 cursor-pointer hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Approve Vendor
              </button>
              <button className="rounded-xl border border-red-200 bg-red-50 text-red-700 text-sm font-bold px-6 py-2.5 cursor-pointer hover:bg-red-100 transition-colors">
                Reject Application
              </button>
              <button className="rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold px-6 py-2.5 cursor-pointer hover:bg-gray-100 transition-colors">
                Request More Info
              </button>
              <Link
                href="/admin/onboarding"
                className="rounded-xl border border-gray-200 text-gray-500 text-sm font-medium px-6 py-2.5 hover:bg-gray-50 transition-colors inline-flex items-center"
              >
                ← Back to list
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
