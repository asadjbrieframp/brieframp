import Nav from '@/components/Nav'
import Link from 'next/link'

export const metadata = {
  title: 'Pricing — BriefRamp',
  description: 'Simple, transparent pricing for freelance designers.',
}

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/ month',
    tagline: 'Try it risk-free',
    cta: 'Get started free',
    ctaHref: '/signup',
    ctaStyle: 'outline' as const,
    popular: false,
    features: [
      '1 active client',
      'Client brief form',
      'Proposal builder',
      'Email notifications',
      'BriefRamp branding',
    ],
  },
  {
    name: 'Starter',
    price: '$9',
    period: '/ month',
    tagline: 'For growing freelancers',
    cta: 'Start free trial',
    ctaHref: '/signup',
    ctaStyle: 'gradient' as const,
    popular: true,
    features: [
      'Up to 5 clients',
      'Everything in Free',
      'Remove BriefRamp branding',
      'Priority email support',
      'Custom thank-you message',
    ],
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/ month',
    tagline: 'For serious studios',
    cta: 'Go unlimited',
    ctaHref: '/signup',
    ctaStyle: 'outline' as const,
    popular: false,
    features: [
      'Unlimited clients',
      'Everything in Starter',
      'Custom domain (soon)',
      'Proposal PDF export',
      'Zapier integration (soon)',
    ],
  },
]

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main style={{ background: '#04040e', minHeight: '100vh', paddingTop: '80px' }}>
        {/* Hero */}
        <section className="relative pt-20 pb-16 text-center px-6">
          <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
          <div className="relative max-w-2xl mx-auto">
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
              style={{
                background: 'rgba(99,102,241,0.15)',
                border: '1px solid rgba(99,102,241,0.3)',
                color: '#a5b4fc',
              }}
            >
              Simple, honest pricing
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Start free.{' '}
              <span className="gradient-text">Scale when you&apos;re ready.</span>
            </h1>
            <p className="text-slate-400 text-lg">
              No contracts, no surprises. Cancel any time.
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="relative pb-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiers.map(tier => (
                <div
                  key={tier.name}
                  className="relative rounded-2xl p-7 flex flex-col"
                  style={tier.popular ? {
                    background: '#ffffff',
                    boxShadow: '0 0 0 2px #6366f1, 0 24px 48px rgba(99,102,241,0.2)',
                  } : {
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span
                        className="text-xs font-bold px-3 py-1.5 rounded-full text-white tracking-wider uppercase"
                        style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}
                      >
                        Most popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <p className={`text-sm font-semibold mb-1 ${tier.popular ? 'text-indigo-600' : 'text-indigo-400'}`}>
                      {tier.name}
                    </p>
                    <div className="flex items-baseline gap-1.5">
                      <span className={`text-4xl font-extrabold tracking-tight ${tier.popular ? 'text-slate-900' : 'text-white'}`}>
                        {tier.price}
                      </span>
                      <span className={`text-sm ${tier.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                        {tier.period}
                      </span>
                    </div>
                    <p className={`text-sm mt-1 ${tier.popular ? 'text-slate-500' : 'text-slate-500'}`}>
                      {tier.tagline}
                    </p>
                  </div>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {tier.features.map(f => (
                      <li key={f} className={`flex items-start gap-2.5 text-sm ${tier.popular ? 'text-slate-700' : 'text-slate-400'}`}>
                        <svg
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: tier.popular ? '#6366f1' : '#6366f1' }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={tier.ctaHref}
                    className="block text-center py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-px"
                    style={tier.ctaStyle === 'gradient' ? {
                      background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                      color: '#fff',
                      boxShadow: '0 4px 14px rgba(99,102,241,0.4)',
                    } : tier.popular ? {
                      border: '1.5px solid #6366f1',
                      color: '#6366f1',
                    } : {
                      border: '1.5px solid rgba(99,102,241,0.4)',
                      color: '#a5b4fc',
                    }}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>

            {/* FAQ reassurance */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { q: 'No credit card required', a: 'Sign up and start for free immediately. No billing details needed.' },
                { q: 'Cancel any time', a: 'No lock-in. Downgrade or cancel from your account settings anytime.' },
                { q: 'Upgrade instantly', a: 'Unlock more clients or features the moment you need them.' },
              ].map(item => (
                <div
                  key={item.q}
                  className="rounded-xl p-5"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <p className="text-white text-sm font-semibold mb-1">{item.q}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-600 text-xs mt-8">
              All prices in USD · Billed monthly · Taxes may apply
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
