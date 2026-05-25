export default function SellerAgreement() {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h1 className="text-3xl font-bold text-neutral-800 mb-6">
        Seller Agreement
      </h1>

      <div className="prose prose-neutral">
        <p className="text-muted-foreground mb-6">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <p className="mb-6">
          This Seller Agreement ("Agreement") is entered into between Gray Bulk
          ("Platform", "we", "us") and the entity or individual registering as a
          seller ("Seller", "you") on the Gray Bulk marketplace. By registering
          or listing products on Gray Bulk, you agree to be bound by this
          Agreement in full.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          1. Eligibility
        </h2>
        <p className="mb-4">
          To sell on Gray Bulk, you must be a registered business entity or sole
          proprietor operating lawfully within India. You must hold a valid GSTIN
          where applicable, and be authorised to sell the products you list. Gray
          Bulk reserves the right to verify your credentials at any time and to
          suspend or terminate your account if eligibility requirements are not
          met.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          2. Seller Obligations
        </h2>
        <p className="mb-4">
          As a seller on Gray Bulk, you agree to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>List only products you are authorised to sell and that comply with all applicable Indian laws and regulations.</li>
          <li>Provide accurate, complete, and up-to-date product descriptions, pricing, and availability information.</li>
          <li>Fulfil confirmed orders promptly and in accordance with the delivery timelines stated at the time of listing.</li>
          <li>Maintain sufficient inventory to support active listings.</li>
          <li>Issue GST-compliant invoices to buyers for all transactions.</li>
          <li>Respond to buyer inquiries and disputes within 48 hours.</li>
          <li>Not engage in price manipulation, artificial inflation, or any deceptive trade practice.</li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          3. Prohibited Products
        </h2>
        <p className="mb-4">
          The following categories are strictly prohibited on Gray Bulk:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Counterfeit, stolen, or illegally obtained goods.</li>
          <li>Products that infringe on third-party intellectual property rights.</li>
          <li>Hazardous, regulated, or controlled substances without valid licences.</li>
          <li>Products banned or restricted under Indian law.</li>
        </ul>
        <p className="mb-4">
          Gray Bulk may remove listings and suspend accounts without notice if
          prohibited products are detected.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          4. Platform Fees & Settlements
        </h2>
        <p className="mb-4">
          Gray Bulk charges a platform fee on transactions processed through the
          marketplace. Applicable fee rates are published on the{" "}
          <a href="/pricing" className="text-blue-600 hover:underline">
            Pricing
          </a>{" "}
          page and are inclusive of applicable taxes unless stated otherwise. Fees
          are deducted automatically at the time of settlement.
        </p>
        <p className="mb-4">
          Settlements are processed to your registered bank account on a rolling
          T+2 basis following order confirmation and dispatch verification. Gray
          Bulk reserves the right to withhold settlement in cases of active
          disputes, suspected fraud, or policy violations pending investigation.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          5. Returns & Refunds
        </h2>
        <p className="mb-4">
          Sellers are required to honour return requests where goods delivered
          are materially different from the listing, damaged in transit, or
          defective. In such cases, the cost of return logistics and full refund
          to the buyer is the responsibility of the seller. Gray Bulk may
          facilitate dispute resolution and its decision in such matters shall be
          final and binding.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          6. Intellectual Property
        </h2>
        <p className="mb-4">
          By uploading product images, descriptions, or any other content to
          Gray Bulk, you grant us a non-exclusive, royalty-free, worldwide
          licence to display, reproduce, and distribute that content solely for
          the purpose of operating and promoting the marketplace. You represent
          that you own or have the right to use all content you submit, and that
          it does not infringe any third-party rights.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          7. Data & Privacy
        </h2>
        <p className="mb-4">
          Gray Bulk collects and processes seller data in accordance with our{" "}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          . Seller business data, transaction history, and communications on the
          platform are stored securely and are not shared with third parties
          except as required by law or for the purpose of processing payments and
          fulfilling orders.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          8. Account Suspension & Termination
        </h2>
        <p className="mb-4">
          Gray Bulk reserves the right to suspend or permanently terminate a
          seller account for violations of this Agreement, repeated negative
          buyer feedback, non-fulfilment of orders, fraudulent activity, or any
          conduct that undermines the integrity of the marketplace. Sellers will
          be notified of suspension except where immediate action is required to
          protect buyers or the platform.
        </p>
        <p className="mb-4">
          Upon termination, any outstanding settlements due to the seller will be
          processed after deducting applicable fees, chargebacks, and any amounts
          owed to Gray Bulk, within 30 days of account closure.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          9. Limitation of Liability
        </h2>
        <p className="mb-4">
          Gray Bulk acts solely as a marketplace facilitator and is not party to
          transactions between sellers and buyers. We are not liable for product
          quality, delivery failures, or disputes arising from seller conduct.
          Our aggregate liability to any seller, under any circumstances, shall
          not exceed the total platform fees paid by that seller in the three
          months preceding the claim.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          10. Amendments
        </h2>
        <p className="mb-4">
          Gray Bulk may update this Agreement from time to time. Material changes
          will be communicated via email or an in-platform notice at least 15
          days before taking effect. Continued use of the platform after that
          date constitutes acceptance of the revised terms.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          11. Governing Law & Dispute Resolution
        </h2>
        <p className="mb-4">
          This Agreement is governed by the laws of India. Any dispute arising
          out of or in connection with this Agreement shall first be attempted to
          be resolved through good-faith negotiation. If unresolved within 30
          days, disputes shall be subject to the exclusive jurisdiction of the
          courts of Bengaluru, Karnataka.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          12. Contact
        </h2>
        <p className="mb-4">
          For questions regarding this Agreement, please contact us at{" "}
          <a
            href="mailto:legal@graybulk.com"
            className="text-blue-600 hover:underline"
          >
            legal@graybulk.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
