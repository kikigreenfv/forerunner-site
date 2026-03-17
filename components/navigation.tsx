"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { href: "/about", label: "ABOUT" },
  { href: "/investments", label: "INVESTMENTS" },
  { href: "/perspectives", label: "PERSPECTIVES" },
]

interface NavigationProps {
  variant?: "light" | "dark"
}

export function Navigation({ variant = "light" }: NavigationProps) {
  const pathname = usePathname()
  const isDark = variant === "dark"

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b",
      isDark ? "bg-navy/95 border-white/5" : "bg-background/95 border-foreground/5"
    )}>
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">
        <Link href="/" className="block">
          <Image
            src={isDark ? "/images/forerunner-nameplate-white.png" : "/images/forerunner-nameplate-navy.png"}
            alt="Forerunner"
            width={600}
            height={80}
            className="h-16 md:h-[70px] w-auto"
          />
        </Link>
        
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-xs uppercase tracking-[0.2em] transition-colors",
                  isDark 
                    ? pathname === item.href ? "text-white" : "text-white/60 hover:text-lavender"
                    : pathname === item.href ? "text-foreground" : "text-foreground/60 hover:text-lavender"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden p-2 -mr-2" aria-label="Open menu">
              <Menu className={cn("w-6 h-6", isDark ? "text-white" : "text-foreground")} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className={cn(
            "w-[280px] border-l !bg-white",
            isDark ? "!bg-navy border-white/10" : "border-foreground/10"
          )}>
            <nav className="flex flex-col gap-8 mt-16 px-6">
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={cn(
                    "text-sm uppercase tracking-[0.2em] font-sans transition-colors",
                    isDark
                      ? pathname === item.href ? "text-white" : "text-white/70 hover:text-lavender"
                      : pathname === item.href ? "text-navy" : "text-navy/60 hover:text-lavender"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
