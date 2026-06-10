import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { sendBriefSubmittedEmail, sendProposalApprovedEmail } from '@/lib/email'

function createAdminClient() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { cookies: { getAll: () => [], setAll: () => {} } }
  )
}

export async function POST(req: NextRequest) {
  const { type, clientId, proposalId } = await req.json()

  const supabase = createAdminClient()
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://brieframp.com'

  if (type === 'brief_submitted' && clientId) {
    const { data: client } = await supabase
      .from('clients')
      .select('name, designer_id')
      .eq('id', clientId)
      .single()

    if (!client) return NextResponse.json({ error: 'Client not found' }, { status: 404 })

    const { data: { user } } = await supabase.auth.admin.getUserById(client.designer_id)
    if (!user?.email) return NextResponse.json({ error: 'Designer email not found' }, { status: 404 })

    const designerName = (user.user_metadata?.full_name as string) || 'there'

    await sendBriefSubmittedEmail({
      designerEmail: user.email,
      designerName,
      clientName: client.name,
      dashboardUrl: appUrl + '/clients/' + clientId,
    })

    return NextResponse.json({ ok: true })
  }

  if (type === 'proposal_approved' && proposalId) {
    const { data: proposal } = await supabase
      .from('proposals')
      .select('title, client_id, clients(name, designer_id)')
      .eq('id', proposalId)
      .single()

    if (!proposal) return NextResponse.json({ error: 'Proposal not found' }, { status: 404 })

    const clientData = proposal.clients as { name: string; designer_id: string } | null
    if (!clientData) return NextResponse.json({ error: 'Client not found' }, { status: 404 })

    const { data: { user } } = await supabase.auth.admin.getUserById(clientData.designer_id)
    if (!user?.email) return NextResponse.json({ error: 'Designer email not found' }, { status: 404 })

    const designerName = (user.user_metadata?.full_name as string) || 'there'

    await sendProposalApprovedEmail({
      designerEmail: user.email,
      designerName,
      clientName: clientData.name,
      proposalTitle: proposal.title,
      dashboardUrl: appUrl + '/clients/' + proposal.client_id,
    })

    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
}
