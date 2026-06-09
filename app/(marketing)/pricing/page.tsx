import Nav from '@/components/Nav'
import Link from 'next/link'

export const metadata = {
  title: 'Pricing — BriefRamp',
  description: 'Simple, transparent pricing for freelance designers.',
}

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Simple pricing</h1>
          <p className="text-xl text-slate-500">Start free. Upgrade when you're ready.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free */}
          <div className="border border-slate-200 rounded-2xl p-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900 mb-1">Free</h2>
              <p className="text-slate-500 text-sm">Perfect for getting started</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">$0</span>
              <span className="text-slate-500 ml-2">/ month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                '3 active client portals',
                'Brief + proposal + contract',
                'Deposit payment collection',
                'Email notifications',
                'BriefRamp branding on portal',
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="text-[#10B981] mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/login"
              className="block text-center border border-[#5B6AF0] text-[#5B6AF0] px-6 py-3 rounded-lg font-semibold hover:bg-[#EEF0FE] transition-colors"
            >
              Get started free
            </Link>
          </div>

          {/* Pro */}
          <div className="border-2 border-[#5B6AF0] rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-[#5B6AF0] text-white text-xs font-semibold px-3 py-1 rounded-full">
                MOST POPULAR
              </span>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900 mb-1">Pro</h2>
              <p className="text-slate-500 text-sm">For designers serious about growth</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">$29</span>
              <span className="text-slate-500 ml-2">/ month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                'Unlimited client portals',
                'White-label (your brand, not ours)',
                'Custom domain support',
                'Proposal PDF generation',
                'Priority email support',
                'Everything in Free',
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="text-[#10B981] mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/login"
              className="block text-center bg-[#5B6AF0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4A58E0] transition-colors"
            >
              Start 14-day free trial
            </Link>
          </div>
        </div>

        <p className="text-center text-slate-400 text-sm mt-10">
          No contracts. Cancel any time. All prices in USD.
        </p>
      </main>
    </>
  )
}
