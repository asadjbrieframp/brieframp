import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/Nav'
import AddClientForm from '@/components/dashboard/AddClientForm'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: clients } = await supabase
    .from('clients')
    .select('*')
    .eq('designer_id', user.id)
    .order('created_at', { ascending: false })

  const statusLabel: Record<string, string> = {
    pending_brief: 'Awaiting brief',
    brief_submitted: 'Brief received',
    proposal_sent: 'Proposal sent',
    proposal_approved: 'Approved',
    completed: 'Completed',
  }

  const statusColor: Record<string, string> = {
    pending_brief: 'bg-yellow-100 text-yellow-800',
    brief_submitted: 'bg-blue-100 text-blue-800',
    proposal_sent: 'bg-purple-100 text-purple-800',
    proposal_approved: 'bg-green-100 text-green-800',
    completed: 'bg-gray-100 text-gray-800',
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
            <p className="text-gray-500 text-sm mt-1">
              {clients?.length ?? 0} client{clients?.length !== 1 ? 's' : ''}
            </p>
          </div>
          <AddClientForm designerId={user.id} />
        </div>

        {!clients || clients.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-16 text-center">
            <p className="text-4xl mb-4">👋</p>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Add your first client</h2>
            <p className="text-gray-500 text-sm mb-6">
              Add a client and send them a brief link to get started.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {clients.map(client => (
              <Link
                key={client.id}
                href={`/clients/${client.id}`}
                className="block bg-white rounded-xl border border-gray-200 p-5 hover:border-indigo-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{client.name}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{client.email}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[client.status] ?? 'bg-gray-100 text-gray-800'}`}>
                    {statusLabel[client.status] ?? client.status}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
