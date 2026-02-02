import { notFound } from 'next/navigation'
import articles from '@/lib/data'

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }))
}

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = articles[slug]

  if (!article) {
    notFound()
  }

  return (
    <article className="animate-slide-up">
      <div className="hero mb-12">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-bg-secondary border border-border rounded-full text-primary text-sm font-semibold mb-6">
          {article.icon} {article.category}
        </span>
        <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
          {article.title}
        </h1>
        <p className="text-xl text-text-secondary max-w-4xl">
          {article.subtitle}
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        {article.content}
      </div>
    </article>
  )
}