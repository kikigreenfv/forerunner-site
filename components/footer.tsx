"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface FooterProps {
  variant?: "light" | "dark"
}

export function Footer({ variant = "light" }: FooterProps) {
  const isDark = variant === "dark"
  
  return (
    <footer className={`px-6 md:px-12 lg:px-20 py-16 md:py-20 border-t ${isDark ? "bg-navy border-white/5" : "bg-background border-foreground/5"}`}>
      <div className="flex flex-col gap-12">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-8">
          {/* Left: Logo and tagline */}
          <div className="flex items-center gap-6 md:gap-8">
            <Link href="/" className="shrink-0">
              <Image
                src={isDark ? "/images/forerunner-f-white.png" : "/images/forerunner-f-navy.png"}
                alt="Forerunner"
                width={40}
                height={50}
                className="h-14 md:h-16 lg:h-20 w-auto"
              />
            </Link>
            <p className={`font-display text-lg md:text-xl lg:text-2xl tracking-[-0.01em] ${isDark ? "text-white/80" : "text-foreground/80"}`}>
              Founders Building<br />
              a Future Worth Having
            </p>
          </div>
          
          {/* Middle: Newsletter signup */}
          <div className="flex flex-col gap-4 max-w-xs">
            <p className={`text-sm font-medium ${isDark ? "text-white" : "text-foreground"}`}>
              Subscribe to our newsletter
            </p>
            <form 
              action="https://forerunnerventures.substack.com/subscribe" 
              method="get" 
              target="_blank"
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className={`w-full px-4 py-2.5 text-sm rounded-none border bg-transparent transition-colors focus:outline-none ${
                  isDark 
                    ? "border-white/20 text-white placeholder:text-white/40 focus:border-white/40" 
                    : "border-foreground/20 text-foreground placeholder:text-foreground/40 focus:border-foreground/40"
                }`}
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 text-sm font-medium bg-yellow-green text-navy transition-opacity hover:opacity-80"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          {/* Right: Two column links */}
          <div className="flex gap-12 lg:gap-16">
            {/* Column 1: Social */}
            <div className="flex flex-col gap-3">
              <Link 
                href="https://linkedin.com/company/forerunner-ventures" 
                target="_blank"
                className={`group flex items-center gap-1 text-sm tracking-wide transition-colors ${isDark ? "text-white/70 hover:text-lavender" : "text-foreground/70 hover:text-lavender"}`}
              >
                LinkedIn
                <ArrowUpRight className="w-3.5 h-3.5 text-yellow-green opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
              <Link 
                href="https://x.com/ForerunnerVC" 
                target="_blank"
                className={`group flex items-center gap-1 text-sm tracking-wide transition-colors ${isDark ? "text-white/70 hover:text-lavender" : "text-foreground/70 hover:text-lavender"}`}
              >
                X
                <ArrowUpRight className="w-3.5 h-3.5 text-yellow-green opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
              <Link 
                href="https://forerunnerventures.substack.com" 
                target="_blank"
                className={`group flex items-center gap-1 text-sm tracking-wide transition-colors ${isDark ? "text-white/70 hover:text-lavender" : "text-foreground/70 hover:text-lavender"}`}
              >
                Substack
                <ArrowUpRight className="w-3.5 h-3.5 text-yellow-green opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
            </div>
            
            {/* Column 2: Contact */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:media@forerunnerventures.com"
                className={`group flex items-center gap-1 text-sm tracking-wide whitespace-nowrap transition-colors ${isDark ? "text-white/70 hover:text-lavender" : "text-foreground/70 hover:text-lavender"}`}
              >
                Media Inquiry
                <ArrowUpRight className="w-3.5 h-3.5 text-yellow-green opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
              <a
                href="mailto:info@forerunnerventures.com"
                className={`group flex items-center gap-1 text-sm tracking-wide whitespace-nowrap transition-colors ${isDark ? "text-white/70 hover:text-lavender" : "text-foreground/70 hover:text-lavender"}`}
              >
                General Inquiry
                <ArrowUpRight className="w-3.5 h-3.5 text-yellow-green opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
              <Link
                href="https://forerunner.arkpes.com/login"
                target="_blank"
                className={`group flex items-center gap-1 text-sm tracking-wide whitespace-nowrap transition-colors ${isDark ? "text-white/70 hover:text-lavender" : "text-foreground/70 hover:text-lavender"}`}
              >
                LP Login
                <ArrowUpRight className="w-3.5 h-3.5 text-yellow-green opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className={`border-t pt-8 flex flex-col md:flex-row md:justify-between gap-4 ${isDark ? "border-white/10" : "border-foreground/10"}`}>
          <p className={`text-xs tracking-wide ${isDark ? "text-white/40" : "text-foreground/40"}`}>
            © {new Date().getFullYear()} Forerunner Ventures. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link 
              href="/privacy" 
              className={`text-xs tracking-wide transition-opacity hover:opacity-60 ${isDark ? "text-white/40" : "text-foreground/40"}`}
            >
              Privacy Policy
            </Link>
            <button 
              type="button"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-cookie-preferences"))
              }}
              className={`text-xs tracking-wide transition-opacity hover:opacity-60 ${isDark ? "text-white/40" : "text-foreground/40"}`}
            >
              Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
