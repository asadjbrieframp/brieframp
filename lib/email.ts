import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM = 'BriefRamp <hello@brieframp.com>'

export async function sendBriefSubmittedEmail({
  designerEmail,
  designerName,
  clientName,
  dashboardUrl,
}: {
  designerEmail: string
  designerName: string
  clientName: string
  dashboardUrl: string
}) {
  const html = [
    '<div style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px; color: #111;">',
    '<div style="margin-bottom: 32px;"><span style="background: #4f46e5; color: white; padding: 4px 8px; border-radius: 4px; font-size: 13px; font-weight: 700;">BR</span>',
    '<span style="margin-left: 8px; font-weight: 700; font-size: 16px;">BriefRamp</span></div>',
    '<h1 style="font-size: 24px; font-weight: 700; margin: 0 0 8px;">New brief received 🎉</h1>',
    '<p style="color: #555; margin: 0 0 24px;">Hi ' + designerName + ', <strong>' + clientName + '</strong> has submitted their project brief.</p>',
    '<a href="' + dashboardUrl + '" style="display: inline-block; background: #4f46e5; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">View brief →</a>',
    '<p style="color: #999; font-size: 12px; margin-top: 40px;">BriefRamp · brieframp.com</p>',
    '</div>',
  ].join('')
  return resend.emails.send({
    from: FROM,
    to: designerEmail,
    subject: clientName + ' just submitted their brief',
    html,
  })
}

export async function sendProposalApprovedEmail({
  designerEmail,
  designerName,
  clientName,
  proposalTitle,
  dashboardUrl,
}: {
  designerEmail: string
  designerName: string
  clientName: string
  proposalTitle: string
  dashboardUrl: string
}) {
  const html = [
    '<div style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px; color: #111;">',
    '<div style="margin-bottom: 32px;"><span style="background: #4f46e5; color: white; padding: 4px 8px; border-radius: 4px; font-size: 13px; font-weight: 700;">BR</span>',
    '<span style="margin-left: 8px; font-weight: 700; font-size: 16px;">BriefRamp</span></div>',
    '<h1 style="font-size: 24px; font-weight: 700; margin: 0 0 8px;">Proposal approved ✅</h1>',
    '<p style="color: #555; margin: 0 0 8px;">Hi ' + designerName + ', <strong>' + clientName + '</strong> approved your proposal.</p>',
    '<p style="color: #555; margin: 0 0 24px;"><strong>' + proposalTitle + '</strong> is a go. Time to get started!</p>',
    '<a href="' + dashboardUrl + '" style="display: inline-block; background: #4f46e5; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">View project →</a>',
    '<p style="color: #999; font-size: 12px; margin-top: 40px;">BriefRamp · brieframp.com</p>',
    '</div>',
  ].join('')
  return resend.emails.send({
    from: FROM,
    to: designerEmail,
    subject: clientName + ' approved your proposal',
    html,
  })
}
