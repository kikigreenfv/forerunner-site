import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PdfDownloadButton } from "@/components/pdf-download-button"
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { getArticleBySlug, getAllArticles } from "@/lib/perspectives-data"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  
  if (!article) {
    notFound()
  }

  // Parse markdown-style content
  const renderContent = (content: string) => {
    const paragraphs = content.split('\n\n')
    
    return paragraphs.map((paragraph, index) => {
      // Headers
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="font-display text-2xl md:text-3xl text-foreground tracking-tight mt-16 mb-6">
            {paragraph.replace('## ', '')}
          </h2>
        )
      }
      
      // Bold text and links handling
      const renderTextWithMarkdown = (text: string) => {
        const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
        return parts.map((part, i) => {
          // Bold text
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>
          }
          // Markdown links
          if (part.startsWith('[') && part.includes('](')) {
            const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/)
            if (match) {
              const [, text, url] = match
              return (
                <a 
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lavender hover:text-lavender/80 underline transition-colors"
                >
                  {text}
                </a>
              )
            }
          }
          return part
        })
      }
      
      return (
        <p key={index} className="text-base md:text-lg leading-relaxed text-foreground/80 mb-6">
          {renderTextWithMarkdown(paragraph)}
        </p>
      )
    })
  }

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-end px-6 md:px-12 lg:px-20 pt-32 pb-12 md:pb-16 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-lavender/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-yellow-green/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative max-w-3xl">
          {/* Back link */}
          <Link 
            href="/perspectives"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/50 hover:text-lavender transition-colors mb-8"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            All Perspectives
          </Link>
          
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/50 mb-6">
            <time>{article.date}</time>
            <span className="text-foreground/30">|</span>
            <Link 
              href={`/perspectives?author=${encodeURIComponent(article.author)}`}
              className="hover:text-lavender transition-colors"
            >
              {article.author}{article.authorTitle && `, ${article.authorTitle}`}
            </Link>
            {article.category && (
              <>
                <span className="text-foreground/30">|</span>
                <Link 
                  href={`/perspectives?category=${encodeURIComponent(article.category)}`}
                  className="text-lavender hover:text-lavender/80 transition-colors"
                >
                  {article.category}
                </Link>
              </>
            )}
          </div>
          
          <h1 className="font-display text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] text-foreground leading-[1.2] tracking-[-0.02em] text-balance">
            {article.title}
          </h1>

          {/* Download buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <PdfDownloadButton 
              title={article.title}
              author={article.author}
              date={article.date}
            />
            {article.downloadUrl && (
              <a
                href={article.downloadUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 text-foreground hover:border-lavender hover:bg-lavender hover:text-navy transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Report
              </a>
            )}
          </div>
        </div>
      </section>

      <main className="px-6 md:px-12 lg:px-20 pb-20">
        {/* Divider */}
        <div className="border-t border-foreground/10 mb-12" />
        
        <article className="max-w-3xl">
          {/* Article content */}
          <div className="prose-forerunner">
            {renderContent(article.content)}
          </div>
          
          {/* Article footer */}
          <div className="mt-16 pt-8 border-t border-foreground/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <p className="text-sm text-foreground/50">
                Written by {article.author}
              </p>
              <Link 
                href="/perspectives"
                className="group inline-flex items-center gap-2 text-sm text-lavender hover:text-lavender/80 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Perspectives
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
