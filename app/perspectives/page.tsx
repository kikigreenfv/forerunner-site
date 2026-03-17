
import { useState, useMemo, useEffect, useRef } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowUpRight, Search, X } from "lucide-react"
import { articles, categories, getYears, getCompanies } from "@/lib/perspectives-data"

export default function PerspectivesPage() {
  const router = useRouter()
  
  const [selectedYear, setSelectedYear] = useState<number | string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null)
  const [companySearch, setCompanySearch] = useState("")
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false)
  const companyInputRef = useRef<HTMLInputElement>(null)
  const companyDropdownRef = useRef<HTMLDivElement>(null)
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null)
  
  // Initialize filters from URL params

  const years = useMemo(() => getYears(), [])
  const companies = useMemo(() => getCompanies(), [])

  const filteredCompanies = useMemo(() => {
    if (!companySearch.trim()) return companies
    return companies.filter(c => c.toLowerCase().includes(companySearch.toLowerCase()))
  }, [companies, companySearch])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        companyDropdownRef.current && !companyDropdownRef.current.contains(e.target as Node) &&
        companyInputRef.current && !companyInputRef.current.contains(e.target as Node)
      ) {
        setShowCompanyDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      if (selectedYear) {
        if (selectedYear === "Pre-2022") {
          if (article.year >= 2022) return false
        } else if (article.year !== selectedYear) {
          return false
        }
      }
      if (selectedCategory && article.category !== selectedCategory) return false
      if (selectedCompany) {
        if (!article.company) return false
        const articleCompanies = article.company.split(', ').map(c => c.trim())
        if (!articleCompanies.includes(selectedCompany)) return false
      }
      if (selectedAuthor && article.author !== selectedAuthor) return false
      return true
    })
  }, [selectedYear, selectedCategory, selectedCompany, selectedAuthor])

  const clearFilters = () => {
    setSelectedYear(null)
    setSelectedCategory(null)
    setSelectedCompany(null)
    setCompanySearch("")
    setSelectedAuthor(null)
    // Clear URL params
    router.push('/perspectives')
  }

  const ARTICLES_PER_PAGE = 12
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE)

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(ARTICLES_PER_PAGE)
  }, [selectedYear, selectedCategory, selectedCompany, selectedAuthor])

  const visibleArticles = useMemo(() => {
    return filteredArticles.slice(0, visibleCount)
  }, [filteredArticles, visibleCount])

  const hasMore = visibleCount < filteredArticles.length

  const hasActiveFilters = selectedYear || selectedCategory || selectedCompany || selectedAuthor

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-20 pt-32 pb-12 md:pb-16">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-6">Perspectives</p>
          <h1 className="font-display text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.15] text-foreground tracking-[-0.02em]">
            We write when the thinking has earned it.
          </h1>
        </div>
      </section>

      <main className="px-6 md:px-12 lg:px-20 pb-16">
        {/* Divider */}
        <div className="border-t border-foreground/10 mb-12" />

        {/* Filters */}
        <section className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Category Filter - Left */}
            <div className="flex-1">
              <h3 className="text-[15px] uppercase tracking-[0.3em] text-foreground/40 mb-4">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                    className={`px-4 py-2 text-sm border transition-all ${
                      selectedCategory === category
                        ? "bg-lavender text-navy border-lavender"
                        : "border-foreground/15 text-foreground/60 hover:border-lavender hover:bg-lavender/5 hover:text-lavender"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Company Filter - Right */}
            {companies.length > 0 && (
              <div className="lg:w-72 shrink-0">
                <h3 className="text-[15px] uppercase tracking-[0.3em] text-foreground/40 mb-4">Search</h3>
                <div className="relative">
                  <div className="flex">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                      <input
                        ref={companyInputRef}
                        type="text"
                        placeholder={selectedCompany || "Search..."}
                        value={companySearch}
                        onChange={(e) => {
                          setCompanySearch(e.target.value)
                          setShowCompanyDropdown(true)
                        }}
                        onFocus={() => setShowCompanyDropdown(true)}
                        className={`w-full pl-9 pr-9 py-2 text-sm border-y border-l transition-colors bg-transparent outline-none ${
                          selectedCompany
                            ? "border-foreground text-foreground"
                            : "border-foreground/20 text-foreground/70 placeholder:text-foreground/40 focus:border-foreground/40"
                        }`}
                      />
                      {selectedCompany && (
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedCompany(null)
                            setCompanySearch("")
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <button
                      type="button"
                      className="px-4 py-2 bg-navy text-white border border-navy hover:bg-lavender hover:border-lavender hover:text-navy transition-colors"
                    >
                      <Search className="w-4 h-4" />
                    </button>
                  </div>
                  {showCompanyDropdown && filteredCompanies.length > 0 && (
                    <div
                      ref={companyDropdownRef}
                      className="absolute z-10 top-full left-0 right-0 mt-1 max-h-48 overflow-y-auto border border-foreground/20 bg-background shadow-lg"
                    >
                      {filteredCompanies.map(company => (
                        <button
                          key={company}
                          type="button"
                          onClick={() => {
                            setSelectedCompany(company)
                            setCompanySearch("")
                            setShowCompanyDropdown(false)
                          }}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                            selectedCompany === company
                              ? "bg-lavender text-navy"
                              : "text-foreground/70 hover:bg-lavender/10 hover:text-lavender"
                          }`}
                        >
                          {company}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 text-sm text-foreground/50 hover:text-foreground underline underline-offset-4 transition-colors"
            >
              Clear filters
            </button>
          )}
        </section>

        {/* Results Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-foreground/10 max-w-5xl">
          <p className="text-sm text-foreground/50">
            {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
            {hasActiveFilters && " matching filters"}
          </p>
        </div>

        {/* Articles List */}
        <section>
          <div className="space-y-0">
            {visibleArticles.map((article, index) => (
              <article key={article.slug} className="group border-b border-foreground/10 last:border-b-0">
                <Link 
                  href={`/perspectives/${article.slug}`}
                  className="block py-10 hover:bg-lavender/[0.02] -mx-4 px-4 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
                    {/* Left: Number and Meta */}
                    <div className="lg:w-32 shrink-0 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2">
                      <span className="text-[15px] font-mono text-lavender">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-foreground/40">
                        <time>{article.date}</time>
                        {article.category && (
                          <>
                            <span className="hidden lg:inline">|</span>
                            <span className="text-lavender">{article.category}</span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {/* Middle: Content */}
                    <div className="flex-1 min-w-0">
                      <h2 className="font-display text-xl md:text-2xl text-foreground tracking-tight group-hover:text-lavender transition-colors flex items-start gap-3 mb-3">
                        <span className="text-balance">{article.title}</span>
                        <ArrowUpRight className="w-5 h-5 text-lavender opacity-0 group-hover:opacity-100 shrink-0 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </h2>
                      
                      <p className="text-sm text-foreground/60 leading-relaxed mb-3 max-w-2xl">
                        {article.excerpt}
                      </p>
                      
                      <p className="text-xs text-foreground/40">
                        {article.author}{article.authorTitle && `, ${article.authorTitle}`}
                      </p>
                    </div>

                    {/* Right: Image */}
                    <div className="hidden lg:block lg:w-48 shrink-0">
                      {article.image ? (
                        <div className="aspect-square overflow-hidden bg-white">
                          <img 
                            src={article.image} 
                            alt="" 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="aspect-square bg-lavender/10 flex items-center justify-center">
                          <span className="text-xs text-foreground/20 uppercase tracking-widest">Image</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </article>
            ))}

            {filteredArticles.length === 0 && (
              <div className="py-20 text-center border border-dashed border-foreground/20">
                <p className="text-foreground/50">No articles match the selected filters.</p>
              </div>
            )}
          </div>

          {hasMore && (
            <div className="flex flex-col items-center gap-3 pt-16">
              <p className="text-sm text-foreground/40">
                Showing {visibleCount} of {filteredArticles.length} articles
              </p>
              <button
                type="button"
                onClick={() => setVisibleCount(prev => prev + ARTICLES_PER_PAGE)}
                className="px-8 py-3 text-sm border border-foreground/15 text-foreground/60 hover:border-lavender hover:bg-lavender hover:text-navy transition-colors tracking-wide"
              >
                Load More
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
