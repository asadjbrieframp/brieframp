import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import DashboardSidebar from '@/components/dashboard/Sidebar'

export default async function AccountLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, email')
    .eq('id', user.id)
    .single()

  return (
    <div className="min-h-screen flex" style={{ background: '#f8f9fc' }}>
      <DashboardSidebar user={{
        name: profile?.full_name || (user.user_metadata?.full_name as string) || '',
        email: profile?.email || user.email || '',
      }} />
      <main className="flex-1 ml-60 p-8">
        {children}
      </main>
    </div>
  )
}
