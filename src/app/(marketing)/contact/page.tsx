import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Gray Bulk",
  description:
    "Contact Gray Cup Enterprises Private Limited — the company behind the Gray Bulk B2B wholesale marketplace.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 lg:px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">Contact Us</h1>
        <p className="text-neutral-500 text-sm">
          Gray Cup Enterprises Private Limited
        </p>
      </div>

      <div className="space-y-4">
        <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
            Email
          </p>
          <a
            href="mailto:arjun@graycup.in"
            className="text-neutral-900 font-medium hover:underline block"
          >
            arjun@graycup.in
          </a>
        </div>

        <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
            Office Email
          </p>
          <a
            href="mailto:office@graycup.org"
            className="text-neutral-900 font-medium hover:underline block"
          >
            office@graycup.org
          </a>
        </div>

        <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
            Phone
          </p>
          <a
            href="tel:+918527914317"
            className="text-neutral-900 font-medium hover:underline block"
          >
            +91 85279 14317
          </a>
        </div>
      </div>
    </div>
  );
}
