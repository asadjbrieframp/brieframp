'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(4,4,14,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold transition-transform group-hover:scale-105"
            style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}
          >
            BR
          </span>
          <span className="text-white font-bold text-base tracking-tight">BriefRamp</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          <Link href="/pricing" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Pricing</Link>
          <Link href="/login" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Sign in</Link>
          <Link
            href="/signup"
            className="text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all hover:-translate-y-px"
            style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', boxShadow: '0 4px 14px rgba(99,102,241,0.35)' }}
          >
            Get started free
          </Link>
        </div>

        <Link
          href="/signup"
          className="md:hidden text-white text-sm font-semibold px-4 py-2 rounded-lg"
          style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}
        >
          Get started
        </Link>
      </div>
    </nav>
  )
}
