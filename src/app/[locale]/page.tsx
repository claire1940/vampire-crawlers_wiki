import { getLatestArticles } from '@/lib/getLatestArticles'
import { buildModuleLinkMap } from '@/lib/buildModuleLinkMap'
import type { Language } from '@/lib/content'
import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'
import HomePageClient from './HomePageClient'

interface PageProps {
  params: Promise<{ locale: string }>
}

const HOMEPAGE_VIDEO_ID = 'jaAEKYGnxrA'
const HOMEPAGE_VIDEO_TITLE = 'Vampire Crawlers Official Trailer and Launch Overview'

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vampire-crawlers.wiki'
  const heroImageUrl = new URL('/images/hero.webp', siteUrl).toString()
  const path = '/'
  const title = 'Vampire Crawlers - Guide, Unlocks & Release Date'
  const description = 'Explore Vampire Crawlers guides, release date updates, platform info, characters, unlocks, and deck-building tips for Steam, PS5, Xbox, and Switch.'
  const canonicalUrl = locale === 'en' ? siteUrl : `${siteUrl}/${locale}`

  return {
    title,
    description,
    alternates: buildLanguageAlternates(path, locale as Locale, siteUrl),
    openGraph: {
      type: 'website',
      siteName: 'Vampire Crawlers Wiki',
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: heroImageUrl,
          width: 1920,
          height: 1080,
          alt: 'Vampire Crawlers Hero Banner',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [heroImageUrl],
    },
  }
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params

  // 服务器端获取最新文章数据
  const latestArticles = await getLatestArticles(locale as Language, 30)
  const moduleLinkMap = await buildModuleLinkMap(locale as Language)

  return (
    <HomePageClient
      latestArticles={latestArticles}
      moduleLinkMap={moduleLinkMap}
      locale={locale}
      featuredVideoId={HOMEPAGE_VIDEO_ID}
      featuredVideoTitle={HOMEPAGE_VIDEO_TITLE}
    />
  )
}
