import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Brief submitted!</h1>
        <p className="text-gray-500 mb-8">
          Thanks for filling out the brief. Your designer will review it and be in touch with a proposal soon.
        </p>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-left">
          <h2 className="font-semibold text-gray-900 mb-2">What happens next?</h2>
          <ol className="space-y-3 text-sm text-gray-600">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-medium text-xs">1</span>
              <span>Your designer reviews your brief and prepares a custom proposal</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-medium text-xs">2</span>
              <span>You receive a link to view and approve the proposal</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-medium text-xs">3</span>
              <span>Once approved, your project kicks off</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
