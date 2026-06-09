import Link from "next/link"

export default function Nav() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-indigo-500">BR</span>
          <span className="text-xl font-bold text-slate-900">BriefRamp</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/pricing" className="text-sm text-slate-500 hover:text-slate-900">
            Pricing
          </Link>
          <Link href="/login" className="text-sm bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 font-medium">
            Get started
          </Link>
        </div>
      </div>
    </nav>
  )
}
