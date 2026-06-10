'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

interface BriefFormProps {
  clientId: string
}

const PROJECT_TYPES = ['Logo Design', 'Brand Identity', 'Website Design', 'UI/UX Design', 'Social Media', 'Print Design', 'Illustration', 'Other']
const BUDGET_RANGES = ['Under $500', '$500–$1,000', '$1,000–$2,500', '$2,500–$5,000', '$5,000–$10,000', '$10,000+']
const TIMELINES = ['ASAP', '1–2 weeks', '3–4 weeks', '1–2 months', '2–3 months', 'Flexible']

export default function BriefForm({ clientId }: BriefFormProps) {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    project_type: '',
    description: '',
    budget_range: '',
    timeline: '',
    pages: '',
    has_branding: false,
    branding_notes: '',
    examples: '',
    additional_info: '',
  })

  function update(field: string, value: string | boolean) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit() {
    setSubmitting(true)
    try {
      const supabase = createClient()
      await supabase.from('briefs').insert({
        client_id: clientId,
        project_type: form.project_type,
        description: form.description,
        budget_range: form.budget_range,
        timeline: form.timeline,
        pages: form.pages ? parseInt(form.pages) : null,
        has_branding: form.has_branding,
        branding_notes: form.branding_notes || null,
        examples: form.examples || null,
        additional_info: form.additional_info || null,
      })
      await supabase.from('clients').update({ status: 'brief_submitted' }).eq('id', clientId)

      // Notify designer (fire-and-forget)
      fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'brief_submitted', clientId }),
      }).catch(() => {})
      router.push('/brief/thank-you')
    } catch {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-lg mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            {[1, 2, 3].map(s => (
              <div key={s} className={`h-2 flex-1 rounded-full transition-colors ${step >= s ? 'bg-indigo-600' : 'bg-gray-200'}`} />
            ))}
          </div>
          <p className="text-sm text-gray-500">Step {step} of 3</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Project basics</h2>
              <p className="text-sm text-gray-500 mb-6">Tell us what you need designed.</p>

              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">Project type</label>
                <div className="grid grid-cols-2 gap-2">
                  {PROJECT_TYPES.map(pt => (
                    <button key={pt} type="button" onClick={() => update('project_type', pt)}
                      className={`px-3 py-2 text-sm rounded-lg border transition-colors text-left ${form.project_type === pt ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-medium' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}>
                      {pt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-1">Describe your project</label>
                <textarea rows={4} value={form.description} onChange={e => update('description', e.target.value)}
                  placeholder="Tell us about your business, goals, and what you need..."
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" />
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget range</label>
                <div className="grid grid-cols-2 gap-2">
                  {BUDGET_RANGES.map(b => (
                    <button key={b} type="button" onClick={() => update('budget_range', b)}
                      className={`px-3 py-2 text-sm rounded-lg border transition-colors text-left ${form.budget_range === b ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-medium' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}>
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                <div className="grid grid-cols-2 gap-2">
                  {TIMELINES.map(t => (
                    <button key={t} type="button" onClick={() => update('timeline', t)}
                      className={`px-3 py-2 text-sm rounded-lg border transition-colors text-left ${form.timeline === t ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-medium' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={() => setStep(2)} disabled={!form.project_type || !form.description || !form.budget_range || !form.timeline}
                className="w-full py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Design details</h2>
              <p className="text-sm text-gray-500 mb-6">Help us understand the scope.</p>

              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of pages / screens (if applicable)</label>
                <input type="number" min="1" value={form.pages} onChange={e => update('pages', e.target.value)}
                  placeholder="e.g. 5"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>

              <div className="mb-5">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">Do you have existing branding?</label>
                  <button type="button" onClick={() => update('has_branding', !form.has_branding)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${form.has_branding ? 'bg-indigo-600' : 'bg-gray-200'}`}>
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${form.has_branding ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>

              {form.has_branding && (
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Describe your existing branding</label>
                  <textarea rows={3} value={form.branding_notes} onChange={e => update('branding_notes', e.target.value)}
                    placeholder="Colors, fonts, logo guidelines, brand voice..."
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" />
                </div>
              )}

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Examples / inspiration (links or descriptions)</label>
                <textarea rows={3} value={form.examples} onChange={e => update('examples', e.target.value)}
                  placeholder="Share links, websites, or describe styles you like..."
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" />
              </div>

              <div className="flex gap-3">
                <button onClick={() => setStep(1)} className="flex-1 py-3 border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors">Back</button>
                <button onClick={() => setStep(3)} className="flex-1 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors">Continue</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Anything else?</h2>
              <p className="text-sm text-gray-500 mb-6">Final details before we get started.</p>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional information</label>
                <textarea rows={5} value={form.additional_info} onChange={e => update('additional_info', e.target.value)}
                  placeholder="Deadlines, special requirements, questions for your designer..."
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" />
              </div>

              <div className="flex gap-3">
                <button onClick={() => setStep(2)} className="flex-1 py-3 border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors">Back</button>
                <button onClick={handleSubmit} disabled={submitting}
                  className="flex-1 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-40">
                  {submitting ? 'Submitting...' : 'Submit brief'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
