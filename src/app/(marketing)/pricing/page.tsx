"use client";

import { BankIcon } from "@phosphor-icons/react";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import UPILogo from "@/components/cards/upi";

type Tier = {
  name: string;
  monthlyPrice: string;
  yearlyPrice?: string;
  cta: string;
  ctaVariant?: "default" | "primary" | "secondary";
  features: string[];
  flagText?: string;
  hasBilling?: boolean;
  isLifetime?: boolean;
};

/* ---------- Single borderless plan column ---------- */
function PricingCard({
  tier,
  columnRef,
  billing,
}: {
  tier: Tier;
  columnRef?: React.RefObject<HTMLDivElement | null>;
  billing: "monthly" | "yearly";
}) {
  return (
    <div ref={columnRef} className="relative">
      <Card className="p-0 shadow-none border-0 rounded-none bg-white">
        <div className="flex flex-col gap-6">
          <CardHeader className="p-6">
            <CardTitle className="text-lg font-semibold">{tier.name}</CardTitle>
          </CardHeader>

          <CardContent className="p-0">
            <div className="flex w-full flex-col items-start gap-4 px-6 lg:h-[150px]">
              <div className="mb-6 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-4xl leading-none tracking-[-0.15rem] tabular-nums">
                    {billing === "yearly" && tier.yearlyPrice ? tier.yearlyPrice : tier.monthlyPrice}
                  </span>
                </div>
                {tier.isLifetime ? (
                  <CardDescription className="text-xs text-muted-foreground">one-time payment</CardDescription>
                ) : tier.hasBilling && (
                  <CardDescription className="text-xs text-muted-foreground">
                    {billing === "yearly" ? "per year · 2 months free" : "per month"}
                  </CardDescription>
                )}
              </div>
              <Button
                className="w-full h-12 rounded-lg mt-auto"
                variant={tier.ctaVariant ?? "default"}
                size="sm"
              >
                {tier.cta}
              </Button>
            </div>

            <Separator className="my-10" />

            <ul className="mt-4 flex flex-col gap-4 px-6 pb-8 text-sm">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <svg
                    className="size-5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

const tiers: Tier[] = [
  {
    name: "Free",
    monthlyPrice: "₹0",
    cta: "Get Started",
    ctaVariant: "default",
    features: [
      "Up to 5 product listings",
      "Basic supplier profile",
      "Marketplace visibility",
      "Receive buyer inquiries",
      "Automated payment settlements",
    ],
  },
  {
    name: "Growth",
    monthlyPrice: "₹1,250",
    yearlyPrice: "₹12,500",
    cta: "Start Selling",
    ctaVariant: "primary",
    hasBilling: true,
    features: [
      "Up to 30 product listings",
      "Expanded catalog visibility",
      "Enhanced supplier presence",
      "Scalable storefront",
      "Automated payment settlements",
      "Email support",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: "₹3,750",
    yearlyPrice: "₹37,500",
    cta: "Build at Scale",
    ctaVariant: "primary",
    hasBilling: true,
    features: [
      "Up to 100 product listings",
      "Large catalog management",
      "Enterprise supplier presence",
      "High-volume selling capability",
      "Automated payment settlements",
      "Priority support",
    ],
  },
  {
    name: "Large Enterprise",
    monthlyPrice: "Custom",
    cta: "Get in Touch",
    ctaVariant: "primary",
    features: [
      "Unlimited product listings",
      "Dedicated account management",
      "Custom settlement terms",
      "API access for catalog sync",
      "Export-focused infrastructure",
    ],
  },
  {
    name: "Lifetime",
    monthlyPrice: "₹80,000",
    cta: "Get Lifetime Access",
    ctaVariant: "primary",
    isLifetime: true,
    features: [
      "Up to 30 product listings",
      "Expanded catalog visibility",
      "Enhanced supplier presence",
      "Scalable storefront",
      "Automated payment settlements",
      "Email support",
      "Lifetime updates",
    ],
  },
  {
    name: "Enterprise Lifetime",
    monthlyPrice: "₹2,10,000",
    cta: "Get Lifetime Access",
    ctaVariant: "primary",
    isLifetime: true,
    features: [
      "Up to 100 product listings",
      "Large catalog management",
      "Enterprise supplier presence",
      "High-volume selling capability",
      "Automated payment settlements",
      "Priority support",
      "Lifetime updates",
    ],
  },
];

/* ---------- Page ---------- */
export default function PricingPage() {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const [showLifetime, setShowLifetime] = useState(false);

  const [upiOpen, setUpiOpen] = useState(false);
  const [upiAmount, setUpiAmount] = useState(10000);

  const [netOpen, setNetOpen] = useState(false);
  const [netAmount, setNetAmount] = useState(1000000);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-black mb-4">
            Supplier Pricing
          </h1>
          <p className="text-lg text-muted-foreground">
            Predictable plans for suppliers. Buyers always browse and purchase for free.
          </p>
        </div>

        <div className="max-w-6xl flex flex-col md:flex-row justify-center items-start max-md:gap-5 md:gap-6 mx-auto">
          {/* Free (buyers) card */}
          <div className="max-w-sm w-full shrink-0">
            <Card className="p-0 border border-gray-200 rounded-2xl bg-white">
              <div className="flex flex-col gap-6">
                <CardHeader className="p-6">
                  <CardTitle className="text-lg font-semibold">Free</CardTitle>
                </CardHeader>

                <CardContent className="p-0">
                  <div className="flex w-full flex-col items-start gap-4 px-6 lg:h-[150px]">
                    <div className="mb-6 flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-4xl leading-none tracking-[-0.15rem] tabular-nums">
                          ₹0
                        </span>
                      </div>
                      <CardDescription className="text-xs text-muted-foreground">
                        always free to browse and buy
                      </CardDescription>
                    </div>
                  </div>

                  <Separator className="" />

                  <ul className="mt-4 flex flex-col gap-4 px-6 pb-8 text-sm">
                    {[
                      "Discover verified Indian suppliers",
                      "Browse wholesale product catalogs",
                      "Purchase directly at wholesale rates",
                      "Secure payments with automated settlements",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  
                </CardContent>
                  <div className="flex w-full flex-col items-start gap-4 px-6 pb-8">
                    <a href="https://app.graybulk.com" target="_blank" className="w-full">
                      <Button className="w-full h-12 rounded-lg" variant="secondary">
                        Join Discord Server
                      </Button>
                    </a>
                                    <a href="https://app.graybulk.com" target="_blank" className="w-full">
                      <Button className="w-full h-12 rounded-lg" variant="secondary">
                        Start Sourcing
                      </Button>
                    </a>
                                                        <a href="https://app.graybulk.com" target="_blank" className="w-full">
                      <Button className="w-full h-12 rounded-lg" variant="primary">
                        Start Selling
                      </Button>
                    </a>
                    </div>
              </div>
            </Card>
          </div>

          {/* Settlement cards in flex-col */}
          <div className="flex flex-col gap-4 w-full">
            <Card className="p-6 border border-gray-200 rounded-2xl bg-white overflow-hidden">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <UPILogo className="h-8 w-auto self-start" />
                  <span className="text-lg font-semibold pt-2">Unified Payment Interface</span>
                  <span className="text-3xl font-semibold tracking-[-0.1rem] tabular-nums">0.4%</span>
                  <CardDescription className="text-xs text-muted-foreground">of UPI transaction value</CardDescription>
                </div>
                <Button variant="secondary" className="shrink-0 mt-1" onClick={() => setUpiOpen((v) => !v)}>
                  {upiOpen ? "Hide" : "Calculate Fees"}
                </Button>
              </div>
              <Separator className="my-3" />
              <p className="text-sm text-muted-foreground">Platform fee applied on all UPI-based payments. Settlements processed automatically with no hidden charges.</p>
              <div
                className="grid transition-all duration-500 ease-in-out"
                style={{ gridTemplateRows: upiOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-3 pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Transaction value</span>
                      <span className="font-semibold tabular-nums">₹{upiAmount.toLocaleString("en-IN")}</span>
                    </div>
                    <input
                      type="range"
                      min={1000}
                      max={100000}
                      step={1000}
                      value={upiAmount}
                      onChange={(e) => setUpiAmount(Number(e.target.value))}
                      className="w-full accent-black"
                    />
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>₹1,000</span>
                      <span>₹1,00,000</span>
                    </div>
                    <div className="rounded-xl bg-gray-50 px-4 py-3 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Platform fee</span>
                      <span className="font-semibold tabular-nums">₹{Math.round(upiAmount * 0.004).toLocaleString("en-IN")}</span>
                    </div>
                    <div className="rounded-xl bg-gray-50 px-4 py-3 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">You receive</span>
                      <span className="font-semibold tabular-nums">₹{(upiAmount - Math.round(upiAmount * 0.004)).toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-6 border border-gray-200 rounded-2xl bg-white overflow-hidden">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <BankIcon size={32} weight="duotone" color="#0433ff" />
                  <span className="text-lg font-semibold">NET Banking</span>
                  <span className="text-3xl font-semibold tracking-[-0.1rem] tabular-nums">₹230</span>
                  <CardDescription className="text-xs text-muted-foreground">flat fee per net banking transaction</CardDescription>
                </div>
                <Button variant="secondary" className="shrink-0 mt-1" onClick={() => setNetOpen((v) => !v)}>
                  {netOpen ? "Hide" : "Calculate Fees"}
                </Button>
              </div>
              <Separator className="my-3" />
              <p className="text-sm text-muted-foreground">Fixed flat fee per net banking transaction. Settlements processed automatically with no hidden charges.</p>
              <div
                className="grid transition-all duration-500 ease-in-out"
                style={{ gridTemplateRows: netOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-3 pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Transaction value</span>
                      <span className="font-semibold tabular-nums">₹{netAmount.toLocaleString("en-IN")}</span>
                    </div>
                    <input
                      type="range"
                      min={100000}
                      max={10000000}
                      step={100000}
                      value={netAmount}
                      onChange={(e) => setNetAmount(Number(e.target.value))}
                      className="w-full accent-black"
                    />
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>₹1,00,000</span>
                      <span>₹1,00,00,000</span>
                    </div>
                    <div className="rounded-xl bg-gray-50 px-4 py-3 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Platform fee</span>
                      <span className="font-semibold tabular-nums">₹230</span>
                    </div>
                    <div className="rounded-xl bg-gray-50 px-4 py-3 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">You receive</span>
                      <span className="font-semibold tabular-nums">₹{(netAmount - 230).toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10">
          {/* Billing toggle */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 gap-1">
              <button
                onClick={() => { setBilling("monthly"); setShowLifetime(false); }}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  billing === "monthly" && !showLifetime
                    ? "bg-gray-100 text-black"
                    : "text-muted-foreground hover:text-black"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => { setBilling("yearly"); setShowLifetime(false); }}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  billing === "yearly" && !showLifetime
                    ? "bg-gray-100 text-black"
                    : "text-muted-foreground hover:text-black"
                }`}
              >
                Yearly
              </button>
              <button
                onClick={() => setShowLifetime(true)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  showLifetime
                    ? "bg-gray-100 text-black"
                    : "text-muted-foreground hover:text-black"
                }`}
              >
                Lifetime
              </button>
            </div>
          </div>

          {/* Wrapper must be relative so overlay positions correctly */}
          <div className="relative">
            {/* Framed container can be overflow-hidden now; corners stay clean */}
            <div
              ref={frameRef}
              className="rounded-2xl max-md:max-w-sm max-md:mx-auto border border-gray-200 bg-white overflow-hidden"
            >
              <div className={`grid grid-cols-1 divide-x divide-y divide-gray-200 ${showLifetime ? "md:grid-cols-2" : "md:grid-cols-4"}`}>
                {tiers.filter((t) => !!t.isLifetime === showLifetime).map((t) => {
                  return (
                    <div key={t.name} className="relative">
                      <PricingCard tier={t} billing={billing} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* end wrapper */}
        </div>

      </div>
    </div>
  );
}
