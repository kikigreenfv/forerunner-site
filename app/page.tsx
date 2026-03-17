import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ArrowRight, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      {/* Announcement Bar */}
      <div className="bg-yellow-green py-2.5 px-6 md:px-12 lg:px-20">
        <a 
          href="https://www.humansintheloop2026.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-navy text-sm font-medium hover:underline"
        >
          <span>Humans in the Loop 2026</span>
          <span className="text-navy/60">—</span>
          <span className="underline">Join Us</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground/5">
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">
          <Link href="/" className="block">
            <Image
              src="/images/forerunner-nameplate-navy.png"
              alt="Forerunner"
              width={600}
              height={80}
              className="h-16 md:h-[70px] w-auto"
              priority
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/about" 
              className="text-xs uppercase tracking-[0.2em] text-foreground/60 hover:text-lavender transition-colors"
            >
              About
            </Link>
            <Link 
              href="/investments" 
              className="text-xs uppercase tracking-[0.2em] text-foreground/60 hover:text-lavender transition-colors"
            >
              Investments
            </Link>
            <Link 
              href="/perspectives" 
              className="text-xs uppercase tracking-[0.2em] text-foreground/60 hover:text-lavender transition-colors"
            >
              Perspectives
            </Link>
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 -mr-2" aria-label="Open menu">
                <Menu className="w-6 h-6 text-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background border-l border-foreground/10">
              <nav className="flex flex-col gap-6 mt-12">
                <Link 
                  href="/about" 
                  className="text-lg font-display text-foreground hover:text-lavender transition-colors"
                >
                  About
                </Link>
                <Link 
                  href="/investments" 
                  className="text-lg font-display text-foreground hover:text-lavender transition-colors"
                >
                  Investments
                </Link>
                <Link 
                  href="/perspectives" 
                  className="text-lg font-display text-foreground hover:text-lavender transition-colors"
                >
                  Perspectives
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Annotated Statement Section */}
      <section className="flex flex-col px-6 md:px-12 lg:px-20 pt-8 pb-0">
        <div className="max-w-5xl">
          {/* Section label */}
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-12">First Principle</p>
          
          {/* Main annotated headline */}
          <h1 className="font-display text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[1.1] text-foreground tracking-[-0.03em]">
            People<sup className="text-lavender text-[0.4em] font-bold ml-1 -top-[1.1em] relative">1</sup> are the Force<sup className="text-lavender text-[0.4em] font-bold ml-1 -top-[1.1em] relative">2</sup> that determines what gets Built<sup className="text-lavender text-[0.4em] font-bold ml-1 -top-[1.1em] relative">3</sup>, what scales, and what Endures<sup className="text-lavender text-[0.4em] font-bold ml-1 -top-[1.1em] relative">4</sup>.
          </h1>
          
          {/* Footnotes */}
          <div className="mt-16 md:mt-24 mb-[96px] grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl">
            <div className="flex gap-4">
              <span className="text-base font-bold text-lavender shrink-0 w-5">1</span>
              <p className="text-base leading-relaxed text-foreground/70">
                <strong className="text-foreground">People</strong> — founders, technologists, customers, workers. The humans, and inspiration, at the center of every company we back.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-base font-bold text-lavender shrink-0 w-5">2</span>
              <p className="text-base leading-relaxed text-foreground/70">
                <strong className="text-foreground">Force</strong> — not passive demand, but active pull. Not talk, but action. The signal we read before markets do.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-base font-bold text-lavender shrink-0 w-5">3</span>
              <p className="text-base leading-relaxed text-foreground/70">
                <strong className="text-foreground">Built</strong> — we invest at the earliest stages, when conviction matters more than consensus, and show up for the journey at every stage.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-base font-bold text-lavender shrink-0 w-5">4</span>
              <p className="text-base leading-relaxed text-foreground/70">
                <strong className="text-foreground">Endures</strong> — twelve years in, our portfolio reflects companies that last because they serve real needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lavender Block - AI Statement */}
      <section className="bg-[#C4A8D8] py-16 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-navy/50 mb-8">The Moment</p>
          <h2 className="font-display text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.15] text-navy tracking-[-0.02em]">
            AI<sup className="text-lavender text-[0.4em] font-bold ml-1 -top-[1.4em] relative">5</sup> is not a feature. It is a platform shift — the kind that reorganizes industries, erases assumptions, and opens every category to reinvention.
          </h2>
          <div className="mt-8 flex gap-4">
            <span className="text-base font-bold text-lavender shrink-0 w-5">5</span>
            <p className="text-base leading-relaxed text-navy/60">
              <strong className="text-navy">AI</strong> — The infrastructure being built today will shape how humans experience health, money, work, learning, and connection for decades. The applications being built on top of it will be how we feel that change daily. Both matter. Both are where we invest.
            </p>
          </div>
        </div>
      </section>

      {/* White Block - Closing */}
      <section className="bg-background py-16 md:py-20 px-6 md:px-12 lg:px-20 border-t border-foreground/10">
        <div className="max-w-4xl">
          <h2 className="font-display text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.15] text-foreground tracking-[-0.02em] mb-12">
            We are not here to chase a trend. We are exactly where our work has been leading us.
          </h2>
          <Link 
            href="/about"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-navy text-white text-sm font-medium uppercase tracking-widest hover:bg-lavender hover:text-navy transition-colors"
          >
            About Forerunner
            <ArrowUpRight className="w-4 h-4 text-yellow-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Portfolio Image Scroll */}
      <section className="py-16 md:py-20 border-t border-foreground/10 overflow-hidden">
        <div className="px-6 md:px-12 lg:px-20 mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/40">Portfolio</p>
        </div>
        <div className="flex overflow-x-auto scrollbar-hide">
          {[
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/w%20f2-pN49opPo9pDrJasx5ScYyxW6BjxLsz.png", alt: "webAI" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0%20f2-PTJVvXxZsqSQMLD9Z5nuoDAfM0e0lJ.png", alt: "Oura" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/speech%20f2-8985HXi8oMoUPISfLLTaCYC8NZ4mGZ.png", alt: "Speechify" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d%20f2-Ay8wX3NvZvy3619RB8hL5ROaWMIsOZ.png", alt: "Duckbill" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a%20f2-ZjcaH5Wg70YozexHpVyOBR0wH3aOFT.png", alt: "Andromeda" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sp%20f2-HL9klA2rs1kKSQqzkeaQj8rDbB9z2L.png", alt: "Superpower", position: "top" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/s%20f2-hf7d1xajSTQeA4ixLFx9D1fiQ0KUA1.png", alt: "SlingshotAI" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/j%20f2.png-Z1jTRlFJSuCv3JrRQOBNB7FldDkf6O.jpeg", alt: "Jump" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sr%20f2-BCXWiyfophJ0xtLaSUvmen2DDrhvcc.png", alt: "Showrunner" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fora%20f2-qs8CtLXrsSm8NcjbtcJTVQa4GAIS68.png", alt: "Fora" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c%20f2-XSWo4Pvde02hQMFDn9T3tK5wFfuQ06.png", alt: "Casa" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f%20f2-aRhw8Oq0KJHqjVIpSjtQV0cEtorOIm.png", alt: "The Feed", position: "top" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/farmers%20f2-pIT6kBjZVHA9Uv3GNMlFtLfKFiKWNR.png", alt: "The Farmer's Dog" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/g%20f2-H1TFUzhmNgbC5y6MVznOO7tCkevYWX.jpg", alt: "Glossier" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chime%20f2.png-o26nga1Hm2RsS8VuQRFFYrGTtMRARN.jpeg", alt: "Chime" },
            { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hhh%20f2-i4me4jdFHPqV4i976AdFwfe6VGkERt.jpg", alt: "Hims & Hers" },
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
          
          {/* Arrow link to Investments page */}
          <Link 
            href="/investments" 
            className="shrink-0 w-[280px] md:w-[320px] aspect-[4/3] flex items-center justify-center bg-lavender/10 hover:bg-lavender/20 transition-colors group"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center text-lavender group-hover:translate-x-2 transition-transform">
                <div className="w-16 h-[2px] bg-lavender"></div>
                <ArrowRight className="w-8 h-8 -ml-1" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/60 group-hover:text-lavender transition-colors">View All</span>
            </div>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
