export default function ShippingReturns() {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h1 className="text-3xl font-bold text-neutral-800 mb-6">
        Shipping &amp; Returns
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
          This policy applies to all orders placed through the Gray Bulk marketplace,
          operated by Gray Cup Enterprises Private Limited. By placing an order, you
          confirm that you have read and agree to the terms below.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          1. Shipping Coverage
        </h2>
        <p className="mb-4">
          Gray Bulk facilitates wholesale transactions between verified sellers and
          buyers across India. Shipping is arranged either by the seller directly or
          through Gray Bulk's logistics partners, depending on the fulfilment model
          selected at the time of listing. Deliveries are currently limited to
          addresses within India.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          2. Dispatch &amp; Delivery Timelines
        </h2>
        <p className="mb-4">
          Sellers on Gray Bulk are contractually required to dispatch confirmed orders
          within the timeframe stated in their listing. Typical dispatch windows are:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Ready stock:</strong> Dispatched within 2–3 business days of
            order confirmation.
          </li>
          <li>
            <strong>Made-to-order / custom batches:</strong> Dispatch timelines vary
            by product and are specified on the individual product listing.
          </li>
          <li>
            <strong>Import or long-lead items:</strong> Lead times are declared at
            the time of listing and may range from 7 to 30 business days.
          </li>
        </ul>
        <p className="mb-4">
          Transit times post-dispatch depend on the buyer's location and the
          logistics partner engaged. Typically 1–5 business days for metro cities and
          3–10 business days for Tier 2 and Tier 3 locations.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          3. Freight &amp; Logistics Charges
        </h2>
        <p className="mb-4">
          Freight charges, if applicable, are indicated at checkout and vary based on
          order weight, volume, and delivery destination. Some sellers offer free
          freight above a minimum order value; this is disclosed on the product
          listing. All freight charges are subject to applicable GST.
        </p>
        <p className="mb-4">
          For bulk or heavy-freight shipments (e.g., industrial machinery, steel
          drums), dedicated logistics arrangements may be made and quoted separately.
          Gray Bulk is not liable for delays caused by third-party logistics
          providers once the consignment has been handed over to the carrier.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          4. Tracking
        </h2>
        <p className="mb-4">
          Once an order is dispatched, tracking details — including the courier
          partner name and docket number — will be shared with the buyer via the
          Gray Bulk platform and by email. Buyers can track shipments directly on
          the courier's website using the provided docket number.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          5. Return Eligibility
        </h2>
        <p className="mb-4">
          Gray Bulk is a B2B wholesale marketplace. Returns are accepted only under
          the following conditions:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            The goods received are materially different from what was described in
            the confirmed order (wrong SKU, wrong grade, wrong specifications).
          </li>
          <li>
            Goods are damaged, defective, or in a condition that renders them unfit
            for the intended purpose upon delivery.
          </li>
          <li>
            A short shipment is received — i.e., the quantity delivered is less than
            the invoiced quantity.
          </li>
        </ul>
        <p className="mb-4">
          Returns are <strong>not accepted</strong> for:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            Change of mind or buyer error in placing the order.
          </li>
          <li>
            Products that have been processed, used, or altered after delivery.
          </li>
          <li>
            Minor cosmetic variations that do not affect product functionality or
            fitness for use, unless explicitly guaranteed in the listing.
          </li>
          <li>
            Perishable or custom-manufactured goods, unless defective.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          6. Return Process
        </h2>
        <p className="mb-4">
          To initiate a return, buyers must raise a dispute through the Gray Bulk
          platform within <strong>48 hours</strong> of delivery. The dispute must
          include:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Photographic or video evidence of the issue.</li>
          <li>The order ID and invoice number.</li>
          <li>A clear description of the discrepancy or defect.</li>
        </ul>
        <p className="mb-4">
          Gray Bulk will review the dispute and communicate a resolution within 3
          business days. If the return is approved, the seller is responsible for
          arranging return pickup or authorising the buyer to ship the goods back at
          the seller's cost.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          7. Refunds
        </h2>
        <p className="mb-4">
          Approved refunds are processed to the original payment instrument within
          5–7 business days of return confirmation. For orders settled via
          NEFT/RTGS, refunds will be credited to the source bank account. Platform
          fees are non-refundable unless the return is caused by seller error or
          platform error.
        </p>
        <p className="mb-4">
          In cases where only part of an order is returned, a proportionate refund
          will be issued after deducting applicable fees.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          8. Damaged Goods in Transit
        </h2>
        <p className="mb-4">
          If goods arrive visibly damaged, buyers must note the damage on the
          delivery receipt before signing and photograph the packaging and contents
          immediately. Claims for transit damage must be raised within 24 hours of
          delivery. Gray Bulk will work with the seller and logistics partner to
          determine liability and facilitate replacement or refund accordingly.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          9. Dispute Resolution
        </h2>
        <p className="mb-4">
          All shipping and return disputes are subject to Gray Bulk's dispute
          resolution process. Gray Bulk's decision, once communicated after
          reviewing evidence from both parties, shall be final and binding. Disputes
          that cannot be resolved through the platform process are subject to the
          exclusive jurisdiction of the courts of Bengaluru, Karnataka, as per the{" "}
          <a href="/seller-agreement" className="text-blue-600 hover:underline">
            Seller Agreement
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          10. Contact
        </h2>
        <p className="mb-4">
          For shipping queries or to report a delivery issue, contact us at:
        </p>
        <p className="mb-1"><strong>Gray Cup Enterprises Private Limited</strong></p>
        <p className="mb-1">FF122, Rodeo Drive Mall, GT Road, TDI City, Kundli, Sonipat, Haryana – 131030</p>
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
