"use client";

import Logo from "./Logo";
import UPILogo from "./cards/upi";
import VisaLogo from "./cards/visa";
import MastercardLogo from "./cards/mastercard";
import AmexLogo from "./cards/amex";
import RupayLogo from "./cards/rupay";
import Link from "next/link";
import { BankIcon } from "@phosphor-icons/react";



export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <Logo className="h-10 w-auto" />
            <h3 className="font-semibold text-lg mb-1.5 mt-4">Gray Bulk</h3>
            <p className="text-muted-foreground text-sm">
              Commerce infrastructure for Indian wholesale. Built for suppliers, manufacturers, and distributors.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Product</h4>
            <ul className="space-y-2 text-md">
              <li>
                <Link
                  href="https://discord.gg/RHj9pcy2Pp"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Discord Server
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Links</h4>
            <ul className="space-y-2 text-md">
              <li>
                <Link
                  href="https://x.com/Gray BulkAI"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Gray BulkAI"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href="https://cal.com/arjunaditya/30min?user=arjunaditya"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Call me
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-md">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/seller-agreement" className="text-muted-foreground hover:text-foreground transition-colors">
                  Seller Agreement
                </Link>
              </li>
              <li>
                <Link href="/shipping-returns" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shipping &amp; Returns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-1.5 pb-4">
            <BankIcon size={32} weight="duotone" color="#0433ff" />
              <h4 className="font-semibold italic text-[#0433ff] text-lg">NEFT/RTGS</h4>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <UPILogo className="h-5 w-auto" />
              <RupayLogo className="h-5 w-auto" />
            </div>
            <div className="flex flex-wrap pt-2.5 gap-2 items-center">              <VisaLogo className="h-12 w-auto" />
              <MastercardLogo className="h-12 w-auto" />
              <AmexLogo className="h-12 w-auto" />
</div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Gray Bulk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
