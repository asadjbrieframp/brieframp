import Link from 'next/link'
import Nav from '@/components/Nav'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-[#EEF0FE] text-[#5B6AF0] text-sm font-medium px-4 py-2 rounded-full mb-8">
            Built for freelance web designers
          </div>
          <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
            Get every client on board,{' '}
            <span className="text-[#5B6AF0]">fast.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            One link. Client fills their brief, reviews your proposal, signs the contract,
            and pays the deposit. No back-and-forth email.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/login"
              className="bg-[#5B6AF0] text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#4A58E0] transition-colors"
            >
              Start free
            </Link>
            <Link
              href="/pricing"
              className="text-slate-600 px-8 py-4 rounded-lg text-base font-medium hover:text-slate-900 transition-colors"
            >
              See pricing
            </Link>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-slate-50 border-t border-slate-200 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
              Four steps. One link.
            </h2>
            <p className="text-slate-500 text-center mb-14 text-lg">
              Send your client a single URL. They move through every step at their own pace.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { num: '01', title: 'Brief', desc: 'Client answers your intake questions about their project, goals, and timeline.' },
                { num: '02', title: 'Proposal', desc: 'They review the scope and pricing you have put together based on their brief.' },
                { num: '03', title: 'Contract', desc: 'Client signs with a typed name - legally binding in most jurisdictions.' },
                { num: '04', title: 'Deposit', desc: 'They pay the deposit online. You get notified instantly. Project starts.' },
              ].map((step) => (
                <div key={step.num} className="bg-white border border-slate-200 rounded-xl p-6">
                  <div className="text-[#5B6AF0] font-bold text-sm mb-3">{step.num}</div>
                  <h3 className="text-slate-900 font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Stop chasing clients over email.
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            Free to start. No credit card required.
          </p>
          <Link
            href="/login"
            className="inline-block bg-[#5B6AF0] text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#4A58E0] transition-colors"
          >
            Create your first link free
          </Link>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-slate-400">2026 BriefRamp. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/terms" className="text-sm text-slate-400 hover:text-slate-600">Terms</Link>
            <Link href="/privacy" className="text-sm text-slate-400 hover:text-slate-600">Privacy</Link>
            <Link href="/refund" className="text-sm text-slate-400 hover:text-slate-600">Refunds</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
