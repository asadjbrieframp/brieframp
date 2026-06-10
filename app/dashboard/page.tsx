import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { ClientStatus } from '@/types/database'

const statusConfig: Record<ClientStatus, { label: string; dot: string; bg: string; text: string }> = {
  pending_brief:    { label: 'Awaiting brief',  dot: '#f59e0b', bg: 'rgba(245,158,11,0.1)',  text: '#d97706' },
  brief_submitted:  { label: 'Brief received',  dot: '#6366f1', bg: 'rgba(99,102,241,0.1)',  text: '#6366f1' },
  proposal_sent:    { label: 'Proposal sent',   dot: '#8b5cf6', bg: 'rgba(139,92,246,0.1)',  text: '#8b5cf6' },
  proposal_approved:{ label: 'Approved',        dot: '#10b981', bg: 'rgba(16,185,129,0.1)',  text: '#059669' },
  completed:        { label: 'Completed',        dot: '#94a3b8', bg: 'rgba(148,163,184,0.1)', text: '#64748b' },
}

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: clients } = await supabase
    .from('clients')
    .select('*')
    .eq('designer_id', user!.id)
    .order('created_at', { ascending: false })

  const stats = {
    total:     clients?.length ?? 0,
    pending:   clients?.filter(c => c.status === 'pending_brief').length ?? 0,
    briefs:    clients?.filter(c => c.status === 'brief_submitted').length ?? 0,
    proposals: clients?.filter(c => c.status === 'proposal_sent').length ?? 0,
  }

  const statCards = [
    {
      label: 'Total clients',
      value: stats.total,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: '#6366f1',
      bg: 'rgba(99,102,241,0.08)',
    },
    {
      label: 'Awaiting brief',
      value: stats.pending,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: '#f59e0b',
      bg: 'rgba(245,158,11,0.08)',
    },
    {
      label: 'Briefs received',
      value: stats.briefs,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: '#6366f1',
      bg: 'rgba(99,102,241,0.08)',
    },
    {
      label: 'Proposals sent',
      value: stats.proposals,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      color: '#8b5cf6',
      bg: 'rgba(139,92,246,0.08)',
    },
  ]

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Dashboard</h1>
          <p className="text-slate-400 text-sm mt-0.5">Manage your client onboarding pipeline</p>
        </div>
        <Link
          href="/clients/new"
          className="flex items-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-all hover:-translate-y-px"
          style={{
            background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
            boxShadow: '0 4px 12px rgba(99,102,241,0.35)',
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New client
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map(stat => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border p-5 card-hover"
            style={{ borderColor: 'rgba(226,232,240,0.8)' }}
          >
            <div className="flex items-start justify-between mb-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: stat.bg, color: stat.color }}
              >
                {stat.icon}
              </div>
            </div>
            <p className="text-2xl font-extrabold text-slate-900 tracking-tight">{stat.value}</p>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Client list */}
      <div className="bg-white rounded-xl border" style={{ borderColor: 'rgba(226,232,240,0.8)' }}>
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: '1px solid rgba(226,232,240,0.8)' }}
        >
          <h2 className="font-bold text-slate-900 text-sm tracking-tight">Clients</h2>
          {clients && clients.length > 0 && (
            <span className="text-xs text-slate-400">{clients.length} total</span>
          )}
        </div>

        {!clients || clients.length === 0 ? (
          <div className="px-6 py-20 text-center">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ background: 'rgba(99,102,241,0.08)' }}
            >
              <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-slate-900 font-bold text-sm mb-1">No clients yet</p>
            <p className="text-slate-400 text-sm mb-6">Add your first client to generate a brief link</p>
            <Link
              href="/clients/new"
              className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:-translate-y-px"
              style={{
                background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                boxShadow: '0 4px 12px rgba(99,102,241,0.3)',
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add first client
            </Link>
          </div>
        ) : (
          <div>
            {clients.map((client, i) => {
              const status = statusConfig[client.status as ClientStatus]
              return (
                <Link
                  key={client.id}
                  href={`/clients/${client.id}`}
                  className="flex items-center justify-between px-6 py-4 transition-colors group hover:bg-[#fafafe]"
                  style={{
                    borderBottom: i < clients.length - 1 ? '1px solid rgba(226,232,240,0.6)' : 'none',
                  }}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}
                    >
                      {client.name.split(' ').map((w: string) => w[0]).slice(0, 2).join('').toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{client.name}</p>
                      <p className="text-xs text-slate-400">{client.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: status.bg, color: status.text }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: status.dot }}
                      />
                      {status.label}
                    </span>
                    <svg className="w-4 h-4 text-slate-300 group-hover:text-slate-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
