export default function SellerAgreement() {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h1 className="text-3xl font-bold text-neutral-800 mb-6">
        Seller Agreement
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
          This Seller Agreement ("Agreement") is a legally binding contract between
          Gray Cup Enterprises Private Limited, operating the Gray Bulk marketplace
          ("Gray Bulk", "Platform", "we", "us"), and the entity or individual
          registering as a seller ("Seller", "you"). By registering, listing
          products, or transacting on Gray Bulk, you unconditionally accept this
          Agreement and all policies incorporated herein by reference.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          1. Eligibility &amp; Onboarding
        </h2>
        <p className="mb-4">
          To register and sell on Gray Bulk, you must:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            Be a legally registered business entity in India — including private
            limited companies, limited liability partnerships, partnerships, sole
            proprietorships, or trusts — with valid supporting documentation.
          </li>
          <li>
            Hold a valid GST Identification Number (GSTIN) where your annual
            turnover or nature of supply mandates GST registration under Indian law.
          </li>
          <li>
            Possess valid trade licences, manufacturing licences, or regulatory
            permits applicable to the product categories you intend to list.
          </li>
          <li>
            Be at least 18 years of age if registering as an individual proprietor.
          </li>
          <li>
            Not have been previously suspended or permanently banned from Gray Bulk
            or any affiliated platform.
          </li>
        </ul>
        <p className="mb-4">
          Gray Bulk reserves the right to verify your credentials, request additional
          documentation, and approve or reject seller applications at its sole
          discretion without being required to provide reasons.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          2. Seller Obligations
        </h2>
        <p className="mb-4">
          As a seller on Gray Bulk, you agree at all times to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            List only products you are fully authorised to sell and that comply with
            all applicable Indian laws, regulations, and standards (including BIS,
            FSSAI, Drug &amp; Cosmetics Act, or any other applicable sectoral
            regulation).
          </li>
          <li>
            Maintain accurate, current, and complete product listings — including
            specifications, certifications, pricing, availability, minimum order
            quantities, and lead times.
          </li>
          <li>
            Fulfil all confirmed orders within the dispatch timeline declared in
            your listing. Failure to dispatch without prior written notice to Gray
            Bulk shall be treated as a breach of this Agreement.
          </li>
          <li>
            Maintain adequate inventory levels to support active listings. Listing
            products that are not in stock and cannot be fulfilled within the stated
            lead time is prohibited.
          </li>
          <li>
            Issue GST-compliant tax invoices for every transaction, accurately
            reflecting the HSN code, tax rate, and invoice value as per applicable
            GST provisions.
          </li>
          <li>
            Respond to buyer inquiries, clarification requests, and dispute
            communications within 48 hours of receipt.
          </li>
          <li>
            Ensure all goods dispatched are securely packaged to prevent transit
            damage, appropriately labelled, and accompanied by the necessary
            documentation (e-way bill where applicable, COA, test reports, etc.).
          </li>
          <li>
            Not engage in price manipulation, bid shielding, shill bidding,
            artificial inflation, or any deceptive trade practice in violation of
            the Competition Act 2002 or Consumer Protection Act 2019.
          </li>
          <li>
            Keep your banking, GSTIN, and contact details up to date on the
            platform at all times to ensure uninterrupted settlement processing.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          3. Prohibited Products &amp; Conduct
        </h2>
        <p className="mb-4">
          The following are strictly prohibited on Gray Bulk:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Counterfeit, stolen, misappropriated, or illegally obtained goods.</li>
          <li>
            Products that infringe on third-party intellectual property rights,
            including trademarks, patents, copyrights, or design rights.
          </li>
          <li>
            Narcotics, psychotropic substances, and controlled drugs or their
            precursors not authorised for commercial trade.
          </li>
          <li>
            Hazardous chemicals, explosives, or radioactive materials without the
            requisite licences and with inadequate safety disclosures.
          </li>
          <li>
            Products that are banned, restricted, or require special licences under
            Indian law and where such licences have not been obtained.
          </li>
          <li>
            Any product or conduct that facilitates money laundering, tax evasion,
            or financial fraud.
          </li>
          <li>
            Misrepresentation of product origin, grade, quality certificates, or
            laboratory test results.
          </li>
          <li>
            Listing the same product under multiple accounts or creating fictitious
            buyer accounts to inflate sales metrics or ratings.
          </li>
        </ul>
        <p className="mb-4">
          Gray Bulk may remove listings, suspend accounts, and report violations
          to relevant law enforcement authorities without prior notice where
          prohibited conduct is detected or suspected.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          4. Platform Fees &amp; Settlements
        </h2>
        <p className="mb-4">
          Gray Bulk charges a platform fee on transactions processed through the
          marketplace. Applicable fee rates are published on the{" "}
          <a href="/pricing" className="text-blue-600 hover:underline">
            Pricing
          </a>{" "}
          page and are subject to change with 15 days' prior notice. All fees are
          exclusive of GST unless expressly stated otherwise; applicable GST will
          be charged in addition to the stated fee rate.
        </p>
        <p className="mb-4">
          Settlements are processed to your verified bank account on a rolling T+2
          basis following buyer confirmation of receipt. Gray Bulk reserves the
          right to withhold or delay settlement in the following circumstances:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>An active dispute or chargeback is pending resolution.</li>
          <li>
            Suspected fraudulent activity or policy violation under investigation.
          </li>
          <li>
            Your KYC documentation is incomplete, expired, or flagged by our
            compliance team.
          </li>
          <li>
            A court order, regulatory directive, or law enforcement request
            requires hold.
          </li>
        </ul>
        <p className="mb-4">
          Settlement amounts are net of platform fees, applicable taxes, and any
          amounts owed to Gray Bulk. Detailed settlement reports are available
          through the seller dashboard.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          5. Returns, Refunds &amp; Disputes
        </h2>
        <p className="mb-4">
          Sellers are required to accept returns where:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            Goods delivered are materially different from the product listed or
            ordered (wrong product, wrong grade, wrong specifications).
          </li>
          <li>
            Goods arrive damaged, defective, or non-functional due to seller
            packaging failure.
          </li>
          <li>
            A quantity shortfall exists — i.e., fewer units were delivered than
            invoiced.
          </li>
        </ul>
        <p className="mb-4">
          In accepted return cases, the full cost of return logistics and a complete
          refund to the buyer is the seller's responsibility. Refusal to cooperate
          with a valid return or dispute process will be treated as a breach of this
          Agreement and may result in forced refund from the seller's settlement
          balance. Gray Bulk's determination in any dispute, once communicated after
          reviewing evidence, shall be final and binding. For our full{" "}
          <a href="/shipping-returns" className="text-blue-600 hover:underline">
            Shipping &amp; Returns policy
          </a>
          , please refer to the dedicated page.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          6. Product Quality &amp; Compliance
        </h2>
        <p className="mb-4">
          You represent and warrant that all products listed on Gray Bulk:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            Meet the quality standards described in your listing and any
            certificates, test reports, or samples provided to the buyer.
          </li>
          <li>
            Comply with applicable Indian Standards (IS), BIS certifications, FSSAI
            approvals, or other mandatory conformance requirements for the product
            category.
          </li>
          <li>
            Are accompanied by accurate Material Safety Data Sheets (MSDS) where
            required for chemicals, hazardous substances, or regulated materials.
          </li>
          <li>
            Are not past their shelf life, expiry date, or best-before date at the
            time of dispatch.
          </li>
        </ul>
        <p className="mb-4">
          Gray Bulk reserves the right to conduct random quality audits and to
          request samples or documentation from sellers at any time. Non-compliance
          with quality standards may result in listing removal and account action.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          7. Intellectual Property
        </h2>
        <p className="mb-4">
          By uploading product images, descriptions, technical documents, or any
          other content to Gray Bulk, you grant Gray Cup Enterprises Private Limited
          a non-exclusive, royalty-free, worldwide licence to display, reproduce,
          and distribute that content solely for the purpose of operating, promoting,
          and improving the marketplace. This licence survives the termination of
          your account solely to the extent necessary for Gray Bulk to retain
          historical records and comply with legal obligations.
        </p>
        <p className="mb-4">
          You represent that you own or hold all necessary rights to the content you
          submit, and that such content does not infringe any third-party
          intellectual property rights. Gray Bulk will respond promptly to valid
          intellectual property infringement notices under applicable Indian law.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          8. Data &amp; Privacy
        </h2>
        <p className="mb-4">
          Gray Bulk collects and processes seller data in accordance with our{" "}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          . Your business data, transaction history, KYC documents, and platform
          communications are stored securely and are not disclosed to third parties
          except as required by law or as necessary to process payments, fulfil
          orders, and operate the marketplace. You consent to Gray Bulk sharing
          necessary transaction details (business name, GSTIN, shipping address)
          with buyers and logistics partners solely for order fulfilment purposes.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          9. Seller Performance Standards
        </h2>
        <p className="mb-4">
          Gray Bulk monitors seller performance on an ongoing basis. Sellers are
          expected to maintain:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>An order fulfilment rate of at least 95% of confirmed orders.</li>
          <li>A dispatch-on-time rate of at least 90% against stated lead times.</li>
          <li>A dispute rate (buyer complaints as a percentage of orders) below 3%.</li>
          <li>
            A buyer satisfaction score, where applicable, of at least 4.0 out of 5.0
            on a rolling 90-day basis.
          </li>
        </ul>
        <p className="mb-4">
          Sellers falling below these thresholds will receive a written performance
          notice and a 30-day improvement period. Persistent underperformance may
          result in listing restrictions, reduced visibility, or account suspension.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          10. Off-Platform Transactions
        </h2>
        <p className="mb-4">
          Sellers must not solicit buyers met through Gray Bulk to transact outside
          the Platform with the intent of circumventing platform fees or buyer
          protections. Off-platform solicitation is a material breach of this
          Agreement and will result in immediate account suspension and forfeiture
          of any pending settlements. Gray Bulk may pursue legal remedies for
          revenue loss caused by off-platform diversion.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          11. Account Suspension &amp; Termination
        </h2>
        <p className="mb-4">
          Gray Bulk may suspend or permanently terminate a seller account for any of
          the following:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Material or repeated breach of this Agreement.</li>
          <li>Listing or selling prohibited products.</li>
          <li>Persistent non-fulfilment of orders or poor buyer ratings.</li>
          <li>Provision of false, misleading, or fraudulent information during onboarding.</li>
          <li>Conduct that undermines the trust, integrity, or reputation of the marketplace.</li>
          <li>Failure to comply with a valid legal or regulatory direction.</li>
        </ul>
        <p className="mb-4">
          Where possible, Gray Bulk will provide 7 days' notice of account suspension
          to allow the seller to respond. No notice will be given where immediate
          action is required to protect buyers or the platform from harm.
        </p>
        <p className="mb-4">
          Upon termination, any outstanding settlements owed to the seller will be
          processed within 30 days after deducting applicable fees, chargebacks,
          refunds, and any amounts owed to Gray Bulk or to buyers. Gray Bulk
          reserves the right to retain a portion of the settlement balance for up to
          90 days in cases where post-termination disputes or chargebacks are likely.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          12. Indemnification
        </h2>
        <p className="mb-4">
          You agree to indemnify, defend, and hold harmless Gray Cup Enterprises
          Private Limited, its directors, officers, employees, and agents from and
          against any claims, liabilities, losses, damages, fines, or expenses
          (including reasonable legal fees) arising out of or related to: (a) your
          use of the Platform in violation of this Agreement; (b) the products you
          list or sell, including any product liability or regulatory non-compliance;
          (c) your violation of any applicable law; or (d) your infringement of any
          third-party intellectual property or other rights.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          13. Limitation of Liability
        </h2>
        <p className="mb-4">
          Gray Bulk operates solely as a marketplace facilitator and is not a party
          to the contract of sale between seller and buyer. Gray Bulk is not liable
          for product quality, fitness for purpose, delivery failures, or disputes
          arising directly from seller conduct or buyer conduct. To the maximum
          extent permitted by applicable law, Gray Bulk's aggregate liability to any
          seller — under any cause of action and regardless of the form — shall not
          exceed the total platform fees paid by that seller in the three calendar
          months immediately preceding the event giving rise to the claim.
        </p>
        <p className="mb-4">
          Gray Bulk shall not be liable for any indirect, incidental, consequential,
          special, or punitive damages, including loss of profit, loss of data, or
          loss of goodwill, even if advised of the possibility of such damages.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          14. Force Majeure
        </h2>
        <p className="mb-4">
          Neither party shall be liable for failure or delay in performance caused
          by circumstances beyond its reasonable control, including natural disasters,
          acts of government, pandemics, strikes, power outages, or internet
          infrastructure failures, provided the affected party notifies the other
          promptly and takes reasonable steps to resume performance.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          15. Amendments
        </h2>
        <p className="mb-4">
          Gray Bulk may update this Agreement from time to time to reflect changes
          in law, Platform operations, or business policy. Material changes will be
          communicated via registered email at least 15 days before the revised
          Agreement takes effect. Continued use of the Platform after that date
          constitutes your acceptance of the updated terms. If you do not agree with
          the changes, you must cease using the Platform and notify us in writing
          before the effective date.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          16. Governing Law &amp; Dispute Resolution
        </h2>
        <p className="mb-4">
          This Agreement is governed by and construed in accordance with the laws of
          the Republic of India. Any dispute, controversy, or claim arising out of
          or in connection with this Agreement shall first be attempted to be
          resolved amicably through good-faith negotiation between the parties. If
          the dispute is not resolved within 30 days of written notice, it shall be
          referred to arbitration conducted in accordance with the Arbitration and
          Conciliation Act, 1996, with the seat and venue of arbitration in
          Bengaluru, Karnataka, and proceedings conducted in English. The award of
          the arbitrator shall be final and binding. Nothing in this clause prevents
          either party from seeking urgent interim relief from a court of competent
          jurisdiction.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          17. Entire Agreement &amp; Severability
        </h2>
        <p className="mb-4">
          This Agreement, together with the{" "}
          <a href="/terms" className="text-blue-600 hover:underline">
            Terms of Service
          </a>
          ,{" "}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          , and{" "}
          <a href="/shipping-returns" className="text-blue-600 hover:underline">
            Shipping &amp; Returns Policy
          </a>
          , constitutes the entire agreement between Gray Bulk and the Seller with
          respect to the subject matter herein, and supersedes all prior
          communications, representations, or agreements. If any provision of this
          Agreement is found to be invalid or unenforceable by a court of competent
          jurisdiction, the remaining provisions shall continue in full force and
          effect.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          18. Contact
        </h2>
        <p className="mb-4">
          For questions regarding this Agreement, seller onboarding, or compliance
          matters, please contact:
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
