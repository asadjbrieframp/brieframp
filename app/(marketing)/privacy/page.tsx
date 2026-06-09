import Nav from "@/components/Nav"

export default function PrivacyPage() {
  return (
    <div>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: June 2026</p>
        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">1. Information We Collect</h2><p>We collect account information (name, email), client data you enter, usage data, and IP addresses logged at contract signing for legal validity. Payment data is processed by our payment provider and we do not store card numbers.</p></section>
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">2. How We Use Your Information</h2><p>We use your information to provide the Service, send transactional emails, process payments, provide support, improve the Service, and comply with legal obligations.</p></section>
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">3. Information Sharing</h2><p>We do not sell your personal data. We share data only with service providers who help operate the Service, and when required by law.</p></section>
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">4. Data Storage and Security</h2><p>Your data is stored securely using industry-standard encryption. We implement row-level security to ensure your data is only accessible to you.</p></section>
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">5. Data Retention</h2><p>We retain your data while your account is active. Upon deletion, data is retained for 30 days before permanent deletion.</p></section>
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">6. Your Rights</h2><p>You have the right to access, correct, delete, and export your personal data. Contact us at hello@brieframp.com to exercise these rights.</p></section>
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">7. Cookies</h2><p>We use essential cookies only for authentication sessions and security. We do not use advertising or tracking cookies.</p></section>
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">8. Contact</h2><p>For privacy questions, contact us at hello@brieframp.com</p></section>
        </div>
      </main>
    </div>
  )
}
