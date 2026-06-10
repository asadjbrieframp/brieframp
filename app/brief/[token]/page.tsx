import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import BriefForm from '@/components/brief/BriefForm'

export default async function BriefPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params
  const supabase = await createClient()

  const { data: client } = await supabase
    .from('clients')
    .select('id, name, brief_token, status')
    .eq('brief_token', token)
    .single()

  if (!client) notFound()

  if (client.status !== 'pending_brief') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl border border-gray-200 p-10 max-w-md w-full text-center">
          <p className="text-3xl mb-4">✅</p>
          <h1 className="text-xl font-bold text-gray-900 mb-2">Brief already submitted</h1>
          <p className="text-gray-500 text-sm">Your designer has received your brief. They will be in touch soon.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-indigo-600 font-bold text-xl mb-4">
            <span className="bg-indigo-600 text-white px-2 py-0.5 rounded text-sm font-bold">BR</span>
            BriefRamp
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Project Brief</h1>
          <p className="text-gray-500 text-sm mt-2">Tell us about your project so we can get started</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <BriefForm clientId={client.id} />
        </div>
      </div>
    </div>
  )
}
