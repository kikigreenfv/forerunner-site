'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function MenuButton() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Investments', href: '/investments' },
    { label: 'Perspectives', href: '/perspectives' },
  ]

  return (
    <div className="flex justify-end">
      {/* Menu Button - right-aligned */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="py-4 px-6 md:px-8 flex items-center justify-center group transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" />
          ) : (
            <Menu className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" />
          )}
        </button>

        {/* Navigation Menu */}
        {isOpen && (
          <>
            {/* Backdrop - mobile only */}
            <div
              className="fixed inset-0 z-40 bg-navy/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Content - panel on mobile, dropdown on desktop */}
            <div className="fixed inset-0 z-50 md:absolute md:right-0 md:top-full md:w-80 md:left-auto md:bg-navy md:border md:border-white/10 md:shadow-xl md:mt-0">
              {/* Mobile: close button at top */}
              <div className="md:hidden flex justify-end p-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/5 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Navigation items */}
              <nav className="h-full md:h-auto flex flex-col items-stretch bg-navy">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-6 md:px-8 py-6 md:py-4 text-center md:text-left font-display text-3xl md:text-2xl text-white hover:text-lavender transition-colors ${
                      index < navItems.length - 1 ? 'border-b border-white/10' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
