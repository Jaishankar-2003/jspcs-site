import Link from 'next/link'
import { Phone, MessageCircle, MapPin, Clock, Star, CheckCircle, ChevronRight } from 'lucide-react'

export interface FAQItem {
  question: string
  answer: string
}

export interface ServiceHighlight {
  title: string
  description: string
  icon: string
}

export interface LocalSEOPageProps {
  // Page identity
  pageSlug: string
  city: string
  state: string
  // Hero
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  // Sections
  sections: {
    id: string
    heading: string
    subheading?: string
    content: string // rich HTML or plain text
  }[]
  // Highlights
  serviceHighlights: ServiceHighlight[]
  // FAQs
  faqs: FAQItem[]
  // Schema (injected as JSON-LD)
  schemaData: object[]
  // Breadcrumb label
  breadcrumbLabel: string
  // Internal related pages
  relatedPages?: { href: string; label: string }[]
  // CTA
  ctaHeading?: string
  ctaDescription?: string
}

const PHONE = '9842139997'
const WHATSAPP = 'https://wa.me/919842139997'
const BASE_URL = 'https://jspcs.online'

export default function LocalSEOPageLayout({
  pageSlug,
  city,
  state,
  heroTitle,
  heroSubtitle,
  heroDescription,
  sections,
  serviceHighlights,
  faqs,
  schemaData,
  breadcrumbLabel,
  relatedPages = [],
  ctaHeading,
  ctaDescription,
}: LocalSEOPageProps) {
  return (
    <>
      {/* Structured Data */}
      {schemaData.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="min-h-screen gradient-bg text-primary-light">
        {/* ── Top Nav Bar ─────────────────────────────────────── */}
        <header className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2" aria-label="JSPCS Online Home">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="JSPCS Online Logo" className="h-9 w-auto" width={36} height={36} />
                <span className="text-white font-bold text-base hidden sm:block">JSPCS Online</span>
              </Link>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-blue text-white rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors"
                  aria-label={`Call JSPCS Online: ${PHONE}`}
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">Call Now</span>
                  <span className="sm:hidden">{PHONE}</span>
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold hover:bg-green-700 transition-colors"
                  aria-label="WhatsApp JSPCS Online"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* ── Breadcrumb ───────────────────────────────────────── */}
        <nav
          className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-2 text-sm text-primary-light/60 py-4">
            <li>
              <Link href="/" className="hover:text-primary-cyan transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-3 h-3" />
            <li className="text-primary-cyan font-medium">{breadcrumbLabel}</li>
          </ol>
        </nav>

        {/* ── Hero Section ─────────────────────────────────────── */}
        <section
          className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16 pt-6"
          aria-labelledby="page-hero-heading"
        >
          {/* Decorative background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-cyan/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border text-primary-cyan text-xs font-semibold mb-6">
              <MapPin className="w-3 h-3" />
              <span>{city}, {state}</span>
            </div>

            <h1
              id="page-hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight"
            >
              {heroTitle}
            </h1>
            <p className="text-lg sm:text-xl text-primary-cyan font-semibold mb-4">
              {heroSubtitle}
            </p>
            <p className="text-base text-primary-light/75 leading-relaxed mb-8 max-w-3xl">
              {heroDescription}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: <Star className="w-4 h-4 text-yellow-400" />, label: '4.9★ Rated Service' },
                { icon: <Clock className="w-4 h-4 text-primary-cyan" />, label: 'Same Day Repair' },
                { icon: <CheckCircle className="w-4 h-4 text-green-400" />, label: '90-Day Warranty' },
                { icon: <MapPin className="w-4 h-4 text-primary-cyan" />, label: 'Doorstep Service' },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-2 glass rounded-lg text-sm text-primary-light/80"
                >
                  {icon}
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-cyan text-white rounded-full font-bold text-base hover:shadow-lg hover:shadow-primary-cyan/30 transition-all duration-300"
                aria-label={`Call JSPCS Online at ${PHONE}`}
              >
                <Phone className="w-5 h-5" />
                Call {PHONE}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full font-bold text-base hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* ── Service Highlights Grid ──────────────────────────── */}
        <section
          className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 border-t border-white/5"
          aria-label="Service Highlights"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceHighlights.map((s) => (
              <div
                key={s.title}
                className="glass rounded-xl p-4 hover:neon-border transition-all duration-300 group"
              >
                <span className="text-2xl mb-2 block" role="img" aria-hidden="true">{s.icon}</span>
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-primary-cyan transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-primary-light/60 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Main Content Sections ─────────────────────────────── */}
        <main
          id="main-content"
          className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12"
        >
          <div className="space-y-16">
            {sections.map((section) => (
              <section key={section.id} id={section.id} aria-labelledby={`section-${section.id}`}>
                <div className="mb-6">
                  <h2
                    id={`section-${section.id}`}
                    className="text-2xl sm:text-3xl font-bold text-white mb-2"
                  >
                    {section.heading}
                  </h2>
                  {section.subheading && (
                    <p className="text-primary-cyan font-semibold">{section.subheading}</p>
                  )}
                  <div className="w-16 h-1 bg-gradient-to-r from-primary-cyan to-primary-blue rounded mt-3" />
                </div>
                <div
                  className="prose prose-invert prose-p:text-primary-light/80 prose-p:leading-relaxed prose-li:text-primary-light/80 prose-strong:text-primary-cyan max-w-none text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </section>
            ))}
          </div>
        </main>

        {/* ── FAQ Section ──────────────────────────────────────── */}
        <section
          className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 border-t border-white/5"
          aria-labelledby="faq-heading"
        >
          <div className="mb-10">
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl font-bold text-white mb-2"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-primary-light/60">Common questions about our {city} services</p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-cyan to-primary-blue rounded mt-3" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="glass rounded-xl overflow-hidden group"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none text-white font-semibold hover:text-primary-cyan transition-colors">
                  <span>{faq.question}</span>
                  <span className="ml-4 text-primary-cyan text-xl font-light flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5 pt-1 text-primary-light/75 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA Banner ───────────────────────────────────────── */}
        <section
          className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12"
          aria-label="Call to Action"
        >
          <div className="relative rounded-2xl overflow-hidden glass-strong neon-border p-8 sm:p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-primary-cyan/10 pointer-events-none" aria-hidden="true" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 relative">
              {ctaHeading || `Expert ${pageSlug.split('-').slice(0, 3).join(' ')} in ${city}`}
            </h2>
            <p className="text-primary-light/75 mb-8 max-w-2xl mx-auto relative">
              {ctaDescription || `Get a free diagnosis and transparent quote. We serve all areas of ${city}, ${state}.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-cyan text-white rounded-full font-bold hover:shadow-xl hover:shadow-primary-cyan/30 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                {PHONE}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass border border-green-500/40 text-green-400 rounded-full font-bold hover:bg-green-500/10 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ── Related Pages / Internal Links ───────────────────── */}
        {relatedPages.length > 0 && (
          <section
            className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10 border-t border-white/5"
            aria-label="Related Services"
          >
            <h2 className="text-lg font-bold text-white mb-4">Related Services in {city}</h2>
            <ul className="flex flex-wrap gap-3">
              {relatedPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="inline-flex items-center gap-1 px-4 py-2 glass rounded-full text-sm text-primary-cyan hover:neon-border transition-all duration-200"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {page.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1 px-4 py-2 glass rounded-full text-sm text-primary-light/60 hover:text-primary-cyan transition-colors"
                >
                  <ChevronRight className="w-3 h-3" />
                  Back to Home
                </Link>
              </li>
            </ul>
          </section>
        )}

        {/* ── Footer ───────────────────────────────────────────── */}
        <footer className="border-t border-white/10 bg-secondary-dark/50 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <Link href="/" className="flex items-center gap-2 mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.png" alt="JSPCS Online" className="h-8 w-auto" width={32} height={32} />
                  <span className="text-white font-bold">JSPCS Online</span>
                </Link>
                <p className="text-primary-light/60 text-sm leading-relaxed">
                  Expert PC &amp; Laptop Repair | Chip-Level | Custom Builds across {state}.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3 text-sm">Services in {city}</h3>
                <ul className="space-y-1 text-sm">
                  <li><Link href="/laptop-service-center-in-madurai" className="text-primary-light/60 hover:text-primary-cyan transition-colors">Laptop Repair in Madurai</Link></li>
                  <li><Link href="/computer-service-center-in-madurai" className="text-primary-light/60 hover:text-primary-cyan transition-colors">Computer Repair in Madurai</Link></li>
                  <li><Link href="/chip-level-service-in-madurai" className="text-primary-light/60 hover:text-primary-cyan transition-colors">Chip-Level Service in Madurai</Link></li>
                  <li><Link href="/custom-gaming-pc-build-in-madurai" className="text-primary-light/60 hover:text-primary-cyan transition-colors">Gaming PC Build in Madurai</Link></li>
                  <li><Link href="/desktop-repair-service-in-madurai" className="text-primary-light/60 hover:text-primary-cyan transition-colors">Desktop Repair in Madurai</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3 text-sm">Contact</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-primary-light/60 hover:text-primary-cyan transition-colors">
                      <Phone className="w-4 h-4 text-primary-cyan" /> {PHONE}
                    </a>
                  </li>
                  <li>
                    <a href="mailto:jaishankarpcservices2021@gmail.com" className="flex items-center gap-2 text-primary-light/60 hover:text-primary-cyan transition-colors break-all">
                      <span className="text-primary-cyan">✉</span> jaishankarpcservices2021@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-light/60 hover:text-primary-cyan transition-colors">
                      <MessageCircle className="w-4 h-4 text-primary-cyan" /> WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 text-center text-primary-light/40 text-sm">
              © {new Date().getFullYear()} Jai Shankar PC Services. All Rights Reserved. | {city}, {state}
            </div>
          </div>
        </footer>

        {/* ── WhatsApp Float Button ─────────────────────────────── */}
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:bg-green-400 hover:shadow-green-400/40 hover:shadow-2xl transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>
      </div>
    </>
  )
}
