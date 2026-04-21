import Link from 'next/link'
import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vampire-crawlers.wiki'
  const path = '/about'

  return {
    title: 'About Vampire Crawlers Wiki - Community Resource Hub',
    description:
      'Learn how Vampire Crawlers Wiki is built, what content we maintain, and how we keep guides, platform updates, and strategy references current for players.',
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale,
      url: locale === 'en' ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`,
      siteName: 'Vampire Crawlers Wiki',
      title: 'About Vampire Crawlers Wiki',
      description:
        'Understand the editorial scope, data standards, and community process behind Vampire Crawlers Wiki.',
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Vampire Crawlers Wiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Vampire Crawlers Wiki',
      description:
        'Understand the editorial scope, data standards, and community process behind Vampire Crawlers Wiki.',
      images: [`${siteUrl}/og-image.jpg`],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, siteUrl),
  }
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Vampire Crawlers Wiki</h1>
          <p className="text-slate-300 text-lg mb-2">
            A fan-maintained strategy and reference hub for Vampire Crawlers players.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Who We Are</h2>
            <p>
              Vampire Crawlers Wiki is an unofficial, community-run project focused on accurate and practical coverage for
              the game. Our goal is to make key information easy to find, from release timing and platform access to card
              interactions and run planning.
            </p>
            <p>
              We treat this site as a living reference. Content is revised whenever official updates, balance changes, or
              verified community findings materially affect gameplay decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>What We Maintain</h2>
            <ul>
              <li>
                <strong>Release and platform tracking:</strong> launch timeline, storefront availability, and Game Pass
                status updates.
              </li>
              <li>
                <strong>Deck and evolution references:</strong> card lists, evolution pairs, and chain-oriented build notes.
              </li>
              <li>
                <strong>Run strategy guides:</strong> beginner routes, progression priorities, and encounter decision support.
              </li>
              <li>
                <strong>Media and review snapshots:</strong> key trailers, review context, and community signal monitoring.
              </li>
              <li>
                <strong>Support coverage:</strong> Steam Deck/controller compatibility and common troubleshooting points.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Editorial Principles</h2>
            <ul>
              <li>
                <strong>Accuracy first:</strong> We prioritize primary sources and clearly label uncertain or unverified
                claims.
              </li>
              <li>
                <strong>Actionable writing:</strong> We optimize for decisions players need to make during real runs.
              </li>
              <li>
                <strong>Consistent updates:</strong> We refresh pages when release, platform, or gameplay details change.
              </li>
              <li>
                <strong>Transparent scope:</strong> We focus on Vampire Crawlers and avoid unrelated franchise speculation.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Language Coverage</h2>
            <p>
              The public site currently supports English, Russian, Spanish, and Portuguese. We keep these locales aligned
              to the same content structure to reduce missing sections and translation drift.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Legal and Affiliation Notice</h2>
            <p className="text-yellow-400/90">
              <strong>Vampire Crawlers Wiki is an unofficial fan-made website.</strong> We are not affiliated with,
              endorsed by, or operated by poncle or platform owners.
            </p>
            <p>
              Trademarks, game assets, logos, and related intellectual property belong to their respective owners. This
              site exists for informational and educational community use.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Contact</h2>
            <p>
              For corrections, source updates, or partnership inquiries, contact us through the addresses below:
            </p>
            <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">General</h3>
                <a href="mailto:contact@vampire-crawlers.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  contact@vampire-crawlers.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Content Corrections</h3>
                <a href="mailto:support@vampire-crawlers.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  support@vampire-crawlers.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Contributions</h3>
                <a href="mailto:contribute@vampire-crawlers.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  contribute@vampire-crawlers.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Partnerships</h3>
                <a href="mailto:partnerships@vampire-crawlers.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  partnerships@vampire-crawlers.wiki
                </a>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              We aim to respond within 2-3 business days.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-r from-red-900/20 to-slate-900/30 border-y border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Explore the Knowledge Base</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Browse release updates, platform guides, card data, and strategy modules built for day-to-day Vampire Crawlers
            play.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[hsl(var(--nav-theme-light))] text-white font-semibold hover:opacity-90 transition"
          >
            Back to Homepage
          </Link>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Link href="/" className="text-[hsl(var(--nav-theme-light))] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
