import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Gray Bulk",
  description:
    "Read the Terms and Conditions governing use of the Gray Bulk B2B wholesale marketplace, operated by Gray Cup Enterprises Private Limited.",
};

export default function TermsAndConditions() {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h1 className="text-3xl font-bold text-neutral-800 mb-6">
        Terms and Conditions
      </h1>

      <div className="prose prose-neutral">
        <p className="text-muted-foreground mb-6">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-IN", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <p className="mb-6">
          These Terms and Conditions ("Terms") govern your access to and use of
          the Gray Bulk marketplace platform, website, and related services
          (collectively, the "Platform"), operated by Gray Cup Enterprises
          Private Limited ("Gray Bulk", "Company", "we", "us", "our"), a
          company incorporated under the Companies Act, 2013. By accessing,
          registering on, or using the Platform in any capacity — whether as a
          buyer, seller, or visitor — you agree to be legally bound by these
          Terms. If you do not agree, you must discontinue use of the Platform
          immediately.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          1. Definitions
        </h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>"Platform"</strong> means the Gray Bulk website, mobile
            application, APIs, and any associated services operated by Gray Cup
            Enterprises Private Limited.
          </li>
          <li>
            <strong>"User"</strong> means any individual or entity that accesses
            or uses the Platform, including buyers, sellers, and visitors.
          </li>
          <li>
            <strong>"Seller"</strong> means a verified business entity that
            lists products for wholesale sale on the Platform.
          </li>
          <li>
            <strong>"Buyer"</strong> means a verified business entity that
            purchases products through the Platform.
          </li>
          <li>
            <strong>"Order"</strong> means a confirmed purchase transaction
            between a buyer and a seller facilitated through the Platform.
          </li>
          <li>
            <strong>"Content"</strong> means any text, images, descriptions,
            documents, or data submitted to or displayed on the Platform.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          2. Nature of the Platform
        </h2>
        <p className="mb-4">
          Gray Bulk is a business-to-business (B2B) wholesale marketplace that
          connects verified Indian manufacturers, suppliers, and distributors
          ("Sellers") with verified business buyers ("Buyers"). Gray Cup
          Enterprises Private Limited operates the Platform as an intermediary
          and marketplace facilitator. Gray Bulk is <strong>not</strong> a
          party to the contract of sale between buyers and sellers, and does not
          take title to, possess, or warrant the goods listed or sold on the
          Platform.
        </p>
        <p className="mb-4">
          Transactions on the Platform are governed by the respective{" "}
          <a href="/seller-agreement" className="text-blue-600 hover:underline">
            Seller Agreement
          </a>{" "}
          and{" "}
          <a href="/buyer-agreement" className="text-blue-600 hover:underline">
            Buyer Agreement
          </a>
          , which are incorporated into these Terms by reference. In the event
          of any conflict between these Terms and the Seller or Buyer Agreement,
          the more specific document shall prevail with respect to the subject
          matter it governs.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          3. Eligibility
        </h2>
        <p className="mb-4">
          The Platform is intended solely for business use. To register and use
          the Platform, you must:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            Be a legally registered business entity or individual (at least 18
            years of age) in India.
          </li>
          <li>
            Have the legal authority to bind the business entity you represent
            to these Terms.
          </li>
          <li>
            Not have been previously suspended or permanently banned from the
            Platform or any affiliated service.
          </li>
          <li>
            Provide accurate, complete, and verifiable registration information,
            including GSTIN where applicable.
          </li>
        </ul>
        <p className="mb-4">
          Gray Bulk reserves the right to verify your credentials and reject any
          registration or account at its sole discretion.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          4. Account Responsibilities
        </h2>
        <p className="mb-4">
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activities conducted under your
          account. You must notify Gray Bulk immediately at{" "}
          <a
            href="mailto:support@graybulk.com"
            className="text-blue-600 hover:underline"
          >
            support@graybulk.com
          </a>{" "}
          if you suspect any unauthorised access to or use of your account. Gray
          Bulk is not liable for any losses arising from your failure to
          maintain account security.
        </p>
        <p className="mb-4">
          You agree not to share your account credentials with any third party,
          and to keep your registered business details, GSTIN, banking
          information, and contact details current and accurate at all times.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          5. Orders and Transactions
        </h2>
        <p className="mb-4">
          All orders placed through the Platform are subject to the terms of the
          applicable{" "}
          <a href="/buyer-agreement" className="text-blue-600 hover:underline">
            Buyer Agreement
          </a>{" "}
          and{" "}
          <a href="/seller-agreement" className="text-blue-600 hover:underline">
            Seller Agreement
          </a>
          . Confirmed orders constitute binding commitments. Cancellations,
          returns, refunds, and dispute resolution are governed by the{" "}
          <a
            href="/cancellation-refunds"
            className="text-blue-600 hover:underline"
          >
            Cancellation and Refunds Policy
          </a>{" "}
          and the{" "}
          <a
            href="/shipping-returns"
            className="text-blue-600 hover:underline"
          >
            Shipping Policy
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          6. Platform Fees
        </h2>
        <p className="mb-4">
          Gray Bulk charges platform fees for transactions and services as
          detailed on the{" "}
          <a href="/pricing" className="text-blue-600 hover:underline">
            Pricing
          </a>{" "}
          page. All fees are exclusive of applicable GST unless stated
          otherwise. Gray Bulk reserves the right to revise its fee structure
          with 15 days' prior written notice to registered users.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          7. Prohibited Conduct
        </h2>
        <p className="mb-4">
          You agree not to use the Platform to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            List, sell, or purchase any goods that are illegal, counterfeit,
            stolen, hazardous, or prohibited under Indian law.
          </li>
          <li>
            Engage in fraud, misrepresentation, price manipulation, or any
            deceptive trade practice.
          </li>
          <li>
            Solicit buyers or sellers to transact outside the Platform with
            intent to circumvent Platform fees or buyer/seller protections.
          </li>
          <li>
            Upload malicious code, conduct denial-of-service attacks, or
            attempt to gain unauthorised access to Platform systems.
          </li>
          <li>
            Violate any applicable Indian or international law, including the
            Information Technology Act 2000, Competition Act 2002, Consumer
            Protection Act 2019, Prevention of Money Laundering Act 2002, and
            all applicable GST provisions.
          </li>
          <li>
            Create multiple accounts or engage in any activity that distorts
            the Platform's ratings, reviews, or market signals.
          </li>
          <li>
            Infringe on the intellectual property rights of any third party,
            including trademarks, patents, copyrights, or trade secrets.
          </li>
        </ul>
        <p className="mb-4">
          Violation of any prohibition may result in immediate account
          suspension, forfeiture of pending settlements, and referral to
          relevant law enforcement or regulatory authorities.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          8. Intellectual Property
        </h2>
        <p className="mb-4">
          All intellectual property on the Platform — including the Gray Bulk
          name, logo, software, interface design, and proprietary content — is
          owned by or licensed to Gray Cup Enterprises Private Limited. You are
          granted a limited, non-exclusive, non-transferable, revocable licence
          to use the Platform solely for the purposes described in these Terms.
          Nothing in these Terms transfers any ownership of intellectual
          property to you.
        </p>
        <p className="mb-4">
          By submitting Content to the Platform (such as product listings,
          images, or documents), you grant Gray Cup Enterprises Private Limited
          a non-exclusive, royalty-free, worldwide licence to display and use
          that Content for the purpose of operating and promoting the
          marketplace.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          9. Privacy
        </h2>
        <p className="mb-4">
          Your use of the Platform is governed by our{" "}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          , which describes how we collect, use, and protect your personal and
          business data. By using the Platform, you consent to the data
          practices described therein.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          10. Disclaimers
        </h2>
        <p className="mb-4">
          The Platform is provided on an "as is" and "as available" basis
          without warranties of any kind, express or implied, including but not
          limited to warranties of merchantability, fitness for a particular
          purpose, or non-infringement. Gray Bulk does not warrant that the
          Platform will be uninterrupted, error-free, or free of viruses or
          other harmful components.
        </p>
        <p className="mb-4">
          Gray Bulk does not verify the accuracy of product listings, certifications,
          or representations made by sellers. Buyers are encouraged to conduct
          independent due diligence before placing orders.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          11. Limitation of Liability
        </h2>
        <p className="mb-4">
          To the maximum extent permitted by applicable law, Gray Cup
          Enterprises Private Limited shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages arising out of
          or related to your use of the Platform, including loss of profit, loss
          of data, loss of goodwill, or business interruption. Gray Bulk's
          total aggregate liability for any claim shall not exceed the greater
          of (a) the platform fees paid by you in the three months preceding the
          event giving rise to the claim, or (b) ₹10,000.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          12. Indemnification
        </h2>
        <p className="mb-4">
          You agree to indemnify, defend, and hold harmless Gray Cup Enterprises
          Private Limited, its directors, officers, employees, and agents from
          and against any claims, liabilities, losses, damages, fines, or
          expenses (including reasonable legal fees) arising out of: (a) your
          use of the Platform in breach of these Terms; (b) your violation of
          any applicable law; (c) your infringement of any third-party rights;
          or (d) the products you list, sell, or purchase through the Platform.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          13. Force Majeure
        </h2>
        <p className="mb-4">
          Gray Bulk shall not be liable for any delay or failure in performance
          caused by circumstances beyond its reasonable control, including
          natural disasters, acts of government, pandemics, power outages, or
          internet infrastructure failures.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          14. Modifications to These Terms
        </h2>
        <p className="mb-4">
          Gray Bulk may update these Terms at any time. Material changes will be
          communicated via registered email at least 15 days before the revised
          Terms take effect. Continued use of the Platform after the effective
          date of any revision constitutes your acceptance of the updated Terms.
          If you do not agree with the revised Terms, you must cease using the
          Platform before the effective date.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          15. Termination
        </h2>
        <p className="mb-4">
          Gray Bulk reserves the right to suspend or terminate your account and
          access to the Platform at any time, with or without notice, for
          violations of these Terms or any policies incorporated herein. You
          may also close your account at any time by contacting{" "}
          <a
            href="mailto:office@graycup.org"
            className="text-blue-600 hover:underline"
          >
            office@graycup.org
          </a>
          . Upon termination, all licences granted to you under these Terms
          shall immediately cease.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          16. Governing Law &amp; Dispute Resolution
        </h2>
        <p className="mb-4">
          These Terms are governed by and construed in accordance with the laws
          of the Republic of India. Any dispute arising out of or in connection
          with these Terms shall first be attempted to be resolved amicably
          through good-faith negotiation. If unresolved within 30 days of
          written notice, the dispute shall be referred to arbitration under
          the Arbitration and Conciliation Act, 1996, with the seat and venue
          of arbitration in Bengaluru, Karnataka. Proceedings shall be in
          English. The arbitrator's award shall be final and binding.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          17. Severability
        </h2>
        <p className="mb-4">
          If any provision of these Terms is found to be invalid or
          unenforceable by a court of competent jurisdiction, the remaining
          provisions shall continue in full force and effect.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          18. Contact Us
        </h2>
        <p className="mb-4">
          For questions regarding these Terms, please contact:
        </p>
        <p className="mb-1"><strong>Gray Cup Enterprises Private Limited</strong></p>
        <p className="mb-1">FF122, Rodeo Drive Mall, GT Road, TDI City, Kundli, Sonipat, Haryana – 131030</p>
        <p className="mb-1">CIN: U47211DL2025PTC457808</p>
        <p className="mb-1">GSTIN: 06AAMCG4985H1Z4</p>
        <p className="mb-1">
          Email:{" "}
          <a href="mailto:arjun@graycup.in" className="text-blue-600 hover:underline">
            arjun@graycup.in
          </a>
        </p>
        <p className="mb-4">
          Email:{" "}
          <a href="mailto:office@graycup.org" className="text-blue-600 hover:underline">
            office@graycup.org
          </a>
        </p>
        <p className="mb-4">
          Phone:{" "}
          <a href="tel:+918527914317" className="text-blue-600 hover:underline">
            +91 85279 14317
          </a>
        </p>
      </div>
    </div>
  );
}
