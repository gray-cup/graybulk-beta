"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./_context/auth";

export default function AdminLoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    login("admin", "graybulk@2024");
  }, []);

  function goToDashboard() {
    login("admin", "graybulk@2024");
    router.push("/admin/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 text-white text-2xl font-black mb-4 shadow-lg">
            G
          </div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Gray Bulk</h1>
          <p className="text-sm text-gray-500 mt-1 font-medium">Admin Portal · Internal Use Only</p>
        </div>

        {/* Auth disabled banner */}
        <div className="flex items-start gap-3 rounded-xl bg-amber-50 border border-amber-300 px-4 py-3.5 mb-4">
          <svg className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-xs font-bold text-amber-800 uppercase tracking-wide">Authentication Disabled</p>
            <p className="text-xs text-amber-700 mt-0.5 leading-relaxed">
              Login is disabled for demo purposes. Click the button below to enter the admin panel directly — no credentials required.
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-7">
          <div className="flex items-center gap-2 mb-5">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            <p className="text-xs font-semibold text-gray-500">Open access · No login required</p>
          </div>

          <button
            onClick={goToDashboard}
            className="w-full rounded-xl bg-gray-900 text-white text-sm font-bold py-3.5 cursor-pointer hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Go to Dashboard
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <div className="mt-5 pt-4 border-t border-gray-100 space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Auth status</span>
              <span className="font-semibold text-amber-600">Disabled</span>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Logged in as</span>
              <span className="font-semibold text-gray-700">admin (auto)</span>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Role</span>
              <span className="font-semibold text-gray-700">Super Admin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
