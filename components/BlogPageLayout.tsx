import Link from 'next/link'
import { Phone, MessageCircle, MapPin, Clock, ChevronRight, BookOpen, Calendar, Tag, Laptop } from 'lucide-react'
import RelatedServiceCards from './RelatedServiceCards'

export interface BlogFAQItem {
  question: string
  answer: string
}

export interface BlogPageProps {
  title: string
  subtitle: string
  intro?: string
  publishDate: string
  readTime?: string
  author?: string
  category: string
  content: string // rich HTML
  faqs: BlogFAQItem[]
  relatedServices?: { href: string; label: string }[]
  relatedBlogs?: { href: string; label: string; description: string }[]
  schemaData?: object[]
  slug: string
}

const PHONE = '9842139997'
const WHATSAPP = 'https://wa.me/919842139997'

export default function BlogPageLayout({
  title,
  subtitle,
  intro = '',
  publishDate,
  readTime = '5 min',
  author = 'Jai Shankar',
  category,
  content,
  faqs,
  relatedServices = [],
  relatedBlogs = [],
  schemaData = [],
  slug,
}: BlogPageProps) {
  return (
    <>
      {schemaData.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="min-h-screen gradient-bg text-primary-light">
        {/* ── Top Nav ─── */}
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
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* ── Breadcrumb ─── */}
        <nav className="pt-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-primary-light/60 py-4">
            <li><Link href="/" className="hover:text-primary-cyan transition-colors">Home</Link></li>
            <ChevronRight className="w-3 h-3" />
            <li><Link href="/blog" className="hover:text-primary-cyan transition-colors">Blog</Link></li>
            <ChevronRight className="w-3 h-3" />
            <li className="text-primary-cyan font-medium truncate max-w-[200px] sm:max-w-none">{title}</li>
          </ol>
        </nav>

        {/* ── Hero ─── */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-12 pt-4">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-cyan/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-blue/10 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass neon-border text-primary-cyan text-xs font-semibold">
                <Tag className="w-3 h-3" />
                {category}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-primary-light/60 text-xs">
                <Calendar className="w-3 h-3" />
                {publishDate}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-primary-light/60 text-xs">
                <Clock className="w-3 h-3" />
                {readTime}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-primary-light/60 text-xs">
                <MapPin className="w-3 h-3" />
                Madurai, Tamil Nadu
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-primary-cyan font-semibold mb-4">{subtitle}</p>
            {intro && <p className="text-base text-primary-light/75 leading-relaxed mb-8 max-w-3xl">{intro}</p>}

            {/* Author chip */}
            <div className="flex items-center gap-3 glass rounded-xl px-4 py-3 w-fit">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-blue to-primary-cyan flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{author}</p>
                <p className="text-primary-light/50 text-xs">PC & Laptop Repair Specialists, Madurai</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Body Content ─── */}
        <main className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Article */}
            <article className="lg:col-span-2">
              <div
                className="prose prose-invert prose-p:text-primary-light/80 prose-p:leading-relaxed prose-li:text-primary-light/80 prose-strong:text-primary-cyan prose-h2:text-white prose-h3:text-white prose-h2:font-bold prose-h3:font-semibold max-w-none text-base leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: content }}
              />

              {relatedServices.length > 0 && (
                <RelatedServiceCards 
                  slugs={relatedServices.map(s => s.href)} 
                  title="Related Repair Services" 
                />
              )}

              {/* Inline CTA */}
              <div className="my-10 rounded-2xl glass-strong neon-border p-6 text-center">
                <p className="text-white font-bold text-lg mb-2">Need Expert Help in Madurai?</p>
                <p className="text-primary-light/70 text-sm mb-5">Free diagnosis · Transparent pricing · 90-day warranty</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-cyan text-white rounded-full font-bold text-sm hover:shadow-lg hover:shadow-primary-cyan/30 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Call {PHONE}
                  </a>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-bold text-sm hover:bg-green-500 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* FAQ */}
              {faqs.length > 0 && (
                <section aria-labelledby="blog-faq-heading" className="mt-8">
                  <h2 id="blog-faq-heading" className="text-2xl font-bold text-white mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {faqs.map((faq, idx) => (
                      <details key={idx} className="glass rounded-xl overflow-hidden group">
                        <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none text-white font-semibold hover:text-primary-cyan transition-colors">
                          <span>{faq.question}</span>
                          <span className="ml-4 text-primary-cyan text-xl font-light flex-shrink-0">+</span>
                        </summary>
                        <div className="px-5 pb-4 pt-1 text-primary-light/75 leading-relaxed text-sm">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* Related blogs */}
              {relatedBlogs.length > 0 && (
                <section className="mt-10 border-t border-white/10 pt-8">
                  <h2 className="text-xl font-bold text-white mb-5">Related Articles</h2>
                  <div className="space-y-4">
                    {relatedBlogs.map(b => (
                      <Link
                        key={b.href}
                        href={b.href}
                        className="flex items-start gap-3 glass rounded-xl p-4 hover:neon-border transition-all group"
                      >
                        <BookOpen className="w-5 h-5 text-primary-cyan mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-white text-sm font-semibold group-hover:text-primary-cyan transition-colors">{b.label}</p>
                          <p className="text-primary-light/60 text-xs mt-0.5">{b.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </article>

            <aside className="lg:col-span-1 space-y-6">
              {/* Popular Repairs */}
              <div className="glass rounded-2xl p-6 sticky top-24">
                <h3 className="text-white font-extrabold text-sm mb-6 flex items-center gap-2 uppercase tracking-widest border-b border-white/10 pb-4">
                  <Tag className="w-4 h-4 text-primary-cyan" />
                  Popular Repairs
                </h3>
                <ul className="space-y-4">
                  {[
                    { href: '/motherboard-repair-madurai', label: 'Chip-Level Repair' },
                    { href: '/laptop-heating-issue-repair-madurai', label: 'Overheating Fix' },
                    { href: '/ssd-upgrade-service-madurai', label: 'SSD Upgrade' },
                    { href: '/data-recovery-service-madurai', label: 'Data Recovery' },
                  ].map(s => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="text-primary-light/70 text-sm hover:text-primary-cyan transition-colors flex items-center justify-between group"
                      >
                        {s.label}
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>

                <h3 className="text-white font-extrabold text-sm mt-10 mb-6 flex items-center gap-2 uppercase tracking-widest border-b border-white/10 pb-4">
                  <Laptop className="w-4 h-4 text-primary-cyan" />
                  Laptop Brands
                </h3>
                <ul className="space-y-4">
                  {[
                    { href: '/dell-laptop-repair-madurai', label: 'Dell / Alienware' },
                    { href: '/hp-laptop-repair-madurai', label: 'HP / Omen' },
                    { href: '/msi-gaming-laptop-repair-madurai', label: 'MSI Gaming' },
                  ].map(s => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="text-primary-light/70 text-sm hover:text-primary-cyan transition-colors flex items-center justify-between group"
                      >
                        {s.label}
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white font-bold text-sm mb-4">Immediate Assistance</p>
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-primary-blue to-primary-cyan text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-primary-cyan/30 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Call Expert
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </main>

        {/* ── Footer ─── */}
        <footer className="border-t border-white/10 bg-secondary-dark/50 mt-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <Link href="/" className="flex items-center gap-2 mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.png" alt="JSPCS Online" className="h-8 w-auto" width={32} height={32} />
                  <span className="text-white font-bold">JSPCS Online</span>
                </Link>
                <p className="text-primary-light/60 text-sm leading-relaxed">
                  Expert PC &amp; Laptop Repair | Chip-Level | Custom Builds across Tamil Nadu.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3 text-sm">Services in Madurai</h3>
                <ul className="space-y-1 text-sm">
                  <li><Link href="/laptop-service-center-in-madurai" className="text-primary-light/60 hover:text-primary-cyan transition-colors">Laptop Repair</Link></li>
                  <li><Link href="/motherboard-repair-madurai" className="text-primary-light/60 hover:text-primary-cyan transition-colors">Motherboard Repair</Link></li>
                  <li><Link href="/gaming-laptop-repair-madurai" className="text-primary-light/60 hover:text-primary-cyan transition-colors">Gaming Laptop Repair</Link></li>
                  <li><Link href="/ssd-upgrade-service-madurai" className="text-primary-light/60 hover:text-primary-cyan transition-colors">SSD Upgrade</Link></li>
                  <li><Link href="/custom-gaming-pc-build-in-madurai" className="text-primary-light/60 hover:text-primary-cyan transition-colors">Gaming PC Build</Link></li>
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
              © {new Date().getFullYear()} Jai Shankar PC Services. All Rights Reserved. | Madurai, Tamil Nadu
            </div>
          </div>
        </footer>

        {/* ── WhatsApp Float ─── */}
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
