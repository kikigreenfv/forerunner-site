import { articles } from "@/lib/perspectives-data"

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find(a => a.slug === params.slug)

  if (!article) {
    return (
      <main style={{ padding: "80px" }}>
        <h1>Not found</h1>
      </main>
    )
  }

  return (
    <main className="px-12 py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-serif text-[#0a1f44] mb-6">
        {article.title}
      </h1>

      <div className="text-sm text-gray-400 mb-6">
        {article.date} • {article.author}
      </div>

      <div className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
        {article.content}
      </div>
    </main>
  )
}
