import Nav from "@/components/Nav"

export default function RefundPage() {
  return (
    <div>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Refund Policy</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: June 2026</p>
        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">Monthly Subscriptions</h2><p>If you cancel a monthly subscription within 7 days of your billing date and have not used the Service, you are eligible for a full refund. Requests after 7 days will not be refunded, but your subscription remains active until the end of the billing period.</p></section>
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">Annual Subscriptions</h2><p>Annual subscriptions may be refunded on a pro-rata basis within 30 days of purchase. After 30 days, annual fees are non-refundable but you retain access for the remainder of the period.</p></section>
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">Free Trial</h2><p>No charges apply during a free trial. You are only billed if you choose to upgrade after the trial ends.</p></section>
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">Client Deposits</h2><p>Refunds of client deposits are subject to the agreement between the designer and their client. BriefRamp cannot process refunds of those transactions.</p></section>
          <section><h2 className="text-xl font-semibold text-slate-900 mb-3">How to Request a Refund</h2><p>Email us at hello@brieframp.com with your account email and reason. We will respond within 2 business days.</p></section>
        </div>
      </main>
    </div>
  )
}
