import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Globe,
  Bot,
  TrendingUp,
  Star,
  Mail,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react'

/* ─── tiny reusable ────────────────────────────────────────────────────── */

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

function Badge({ children }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 14px',
        borderRadius: '9999px',
        fontSize: '12px',
        fontWeight: '600',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        background: 'rgba(124, 58, 237, 0.15)',
        border: '1px solid rgba(124, 58, 237, 0.35)',
        color: '#a78bfa',
      }}
    >
      {children}
    </span>
  )
}

/* ─── Nav ───────────────────────────────────────────────────────────────── */

function Nav() {
  const [open, setOpen] = useState(false)
  const links = ['Services', 'Work', 'About', 'Contact']

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(8, 8, 15, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a href="#" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '-0.5px', color: '#f0f0f8' }}>
            Blitz<GradientText> Digital</GradientText>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="nav-links">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                color: '#8888aa',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#f0f0f8')}
              onMouseLeave={(e) => (e.target.style.color = '#8888aa')}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
              color: '#fff',
              padding: '10px 22px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              textDecoration: 'none',
            }}
          >
            Get a Free Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="hamburger"
          style={{
            background: 'none',
            border: 'none',
            color: '#f0f0f8',
            cursor: 'pointer',
            padding: '4px',
            display: 'none',
          }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '16px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{ color: '#c0c0d8', textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
              color: '#fff',
              padding: '12px 22px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '600',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </nav>
  )
}

/* ─── Hero ──────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '140px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, rgba(37,99,235,0.1) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '840px', margin: '0 auto' }}>
        <div style={{ marginBottom: '28px' }}>
          <Badge>
            <Zap size={11} />
            Available for new projects
          </Badge>
        </div>

        <h1
          style={{
            fontSize: 'clamp(36px, 6.5vw, 76px)',
            fontWeight: '800',
            lineHeight: '1.08',
            letterSpacing: '-2.5px',
            margin: '0 0 24px',
            color: '#f0f0f8',
          }}
        >
          Stop Losing Customers<br />
          to <GradientText>Outdated Websites.</GradientText>
        </h1>

        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: '#8888aa',
            lineHeight: '1.7',
            maxWidth: '580px',
            margin: '0 auto 44px',
          }}
        >
          We build fast, conversion-focused websites and AI automation tools that turn visitors into
          paying customers — without the agency price tag.
        </p>

        <div className="hero-ctas" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
              color: '#fff',
              padding: '16px 32px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '700',
              textDecoration: 'none',
              boxShadow: '0 0 48px rgba(124,58,237,0.45)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 0 64px rgba(124,58,237,0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 0 48px rgba(124,58,237,0.45)'
            }}
          >
            Start Your Project <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.22)',
              color: '#e0e0f0',
              padding: '16px 32px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.11)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'
            }}
          >
            View Services <ChevronDown size={18} />
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
            marginTop: '60px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: '3×', label: 'Avg. Traffic Increase' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '30px',
                  fontWeight: '800',
                  color: '#f0f0f8',
                  letterSpacing: '-1px',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '13px', color: '#8888aa', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Pricing ───────────────────────────────────────────────────────────── */

const PLANS = [
  {
    icon: Globe,
    name: 'Web Rebuild',
    price: '£250',
    unit: 'one-off',
    tag: null,
    color: '#60a5fa',
    glow: 'rgba(96,165,250,0.22)',
    description: 'A complete redesign of your current site — fast, modern, and conversion-ready.',
    features: [
      'Custom responsive design',
      'Performance optimisation',
      'SEO-ready structure',
      'Contact & lead-gen forms',
      '30-day post-launch support',
    ],
  },
  {
    icon: Bot,
    name: 'AI Automation',
    price: '£200',
    unit: 'one-off',
    tag: 'Most Popular',
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.28)',
    description: 'Automate repetitive tasks with AI — from chatbots to lead qualification pipelines.',
    features: [
      'Custom AI chatbot or assistant',
      'Lead capture & CRM sync',
      'Email / notification automations',
      'Integration with your existing tools',
      '2 revision rounds included',
    ],
  },
  {
    icon: TrendingUp,
    name: 'SEO Retainer',
    price: '£150',
    unit: '/mo',
    tag: null,
    color: '#34d399',
    glow: 'rgba(52,211,153,0.22)',
    description: 'Monthly SEO management to grow your organic traffic and outrank competitors.',
    features: [
      'Keyword research & strategy',
      'On-page & technical SEO',
      'Monthly content optimisation',
      'Backlink building',
      'Monthly performance report',
    ],
  },
]

function PricingCard({ plan }) {
  const Icon = plan.icon
  const isPopular = plan.tag === 'Most Popular'

  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: isPopular
          ? 'linear-gradient(160deg, rgba(124,58,237,0.2) 0%, #0e0e18 55%)'
          : 'rgba(255,255,255,0.03)',
        border: `1px solid ${isPopular ? 'rgba(167,139,250,0.45)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '18px',
        padding: '38px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered
          ? `0 24px 64px ${plan.glow}`
          : isPopular
            ? `0 0 56px ${plan.glow}`
            : 'none',
        flex: '1 1 280px',
        minWidth: '260px',
        maxWidth: '380px',
      }}
    >
      {isPopular && (
        <div
          style={{
            position: 'absolute',
            top: '-14px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
            color: '#fff',
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '5px 16px',
            borderRadius: '9999px',
            whiteSpace: 'nowrap',
          }}
        >
          ★ Most Popular
        </div>
      )}

      {/* Icon */}
      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '12px',
          background: `${plan.glow.replace('0.22', '0.12').replace('0.28', '0.12')}`,
          border: `1px solid ${plan.color}28`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon size={24} color={plan.color} />
      </div>

      <div>
        <h3
          style={{
            margin: '0 0 8px',
            fontSize: '20px',
            fontWeight: '700',
            color: '#f0f0f8',
            letterSpacing: '-0.4px',
          }}
        >
          {plan.name}
        </h3>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
          <span
            style={{ fontSize: '40px', fontWeight: '800', color: plan.color, letterSpacing: '-2px' }}
          >
            {plan.price}
          </span>
          <span style={{ fontSize: '14px', color: '#8888aa' }}>{plan.unit}</span>
        </div>
      </div>

      <p style={{ fontSize: '14px', color: '#8888aa', lineHeight: '1.65', margin: 0 }}>
        {plan.description}
      </p>

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          flexGrow: 1,
        }}
      >
        {plan.features.map((f) => (
          <li
            key={f}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              fontSize: '14px',
              color: '#c0c0d8',
            }}
          >
            <CheckCircle2 size={16} color={plan.color} style={{ marginTop: '2px', flexShrink: 0 }} />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        style={{
          display: 'block',
          textAlign: 'center',
          padding: '14px',
          borderRadius: '10px',
          fontWeight: '700',
          fontSize: '15px',
          textDecoration: 'none',
          background: isPopular
            ? 'linear-gradient(135deg, #7c3aed, #2563eb)'
            : 'rgba(255,255,255,0.07)',
          color: '#fff',
          border: isPopular ? 'none' : '1px solid rgba(255,255,255,0.22)',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        Get Started
      </a>
    </div>
  )
}

function Pricing() {
  return (
    <section
      id="services"
      style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <Badge>
          <Zap size={11} />
          Transparent Pricing
        </Badge>
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 50px)',
            fontWeight: '800',
            letterSpacing: '-1.5px',
            color: '#f0f0f8',
            margin: '20px 0 16px',
            lineHeight: '1.1',
          }}
        >
          Everything your business needs.
          <br />
          <GradientText>None of the bloat.</GradientText>
        </h2>
        <p style={{ color: '#8888aa', fontSize: '18px', maxWidth: '480px', margin: '0 auto', lineHeight: '1.6' }}>
          Fixed prices, no hidden fees. Pick a plan and let's get started today.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '24px',
          justifyContent: 'center',
          alignItems: 'stretch',
          flexWrap: 'wrap',
        }}
      >
        {PLANS.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>

      <p style={{ textAlign: 'center', marginTop: '40px', color: '#8888aa', fontSize: '14px' }}>
        Need a custom bundle?{' '}
        <a href="#contact" style={{ color: '#a78bfa', textDecoration: 'none' }}>
          Let's chat →
        </a>
      </p>
    </section>
  )
}

/* ─── Work ──────────────────────────────────────────────────────────────── */

const PROJECTS = [
  {
    tag: 'Web Rebuild',
    tagColor: '#60a5fa',
    title: 'TradeCraft Plumbing',
    description:
      'Rebuilt a 7-year-old WordPress site for a local plumber. Went from a 4s load time to 0.8s. Enquiries up 3× in the first month.',
    results: ['+210% organic traffic', '0.8s load time', '3× more leads'],
    accent: 'rgba(96,165,250,0.15)',
    border: 'rgba(96,165,250,0.25)',
  },
  {
    tag: 'AI Automation',
    tagColor: '#a78bfa',
    title: 'LeadBot for LuxStay Lettings',
    description:
      'Built an AI chatbot that qualifies rental enquiries 24/7, books viewings directly into the agent\'s calendar, and sends instant follow-up emails.',
    results: ['40 hrs/mo saved', '90% enquiries handled by AI', 'Zero missed leads'],
    accent: 'rgba(167,139,250,0.15)',
    border: 'rgba(167,139,250,0.3)',
  },
  {
    tag: 'SEO Retainer',
    tagColor: '#34d399',
    title: 'BloomBox Florist',
    description:
      'Six months of on-page SEO and content for a local florist. Moved from page 4 to position 2 for "wedding flowers [city]" — their most valuable keyword.',
    results: ['Page 4 → Position 2', '+340% impressions', '£12k attributed revenue'],
    accent: 'rgba(52,211,153,0.12)',
    border: 'rgba(52,211,153,0.25)',
  },
  {
    tag: 'Web Rebuild',
    tagColor: '#60a5fa',
    title: 'Apex Fitness Studio',
    description:
      'Full redesign for a boutique gym — online class booking, membership tiers, and a Stripe-integrated payment flow. Replaced a £200/mo SaaS they no longer needed.',
    results: ['£2,400/yr saved', 'Class bookings up 55%', 'Mobile-first design'],
    accent: 'rgba(96,165,250,0.15)',
    border: 'rgba(96,165,250,0.25)',
  },
  {
    tag: 'AI Automation',
    tagColor: '#a78bfa',
    title: 'Review Harvester — DentaCare',
    description:
      'Automated post-appointment SMS that asks happy patients for a Google review. Integrated with their booking system. Went from 12 to 200+ reviews in 90 days.',
    results: ['12 → 200+ Google reviews', '4.2 → 4.9 star rating', 'Fully automated'],
    accent: 'rgba(167,139,250,0.15)',
    border: 'rgba(167,139,250,0.3)',
  },
  {
    tag: 'SEO Retainer',
    tagColor: '#34d399',
    title: 'Riverside Law Solicitors',
    description:
      'Technical SEO overhaul plus monthly content for a law firm. Fixed crawl errors, built topic clusters around core practice areas, and earned 8 high-DA backlinks.',
    results: ['+180% non-branded clicks', '8 high-DA backlinks', 'DR up from 12 → 31'],
    accent: 'rgba(52,211,153,0.12)',
    border: 'rgba(52,211,153,0.25)',
  },
]

function Work() {
  return (
    <section
      id="work"
      style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <Badge>
          <Star size={11} />
          Selected Projects
        </Badge>
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 50px)',
            fontWeight: '800',
            letterSpacing: '-1.5px',
            color: '#f0f0f8',
            margin: '20px 0 16px',
            lineHeight: '1.1',
          }}
        >
          Real results for{' '}
          <GradientText>real businesses.</GradientText>
        </h2>
        <p style={{ color: '#8888aa', fontSize: '18px', maxWidth: '460px', margin: '0 auto', lineHeight: '1.6' }}>
          Every project below is a business that was losing money to a bad web presence — and isn't anymore.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '20px',
        }}
      >
        {PROJECTS.map((p) => (
          <div
            key={p.title}
            style={{
              background: p.accent,
              border: `1px solid ${p.border}`,
              borderRadius: '16px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              transition: 'transform 0.22s ease, box-shadow 0.22s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = `0 16px 48px ${p.border}`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Tag */}
            <span
              style={{
                display: 'inline-flex',
                alignSelf: 'flex-start',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: p.tagColor,
                background: `${p.tagColor}18`,
                border: `1px solid ${p.tagColor}30`,
              }}
            >
              {p.tag}
            </span>

            {/* Title */}
            <h3
              style={{
                margin: 0,
                fontSize: '19px',
                fontWeight: '700',
                color: '#f0f0f8',
                letterSpacing: '-0.4px',
              }}
            >
              {p.title}
            </h3>

            {/* Description */}
            <p style={{ margin: 0, fontSize: '14px', color: '#9090b0', lineHeight: '1.65' }}>
              {p.description}
            </p>

            {/* Result pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
              {p.results.map((r) => (
                <span
                  key={r}
                  style={{
                    padding: '5px 10px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: p.tagColor,
                    background: `${p.tagColor}12`,
                    border: `1px solid ${p.tagColor}25`,
                  }}
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <a
          href="#contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
            color: '#fff',
            padding: '14px 28px',
            borderRadius: '10px',
            fontSize: '15px',
            fontWeight: '700',
            textDecoration: 'none',
            boxShadow: '0 0 40px rgba(124,58,237,0.35)',
          }}
        >
          Start your success story <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}

/* ─── Reviews ───────────────────────────────────────────────────────────── */

const REVIEWS = [
  {
    name: 'James Hargreaves',
    role: 'Owner, TradeCraft Plumbing',
    rating: 5,
    text: 'I was sceptical at first — £250 sounded too cheap for a full rebuild. Three weeks later my phone hasn\'t stopped ringing. Best money I\'ve ever spent on the business.',
    tag: 'Web Rebuild',
    tagColor: '#60a5fa',
  },
  {
    name: 'Priya Sharma',
    role: 'Director, LuxStay Lettings',
    rating: 5,
    text: 'The AI chatbot handles about 90% of our initial enquiries now. We used to miss leads every weekend — that just doesn\'t happen anymore. Genuinely life-changing for a small team.',
    tag: 'AI Automation',
    tagColor: '#a78bfa',
  },
  {
    name: 'Sophie Caldwell',
    role: 'Founder, BloomBox Florist',
    rating: 5,
    text: 'Went from invisible on Google to ranking second for our most important keyword in six months. The monthly reports are clear and honest — no fluff, just results.',
    tag: 'SEO Retainer',
    tagColor: '#34d399',
  },
  {
    name: 'Marcus Bell',
    role: 'Manager, Apex Fitness Studio',
    rating: 5,
    text: 'We were paying £200 a month for a booking SaaS that half our members couldn\'t figure out. The new site is faster, simpler, and our class bookings are up 55%.',
    tag: 'Web Rebuild',
    tagColor: '#60a5fa',
  },
  {
    name: 'Dr. Anita Patel',
    role: 'Principal, DentaCare Clinic',
    rating: 5,
    text: 'We went from 12 Google reviews to over 200 in three months without lifting a finger. Our new patients regularly say they chose us because of the reviews. Incredible ROI.',
    tag: 'AI Automation',
    tagColor: '#a78bfa',
  },
  {
    name: 'Tom Whitfield',
    role: 'Partner, Riverside Law',
    rating: 5,
    text: 'Professional, fast, and no jargon. Every month I get a plain-English report showing exactly what improved and why. Our domain rating has nearly tripled in six months.',
    tag: 'SEO Retainer',
    tagColor: '#34d399',
  },
]

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#fbbf24">
          <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
        </svg>
      ))}
    </div>
  )
}

function Reviews() {
  return (
    <section
      id="reviews"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(255,255,255,0.015)',
        padding: '100px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <Badge>
            <Star size={11} />
            Client Reviews
          </Badge>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 50px)',
              fontWeight: '800',
              letterSpacing: '-1.5px',
              color: '#f0f0f8',
              margin: '20px 0 16px',
              lineHeight: '1.1',
            }}
          >
            Don't take my word for it.
          </h2>

          {/* Aggregate rating */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(251,191,36,0.08)',
              border: '1px solid rgba(251,191,36,0.2)',
              borderRadius: '12px',
              padding: '12px 24px',
              marginTop: '8px',
            }}
          >
            <Stars count={5} />
            <span style={{ fontSize: '22px', fontWeight: '800', color: '#f0f0f8', letterSpacing: '-0.5px' }}>
              5.0
            </span>
            <span style={{ fontSize: '14px', color: '#8888aa' }}>
              from 6 reviews
            </span>
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '20px',
          }}
        >
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Top row: stars + tag */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Stars count={r.rating} />
                <span
                  style={{
                    padding: '3px 9px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: r.tagColor,
                    background: `${r.tagColor}18`,
                    border: `1px solid ${r.tagColor}30`,
                  }}
                >
                  {r.tag}
                </span>
              </div>

              {/* Quote */}
              <p
                style={{
                  margin: 0,
                  fontSize: '15px',
                  color: '#c8c8e0',
                  lineHeight: '1.7',
                  fontStyle: 'italic',
                  flexGrow: 1,
                }}
              >
                "{r.text}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '4px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${r.tagColor}40, ${r.tagColor}20)`,
                    border: `1px solid ${r.tagColor}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: r.tagColor,
                    flexShrink: 0,
                  }}
                >
                  {r.name[0]}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#f0f0f8' }}>{r.name}</div>
                  <div style={{ fontSize: '12px', color: '#8888aa', marginTop: '2px' }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── About / USP strip ─────────────────────────────────────────────────── */

function About() {
  const points = [
    {
      icon: Zap,
      title: 'Delivered in Days',
      body: 'Most projects ship within 5–7 days. No months-long agency timelines or waiting rooms.',
    },
    {
      icon: Globe,
      title: 'Built to Convert',
      body: 'Every pixel serves a purpose — driving leads, sales, and trust from the first visit.',
    },
    {
      icon: Bot,
      title: 'AI-Native Workflow',
      body: 'I use AI tools so you get agency-quality output at a fraction of the cost.',
    },
    {
      icon: Star,
      title: 'No Lock-in Contracts',
      body: 'Month-to-month retainers. Cancel any time — I earn your loyalty every single month.',
    },
  ]

  return (
    <section
      id="about"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(255,255,255,0.015)',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <Badge>Why choose me</Badge>
          <h2
            style={{
              fontSize: 'clamp(24px, 3.5vw, 42px)',
              fontWeight: '800',
              letterSpacing: '-1px',
              color: '#f0f0f8',
              margin: '20px 0 0',
              lineHeight: '1.15',
            }}
          >
            The work of an agency.{' '}
            <GradientText>The price of a freelancer.</GradientText>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
          }}
        >
          {points.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              style={{
                padding: '28px 24px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '14px',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(167,139,250,0.35)'
                e.currentTarget.style.background = 'rgba(167,139,250,0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(167,139,250,0.12)',
                  border: '1px solid rgba(167,139,250,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <Icon size={20} color="#a78bfa" />
              </div>
              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: '700',
                  color: '#f0f0f8',
                  margin: '0 0 8px',
                  letterSpacing: '-0.3px',
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: '14px', color: '#8888aa', lineHeight: '1.65', margin: 0 }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Contact Form ──────────────────────────────────────────────────────── */

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', business: '' })
  const [services, setServices] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)

  const SERVICE_OPTIONS = [
    { id: 'web', label: 'Web Rebuild', price: '£250', color: '#60a5fa' },
    { id: 'ai', label: 'AI Automation', price: '£200', color: '#a78bfa' },
    { id: 'seo', label: 'SEO Retainer', price: '£150/mo', color: '#34d399' },
  ]

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function toggleService(id) {
    setServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)
  const [emailCopied, setEmailCopied] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setError(null)

    const selectedLabels = SERVICE_OPTIONS
      .filter((s) => services.includes(s.id))
      .map((s) => s.label)
      .join(', ') || 'None selected'

    const payload = {
      access_key: '2eb6426c-1022-4e9d-94e6-3aeade7ee8ad',
      subject: `New enquiry from ${form.business || form.name}`,
      from_name: form.name,
      replyto: form.email,
      business: form.business,
      services: selectedLabels,
      message: `Name: ${form.name}\nEmail: ${form.email}\nBusiness: ${form.business}\nServices: ${selectedLabels}`,
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please email us directly.')
      }
    } catch {
      setError('Could not send message. Please email us directly.')
    } finally {
      setSending(false)
    }
  }

  const fieldStyle = (name) => ({
    width: '100%',
    padding: '14px 16px',
    borderRadius: '10px',
    fontSize: '15px',
    color: '#f0f0f8',
    background: focused === name ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)',
    border: focused === name
      ? '1px solid rgba(167,139,250,0.5)'
      : '1px solid rgba(255,255,255,0.1)',
    outline: 'none',
    transition: 'background 0.2s, border-color 0.2s',
    boxSizing: 'border-box',
  })

  return (
    <section
      id="contact"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '100px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', maxWidth: '560px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Badge>
            <Mail size={11} />
            Get in Touch
          </Badge>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: '800',
              letterSpacing: '-1.5px',
              color: '#f0f0f8',
              margin: '20px 0 12px',
              lineHeight: '1.1',
            }}
          >
            Let's build something great.
          </h2>
          <p style={{ color: '#8888aa', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
            Fill in your details and we will get back to you within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div
            style={{
              textAlign: 'center',
              padding: '48px 32px',
              background: 'rgba(52,211,153,0.08)',
              border: '1px solid rgba(52,211,153,0.25)',
              borderRadius: '16px',
            }}
          >
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>✓</div>
            <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#34d399', margin: '0 0 10px' }}>
              Message sent!
            </h3>
            <p style={{ color: '#8888aa', fontSize: '15px', margin: 0, lineHeight: '1.6' }}>
              Thanks {form.name.split(' ')[0]}. I'll be in touch within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {/* Name */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#a0a0c0', letterSpacing: '0.04em' }}>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Sarah Mitchell"
                value={form.name}
                onChange={handleChange}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                required
                style={fieldStyle('name')}
              />
            </div>

            {/* Email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#a0a0c0', letterSpacing: '0.04em' }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="e.g. james@yoursite.co.uk"
                value={form.email}
                onChange={handleChange}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                required
                style={fieldStyle('email')}
              />
            </div>

            {/* Business */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#a0a0c0', letterSpacing: '0.04em' }}>
                Business Name
              </label>
              <input
                type="text"
                name="business"
                placeholder="e.g. Nova Hair Studio"
                value={form.business}
                onChange={handleChange}
                onFocus={() => setFocused('business')}
                onBlur={() => setFocused(null)}
                required
                style={fieldStyle('business')}
              />
            </div>

            {/* Services */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#a0a0c0', letterSpacing: '0.04em' }}>
                Services Interested In
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {SERVICE_OPTIONS.map((opt) => {
                  const checked = services.includes(opt.id)
                  return (
                    <label
                      key={opt.id}
                      onClick={() => toggleService(opt.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: checked ? `1px solid ${opt.color}55` : '1px solid rgba(255,255,255,0.08)',
                        background: checked ? `${opt.color}12` : 'rgba(255,255,255,0.03)',
                        cursor: 'pointer',
                        transition: 'background 0.2s, border-color 0.2s',
                        userSelect: 'none',
                      }}
                    >
                      {/* Custom checkbox */}
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '6px',
                          border: checked ? `2px solid ${opt.color}` : '2px solid rgba(255,255,255,0.2)',
                          background: checked ? opt.color : 'transparent',
                          flexShrink: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'background 0.15s, border-color 0.15s',
                        }}
                      >
                        {checked && (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <span style={{ fontSize: '15px', fontWeight: '600', color: checked ? '#f0f0f8' : '#a0a0c0', flex: 1, transition: 'color 0.2s' }}>
                        {opt.label}
                      </span>
                      <span style={{ fontSize: '13px', fontWeight: '700', color: opt.color }}>
                        {opt.price}
                      </span>
                    </label>
                  )
                })}
              </div>
            </div>

            <button
              type="submit"
              disabled={sending}
              style={{
                marginTop: '4px',
                padding: '15px',
                borderRadius: '10px',
                background: sending
                  ? 'rgba(255,255,255,0.08)'
                  : 'linear-gradient(135deg, #7c3aed, #2563eb)',
                color: '#fff',
                fontSize: '16px',
                fontWeight: '700',
                border: 'none',
                cursor: sending ? 'not-allowed' : 'pointer',
                boxShadow: sending ? 'none' : '0 0 40px rgba(124,58,237,0.35)',
                transition: 'opacity 0.2s, transform 0.2s, background 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                opacity: sending ? 0.6 : 1,
              }}
              onMouseEnter={(e) => {
                if (!sending) {
                  e.currentTarget.style.opacity = '0.9'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = sending ? '0.6' : '1'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {sending ? 'Sending…' : <><span>Send Message</span> <ArrowRight size={17} /></>}
            </button>

            {error && (
              <p style={{ margin: 0, textAlign: 'center', fontSize: '13px', color: '#f87171' }}>
                {error}
              </p>
            )}

            <p style={{ margin: 0, textAlign: 'center', fontSize: '12px', color: '#8888aa' }}>
              Or email directly:{' '}
              <a
                href="mailto:BlitzDigitalUK@outlook.com"
                onClick={(e) => {
                  e.preventDefault()
                  navigator.clipboard.writeText('BlitzDigitalUK@outlook.com').then(() => {
                    setEmailCopied(true)
                    setTimeout(() => setEmailCopied(false), 2000)
                  })
                }}
                title="Click to copy"
                style={{ color: emailCopied ? '#34d399' : '#a78bfa', textDecoration: 'none', cursor: 'copy', transition: 'color 0.2s' }}
              >
                {emailCopied ? 'Copied to your clipboard!' : 'BlitzDigitalUK@outlook.com'}
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  )
}



/* ─── Footer ────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '32px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <span style={{ fontSize: '16px', fontWeight: '800', color: '#f0f0f8' }}>
          Blitz<GradientText> Digital</GradientText>
        </span>
        <span style={{ fontSize: '13px', color: '#8888aa' }}>
          © {new Date().getFullYear()} Blitz Digital. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: '20px' }}>
          {[{ label: 'Privacy', to: '/privacy' }, { label: 'Terms', to: '/terms' }].map((l) => (
            <Link
              key={l.label}
              to={l.to}
              style={{ fontSize: '13px', color: '#8888aa', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.color = '#f0f0f8')}
              onMouseLeave={(e) => (e.target.style.color = '#8888aa')}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

/* ─── Responsive style injection ───────────────────────────────────────── */

function ResponsiveStyle() {
  return (
    <style>{`
      @media (max-width: 640px) {
        .nav-links { display: none !important; }
        .hamburger { display: flex !important; }
        .hero-ctas { flex-direction: column !important; align-items: stretch !important; }
        .hero-ctas a { justify-content: center !important; }
        .contact-ctas { flex-direction: column !important; align-items: stretch !important; }
        .contact-ctas a { justify-content: center !important; }
      }
    `}</style>
  )
}

/* ─── Cookie Banner ─────────────────────────────────────────────────────── */

function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    return localStorage.getItem('cookie-consent') === null
  })

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        width: 'calc(100% - 48px)',
        maxWidth: '640px',
        background: '#13131f',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '14px',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        flexWrap: 'wrap',
        boxShadow: '0 8px 48px rgba(0,0,0,0.6)',
      }}
    >
      <p style={{ margin: 0, fontSize: '13px', color: '#9090b0', lineHeight: '1.6', flex: 1, minWidth: '200px' }}>
        We use essential cookies to make this site work. No tracking or advertising cookies.{' '}
        <Link to="/privacy" style={{ color: '#a78bfa', textDecoration: 'none' }}>
          Privacy Policy
        </Link>
      </p>
      <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            padding: '9px 18px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: '600',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.15)',
            color: '#8888aa',
            cursor: 'pointer',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
            e.currentTarget.style.color = '#f0f0f8'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
            e.currentTarget.style.color = '#8888aa'
          }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          style={{
            padding: '9px 18px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Accept
        </button>
      </div>
    </div>
  )
}

/* ─── App ───────────────────────────────────────────────────────────────── */

export default function App() {
  return (
    <>
      <ResponsiveStyle />
      <CookieBanner />
      <Nav />
      <main>
        <Hero />
        <Pricing />
        <Work />
        <Reviews />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
