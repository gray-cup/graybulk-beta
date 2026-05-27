"use client";

import { useState, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { categories, parsePrice, formatINR, toSlug } from "@/lib/categories";

const GST_RATE = 0.18;

type AddressFields = {
  name: string;
  phone: string;
  company: string;
  address: string;
  pincode: string;
};

function AddressForm({
  prefix,
  showGst,
}: {
  prefix: string;
  showGst?: boolean;
}) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor={`${prefix}-name`}>Contact Person</Label>
          <Input id={`${prefix}-name`} placeholder="Jane Smith" autoComplete="name" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor={`${prefix}-phone`}>Phone Number</Label>
          <Input id={`${prefix}-phone`} type="tel" placeholder="+91 98765 43210" autoComplete="tel" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor={`${prefix}-company`}>Company Name</Label>
        <Input id={`${prefix}-company`} placeholder="Acme Industries Pvt Ltd" autoComplete="organization" />
      </div>

      {showGst && (
        <div className="space-y-1.5">
          <Label htmlFor={`${prefix}-gst`}>GST Number</Label>
          <Input
            id={`${prefix}-gst`}
            placeholder="22AAAAA0000A1Z5"
            className="uppercase tracking-widest"
            maxLength={15}
          />
          <p className="text-xs text-neutral-400">Required for GST-compliant invoice</p>
        </div>
      )}

      <div className="space-y-1.5">
        <Label htmlFor={`${prefix}-address`}>Address</Label>
        <textarea
          id={`${prefix}-address`}
          rows={3}
          placeholder={"Plot No. 12, Industrial Area Phase II\nChandigarh – 160002, Punjab"}
          className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 resize-none"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor={`${prefix}-pincode`}>Pincode</Label>
        <Input id={`${prefix}-pincode`} placeholder="160002" maxLength={6} className="max-w-[160px]" />
      </div>
    </div>
  );
}

export default function CheckoutPage({
  params,
}: {
  params: Promise<{ slug: string; product: string }>;
}) {
  const { slug, product: productSlug } = use(params);
  const searchParams = useSearchParams();
  const qty = Math.max(1, Number(searchParams.get("qty") ?? "1"));

  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const product = category.products.find((p) => toSlug(p.name) === productSlug);
  if (!product) notFound();

  const basePrice = parsePrice(product.price);
  const subtotal = basePrice * qty;
  const gst = Math.round(subtotal * GST_RATE);
  const total = subtotal + gst;

  const [blocked, setBlocked] = useState(false);
  const [separateBilling, setSeparateBilling] = useState(false);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setBlocked(true);
  }

  const productUrl = `/categories/${category.slug}/${productSlug}`;

  return (
    <div className="py-10 max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-muted-foreground flex items-center gap-1.5 flex-wrap">
        <Link href="/categories" className="hover:text-foreground transition-colors">Categories</Link>
        <span>/</span>
        <Link href={`/categories/${category.slug}`} className="hover:text-foreground transition-colors">{category.name}</Link>
        <span>/</span>
        <Link href={productUrl} className="hover:text-foreground transition-colors">{product.name}</Link>
        <span>/</span>
        <span className="text-neutral-800">Checkout</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
        {/* ── Left: form ── */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-6">
          <h1 className="text-xl font-bold text-neutral-900 mb-1">Shipping & Billing</h1>
          <p className="text-sm text-neutral-400 mb-6">Enter your delivery and GST details to complete the order</p>

          {blocked ? (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 px-6 py-10 text-center space-y-4">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
              </div>
              <div>
                <p className="text-base font-semibold text-amber-900">Payment gateway not connected</p>
                <p className="text-sm text-amber-600 mt-1 max-w-xs mx-auto leading-relaxed">
                  This is a demo. Payment processing is not live yet. Your order details have been noted.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 justify-center pt-1">
                <Button variant="secondary" size="sm" onClick={() => setBlocked(false)}>
                  Edit Details
                </Button>
                <Link href="/dashboard">
                  <Button variant="black" size="sm">Back to Dashboard</Button>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              {/* ── Shipping ── */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-neutral-900 text-white text-xs font-bold flex items-center justify-center shrink-0">1</div>
                  <h2 className="text-sm font-semibold text-neutral-800 uppercase tracking-wide">Shipping Address</h2>
                </div>
                <AddressForm prefix="ship" />
              </section>

              {/* ── Billing toggle ── */}
              <div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-neutral-800">Billing address is different</p>
                  <p className="text-xs text-neutral-400 mt-0.5">Toggle to enter a separate billing address &amp; GST</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSeparateBilling((v) => !v)}
                  className={cn(
                    "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none",
                    separateBilling ? "bg-neutral-900" : "bg-neutral-300"
                  )}
                  role="switch"
                  aria-checked={separateBilling}
                >
                  <span
                    className={cn(
                      "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200",
                      separateBilling ? "translate-x-5" : "translate-x-0"
                    )}
                  />
                </button>
              </div>

              {/* ── Billing (conditional) ── */}
              {separateBilling ? (
                <section className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-neutral-900 text-white text-xs font-bold flex items-center justify-center shrink-0">2</div>
                    <h2 className="text-sm font-semibold text-neutral-800 uppercase tracking-wide">Billing Address</h2>
                  </div>
                  <AddressForm prefix="bill" showGst />
                </section>
              ) : (
                /* GST shown under shipping when same address */
                <div className="space-y-1.5">
                  <Label htmlFor="gst">GST Number</Label>
                  <Input
                    id="gst"
                    placeholder="22AAAAA0000A1Z5"
                    className="uppercase tracking-widest"
                    maxLength={15}
                  />
                  <p className="text-xs text-neutral-400">Required for GST-compliant invoice</p>
                </div>
              )}

              {/* ── Submit ── */}
              <div className="pt-2 border-t border-neutral-100 space-y-3">
                <Button type="submit" variant="black" size="sm" className="w-full text-base py-3">
                  Proceed to Payment
                </Button>
                <p className="text-center text-xs text-neutral-400">
                  By proceeding you agree to the{" "}
                  <Link href="/buyer-agreement" target="_blank" className="underline underline-offset-2 hover:text-neutral-600">
                    Buyer Agreement
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms" target="_blank" className="underline underline-offset-2 hover:text-neutral-600">
                    Terms of Service
                  </Link>
                </p>
              </div>
            </form>
          )}
        </div>

        {/* ── Right: order summary ── */}
        <div className="space-y-4 lg:sticky lg:top-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-5 space-y-4">
            <h2 className="text-sm font-semibold text-neutral-800">Order Summary</h2>

            <div className="flex items-start gap-3 pb-4 border-b border-neutral-100">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-neutral-800 leading-snug">{product.name}</p>
                <p className="text-xs text-neutral-400 mt-0.5">{product.supplier}</p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-neutral-500">
                <span>Unit price</span>
                <span className="tabular-nums">{product.price}</span>
              </div>
              <div className="flex justify-between text-neutral-500">
                <span>Qty</span>
                <span className="tabular-nums">{qty} × {product.unit}</span>
              </div>
              <div className="flex justify-between text-neutral-700 font-medium pt-2 border-t border-neutral-100">
                <span>Subtotal</span>
                <span className="tabular-nums">{formatINR(subtotal)}</span>
              </div>
              <div className="flex justify-between text-neutral-500">
                <span>GST (18%)</span>
                <span className="tabular-nums">{formatINR(gst)}</span>
              </div>
              <div className="flex justify-between text-neutral-900 font-bold text-base pt-2 border-t border-neutral-200">
                <span>Total Payable</span>
                <span className="tabular-nums">{formatINR(total)}</span>
              </div>
            </div>
          </div>

          <Link href={productUrl} className="flex items-center justify-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-800 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back to product
          </Link>
        </div>
      </div>
    </div>
  );
}
