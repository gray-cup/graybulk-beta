"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Role = "buyer" | "seller" | null;
type Step = "signup" | "onboarding" | "done";

export default function SignUpPage() {
  const [role, setRole] = useState<Role>(null);
  const [agreed, setAgreed] = useState(false);
  const [step, setStep] = useState<Step>("signup");

  function handleSignUp(e: React.SyntheticEvent) {
    e.preventDefault();
    setStep("onboarding");
  }

  function handleOnboarding(e: React.SyntheticEvent) {
    e.preventDefault();
    setStep("done");
  }

  function restart() {
    setRole(null);
    setAgreed(false);
    setStep("signup");
  }

  if (step === "done") {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900">You're all set!</h2>
          <p className="text-neutral-500 text-sm max-w-xs mx-auto">
            Account created as a <span className="font-semibold capitalize">{role}</span>. This is a demo — no data was saved.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Link href="/dashboard">
              <Button variant="black" size="sm">Go to Dashboard</Button>
            </Link>
            <Button variant="secondary" size="sm" onClick={restart}>
              Start over
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (step === "onboarding") {
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-16">
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 mb-3">
              <span className="text-neutral-300">Step 1 of 2</span>
              <span className="w-16 h-1 rounded-full bg-neutral-900 inline-block" />
              <span className="text-neutral-900 font-semibold">Step 2 of 2</span>
              <span className="w-16 h-1 rounded-full bg-neutral-900 inline-block" />
            </div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-1">One last step</h1>
            <p className="text-sm text-neutral-500">
              Verify your business and accept the agreement to continue
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8">
            <form onSubmit={handleOnboarding} className="space-y-6">
              {/* GST */}
              <div className="space-y-1.5">
                <Label htmlFor="gst">GST Number</Label>
                <Input
                  id="gst"
                  placeholder="22AAAAA0000A1Z5"
                  className="uppercase tracking-widest"
                  maxLength={15}
                />
                <p className="text-xs text-neutral-400">
                  Your 15-digit GST Identification Number (GSTIN)
                </p>
              </div>

              {/* Agreement */}
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 space-y-3">
                <p className="text-sm font-medium text-neutral-700">
                  {role === "seller" ? "Seller Agreement" : "Buyer Agreement"}
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  By signing up you agree to the Gray Bulk{" "}
                  {role === "seller" ? (
                    <Link
                      href="/seller-agreement"
                      target="_blank"
                      className="text-neutral-800 underline underline-offset-2 hover:text-neutral-900"
                    >
                      Seller Agreement
                    </Link>
                  ) : (
                    <Link
                      href="/buyer-agreement"
                      target="_blank"
                      className="text-neutral-800 underline underline-offset-2 hover:text-neutral-900"
                    >
                      Buyer Agreement
                    </Link>
                  )}
                  , which outlines your rights and responsibilities on the platform.
                </p>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                    />
                    <div
                      className={cn(
                        "w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all",
                        agreed
                          ? "bg-neutral-900 border-neutral-900"
                          : "border-neutral-300 bg-white group-hover:border-neutral-500"
                      )}
                    >
                      {agreed && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-neutral-600 leading-relaxed">
                    I have read and agree to the{" "}
                    <span className="font-medium text-neutral-900 capitalize">
                      {role} Agreement
                    </span>{" "}
                    and the{" "}
                    <Link
                      href="/terms"
                      target="_blank"
                      className="underline underline-offset-2 hover:text-neutral-900"
                    >
                      Terms of Service
                    </Link>
                    .
                  </span>
                </label>
              </div>

              <div className="flex gap-3 pt-1">
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  className="flex-1"
                  onClick={() => setStep("signup")}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="black"
                  size="sm"
                  className="flex-[2]"
                  disabled={!agreed}
                >
                  Complete Setup
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // step === "signup"
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 mb-3">
            <span className="text-neutral-900 font-semibold">Step 1 of 2</span>
            <span className="w-16 h-1 rounded-full bg-neutral-900 inline-block" />
            <span className="text-neutral-300">Step 2 of 2</span>
            <span className="w-16 h-1 rounded-full bg-neutral-200 inline-block" />
          </div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-1">
            Create an account <span className="text-neutral-400 font-normal text-lg">(Demo)</span>
          </h1>
          <p className="text-sm text-neutral-500">Join Gray Bulk — it takes less than a minute</p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8 space-y-6">
          {/* Role picker */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-700">I am a…</p>
            <div className="grid grid-cols-2 gap-3">
              {(["buyer", "seller"] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={cn(
                    "flex flex-col items-center gap-2 border rounded-xl py-4 px-3 transition-all cursor-pointer select-none",
                    role === r
                      ? "border-neutral-900 bg-neutral-900 text-white shadow-sm"
                      : "border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-400 hover:bg-white"
                  )}
                >
                  {r === "buyer" ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                    </svg>
                  )}
                  <span className="text-sm font-semibold capitalize">{r}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Form fields */}
          <form
            onSubmit={handleSignUp}
            className={cn(
              "space-y-4 transition-all duration-300",
              !role && "opacity-40 pointer-events-none select-none"
            )}
          >
            <div className="space-y-1.5">
              <Label htmlFor="company">Company name</Label>
              <Input id="company" placeholder="Acme Corp." autoComplete="organization" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="name">Authorized person's name</Label>
              <Input id="name" placeholder="Jane Smith" autoComplete="name" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="jane@acme.com" autoComplete="email" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" type="tel" placeholder="+91 98765 43210" autoComplete="tel" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" autoComplete="new-password" />
            </div>

            <Button
              type="submit"
              variant="black"
              size="sm"
              className="w-full mt-2"
              disabled={!role}
            >
              Continue
              {role && (
                <span className="text-xs font-normal opacity-70 ml-1">as {role}</span>
              )}
            </Button>
          </form>

          <p className="text-center text-xs text-neutral-400">
            Already have an account?{" "}
            <a href="#" className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
