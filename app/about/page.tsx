import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowUpRight, TrendingUp, DollarSign, Target } from "lucide-react"

const team = [
  {
    groupLabel: "INVESTMENT & PORTFOLIO",
    members: [
      { 
        name: "Kirsten Green", 
        role: "Founder, Partner",
        bio: "https://v0.app/chat/bio-page-fwmLWdCcAWX?ref=CFBJJT",
        links: {
          super: "https://superme.ai/kirsten",
          x: "https://x.com/kirstengreen",
          linkedin: "https://linkedin.com/in/kirstengreen"
        }
      },
      { 
        name: "Eurie Kim", 
        role: "Partner",
        links: {
          super: "https://superme.ai/eurie",
          x: "https://x.com/euriekim",
          linkedin: "https://linkedin.com/in/euriekim"
        }
      },
      { 
        name: "Nicole Johnson", 
        role: "Partner",
        links: {
          super: "https://superme.ai/nicole",
          x: "https://x.com/nicolejohnson",
          linkedin: "https://linkedin.com/in/nicolejohnson"
        }
      },
      { 
        name: "Jason Bornstein", 
        role: "Partner, Head of Research",
        links: {
          super: "https://superme.ai/jason",
          x: "https://x.com/jasonbornstein",
          linkedin: "https://linkedin.com/in/jasonbornstein"
        }
      },
      { 
        name: "Fawzi Itani", 
        role: "Principal",
        links: {
          super: "https://superme.ai/fawzi",
          x: "https://x.com/fawziitani",
          linkedin: "https://linkedin.com/in/fawziitani"
        }
      },
      { 
        name: "Sam O'Donnell", 
        role: "Partner Associate",
        links: {
          super: "https://superme.ai/sam",
          x: "https://x.com/samcoding",
          linkedin: "https://linkedin.com/in/samcoding"
        }
      },
      { 
        name: "Tess Krensky", 
        role: "Partner Associate",
        links: {
          super: "https://superme.ai/tess",
          x: "https://x.com/tesskrensky",
          linkedin: "https://linkedin.com/in/tesskrensky"
        }
      },
    ]
  },
  {
    groupLabel: "Operations",
    members: [
      { 
        name: "Jennifer Mariska", 
        role: "Partner, COO",
        links: {
          linkedin: "https://linkedin.com/in/jennifermariska"
        }
      },
      { 
        name: "Kira McCroden", 
        role: "VP, Head of Marketing & Communications",
        links: {
          linkedin: "https://linkedin.com/in/kiramccroden"
        }
      },
      { 
        name: "Tandis Moeni", 
        role: "VP, Finance",
        links: {
          linkedin: "https://linkedin.com/in/tandismoeni"
        }
      },
      { 
        name: "Anthony Perez", 
        role: "VP, Finance",
        links: {
          linkedin: "https://linkedin.com/in/anthonyperez"
        }
      },
      { 
        name: "Alicia Prodromou", 
        role: "Executive Assistant",
        links: {
          linkedin: "https://linkedin.com/in/aliciaprodromou"
        }
      },
    ]
  },
]

export default function About() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-20 pt-32 pb-12 md:pb-16">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-6">About</p>
          <h1 className="font-display text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.15] text-foreground tracking-[-0.02em]">
            Venture is not a passive business.
          </h1>
        </div>
      </section>

      <main className="px-6 md:px-12 lg:px-20 pb-16">
        {/* About Content Grid */}
        <section className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-20">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-[15px] uppercase tracking-[0.3em] text-lavender mb-5">On This Page</h2>
              <nav className="flex flex-row lg:flex-col gap-3 lg:gap-2.5">
                <a 
                  href="#philosophy" 
                  className="group flex items-center gap-2 text-xs text-foreground/40 hover:text-foreground/70 transition-colors"
                >
                  <span className="w-4 h-px bg-lavender group-hover:w-6 transition-all" />
                  Philosophy
                </a>
                <a 
                  href="#team" 
                  className="group flex items-center gap-2 text-xs text-foreground/40 hover:text-foreground/70 transition-colors"
                >
                  <span className="w-4 h-px bg-lavender group-hover:w-6 transition-all" />
                  Team
                </a>
                <a 
                  href="#faq" 
                  className="group flex items-center gap-2 text-xs text-foreground/40 hover:text-foreground/70 transition-colors"
                >
                  <span className="w-4 h-px bg-lavender group-hover:w-6 transition-all" />
                  FAQ
                </a>
              </nav>
            </div>
          </aside>
          
          {/* Main Content */}
          <div className="lg:col-span-9">
            <div id="philosophy" className="scroll-mt-32">
              <div className="space-y-5 max-w-2xl">
                <p className="font-display text-base md:text-lg leading-[1.8] text-foreground/90 tracking-[-0.01em]">
                  The people here are entrepreneurial by nature. We move early, form conviction before consensus, and build clarity in ambiguous moments. We hold points of view firmly enough to fight for what matters and loosely enough to update when reality demands it. We find genuine fulfillment actively supporting founders and teams — not just in building a personal track record.
                </p>
                <p className="font-display text-base md:text-lg leading-[1.8] text-foreground/90 tracking-[-0.01em]">
                  We built Forerunner to be a place where judgment compounds. Where decisions are explicit, accountable, and examined. Where the hard-won insight from one investment finds its way into the next. Where experience makes us sharper, not more certain.
                </p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-16 mt-16">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-5 h-5 text-navy/40 mt-2" />
                <div>
                  <span className="text-4xl md:text-5xl font-display text-foreground">12+</span>
                  <p className="mt-1 text-sm text-foreground/50 uppercase tracking-wide">Years Investing</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-16 bg-foreground/10" />
              <div className="flex items-start gap-4">
                <DollarSign className="w-5 h-5 text-navy/40 mt-2" />
                <div>
                  <span className="text-4xl md:text-5xl font-display text-foreground">$3B</span>
                  <p className="mt-1 text-sm text-foreground/50 uppercase tracking-wide">AUM</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-16 bg-foreground/10" />
              <div className="flex items-start gap-4">
                <Target className="w-5 h-5 text-navy/40 mt-2" />
                <div>
                  <span className="text-4xl md:text-5xl font-display text-foreground">Early</span>
                  <p className="mt-1 text-sm text-foreground/50 uppercase tracking-wide">Stage Focus</p>
                </div>
              </div>
            </div>

            {/* First Investors */}
            <div className="mt-16">
              <div className="flex items-center gap-3 mb-8">
                <h3 className="text-[15px] uppercase tracking-[0.3em] text-foreground/40">
                  First Investors
                </h3>
                <div className="flex-1 h-px bg-foreground/10" />
              </div>
              <div className="grid grid-cols-3 gap-x-8 md:gap-x-16 gap-y-14 md:gap-y-16 items-center py-2">
                {[
                  { name: "Chime", logo: "/images/logos/chime.svg" },
                  { name: "Oura", logo: "/images/logos/oura.svg" },
                  { name: "Hims Hers Health", logo: "/images/logos/hims-hers.svg" },
                  { name: "Faire", logo: "/images/logos/faire.svg" },
                  { name: "Warby Parker", logo: "/images/logos/warby-parker.svg" },
                  { name: "Glossier", logo: "/images/logos/glossier.svg" },
                ].map((company) => (
                  <div
                    key={company.name}
                    className="group flex items-center justify-center"
                  >
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="w-full max-w-[180px] h-auto opacity-80 group-hover:opacity-100 transition-opacity" 
                    />
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/investments"
                  className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-lavender transition-colors"
                >
                  View all investments
                  <ArrowUpRight className="w-3.5 h-3.5 text-yellow-green" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-foreground/10 mb-16 md:mb-20" />

        {/* Team Section */}
        <section id="team" className="scroll-mt-32 mb-16 md:mb-20">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-6">Team</p>
            <h2 className="font-display text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] text-foreground leading-[1.2] tracking-[-0.02em]">
              The people building Forerunner.
            </h2>
          </div>
          
          <div className="space-y-16">
            {team.map((group, groupIndex) => (
              <div key={group.groupLabel}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[15px] font-mono font-bold text-lavender">0{groupIndex + 1}</span>
                  <h3 className="text-[15px] uppercase tracking-[0.3em] text-foreground/40">
                    {group.groupLabel}
                  </h3>
                  <div className="flex-1 h-px bg-foreground/10" />
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                  {group.members.map((member) => (
                    <li key={member.name} className="group">
                      <div className="border-l border-transparent group-hover:border-lavender/50 pl-4 transition-colors">
                        <p className="text-base md:text-lg text-foreground mb-1 font-display">
                          {member.bio ? (
                            <Link href={member.bio} target="_blank" className="hover:text-lavender transition-colors">
                              {member.name}
                            </Link>
                          ) : (
                            member.name
                          )}
                        </p>
                        <p className="text-xs text-foreground/50 mb-3">
                          {member.role}
                        </p>
                        <div className="flex gap-4 text-xs uppercase tracking-widest">
                          {member.links.super && (
                            <Link 
                              href={member.links.super} 
                              target="_blank"
                              className="group/link flex items-center gap-1 text-foreground/40 hover:text-lavender transition-colors"
                            >
                              Superme
                              <ArrowUpRight className="w-3 h-3 text-yellow-green opacity-80 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                            </Link>
                          )}
                          {member.links.x && (
                            <Link 
                              href={member.links.x} 
                              target="_blank"
                              className="group/link flex items-center gap-1 text-foreground/40 hover:text-lavender transition-colors"
                            >
                              X
                              <ArrowUpRight className="w-3 h-3 text-yellow-green opacity-80 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                            </Link>
                          )}
                          {member.links.linkedin && (
                            <Link 
                              href={member.links.linkedin} 
                              target="_blank"
                              className="group/link flex items-center gap-1 text-foreground/40 hover:text-lavender transition-colors"
                            >
                              LinkedIn
                              <ArrowUpRight className="w-3 h-3 text-yellow-green opacity-80 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-foreground/10" />
      </main>

      {/* Office Images */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/office%20f2.1-Tj20RvJJcYGhZwfIOuTzt9XIxw8zbF.png"
            alt="Forerunner office entrance"
            className="w-full h-full object-cover object-left"
          />
        </div>
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/office%20f2-rNlkTIzxb5GKsmgrh6Vs8pRwNQbmU9.png"
            alt="Forerunner office lounge"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-32 bg-[#C4A8D8] py-16 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-navy/50 mb-6">FAQ</p>
          <h2 className="font-display text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] text-navy leading-[1.2] tracking-[-0.02em] mb-14">
            Questions founders ask us.
          </h2>
          
          <div className="space-y-16">
            <article className="group">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-[15px] font-mono font-bold text-navy/40 shrink-0">01</span>
                <h3 className="font-display text-base md:text-lg text-navy">
                  What does Forerunner invest in?
                </h3>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="w-[10px] shrink-0" />
                <div className="space-y-4 text-base leading-[1.7] text-navy/70 max-w-2xl">
                <p>
                  Companies being built for humans — the applications they use, and the infrastructure that shapes how they live.
                </p>
                <p>
                  AI does not change that orientation. It makes it more consequential. The most important companies being built right now are doing two things simultaneously: deploying serious technical capability and making deliberate decisions about how humans experience and rely on it. We invest in both — consumer applications where the human relationship is the product, and AI-native infrastructure where the architectural decisions being made today will shape what gets built on top for decades.
                </p>
                <p>
                  We have always started from the same questions: What will people trust? Why will they adopt? What still matters when the novelty fades? That orientation has shaped every investment we have made. It is precisely the right lens for this moment.
                </p>
                <p>
                  We are not looking for companies optimized for a moment. We are looking for companies with the ambition and the foundation to define a category, expand their reach over time, and matter decades from now. Enduring is the standard.
                </p>
                <p>
                  If you are building something where technology is the unlock and the human side of the equation is the hard part — not an afterthought — we want to hear from you.
                </p>
                </div>
              </div>
            </article>

            <article className="group">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-[15px] font-mono font-bold text-navy/40 shrink-0">02</span>
                <h3 className="font-display text-base md:text-lg text-navy">
                  How does Forerunner invest?
                </h3>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="w-[10px] shrink-0" />
                <div className="space-y-4 text-base leading-[1.7] text-navy/70 max-w-2xl">
                  <p>
                    We lead or co-lead at Seed and Series A — the moment when a founder's conviction is taking shape and the foundation for scale is being laid. Initial checks typically range from $1M to $15M. We also invest selectively at later stages, when a company is at a genuine inflection point and the questions being asked are ones we are well-positioned to help answer.
                  </p>
                  <p>
                    At every stage, our approach is the same: form a view, commit to it, and stay close through the moments that matter. We do not take exploratory positions. If we are in, we are genuinely in.
                  </p>
                  <p>
                    Founders can reach us directly here: <a href="mailto:investments@forerunnerventures.com" className="text-lavender hover:underline">investments@forerunnerventures.com</a>. Please include a brief description of your company and investor pitch materials. We read everything, promise.
                  </p>
                </div>
              </div>
            </article>

            <article className="group">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-[15px] font-mono font-bold text-navy/40 shrink-0">03</span>
                <h3 className="font-display text-base md:text-lg text-navy">
                  What does Forerunner look for in a pitch?
                </h3>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="w-[10px] shrink-0" />
                <div className="space-y-4 text-base leading-[1.7] text-navy/70 max-w-2xl">
                  <p>
                    We look for founders who understand that in this moment, technical capability is necessary but not sufficient. The builders who will define this decade are the ones making deliberate decisions about what they build, how it works, and what it asks of the people who rely on it. We look for evidence of that thinking from the start.
                  </p>
                  <p>Specifically, three things:</p>
                  <p className="pl-5">
                    <strong className="text-navy">Human-first conviction.</strong> You feel accountable for the people on the other side of your product. You can articulate the ways your technology could affect trust, agency, and dependence as clearly as you can articulate the opportunity. You treat those implications as design inputs, not cleanup.
                  </p>
                  <p className="pl-5">
                    <strong className="text-navy">Craft.</strong> You understand your stack, your architecture, your product decisions — and why they matter. You know where the hard problems actually live and what it will take to scale through them. The business gets stronger as it grows because the foundation was built deliberately, not by accident.
                  </p>
                  <p className="pl-5">
                    <strong className="text-navy">Judgment under uncertainty.</strong> You make consequential decisions without waiting for a complete picture, update when reality changes, and maintain coherence under pressure. You know when speed creates advantage and when restraint prevents failure.
                  </p>
                  <p>
                    Put simply, we are looking for founders who can articulate the potential of their own product and its risks. Who make consequential decisions with intent. Who stay the course under pressure that would bend most people. Who are building a future worth having.
                  </p>
                  <p>
                    A great pitch does not require all the answers. It requires an unmistakable ability to find them.
                  </p>
                </div>
              </div>
            </article>

            <article className="group">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-[15px] font-mono font-bold text-navy/40 shrink-0">04</span>
                <h3 className="font-display text-base md:text-lg text-navy">
                  How do you support founders?
                </h3>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="w-[10px] shrink-0" />
                <div className="space-y-4 text-base leading-[1.7] text-navy/70 max-w-2xl">
                  <p>
                    We are most useful in the decisions that do not have obvious answers — when you are weighing short-term capability against long-term trust, making a foundational product or architecture bet with real consequences, or scaling in ways that start to bend the culture.
                  </p>
                  <p>
                    That means partners who are accessible and direct, not a support function that activates after the wire clears. It means a network of founders who are co-stewards of each other's thinking — paired intentionally across stage and domain where perspective asymmetry creates real value. And it means that what we have learned across a decade of outcomes — the patterns, the failure modes, the questions worth asking earlier — is available as institutional knowledge, not just personal anecdote.
                  </p>
                  <p>
                    We do not measure our involvement by activity. We measure it by whether your decisions got sharper because we were in the room.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
