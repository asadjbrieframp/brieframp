import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import AccountClient from './AccountClient'

export const metadata = {
  title: 'Account — BriefRamp',
}

export default async function AccountPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { data: clients } = await supabase
    .from('clients')
    .select('id')
    .eq('designer_id', user.id)

  const clientCount = clients?.length ?? 0

  return (
    <AccountClient
      user={{
        id: user.id,
        email: user.email ?? '',
        name: (user.user_metadata?.full_name as string) ?? '',
      }}
      clientCount={clientCount}
    />
  )
}
