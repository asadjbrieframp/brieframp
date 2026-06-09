import Nav from '@/components/Nav'

export const metadata = {
  title: 'Privacy Policy — BriefRamp',
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-slate-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Information We Collect</h2>
            <p className="mb-3">We collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account information:</strong> Name, email address, company name when you register.</li>
              <li><strong>Client data:</strong> Information you enter about your clients (names, emails, project details).</li>
              <li><strong>Usage data:</strong> Pages visited, features used, timestamps — to improve the Service.</li>
              <li><strong>Payment data:</strong> Billing information is processed by our payment provider. We do not store card numbers.</li>
              <li><strong>IP addresses:</strong> Logged at contract signing for legal validity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and operate the Service</li>
              <li>To send transactional emails (link delivery, notifications)</li>
              <li>To process payments and manage subscriptions</li>
              <li>To provide customer support</li>
              <li>To improve and develop the Service</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Information Sharing</h2>
            <p>We do not sell your personal data. We share data only with:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Service providers:</strong> Hosting, email, and payment processors who help operate the Service.</li>
              <li><strong>Legal requirements:</strong> When required by law or to protect our rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Data Storage and Security</h2>
            <p>Your data is stored securely using industry-standard encryption. We use Supabase for database storage, hosted on AWS infrastructure. We implement row-level security to ensure your data is only accessible to you.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Data Retention</h2>
            <p>We retain your data for as long as your account is active. Upon account deletion, your data is retained for 30 days before permanent deletion, except where we are required by law to retain it longer.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data in a portable format</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at <a href="mailto:hello@brieframp.com" className="text-[#5B6AF0] hover:underline">hello@brieframp.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Cookies</h2>
            <p>We use essential cookies only — for authentication sessions and security. We do not use advertising or tracking cookies.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Third-Party Services</h2>
            <p>Our Service integrates with third-party providers. Their privacy policies govern their handling of data:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Supabase — database and authentication</li>
              <li>Vercel — hosting and infrastructure</li>
              <li>Resend — transactional email delivery</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">9. Changes to This Policy</h2>
            <p>We may update this policy periodically. We will notify you of significant changes by email. Continued use of the Service constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">10. Contact</h2>
            <p>For privacy-related questions, contact us at <a href="mailto:hello@brieframp.com" className="text-[#5B6AF0] hover:underline">hello@brieframp.com</a>.</p>
          </section>

        </div>
      </main>
    </>
  )
}
