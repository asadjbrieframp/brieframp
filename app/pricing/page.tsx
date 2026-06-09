import Nav from "@/components/Nav"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div>
      <Nav />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Simple pricing</h1>
          <p className="text-xl text-slate-500">Start free. Upgrade when you are ready.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="border border-slate-200 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-1">Free</h2>
            <p className="text-slate-500 text-sm mb-6">Perfect for getting started</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">$0</span>
              <span className="text-slate-500 ml-2">/ month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-slate-600"><span className="text-green-500">&#10003;</span>3 active client portals</li>
              <li className="flex items-start gap-3 text-sm text-slate-600"><span className="text-green-500">&#10003;</span>Brief, proposal, contract</li>
              <li className="flex items-start gap-3 text-sm text-slate-600"><span className="text-green-500">&#10003;</span>Deposit payment collection</li>
              <li className="flex items-start gap-3 text-sm text-slate-600"><span className="text-green-500">&#10003;</span>Email notifications</li>
            </ul>
            <Link href="/login" className="block text-center border border-indigo-500 text-indigo-500 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50">
              Get started free
            </Link>
          </div>
          <div className="border-2 border-indigo-500 rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full">MOST POPULAR</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-1">Pro</h2>
            <p className="text-slate-500 text-sm mb-6">For designers serious about growth</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">$29</span>
              <span className="text-slate-500 ml-2">/ month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-slate-600"><span className="text-green-500">&#10003;</span>Unlimited client portals</li>
              <li className="flex items-start gap-3 text-sm text-slate-600"><span className="text-green-500">&#10003;</span>White-label (your brand, not ours)</li>
              <li className="flex items-start gap-3 text-sm text-slate-600"><span className="text-green-500">&#10003;</span>Custom domain support</li>
              <li className="flex items-start gap-3 text-sm text-slate-600"><span className="text-green-500">&#10003;</span>Proposal PDF generation</li>
              <li className="flex items-start gap-3 text-sm text-slate-600"><span className="text-green-500">&#10003;</span>Everything in Free</li>
            </ul>
            <Link href="/login" className="block text-center bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600">
              Start 14-day free trial
            </Link>
          </div>
        </div>
        <p className="text-center text-slate-400 text-sm mt-10">No contracts. Cancel any time. All prices in USD.</p>
      </main>
    </div>
  )
}
