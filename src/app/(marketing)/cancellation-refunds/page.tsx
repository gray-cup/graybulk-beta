import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation and Refunds - Gray Bulk",
  description:
    "Understand the Gray Bulk cancellation and refunds policy for B2B wholesale orders on the marketplace, operated by Gray Cup Enterprises Private Limited.",
};

export default function CancellationRefunds() {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h1 className="text-3xl font-bold text-neutral-800 mb-6">
        Cancellation and Refunds
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
          This Cancellation and Refunds Policy applies to all orders placed
          through the Gray Bulk marketplace, operated by Gray Cup Enterprises
          Private Limited ("Gray Bulk", "we", "us"). Gray Bulk is a B2B
          wholesale marketplace. All confirmed orders are binding commercial
          commitments. Please read this policy carefully before placing an
          order.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          1. Order Cancellations by Buyers
        </h2>
        <p className="mb-4">
          Gray Bulk is a wholesale B2B platform and confirmed orders constitute
          binding contracts between the buyer and seller. Cancellations are
          therefore subject to the following conditions:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Before seller accepts the order:</strong> Cancellation
            requests submitted before the seller confirms acceptance will
            generally be honoured with a full refund to the original payment
            instrument. Raise a cancellation request immediately through the
            platform portal.
          </li>
          <li>
            <strong>After seller accepts but before dispatch:</strong> The buyer
            may request cancellation, but this is subject to seller approval.
            The seller may levy a cancellation or restocking charge not
            exceeding 10% of the order value. If the seller agrees, a refund
            net of any agreed cancellation fee will be processed.
          </li>
          <li>
            <strong>After dispatch:</strong> Orders cannot be cancelled after
            the seller has dispatched the goods. The buyer may initiate a return
            after delivery subject to the Return Eligibility conditions in
            Section 3 below.
          </li>
        </ul>
        <p className="mb-4">
          To raise a cancellation request, log in to the Gray Bulk portal, go
          to your order, and select "Request Cancellation". Alternatively,
          contact us at{" "}
          <a href="mailto:arjun@graycup.in" className="text-blue-600 hover:underline">
            arjun@graycup.in
          </a>{" "}
          or{" "}
          <a href="mailto:office@graycup.org" className="text-blue-600 hover:underline">
            office@graycup.org
          </a>{" "}
          with your order ID.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          2. Order Cancellations by Sellers
        </h2>
        <p className="mb-4">
          Sellers are expected to fulfil all confirmed orders. Seller-initiated
          cancellations (e.g., due to stock unavailability) are treated as a
          breach of the{" "}
          <a href="/seller-agreement" className="text-blue-600 hover:underline">
            Seller Agreement
          </a>{" "}
          and will result in:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>A full refund to the buyer within 5–7 business days.</li>
          <li>
            A seller performance flag, which may affect listing visibility and
            account standing.
          </li>
          <li>
            Possible imposition of a penalty fee against the seller's settlement
            balance for repeated cancellations.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          3. Return Eligibility
        </h2>
        <p className="mb-4">
          Returns are accepted only under the following circumstances:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            Goods received are materially different from what was ordered (wrong
            product, wrong grade, wrong specifications).
          </li>
          <li>
            Goods arrive damaged or defective due to seller packaging failure or
            manufacturing defect.
          </li>
          <li>
            A short shipment is received — i.e., the quantity delivered is less
            than the invoiced quantity.
          </li>
        </ul>
        <p className="mb-4">
          Returns are <strong>not accepted</strong> for:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Change of mind or buyer error in placing the order.</li>
          <li>Products that have been used, processed, or altered after delivery.</li>
          <li>
            Minor cosmetic variations that do not affect product functionality
            or fitness for use, unless explicitly guaranteed in the listing.
          </li>
          <li>
            Perishable or custom-manufactured goods, unless defective or
            materially non-conforming.
          </li>
        </ul>
        <p className="mb-4">
          Return disputes must be raised through the Gray Bulk platform within{" "}
          <strong>48 hours</strong> of delivery. Late claims may be declined at
          Gray Bulk's discretion. See the full{" "}
          <a
            href="/shipping-returns"
            className="text-blue-600 hover:underline"
          >
            Shipping Policy
          </a>{" "}
          for the complete return process.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          4. Refund Processing
        </h2>
        <p className="mb-4">
          Approved refunds are processed as follows:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Buyer cancellations (pre-dispatch):</strong> Refunds are
            processed within 5–7 business days to the original payment
            instrument.
          </li>
          <li>
            <strong>Seller cancellations:</strong> Full refund within 5–7
            business days of cancellation confirmation.
          </li>
          <li>
            <strong>Approved returns:</strong> Refund processed within 5–7
            business days of return confirmation and receipt of goods by the
            seller.
          </li>
          <li>
            <strong>NEFT/RTGS payments:</strong> Refunds will be credited
            directly to the source bank account.
          </li>
          <li>
            <strong>Card and UPI payments:</strong> Refunds are processed to
            the original payment method. Depending on your bank or payment
            provider, it may take an additional 3–5 business days to reflect in
            your account.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          5. Non-Refundable Amounts
        </h2>
        <p className="mb-4">
          The following amounts are non-refundable under all circumstances
          unless the cancellation is caused by seller error or Gray Bulk
          platform error:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Gray Bulk platform fees and transaction charges.</li>
          <li>Payment gateway processing fees, where separately charged.</li>
          <li>
            Freight and logistics charges, where goods have been dispatched.
          </li>
        </ul>
        <p className="mb-4">
          Where only part of an order is returned or cancelled, a proportionate
          refund will be issued after deducting applicable non-refundable
          amounts.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          6. Dispute Resolution
        </h2>
        <p className="mb-4">
          All cancellation and refund disputes are subject to Gray Bulk's
          dispute resolution process. Gray Bulk's determination, once
          communicated after reviewing evidence from both parties, shall be
          final and binding. Disputes that cannot be resolved through the
          platform process are governed by the arbitration clause in the{" "}
          <a href="/terms" className="text-blue-600 hover:underline">
            Terms and Conditions
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          7. Contact
        </h2>
        <p className="mb-4">
          For cancellation requests, refund queries, or return-related support,
          contact us at:
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
