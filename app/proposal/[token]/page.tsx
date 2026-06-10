import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'

export default async function ProposalPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params
  const supabase = await createClient()

  const { data: proposal } = await supabase
    .from('proposals')
    .select('*, clients(name, email)')
    .eq('proposal_token', token)
    .single()

  if (!proposal) notFound()

  async function approveProposal(formData: FormData) {
    'use server'
    const supabase2 = await createClient()
    await supabase2
      .from('proposals')
      .update({ status: 'approved', approved_at: new Date().toISOString() })
      .eq('proposal_token', token)
    await supabase2
      .from('clients')
      .update({ status: 'proposal_approved' })
      .eq('id', proposal.client_id)

  // Notify designer via email
  try {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://brieframp.com'
    await fetch(appUrl + '/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'proposal_approved', proposalId: proposal.id }),
    })
  } catch (_) {}
  }

  const isApproved = proposal.status === 'approved'
  const isRejected = proposal.status === 'rejected'

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-indigo-600 font-bold text-xl mb-4">
            <span className="bg-indigo-600 text-white px-2 py-0.5 rounded text-sm font-bold">BR</span>
            BriefRamp
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Your Proposal</h1>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-4">
          <div className="flex items-start justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">{proposal.title}</h2>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              isApproved ? 'bg-green-100 text-green-800' :
              isRejected ? 'bg-red-100 text-red-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {isApproved ? 'Approved' : isRejected ? 'Rejected' : 'Pending approval'}
            </span>
          </div>

          {proposal.overview && (
            <div className="mb-5">
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Overview</h3>
              <p className="text-gray-700 text-sm whitespace-pre-wrap">{proposal.overview}</p>
            </div>
          )}

          {proposal.deliverables && (
            <div className="mb-5">
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Deliverables</h3>
              <p className="text-gray-700 text-sm whitespace-pre-wrap">{proposal.deliverables}</p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Investment</p>
              <p className="text-2xl font-bold text-gray-900">${proposal.price.toLocaleString()}</p>
              <p className="text-xs text-gray-500">{proposal.currency}</p>
            </div>
            {proposal.timeline && (
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Timeline</p>
                <p className="text-lg font-semibold text-gray-900">{proposal.timeline}</p>
              </div>
            )}
          </div>

          {proposal.payment_terms && (
            <div className="mb-5">
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Payment terms</h3>
              <p className="text-gray-700 text-sm">{proposal.payment_terms}</p>
            </div>
          )}
        </div>

        {!isApproved && !isRejected && (
          <form action={approveProposal}>
            <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold text-base hover:bg-indigo-700">
              Approve proposal
            </button>
          </form>
        )}

        {isApproved && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
            <p className="text-green-800 font-medium">You approved this proposal</p>
            <p className="text-green-600 text-sm mt-1">Your designer has been notified and will be in touch.</p>
          </div>
        )}
      </div>
    </div>
  )
}
