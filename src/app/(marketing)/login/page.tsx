"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DEMO_EMAIL = "demo@graybulk.com";
const DEMO_PASSWORD = "demo1234";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
        router.push("/dashboard");
      } else {
        setError("Invalid email or password. Use the demo credentials below.");
        setLoading(false);
      }
    }, 600);
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-1">Welcome back</h1>
          <p className="text-sm text-neutral-500">Sign in to your Gray Bulk account</p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8 space-y-5">
          {/* Demo hint */}
          <div className="rounded-xl bg-neutral-50 border border-neutral-200 px-4 py-3 space-y-1">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Demo credentials</p>
            <p className="text-sm text-neutral-700">
              <span className="font-medium">Email:</span> {DEMO_EMAIL}
            </p>
            <p className="text-sm text-neutral-700">
              <span className="font-medium">Password:</span> {DEMO_PASSWORD}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>

            {error && (
              <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <Button
              type="submit"
              variant="black"
              size="sm"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Signing in…" : "Sign In"}
            </Button>
          </form>

          <p className="text-center text-xs text-neutral-400">
            Don't have an account?{" "}
            <Link
              href="/sign-up"
              className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
