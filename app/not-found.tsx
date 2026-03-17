import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Search } from "lucide-react"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="bg-navy min-h-screen flex flex-col justify-between">
      {/* Header with logo */}
      <header className="px-6 md:px-12 lg:px-20 pt-8 md:pt-12">
        <Link href="/">
          <Image
            src="/images/forerunner-nameplate-white.png"
            alt="Forerunner"
            width={240}
            height={32}
            className="h-8 md:h-10 w-auto"
          />
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-white/40 mb-6">
            404 — Page Not Found
          </p>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-8">
            This page doesn't exist.
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-12">
            The page you're looking for may have been moved, removed, or never existed. 
            Try searching or head back to explore.
          </p>

          {/* Search bar - design only for now */}
          <div className="mb-10">
            <div className="flex">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search Forerunner..."
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <button
                type="button"
                className="px-6 py-4 bg-white text-navy font-medium hover:bg-lavender transition-colors"
              >
                Search
              </button>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-6">
            <Link 
              href="/"
              className="group inline-flex items-center gap-1.5 text-sm uppercase tracking-widest text-white/50 hover:text-lavender transition-colors"
            >
              Home
              <ArrowUpRight className="w-4 h-4 text-yellow-green opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
            <Link 
              href="/about"
              className="group inline-flex items-center gap-1.5 text-sm uppercase tracking-widest text-white/50 hover:text-lavender transition-colors"
            >
              About
              <ArrowUpRight className="w-4 h-4 text-yellow-green opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
            <Link 
              href="/investments"
              className="group inline-flex items-center gap-1.5 text-sm uppercase tracking-widest text-white/50 hover:text-lavender transition-colors"
            >
              Investments
              <ArrowUpRight className="w-4 h-4 text-yellow-green opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
            <Link 
              href="/perspectives"
              className="group inline-flex items-center gap-1.5 text-sm uppercase tracking-widest text-white/50 hover:text-lavender transition-colors"
            >
              Perspectives
              <ArrowUpRight className="w-4 h-4 text-yellow-green opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          </div>
        </div>
      </main>
      
      <Footer variant="dark" />
    </div>
  )
}
