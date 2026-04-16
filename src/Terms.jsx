import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

function GradientText({ children }) {
  return (
    <span
      style={{
        background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #34d399 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </span>
  )
}

const SECTIONS = [
  {
    title: '1. About These Terms',
    body: `These Terms & Conditions govern all services provided by Blitz Digital ("we", "us", "our") to clients ("you"). By commissioning any service from us, you agree to these terms. If you have any questions, contact us at BlitzDigitalUK@outlook.com before proceeding.`,
  },
  {
    title: '2. Services',
    body: `We offer the following services:\n\n• Web Rebuild — custom responsive website design and development\n• AI Automation — chatbots, lead qualification systems, and workflow automations\n• SEO Retainer — ongoing search engine optimisation on a monthly basis\n\nThe specific scope of work for each project will be agreed in writing before work begins.`,
  },
  {
    title: '3. Quotes & Pricing',
    body: `All prices quoted are in GBP and are fixed for the agreed scope of work. Any additions or changes to the scope after work has begun may incur additional charges, which will be communicated and agreed before the extra work is carried out.\n\nPublished prices on the website (Web Rebuild £250, AI Automation £200, SEO Retainer £150/mo) are starting prices and may vary depending on the complexity of your project.`,
  },
  {
    title: '4. Payment Terms',
    body: `• One-off projects: 50% deposit required before work begins; the remaining 50% is due upon project completion before final files or access are handed over.\n• Monthly retainers: payment is due at the start of each calendar month.\n• Invoices are payable within 7 days of issue.\n\nWe reserve the right to pause or withhold work if payment is overdue.`,
  },
  {
    title: '5. Ownership & Intellectual Property',
    body: `All work created by Blitz Digital remains our intellectual property until payment has been received in full. Upon receipt of full payment, ownership of the final deliverables transfers to you.\n\nWe retain the right to display completed work in our portfolio unless you request otherwise in writing.`,
  },
  {
    title: '6. Revisions',
    body: `Each project includes a set number of revision rounds as agreed at the outset (typically 2 rounds for one-off projects). Revisions beyond this allowance will be charged at an agreed hourly rate. Revisions must be requested within 14 days of delivery.`,
  },
  {
    title: '7. Client Responsibilities',
    body: `You agree to:\n\n• Provide all required content, assets, and access credentials in a timely manner\n• Review and provide feedback within a reasonable timeframe\n• Ensure you have the rights to any content or materials you supply to us\n\nDelays caused by late supply of materials may affect agreed timelines and are not our responsibility.`,
  },
  {
    title: '8. Timelines',
    body: `We will provide an estimated timeline at the start of each project. While we aim to meet all deadlines, timelines are estimates and not guarantees. We will notify you promptly of any delays and work to minimise their impact.`,
  },
  {
    title: '9. Cancellation',
    body: `• You may cancel a project at any time by notifying us in writing.\n• If you cancel after work has begun, the deposit is non-refundable and you will be invoiced for any work completed beyond the deposit amount.\n• Monthly retainers can be cancelled with 30 days' written notice. No refunds are issued for the current billing month.`,
  },
  {
    title: '10. Limitation of Liability',
    body: `We provide our services with reasonable skill and care. However, we cannot guarantee specific outcomes such as Google rankings, conversion rates, or revenue increases, as these depend on factors outside our control.\n\nOur total liability to you in connection with any project shall not exceed the total fees paid by you for that project. We are not liable for any indirect, consequential, or loss-of-profit damages.`,
  },
  {
    title: '11. Confidentiality',
    body: `We treat all client information as confidential and will not disclose it to third parties without your consent, except where required by law or necessary to deliver the service (e.g. sharing credentials with a hosting provider).`,
  },
  {
    title: '12. Governing Law',
    body: `These terms are governed by the laws of England and Wales. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
  {
    title: '13. Changes to These Terms',
    body: `We may update these terms from time to time. The current version will always be available on this page. Continued engagement with our services after changes constitutes acceptance of the updated terms.`,
  },
]

export default function Terms() {
  return (
    <div style={{ background: '#08080f', minHeight: '100vh', color: '#e8e8f0' }}>
      {/* Nav */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(8,8,15,0.9)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '0 24px',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none', fontSize: '20px', fontWeight: '800', color: '#f0f0f8' }}>
          Blitz<GradientText> Digital</GradientText>
        </Link>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#8888aa',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#f0f0f8')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#8888aa')}
        >
          <ArrowLeft size={15} /> Back to site
        </Link>
      </nav>

      {/* Content */}
      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px 100px' }}>
        <h1
          style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: '800',
            letterSpacing: '-1.5px',
            color: '#f0f0f8',
            marginBottom: '12px',
          }}
        >
          Terms & <GradientText>Conditions</GradientText>
        </h1>
        <p style={{ color: '#8888aa', fontSize: '14px', marginBottom: '56px' }}>
          Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#f0f0f8',
                  marginBottom: '12px',
                  letterSpacing: '-0.3px',
                }}
              >
                {s.title}
              </h2>
              <div
                style={{
                  fontSize: '15px',
                  color: '#9090b0',
                  lineHeight: '1.75',
                  whiteSpace: 'pre-line',
                }}
              >
                {s.body}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '64px',
            padding: '24px',
            background: 'rgba(167,139,250,0.08)',
            border: '1px solid rgba(167,139,250,0.2)',
            borderRadius: '12px',
          }}
        >
          <p style={{ margin: 0, fontSize: '14px', color: '#a0a0c0', lineHeight: '1.7' }}>
            Questions about these terms? Email us at{' '}
            <a
              href="mailto:BlitzDigitalUK@outlook.com"
              style={{ color: '#a78bfa', textDecoration: 'none' }}
            >
              BlitzDigitalUK@outlook.com
            </a>{' '}
            before commissioning any work.
          </p>
        </div>
      </main>
    </div>
  )
}
