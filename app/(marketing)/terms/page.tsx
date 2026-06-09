import Nav from '@/components/Nav'

export const metadata = {
  title: 'Terms of Service — BriefRamp',
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: June 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Agreement to Terms</h2>
            <p>By accessing or using BriefRamp ("Service"), operated by BriefRamp ("we", "us", "our"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Description of Service</h2>
            <p>BriefRamp is a client onboarding platform for freelance web designers. It enables designers to create client portals that collect project briefs, present proposals, collect electronic signatures, and process deposit payments.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Account Registration</h2>
            <p>You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Acceptable Use</h2>
            <p>You agree not to use the Service to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Violate any applicable law or regulation</li>
              <li>Collect payments for fraudulent or non-existent services</li>
              <li>Impersonate any person or entity</li>
              <li>Transmit any harmful, offensive, or illegal content</li>
              <li>Attempt to gain unauthorised access to the Service or its systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Payments and Billing</h2>
            <p>Subscription fees are billed monthly or annually as selected at signup. All fees are non-refundable except as described in our Refund Policy. Payment processing is handled by our third-party payment provider. We do not store card details.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Client Deposits</h2>
            <p>BriefRamp facilitates deposit payments between designers and their clients. We are not a party to those transactions. Designers are solely responsible for the services they provide to their clients and for any disputes arising from those services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Electronic Signatures</h2>
            <p>Electronic signatures collected through BriefRamp (typed name with IP address and timestamp) are intended to constitute a legally binding signature. You are responsible for ensuring compliance with applicable e-signature laws in your jurisdiction.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are owned by BriefRamp. Your content (proposals, contracts, briefs) remains yours. By using the Service, you grant us a limited licence to store and process your content solely to provide the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">9. Termination</h2>
            <p>You may cancel your account at any time from your account settings. We reserve the right to suspend or terminate accounts that violate these Terms. Upon termination, your data will be retained for 30 days before deletion.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">10. Disclaimer of Warranties</h2>
            <p>The Service is provided "as is" without warranties of any kind. We do not guarantee that the Service will be uninterrupted, error-free, or meet your specific requirements.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">11. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, BriefRamp shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service. Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">12. Changes to Terms</h2>
            <p>We may update these Terms at any time. We will notify you of material changes by email or prominent notice within the Service. Continued use after changes constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">13. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:hello@brieframp.com" className="text-[#5B6AF0] hover:underline">hello@brieframp.com</a>.</p>
          </section>

        </div>
      </main>
    </>
  )
}
