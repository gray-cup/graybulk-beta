"use client";

import { useState, use } from "react";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { categories, parsePrice, formatINR, toSlug } from "@/lib/categories";
import { getSupplier } from "@/lib/suppliers";

const GST_RATE = 0.18;

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string; product: string }>;
}) {
  const { slug, product: productSlug } = use(params);
  const router = useRouter();

  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const product = category.products.find((p) => toSlug(p.name) === productSlug);
  if (!product) notFound();

  const supplier = getSupplier(product.supplier);
  const [qty, setQty] = useState(1);

  const basePrice = parsePrice(product.price);
  const subtotal = basePrice * qty;
  const gst = Math.round(subtotal * GST_RATE);
  const total = subtotal + gst;

  function handleBuyNow() {
    router.push(
      `/categories/${category!.slug}/${productSlug}/checkout?qty=${qty}`
    );
  }

  return (
    <div className="py-10">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-muted-foreground flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/categories" className="hover:text-foreground transition-colors">Categories</Link>
        <span>/</span>
        <Link href={`/categories/${category.slug}`} className="hover:text-foreground transition-colors">{category.name}</Link>
        <span>/</span>
        <span className="text-neutral-800">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
        {/* ── Left column ── */}
        <div className="space-y-6">
          {/* Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-neutral-100 bg-neutral-50">
            <Image
              src={category.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          {/* Name + price */}
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 mb-3">{product.name}</h1>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-neutral-900 tabular-nums">{product.price}</span>
              <span className="text-sm text-neutral-400">{product.unit}</span>
            </div>
          </div>

          {/* Spec chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Min. Order", value: product.moq },
              { label: "Settlement", value: "T+2 days" },
              { label: "GST Invoice", value: "Included" },
              { label: "Verified", value: "Yes ✓" },
            ].map((s) => (
              <div key={s.label} className="bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3">
                <p className="text-xs text-neutral-400 mb-0.5">{s.label}</p>
                <p className="text-sm font-semibold text-neutral-800">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Supplier profile card */}
          {supplier && (
            <Link
              href={`/suppliers/${toSlug(supplier.name)}`}
              className="bg-white border border-neutral-200 rounded-2xl p-5 space-y-4 block hover:shadow-md hover:border-neutral-300 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-neutral-100 flex items-center justify-center text-lg font-bold text-neutral-600 shrink-0">
                    {supplier.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 leading-tight">{supplier.name}</p>
                    <p className="text-xs text-neutral-400 mt-0.5">{supplier.location}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 shrink-0 rounded-full bg-green-50 border border-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verified
                </span>
              </div>

              <p className="text-sm text-neutral-500 leading-relaxed">{supplier.description}</p>

              <div className="grid grid-cols-3 gap-3 pt-1 border-t border-neutral-100">
                <div>
                  <p className="text-xs text-neutral-400">Rating</p>
                  <p className="text-sm font-semibold text-neutral-800 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {supplier.rating} <span className="text-neutral-400 font-normal">({supplier.reviewCount})</span>
                  </p>
                </div>
                <div>
                  <p className="text-xs text-neutral-400">Est.</p>
                  <p className="text-sm font-semibold text-neutral-800">{supplier.estYear}</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-400">Products</p>
                  <p className="text-sm font-semibold text-neutral-800">{supplier.totalProducts}</p>
                </div>
              </div>

              <div className="pt-1 border-t border-neutral-100 flex items-center justify-between">
                <p className="text-xs text-neutral-400">
                  GSTIN: <span className="font-mono text-neutral-600">{supplier.gstin}</span>
                </p>
                <span className="text-xs font-medium text-[#0052FF]">View profile →</span>
              </div>
            </Link>
          )}
        </div>

        {/* ── Right column ── */}
        <div className="space-y-4 lg:sticky lg:top-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-5 space-y-5">
            <h2 className="text-base font-semibold text-neutral-900">Order Summary</h2>

            {/* Quantity stepper */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 rounded-xl border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 transition-colors text-xl leading-none select-none"
                >
                  −
                </button>
                <span className="text-2xl font-bold text-neutral-900 tabular-nums w-8 text-center">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="w-9 h-9 rounded-xl border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 transition-colors text-xl leading-none select-none"
                >
                  +
                </button>
                <span className="text-sm text-neutral-400">{product.unit}</span>
              </div>
            </div>

            {/* Price breakdown */}
            <div className="space-y-2 rounded-xl bg-neutral-50 border border-neutral-100 px-4 py-3 text-sm">
              <div className="flex justify-between text-neutral-500">
                <span>Price per unit</span>
                <span className="tabular-nums">{product.price}</span>
              </div>
              <div className="flex justify-between text-neutral-500">
                <span>Qty</span>
                <span className="tabular-nums">× {qty}</span>
              </div>
              <div className="flex justify-between text-neutral-700 font-medium border-t border-neutral-200 pt-2">
                <span>Subtotal</span>
                <span className="tabular-nums">{formatINR(subtotal)}</span>
              </div>
              <div className="flex justify-between text-neutral-500">
                <span>GST (18%)</span>
                <span className="tabular-nums">{formatINR(gst)}</span>
              </div>
              <div className="flex justify-between text-neutral-900 font-bold text-base border-t border-neutral-200 pt-2">
                <span>Total</span>
                <span className="tabular-nums">{formatINR(total)}</span>
              </div>
            </div>

            <Button
              variant="black"
              size="sm"
              className="w-full text-base py-3"
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>

            <p className="text-center text-xs text-neutral-400">
              By ordering you agree to the{" "}
              <Link href="/buyer-agreement" target="_blank" className="underline underline-offset-2 hover:text-neutral-600">
                Buyer Agreement
              </Link>
            </p>
          </div>

          {/* Quick info */}
          <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-4 space-y-2.5 text-sm text-neutral-600">
            {[
              { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", text: "GST-compliant tax invoice included" },
              { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", text: "T+2 settlement after delivery" },
              { icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z", text: "Escrow payment protection" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
