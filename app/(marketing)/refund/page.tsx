import Nav from '@/components/Nav'

export const metadata = {
  title: 'Refund Policy — BriefRamp',
}

export default function RefundPage() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Refund Policy</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-slate-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Our Commitment</h2>
            <p>We want you to be satisfied with BriefRamp. If you are not happy with your subscription, we will work with you to make it right.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Monthly Subscriptions</h2>
            <p>If you cancel a monthly subscription within <strong>7 days</strong> of your billing date and have not used the Service during that period, you are eligible for a full refund of that month's charge. Requests made after 7 days will not be refunded, but your subscription will remain active until the end of the billing period.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Annual Subscriptions</h2>
            <p>Annual subscriptions may be refunded on a pro-rata basis within <strong>30 days</strong> of purchase. After 30 days, annual subscription fees are non-refundable, but you retain access for the remainder of the subscription period.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Free Trial</h2>
            <p>If you are on a free trial, no charges apply. You will only be billed if you choose to upgrade to a paid plan after the trial ends.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Client Deposits</h2>
            <p>BriefRamp facilitates deposit payments between designers and their end clients. Refunds of those deposits are subject to the agreement between the designer and their client — BriefRamp is not responsible for and cannot process refunds of those transactions.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">How to Request a Refund</h2>
            <p>To request a refund, email us at <a href="mailto:hello@brieframp.com" className="text-[#5B6AF0] hover:underline">hello@brieframp.com</a> with your account email and the reason for your request. We will respond within 2 business days.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Exceptions</h2>
            <p>We reserve the right to decline refund requests where there is evidence of abuse, fraud, or violation of our Terms of Service.</p>
          </section>

        </div>
      </main>
    </>
  )
}
