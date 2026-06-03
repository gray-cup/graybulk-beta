"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../_context/auth";
import { useRouter } from "next/navigation";
import { ORDERS, ACTIVE_VENDORS, PENDING_VENDORS } from "./data";

const NAV = [
  {
    href: "/admin/dashboard",
    label: "Dashboard",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href: "/admin/orders",
    label: "Orders",
    badge: ORDERS.length,
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    href: "/admin/vendors",
    label: "Active Vendors",
    badge: ACTIVE_VENDORS.length,
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    href: "/admin/onboarding",
    label: "Pending Onboarding",
    badge: PENDING_VENDORS.length,
    alert: true,
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push("/admin");
  }

  return (
    <aside className="hidden lg:flex flex-col w-60 min-h-screen bg-white border-r border-gray-200 fixed top-0 left-0 z-20">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 h-14 border-b border-gray-100">
        <div className="h-7 w-7 rounded-lg bg-gray-900 text-white text-xs font-bold flex items-center justify-center">G</div>
        <div>
          <p className="text-sm font-bold text-gray-900 leading-tight">Gray Bulk</p>
          <p className="text-[10px] text-gray-400 leading-tight">Admin Portal</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        <p className="px-2 pb-2 text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Main Menu</p>
        {NAV.map(item => {
          const active = pathname === item.href || (item.href !== "/admin/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                active
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <span className={active ? "text-white" : "text-gray-400"}>{item.icon}</span>
              <span className="flex-1">{item.label}</span>
              {item.badge !== undefined && (
                <span className={`rounded-full px-1.5 py-0.5 text-[11px] font-semibold ${active ? "bg-white/20 text-white" : item.alert ? "bg-amber-100 text-amber-700" : "bg-gray-100 text-gray-500"}`}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="px-3 py-4 border-t border-gray-100">
        <div className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 bg-gray-50">
          <div className="h-7 w-7 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-600">A</div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-gray-800 truncate">admin</p>
            <p className="text-[10px] text-gray-400">Super Admin</p>
          </div>
          <button onClick={handleLogout} title="Sign out" className="text-gray-400 hover:text-gray-700 cursor-pointer transition-colors">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
}

export function MobileHeader() {
  const pathname = usePathname();
  const { logout } = useAuth();
  const router = useRouter();
  const current = NAV.find(n => pathname === n.href || (n.href !== "/admin/dashboard" && pathname.startsWith(n.href)));

  return (
    <header className="lg:hidden sticky top-0 z-30 bg-white border-b border-gray-200 px-4 h-14 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-lg bg-gray-900 text-white text-xs font-bold flex items-center justify-center">G</div>
        <span className="text-sm font-semibold text-gray-900">{current?.label ?? "Admin"}</span>
      </div>
      <div className="flex items-center gap-3">
        {NAV.filter(n => n.href !== pathname).slice(0, 2).map(n => (
          <Link key={n.href} href={n.href} className="text-xs text-gray-500 hover:text-gray-900 transition-colors">{n.label}</Link>
        ))}
        <button onClick={() => { logout(); router.push("/admin"); }} className="text-xs text-gray-400 hover:text-gray-700 cursor-pointer transition-colors">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </header>
  );
}
