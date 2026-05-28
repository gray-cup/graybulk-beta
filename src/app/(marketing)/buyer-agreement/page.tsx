import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buyer Agreement - Gray Bulk",
  description:
    "Review the Gray Bulk Buyer Agreement — your rights, obligations, and protections when purchasing on the platform.",
};

export default function BuyerAgreement() {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h1 className="text-3xl font-bold text-neutral-800 mb-6">
        Buyer Agreement
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
          This Buyer Agreement ("Agreement") is a legally binding contract
          between Gray Cup Enterprises Private Limited, operating the Gray Bulk
          marketplace ("Gray Bulk", "Platform", "we", "us"), and the entity or
          individual registering as a buyer ("Buyer", "you"). By registering,
          browsing, placing orders, or transacting on Gray Bulk, you
          unconditionally accept this Agreement and all policies incorporated
          herein by reference.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          1. Eligibility &amp; Registration
        </h2>
        <p className="mb-4">
          To register and purchase on Gray Bulk, you must:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            Be a legally registered business entity or individual in India with
            valid supporting documentation.
          </li>
          <li>
            Hold a valid GST Identification Number (GSTIN) where your purchases
            require GST input credit or where applicable law mandates
            registration.
          </li>
          <li>
            Be at least 18 years of age if registering as an individual.
          </li>
          <li>
            Not have been previously suspended or permanently banned from Gray
            Bulk or any affiliated platform.
          </li>
          <li>
            Provide accurate, complete, and current registration information,
            including your legal entity name, registered address, GSTIN, and
            authorised contact details.
          </li>
        </ul>
        <p className="mb-4">
          Gray Bulk reserves the right to verify your credentials, request
          additional documentation, and approve or reject buyer registrations at
          its sole discretion without being required to provide reasons.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          2. Placing Orders
        </h2>
        <p className="mb-4">
          By submitting an order on Gray Bulk, you confirm that:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            You have reviewed the full product listing, including specifications,
            grade, quantity, pricing, lead time, and minimum order quantity
            (MOQ).
          </li>
          <li>
            You have the authority to bind your organisation to the purchase.
          </li>
          <li>
            The shipping address, billing information, and GSTIN provided are
            accurate and current.
          </li>
          <li>
            You understand that confirmed orders are binding commitments and
            cancellations may be subject to the cancellation policy in force at
            the time of order.
          </li>
        </ul>
        <p className="mb-4">
          Gray Bulk facilitates the transaction but is not a party to the
          contract of sale between you and the seller. The seller is solely
          responsible for the quality, quantity, and timely dispatch of goods.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          3. Payments
        </h2>
        <p className="mb-4">
          All payments on Gray Bulk are processed through secure, PCI-DSS
          compliant payment gateways. For domestic transactions we use{" "}
          <strong>CCAvenue</strong>; for international transactions we use{" "}
          <strong>Cashfree Payments</strong> and <strong>Razorpay</strong>.
          We also accept UPI payments to <strong>graycup@kotak</strong> and
          direct bank transfers (NEFT/RTGS). By making a payment, you authorise
          Gray Bulk to collect funds on behalf of the seller as per the agreed
          order value. The following conditions apply:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            Payments are held in escrow until delivery is confirmed or the
            applicable release condition is met.
          </li>
          <li>
            You must not initiate chargebacks or payment reversals for orders
            that are in active dispute resolution on the Platform. Unauthorized
            chargebacks may result in account suspension.
          </li>
          <li>
            Any applicable TDS deductions on platform fees must be handled in
            accordance with Indian tax law, and relevant certificates must be
            submitted within the prescribed timelines.
          </li>
          <li>
            Pricing displayed includes applicable GST unless stated otherwise.
            Tax invoices will be issued by the seller in accordance with GST
            provisions.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          4. Delivery &amp; Inspection
        </h2>
        <p className="mb-4">
          Upon receipt of goods, you are required to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            Inspect the shipment within 48 hours of delivery for quantity
            discrepancies, visible damage, or incorrect goods.
          </li>
          <li>
            Confirm receipt through the platform portal within 72 hours of
            delivery. Failure to confirm or raise a dispute within this window
            will be treated as acceptance of the goods and will trigger
            settlement to the seller.
          </li>
          <li>
            Retain all packaging, delivery documentation, and photographic
            evidence if you intend to raise a dispute.
          </li>
          <li>
            Not refuse delivery without prior written notice to Gray Bulk except
            in cases of manifest delivery error (wrong address, wrong consignee).
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          5. Returns, Refunds &amp; Disputes
        </h2>
        <p className="mb-4">
          You are entitled to raise a return or refund request where:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            Goods delivered are materially different from the listed product
            (wrong product, wrong grade, wrong specifications).
          </li>
          <li>
            Goods arrive damaged or defective due to seller packaging failure.
          </li>
          <li>
            A quantity shortfall exists — fewer units were delivered than
            invoiced.
          </li>
        </ul>
        <p className="mb-4">
          All disputes must be raised through the platform's dispute resolution
          interface within 72 hours of delivery. Late disputes may be declined
          at Gray Bulk's discretion. Gray Bulk's determination in any dispute,
          once communicated after reviewing evidence from both parties, shall be
          final and binding. For our full{" "}
          <a href="/shipping-returns" className="text-blue-600 hover:underline">
            Shipping &amp; Returns policy
          </a>
          , please refer to the dedicated page.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          6. Buyer Obligations
        </h2>
        <p className="mb-4">As a buyer on Gray Bulk, you agree to:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            Use the Platform solely for lawful commercial purposes and in
            compliance with all applicable Indian laws.
          </li>
          <li>
            Not engage in price manipulation, artificial demand signalling,
            shill bidding, or any conduct designed to distort the marketplace.
          </li>
          <li>
            Not solicit sellers met through Gray Bulk to transact outside the
            Platform with the intent of circumventing platform protections or
            fees.
          </li>
          <li>
            Keep your account credentials, GSTIN, and contact information
            accurate and up to date at all times.
          </li>
          <li>
            Respond to seller communications and platform queries regarding
            active orders within 48 hours.
          </li>
          <li>
            Not misuse the dispute resolution process by raising frivolous,
            false, or bad-faith claims.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          7. Data &amp; Privacy
        </h2>
        <p className="mb-4">
          Gray Bulk collects and processes buyer data in accordance with our{" "}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          . Your business data, transaction history, and delivery addresses are
          stored securely and are not disclosed to third parties except as
          required by law or as necessary to fulfil orders. You consent to Gray
          Bulk sharing your business name, GSTIN, and delivery address with the
          relevant seller and logistics partners solely for order fulfilment.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          8. Account Suspension &amp; Termination
        </h2>
        <p className="mb-4">
          Gray Bulk may suspend or permanently terminate a buyer account for any
          of the following:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Material or repeated breach of this Agreement.</li>
          <li>
            Provision of false, misleading, or fraudulent information during
            onboarding or in the course of a transaction.
          </li>
          <li>Unauthorized chargebacks or payment fraud.</li>
          <li>Misuse of the dispute resolution process.</li>
          <li>
            Conduct that undermines the trust, integrity, or reputation of the
            marketplace.
          </li>
          <li>
            Failure to comply with a valid legal or regulatory direction.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          9. Limitation of Liability
        </h2>
        <p className="mb-4">
          Gray Bulk operates solely as a marketplace facilitator and is not a
          party to the contract of sale between buyer and seller. Gray Bulk is
          not liable for product quality, fitness for purpose, delivery failures,
          or disputes arising directly from seller conduct. To the maximum extent
          permitted by applicable law, Gray Bulk's aggregate liability to any
          buyer shall not exceed the total value of the specific order giving
          rise to the claim.
        </p>
        <p className="mb-4">
          Gray Bulk shall not be liable for any indirect, incidental,
          consequential, special, or punitive damages, including loss of profit,
          loss of data, or loss of goodwill, even if advised of the possibility
          of such damages.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          10. Governing Law &amp; Dispute Resolution
        </h2>
        <p className="mb-4">
          This Agreement is governed by and construed in accordance with the
          laws of the Republic of India. Any dispute, controversy, or claim
          arising out of or in connection with this Agreement shall first be
          attempted to be resolved amicably through good-faith negotiation. If
          not resolved within 30 days of written notice, it shall be referred to
          arbitration under the Arbitration and Conciliation Act, 1996, with the
          seat and venue of arbitration in Bengaluru, Karnataka. Proceedings
          shall be conducted in English, and the arbitrator's award shall be
          final and binding.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          11. Amendments
        </h2>
        <p className="mb-4">
          Gray Bulk may update this Agreement from time to time. Material
          changes will be communicated via registered email at least 15 days
          before the revised Agreement takes effect. Continued use of the
          Platform after that date constitutes your acceptance of the updated
          terms.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          12. Contact
        </h2>
        <p className="mb-4">
          For questions regarding this Agreement or buyer onboarding, please
          contact:
        </p>
        <p className="mb-1"><strong>Gray Cup Enterprises Private Limited</strong></p>
        <p className="mb-1">FF122, Rodeo Drive Mall, GT Road, TDI City, Kundli, Sonipat, Haryana – 131030</p>
        <p className="mb-1">CIN: U47211DL2025PTC457808 &nbsp;|&nbsp; GSTIN: 06AAMCG4985H1Z4</p>
        <p className="mb-1">
          Email:{" "}
          <a href="mailto:arjun@graycup.in" className="text-blue-600 hover:underline">
            arjun@graycup.in
          </a>
        </p>
        <p className="mb-1">
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
