export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h1 className="text-3xl font-bold text-neutral-800 mb-6">
        Privacy Policy
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
          This Privacy Policy describes how Gray Cup Enterprises Private Limited
          ("Gray Bulk", "we", "us", "our") collects, uses, stores, and protects
          information about you when you access or use the Gray Bulk marketplace
          platform, website, and related services (collectively, the "Platform").
          By using the Platform, you consent to the practices described in this
          policy.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We collect the following categories of information depending on how you
          interact with the Platform:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Account &amp; Registration Data:</strong> Name, email address,
            mobile number, business name, GSTIN, PAN, and bank account details
            provided during sign-up or seller onboarding.
          </li>
          <li>
            <strong>Transaction Data:</strong> Order details, invoices, payment
            records, and communication logs associated with buying or selling
            activity on the Platform.
          </li>
          <li>
            <strong>KYC &amp; Business Verification Data:</strong> Government-issued
            identity documents and business registration certificates submitted as
            part of seller verification.
          </li>
          <li>
            <strong>Usage Data:</strong> Pages visited, features accessed, session
            duration, search queries, and interaction patterns on the Platform.
          </li>
          <li>
            <strong>Device &amp; Technical Data:</strong> IP address, browser type
            and version, operating system, referring URLs, and device identifiers.
          </li>
          <li>
            <strong>Communications:</strong> Messages, support tickets, dispute
            submissions, and any correspondence you send to us through the Platform.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">
          We use the information collected for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>To create and manage your account and verify your identity.</li>
          <li>
            To process orders, coordinate fulfilment, and facilitate payments and
            settlements between buyers and sellers.
          </li>
          <li>
            To comply with Indian tax laws, including GST regulations, by
            maintaining transaction records and issuing compliant invoices.
          </li>
          <li>
            To detect, prevent, and investigate fraud, abuse, or violations of our{" "}
            <a href="/seller-agreement" className="text-blue-600 hover:underline">
              Seller Agreement
            </a>{" "}
            and{" "}
            <a href="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </a>
            .
          </li>
          <li>
            To communicate with you about your account, orders, policy updates,
            and platform announcements.
          </li>
          <li>
            To improve the Platform through analytics, A/B testing, and user
            behaviour analysis — always in aggregate or anonymised form where
            possible.
          </li>
          <li>
            To respond to legal requests, court orders, or regulatory inquiries from
            competent authorities.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          3. Legal Basis for Processing
        </h2>
        <p className="mb-4">
          We process your personal data on the following legal grounds:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Contractual necessity:</strong> To fulfil our obligations under
            the Seller Agreement, Terms of Service, and any transaction you
            initiate.
          </li>
          <li>
            <strong>Legal obligation:</strong> To comply with applicable Indian laws,
            including the Information Technology Act 2000, IT (Amendment) Act 2008,
            and GST compliance requirements.
          </li>
          <li>
            <strong>Legitimate interests:</strong> To operate, improve, and secure
            the Platform, and to prevent fraud.
          </li>
          <li>
            <strong>Consent:</strong> For optional communications such as
            newsletters or promotional updates, which you may withdraw at any time.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          4. Sharing of Information
        </h2>
        <p className="mb-4">
          We do not sell your personal information. We share your data only in
          the following circumstances:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Between buyers and sellers:</strong> Necessary transaction
            details (e.g., shipping address, business name, GSTIN) are shared with
            the counterparty to fulfil the order.
          </li>
          <li>
            <strong>Payment processors:</strong> Payment gateway providers receive
            the data required to process transactions securely. These providers are
            bound by their own privacy obligations.
          </li>
          <li>
            <strong>Logistics partners:</strong> Shipping address and contact
            details are shared with logistics providers solely to arrange delivery.
          </li>
          <li>
            <strong>Service providers:</strong> Cloud infrastructure, analytics, and
            communication service providers acting as data processors under
            confidentiality agreements.
          </li>
          <li>
            <strong>Legal authorities:</strong> When required by law, regulation,
            court order, or to protect the rights and safety of users or Gray Bulk.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          5. Data Retention
        </h2>
        <p className="mb-4">
          We retain your personal data for as long as your account is active or
          as required to fulfil the purposes described in this policy. Transaction
          records, invoices, and KYC documents are retained for a minimum of
          seven years in compliance with Indian tax and accounting laws. Upon
          account closure, non-statutory data is deleted or anonymised within 90
          days, subject to any ongoing legal or regulatory obligations.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          6. Data Security
        </h2>
        <p className="mb-4">
          Gray Bulk implements industry-standard technical and organisational
          measures to protect your personal data, including:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Encryption of data in transit (TLS) and at rest.</li>
          <li>
            Role-based access controls limiting who within Gray Bulk can access
            personal data.
          </li>
          <li>Regular security audits and vulnerability assessments.</li>
          <li>
            Secure handling of KYC and financial documents with restricted internal
            access.
          </li>
        </ul>
        <p className="mb-4">
          No system is completely secure. In the event of a data breach that
          materially affects your rights, we will notify affected users in
          accordance with applicable law.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          7. Cookies &amp; Tracking Technologies
        </h2>
        <p className="mb-4">
          We use cookies and similar technologies to maintain sessions, remember
          preferences, and analyse Platform usage. These include:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Essential cookies:</strong> Required for the Platform to
            function correctly (e.g., authentication tokens).
          </li>
          <li>
            <strong>Analytics cookies:</strong> Help us understand how the Platform
            is used in aggregate so we can improve it.
          </li>
        </ul>
        <p className="mb-4">
          You can configure your browser to refuse cookies, though some parts of
          the Platform may not function correctly as a result.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          8. Your Rights
        </h2>
        <p className="mb-4">
          As a user of the Platform, you have the following rights in respect of
          your personal data:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Access:</strong> Request a copy of the personal data we hold
            about you.
          </li>
          <li>
            <strong>Correction:</strong> Request that inaccurate or incomplete data
            be corrected.
          </li>
          <li>
            <strong>Deletion:</strong> Request deletion of your personal data,
            subject to legal retention requirements.
          </li>
          <li>
            <strong>Portability:</strong> Receive your data in a structured,
            machine-readable format where technically feasible.
          </li>
          <li>
            <strong>Withdrawal of consent:</strong> Opt out of any processing based
            on consent (e.g., marketing communications) at any time.
          </li>
          <li>
            <strong>Grievance redressal:</strong> Lodge a complaint with our
            designated Grievance Officer (see below).
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          9. Third-Party Links
        </h2>
        <p className="mb-4">
          The Platform may contain links to third-party websites or services. Gray
          Bulk is not responsible for the privacy practices of those third parties.
          We encourage you to review the privacy policies of any external sites you
          visit through links on our Platform.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          10. Children's Privacy
        </h2>
        <p className="mb-4">
          The Platform is intended solely for business use by adults. We do not
          knowingly collect personal data from individuals under the age of 18.
          If you believe a minor has provided us personal data, please contact us
          immediately and we will delete it.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          11. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically to reflect changes in our
          practices, technology, or applicable law. Material changes will be
          communicated via email or a prominent notice on the Platform at least 15
          days before the updated policy takes effect. Your continued use of the
          Platform after the effective date constitutes acceptance of the revised
          policy.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          12. Grievance Officer &amp; Contact
        </h2>
        <p className="mb-4">
          In accordance with the Information Technology Act 2000 and applicable
          rules, Gray Cup Enterprises Private Limited has designated a Grievance
          Officer to address privacy-related concerns. You may reach us at:
        </p>
        <p className="mb-2">
          <strong>Gray Cup Enterprises Private Limited</strong>
        </p>
        <p className="mb-4">
          Email:{" "}
          <a
            href="mailto:legal@graybulk.com"
            className="text-blue-600 hover:underline"
          >
            legal@graybulk.com
          </a>
        </p>
        <p className="mb-4">
          We aim to acknowledge grievances within 48 hours and resolve them within
          30 days of receipt.
        </p>
      </div>
    </div>
  );
}
