"use client"

import { useState, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowUpRight, Search, X, Loader2, Grid3X3, List } from "lucide-react"
import { investments, years, categories } from "@/lib/investments-data"

export default function Investments() {
  const [selectedYear, setSelectedYear] = useState<number | string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [aiSearchResults, setAiSearchResults] = useState<string[] | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [searchError, setSearchError] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Client-side text search as fallback
  const textSearch = (query: string): string[] => {
    const searchTerms = query.toLowerCase().split(/\s+/).filter(Boolean)
    
    return investments
      .filter(investment => {
        const searchableText = [
          investment.company,
          investment.description,
          investment.longDescription || '',
          investment.category,
          investment.categorySecondary || ''
        ].join(' ').toLowerCase()
        
        return searchTerms.every(term => searchableText.includes(term))
      })
      .map(i => i.company)
  }

  const handleAiSearch = async () => {
    if (!searchQuery.trim()) return
    
    setIsSearching(true)
    setSelectedYear(null)
    setSelectedCategory(null)
    setSearchError(null)
    
    try {
      const response = await fetch('/api/search-investments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery }),
      })
      const data = await response.json()
      
      if (data.error) {
        // Fall back to client-side text search
        const fallbackResults = textSearch(searchQuery)
        if (fallbackResults.length > 0) {
          setAiSearchResults(fallbackResults)
          setSearchError(null)
        } else {
          setSearchError('No matches found. Try different keywords.')
          setAiSearchResults([])
        }
      } else {
        setAiSearchResults(data.companies || [])
      }
    } catch (error) {
      console.error('Search failed:', error)
      // Fall back to client-side text search
      const fallbackResults = textSearch(searchQuery)
      if (fallbackResults.length > 0) {
        setAiSearchResults(fallbackResults)
        setSearchError(null)
      } else {
        setSearchError('No matches found. Try different keywords.')
        setAiSearchResults([])
      }
    } finally {
      setIsSearching(false)
    }
  }

  const clearSearch = () => {
    setSearchQuery("")
    setAiSearchResults(null)
    setSearchError(null)
  }

  const filteredInvestments = useMemo(() => {
    if (aiSearchResults !== null) {
      return investments.filter(investment => 
        aiSearchResults.includes(investment.company)
      )
    }
    
    return investments.filter(investment => {
      const matchesYear = selectedYear === null || 
        (selectedYear === "Pre-2022" 
          ? (typeof investment.year === 'number' && investment.year < 2022)
          : investment.year === selectedYear)
      const matchesCategory = selectedCategory === null || investment.category === selectedCategory
      return matchesYear && matchesCategory
    })
  }, [selectedYear, selectedCategory, aiSearchResults])

  const clearFilters = () => {
    setSelectedYear(null)
    setSelectedCategory(null)
    setAiSearchResults(null)
    setSearchQuery("")
    setSearchError(null)
  }

  const hasActiveFilters = selectedYear !== null || selectedCategory !== null || aiSearchResults !== null

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-20 pt-32 pb-12 md:pb-16">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-6">Investments</p>
          <h1 className="font-display text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.15] text-foreground tracking-[-0.02em]">
            We form convictions. We commit to them. These companies are the result.
          </h1>
        </div>
      </section>

      {/* Portfolio Image Scroll */}
      <section className="pb-12 md:pb-16 overflow-hidden">
        <div className="flex overflow-x-auto scrollbar-hide">
          {[
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0%20f2-PTJVvXxZsqSQMLD9Z5nuoDAfM0e0lJ.png", alt: "Oura" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chime%20f2.png-o26nga1Hm2RsS8VuQRFFYrGTtMRARN.jpeg", alt: "Chime" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/decagon%20f2-B9qRndXzv1YF5Fi89iZJvct7rhoXd9.png", alt: "Decagon" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/w%20f2-yjc4QeENpyQbdNBrMXSgyKXlFK5xm2.png", alt: "webAI" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Faire%20f2-ROobj7nW1ogmZCoRgv0BEsINlKbPQ0.png", alt: "Faire" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fora%20f2-qs8CtLXrsSm8NcjbtcJTVQa4GAIS68.png", alt: "Fora" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wabi%20f2-PznDnXogXrtbcW3b7vjzXTcCQNdrLT.png", alt: "Wabi" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d%20f2-Ay8wX3NvZvy3619RB8hL5ROaWMIsOZ.png", alt: "Duckbill" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/g%20f2-H1TFUzhmNgbC5y6MVznOO7tCkevYWX.jpg", alt: "Glossier" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f%20f2-aRhw8Oq0KJHqjVIpSjtQV0cEtorOIm.png", alt: "The Feed", position: "top" },
          ].map((image) => (
            <div key={image.alt} className="shrink-0 group relative">
              <div className="w-[280px] md:w-[320px] aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${image.position === "top" ? "object-top" : "object-center"}`}
                />
              </div>
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors flex items-end justify-start p-4">
                <p className="text-xs uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <main className="px-6 md:px-12 lg:px-20 pb-16">
        {/* Divider */}
        <div className="border-t border-foreground/10 mb-12" />

        <section className="max-w-7xl">
          {/* Filters and Search Row */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            {/* Left: Filters */}
            <div className="lg:col-span-8">
              {/* Category Filters */}
              <div className="mb-6">
                <h3 className="text-[15px] uppercase tracking-[0.3em] text-foreground/40 mb-4">Filter by Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(selectedCategory === category ? null : category)
                        setAiSearchResults(null)
                        setSearchQuery("")
                      }}
                      className={`px-4 py-2 text-sm border transition-all ${
                        selectedCategory === category
                          ? "border-lavender bg-lavender text-navy"
                          : "border-foreground/15 text-foreground/60 hover:border-lavender hover:bg-lavender/5 hover:text-lavender"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right: Company Dropdown & Search */}
            <div className="lg:col-span-4 space-y-4">
              {/* Company Dropdown */}
              <div>
                <h3 className="text-[15px] uppercase tracking-[0.3em] text-foreground/40 mb-4">Select Company</h3>
                <select
                  value={searchQuery}
                  onChange={(e) => {
                    const val = e.target.value
                    if (val) {
                      setSearchQuery(val)
                      setAiSearchResults([val])
                      setSelectedYear(null)
                      setSelectedCategory(null)
                    } else {
                      clearSearch()
                    }
                  }}
                  className="w-full px-4 py-2.5 border border-foreground/15 bg-transparent text-foreground/60 focus:outline-none focus:border-lavender transition-colors appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                >
                  <option value="">All Companies</option>
                  {investments.map((investment) => (
                    <option key={investment.company} value={investment.company}>
                      {investment.company}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Search */}
              <div>
                <h3 className="text-[15px] uppercase tracking-[0.3em] text-foreground/40 mb-4">Or Search</h3>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                    <input
                      type="text"
                      value={aiSearchResults ? "" : searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value)
                        setAiSearchResults(null)
                      }}
                      onKeyDown={(e) => e.key === 'Enter' && handleAiSearch()}
                      placeholder="Search by keyword..."
                      className="w-full pl-11 pr-10 py-2.5 text-sm border border-foreground/15 bg-transparent text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-lavender transition-colors"
                    />
                    {searchQuery && !aiSearchResults && (
                      <button
                        type="button"
                        onClick={clearSearch}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={handleAiSearch}
                    disabled={isSearching || !searchQuery.trim() || aiSearchResults !== null}
                    className="px-4 py-2 bg-navy text-white border border-navy flex items-center gap-2 transition-colors hover:bg-lavender hover:border-lavender hover:text-navy"
                  >
                    {isSearching ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Search className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {searchError && (
                  <p className="text-xs text-red-500 mt-2">
                    {searchError}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Results Bar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-foreground/10">
            <div className="flex items-center gap-4">
              {aiSearchResults !== null ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-foreground/60">
                    {filteredInvestments.length} result{filteredInvestments.length !== 1 ? 's' : ''} for "{searchQuery}"
                  </span>
                  <button
                    onClick={clearSearch}
                    className="text-sm text-lavender hover:underline flex items-center gap-1"
                  >
                    <X className="w-3 h-3" />
                    Clear
                  </button>
                </div>
              ) : null}
              
              {hasActiveFilters && !aiSearchResults && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-lavender hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center gap-1 border border-foreground/15 p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 transition-colors ${viewMode === "grid" ? "bg-foreground/5 text-foreground" : "text-foreground/40 hover:text-foreground"}`}
                title="Grid view"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 transition-colors ${viewMode === "list" ? "bg-foreground/5 text-foreground" : "text-foreground/40 hover:text-foreground"}`}
                title="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Investment Grid */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredInvestments.map((investment) => (
                <article
                  key={investment.company}
                  className="group bg-lavender/[0.03] border border-lavender/15 p-6 flex flex-col transition-all duration-200 hover:border-lavender/40 hover:bg-lavender/[0.06]"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h2 className="font-display text-lg text-foreground group-hover:text-lavender transition-colors">
                      {investment.company}
                    </h2>
                    <span className="text-xs font-mono text-foreground/40 shrink-0 pt-1">
                      {investment.year}
                    </span>
                  </div>
                  
                  <p className="text-sm text-foreground/60 mb-5 flex-1 leading-relaxed">
                    {investment.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                    <span className="text-xs text-lavender/70 uppercase tracking-wide">
                      {investment.category}
                    </span>
                    <a
                      href={investment.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-1 text-xs uppercase tracking-widest text-foreground/50 hover:text-lavender transition-colors"
                    >
                      Visit
                      <ArrowUpRight className="w-3 h-3 text-lavender opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="divide-y divide-foreground/10">
              {filteredInvestments.map((investment) => (
                <article
                  key={investment.company}
                  className="group py-6 flex items-start justify-between gap-8 hover:bg-lavender/[0.06] -mx-4 px-4 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-4 mb-2">
                      <h2 className="font-display text-lg text-foreground group-hover:text-lavender transition-colors">
                        {investment.company}
                      </h2>
                      <span className="text-xs text-lavender/70 uppercase tracking-wide">
                        {investment.category}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/60 leading-relaxed max-w-2xl">
                      {investment.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6 shrink-0">
                    <span className="text-xs font-mono text-foreground/40">
                      {investment.year}
                    </span>
                    <a
                      href={investment.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-1 text-xs uppercase tracking-widest text-foreground/50 hover:text-lavender transition-colors"
                    >
                      Visit
                      <ArrowUpRight className="w-3 h-3 text-lavender opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}

          {filteredInvestments.length === 0 && (
            <div className="text-center py-20 border border-dashed border-foreground/20">
              <p className="text-foreground/50 mb-4">No investments match your search.</p>
              <button
                onClick={clearFilters}
                className="text-sm text-lavender hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
