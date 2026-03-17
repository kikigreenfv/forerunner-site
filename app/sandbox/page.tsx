import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const portfolioImages = {
  homestead: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/h%20f2.png-NDCjOxxHbn7rn8Sx1LQHQeAi2MHbaH.jpeg",
  webai: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/w%20f2-pN49opPo9pDrJasx5ScYyxW6BjxLsz.png",
  glossier: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/g%20f2-H1TFUzhmNgbC5y6MVznOO7tCkevYWX.jpg",
  oura: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0%20f2-PTJVvXxZsqSQMLD9Z5nuoDAfM0e0lJ.png",
  andromeda: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a%20f2-ZjcaH5Wg70YozexHpVyOBR0wH3aOFT.png",
  showrunner: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sr%20f2-BCXWiyfophJ0xtLaSUvmen2DDrhvcc.png",
  jump: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/j%20f2.png-Z1jTRlFJSuCv3JrRQOBNB7FldDkf6O.jpeg",
  superpower: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sp%20f2-HL9klA2rs1kKSQqzkeaQj8rDbB9z2L.png",
  speechify: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/speech%20f2-8985HXi8oMoUPISfLLTaCYC8NZ4mGZ.png",
  slingshot: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/s%20f2-hf7d1xajSTQeA4ixLFx9D1fiQ0KUA1.png",
  himshers: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hhh%20f2-i4me4jdFHPqV4i976AdFwfe6VGkERt.jpg",
  casa: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c%20f2-XSWo4Pvde02hQMFDn9T3tK5wFfuQ06.png",
  thefeed: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f%20f2-aRhw8Oq0KJHqjVIpSjtQV0cEtorOIm.png",
}

export default function SandboxPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <h1 className="text-3xl font-display text-foreground mb-4">Image Sandbox</h1>
          <p className="text-foreground/60 mb-16">Experimenting with image placements for portfolio imagery.</p>
          
          {/* Option 1: Full-width hero image */}
          <section className="mb-24">
            <h2 className="text-[15px] uppercase tracking-[0.3em] text-foreground/40 mb-6">Option 1: Full-Width Hero</h2>
            <div className="w-full aspect-[21/9] overflow-hidden">
              <img 
                src={portfolioImages.homestead} 
                alt="Homestead - Modern Farmhouse" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-foreground/50 mt-4">Works well for: Homepage hero, About page header, atmospheric shots</p>
          </section>

          {/* Option 2: Two-column split */}
          <section className="mb-24">
            <h2 className="text-[15px] uppercase tracking-[0.3em] text-foreground/40 mb-6">Option 2: Two-Column Split</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={portfolioImages.glossier} 
                  alt="Glossier Store" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={portfolioImages.himshers} 
                  alt="Hims & Hers Products" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-sm text-foreground/50 mt-4">Works well for: Comparing brands, consumer products, contrasting concepts</p>
          </section>

          {/* Option 3: Image + Text side by side */}
          <section className="mb-24">
            <h2 className="text-[15px] uppercase tracking-[0.3em] text-foreground/40 mb-6">Option 3: Image + Text Side by Side</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={portfolioImages.oura} 
                  alt="Oura Ring Lifestyle" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-display text-foreground mb-4">Investing in Human Potential</h3>
                <p className="text-foreground/60 leading-relaxed">
                  We back companies that help people live better lives. From sleep tracking to mental wellness, 
                  our portfolio companies are building the infrastructure for personal health and growth.
                </p>
              </div>
            </div>
            <p className="text-sm text-foreground/50 mt-4">Works well for: About section, featured investment, team spotlight</p>
          </section>

          {/* Option 4: Bento grid */}
          <section className="mb-24">
            <h2 className="text-[15px] uppercase tracking-[0.3em] text-foreground/40 mb-6">Option 4: Bento Grid</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col-span-2 row-span-2 aspect-square overflow-hidden">
                <img 
                  src={portfolioImages.superpower} 
                  alt="Superpower" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <img 
                  src={portfolioImages.webai} 
                  alt="webAI" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <img 
                  src={portfolioImages.andromeda} 
                  alt="Andromeda" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <img 
                  src={portfolioImages.speechify} 
                  alt="Speechify" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <img 
                  src={portfolioImages.slingshot} 
                  alt="Slingshot AI" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-sm text-foreground/50 mt-4">Works well for: Portfolio showcase, AI/tech companies, multiple themes</p>
          </section>

          {/* Option 5: Full-bleed with overlay text */}
          <section className="mb-24">
            <h2 className="text-[15px] uppercase tracking-[0.3em] text-foreground/40 mb-6">Option 5: Full-Bleed with Overlay</h2>
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <img 
                src={portfolioImages.jump} 
                alt="Jump Sports" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/60" />
              <div className="relative z-10 flex items-center justify-center h-full text-center px-8">
                <div>
                  <h3 className="text-3xl md:text-5xl font-display text-white mb-4">Where Passion Meets Scale</h3>
                  <p className="text-white/80 max-w-2xl mx-auto text-lg">
                    We invest in companies that bring people together around shared experiences.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground/50 mt-4">Works well for: Mission statement, philosophy, call-to-action</p>
          </section>

          {/* Option 6: Three-up showcase */}
          <section className="mb-24">
            <h2 className="text-[15px] uppercase tracking-[0.3em] text-foreground/40 mb-6">Option 6: Three-Up Showcase</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={portfolioImages.thefeed} 
                  alt="The Feed" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden md:mt-12">
                <img 
                  src={portfolioImages.superpower} 
                  alt="Superpower" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden md:mt-6">
                <img 
                  src={portfolioImages.casa} 
                  alt="Casa" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-sm text-foreground/50 mt-4">Works well for: Portfolio highlights, lifestyle brands, consumer companies</p>
          </section>

          {/* Option 7: Horizontal scroll strip */}
          <section className="mb-24">
            <h2 className="text-[15px] uppercase tracking-[0.3em] text-foreground/40 mb-6">Option 7: Horizontal Scroll Strip</h2>
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24">
              {[
                portfolioImages.glossier,
                portfolioImages.oura,
                portfolioImages.webai,
                portfolioImages.showrunner,
                portfolioImages.himshers,
                portfolioImages.casa,
              ].map((src, i) => (
                <div key={i} className="flex-shrink-0 w-72 h-48 overflow-hidden">
                  <img 
                    src={src} 
                    alt={`Portfolio company ${i + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-foreground/50 mt-4">Works well for: Portfolio overview, quick visual tour, section divider</p>
          </section>

          {/* Option 8: Large + Small alternating */}
          <section className="mb-24">
            <h2 className="text-[15px] uppercase tracking-[0.3em] text-foreground/40 mb-6">Option 8: Large + Small Alternating</h2>
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 aspect-[16/9] overflow-hidden">
                  <img 
                    src={portfolioImages.showrunner} 
                    alt="Showrunner" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={portfolioImages.andromeda} 
                    alt="Andromeda" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={portfolioImages.speechify} 
                    alt="Speechify" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-2 aspect-[16/9] overflow-hidden">
                  <img 
                    src={portfolioImages.homestead} 
                    alt="Homestead" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground/50 mt-4">Works well for: Varied content, editorial feel, storytelling</p>
          </section>

          {/* Option 9: Masonry-style grid */}
          <section className="mb-24">
            <h2 className="text-[15px] uppercase tracking-[0.3em] text-foreground/40 mb-6">Option 9: Four-Up Grid</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                portfolioImages.glossier,
                portfolioImages.himshers,
                portfolioImages.oura,
                portfolioImages.casa,
                portfolioImages.webai,
                portfolioImages.andromeda,
                portfolioImages.jump,
                portfolioImages.thefeed,
              ].map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden">
                  <img 
                    src={src} 
                    alt={`Portfolio ${i + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-foreground/50 mt-4">Works well for: Full portfolio display, visual impact, gallery</p>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  )
}
