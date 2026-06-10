'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

interface Props {
  user: { id: string; email: string; name: string }
  clientCount: number
}

const PLAN_LIMITS: Record<string, number | null> = {
  free: 1,
  starter: 5,
  pro: null,
}

const PLAN_META = {
  free:    { label: 'Free',    color: '#94a3b8', bg: 'rgba(148,163,184,0.1)',  price: '$0/mo' },
  starter: { label: 'Starter', color: '#6366f1', bg: 'rgba(99,102,241,0.1)',   price: '$9/mo' },
  pro:     { label: 'Pro',     color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)',    price: '$19/mo' },
}

export default function AccountClient({ user, clientCount }: Props) {
  const router = useRouter()
  const [name, setName] = useState(user.name)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  // For now all users are on free plan — extend this with actual plan lookup later
  const plan = 'free'
  const planMeta = PLAN_META[plan]
  const limit = PLAN_LIMITS[plan]
  const initials = name
    ? name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
    : user.email[0].toUpperCase()

  async function handleSaveName(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')
    const supabase = createClient()
    const { error } = await supabase.auth.updateUser({ data: { full_name: name } })
    if (error) {
      setError(error.message)
    } else {
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
      router.refresh()
    }
    setSaving(false)
  }

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Account</h1>
        <p className="text-slate-400 text-sm mt-0.5">Manage your profile and subscription</p>
      </div>

      {/* Profile card */}
      <div className="bg-white rounded-2xl border p-6 mb-5" style={{ borderColor: 'rgba(226,232,240,0.8)' }}>
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg shrink-0"
            style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}
          >
            {initials}
          </div>
          <div>
            <p className="font-bold text-slate-900">{name || 'Your account'}</p>
            <p className="text-slate-400 text-sm">{user.email}</p>
          </div>
        </div>

        <form onSubmit={handleSaveName} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="premium-input"
              placeholder="Jane Smith"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email address</label>
            <input
              type="email"
              value={user.email}
              disabled
              className="premium-input"
              style={{ opacity: 0.6, cursor: 'not-allowed' }}
            />
            <p className="text-xs text-slate-400 mt-1.5">Email changes aren&apos;t supported yet.</p>
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={saving || name === user.name}
            className="flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-px"
            style={{
              background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
              boxShadow: '0 4px 12px rgba(99,102,241,0.3)',
            }}
          >
            {saving ? (
              <>
                <svg className="animate-spin h-3.5 w-3.5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Saving...
              </>
            ) : saved ? (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Saved!
              </>
            ) : 'Save changes'}
          </button>
        </form>
      </div>

      {/* Plan card */}
      <div className="bg-white rounded-2xl border p-6 mb-5" style={{ borderColor: 'rgba(226,232,240,0.8)' }}>
        <h2 className="font-bold text-slate-900 text-sm mb-5">Current plan</h2>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{ background: planMeta.bg, color: planMeta.color }}
            >
              {planMeta.label}
            </span>
            <span className="text-slate-500 text-sm">{planMeta.price}</span>
          </div>
          <Link
            href="/pricing"
            className="text-indigo-600 hover:text-indigo-700 text-sm font-semibold transition-colors"
          >
            Upgrade →
          </Link>
        </div>

        {/* Usage */}
        <div
          className="rounded-xl p-4"
          style={{ background: 'rgba(248,249,255,0.8)', border: '1px solid rgba(226,232,240,0.6)' }}
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold text-slate-600">Client usage</p>
            <p className="text-xs text-slate-400">
              {clientCount} / {limit === null ? '∞' : limit} clients
            </p>
          </div>
          <div className="w-full h-1.5 rounded-full" style={{ background: 'rgba(226,232,240,0.8)' }}>
            <div
              className="h-1.5 rounded-full transition-all"
              style={{
                width: limit === null ? '30%' : `${Math.min((clientCount / limit) * 100, 100)}%`,
                background: limit !== null && clientCount >= limit
                  ? 'linear-gradient(90deg,#ef4444,#f97316)'
                  : 'linear-gradient(90deg,#6366f1,#8b5cf6)',
              }}
            />
          </div>
          {limit !== null && clientCount >= limit && (
            <p className="text-xs text-red-500 mt-2 font-medium">
              Client limit reached.{' '}
              <Link href="/pricing" className="underline">Upgrade to add more.</Link>
            </p>
          )}
        </div>
      </div>

      {/* Payment history placeholder */}
      <div className="bg-white rounded-2xl border p-6 mb-5" style={{ borderColor: 'rgba(226,232,240,0.8)' }}>
        <h2 className="font-bold text-slate-900 text-sm mb-4">Payment history</h2>
        <div
          className="rounded-xl p-6 text-center"
          style={{ background: 'rgba(248,249,255,0.8)', border: '1px solid rgba(226,232,240,0.6)' }}
        >
          <p className="text-slate-400 text-sm">No payments yet.</p>
          <p className="text-slate-400 text-xs mt-1">Invoices will appear here once you upgrade.</p>
        </div>
      </div>

      {/* Sign out */}
      <div className="bg-white rounded-2xl border p-6" style={{ borderColor: 'rgba(226,232,240,0.8)' }}>
        <h2 className="font-bold text-slate-900 text-sm mb-1">Sign out</h2>
        <p className="text-slate-400 text-xs mb-4">You&apos;ll be redirected to the homepage.</p>
        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg border transition-all hover:-translate-y-px"
          style={{
            color: '#ef4444',
            border: '1.5px solid rgba(239,68,68,0.25)',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(239,68,68,0.04)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sign out
        </button>
      </div>
    </div>
  )
}
