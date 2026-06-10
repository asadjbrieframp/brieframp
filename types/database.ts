export type ClientStatus =
  | 'pending_brief'
  | 'brief_submitted'
  | 'proposal_sent'
  | 'proposal_approved'
  | 'completed'

export type ProposalStatus =
  | 'draft'
  | 'sent'
  | 'approved'
  | 'rejected'

export interface Profile {
  id: string
  full_name: string | null
  email: string | null
  created_at: string
}

export interface Client {
  id: string
  designer_id: string
  name: string
  email: string
  project_type: string | null
  status: ClientStatus
  brief_token: string
  created_at: string
}

export interface Brief {
  id: string
  client_id: string
  project_type: string | null
  description: string | null
  budget_range: string | null
  timeline: string | null
  pages: string | null
  has_branding: boolean | null
  branding_notes: string | null
  examples: string | null
  additional_info: string | null
  created_at: string
}

export interface Proposal {
  id: string
  client_id: string
  title: string
  overview: string | null
  deliverables: string | null
  price: number
  currency: string
  timeline: string | null
  payment_terms: string | null
  status: ProposalStatus
  proposal_token: string
  approved_at: string | null
  created_at: string
}
