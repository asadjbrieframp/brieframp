import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#5B6AF0]">BR</span>
          <span className="text-xl font-bold text-slate-900">Brief</span>
          <span className="text-xl font-bold text-[#5B6AF0] -ml-1">Ramp</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/pricing" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
            Pricing
          </Link>
          <Link
            href="/login"
            className="text-sm bg-[#5B6AF0] text-white px-4 py-2 rounded-lg hover:bg-[#4A58E0] transition-colors font-medium"
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  )
}
