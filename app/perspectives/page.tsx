
import { articles } from "@/lib/perspectives-data"

export default function PerspectivesPage() {
  return (
    <main className="px-12 py-16 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="mb-16">
        <div className="text-xs tracking-widest text-gray-400 mb-4">
          PERSPECTIVES
        </div>
        <h1 className="text-5xl font-serif text-[#0a1f44] leading-tight">
          We write when the thinking has earned it.
        </h1>
      </div>

      {/* Filters */}
      <div className="flex justify-between items-center mb-10 border-b pb-6">
        <div>
          <div className="text-xs tracking-widest text-gray-400 mb-3">
            FILTER BY CATEGORY
          </div>
          <div className="flex gap-3">
            <button className="border px-4 py-2 text-sm">Investment Announcements</button>
            <button className="border px-4 py-2 text-sm">Theses</button>
            <button className="border px-4 py-2 text-sm">Research</button>
          </div>
        </div>

        {/* Search (visual only for now) */}
        <div>
          <div className="text-xs tracking-widest text-gray-400 mb-3 text-right">
            SEARCH
          </div>
          <div className="flex">
            <input
              placeholder="Search..."
              className="border px-3 py-2 w-64 text-sm"
            />
            <button className="bg-[#0a1f44] text-white px-4">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Articles */}
      <div className="space-y-12">
        {articles.map((article, i) => (
          <div key={i} className="flex justify-between items-start border-b pb-10">

            <div className="flex gap-8">
              {/* Index + Meta */}
              <div className="text-sm text-gray-400 w-24">
                <div>{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-2">{article.date}</div>
                <div className="text-purple-500 mt-1">{article.category}</div>
              </div>

              {/* Content */}
              <div className="max-w-xl">
                <h2 className="text-xl font-serif text-[#0a1f44] mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-sm mb-2">
                  {article.excerpt}
                </p>
                <div className="text-xs text-gray-400">
                  {article.author}
                </div>
              </div>
            </div>

            {/* Image */}
            {article.image && (
              <img
                src={article.image}
                className="w-40 h-40 object-cover"
              />
            )}
          </div>
        ))}
      </div>

    </main>
  )
}
