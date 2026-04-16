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
    title: '1. Who We Are',
    body: `Blitz Digital is a freelance web design, AI automation, and SEO service operated by an individual based in the United Kingdom. If you have any questions about this policy, you can contact us at BlitzDigitalUK@outlook.com.`,
  },
  {
    title: '2. What Data We Collect',
    body: `When you submit the contact form on this website, we collect the following personal data:\n\n• Your full name\n• Your email address\n• Your business name\n• The services you are interested in\n\nWe do not collect any additional personal data, and we do not use cookies, tracking pixels, or analytics tools on this site.`,
  },
  {
    title: '3. Why We Collect It',
    body: `We collect your data solely to respond to your enquiry and, if you become a client, to fulfil the services you have requested. We will never use your data for unsolicited marketing without your explicit consent.`,
  },
  {
    title: '4. Legal Basis for Processing',
    body: `Under UK GDPR, we process your personal data on the basis of legitimate interest — specifically, responding to a business enquiry you have initiated — and, where a contract is formed, to fulfil that contract.`,
  },
  {
    title: '5. How Long We Keep Your Data',
    body: `We retain enquiry data for a maximum of 12 months. If a project proceeds, we retain relevant communications for up to 6 years in line with UK tax and contract law requirements. After these periods, data is permanently deleted.`,
  },
  {
    title: '6. Who We Share It With',
    body: `We do not sell, rent, or share your personal data with third parties for marketing purposes. Your form submission is processed via Web3Forms (web3forms.com), a secure form submission service. Please refer to their privacy policy for details on how they handle data in transit.`,
  },
  {
    title: '7. Your Rights',
    body: `Under UK GDPR, you have the right to:\n\n• Access the personal data we hold about you\n• Request correction of inaccurate data\n• Request deletion of your data\n• Object to processing of your data\n• Lodge a complaint with the ICO (ico.org.uk)\n\nTo exercise any of these rights, email us at BlitzDigitalUK@outlook.com and we will respond within 30 days.`,
  },
  {
    title: '8. Data Security',
    body: `We take reasonable precautions to protect your data. Enquiries are received via encrypted email and are not stored in any public-facing database.`,
  },
  {
    title: '9. Changes to This Policy',
    body: `We may update this policy from time to time. The date at the bottom of this page reflects when it was last revised. Continued use of this site after changes constitutes acceptance of the updated policy.`,
  },
]

export default function Privacy() {
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
          maxWidth: '100%',
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
          Privacy <GradientText>Policy</GradientText>
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
            Questions about this policy? Email us at{' '}
            <a
              href="mailto:BlitzDigitalUK@outlook.com"
              style={{ color: '#a78bfa', textDecoration: 'none' }}
            >
              BlitzDigitalUK@outlook.com
            </a>{' '}
            and we'll get back to you within 48 hours.
          </p>
        </div>
      </main>
    </div>
  )
}
