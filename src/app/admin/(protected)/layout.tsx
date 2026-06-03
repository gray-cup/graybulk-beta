"use client";

import { RequireAuth } from "../_context/auth";
import { Sidebar, MobileHeader } from "../_components/sidebar";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <RequireAuth>
      <Sidebar />
      <MobileHeader />
      <div className="lg:pl-60">
        <main className="p-4 sm:p-6 lg:p-8 max-w-screen-xl">{children}</main>
      </div>
    </RequireAuth>
  );
}
