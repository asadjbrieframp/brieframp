import Nav from "@/components/Nav"

export default function TermsPage() {
  return (
    <div>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: June 2026</p>
        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">1. Agreement to Terms</h2><p>By accessing or using BriefRamp, you agree to be bound by these Terms of Service.</p></section>
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">2. Description of Service</h2><p>BriefRamp is a client onboarding platform for freelance web designers. It enables designers to create client portals that collect briefs, present proposals, collect electronic signatures, and process deposit payments.</p></section>
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">3. Account Registration</h2><p>You must provide accurate information when creating an account. You are responsible for all activity under your account.</p></section>
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">4. Acceptable Use</h2><p>You agree not to use the Service to violate any law, collect payments for fraudulent services, impersonate others, or attempt to gain unauthorised access to the Service.</p></section>
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">5. Payments and Billing</h2><p>Subscription fees are billed monthly or annually. All fees are non-refundable except as described in our Refund Policy. We do not store card details.</p></section>
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">6. Client Deposits</h2><p>BriefRamp facilitates deposit payments between designers and their clients. We are not a party to those transactions. Designers are solely responsible for services provided to their clients.</p></section>
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">7. Electronic Signatures</h2><p>Electronic signatures collected through BriefRamp are intended to constitute legally binding signatures. You are responsible for ensuring compliance with applicable e-signature laws.</p></section>
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">8. Termination</h2><p>You may cancel your account at any time. We reserve the right to suspend accounts that violate these Terms. Data is retained for 30 days after deletion.</p></section>
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">9. Limitation of Liability</h2><p>BriefRamp shall not be liable for indirect, incidental, or consequential damages. Our total liability shall not exceed fees paid in the 12 months preceding any claim.</p></section>
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">10. Contact</h2><p>For questions about these Terms, contact us at hello@brieframp.com</p></section>
        </div>
      </main>
    </div>
  )
}
