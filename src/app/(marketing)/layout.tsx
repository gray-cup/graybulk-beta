import React from "react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Header */}
      <Navbar />

      {/* Main content */}
      <main className="w-full">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 ">{children}</div>
      </main>

      {/* Footer */}
      <Footer />

      <div className="fixed bottom-6 right-6 z-50 rounded-xl border border-gray-200 bg-white px-4 py-2.5 shadow-lg text-xs font-medium text-muted-foreground select-none">
        This is Demo
      </div>
    </div>
  );
}
