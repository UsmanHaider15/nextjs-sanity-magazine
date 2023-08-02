import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ScrollUp from 'components/shared/ScrollUp'
import { urlForImage } from 'lib/sanity.image'
import { resolveHref } from 'lib/sanity.links'
import { Url } from 'next/dist/shared/lib/router/router'
import Image from 'next/image'
import Link from 'next/link'
import { PortableTextBlock } from 'sanity'
import type { Article, ArticlePayload, CategoryPagePayload } from 'types'
import FeaturedArticle from './FeaturedArticle'
import LatestArticles from 'components/shared/LatestArticles'
import CoverArticle from 'components/shared/CoverArticle'

export interface CategoryPageProps {
  data: CategoryPagePayload | null
  latestArticles: ArticlePayload[] | null
}

export function CategoryPage({ data, latestArticles }: CategoryPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title, featuredArticle } = data ?? {}

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {featuredArticle && <CoverArticle article={featuredArticle} />}
      </div>

      {latestArticles && <LatestArticles latestArticles={latestArticles} />}

      <ScrollUp />
    </div>
  )
}
