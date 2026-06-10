import Link from 'next/link'
import Nav from '@/components/Nav'

export default function Home() {
  return (
    <div className="bg-white">
      <Nav />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="hero-bg overflow-hidden relative">
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/8 border border-white/12 text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse inline-block" />
            Built for freelance web designers
          </div>
          <h1 className="animate-fade-in-up delay-100 text-[3.25rem] md:text-[4.5rem] lg:text-[5.25rem] font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-6">
            Client onboarding<br />
            <span className="gradient-text">that actually converts.</span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            One link. Client fills their brief, reviews your proposal, and approves.
            No chasing emails. No lost PDFs. No awkward back-and-forth.
          </p>
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
            <Link href="/signup" className="btn-primary text-[0.9375rem] px-7 py-3.5">
              Start free — no card needed
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/pricing" className="btn-ghost text-[0.9375rem] px-7 py-3.5">
              View pricing
            </Link>
          </div>
          <div className="animate-fade-in-up delay-400 flex items-center justify-center gap-3 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {[['A','#6366f1'],['M','#8b5cf6'],['K','#a855f7'],['J','#7c3aed'],['R','#4f46e5']].map(([l, c]) => (
                <div key={l} className="w-8 h-8 rounded-full border-2 border-[#04040e] flex items-center justify-center text-white text-xs font-semibold" style={{background: c}}>
                  {l}
                </div>
              ))}
            </div>
            <span>Trusted by <strong className="text-slate-300 font-semibold">200+ designers</strong></span>
          </div>
        </div>

        {/* Product mockup */}
        <div className="relative max-w-3xl mx-auto px-6 pb-0">
          <div className="rounded-2xl overflow-hidden" style={{boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 25px 80px rgba(99,102,241,0.22), 0 8px 32px rgba(0,0,0,0.45)'}}>
            <div className="bg-white/6 border-b border-white/8 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 bg-white/8 rounded-md px-4 py-1 text-xs text-slate-400 text-center font-mono tracking-tight">
                brieframp.com/brief/sarah-chen
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#0a0a1a] to-[#060612] p-8">
              <div className="max-w-sm mx-auto">
                <div className="text-center mb-5">
                  <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-2">Step 1 of 3 · Project Brief</p>
                  <h3 className="text-white text-lg font-bold tracking-tight">Tell us about your project</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/6 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-300">Website redesign for e-commerce store</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/6 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-400">$3,000–$5,000</div>
                    <div className="bg-indigo-600/25 border border-indigo-500/35 rounded-lg px-4 py-2.5 text-sm text-indigo-300 font-medium">2–4 weeks ✓</div>
                  </div>
                  <div className="flex justify-end pt-1">
                    <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg inline-flex items-center gap-2" style={{boxShadow:'0 4px 14px rgba(99,102,241,0.4)'}}>
                      Continue →
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-20 bg-gradient-to-b from-transparent to-white pointer-events-none absolute bottom-0 left-0 right-0" />
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              How it works
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Four steps. <span className="text-indigo-600">One link.</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Send your client a URL. They move through every step at their own pace — you get notified at each milestone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { num: '01', title: 'Brief', desc: 'Client fills a detailed intake form about their project, goals, budget and timeline.', bg: 'from-indigo-50 to-blue-50', accent: '#6366f1', icon: '📋' },
              { num: '02', title: 'Proposal', desc: 'They review the scope and pricing you built from their answers — no chasing needed.', bg: 'from-violet-50 to-purple-50', accent: '#8b5cf6', icon: '📄' },
              { num: '03', title: 'Contract', desc: 'Client signs with a typed signature — legally binding in most jurisdictions.', bg: 'from-purple-50 to-fuchsia-50', accent: '#a855f7', icon: '✍️' },
              { num: '04', title: 'Deposit', desc: 'They pay the deposit online. You get notified instantly and the project begins.', bg: 'from-emerald-50 to-teal-50', accent: '#10b981', icon: '💳' },
            ].map((step, i, arr) => (
              <div key={step.num} className={`relative bg-gradient-to-br ${step.bg} rounded-2xl p-6 card-hover`} style={{border:'1px solid rgba(0,0,0,0.05)'}}>
                {i < arr.length - 1 && <div className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-white shadow-sm items-center justify-center text-slate-300 text-xs">›</div>}
                <div className="text-3xl mb-4">{step.icon}</div>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{color: step.accent}}>{step.num}</div>
                <h3 className="text-slate-900 font-bold text-base mb-2 tracking-tight">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES (dark) ──────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/6 border border-white/10 text-indigo-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Everything included
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Replace five tools<br /><span className="gradient-text">with one link.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: '⚡', title: 'Instant brief links', desc: 'Add a client and get a unique brief link in seconds. Share it anywhere.' },
              { icon: '🎯', title: 'Smart proposals', desc: 'Build proposals in the dashboard. Clients review and approve without email.' },
              { icon: '🔔', title: 'Real-time notifications', desc: 'Get emailed the moment a client submits their brief or approves your proposal.' },
              { icon: '🔐', title: 'Secure portals', desc: 'Every client portal is token-protected. Only the right client can access it.' },
              { icon: '📱', title: 'Mobile-first', desc: 'Clients can fill briefs and approve proposals on any device, anywhere.' },
              { icon: '📊', title: 'Pipeline view', desc: 'Track every client from brief to approved in one clean dashboard.' },
            ].map((f) => (
              <div key={f.title} className="glass-card rounded-xl p-6 card-hover group">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-1.5 tracking-tight">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Designers love it</h2>
            <p className="text-xl text-slate-500">Real feedback from real freelancers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "I used to spend 2 hours onboarding each client. With BriefRamp it's one link and they're done. Total game changer.", name: 'Sarah Chen', role: 'Freelance UI Designer', avatar: 'SC', color: '#6366f1' },
              { quote: "The moment I stopped chasing clients for approvals, my revenue went up. Not joking. This tool closes deals faster.", name: 'Marcus Adebayo', role: 'Brand & Web Designer', avatar: 'MA', color: '#8b5cf6' },
              { quote: "Clients actually fill briefs properly now because it's a real form, not a Word doc. The quality alone made it worth it.", name: 'Kirsten V.', role: 'Web Designer & Developer', avatar: 'KV', color: '#7c3aed' },
            ].map((t) => (
              <div key={t.name} className="bg-slate-50 rounded-2xl p-7 card-hover" style={{border:'1px solid #f1f5f9'}}>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-4 h-4 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-5 font-medium">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{background: t.color}}>{t.avatar}</div>
                  <div>
                    <p className="text-slate-900 font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="hero-bg py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            Stop losing clients to<br /><span className="gradient-text">slow onboarding.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed">Free forever for 1 client. No credit card required.</p>
          <Link href="/signup" className="btn-primary text-base px-8 py-4">
            Create your first link — it&apos;s free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="bg-slate-950 border-t border-slate-800/50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
            <div>
              <Link href="/" className="flex items-center gap-2.5 mb-3">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{background:'linear-gradient(135deg,#6366f1,#8b5cf6)'}}>BR</span>
                <span className="text-white font-bold text-lg tracking-tight">BriefRamp</span>
              </Link>
              <p className="text-slate-500 text-sm max-w-xs leading-relaxed">The client onboarding platform built for freelance designers.</p>
            </div>
            <div className="flex flex-wrap gap-12">
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Product</p>
                <div className="flex flex-col gap-2.5">
                  <Link href="/pricing" className="text-slate-500 hover:text-slate-200 text-sm transition-colors">Pricing</Link>
                  <Link href="/login" className="text-slate-500 hover:text-slate-200 text-sm transition-colors">Sign in</Link>
                  <Link href="/signup" className="text-slate-500 hover:text-slate-200 text-sm transition-colors">Sign up free</Link>
                </div>
              </div>
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Legal</p>
                <div className="flex flex-col gap-2.5">
                  <Link href="/terms" className="text-slate-500 hover:text-slate-200 text-sm transition-colors">Terms</Link>
                  <Link href="/privacy" className="text-slate-500 hover:text-slate-200 text-sm transition-colors">Privacy</Link>
                  <Link href="/refund" className="text-slate-500 hover:text-slate-200 text-sm transition-colors">Refunds</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-sm">© 2026 BriefRamp. All rights reserved.</p>
            <p className="text-slate-600 text-sm">Built for designers, by a designer.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
