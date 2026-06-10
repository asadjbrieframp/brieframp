'use client'

import { useState } from 'react'

export default function CopyLink({ url }: { url: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(url)
    } catch {
      const el = document.createElement('textarea')
      el.value = url
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-2">
      <input
        readOnly
        value={url}
        className="flex-1 px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg text-gray-600 font-mono truncate focus:outline-none"
        onClick={e => (e.target as HTMLInputElement).select()}
      />
      <button
        onClick={copy}
        className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap"
      >
        {copied ? 'Copied!' : 'Copy link'}
      </button>
    </div>
  )
}
