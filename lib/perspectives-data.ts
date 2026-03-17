export type ArticleCategory = 'Investment Announcements' | 'Theses' | 'Research';
export interface Article {
  slug: string;
  title: string;
  date: string;
  year: number;
  author: string;
  authorTitle: string;
  category: ArticleCategory | null;
  company: string | null;
  excerpt: string;
  content: string;
  downloadUrl?: string | null;
  image?: string | null;
}

export const articles: Article[] = [
  {
    slug: "from-network-effects-to-cognitive-effects-the-new-rules-for-platform-dominance",
    title: "From Network Effects to Cognitive Effects: The New Rules for Platform Dominance",
    date: "November 19, 2025",
    year: 2025,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: "Theses",
    company: null,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cognitive%20effects%20f2-xKFzwpDJIuvYEieyEeWhuex33Ya9ER.png",
    excerpt: `Picture this: you switch from Spotify to Apple Music. The playlists transfer, but something vital disappears—not just what you listened to, but the understanding that you code to death metal and cook...`,
    content: `Picture this: you switch from Spotify to Apple Music. The playlists transfer, but something vital disappears—not just what you listened to, but the understanding that you code to death metal and cook to jazz. The system that knew to serve up focus tracks when your calendar is filled with meetings or to cue sleep meditations at midnight is suddenly gone.

That loss isn't about data. It's about cognition: the ability to understand you deeply enough to predict what you need before you ask. When cognitive effects take hold, switching services isn't impossible, but it's painful and often unjustifiable. How do you walk away from a system so uniquely molded to you with intelligence that can't be reproduced elsewhere?

**A First in the History of Moats**

For the past two decades, the strongest moats in technology were built on external forces: network effects and economies of scale. Facebook worked because your friends were there. Amazon dominated because its fulfillment network reached everywhere. Even LinkedIn keeps users not necessarily through customized personal utility, but because of its massive, hard-to-replicate network.

These lock-ins are structural and impersonal. They scale by aggregating people and infrastructure, not by understanding them.

Cognition is different. It's personal, cumulative, and aligned with you. It doesn't depend on external scale, but on engagement. Unlike network effects, which can often create one dominant ecosystem per category, cognitive effects create millions of microsystems—one per user.

Cognition goes beyond memory. It's about recognizing patterns, inferring intent, anticipating needs, and assembling experiences so intuitive that leaving feels like self-sabotage.

> The product that knows you best doesn't just win your business—it wins against future businesses, because no one else can replicate the cumulative context and predictive intelligence.

We're already seeing cognitive moats emerge. Google Maps anticipates destinations and adapts to routines. Spotify's Daylist reads mood and time. Oura predicts health changes before users notice. Their retention metrics speak volumes: Oura keeps 95% of users, Spotify's premium retention holds at 85%.

We can have Spotify-like relationships across every category—health, finance, learning, connection, commerce—where cognition compounds understanding and loyalty over time.

**Why Now: The Convergence Moment**

Three shifts have converged to make this moment ripe for products built around cognition: technology maturity, user readiness, and an aligned value exchange.

The technology is ready. Large language models and intelligent agents can now retain and apply information across contexts at unprecedented levels. Hybrid systems combining vector databases and knowledge graphs update memory intelligently and retrieve long-term relationships across millions of interactions. Edge processing enables real-time reasoning with secure, personal context. What was research five years ago is now infrastructure available to anyone building a product.

Users are ready. After years of forgetful apps and shallow personalization, consumers are hungry for continuity. They've experienced moments of magic—Netflix recommendations that just work, Oura insights that anticipate their needs—and they want that feeling everywhere. They don't want to program agents; they want agents that simply understand.

The business model is aligned. When users opt out of tracking, they're not rejecting personalization—they're rejecting misaligned incentives. Subscription and privacy-first models have normalized paying for experiences that protect personal data while delivering true value. Companies that safeguard what they learn—and use it to predict intelligently—will earn durable trust.

Together, these shifts create a once-in-a-generation opportunity: a new kind of user contract, not based on scale or lock-in, but on earned understanding that can't be replicated elsewhere.

**The Art of Cognitive Design**

Every company today stores data and personalizes experiences. But cognition is the next frontier: the ability to stitch memory, intuition, and prediction into something that feels like partnership.

Cognitive products move along a gradient of understanding. Each level requires deeper reasoning about causality, context, and intent. The best companies design for anticipation from day one, progressing up this slope with nuance and care.

A few key principles define this craft:

Bring customers along. Unexpected predictions can feel eerie if right, and frustrating if wrong. Contextual ones feel magical. The goal is to predict in ways that feel natural, not invasive—insights that arrive at precisely the right moment with precisely the right framing.

Show your work—selectively. Know when consumers need to see how the system works so they can trust and understand it. Reveal the "why" during trust-building; hide the mechanics during habit formation. It's not about transparency versus mystery—it's about knowing when users need each.

Depth beats breadth. It's better to predict one thing perfectly than many things passably. Focus on the causal patterns that matter most and frame uncertain insights as suggestions, not absolutes. Master the narrow use case before expanding.

This is the art form of cognitive effects. There's no set playbook—judgment and timing are part of the moat itself. The companies that master this balance will feel simultaneously reliable and almost alive.

**Building the Cognitive Moat: Why Startups Win**

Incumbents have scale and distribution, but they're constrained by architecture and incentives. Apple's on-device intelligence is powerful but fragmented. Google's data ecosystem is vast but limited by ad-driven models. Microsoft's Copilot is confined within enterprise boundaries.

Startups, by contrast, have the freedom to design cognition from the ground up, with user alignment as the default.

> In this era, vertical mastery beats horizontal expansion.

A general agent that tries to do everything will lose to a product that understands one domain in exquisite detail. Depth builds trust, and trust fuels data richness. A fitness app that perfectly times your recovery beats a general productivity tool that tacks on wellness. A shopping assistant that understands microtrends, flattering fits, and taste nuance will outperform a universal commerce aggregator.

Excellence at the edge—the places of deep subjectivity and personal nuance—is where cognitive effects can compound fastest. That's where the magic happens.

The economics make this inevitable. Network effects compound through scale. Cognitive effects compound through understanding.

Each interaction sharpens intelligence. Better predictions drive retention; retention creates more data; more data improves predictions. That virtuous cycle accelerates value per user without depending on external growth. The product becomes more irreplaceable the longer it's used.

Since cognitive effects shift compounding from external to internal—from owning the network to understanding the individual—they have the potential to compound much faster than traditional software. Where network effects require you to acquire millions of users to achieve dominance, cognitive effects allow you to become irreplaceable to each individual user independently. The moat deepens with time, not just with scale.

This changes everything about how venture outcomes are built.

> The path to defensibility no longer requires winning the entire market first. You can build an unassailable position one user at a time.

**The Next Platforms: Where This Leads**

The companies mastering cognitive effects today are building toward something larger—a fundamental restructuring of how software understands us.

If this decade's winners turn memory into cognition, the next decade's winners will make cognition portable.

Today, our apps operate as isolated silos of intelligence. Each one remembers a narrow part of our lives. But users will expect this memory layer—their rich contextual history—to travel securely and privately between services.

Imagine a connective tissue for personal intelligence: a Portable Cognition OS that manages identity, context, and understanding across every app. Think of it as what Plaid did for fintech, but for the mind.

Your health app's insights could inform your calendar. Your learning platform could shape your work routine. Your assistant could draw on patterns from all of them. Memory, made portable.

Someone will build this. A company that coordinates how systems understand people won't just power the next generation of applications—it will redefine how technology molds to us.

When memory flows across the tools we use, cognition becomes the defining art.

> Memory becomes a commodity, while assembly and refinement of experience becomes the differentiator.

The winners won't be those with the most data, but those who orchestrate understanding most elegantly.

**Investing for a More Cognitive World**

For twenty years, we built software that required us to adapt to it: The next era inverts this completely.

At Forerunner, we're investing in products that make life run smoother, smarter, and more human by placing cognition at the core.

We see opportunities across productivity, health, commerce, learning, and creativity: categories where anticipatory intelligence compounds trust and habit. We're equally focused on the infrastructure enabling it: secure personal context stores, long-term memory APIs, dynamic retrieval systems, and reasoning frameworks. These are the connective layers that the next generation of consumer products will depend on.

For twenty years, we built software that required us to adapt to it: learning its commands, navigating its menus, bending to its logic.

The next era inverts this completely. Imagine a world where your tools don't just respond but anticipate. Where technology doesn't demand your attention but protects it. Where software doesn't make you feel productive but makes you feel understood.

That world isn't science fiction. It's being built right now, one cognitive layer at a time, by founders who understand that the future belongs not to those who aggregate the most users, but to those who understand each user most deeply.

The best products of the next era won't wait for you to tell them what you need. They'll already know. And in knowing, they'll give us something we've never had from technology before: the feeling that it's finally on our side.

‍`,
  },
  {
    slug: "investing-in-agentio-building-the-agentic-marketplace-for-creator-media",
    title: "Investing in Agentio: Building the Agentic Marketplace for Creator Media",
    date: "November 18, 2025",
    year: 2025,
    author: "Eurie Kim",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "Agentio",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agentio-Nev5qyV0zHmSbm960wD22N2JZmxfsH.png",
    excerpt: `Two things are unequivocally true about marketing today: 1) it is changing, fast, with the decline of traditional search and rise of new discovery mechanisms, from conversational AI interfaces to...`,
    content: `Two things are unequivocally true about marketing today: 1) it is changing, fast, with the decline of traditional search and rise of new discovery mechanisms, from conversational AI interfaces to TikTok trends, and 2) in a world of increased automation and AI-generated content, real, human connection with creators and communities becomes all the more important — and influential.

When people find new products through the people they follow, and people they trust — YouTube reviews, Instagram stories, and TikTok loops become far more effective drivers of purchase intent than traditional digital ads. That means creators aren’t just influencers, they’re tastemakers, community stakeholders, and powerful distribution engines for modern brands.

That drove us to lead the series B for [Agentio](https://www.agentio.com/), the AI‑powered creator marketplace that’s transforming how brands run creator campaigns across social channels.**Agentio’s Approach:**For more than a decade, influencer and creator marketing has been hailed as the next big channel. But while it’s grown into a multi‑billion‑dollar global force, it’s remained fragmented and inefficient. Brands have long relied on manual outreach, spreadsheets, or agency intermediaries to manage creator partnerships, making it tough to scale. 

Agentio changes that equation. The platform automates everything from intelligent matching between brands and creators to creative reviews, payment processing, and measurement analytics. This turns what was once a bespoke, ad-hoc workflow into a repeatable, structured performance channel. 

We were drawn to the network effects inherent in this model: every new brand that joins the platform attracts more high‑quality creators, improving matching speed and campaign outcomes. As those creators succeed, they bring new brands into the fold, creating a compounding loop of growth. Agentio’s revenue model, which takes a percentage of ad spend rather than charging fixed SaaS fees, aligns its incentives directly with performance. The more successful its brands and creators are, the more successful Agentio becomes.

The company’s thesis is straightforward, yet powerful: AI enables a true marketplace for creator advertising that can rival Google and Meta’s ad platforms in precision, measurement, and outcomes. 

**Proof in Performance:**Agentio’s early traction speaks volumes. In just over a year, creators have joined in the thousands, finding a platform that respects their time and ensures fast, reliable payment. Brands using Agentio consistently cite it as one of their top-performing channels, often outperforming traditional digital ad platforms on customer acquisition cost.

The stories behind these numbers are even more compelling. Take Bombas, which scaled creator‑driven spend by more than 300% in under a year while doubling CAC efficiency, or Tecovas, which saw remarkable lifts in awareness and purchase intent. Across verticals, from personal care to pet food to apparel, Agentio is proving that creator media can deliver performance that rivals or exceeds paid social.

**The Bigger Picture:**We believe creator‑driven media is entering its next chapter. What began as a fragmented ecosystem of one‑off partnerships is becoming a scalable, measurable performance channel. As AI reshapes the broader marketing landscape, the need for creative that feels authentic, human, and trustworthy will only grow. Agentio sits at that intersection: a technology platform that amplifies human creativity.

Much like how AppLovin unlocked the mobile app advertising market by providing the optimization layer that made spend scalable, Agentio is poised to do the same for creator media. We couldn’t be more excited to partner with the Agentio team on this journey.

‍`,
  },
  {
    slug: "our-source-of-truth-on-prosumer-software",
    title: "Our Source of Truth on Prosumer Software",
    date: "November 18, 2025",
    year: 2025,
    author: "Forerunner Ventures",
    authorTitle: "",
    category: "Research",
    company: null,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prosumer-zkP0UKpAtIf4ZlPbjywbQEkkTQHiMh.png",
    excerpt: `Around the early 2010s, software moved well beyond the workplace and into our personal lives, accelerated by a range of consumerized business applications and new platforms that popped up designed...`,
    content: `Around the early 2010s, software moved well beyond the workplace and into our personal lives, accelerated by a range of consumerized business applications and new platforms that popped up designed specifically to blend personal and professional use cases. ChatGPT, Notion, Slack and Canva are now mainstays on many consumers' phones, alongside DoorDash, Waymo, and WhatsApp. 

Given this mindshare (and market share), we put the Prosumer category to the test by analyzing a wide range of public and private companies, which now make up the $90-120B Prosumer market.

##### We traced prosumer's evolution through four distinct waves:

- Wave I: Bundled licenses, local storage (Microsoft Office era)
- Wave II: Subscription models, cloud adoption (Dropbox, Asana)
- Wave III: "Best of" point solutions, product-led growth (Slack, Zoom, Notion)
- Wave IV: AI-powered platforms, usage-based pricing (ChatGPT, Cursor)

##### The research tells a compelling story:

- Prosumer companies match Consumer Tech performance at IPO
- Wave IV companies already show 3x higher willingness to pay ($78 vs $25 median price point)
- Over half of consumers use prosumer software in their personal lives 

See our full report for the analysis on business performance, new up-and-comers, common prosumer business plateaus, and our new Prosumer Scorecard for evaluating these companies across eight of the most critical factors.

One key takeaway: In an AI-native world, prosumer companies that solve for previously impossible workflows while building true platforms — not just features — will capture the next wave of value.`,
    downloadUrl: "https://cdn.prod.website-files.com/67bafd4e267713b0ed137fd8/690269964e6db226d3a155f3_Forerunner%20Research_%20Our%20Source%20of%20Truth%20on%20Prosumer.pdf",
  },
  {
    slug: "from-ring-to-revolution-oura-becomes-an-11-billion-company",
    title: "From Ring to Revolution: Oura Becomes an $11 Billion Company",
    date: "October 14, 2025",
    year: 2025,
    author: "Eurie Kim",
    authorTitle: "Partner",
    category: "Theses",
    company: "Oura",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oura_FV%20Navy-CTeDNyHCCxQ5LRolQTWYwp6X0QtThj.svg",
    excerpt: `On Track for $1 Billion in Revenue in 2025, Oura Reaches New Heights in Proactive Health At Forerunner, we've always believed the most enduring, generation-defining businesses emerge when shifting...`,
    content: `*On Track for $1 Billion in Revenue in 2025, Oura Reaches New Heights in Proactive Health *At Forerunner, we've always believed the most enduring, generation-defining businesses emerge when shifting consumer needs collide with breakthrough technology, paving the way for new dimensions in how people engage with their lives, their personal data, and ultimately themselves.

Few domains embody this collision more powerfully than health—the most fundamental aspect of human experience that has, until recently, remained largely opaque and reactive. For most of history, we've navigated our health through delayed signals and external expertise, with limited visibility into the real-time patterns that drive how we feel, perform, and recover. In other sectors of our lives, such as commerce, communications, and transportation, technology has enabled us to be informed and proactive. The most critical area of our lives, health, is a more complicated feat for sure — but undoubtedly one of the most important opportunities of our time.

Oura has met this opportunity in a way few believed could be possible. Today, we celebrate a milestone that few saw coming: 5.5 million rings sold, $1 billion in revenue for 2025, and a $900M Series E at an $11 billion valuation. 

When we first led the series B over five years ago, Oura was a ~$20M Finnish startup beloved by biohackers, but largely unknown to the world. Today, Oura is the definitive answer to healthcare's fundamental challenge: how can we shift from reactive sick-care to proactive well-care through some of our most critical daily routines?

**The Big Bet: Sleep as the Foundation for Health**What differentiated Oura from the beginning wasn't just the elegant titanium hardware, though it was the only biometric tracker in a ring form factor at the time. The real differentiator from existing incumbents like Garmin and Fitbit was Oura’s bold, contrarian bet that the key to health is not actually more activity; the key to health is Sleep. One stat from Oura’s original pitch deck crystallized everything: less than 5% of the population exercises regularly, but 95%+ sleep every night. Oura was invented to help the 95% of the population who want to be healthier too. 

While the wellness world focused on easier metrics like step counts and basic heart rate, Oura invested a decade in hardcore science: validating our technology against gold-standard polysomnography, building multi-sensor hardware that could capture not just heart rate but also heart rate variability and temperature fluctuations with medical-grade precision, and of course, engineering a unique ring form factor comfortable enough for 24/7 wear. Let’s not forget the long battery life, which made this ring a no-brainer to seamlessly incorporate into daily life. 

Oura is the champion of what was once a lesser-known but universally critical truth: Better Sleep = Better Health. 

Whether you're an athlete tracking recovery and readiness, an employee or student simply trying to feel better tomorrow, or someone wanting to live longer, and better — the path forward is the same: start with a better night's sleep.

**From Cult Following to Global Health Platform**In the early days, Oura was the cult ring spotted on celebrity fingers – Prince Harry, Tom Brady, Jack Dorsey, Jennifer Aniston – creating the kind of buzz that money can't buy (and that we didn’t buy!). But we never set out to build a celebrity accessory. The vision was always universal: everyone, from a frontline worker to a postpartum mother, an active hobbyist, and a grandmother, wearing a ring to understand their bodies better and get actionable insights to improve their health.

The numbers tell the story of this vision becoming reality: 

- 50x revenue growth since 2019
- A profitable hardware-plus-membership model.
- 51% of users are managing chronic conditions, 11% being healthcare providers themselves
- 5.5+ million rings sold and lives improved

When the U.S. Department of Defense deploys rings to service members for fatigue tracking, when healthcare systems enable people to integrate their data into clinical workflows, when pregnancy and metabolic health features drive mainstream adoption—you know you've moved beyond “wearable tech” to becoming an essential part of people’s lives. 

**The Inflection Point: Category Definition Requires Bold Leadership**As early-stage investors, we look for ambitious founders who combine bold vision with disciplined execution—the rare ability to disrupt entire markets while building brick by brick. Finding this combination is hard enough. Finding it with proven leadership experience at scale? That is what’s lovingly called "the purple squirrel."

Tom Hale is a purple squirrel.

Bringing Tom in as CEO in 2022 was transformational. He had navigated this exact inflection point before, taking breakout companies from startup to scale, but Oura presented unique complexity: global operations spanning Finland and the US, business models crossing hardware, software, subscription, corporate partnerships, and scientific advancements, plus the challenge of scaling a beloved brand without losing its soul. We were growing beyond what our existing team and processes could handle.

Tom did exactly what great leaders do: he put out the bat signal and assembled a world-class team. [Michael Chapp](https://www.linkedin.com/in/michaelachapp/) remained the organizational glue while [Holly Shelton](https://www.linkedin.com/in/hollyshelton/) took the product reins on hardware and software. [Doug Sweeny](https://www.linkedin.com/in/dougsweeny/) came in for marketing and retail, [Dorothy Kilroy](https://www.linkedin.com/in/dorothy-kilroy-31671a21/) built our commercial partnership muscles, [Dr. Ricky Bloomfield](https://www.linkedin.com/in/rickybloomfield/) joined as Chief Medical Officer. The list goes on. Each powerhouse leader made executing our grand vision a reality.At this point, Oura wasn't just taking flight; it was an undeniable rocket ship.

**The Thesis Plays Out at Scale**What's most compelling about today's milestone is how it validates our original conviction. The hardware creates the data moat, the subscription model (now 20% of revenue and growing) drives recurring engagement and retention, and the ecosystem extensions—from women's health features to HSA/FSA eligibility to international expansion—prove the platform potential we saw from the beginning.

While other efforts chase features, Oura built something fundamental: the daily habit of health consciousness, powered by technology that actually changes behavior. Tom's recent comment about his "strongest quarter in 130 quarters of business" reflects a company with incredible economics at the center of an evolving cultural moment.

**The Starting Line, Not the Finish Line**This milestone represents something rarer than "decacorn" status—it's proof that the most important markets often hide in plain sight. For decades, health technology chased the dramatic: emergency response, surgical robotics, drug discovery. Oura proved the biggest opportunity was in the mundane: helping people understand why they feel tired, when they're getting sick, how last night's sleep affects today's—and tomorrow’s—performance.

We backed Oura because we saw sleep as the gateway to proactive, personalized, continuous health. But the future Oura is building isn't just better sleep tracking, it's a world where health insights are as immediate and actionable as checking your bank balance or the weather.

Oura’s $1 billion in revenue, 5.5+ rings sold, and $11 billion valuation is validation that we are actually still quite early in what’s possible. 

‍`,
  },
  {
    slug: "investing-in-outsmart-building-the-future-of-ai-powered-higher-education",
    title: "Investing in Outsmart: Building the Future of AI-Powered Higher Education",
    date: "September 30, 2025",
    year: 2025,
    author: "Eurie Kim",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "Outsmart",
    excerpt: `Some early-stage teams stop you dead in your tracks. A rare combination of deep operational excellence, a unique tenacity for building hard, mission-driven companies from scratch, and, perhaps most...`,
    content: `Some early-stage teams stop you dead in your tracks. A rare combination of deep operational excellence, a unique tenacity for building hard, mission-driven companies from scratch, and, perhaps most importantly, unparalleled founder-market fit that gives an early-stage team a disproportionate advantage.

That was exactly the case with [Outsmart](https://joinoutsmart.com/), which is on a mission to restructure one of our society’s most important yet rigid systems: higher education. Outsmart CEO and Cofounder [Jorge Mazal](https://www.linkedin.com/in/jorgemazal/)’s background reads like a mission statement for the company. He spent over five years leading product for Duolingo, most recently serving as Chief Product Officer, where he helped define and scale one of the most beloved, modernized approaches to learning that the tech industry has seen. But beyond this, his personal story gives him an unwavering passion for the opportunity. He grew up in Argentina, and by what felt like a stroke of pure luck, had a visa approved for him to come to the US. Despite having no resources or connections, he applied to grad school and got into a Harvard/Wharton dual degree program in Education Policy and Business. He thought he'd won the golden ticket—a life in America with access to some of the most prestigious institutions the nation has to offer.Yet, when Jorge graduated $250,000 in debt with a growing family to support, the promise turned into a trap. He worked as a Product Manager at Zynga by day and collected garbage in apartment complexes before dawn to make ends meet. Jorge quickly came to understand that higher ed was not set up to serve people like him: those without financial support and privilege, despite hustle and talent. Even doing everything "right" had led him here.

At Forerunner, we back generational companies that will solve fundamental human needs. No need is more universal than the right to learn—to access knowledge that unlocks careers and reshapes life trajectories. Yet higher ed has become one of the more polarizing systems in modern life, pricing millions out of opportunity while delivering increasingly questionable returns for those who can afford it. Traditional universities operate on century-old models: fixed schedules, one-size-fits-all curricula, geographic constraints, and costs that require either family wealth or lifelong debt. The breakage is glaring:

- Tuition is up 160% in 25 years
- There’s $1.7 trillion in outstanding student debt
- Over 40% of recent graduates are underemployed
- 36 million college dropouts are carrying debt they can't repay 
- Only 36% of Americans trust higher education, a 12-point drop since 2018
- The sector is in the crosshairs politically, with funding being pulled and DEI policies challenged

This isn't just broken, it's getting worse. Millions work multiple jobs, take on crippling debt, or abandon college altogether — not for lack of talent, but because the system wasn't built for them.

To date, alternatives haven’t been much better. Online programs lack accreditation. Bootcamps teach skills without credentials. Community colleges offer access but struggle with completion rates. The market has produced scattered solutions, making notable yet incremental progress. Nothing has fundamentally reimagined what's possible when you combine legitimate academic credentials with technology that actually understands how individuals learn.

Jorge has assembled a wildly impressive team to deliver on the potential of what a truly modernized, AI-powered higher ed system can be. His cofounders are past Duolingo executives [Gina Gotthilf](https://www.linkedin.com/in/ginafrombrazil/) (former VP of Marketing and Growth) and [Daniel Falabella](https://www.linkedin.com/in/danielfalabella/) (former GM and VP of Product), who are Outsmart’s CMO and CPO, respectively. They are joined by former operators from PayPal, TikTok, Netflix, and more, all bought in on building a new higher ed model that’s dramatically more accessible and relevant to how people live and work today.Outsmart is still early and operating in stealth, but when it launches in 2026, it won’t be about replacing elite education. It’ll be about expanding access to the millions who've been locked out, and powering new modalities with true personalization, infinite patience, 24/7 availability, and the ability to serve millions without diluting quality. 

Ultimately, Outsmart will build the infrastructure to power human potential, making quality education an accessible reality for everyone. We’re proud to back this ambitious founding team that’s reinstating the very promise of higher education: one where drive and talent can unlock infinite opportunity.

‍`,
  },
  {
    slug: "doubling-down-on-amplifymd-powering-the-future-of-hybrid-healthcare",
    title: "Doubling Down on AmplifyMD: Powering the Future of Hybrid Healthcare",
    date: "September 29, 2025",
    year: 2025,
    author: "Eurie Kim",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "AmplifyMD",
    excerpt: `We're excited to announce that we’ve led AmplifyMD's $20M Series B, alongside F-Prime, Greylock, and strategic partner Memorial Hermann Health System. This marks our second time leading an AmplifyMD...`,
    content: `We're excited to announce that we’ve led AmplifyMD's $20M Series B, alongside F-Prime, Greylock, and strategic partner Memorial Hermann Health System. This marks our second time leading an [AmplifyMD](https://amplifymd.com/) funding round—we co-led their seed in 2021, and the dramatic evolution o
f their business since then validates everything we believed about their potential to transform healthcare.**From Rural Access to Universal Healthcare Resourcing Challenges**When we first invested in AmplifyMD four years ago, it was the depths of the pandemic, and we were compelled by their mission to connect rural hospitals with medical specialists to address the critical shortage of specialized care outside major urban centers. It just wasn’t acceptable that outside of major metro areas, families couldn’t get the specialist care they needed without driving hours to their closest larger city. What the team has further discovered since then is that the healthcare resourcing challenge extends far beyond geography. Every health system in America is struggling with limited provider capacity, rising operational costs, and increasing demands to deliver higher-quality care with fewer resources.

With the current strains and shortages, health systems cannot afford to transfer patients, lose revenue, or operate with fragmented virtual care solutions that create more administrative burden than value. AmplifyMD caught our attention initially because they understood this wasn't just about telehealth; it was about reimagining how health systems deploy their clinical resources across any setting.

**Consumer-Centric Thinking Applied to Healthcare Operations**Forerunner’s investment thesis has always centered on putting the consumer at the heart of how companies operate, across industries and regardless of whether they're B2C or B2B. In healthcare, the "consumer" is ultimately the patient, but the path to better patient outcomes runs through better provider experiences and more efficient health system operations.

AmplifyMD exemplifies this approach. Their EHR-integrated platform doesn't just enable virtual consultations, it reshapes how health systems think about resource allocation, turning limited provider capacity into systemwide coverage across multiple locations. By automating workflows and intelligently distributing clinical expertise across multiple sites and departments, they're creating better experiences for providers while dramatically improving patient access to specialty care.

**Thesis Validation Through Real-World Impact**This Series B investment validates our long-term conviction that healthcare's future lies in platforms that enhance rather than replace existing clinical workflows. When we co-led AmplifyMD's seed round in 2021, we saw the potential for their three-pronged approach: a network of specialists, hardware-agnostic software enabling real-time remote consults, and compliance automation that reduces administrative burden.

Four years later, AmplifyMD's 300+ programs across health systems nationwide prove that our thesis was correct, but the opportunity was even bigger than we recognized. What started as a solution for rural hospitals has evolved into infrastructure that all health systems need, regardless of geography.

CEO Meena Mallipeddi and her team have built something transformative: a platform that turns virtual coverage from a cost center into a sustainable operational advantage. AmplifyMD isn’t just introducing another software layer for health systems to manage; it’s becoming the connective tissue that makes existing resources work harder and smarter. While the business has evolved dramatically since our initial investment, the core vision is unchanged: making essential specialty care accessible whenever and wherever patients need it.

AmplifyMD is now positioned to scale its model across the country, helping health systems deliver consistent, high-quality care while building sustainable coverage models that will drive healthcare's future. We're proud to continue partnering with them on this mission-critical work.`,
  },
  {
    slug: "investing-in-koah-recreating-ads-rails-for-the-ai-era",
    title: "Investing in Koah: Recreating Ads Rails For the AI Era",
    date: "September 9, 2025",
    year: 2025,
    author: "Nicole Johnson",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "Koah",
    excerpt: `With most new tech waves, consumers tiptoe in, needing time to warm up before adoption. But with AI, they’ve already blazed past the tipping point. Over 700 million people use ChatGPT weekly; teens...`,
    content: `With most new tech waves, consumers tiptoe in, needing time to warm up before adoption. But with AI, they’ve already blazed past the tipping point. Over 700 million people use ChatGPT weekly; teens are naming their AI companions, moms are meal-planning with AI, and shoppers, students, and savers are collaborating with agents every day. This time, it’s not tech pulling consumers along—it’s consumers pulling the demand curve forward. 

New companies are popping up each day to meet this generational opportunity, and scaling rapidly. But, the elephant in the room for Consumer AI is monetization. The going standard is subscription, but that can quickly lead to fatigue and churn with a pile-up of new monthly fees for consumers across AI research tools, fitness coaches, and friendly companions they never budgeted for. Multiple revenue models in the Consumer AI space are an inevitability, and if the past decades of internet services are any indicator, ads will play a major role.

**We invested in **[**Koah**](https://www.koahlabs.com/)** because of the team’s mission to become the essential monetization layer in Consumer AI, reshaping how ads work for conversational AI interfaces**. The platform enables any chat-based consumer AI company to become an ad publisher and serve highly relevant ads within the context of ongoing conversation flows. In turn, businesses can ensure their products are surfaced within the modern consumer discovery experience — a place of inherent productivity, where people are actively looking for recommendations and answers. The result is ads that are seamless and native to the UX — instead of interruptive — and actually helpful and relevant, personalized based on rich intent data from conversation history, as well as LLMs. This unlocks a new class of performance advertising that blends the contextual relevance of search with the native feel of social, but embedded seamlessly within chat-based discovery experiences.

Koah’s early traction shows the sheer impact of this approach:

- 7.5% click-through rate, about 4x the industry average
- 4-5x better CPMs than Google AdMob and Apple Search Ads
- A publisher network that today represents over 80 million global users

Koah’s arrival is in the midst of a foundational shift in advertising. For the last two decades, advertising has been dominated by search, social, and display — all of which are optimized around static interfaces, clicks, and legacy behavioral data. But now that AI agents have redefined how people discover, evaluate, and make purchasing decisions, consumers often complete their entire discovery journey within a single AI app session. Precious potential ad inventory, indeed.

Despite this shift, the $1T+ global ad industry spends virtually nothing on this emerging surface area — because the traditional advertising stack doesn’t work here. As a result, popular AI apps are left without viable monetization, and advertisers have no scalable way to reach users in this new attention layer.

Koah fills that gap, and the founding team is uniquely positioned to take this on. Cofounders Nic, Herrick, and Mike launched a production-ready product within a month, shipping new formats every 2–3 weeks, and then lined up an eye-popping volume of pipeline while still pre-product. They have the scrappiness, smarts, and hustler mentality that embody success at the early stage.

With consumer AI adoption surging worldwide, we’re proud to partner with Koah as they build the infrastructure to monetize this generational shift.

‍`,
  },
  {
    slug: "investing-in-basic-capital-rewriting-the-rules-of-wealth-building",
    title: "Investing in Basic Capital: Rewriting the Rules of Wealth-Building",
    date: "August 18, 2025",
    year: 2025,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: "Investment Announcements",
    company: null,
    excerpt: `A 28-year-old nurse in Denver who maxes out her 401(k) every year will retire with roughly $900,000 after 35 years of diligent saving. Her colleague earning the same salary, but able to safely...`,
    content: `A 28-year-old nurse in Denver who maxes out her 401(k) every year will retire with roughly $900,000 after 35 years of diligent saving. Her colleague earning the same salary, but able to safely finance five times larger contributions, will retire with over $2.3 million. That $1.4 million gap isn’t about financial literacy or discipline, it’s about access to capital.

This is America’s ownership crisis in microcosm. Forty percent of Americans own no financial assets whatsoever, not because they don’t want ownership, but because they’ve been systematically locked out by timing and capital constraints. Basic Capital exists to eliminate that barrier.

**A New Kind of Access**Basic Capital’s ambition is audacious. The company aims to become the financial infrastructure that democratizes wealth-building at scale. They’re not just building a retirement product, they’re laying the foundational rails to close America’s ownership gap, starting with the $35 trillion retirement market but designed to extend far beyond it.

They’ve built what is essentially a “mortgage for retirement”—a financing structure that lets people contribute up to five times more to their retirement accounts, without personal liability or margin risk. This is not speculative trading. It’s structured financing, vetted by retirement and securities lawyers, and invested in diversified portfolios built for long-term compounding. For users, the experience is elegantly simple. Underneath, it’s a sophisticated orchestration layer connecting payroll systems, retirement custody, regulatory compliance, and institutional capital markets.

*“A small shift in access to capital can mean the difference between anxiety and security.”*Consider Maria, a 35-year-old teacher who earns $55,000 and can barely afford to contribute $200 monthly to her retirement. Through Basic’s financing, she can effectively contribute $1,000 monthly while maintaining the same cash flow. Over 30 years, that transforms a $240,000 retirement nest egg into over $1.2 million, the difference between financial strain and true stability. Or think about the 26-year-old software engineer who knows compounding works best when you start early but is paying off student loans. Basic gives her the power to act immediately, borrowing against future gains the way homeowners build equity over time.

**The Moment Has Arrived**The bottom half of American households own less than one percent of equities, not because they don’t want ownership, but because they’ve been locked out by timing and capital constraints. Basic Capital changes that equation fundamentally.

The moment for this change has arrived. A perfect storm of cultural, behavioral, and regulatory shifts is making Basic Capital’s model possible. Wealth inequality has reached levels not seen since the 1920s, and younger generations increasingly view traditional wealth-building timelines as inadequate for their reality. They’re not afraid of leverage, they’re afraid of missing out on wealth creation while they wait decades to catch up.

*“They’re not afraid of leverage, they’re afraid of missing out on wealth creation.”*Early traction shows this is more than theory. Over 90 percent of users opt into financing when offered. This isn’t reckless speculation—it’s calculated empowerment by financially literate professionals who understand that productive leverage, properly structured, is how wealth gets built.

**Traction You Can Measure**Market and regulatory conditions have aligned. President Trump’s recent executive order “Democratizing Access to Alternative Assets for 401(k) Investors” recognizes that “more than 90 million Americans participate in employer-sponsored defined-contribution plans, yet the vast majority of these investors do not have the opportunity to participate in the potential growth and diversification opportunities associated with alternative asset investments.” The administration is actively working to remove barriers that have denied Americans access to the same investment opportunities available to the wealthy and to institutions. This regulatory tailwind, combined with capital markets opening to retail investors, private credit yielding attractive spreads, and fintech infrastructure maturing to support complex flows at scale, creates an unprecedented moment for Basic’s approach. What would have been prohibitively complex to build and maintain just a few years ago is now technically feasible at scale.

The results speak for themselves. In just months, Basic has onboarded 12 employers across sectors from healthcare to technology, welcomed over 800 active users, and built a waitlist exceeding 5,000. That 90 percent-plus financing opt-in rate isn’t just impressive, it’s proof of product-market fit for a fundamentally new category. The business model is diversified across admin fees, asset-based fees, and financing spreads, with a clear path to profitability within 30 months.

**The Team to Build It**This team was built for the challenge. Founder and CEO Abdul Al-Asaad’s life story reads like the mission statement itself—from a Syrian refugee camp to Goldman Sachs’ distressed credit desk, where he structured complex financial instruments, to Harvard Business School as an Arthur Rock Scholar. His journey from displacement to the pinnacle of American finance embodies the pathways to wealth that Basic aims to democratize. He’s surrounded by seasoned operators from Stripe, Uber, Robinhood, and Square—engineers and designers who’ve scaled regulated consumer finance platforms and understand that building trust requires both regulatory rigor and elegant user experience.

At Forerunner, we invest in companies that create structural behavioral change in how people live, work, and build wealth. Basic Capital represents exactly that transformation. They’re starting with retirement savings, but their infrastructure is designed to extend across the full spectrum of personal wealth-building. We see a future where Basic becomes the foundational layer connecting individuals to capital opportunities, transforming how Americans build wealth over their lifetimes.

**A Future Without Timing Limits**This is a bet on a future where the accident of timing—when you start earning, when you can afford to save—doesn’t determine your financial destiny. It’s a vision where the single mother working two jobs can build generational wealth alongside the investment banker. Where your twenties become the decade you accelerate toward financial freedom, not the decade you struggle to get by.

*“The wealthy have always used leverage to build wealth faster. Basic Capital is democratizing that advantage.”*And we couldn’t be more excited to help them rewrite the rules of American wealth-building.

‍`,
  },
  {
    slug: "the-sports-fan-revolution-why-were-betting-on-jump",
    title: "Investing in Jump: Why We're Betting on the Sports Fan Revolution",
    date: "August 12, 2025",
    year: 2025,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: "Investment Announcements",
    company: "Jump",
    excerpt: `Sports have always been about passion, connection, and belonging. But in a $100+ billion live entertainment industry, even the most loyal fans are treated like strangers. Whether you’ve spent $50,000...`,
    content: `Sports have always been about passion, connection, and belonging. But in a $100+ billion live entertainment industry, even the most loyal fans are treated like strangers. Whether you’ve spent $50,000 a year on season tickets or you’re buying your very first seat, the experience is largely the same: generic, transactional, and impersonal — and often, riddled with inefficiencies and predatory fees.

[Jump](https://jump.com/) is here to change that.**From Transactions to Relationships**Jump’s vision is audacious: to become the AI-powered operating system for sports teams, artists, and venues worldwide to engage and delight fans. They’re restructuring the fan experience from the ground up, moving beyond static ticketing into a connected, personalized ecosystem that brings fans closer to the experience and talent they love, and helps teams truly nurture the relationship.

This is the sports industry’s Shopify moment. A shift from a patchwork of fragmented, legacy systems to an integrated platform that enables deep, direct-to-fan engagements, ultimately unlocking new revenue streams, richer experiences, and enduring loyalty.

Jump lets teams and venues do what legacy systems can’t:

- Create multi-game bundles, unlock last-minute seat upgrades for fans, send targeted in-app messages, and reward fans with credits — all based on real fan data. 
- Whitelabel ticketing websites connect seamlessly with league websites for a smooth and simple fan journey
- Offer a single team login, as well as a unique fan wallet. 

Ultimately, Jump’s end-to-end fan journey across content, ticketing, resale, and in-venue experiences makes the event experience as dynamic as the game itself.

**Why This Matters, Why Now**At its core, this is about the fan who saves for months to attend one game and deserves to be recognized. The family of four seeking a seamless, joyful day out. The die-hard who never misses a match and should be rewarded for their devotion.

Today, the average five-person e-commerce shop has a more sophisticated understanding of its customers than most multi-billion-dollar sports franchises. Jump’s AI-driven platform flips this on its head, ensuring every interaction is meaningful, every experience elevated.

Four forces make this the perfect moment for Jump’s approach:

- **A new wave of ownership** — Tech-forward sports owners expect the same data-driven tools they use elsewhere.
- **AI transformation** — From pricing optimization to targeted fan engagement, Jump’s agentic AI doesn’t just assist teams, it performs the work.
- **Frustration with incumbents** — High-profile failures have eroded trust in monopolistic players, creating an opening for innovation.
- **Market fragmentation** — Teams currently juggle dozens of disconnected tools. Jump offers one platform to unify the entire fan journey.

**A Fast Lead, A Team to Win**Jump is already working with teams across the NBA, WNBA, MLB, NWSL, and USL. Early adopters call their back-end “the best I’ve ever seen,” fan ratings average 4.8/5 stars, and stadium entry experiences are described as “the smoothest ever.”

Our investment thesis ultimately comes down to people, both as it relates to the customer and the team. We have worked with Co-founder and CEO Jordy Leiser before, and have deep conviction in his ability to attract top talent and execute on complex technical challenges, which is already being proven. Out of the gate, Jordy and Jump’s mission and ambition have attracted talent from across industries — they have assembled a world-class team combining seasoned industry experts from Ticketmaster, SeatGeek, and AXS, with innovative talent from Amazon, Facebook, and Spotify. This unique blend of domain expertise and technical excellence creates the perfect foundation for challenging an industry overdue for change.

**The Bigger Play**Jump isn’t chasing a single-point solution.. The $14B global TAM is just the starting point. Sports is the beachhead, but the model can extend to concerts, festivals, and any live experience.

This is more than an investment in a SaaS company. It’s a bet on a new category, one where every fan interaction is personal, every team and artist has the tools to deliver, and the live entertainment experience finally matches the passion it inspires.

We’re thrilled to back Jordy and the entire Jump team as they lead this transformation. The revolution starts now. The fans deserve nothing less.`,
  },
  {
    slug: "investing-in-novig-the-top-peer-to-peer-sports-prediction-marketplace",
    title: "Investing in Novig: The Top Peer-to-Peer Sports Prediction Marketplace",
    date: "August 11, 2025",
    year: 2025,
    author: "Fawzi Itani",
    authorTitle: "Principal",
    category: "Investment Announcements",
    company: "Novig",
    excerpt: `The past few years have revealed a massive shift in how consumers treat money, from the rise of crypto assets and /wallstreetbets. Speculation has become entertainment. This relatively new behavior...`,
    content: `The past few years have revealed a massive shift in how consumers treat money, from the rise of crypto assets and /wallstreetbets. Speculation has become entertainment. This relatively new behavior is what we’re calling ‘social gaming’, a blend of financial wagering, competition, and community.

The longevity of some trend-driven examples, such as NFTs and GameStop frenzy, is debated, but the staying power of the underlying consumer behavior is clear, and the evidence is everywhere. $TRUMP coin reached a $70b fully diluted valuation within 24hours, while Phantom Wallet processed more than $1b in trades in a single day. Kalshi, a federally regulated prediction market, saw more than a billion dollars in election market volume in just thirty days. In the collectibles space, Pokemon cards continue to reach new peak prices on a near-daily basis, with the collectible platform Courtyard seeing over $50M worth of monthly GMV across its cards and comics divisions. 

Consumers are no longer just investing — they are playing, and markets have become a form of social interaction.

We believe sports are the ultimate arena for this behavior. They have consistent events, shared cultural stakes, and an inherent competitive structure. Yet the dominant sportsbook platforms like DraftKings and FanDuel still operate like traditional casinos. The economics are opaque, margins are high, and skilled traders are routinely banned, so instead people turn to informal bookies or offshore accounts to trade. There is still no true home for peer-to-peer sports trading in the United States.

Novig is changing that reality. The company is building the first zero-commission sports prediction exchange that combines transparency, fairness, and a highly engaging user experience. They have already scaled to $2b in annualized trading volume — less than a year since debuting the peer-to-peer marketplace — and continue to rapidly improve their product experience to drive new users at scale. 

Inspired by financial markets, the peer-to-peer model enables users to act as both price takers and price makers. The product sophistication supports institutional traders and market makers, high-frequency users, and casual users alike, making it a truly dynamic marketplace. This is in contrast to the rest of the predictions industry, where sportsbooks and betting platforms act as the house, controlling odds, capping wins, and profiting by betting against users. Novig’s ambition is clear: The company aims to become the NASDAQ of sports by removing fees, offering professional-grade trading tools, and creating a social environment.

None of this would be possible without founders Jacob Fortinsky and Kelechi Ukah, and a team that has more than doubled in size this year across engineering, legal, trading, and marketing. It’s rare to find a combination of ex-founders and professional sharps, engineers who can rattle off sports stats like they’re singing karaoke, and people who casually go to trading meetups for fun. They have built an exchange infrastructure that rivals high-frequency trading desks while maintaining a deep, nuanced understanding of both sports and consumer behavior. Their relentless focus on product velocity and regulatory sophistication has made Novig a formidable recent entrant into the market.

As Novig prepares for football season and the next chapter of expansion, its new capital and team momentum will cement Novig’s position as the most beloved, dynamic U.S. sports prediction exchange. 

‍`,
  },
  {
    slug: "investing-in-courtyard-a-modern-collectibles-experience-creates-a-marketplace-flywheel",
    title: "Investing in Courtyard: A Modern Collectibles Experience Creates a Marketplace Flywheel",
    date: "July 24, 2025",
    year: 2025,
    author: "Nicole Johnson",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "Courtyard",
    excerpt: `We’ve been tracking the rise of the collectibles space for a while, and it’s clear this isn’t just a passing trend. It’s a reflection of a broader, more durable shift: the blending of social,...`,
    content: `We’ve been tracking the rise of the collectibles space for a while, and it’s clear this isn’t just a passing trend. It’s a reflection of a broader, more durable shift: the blending of social, commerce, gaming, and entertainment into a new kind of interactive experience — especially for younger consumers. As social media has become less about true connection and more about passive media consumption, people are looking for new places to play, express themselves, and engage. Perhaps the best, most recent example is Labubu, an IP owned by $40b commerce giant PopMart and primarily sold as a “blind box” – every box has a chance of yielding a different type of Labubu, some rarer than others, which incentivizes collectors to buy multiple boxes until they can collect them all. More generally, the $500B collectibles market is experiencing a significant increase in interest driven by live sellers and new creators, and a proliferation of card shops & trade shows.

Courtyard fits squarely into these shifts by productizing an existing consumer behavior around “repacking” where sellers bundle products and grails they’ve already pulled into a mystery box experience. They also add a twist: for every card that is pulled out of their inventory, they offer an instant buyback at 90% of a product’s fair market value. Courtyard gives the mystery box a fun, trustworthy, and low-friction rendition, creating the first real-time, liquid marketplace of collectibles. This ultimately makes the space much more approachable to broader sets of consumers, because the experience feels more like a treasure hunt rather than a static experience.

‍

**A New Approach to Collectibles**Courtyard stands out as the first collectibles marketplace that’s actually designed to be liquid. That might sound like a small thing, but it’s a big unlock: it lowers the barrier to entry in a category that’s historically been tough to navigate — and it adds a level of stickiness that simply wasn’t possible before. This isn’t just incremental improvement; Courtyard is offering a fundamentally better product experience: real-time inventory, more transparency, de-risked outcomes, and a greater sense of fairness baked in at every level. This is made possible by:

- Instant liquidity, transparency, and fairness for all buyers
- In-house software that turns static assets into dynamic, revolving inventory, supporting sustained engagement
- A pricing and logistics moat that flips working capital into a virtuous flywheel

Together, these dynamics enable Courtyard to offer a much more full-featured experience that transforms collecting into a modern form of commerce and entertainment. 

‍

**The Product Wedge**Courtyard’s brilliance is in abstraction. Users don’t browse listings but instead buy “packs,” sight unseen, with cards stored and traded in a secure vault. This is layered with an entirely unique, new option to sell cards back to Courtyard right away at 90% of their fair market value if they don’t want what they get. This offers instant liquidity and derisks the outcome of being stuck trying to resell cards on various peer-to-peer platforms.

This simple UX — one click, one pack, immediate tradeability — unlocks liquidity across a fragmented, analog market. Unlike traditional marketplaces that rely on infinite SKUs and infinite demand, Courtyard focuses on repeatable, predictable transaction velocity. Average cards trade 6–15x on Courtyard before redemption, illustrating the sheer liquidity and flexibility for users in the marketing. Courtyard now buys tens of thousands of cards every month, making it arguably one of the world’s largest buyers.

Courtyard’s differentiated approach speaks for itself when you consider the growth: the company went from $50,000 in monthly GMV to $50M in monthly GMV in one year. The average card trades on Courtyard eight times per month, showing how this distinct approach has truly unlocked liquidity. Today, Courtyard primarily serves Pokemon and Sports, but recently expanded into comic books, which is already making up 22%+ of the business. With the stickiness of its unique liquid marketplace already proven out, new categories and sectors are on the horizon.

‍

**The Team To Win**Courtyard’s Co-Founders [Nicolas De Jeune](https://www.linkedin.com/in/nicolas-le-jeune/) and [Paulin Andurand](https://www.linkedin.com/in/pandurand/) built Courtyard after time at YouTube, Google Cloud, and Apple. What began as an NFT experiment became a flywheel rooted in physical inventory, where customers don’t even necessarily know or care that the platform is on the blockchain — they just care about the liquidity and fairness that’s afforded. Together, they have recruited a team that’s now building one of the fastest-growing collectibles marketplaces — with some categories and platform expansions on the horizon.Check out [Courtyard](https://courtyard.io/) today, and[ the new app](https://apps.apple.com/us/app/courtyard-io/id6748155184) — coming soon!‍`,
  },
  {
    slug: "investing-in-slingshot-a-new-modality-for-psychological-support",
    title: "Investing in Slingshot: A New Modality for Psychological Support",
    date: "July 22, 2025",
    year: 2025,
    author: "Nicole Johnson",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "Slingshot",
    excerpt: `Slingshot Unveils Ash, the First AI For Therapy With a Purpose-Built LLM For PsychologyToday, we're announcing that we're co-leading an investment in Slingshot as they unveil Ash, a true breakthrough...`,
    content: `*Slingshot Unveils Ash, the First AI For Therapy With a Purpose-Built LLM For Psychology*Today, we're announcing that we're co-leading an investment in Slingshot as they unveil Ash, a true breakthrough in scalable, high-impact mental healthcare.

**A Problem at a Tipping Point**One of the most important public interest stories of the last decade is our nation’s mental health crisis. The data makes this impossible to ignore:

- 1 in 5 U.S. adults (over 50M) experience a mental illness in a given year. (NAMI, 2023)
- In 2022, 28% of U.S. adults reported symptoms of anxiety or depressive disorder, nearly 3x the rate in 2019. (CDC Household Pulse Survey)
- More than 42% of Gen Z adults (ages 18–29) report being diagnosed with a mental health condition. (American Psychological Association, 2023)

The mental health support system we have in place to address these problems is under intense strain: the U.S. has only around 500K licensed behavioral health providers, but 56M Americans sought therapy in 2022. The upshot of this massive supply-demand gap is that 60% of people with a mental illness do not receive treatment (NAMI, 2023). Meanwhile, a 2025 [survey](https://sentio.org/ai-blog/ai-survey) found that 49% of LLM users who report mental health issues use AI chatbots, such as ChatGPT, specifically for mental health support. People are hungry for alternatives that are accessible, affordable, and always available.At Forerunner, we believe the future of consumer health lies at the intersection of personalization, emotional intelligence, and scale. This led us to our newest investment in Slingshot, an AI-native therapy company that’s pioneering a new category of psychological support.

**A Converging Shift in Behavior & Technology**The rise of digital companions and AI-driven therapy is shifting public perception around what's possible with emotional support driven by technology. This shift, coupled with a desperate ne
ed for scalable psychological care, makes this the right moment for a clinically rigorous team like Slingshot to redefine what's possible in scalable Mental Health support.

At Forerunner, we took to cold, hard research to understand the opportunity in AI therapy. Because while the need is clear, the impact and limitations of an AI-driven modality has been extensively debated throughout the broader consumer health industry. We found not only a clear readiness to dive in amongst consumers, but also an undeniable potential for quality of care and positive outcomes:

- [Dartmouth’s clinical trial](https://home.dartmouth.edu/news/2025/03/first-therapy-chatbot-trial-yields-mental-health-benefits) showed that AI therapists can deliver highly effective intervention.
- [Harvard Business Review](https://www.linkedin.com/posts/sarahlewen_ai-genai-therapy-activity-7318268902868742145--zqp/?utm_source=share&utm_medium=member_ios&rcm=ACoAAAFKKccBjnNlJ9jZaHn3CyCpic19XlQEQMU) identified therapy and companionship as the #1 use case for generative AI, underscoring both the demand and the technological readiness of the space.
A new generation of AI-native therapy products is already emerging with remarkable depth and nuance, including: 

- Specifically structured therapeutic frameworks (CBT, DBT, ACT).
- Optimization for subclinical use cases like stress, burnout, and relationship struggles.
- Design to support autonomy, skill-building, and emotional connection.
- And soon, the ability to measure outcomes and possibly unlock reimbursement.

When patients outline an ideal experience, it is uniquely suited for AI-driven solutions: 

- 24/7 access, anytime they need support — not just a 50-minute weekly window.
- Lower costs, making care accessible for millions who can’t afford traditional therapy.
- Multi-modal interactions — chat, voice, journaling, exercises, nudges — that meet people where they are.
- Personalization based on preferred style and modality, whether that’s tough love, gentle encouragement, or cognitive frameworks that resonate.

**The Solution: Therapy Reimagined for the AI Era**ChatGPT, Claude, and Character AI are being used for therapeutic support, but weren’t designed for it — they often lack structure, nuance, or safety guardrails, especially for emotionally complex situations. These and other general-purpose LLMs fall short due to design limitations, alignment tradeoffs, and business constraints.

Slingshot is architecting a completely new modality: AI-powered therapy that is highly personalized, clinically rigorous, and built for long-term engagement and impact. Rather than training on general internet data, Slingshot's product Ash is built on the first special-purpose foundation model for psychology. It is pre-trained on one of the most expansive behavioral health datasets and assembled to learn CBT, DBT, ACT, and psychodynamic therapy. It’s also been fine-tuned by Slingshot’s clinical team to help it adapt to the specific nuances, such as when to prompt for more information, to challenge someone, or to stay silent. Finally, Ash uses reinforcement learning to continually improve and adjust to each person based on each conversation. This ultimately enables Ash to be one of the most informed, adaptable sources of support, and thus build strong therapeutic alliances — one of the most predictive factors in therapy success.

In-person, traditional therapy formats will always play an essential role in the broader mental health system, but Ash expands the field to include additional support systems, improving accessibility for an industry plagued by a shortage and affordability crisis. While human interaction cannot be replaced in therapy, consumers now have more than one resource-constrained option.

**Why We Invested: The Right Approach, The Right Team**There are hundreds, if not thousands, of teams working on AI-driven therapy, but what stood out with Slingshot was their principled, technical, and deeply thoughtful approach to building something that could truly scale, while remaining grounded in clinical efficacy. The decision to build a foundational model for psychology from the ground up, rather than fine-tuning on general-purpose LLMs, reflects the team’s commitment to building something enduring, differentiated, and safe.

Slingshot is co-founded by Daniel Cahn, an ML prodigy who led GenAI initiatives at Instabase, and Neil Parikh, co-founder of Casper and a board member at PsychHub. Daniel leads model development and technical development, while Neil brings a wealth of experience in consumer brand-building, product, and go-to-market execution. Slingshot’s head of clinical research, Dr. Derrick Hull, previously led Clinical R&D at Talkspace and was a pioneer in message-based care. Together, this team brings a rare blend of machine learning expertise, clinical depth, and consumer product excellence that positions them to lead in this new modality.

In early beta access, Ash has already attracted 50,000 users through primarily organic channels. Engagement is very strong, with an average of 25–35 minute session lengths, and 90% of users report meaningful breakthroughs or progress. Beta users of Ash are [sharing incredible experiences](https://www.talktoash.com/stories) — stories of emotional insight, increased resilience, and personal growth are pouring in, with early qualitative feedback suggesting Slingshot is actually outperforming traditional therapy for some users. With a highly differentiated, compelling product, meaningful traction, and a high-integrity team, Slingshot is well on its way to redefining what psychological care can look like in the modern era. When they succeed, they won’t just be another wellness app or virtual therapy substitute; they will become the infrastructure for lifelong psychological growth. [Try Ash today](https://www.talktoash.com/vip?token=Ptu_QWsXdfHIEOcoRAfPMnZNh9HyI7IXQjOb6Y_NXXy4hFKuNQ)!`,
  },
  {
    slug: "forerunner-research-the-state-of-truth-on-marketplaces",
    title: "Our Source of Truth on Marketplaces",
    date: "June 25, 2025",
    year: 2025,
    author: "Forerunner Ventures",
    authorTitle: "",
    category: "Research",
    company: null,
    excerpt: `The marketplace business model has stood the test of time. Some of the largest public consumer tech companies are marketplaces, and marketplaces have produced a breadth and depth of small- and...`,
    content: `The marketplace business model has stood the test of time. Some of the largest public consumer tech companies are marketplaces, and marketplaces have produced a breadth and depth of small- and large-cap outcomes that rival software. However, the model has fallen out of favor with investors in recent years — marketplaces that went on to raise a Series A are down ~85% since the 2015 peak.

We set out to understand how the current sentiment towards marketplaces may or may not align with the opportunity. We analyzed over 30 public and 80 private marketplace companies to develop a data-driven source of truth on how marketplaces stack up to other business models, including public market and M&A analysis, a deep dive on the nuances between different types of marketplaces, and a forward look to how this may inform future marketplace opportunities. Some of what we found:

- Marketplaces are rewarded in the public markets even when they are not capital efficient pre-IPO
- Service and product-based companies can both be successful, though the latter is often worse off when holding inventory
- Marketplaces with supply variety as a feature are more common and typically have more compelling financials

Even if marketplaces aren’t known for their simplicity, they are sometimes the ideal, and perhaps only, model that can deliver certain consumer value propositions at scale.

Read the full report for analysis:`,
    downloadUrl: "https://cdn.prod.website-files.com/67bafd4e267713b0ed137fd8/67d315903bd3c443460668ea_Forerunner%20Research%20-%20Our%20Source%20of%20Truth%20on%20Marketplaces.pdf",
  },
  {
    slug: "investing-in-decagon-to-transform-enterprise-customer-relationships-in-the-ai-era",
    title: "Investing in Decagon: Transforming Enterprise Customer Relationships in the AI Era",
    date: "June 23, 2025",
    year: 2025,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: "Investment Announcements",
    company: "Decagon",
    excerpt: `At Forerunner, we've always believed that exceptional customer experiences are the foundation of enduring businesses. Over the last decade, we've partnered with a new generation of customer-focused...`,
    content: `At Forerunner, we've always believed that exceptional customer experiences are the foundation of enduring businesses. Over the last decade, we've partnered with a new generation of customer-focused companies that redefined what it means to build deep, trusted relationships with consumers — from OURA to Chime, Glossier, Faire, and more. Today, we’re announcing our investment in [Decagon](https://decagon.ai/), a company that is fundamentally reimagining how enterprises engage with their single most valuable asset: their customers.**The Power of Customer Obsession**Throughout our time investing across companies from nascent startups to public enterprises, we've seen firsthand the power of leading with customer obsession and the relentless pursuit to excel and win customers over with exceptional service. The best companies don't just respond to customer needs; they anticipate them, creating experiences that build loyalty, drive retention, and fuel growth.

Today, with the transformative potential of AI across all business functions, one area that stands out with perhaps the biggest opportunity for impact is customer service, support, and sales functions. Advancements here offer the rare win-win: tremendous value both in delighting customers *and* driving operational efficiencies. Decagon's approach aligns perfectly with this belief that using AI is about so much more than just reducing costs, but fundamentally elevates the quality and scalability of human-like, responsive interactions between businesses and people.**Decagon Today: A New Standard in Customer Support**Decagon is transforming enterprise customer support through fully autonomous, AI-powered agents that don't just respond; they resolve. Purpose-built for end-to-end execution, Decagon's platform increases deflection rates up to 70% on average, with many multiple Decagon customers increasing deflection rates to over 90% and even 100% — delivering transformative cost savings, faster resolution times, and 24/7 service coverage. 

Since launching in early 2024, Decagon has rapidly scaled, with deployments at marquee names like Chime, Duolingo, Notion, and OURA. What's most impressive isn't just their growth trajectory, but the measurable impact they're creating for customers, from **resolution rates 2-3x higher than legacy solutions to cost-per-ticket savings of 80-90%.**### The Winning Formula

In a short period, Decagon is emerging as a frontrunner in the category. Through our own portfolio and beyond, we've consistently heard the same feedback: Decagon's product delivers unprecedented results. Leaders cite resolution containment rates of 70-75% (compared to 20-35% for legacy systems), implementation timelines of just 2-4 weeks, and cost-per-resolution savings of 80% or more.

What truly separates Decagon goes beyond performance metrics is the team. CEO and Cofounder Jesse Zhang and all the Decagon leaders live and breathe the customer obsession that has brought them this far — and that will drive the next decade+ of growth. One customer described the team as "by far the most engaged partner our team has ever worked with," while another noted that "they're outpacing everyone" in iteration speed. 

With deep technical leverage, strong product momentum, and a fast-growing market, Decagon is poised to be a defining company in the next wave of enterprise AI and a foundational layer for how consumers experience the brands they trust most. Backing this team is a privilege—we’re all in on what Jesse, Ashwin, and Decagon are building.

‍`,
  },
  {
    slug: "celebrating-chimes-journey",
    title: "Celebrating Chime’s Journey",
    date: "June 12, 2025",
    year: 2025,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: "Theses",
    company: "Chime",
    excerpt: `Twelve years ago, we met Chris Britt and Ryan King with an idea and a conviction: that everyday Americans deserved a better relationship with their money. They weren’t setting out to build a bank,...`,
    content: `Twelve years ago, we met Chris Britt and Ryan King with an idea and a conviction: that everyday Americans deserved a better relationship with their money. They weren’t setting out to build a bank, they were thinking about a new kind of financial platform, one grounded in trust, transparency, and technology. It was called 1debit back then, and our early thesis was simple but powerful: mobile would become the default channel for banking, interchange would enable a sustainable business model without charging users fees, and a new kind of brand - friendly, modern, and mission-driven - could win share in one of the most entrenched, low-NPS industries in America.

That thesis feels remarkably intact today, but the scope of what Chime has built far exceeds what we envisioned at the seed stage.

As we read through Chime’s S-1, it’s striking to see how consistently the company has operated with a deep sense of purpose and principle, and how that has translated into scale, engagement, and impact. Today, there are 8.6 million active members, with $121B in annual purchase volume. Of its users, 67% rely on Chime as their primary financial relationship. The average member transacts 54 times per month—a staggering level of engagement, trust, and relevance. Products like SpotMe, MyPay, and Credit Builder — supporting fee-free overdraft protection, immediate access to funds before payday, and frictionless ways to build credit — have become lifelines for consumers who were long underserved or overlooked by traditional banks, and have even set new industry standards by forcing the hands of legacy banks needing to compete.

The numbers tell one story. But the bigger story is what Chime represents: a redefinition of who financial services are built for, and how they should work. This team didn’t just digitize old infrastructure — they reimagined the system starting fresh with their own unique perspective and an open mind about the new technologies available to them at the time. They focused relentlessly on alignment with the consumer: no hidden fees, no surprise charges, no jargon. Just intuitive, mobile-native products that help people spend, save, and build toward something better. 

Looking back, we remember the early product mockups, the decision to double down on the Visa network, the creative approach to customer acquisition, and the gritty operational focus that powered every stage of growth. We remember the many times the team made hard calls with clarity and courage. Through it all, Chris and Ryan have led with conviction, humility, and a commitment to building something that lasts.

On a personal level, what gets me so excited about the Chime IPO is how much this company’s journey resembles the opportunities we’re seeing now in the market. Chime launched at a time when banking on a mobile platform was unformed, if not obsolete. But their success wasn’t grounded in translating the existing banking experience to a new technology platform, making a familiar experience available in a new format — it was about manipulating the opportunity inherent to the mobile platform shift to unlock new, truly unique value. New cost structures, new utilities, and new rules. Amid this current platform shift with AI, we face the same junctures: opportunities to leverage new technology not just to expand access to what’s available, but to rewrite the potential entirely.

To the entire Chime team: congratulations on reaching this milestone. It’s a moment to celebrate not just an IPO, but the creation of a durable business, a beloved brand, and a transformative platform. And yet, the opportunity ahead is still vast. Consumer expectations are rising, trust is more valuable than ever, and the category is still wide open for innovation. Chime is uniquely positioned to meet that moment.

We’re proud to have been part of your story from the very beginning and equally excited for everything to come next.

*Let's go $CHYM! *💚💚💚

‍`,
  },
  {
    slug: "introducing-the-brand-power-score-a-new-quantitative-tool-for-measuring",
    title: "Introducing the Brand Power Score: a New, Quantitative Tool for Measuring Brand Impact",
    date: "May 29, 2025",
    year: 2025,
    author: "Forerunner Ventures",
    authorTitle: "",
    category: "Research",
    company: null,
    excerpt: `Today, we’re unveiling something we’ve been working on behind the scenes for over a year, born out of hundreds of conversations with entrepreneurs and operators, in addition to primary research: the...`,
    content: `Today, we’re unveiling something we’ve been working on behind the scenes for over a year, born out of hundreds of conversations with entrepreneurs and operators, in addition to primary research: the [**Brand Power Score**](https://brandpowerscore.com/), a new tool for quantitatively measuring brand impact. The Brand Power Score is powered by the FRIEND Framework, our new rubric for evaluating the key dimensions that make up a brand’s DNA. Companies of any stage or industry can find out their [**Brand Power Score**](https://brandpowerscore.com/) through our [**partnership with SurveyMonkey**](https://www.surveymonkey.com/templates/brand-power-score-survey-template/) to gain deeper insight on how they are resonating with consumers, and specifically where they might need to invest more to strengthen brand impact.Brand has long been seen as the elusive, magnetic sixth sense of break-out businesses. It’s something that people often struggle to articulate or reliably gauge, but that they inevitably feel when it’s done well — and it can be an incredibly powerful conduit for people to act, share, and buy. Similarly, business builders can spend millions in an effort to build brand equity, but fumble when evaluating if they’re driving ROI or if progress is truly being made.

At Forerunner, we’ve invested in dozens of breakthrough brands back when they were just getting started: Glossier, Chime, Warby Parker, Ritual, The Farmer’s Dog, Hims&Hers, Away, Prose, OURA, Dollar Shave Club, and more. Through these experiences, we’ve learned a lot about the anatomy of what makes a great brand and business, no matter what stage the company may be at. Whether a consumer or enterprise SaaS business, a powerful brand goes hand-in-hand with driving outsized commercial success and lasting power. Ultimately, it’s not enough to have a beautiful logo or website; break-out brands have a unique combination of very human characteristics, where customers feel connected at a deeper level. Ultimately, this kind of brand impact allows a business to transform how it’s valued in markets and expand the very potential of their market at large. 

We’ve been asked countless times about how we know if a brand is poised to break out. While some people chalk it up to some intangible artistic intuition, we believe there can be a more measured, holistic framework. We set out to create these tools for quantifying brand, gleaning what we’ve learned from years of conversations with marketing leaders and partnerships with generation-defining companies, combined with research on over 14,000 people across the US to validate our theses. 

Our goal in publicly releasing the Brand Power Score is to transform what has historically been considered an amorphous, subjective part of business building into a measurable, actionable asset. Because it’s well-known that you cannot improve what you can’t or don’t measure.

The Brand Power Score is based on the FRIEND Framework, which represents the key dimensions that comprise brand impact —** F**eelings, **R**eliably, **I**dentity, **E**xperience, **N**orth Star, **D**ifferentiation. It stems from the concept that a great brand is akin to a great friend — they might not be perfect or be your best friend every single year, but they consistently show up in ways that characterize their strengths, values, and unique attributes. The Brand Power Score illuminates how measurements vary based on customers vs. non-customers, as well as insights on each dimension of the FRIEND Framework to provide granular, actionable learnings about where there are opportunities for improvement. For example, a company might thrive at Reliability and Differentiation, but score lower on North Star and Feelings, indicating potential for deeper investment in honing and expressing values, mission and vision, and tone of voice.We’re putting out the Brand Power Score and FRIEND Framework into the world to give founders, CEOs, and operators better tools for building their brands, and to start a conversation about insightful new ways we can evaluate and invest in this critical, ever evolving business asset. We’re committed to continuing this research and evolving our efforts here, so brands can not just thrive, but stand the test of time. 

Check out the [**Brand Power Score and FRIEND Framework**](https://brandpowerscore.com/) — and we’re always eager to hear what people think: brandscore@forerunnerventures.com.`,
  },
  {
    slug: "let-the-data-speak",
    title: "Let the Data Speak: Consumer Startups Stack Up to Enterprise Startups",
    date: "May 29, 2025",
    year: 2025,
    author: "Forerunner Ventures",
    authorTitle: "",
    category: "Research",
    company: null,
    excerpt: `An abbreviated version of this essay appeared in The Information and can be read here.We live in a consumer-driven economy—consumer spending accounts for two-thirds of the U.S. GDP. Yet Carta...`,
    content: `*An abbreviated version of this essay appeared in The Information and can be read **here**.*We live in a consumer-driven economy—consumer spending accounts for [**two-thirds of the U.S. GDP**](https://www.whitehouse.gov/cea/written-materials/2023/10/30/as-the-u-s-consumer-goes-so-goes-the-u-s-economy/). Yet Carta recently [**reported**](https://carta.com/blog/vc-shifts-2023/) that just 7% of seed capital raised on the site last year went to consumer companies, the smallest share since 2018. Andreessen Horowitz meaningfully[** cut its consumer investing team**](https://www.theinformation.com/articles/andreessen-horowitz-merges-fintech-and-consumer-teams-after-some-bets-fizzle?rc=wuxbqg) and folded it under its finance investing lead partner. Lerer Hippeau, another venture firm once focused on consumer companies, is [**investing more in enterprise firms**](https://www.theinformation.com/articles/lerer-hippeau-and-vcs-consumer-to-enterprise-pivot?rc=wuxbqg). In our own day- to- day activity and conversations with peers, it is clear that investing in consumer companies has come under greater scrutiny.At a high level, the bearish sentiment makes sense. Inconsistent consumer sentiment and dwindling savings accounts prompt fears that spending will slow, customer acquisition costs have been rising, inventory and supply chain challenges are material and the shift toward generative artificial intelligence has emphasized infrastructure to date.

But public market data reveals a different story: Compared with enterprise companies, consumer companies are more likely to go public after raising a Series B, more likely to drive efficient growth at the time of an initial public offering and just as likely to trade at 10 times revenue at the time of IPO. 

Markets are cyclical and categories go in and out of investing favor. Consumer is out of favor (the only vertical down from 2019 volumes), though coming out of a [**153 month bull run**](https://www.forbes.com/advisor/investing/bull-market-history/) (excluding March 2020), venture capital funding across major categories has seen a significant (> 50%) pullback from prior highs, including SaaS, Fintech, Climate, and Digital Health.We are at the dawn of AI-driven technological changes and are beginning to see the investment opportunity at the intersection of AI and consumer priorities. At Forerunner, we believe the consumer opportunities poised to emerge in the AI era are of the same scale as the opportunities that emerged from the internet and mobile shifts. Think of how quickly ChatGPT+ subscriptions propelled OpenAI to [**$2 billion in annualized revenue**](https://www.ft.com/content/81ac0e78-5b9b-43c2-b135-d11c47480119).**Defining Consumer in Venture**First let’s clarify what we mean by a consumer company. Investors lack a shared definition and to some degree this reality has led to conflicting assessments and narratives. Of the VC-backed consumer IPOs since 2010, only 35% are categorized as consumer cyclical or defensive in PitchBook under GESC categorization (similar to GICS outside of PitchBook). On the flip side, 70% of enterprise IPOs are categorized as technology.

In Forerunner’s eyes, a venture-scalable consumer company is one underpinned by technology where either an individual consumer pays for the service or product *or* the company’s revenue relies on consumer spend or engagement. Through this lens, consumer companies include much more than retail or inventory-holding companies. They show up in all corners of the market and are fueled by a range of underlying trends. They span marketplace, subscription, software and e-commerce business models and range from digital brands and retailers (Warby Parker, Farfetch, Revolve, Rent the Runway) to service companies (Airbnb, Uber, DoorDdash, Duolingo) to social media (Snap, Pinterest) to software companies that enable commerce (Stripe, Shopify, Toast).Take Doordash and Zillow, for example. They are categorized as Communication Services (where telecom and social are typically placed). Or Affirm and Uber, which are categorized as Technology. Among six scaled and aspiring public companies in our portfolio, only one, [**The Farmer’s Dog**](https://www.thefarmersdog.com/), would fall under a consumer GESC sector. The others, including [**Hims**](https://www.hims.com/), [**Warby Parker**](https://www.warbyparker.com/), [**Chime**](https://www.chime.com/), [**Faire**](https://www.faire.com/), and [**Oura**](https://ouraring.com/) would fall under non-consumer sectors despite offering impactful solutions for millions of consumers.Each of the companies mentioned in the table below exist to better serve consumers and each derive their income either directly or indirectly from the 2/3 of annual consumer-directed GDP spend. We include commerce enablement companies, like Shopify and Toast, because [**73%**](https://www.shopify.com/news/shopify-announces-third-quarter-2023-financial-results) and [**83%**](https://s28.q4cdn.com/141746709/files/doc_financials/2023/q3/95a5345a-acf8-4729-906c-ed0a7a4c0617.pdf) of their top line revenue comes from “merchant solutions” and “technology financial solutions” (directly tied to GMV and consumer payment processing volumes), respectively.**What Makes Early Stage Consumer Attractive to Venture Investors**The consumer investing debate is as much of a qualitative disconnect as a numerical one. To show what allows us to sleep (playing into evolving trends) and dream (setting the next trend) at night, we reviewed over 12,000 venture-backed companies that raised a Series B since 2010 and categorized over 7,800 of those companies as consumer or enterprise.

**The numerical case: Consumer IPOs stack up to enterprise.***Consumer companies are more likely to go public if they raise a Series B.*Of the 3,129 venture-backed consumer companies that raised a Series B since 2010, 1.69% went public, excluding special purpose acquisition companies. Of the 4,739 venture-backed enterprise companies that raised a Series B, 1.50% went public, excluding SPACs. Consumer companies go public at a 13% higher rate (63% including the one-time SPAC anomaly).

*Consumer companies offer better growth rates and profit margins at IPO.*Consumer companies are often characterized and criticized as having lower profit margins and higher marketing expenses. In the calendar year of their IPO, though, consumer companies had a median combined growth rate and profit margin of 52% compared with 32% for enterprise companies. Investors often evaluate companies on this measure, known as the Rule of 40, because they want the sum of a company’s revenue growth rate and profit margin to be at least 40%. In our study, 62% of consumer companies went public above the Rule of 40 threshold compared with 44% of enterprise companies.

*Consumer company IPOs are larger.*Of the consumer companies that went public, 18.8% did an IPO at a valuation of more than $10 billion, nearly double the 9.6% rate for enterprise companies. Notably, consumer companies went public slightly faster—a median 76 months from founding versus 78 months for enterprise companies—and at a median 51% higher valuation.

These metrics reflect that consumer companies often have larger market share at IPO than enterprise companies. For example, [**Uber**](https://www.cnn.com/2023/03/29/tech/lyft-leadership-change/index.html), [**Doordash**](https://www.statista.com/statistics/1235724/market-share-us-food-delivery-companies/), and [**Instacart**](https://www.cnbc.com/2023/11/03/draftkings-earnings-sports-betting-online-casino-fuel-revenue-growth.html) each have over 60% of their respective markets,[** DraftKings plus Fanduel**](https://www.cnbc.com/2023/11/03/draftkings-earnings-sports-betting-online-casino-fuel-revenue-growth.html) have 61% of the online betting market, and [**Amazon and Chewy**](https://www.petfoodprocessing.net/articles/16872-global-pet-food-market-on-track-to-137-billion#:~:text=Chewy%20and%20Amazon%20are%20perfectly,in%20the%20lead%20at%2036%25.) have 70% of the ecommerce pet market. This scale of outcomes demonstrates the ability for consumer companies to reach meaningful scale and similar to enterprise companies this type of scale creates opportunities for consumer companies to leverage large user bases into other lanes of business.*Consumer companies fetch comparable revenue multiples at IPO.*Consumer companies are just as likely as enterprise companies to be valued at more than 10 times their annual revenue at IPO (42% consumer versus 40% enterprise). They are also just as likely to be valued at 5 to 10 times their annual revenue (29% consumer versus 30% enterprise).

*There is opportunity for investors in high-quality small-cap consumer IPOs.*Compared with enterprise companies, relatively fewer consumer companies go public at market caps less than $2 billion. Yet those that do perform comparably to their enterprise counterparts in terms of growth rate and stock performance. This demonstrates how the two company types have comparable upside but with a greater investor appetite for small cap enterprise SaaS companies.

**The qualitative case: Scale and Impact + AI’s consumer moment has arrived.***Some of the world’s largest companies started by serving consumers.*Just as enterprise software companies aim to expand revenue with clients by adding new products or increasing usage, consumer companies have parallel ambitions and success. Think about Amazon (books), Google (search), and Meta Platforms (Facebook)—three of the most influential companies, all of which began with a consumer-first value proposition and then expanded into adjacent businesses and multidimensional business models. 

For example, [**Oura**](https://ouraring.com/) in the Forerunner portfolio, started as a hardware company and has expanded into a subscription-app company focused on an individual’s complete picture of health, most recently expanding beyond sleep and activity tracking to reproductive health. [**Faire**](https://www.faire.com/) started in the US selling artisanal and handcrafted items to boutique retailers and now sells internationally across home, food, apparel, beauty, jewelry, pets, and kids categories to a growing profile of retailers. And [**Speechify**](https://speechify.com/), which started selling a text-to-audio product, has expanded to include an offering comprising the largest assortment of audio books av
ailable.*Consumers stand to benefit as much from AI’s potential and consumer AI to date is less developed.*In the rapidly evolving AI landscape, the majority of investment and focus to date has been around developing the essential infrastructure and models necessary for AI’s growth. As these foundational elements have become more robust, accessible and cost-effective (and eventually commoditized), opportunity has shifted toward innovative applications that offer distinctive consumer experiences or solve specific consumer problems using AI. Fifteen years ago, the emergence of smartphones created the opening for companies such as Uber, DoorDash, Instagram and Spotify. We will likely see a similar renaissance with AI.

*A sneak peek from our upcoming Consumer Report highlighting key value shifts and their adoption phase over the past two decades.**Incumbent AI distribution advantage has weaknesses.*Google, Microsoft, Amazon and Meta have hundreds of millions of potential users for their AI agents and tools. But they will face challenges from antitrust regulators and mistrustful consumers. The venture-backed teams that can build products and solutions that make users feel seen, feel smarter and feel safer have an opportunity to build real trust and win hearts and minds.

*AI personalization can reduce customer churn.*Consumer companies must continually reengage users and earn their loyalty (that is, their business). *True* personalization—which AI stands to enable—can challenge this norm. AI applications will improve as users share more information, making them stickier and making switching costs higher.A key aspect of our thesis when investing in [**Duckbill**](https://www.duckbill.ai/), for example, is that each and every engagement represents an investment by the consumer. If that time invested yields an ever better experience, the switching costs will be higher not only because Duckbill has more information, but also because of the trust built along the way. While the incumbents might currently have more data on each consumer, it will be more difficult for them to reframe their relationship and foster a different level of trust and feeling.*Consumer companies have innovative and category redefining business models*While consumer-first companies typically excel in reach, speed, and market adaptability, enterprise-focused companies traditionally benefit from greater stability and predictability. Today, both have taken a page out of each other’s playbook: consumer companies often offer memberships and subscriptions, while enterprise companies have benefited from exponential and efficient self-serve growth strategies.

For consumer, business model variation and innovation, whether replacing or combining models, stands as a consistent hallmark of breakout venture-backed companies. Uber and Airbnb replaced vertical and franchise models with global marketplace models. Amazon, One Medical, and Doordash introduced subscriptions to complement selling products and services, respectively. And Robinhood replaced a usage-based fee model with selling a product (order flow). Even in prosumer software (like Notion and Canva), which tows the line between consumer and enterprise, the product-led-growth movement has changed the game and spurred exponential, bottoms-up growth through individual consumer adoption and without an outbound sales team.

In the Forerunner portfolio, [**Chime**](https://www.chime.com/) replaces charging bank fees with taking a cut of interchange, while [**Atticus**](https://www.atticus.com/) replaces a typically fee-for-service legal model with a contingency-based model rooted in high quality referrals and client success. On the other hand, [**Dutch**](https://www.dutch.com/) replaces a fee-for-service veterinary care model with a subscription, while [**Fora**](https://www.foratravel.com/) combines a take rate model with a supplementary subscription in the travel agent space. Models tend to be more fluid combining multiple flavors to create the right customer incentives.**Your Put is our Call**It can take a decade to build a company that’s ready for an IPO. Consumer companies are vital to a diverse and dynamic venture ecosystem, and they have been crucial components of almost all of the top venture funds over the past two decades. The data—and the qualitative conversation—show compelling investment opportunities in consumer companies. While the public narrative has detached from the data and potential, Forerunner remains steadfast in our commitment to supporting visionary founders building the next generation of consumer-first offerings.

#### Data FAQs

*What is the source of the data?*All data for Series B and public companies is from PitchBook.

*What data is included in the analysis?*Series B data includes over 12,000 venture-backed companies headquartered or with offices in the US that raised a Series B after 2010. We categorized the companies individually and used the consumer and enterprise companies for this analysis (deep tech and biotech are the main categories of companies not included). Series B data is used to create the universe of companies (denominator) for the calculation of Series B to going public conversation rate. Public company data includes all consumer and enterprise venture-backed companies that went public after 2010, either by IPO or SPAC. This includes companies founded before 2010 and / or that raised a Series B before 2010 (for the conversion rate, we excluded companies that raised a Series B after 2010). For example, with this definition Oddity is not included because the company did not raise venture dollars (raised private equity dollars from L Catterton). On the flip side, PitchBook does not categorized some companies as venture-backed that we would consider venture-backed, like Coupa Software. For consistency, we deferred to PitchBook's definitions.

*How did you categorize companies as consumer or enterprise?*Using our definition for what we believe should be in the consumer venture conversation, which includes companies where "individual consumer pays for the service or product or the company’s revenue relies on consumer spend or engagement." Over 90% of companies are straightforward to categorize with this definition in mind. With social, commerce enablement, marketing software and B2BC companies, we went a layer deeper to ensure that the business makes a signficiant portion of revenue based on the volume of payments or the engagement of users. With this in mind, companies like Shopify (70% payments revenue) are considered consumer while companies like Klaviyo are not (SaaS).

*Why use median for the metrics?*Using median, instead of mean or average, minimizes the potential for skewing data reported in the tables with outliers (upside or downside). We believe this is a fairer comparison of what investors should expect when they think of the outcome potential.

*Why exclude SPACs for the metrics?*We see SPACs as a one-time market phenomenon that we do not expect to repeat. Including them would skew the data as they are not reflective of the companies we believe will go public in the future.

*Why use calendar year (CY) for calculating Rule of 40 metric?*We pulled revenue growth and EBITDA margin for fiscal year (FY), calendar year (CY) and trailing twelve months (TTM) for companies that went public. Calendar year created the largest sample size of companies with revenue growth and EBTIDA margin data. PitchBook has data for fewer companies for FY and TTM.

*Why only include companies that went public >$500M valuation?*Venture capital returns are driven by outlier outcomes. While venture-backed companies were able to go public below <$500M valuation in decades past, this is unlikely to be true going forward.

*Why focus on US companies?*We are a US-focsed investment firm. There are rare occasions that we will partner with international teams. When we do, the companies are primarily serving US consumers -- think of Oura or Balance. With this in mind, a company like Spotify is included in the analysis.

*Does the trend hold if you exclude some of the most notable consumer companies?*Yes, Doordash, Uber, and Airbnb -- the three most significant consumer IPOs in recent years -- do not skew the data. In part because we use the median (rather than mean) in the analysis. And in part because the company performance metrics are not always on the upper quartile. For example, Doordash's Rule of 40 benefitted from a Covid bump (215%), while Airbnb's was pulled down by Covid (-160%), and Uber's was near the median (53%).

*Does the trend hold if you exclude some of the most notable consumer companies and remove commerce enablement?*Yes, all metrics hold, except for conversion from Series B to IPO moves in favor of enterprise.`,
  },
  {
    slug: "2024",
    title: "Our 2024 Annual Consumer Trend Report",
    date: "May 29, 2025",
    year: 2025,
    author: "Forerunner Ventures",
    authorTitle: "",
    category: "Research",
    company: null,
    excerpt: `Our inaugural Consumer Trend Report is a data-driven analysis rooted in what’s driving consumers, where consumers are heading, and where investment opportunities exist.`,
    content: `Our inaugural Consumer Trend Report is a data-driven analysis rooted in what’s driving consumers, where consumers are heading, and where investment opportunities exist.

In 2024, we share our perspective on Access, Independence, and Spending Like There’s no Tomorrow – three consumer values we believe are here to stay and in the process of evolving. We also cover consumer intrigue and willingness to pay for the fast-moving Generative AI technological shift. 

Wondering how consumers may “edit” their access to curb stress and improve quality of life? Or how consumers are increasingly taking their professional, health, and educational pursuits into their own hands with interdependence in mind? Or what discretionary spend has moved beyond desire to expected? See our full report for the full data and insights.`,
    downloadUrl: "https://cdn.prod.website-files.com/67bafd4e267713b0ed137fd8/67d32555e5f1f18ea7f2a26a_Forerunner%20Consumer%20Trend%20Report%202024.pdf",
  },
  {
    slug: "our-2025-annual-consumer-trend-report",
    title: "Our 2025 Annual Consumer Trend Report",
    date: "May 29, 2025",
    year: 2025,
    author: "Forerunner Ventures",
    authorTitle: "",
    category: "Research",
    company: null,
    excerpt: `Our annual Consumer Trend Report is our deep dive into where consumers stand today and how major shifts are shaping new needs and opportunities. We spend months distilling signals from the past year...`,
    content: `Our annual Consumer Trend Report is our deep dive into where consumers stand today and how major shifts are shaping new needs and opportunities. We spend months distilling signals from the past year to uncover what they reveal about the road ahead, because we believe that the clearest view of the future comes from a deep, precise understanding of the present.This moment in 2025 is a particularly dynamic one for reflection. The past year was defined by stark contradictions — volatile consumer sentiment, erratic markets, explosive technological breakthroughs, and a remarkably resilient labor market, all unfolding alongside rising anxieties about career and financial security. In this report, we examine how economic pressures, technological advancements, and shifting consumer priorities are reshaping behaviors. We focus on three driving forces — **Health & Wellness, Gen AI, and Personal Security **— each accelerating fundamental changes in the way people work, transact, and plan for what’s next.`,
    downloadUrl: "https://cdn.prod.website-files.com/67bafd4e267713b0ed137fd8/67da14398387d7948eb8cdac_2025%20Forerunner%20Consumer%20Trend%20Report.pdf",
  },
  {
    slug: "our-full-research-on-what-the-data-says-about-consumer-vs-enterprise",
    title: "Our Full Research on What the Data Says about Consumer vs. Enterprise",
    date: "May 29, 2025",
    year: 2025,
    author: "Forerunner Ventures",
    authorTitle: "",
    category: "Research",
    company: null,
    excerpt: `Early this year, we published an article in The Information about how performance of consumer startups stacks up to enterprise startups. This was based on an aggregation of over 12,000 tech companies...`,
    content: `Early this year, we published [**an article in The Information**](https://www.theinformation.com/articles/dont-give-up-on-consumer-startups) about how performance of consumer startups stacks up to enterprise startups. This was based on an aggregation of over 12,000 tech companies that raised a series B since 2012, where 7,800 were then classified as enterprise or consumer and analyzed. In the analysis, we found that:
- Consumer startups are as likely to go public as enterprise startups
- Consumer startups are as likely to fetch >10x multiples at IPO as enterprise startups
- Consumer startups are more likely to surpass the Rule or 40 than their enterprise counterparts

It may seem like a narrative violation, but consumer startups largely meet or surpass the benchmarks of enterprise, according to the data on startups that had raised series B rounds. It’s true that there are more public enterprise companies than consumer companies — but also, there are more enterprise startups that get early-stage funding.

After we published our piece, we received many follow-up requests for further discussion about the report. So today, [**we’re outsourcing the larger body of underlying research we did to produce the analysis**](https://pitch.com/v/consumer-vs-enterprise-forerunner-research-b3ukqw), so people can flip through the data themselves and get a more granular view of how startups fare in the consumer and enterprise markets.As a part of this, it’s relevant to consider how Forerunner defines a consumer company. We believe there are two types of consumer businesses: 1. companies where the consumer pays for the product (”consumer-paid”) *or* 2. companies where revenue relies on consumer engagement, behaviors, or spend (”consumer-driven”). In this report, we compared both of these consumer categories to enterprise for a more specific view on how each performs — and to address those who might have wondered if the Shopify and Toasts of the world skew the numbers in favor of consumer (spoiler alert: they don’t).Overall, evaluating enterprise vs. consumer startups is a more nuanced effort than any one research report can show (even one based on analysis of 7,800 companies). But if we were to give a TL;DR on what we’ve learned with this effort, it’s that the consumer startups that muscle their way to a series B go on to perform just as well — if not better — than their enterprise counterparts.

Now, as AI ushers in a wave of new business models and consumer value propositions, we’re entering a cycle of change, growth and fundamentally new opportunities across all industries. Consumer is especially well-poised: consumer companies are known for their agility, adaptability and business model variation, and the top ones are almost always born out of a major technological shift. That means the next set of generation-defining consumer businesses are being built right now. (More on this to come in another post!).

Check out the [**full report**](https://pitch.com/v/consumer-vs-enterprise-forerunner-research-b3ukqw) and let us know what you think!`,
  },
  {
    slug: "state-of-the-market-early-stage-vc-ipos-and-m-a-consumer-ai",
    title: "State of the Market: Early-Stage VC, IPOs and M&A, Consumer AI",
    date: "May 29, 2025",
    year: 2025,
    author: "Forerunner Ventures",
    authorTitle: "",
    category: "Research",
    company: null,
    excerpt: `This year is wrapping up with no shortage of energy and optimism, but still plenty of market intricacies putting pressure on many dimensions of the startup and VC ecosystem.`,
    content: `This year is wrapping up with no shortage of energy and optimism, but still plenty of market intricacies putting pressure on many dimensions of the startup and VC ecosystem. 

We presented to our investors about these unique market dynamics in the Fall, alongside where we’ll invest next, how our companies are positioned, and what opportunities are keeping us up at night (in the best way). 

Today, we’re sharing [an excerpt of that presentation](https://pitch.com/v/forerunner-lp-slides-fall-2024-92w4dp), so builders across industries can have insight into our research on the state of early-stage funding, the exit market, and consumer AI.*TLDR*: We’re in a time where there is lots of experimenting, building in tandem with interdependencies, and an early rush to the most addressable needs or more obvious opps. The important thing to remember: the biggest opportunities are not yet known, and certainly not the most obvious. For more on our perspectives on this messy, creative stage and where we’re focusing next, see our [recent piece on our latest early-stage fund](https://www.forerunnerventures.com/our-perspectives/human-insight-in-the-age-of-ai-announcing-fund-vii). #### Some highlights from the data and our perspectives:

*The state of early-stage*
- VC funding is still off the 2021 peak, but ahead of levels 5 years ago — and 5x the market 10 years ago. In our view, this correction feels balanced.
- This year will match or slightly beat 2023 in terms of VC dollars invested, but with lower deal count. This relates to AI companies fetching higher valuations and the companies raising successfully having stronger unit economics (“a flight to quality”). 
- Seed deals are down 55% since 2022, but Series A deal count is down even more so. In many cases, we’re seeing seed and series A round become more or less synonymous in terms of company progress. The lines are blurred.

*More on the state AI investment*
- As foundations are being laid to power the AI transition across markets, it's no surprise the early majority of AI-focused series A dollars (95%+) have flowed to enterprise and infrastructure. 
- Overall, AI-forward companies are capturing a 20%+ premium, in part based on competition for the rounds and a greater expectation of follow-on interest.
- Big Tech has more than doubled its AI investment since 2020. This makes sense if you believe the new guard of AI companies pose some existential risk to them. 
- Once the AI infrastructure is in place, the consumer opportunities unfold — a turn we’re starting to see now.

*The state of IPO market*
- This year started with high hopes for a breakout IPO year. Now, that's a 2025 topic. There have been some offerings this year that were well-received, at least initially. In terms of after-market performance, Tempus and Reddit are the standouts.
- Bankers continue to unilaterally state a high bar for IPO success, from Rule of 40 to market dominance. This is sobering, but clarifying. 
- There’s $303B in VC dollars in 270 US-based companies that are in aggregate valued at $1.9T. Not all of these will go public. But, there will undoubtedly continue to be big winners ahead. The new tech cycle has us more convinced of this than ever.

*The state of M&A market*
- The data shows M&A off its lows in 2020, and even up vs. the previous year. That said, it’s still anemic relative to where it once was, and the forwardlooking outlook is tempered.
- Most of the M&A activity is happening at the early-stage. There always is a market for acquiring new capabilities and growth, but the asset must improve the acquirer's business without much risk. 
- At Forerunner, we keep our focus on underwriting to IPO potential. 

*The consumer AI opportunity*
- Rarely are first movers, when it comes to the application of new technologies, the ones that ultimately win (see: search and social with Infoseek queries and Friendster). The same was true with mobile — early apps came and went. But eventually, the right solutions to real problems play out. We're arguably still in this era with mobile.
- Most of the emerging consumer AI solutions of today have gained traction because they **optimize** around what models already do **inherently **well. This **next chapter **will be led by companies that apply these advantages in less/non-obvious ways to **meet the consumer **where they need it most.
Today, we see AI opportunities falling into three categories:
- AI-Boosted: refers to essentially most companies. Companies working smarter, not harder, with AI and benefitting from real efficiency gains: [Leland](https://www.joinleland.com/), [Fora](https://www.foratravel.com/), [Fay](https://www.faynutrition.com/), and [Joy](https://www.joy.co/) - to name a few.
- AI-Enabled: companies that are now uniquely possible with AI, such as [Duckbill](https://www.getduckbill.com/), [Daydream](https://daydream.ing/), [Juni](https://junilearning.com/), [Alma](https://www.tryalma.ai/), and [Topline Pro](https://toplinepro.com/). This *really is* our sweet spot. 
- AI-Led: where LLMs live, but it’s more than that — it’s the enabling technologies that make LLMs useable and actionable.`,
    downloadUrl: "https://cdn.prod.website-files.com/67bafd4e267713b0ed137fd8/67d31790dae3851e148cb484_Forerunner%20State%20of%20the%20Market%20Report%20-%20Fall%202024.pdf",
  },
  {
    slug: "your-cac-doesnt-matter",
    title: "Your CAC Doesn't Matter",
    date: "May 29, 2025",
    year: 2025,
    author: "Forerunner Ventures",
    authorTitle: "",
    category: "Research",
    company: null,
    excerpt: `When Forerunner first partnered with digital brands and platforms, I was leading acquisition at Bonobos—a pioneering digital apparel brand for men founded in 2007, and one of the first to reach scale...`,
    content: `##### The brands of the next decade will win with loyalty, not acquisition. 

When Forerunner first partnered with digital brands and platforms, I was leading acquisition at [**Bonobos**](https://bonobos.com/)—a pioneering digital apparel brand for men founded in 2007, and one of the first to reach scale with $100M+ in funding backed by Forerunner, Lightspeed and Accel. At the time, building a brand online had never been easier, but scaling a business was quite hard; the challenge of cutting through the noise was limited, while the sophistication of tools and services we’ve come to expect for online business were developing.

Today, the inverse is true. From distribution channels to backend technologies and everything in between, the ecommerce ecosystem has matured and [**the face of the seller**](https://www.forerunnerventures.com/our-perspectives/the-next-revolution-in-commerce-will-be-driven-by-the-seller) has evolved as the bar for starting an online business has progressively lowered. This has intensified competition for consumer dollars and mindshare online. Facebook’s advertising revenue growth and Shopify’s merchant growth over the past decade captures this inversion well:In a market where starting an online business is easier than ever, acquiring customers has become more expensive and competitive. To win, brands of the next decade—from venture-backed companies to long-tail merchants and SMBs—must lead with loyalty. 

If the last decade met the market desire for starting online businesses and changed the game for acquiring customers efficiently and at scale online, the next decade will push forward loyalty and create opportunities for businesses to invest as many resources in loyalty as they do in acquisition.

##### The Power of Loyalty

Some of the most successful, beloved and iconic brands of the past few decades are built on compelling and sophisticated loyalty efforts. However, for digital brands and consumer tech platforms on accelerated trajectories, growth has historically been synonymous with acquisition. Companies typically start to identify top customers and loyalty strategies too late to make loyalty a core pillar of the business and something the company is known for in the market. 

Loyalty works best when markets are competitive like they are today. Supermarkets and airlines were some of the first companies to launch loyalty programs at scale in the middle of the 20th century. Companies in both categories offered a commodity, service or product, and were smart to think of ways to keep customers in the fold. This speaks to the opportunity brands and consumer tech platforms at large have today with loyalty.

After a decade of developing and sharpening acquisition to scale companies quickly and efficiently, loyalty has the same potential to propel growth with compounding and defensible effects and to raise the bar for customers.

At Bonobos, the topic of loyalty didn’t come up in earnest until about 6 years into the company’s life cycle. [**Craig Elbert**](https://www.linkedin.com/in/craig-elbert-6978346/), the VP of Marketing, sharpened our perspective on LTV and customer segmentation with a memorable presentation on “Whales” (top customers) and “Piranhas” (unprofitable customers).Like most other emerging brands and consumer tech platforms, we could have started these efforts sooner. We could have done more to move the needle on loyalty, which may have paid dividends down the line as we homed in on reaching profitability. In reality, as one of the first digital brands taking venture dollars, we obsessed over CAC (cost to acquire a customer) and hadn’t conceptualized the strategy and levers for the LTV (lifetime value). While we maniacally focused on the 3x LTV:CAC benchmark, CAC received more airtime and resources than LTV.

Even the most successful consumer tech platforms with network effect, viral growth, and subscription narratives invest significant budgets into advertising, but those dollars are often directed to acquisition and top-of-funnel brand-building. Meanwhile, those with consumer-facing loyalty efforts usually introduced them relatively late in the company’s journey. If a team aspires to reach the scale of these successful companies, there will be a significant marketing budget. The earlier you can align on what a loyalty budget and mindset looks like, the better. 

##### The Future of Loyalty

As a consumer, I’m loyal and a reward optimizer. I belong to Amazon Prime and Chase Sapphire Reserve, which has given me access to Lyft Pink and Doordash’s Dash Pass. For a few years, I had a JetBlue credit card when my husband and I lived long-distance, and prior to that, an American Express Starwood Preferred Guest card when I had the great fortune of paying rent with American Express for no fee. Way back, I no doubt had a collection of co-branded credit cards from J.Crew, Banana Republic and Gap. 

I’m not alone. According to a recent Forerunner survey, 75% of consumers belong to a loyalty program (48% belong to 3+ programs), 61% are more likely to spend where they are a program member, 50% are willing to pay to be a member of a program, and 50% would be more interested in opening a credit card if it included a loyalty program.

After a year without shopping and travel, I’m ready for something new and fresh and we at Forerunner see a wave of loyalty offerings coming. The timeliness of loyalty is especially relevant in the context of Gen Z’s emerging purchasing power and brand loyalty, the increasing scrutiny on data privacy that will limit targeted advertising, and the lessening influence of traditional department store and travel reward programs. 

The loyalty landscape is shifting: a path is emerging for venture-backed brands and platforms, long-tail merchants and SMBs alike to create compelling and modern loyalty offerings that have previously been reserved for incumbent at-scale brands and platforms. Successful strategies will vary by category, business model and scale. But now is the time, and the goal remains the same:

> *Find opportunities for recurring low actual cost and high perceived value rewards and recognition to keep customers coming back, build brand affinity, and create an emotional connection with customers.*

Like acquisition, LTV and loyalty have levers. There are four primary ways to improve LTV.

The first three are consumer-facing, and the fourth is more likely to be an internal effort without consumer touchpoints. With acquisition, most companies start spending on Facebook and Google, while growing into brand and top-of-funnel spend. With loyalty, there are ways to get started early and initiatives to work towards. The important thing is to start early and build loyalty as a core pillar of the business. This is a buyer’s market with consumers holding the power.

*Getting started: Focus on customer, assortment and data. ***Customer:** To kick off, think about your customer. Who is your customer? What does your business mean to them? How does it fit into their lives? Why and how do they shop with you? What behavior do you want to drive them toward? This framework should underpin your evolving approach to loyalty. **Assortment:** Is your product or service complete? Are there things a customer would naturally expect to purchase from you that they can’t already? Companies have a wedge into the market, and once they build trust with a customer, they are able to use the wedge to expand the assortment. At Bonobos, the wedge was pants and from there we moved to selling tops and then formalwear. This holds true for subscription and non-subscription companies, as well as service and consumer tech companies. hims&hers in the Forerunner portfolio started with hair, sex, and skin and has naturally expanded to supplements, mental health, and primary care. Spotify started with music and has moved into the broader audio category through podcasts. Even though you can start here, revisit your assortment regularly. What else can you do for your customers over time?**Data: **Do you have the ability to easily track churn, AOV (average order value) and gross margin, and roll that up to an LTV calculation? Can you track the return on the dollars you invest in loyalty? This is a must for a business to succeed and to be able to segment customers, start loyalty efforts, and learn what’s working. What used to require a data science team and a heavy lift—setting up a business intelligence (BI) tool or a customer data platform (CDP)—can now be accomplished faster and with fewer resources with tools like [**Source Medium**](https://www.sourcemedium.com/), [**RetentionX**](https://retentionx.com/), [**Peel**](https://www.peelinsights.com/), [**Tydo**](https://www.tydo.com/), and [**Daasity**](https://www.daasity.com/) for data insights and [**Hightough**](https://www.hightouch.io/) and [**Alloy**](https://runalloy.com/) for segmenting and syncing data across marketing tools. *Ramping up: Focus on unlocking marketing channels and surprise and delight.* **Marketing channels:** How are you able to stay in touch with existing customers? For decades, email has been the primary channel for driving repeat transactions. Email programs will continue to be worthy of investment and companies that succeed will prioritize custom series of emails with logic and segmentation over mass emails to the entire distribution list (see [**Retention Science**](https://www.retentionscience.com/)). Additionally, text marketing has emerged as a promising channel that complements and eventually may replace email. Between [**Attentive**](https://www.attentivemobile.com/), [**Emotive**](https://emotive.io/), [**Postscript**](https://www.postscript.io/), [**Charles**](https://www.hello-charles.com/), or [**Klaviyo**](https://www.klaviyo.com/features/sms-marketing), find a partner early and start growing your text list; it’s a low-effort, low-cost, and in-the-moment medium that today feels more personal than email and has a much higher open rate—86% vs. 20%. Text can also be a strategy for turning a CX team from a cost center to a revenue driver.**Surprise and delight:** What can you do that will impress consumers, but that consumers do not expect? This is an opportunity to get creative. If you have enough liquidity with sellers and buyers, you could launch a P2P resale program on your site with [**Archive**](https://www.archiveresale.co/) or [**Treet**](https://www.treet.co/) to bring customers back and offer a higher payout for taking store credit. You could work with [**Swaypay**](https://www.swaypayit.com/) to offer cashback to customers who post about their purchase on social. You could work with [**&Open**](https://andopen.co/) to send digital and physical gifts to customers at scale, or include your products on 
[**Goody**](https://www.ongoody.com/) to provide an easy way for customers to send your product or service as a gift to their friends and family. *Established: Explore loyalty programs.* Once you have learnings and have reached a critical mass customer base, exploring a formal loyalty program can be a logical next step. These initiatives are nuanced depending on the dynamics of the category and business model.

> *Historically, loyalty programs work well in competitive markets with relatively undifferentiated products, where consumers are open to building brand affinity, and in categories that have low cost and high perceived value goods or services—think airlines, hotels, beauty and department stores.*

It’s even better if the goods or services are perishable. A first class seat may be open for this flight, but not for the next, and upgrading a customer for this flight has minimal cost to the airline and incredible upside for the customer. It is important to be extra diligent when conceiving a loyalty program and to consider whether or not to introduce a point system or charge a membership fee for the program. When done well, programs can have a tremendous impact on the business and change customer behaviors. When done poorly, they can be uneconomical and challenging to unwind.

To get started, you could join a horizontal loyalty program or payment option focused on cashback (or Bitcoin), like [**Drop**](https://www.joindrop.com/), [**Lolli**](https://www.lolli.com/), or [**Catch**](https://www.getcatch.com/). You could also explore [**Smile**](https://smile.io/) or [**Yotpo**](https://www.yotpo.com/platform/loyalty/) if you’re inclined to start your own loyalty program or consider a co-branded rewards credit card with [**Imprint**](https://imprint.co/) and [**Cardless**](https://www.cardless.com/) (there can be a kick-back in processing fees to help fund the program).> *As you map out a program, keep ‘low cost, high perceived value’ in mind, be creative, and listen to your customers about what matters to them.*

Offer store credit that doesn’t expire, give early access to new products and sales, give cash back for posting to social media, prioritize orders in the fulfillment queue, provide a special email or phone line for customer service, offer to cover carbon offsets for the purchase, or provide final sale exemption. Your imagination will be an asset, especially if your business is omnichannel. [**Blume**](https://www.blume.com/pages/blumetopia), [**Thirdlove**](https://www.thirdlove.com/pages/hooked), [**Prose**](https://prose.com/the-salon), [**Inkbox**](https://inkbox.com/inkfam), [**Rent the Runway**](https://www.renttherunway.com/memberships), [**Italic**](https://italic.com/join), and [**HotelTonight**](https://www.hoteltonight.com/support/faq) are companies that started programs early in their company journey and may provide inspiration.##### The Challenge

As you think about leading with loyalty, I encourage you to think about your favorite brands. Who has made a meaningful impact on your life? What would keep you engaged with and enthusiastic about this brand in a market where you likely have other options? Be bold! Think big. I’m a Trader Joe’s loyalist and shop there weekly. For top customers, I would love to see Trader Joe’s offer early access to shop in the store before lines get long; I used to plan my weekend around going first thing Sunday morning in NYC. I would join the long, winding checkout line -- wrapping from aisle to aisle -- as soon as I walked into the store and would shop from the line until I reached the cashier. Not the best experience, but something I was willing to organize my weekend around because I love the products. Today in SF, when I need flexibility, I now shop at Whole Foods.

Take this spirit and mindset to your team, and channel the energy into how you can lead with loyalty. What can you do for your customers? In the next decade, this is how brands will cut through the noise and win.

‍`,
  },
  {
    slug: "investing-in-monarch-money-the-future-of-consumer-finance",
    title: "Investing in Monarch Money: The Future of Consumer Finance",
    date: "May 27, 2025",
    year: 2025,
    author: "Eurie Kim",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "Monarch Money",
    excerpt: `Managing money is a forever problem—a persistent, deeply personal challenge that spans demographics, income brackets, and life stages. Whether you're a recent graduate setting a budget for the first...`,
    content: `**Managing money is a forever problem**—a persistent, deeply personal challenge that spans demographics, income brackets, and life stages. Whether you're a recent graduate setting a budget for the first time or a high-net-worth individual managing complex assets, financial planning can feel overwhelming, anxiety-inducing, and uncertain. A growing sentiment is taking hold: *no matter how much you earn, it never feels like enough — and rarely like you are truly in control.*There is no shortage of data illustrating this tension:

- [88%](https://www.marketwatch.com/financial-guides/banking/financial-stress/) of Americans experience financial stress, with 65% citing finances as their biggest source of stress.
- [54%](https://www.fool.com/money/research/2024-financial-stress-anxiety-and-mental-health-survey) feel stressed or anxious about their personal finances at least three days a week, and 87% experience financial stress at least once a week.
- [Nearly half](https://www.bankrate.com/loans/personal-loans/money-and-mental-health-survey-2024/) of U.S. adults say money negatively impacts their mental health, leading to anxiety, stress, and loss of sleep.[‍](https://www.investopedia.com/articles/pf/09/marriage-killing-money-issues.asp)
- [A quarter](https://www.investopedia.com/articles/pf/09/marriage-killing-money-issues.asp) of couples identify money as their greatest relationship challenge, with the average couple arguing [weekly](https://talkerresearch.com/couples-argue-this-many-times-a-year-about-money/) about money, and financial problems accounting for one of the top reasons for divorce.

While traditional financial advisors have long served the wealthiest individuals, the majority of consumers have been left behind. And while digital platforms have emerged to try to streamline banking, payments, and investing, the market has yet to produce a holistic, digital-first solution for comprehensive financial advisory. This is the gap Monarch is built to fill—and why it’s resonating with beginners through the financially savvy alike.

**Solving the Visibility Problem: The Missing Wedge**At the heart of the consumer finance conundrum lies a deceptively simple problem: **most people have no clear, consolidated view of their financial lives**. Financial data is fragmented across banks, credit cards, 401(k)s, investment accounts, and debt obligations. Many consumers track their finances manually or with a patchwork of apps, unable to answer the most basic questions: *Where is my money going? Am I on track?*Monarch solves this with a seamless, intelligent aggregation layer that connects every facet of a user's financial world. By visualizing the complete picture—spend, income, debt, and assets—Monarch gives users clarity and control. This is more than a dashboard; the AI-enhanced platform offers smarter, more personalized recommendations, transforming static data into actionable insights. Scenario modeling, forecasting, and recommendation engines are layered on top of its financial dataset, turning personal finances management from passive tracking into a proactive, strategic effort.

This approach has seen immediate resonance — in 2024, Monarch’s revenue grew 6x from the year prior. With this wedge in place, the door opens to expand naturally into adjacent services — everything from tax strategy, estate planning, and investing could be in their purview.

**Consumer Trend Tailwinds**Monarch fits squarely into themes we champion at Forerunner, including our [Proactive Measures](https://www.forerunnerventures.com/perspectives/proactive-measures) framework, which is rooted in a society increasingly defined by personal agency and self-directed advancement. More than ever, consumers are looking to step into the role of CEO of their own lives — something we’ve seen play out not just across personal finance, but consumer health, security and safety, and career development and learning. It’s human nature to persevere and strive for better, but never have technology tools made the proactive path so accessible. AI-driven services are anticipatory by nature and can act as true co-collaborators in taking action. This means being proactive is no longer just an edge for the advantaged; it is becoming a more universally attainable goal for all. As early investors in [OURA](https://ouraring.com/), a company that has redefined how people understand and improve our health starting with the foundation of understanding our sleep, we see Monarch leading a parallel transformation in finance starting with the foundation of aggregating accurate data and empowering proactive budgeting. OURA, along with many more health and wellness companies providing proactive, integrated approaches, has helped transform elements of our health from opaque, personal, and largely private matters into aspirational, empowered parts of life where education and ownership are within reach. Monarch’s is already pioneering a similar dynamic in personal finance, serving a broad spectrum of users — from first-time budgeters to sophisticated asset managers. The platform is designed to grow with users through every financial chapter, from debt payoff to retirement planning.**Right Team, Right Timing**The Monarch team was built for this moment. Founded by the original team behind Mint.com, the company is positioned with unparalleled strength to capture the trust of consumers searching for a stronger financial strategy amid skyrocketing costs of living and mounting economic pressures. Monarch is not just a budgeting tool; it’s becoming a full-stack financial advisory platform—one that can finally meet the needs of the millions of consumers navigating the complex, emotional terrain of money.

In a world where managing money never ends, Monarch is building the platform that can grow with you. And that’s a rare kind of compounding value—for users and for the market.`,
  },
  {
    slug: "the-architects-of-experience",
    title: "The Architects of Experience",
    date: "May 20, 2025",
    year: 2025,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: "Theses",
    company: null,
    excerpt: `Building for Consumers In the Age of AIGen AI’s meteoric rise is both well underway and very early relative to the potential. As builders and investors race to uncover where the long-term, durable...`,
    content: `*Building for Consumers In the Age of AI*Gen AI’s meteoric rise is both well underway *and* very early relative to the potential. As builders and investors race to uncover where the long-term, durable business opportunities lie, we think it’s valuable to take stock in what defined success in the prior consumer platform shifts in order to best anticipate what will win tomorrow. No doubt what comes next will be distinct from the mobile and internet eras, surprising us in ways we can’t yet imagine. But we believe that to see what’s next, you have to understand the present so clearly that the future becomes an inevitability.The last three decades have brought unprecedented change to consumer tech business models, with the winners of each new wave systematically displacing industry incumbents through greater efficiency, scale, and new experiences. From the internet to the ubiquity of mobile, and now the emergence of generative AI, each wave has not only redefined what consumers expect but also how companies compete.

Today, AI is in a messy, creative period of boundless experimentation and excitement. But the generational companies of tomorrow are getting started today. With the right framework for understanding fundamental platform shifts, we can see the signals of what types of models, behaviors, and founders will ultimately dominate this next era of transformational opportunity.

##### Let’s get to it:

**PART I**: The Forces of Reinvention: Internet, Mobile, and AI**PART II**: The Evolution of Business Model Advantages: How Each Generation of Disruptors Leveraged Key Advantages to Win**PART III**: The Builders, The Designers, and The Architects: Who Wins in Each Era?**PART IV**: User Adoption Challenges and Pathways to Overcoming Them‍

**PART I: The Forces of Digital Reinvention: Internet, Mobile, and AI****The Internet Boom: Aggregation, Disintermediation, and the Rise of Digital Commerce**The initial wave of internet-driven transformation, starting in the late 1990s through the early 2000s, dismantled traditional business models built around physical infrastructure, localized transactions, and high-friction distribution channels. Companies that thrived in the pre-internet era—like Walmart, Blockbuster, and traditional travel agencies—relied on centralized, asset-heavy models that required significant human intervention.

The internet upended this by introducing disintermediation and aggregation, allowing consumers to bypass middlemen and directly access products, services, and information. Amazon disrupted brick-and-mortar retail with its vast, centralized ecommerce marketplace. eBay and Craigslist made newspaper classifieds obsolete by enabling peer-to-peer selling at scale. Expedia and Priceline challenged the value of travel agents by aggregating flights and hotels into a single user-controlled interface.

These digital-first companies provided better experiences for customers in ways that traditional businesses could not:

- **Lower Costs**: Digital distribution eliminated overhead costs associated with physical locations and manual processes.
- **Greater Convenience**: Consumers could shop, book travel, and access content from their homes rather than relying on in-person transactions.
- **Increased Access & Choice:** Aggregated platforms allowed consumers to compare options in a way that physical marketplaces never could.

But while these companies reshaped industries, they were still primarily desktop-based and required a non��trivial level of invention from consumers. The next major shift—mobile—would take convenience to an entirely new level.

**The Mobile Revolution: Instant Access and the Behavioral Dependencies**By the late 2000s and early 2010s, mobile technology reshaped consumer behavior once again, taking business models from online to on-demand and always available, shaping new, sticky behaviors along the way. While the internet had removed barriers of physical location, mobile removed the barrier of time, creating a world in which commerce, entertainment, and communication could happen instantaneously, anywhere.

Retail became mobile-first, with companies like Instagram Shopping and Shopify’s Shop enabling social commerce and impulse-driven transactions. Instacart and Uber redefined utilities by leveraging real-time availability and geo-location. Streaming services like Netflix and Spotify took media consumption from fixed electronics to completely portable, allowing users to access entertainment wherever they were. The thrill of instant gratification quickly turned into expectation, raising the bar for consumer experiences across every category.

*What made mobile-driven businesses fundamentally better than their internet-era predecessors?*
- **Immediate Transactions**: One-click purchases, real-time booking, and mobile payments (e.g., Apple Pay, Venmo) eliminated the last pain points of digital transactions.
- **Personalization**: Apps could now track user behavior, location, and preferences to offer more relevant experiences.
- **Push Engagement:** Instead of waiting for users to visit websites, mobile companies could proactively engage consumers through notifications and recommendations.

This shift made businesses more integrated into everyday life, creating behavioral dependencies that set the stage for the next major leap: AI-driven business models that anticipate, automate, and enhance human decision-making.

**The AI Era: Intelligent, Personalized, and Predictive Experiences**Now, we are entering the next great transformation—AI and automation. Unlike the internet and mobile waves, which focused on connectivity and convenience, AI is about intelligence and execution, removing the need for consumers to make repetitive decisions or even actively search for solutions in the first place.

AI-native companies build on the foundations of digital and mobile commerce, but shift away from involved engagement toward proactive, predictive, and automated interactions.

- Commerce is becoming conversational. AI-powered assistants like Shopify Magic, Perplexity AI, and soon-to-launch Daydream are replacing search-based shopping by suggesting products before consumers even ask.
- Entertainment is evolving beyond curation into creation. AI-driven tools like Runway AI are making it possible for users to generate video and audio content at scale, reducing the need for traditional production pipelines.
- Finance is shifting from manual decision-making to intelligent automation. AI-driven platforms like Origin and Monarch Money are making investing and budgeting more accessible by recommending and executing actions based on individual goals.
- Customer service is moving from reactive to predictive. AI chatbots and virtual assistants anticipate user needs and solve problems before they arise through platforms like Decagon and Sierra.

*Why is this model superior to the mobile-driven businesses of the last decade?*
- **Little to No Friction:** Instead of enabling users to seek out information, AI-driven systems preemptively provide insights, options, and actions.
- **Mass Personalization at Scale**: AI makes it possible to customize experiences for millions of users individually, rather than relying on broad segmentation.
- **Automation of Repetitive Tasks**: Consumers can focus on higher-value activities while AI handles transactions, bookings, and communications.

*What This Means:*If the internet era was about access, and the mobile era was about instantaneity, the AI era is about effortlessness—removing human inefficiency, making transactions invisible, and anticipating needs before they are even expressed.

Each shift in technology has replaced outdated, less efficient legacy players with new entrants that better serve the modern consumer. The companies leading this next transformation are not just improving existing experiences; they are fundamentally reimagining the experience itself. The winners of this new era will be those who eliminate friction, build self-evolving systems that get smarter with every interaction, and create value for consumers before they even realize they need it. 

**In this sense, AI is more than just a tool—it is becoming the business model itself.****PART II: The Evolution of Business Model Advantages: How Each Generation of Winners Manipulated Key Advantages to Win**Across each platform shift—the internet era, the mobile revolution, and now AI—**the most successful companies have thrived not just because they introduced new technology, but because they mastered and optimized specific business model advantages that reinforced their market dominance.**Each generation’s winners leaned heavily on one or more core advantages of their technology wave—whether it was network effects, data scale, personalization, or automation—to create self-reinforcing, high-retention ecosystems that were designed to structurally improve with time. The companies that succeeded weren’t just tech innovators; they were business model innovators, leveraging new economic advantages that made them very difficult to challenge.

**1st Generation: The Internet Era (1995-2010) – Aggregation & Disintermediation****Core Business Model Advantages: Network Effects, Data Scale, and Asset-Light Scalability***How It Worked:*The early internet’s biggest advantage was its ability to aggregate previously disparate supply and demand at scale, while eliminating inefficient middlemen. The businesses that won in this era built marketplaces and platforms where more users made the platform better for everyone, creating self-sustaining network effects.

*Why These Models Were Powerful:*
- **Network Effects Created High Retention**: Once a marketplace reached critical mass, it was difficult to compete against.
- **Asset-Light Scalability**: These companies didn’t own inventory; they simply connected buyers and sellers at scale — a significant advantage over their predecessors.
- **Data Scale**: New targeting and ad revenue channels became immensely powerful
- **Lower Costs → Lower Prices**: By removing middlemen, they passed savings to consumers.

*Weaknesses & Evolutionary Gaps:*
- **Static Experiences:** Even with aggregation, the experience was still unilateral and required active intervention from consumers.
- **Limited Real-Time Capabilities**: Booking, shopping, and search were efficient, but they didn’t happen in real time—that would come with mobile.

**2nd Generation: The Mobile Era (2010-2020) – Real-Time, Personalization & On-Demand Models****Core Business Model Advantages: Intermittent-Frequent Engagement, Instant Accessibility, and Personalization***How It Worked:*If the internet era was about removing friction in access, the mobile era was about removing friction in time—bringing services directly to users, making transactions instant, fueling new sticky behaviors, and allowing increasingly personalized experiences.

*Why These Models Were Powerful:*
- **Instant & On-Demand**: Products and services were untethered from locations and desktops, and consumers could book, buy, or stream instantly from anywhere.
- **[Light] Personalization at Scale**: Algorithmically-driven content recommendations replaced static user searches.
- **New Habit Formation**: New sticky behaviors emerged from viral loops, gamification, and instantaneity, making new interfaces indispensable. 

*Weaknesses & Evolutionary Gaps:*
- **Still Required Consumer Action**: Even with personalized recommendations, users still had to actively engage with platforms.
- **Scaling Costs Increased**: Unlike the first wave, many of the most significant companies, such as Uber and Airbnb, had physical constraints (cars, drivers, homes).

**3rd Generation: The AI Era (2022-Present) – Automation, Intelligence & Continuous Learning****Core Business Model Advantages: Continuous Learning, Next-Level Personalization, and Proactive Automation***How It Works:*Today’s new platform shift moves beyond real-time engagement to automated decision-making and proactive experiences. Instead of users searching, browsing, or even tapping, AI-native platforms preemptively offer insights and actions, eliminating decision fatigue and making interactions effortless. The continuous learning makes the experience so personalized, switch costs ultimately become almost impossibly high through their accrued context.

*Why These Models Are More Powerful Than Mobile:*
- **Gen AI Continuously Improves**: Unlike previous models, AI platforms get smarter over time, creating self-reinforcing retention loops.
- **Decision Fatigue Is Relieved**: Instead of researching and manual comparison, users get intelligent prompts.
- **Frictionless & Proactive**: AI personalizes and predicts actions before users request them.

**Ultimately, Each Era’s Winners are Masters of Core Business Model Advantages of Their Time**The most successful companies don’t just offer new technology; they manipulate the business model advantages to have an unfair edge. As we move into an AI-driven future, the dominant companies will be those leveraging self-learning systems, automation, and predictive intelligence to reduce friction to zero and make the consumer experience effortless.

**PART III: The Engineers, The Designers, and The Architects: Who Wins in Each Era?**Each wave of technological transformation has required leaders with different core skills to stand out. Early on, technical ability was the primary differentiator, but as tech stacks have evolved and lowered the barrier to entry, the key advantage is shifting toward vision, orchestration, and consumer insight rather than raw technical execution.

Let’s break it down across each major transformation wave:

**1st Generation: The Internet Era (1995-2010) – Technical Proficiency & Digital Infrastructure***Key Skill: Engineering & Software Development*At the dawn of the internet, the most valuable skill was knowing how to build software and infrastructure. Because the early internet companies—Amazon, Google, PayPal, and eBay—were built to solve fundamentally technical problems:

- How do you efficiently and safely process payments online? (PayPal)
- How do you serve search results at a massive scale? (Google)
- How do you build a vast and secure online commerce and logistics platform? (Amazon)

At this stage, the ability to code and build new internet-based applications was the rare, high-value skill. The winners were those who could create the technology that made the internet more complex and usable at scale.

*What made talent stand out in this era?*
- Deep technical skills in programming, database management, and web architecture.
- Ability to build from scratch—everything had to be custom because cloud services, APIs, and third-party tools didn’t yet exist.
- First-mover technical advantage—being able to write efficient code gave companies an edge because fewer people had this capability.

*Why This Evolved:*By the late 2000s, infrastructure like AWS, Stripe, and open-source tools abstracted away much of the hard engineering work, allowing new businesses to build without deep technical expertise.

**2nd Generation: The Mobile Era (2010-2020) – UX, Growth, and Personalization at Scale***Key Skill: Mobile Product Design & Data-Driven Growth*Once mobile and cloud computing matured, the playing field shifted. With AWS providing scalable servers, Stripe handling payments, and social media allowing for audience-building, the key skill shifted from building infrastructure to designing instantaneous, sticky user experiences.

Winning in this era wasn’t necessarily about who had the best engineers—it was about who could create the most engaging, habit-forming mobile experience.

*What made talent stand out in this era?*
- Mobile-first UX & design thinking – Companies like Uber, Airbnb, and Instagram succeeded because they made transactions real-time and seamless.
- Data-driven growth & behavioral psychology – The best product teams mastered A/B testing, retention loops, and viral mechanics (e.g., Instagram’s social sharing, TikTok’s algorithm) to turn engagement into a daily (or hourly) habit.
- Monetization mechanics – The mobile economy relied on in-app purchases, ads, and subscriptions (e.g., Netflix’s shift to streaming, TikTok’s ad revenue).

*Why This Evolved: *As mobile UX patterns became standardized, companies that simply optimized for engagement and retention saw diminishing returns. The next wave would require even more intelligence and automation to stand out.

**3rd Generation: The AI Era (2020-Present) – Product Vision, Orchestration & Continuous Learning***Key Skill: Consumer Insight, AI Orchestration, Excellence in Delivery and Distribution*Now, in the AI-driven era, technical execution is no longer the primary differentiator. AI tools like Scale AI Copilot, Cursor, and off-the-shelf APIs (such as OpenAI, Anthropic) are democratizing access to technical capabilities. Engineers are still critical, but they’re now super-powered by AI, able to ship faster with far less resourcing than before.

**This shifts the core competitive advantage from “Who can build it?” to “Who can assemble and refine it best?”***What makes talent stand out in this era?*
- Visionary product design & consumer insight – When raw engineering skills are abstracted, the most valuable skill shifts to knowing how to assemble the best AI-driven tools into an intuitive, delightful, and indispensable experience. 
- Data strategy & continuous learning – AI-powered companies need to collect and refine user data in a way that gives the business an unfair advantage over time, by creating stickier and more intelligent products. 
- Consumer trust & AI-human interaction – As AI tools become more prevalent, the winners will create trustworthy, transparent, and ethical AI systems that users feel intentional about engaging with.
- Distribution excellence — While distribution is always pinnacle, commoditized tech stacks mean copying interfaces and ideas is easier than ever. Distribution edges are now uniquely powerful, both in getting ahead of competition and fueling data accumulation and continuous learning loops that lock consumers in.

*Why This Is the Most Valuable Skillset Today:*Architecting is king. The real competitive advantage comes from integrating AI models into world-class user experiences that are uniquely poised to win through continuous learning.

*What This Means for Today’s Builders & Entrepreneurs:*In the 90s, software engineers were the kings. If you could build a website, an e-commerce platform, or a search engine, you could change the world.

By the 2010s, product designers and growth marketers became the most valuable players. If you could create an intuitive mobile experience, optimize for engagement and monetization at scale, you would be in a prime position.

Now, in the AI age, the coveted skill is product vision and orchestration. The best AI-native companies will not just use AI as a feature, but as the core of their business model, to create entirely new consumer experiences that get better with time.

**PART IV: User Adoption Challenges and Pathways to Overcoming Them**AI-driven experiences promise a frictionless future, but only when we solve for the user adoption hurdles that businesses will inevitably navigate. These challenges stem from trust, economic factors, and behavioral inertia, and overcoming them will require a combination of education, transparency, human-AI collaboration, and regulatory adaptation.

#### Key Challenges in User Adoption

*Trust and Transparency Concerns:*Users often struggle to trust AI-driven decisions, particularly in high-stakes areas such as finance, healthcare, and personal data security, without fully understanding how AI reaches conclusions. 

*Example: AI-powered investment platforms may outperform human advisors on paper, but consumers might hesitate to trust an algorithm with their finances unless they understand its decision-making logic.**Loss of Control and Human Autonomy:*Many consumers are accustomed to being active participants in decision-making and routine processes. The idea of AI fulfilling purchasing, financial, or even lifestyle decisions on their behalf can feel unsettling.

*Example: AI-powered shopping assistants might automatically reorder essentials, but users may resist if they feel like they’re losing control over what they buy and when.**Job Displacement Fears and Economic Disruption:*AI automation threatens traditional roles in multiple industries, leading to serious concerns about job security and economic shifts. Adoption may be resisted not just by consumers, but industries that feel their value is eroded by automation.

*Example: AI-generated content platforms may face resistance from traditional creative industries, where professionals worry about being replaced.**Bias and Ethical Considerations:*AI models are only as good as the data they are trained on, and biases in AI outputs have led to concerns around imposed influence and discrimination. Users may hesitate to trust AI-driven decisions if they perceive unfairness.

*Example: AI-driven hiring tools have faced scrutiny for replicating biases in historical hiring patterns, leading to pushback from HR professionals and regulatory bodies.**Regulatory Uncertainty and Compliance Barriers:*AI adoption is often slowed by unclear or evolving regulations around privacy, data usage, and liability. Navigating this uncertain legal landscape can create friction for users and businesses alike.

*Example: GDPR and other data protection laws have already forced AI compa
nies to rethink their data collection and processing methods.*#### Pathways to Overcoming These Challenges

*Enhancing AI Explainability and Transparency:*AI models must move beyond black-box operations to explainable AI, where users can understand why AI makes certain recommendations or decisions to build confidence.

*Example: AI-powered finance platforms can introduce explainer dashboards that show the reasoning behind investment decisions.**Balancing AI Automation with Human Oversight:*AI should augment, not replace, human decision-making. Offering a hybrid human-in-the-loop model where AI assists rather than fully automates will ease adoption.

*Example: AI-driven healthcare diagnostics can provide recommendations but still require a final approval from a human doctor, reinforcing trust.**Regulatory Alignment and Ethical AI Standards:*AI companies must proactively engage with policymakers to create ethical guidelines that ensure fairness, transparency, and security. Establishing AI ethics boards or third-party audits can reinforce credibility.

*Example: Anthropic’s Crowd-Sourced AI Constitution served as a framework for understanding AI’s potentially detrimental impacts based on externally validated inputs and parameters. **Addressing Economic Disruptions with Workforce Adaptation:*Many economists predict that AI will create more jobs than it will replace, but still, the depth of AI-related job displacement is unknown. Regulators, businesses, and educators must collaborate on initiatives to prepare workers for AI-enhanced industries.

*Example: AI tools that automate coding can mean more products shipped faster, creating higher demand for product and growth management.*AI adoption will not be immediate or universal—it will require trust, transitionary stages, and clear value creation for consumers. 

**Ultimately, The Future Belongs to the Architects of Experience**If the internet era was about **access**, and the mobile era was about **instantaneity**, the Gen-AI era is about **effortlessness**—removing human inefficiency, making transactions invisible, and proactively anticipating needs.With each platform shift, new businesses have replaced outdated, less efficient incumbents by better serving the modern consumer and mastering the business model innate to the new era. The winners of this new era will build **self-evolving systems** that get smarter with every interaction and create value for consumers **before they even realize they need it**. **That means AI is more than just a technology—it is the business model itself.**‍`,
  },
  {
    slug: "beyond-the-trend-turning-insights-into-industry-leaders",
    title: "Beyond the Trend: Turning Insights into Industry Leaders",
    date: "March 25, 2025",
    year: 2025,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: null,
    company: null,
    excerpt: `At Forerunner, we often say “the world changes more than people change” — and the world is changing fast, with AI only accelerating the pace. Consumers are adapting, but not always in obvious or...`,
    content: `At Forerunner, we often say “the world changes more than people change” — and the world is changing fast, with AI only accelerating the pace. Consumers are adapting, but not always in obvious or linear ways. Our [2025 Consumer Trend Report](https://www.forerunnerventures.com/research/our-2025-annual-consumer-trend-report) is built to decode these shifts, surfacing changes that matter most in how people live, work, and spend.This year, we focused on three foundational themes—Health & Wellness, Gen AI, and Personal Security—that cut across industries and reflect the strongest drivers of consumer behavior today. But trends alone don’t shape the future—catalysts do. The real opportunity lies in translating these shifts into investable ideas that challenge incumbents, create new markets, and define the next generation of category leaders.

Beyond these core themes, we see deeper behavioral shifts—structural needs emerging at the intersection of cultural momentum, broken infrastructure, and new technological possibilities. From our research, we see the following categories emerging to address the intersection of cultural momentum, broken infrastructure, and new technological possibilities. Here is some of where we imagine bold founders can build enduring businesses to meet rising demand in fundamentally better ways:

**AI-Native Life Infrastructure**
Consumers are experimenting with AI across daily routines—from search and writing to budgeting and decision-making—but the experience remains fragmented, inconsistent, and often shallow. There’s a clear appetite for products that go beyond novelty to genuinely improve how people navigate life. The opportunity lies in infrastructure that embeds AI into the every day—where it becomes not just a tool, but a trusted partner in how people manage time, money, health, learning, and personal choices. We see clear signals that consumers don’t just want automation—they want support, clarity, and control. Entire categories stand to be rebuilt around a new expectation: AI is ambient, useful, and human in design.**Consumer-Led Care
**People are no longer waiting for the healthcare system to catch up—they’re finding ways to manage health on their own terms. Demand is growing for preventative, data-rich, and on-demand solutions that bypass traditional gatekeepers. Consumers want access to their data, clarity in costs, and tools that help them act sooner—not just react later. As diagnostics become more affordable, and AI lowers barriers to analysis, care is moving closer to the consumer—into the home, onto the phone, into the daily routine. The infrastructure to support this shift—services, platforms, navigation layers—remains underbuilt. **Applied Adaptability
**Career paths are becoming nonlinear, self-authored, and AI-influenced—yet most systems still assume a traditional model. Consumers are navigating a new reality: more independent work, faster upskilling cycles, and a need to prove credibility outside of institutions. This creates a clear gap, and growing demand, for tools that support reinvention. That might mean platforms for learning new skills, showcasing competency, or finding work that matches emerging identities and capabilities. It’s not just about “helping people get jobs”—it’s about enabling people to build flexible, resilient careers in a world where the rules keep shifting. The systems that support this shift—from education to employment—are due for a redesign.**Everyday Risk Management
**From healthcare access to housing costs to climate volatility, today’s consumers are facing a rising baseline of uncertainty. And they’re adapting—not with fear, but with pragmatism. People are actively looking for tools that help them feel safer, more in control, and better equipped to handle the unexpected. They aren’t waiting for institutions to step in; they’re recalibrating spending, decision-making, and even where they live based on perceived risk. This creates opportunity for new models of protection, prediction, and planning—from AI-powered early warnings to transparent financial cushions to decentralized safety nets. These are not niche concerns—they’re daily considerations reshaping priorities in real-time. Now for the fun part. We asked ChatGPT and Claude to pitch us company ideas based on all the insights and data in this year’s report. Some made us chuckle. Others made us pause. A few felt like tomorrow’s unicorns. Here are the best of the bunch:

**1. AI-Powered Health Marketplaces: The ‘Expedia for Healthcare’ **There is a growing demand for healthcare as a ‘buyer’s market,’ where consumers control their health choices. The opportunity: AI-powered marketplaces that match people with providers, treatments, and services based on cost, quality, and fit, with dynamic pricing, reviews, and predictive recommendations.

**2. AI-Powered Personal Finance: The Future of Automated Wealth Optimization**With AI outperforming human investors across several asset classes, why aren’t there consumer-facing AI tools optimizing spending, savings, and purchasing power in real time? Imagine an AI that predicts inflation-adjusted costs, negotiates in real time, and dynamically rebalances assets—financial optimization that runs itself.

**3. Personalized Health Insurance: The Direct-to-Consumer Overhaul **If consumers want a la carte healthcare, why not let them build modular insurance plans? A direct-to-consumer health insurance model that leverages risk pools, community-based structures, and AI-driven underwriting could flip the script on traditional insurers.

**4. AI’s Role in Housing Affordability: Automating the Home Economy**Housing affordability emerged as one of the top consumer concerns in our research. The opportunity? AI-driven solutions in construction automation, real-time housing price negotiation, mortgage underwriting, and decentralized homeownership models. Who will build the platform that makes home buying and financing truly consumer-first?

**5. AI-Powered Negotiation: The Consumer Advocate at Scale**Medical bills, bank fees, rent negotiations—consumers are overwhelmed with bureaucracy. AI can level the playing field by automating negotiations, disputing unfair charges, and optimizing financial transactions. An AI-powered ‘personal lawyer’ or ‘AI dealmaker’ could redefine consumer protection.

**6. Health Data Ownership & Monetization: A New Consumer Fintech Play**Consumers increasingly want control over their health data—but why stop at ownership? A marketplace where individuals can monetize their health data for research, pharma, and AI model training could be the next massive fintech opportunity.

**7. Trust & Authenticity Markets: The AI-Verification Layer**Consumers trust humans more than AI-generated content. This presents an opportunity for platforms that authenticate human-made content, verify expertise, and create new social capital around authenticity. Who builds the “Real or AI?” certification layer for the web? A marketplace for verified human creators? A trust-first search engine?

**8. Consumer Privacy Rebranded as a Luxury**Privacy concerns are at an all-time high, yet few consumers actively pay for security unless it’s positioned as a premium service. Our data suggests an opportunity for privacy-first platforms that make data control seamless and aspirational. AI-powered personal data vaults, ‘incognito’ payment networks, and hardware-secured personal AI models could redefine the privacy economy.

**9. AI-Enabled Career Mobility: A New Model for Workforce Adaptation**With 39% of key job skills expected to change by 2030, workers need a ‘career-as-a-service’ platform. AI-powered upskilling, personalized job-matching, and wage optimization tools could reshape career mobility. Who will build the AI-powered apprenticeship engine for the modern workforce?

**10. AI as a Second Brain: The Rise of Augmented Intelligence**While consumers are engaging with AI, many remain hesitant about full automation, preferring AI as a collaborator rather than a replacement. The winning model here isn’t full automation but augmentation—AI that enhances decision-making, provides second opinions, and personalizes knowledge management. The ‘Google for personal insight’ is waiting to be built.

**11. AI as a Creative Partner: Build Your Own Tools, No Code Required**AI is moving beyond passive assistance—consumers don’t just want to use AI, they want to shape it. But today, developing AI-powered tools still requires technical expertise, limiting who can build with these capabilities. The opportunity? A no-code AI tool-building platform that enables anyone to create their own apps, automations, and intelligent workflows without writing a single line of code.

**12. Spirituality & Religion Tech: The Faith-Based Digital Revolution**Religion and spirituality are seeing a digital revival, with prayer activity rising and faith-based platforms scaling fast. Consumers are turning to faith for stability and meaning—creating space for a new wave of scalable, purpose-driven businesses. Beyond social networks, the opportunity may lie in deepening engagement: AI-powered personal faith advisors, transparent giving platforms, and tools tailored to individual traditions.

**13. The Return of Alternative Social Networks: AI-First, Feed-Free**With over 50% of consumers using AI chat apps instead of traditional search, what happens when they start replacing social platforms? The next billion-user social experience may be AI-first, hyper-personalized, and built around 1:1 interactions rather than passive feeds.

**14. AI-Only Pharma: Direct-to-Consumer Drug Optimization**As consumer trust in AI-driven health solutions grows, the next frontier could be AI-powered prescription marketplaces. A platform for biomarker-driven therapy selection, clinical trial enrollment, or even subscription-based personalized medicine could disrupt traditional pharma.

**15. At-Home Health Diagnostics: The Thermometer 2.0**Preventative care is shifting from hospitals to homes. Blood sugar tracking, genetic testing, and early disease detection will soon be as simple as taking your temperature. The next big consumer health device? A frictionless, at-home diagnostics tool people actually use.

**16. Invisible AI Wellness & Preventative Care****‍**Passive health monitoring is the next frontier, but consumers don’t want more devices—they want seamless integration into their everyday lives. AI-driven diagnostics embedded in wearables, smart home devices, and even clothing could be the stealth breakthrough.**17. AI Therapy—Gamified & Always-On**Nearly 50% of consumers are open to AI-driven mental health support. But engagement is key—so what happens when AI-driven emotional support meets gaming? A social, interactive, AI-powered mental wellness platform could redefine digital therapy. 

**18. Resilience Tech: The Infrastructure of Security & Stability** Our research underscores growing consumer anxieties around security, health, and economic stability. The winners in this space? Companies that give people more control over their assets and identities. AI-driven fraud detection, decentralized finance insurance, cybersecurity tools, and real-world safety tech will define the next era of resilience.

‍`,
  },
  {
    slug: "proactive-measures",
    title: "Proactive Measures",
    date: "January 29, 2025",
    year: 2025,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: "Theses",
    company: "Atticus, Alma, Joy, Leland, Oura, Prenuvo, Stan, Speechify, Teal Health",
    excerpt: `Be the CEO of Your Own LifeAt Forerunner, we believe the world changes more than people change. A steady cycle of societal, political, and macroeconomic events influences how we live our lives, but...`,
    content: `*Be the CEO of Your Own Life*At Forerunner, we believe the world changes more than people change. A steady cycle of societal, political, and macroeconomic events influences how we live our lives, but consumers more or less always strive for consistent aspects: purpose, progress, and resilience. 

How consumers reach that today is increasingly complex. There’s a convergence of new cultural and career norms, mounting financial pressures on younger generations, and now major advancements in technology (Gen AI). It’s creating an unprecedented opportunity for tools that really, finally, truly help consumers get proactive. There is a new dimension in what’s possible for meaningful personal agency, accountability, and self-directed optimization — across our health, education, careers, finances, and personal security. Now more than ever, individuals are motivated to step into the role of "CEO of their own lives." 

Our new framework, Proactive Measures, encapsulates a dual vision for this: 1) the mastery of precise data capture and interpretation for expertly personalized experiences, and 2) the development of products and services empowering actionable strategies — all to thrive in a society increasingly defined by autonomy and self-direction.

The demand for Proactive Measures is being driven by three key forces. First, societal and cultural norms have evolved to require much greater levels of accountability and self-advocacy. Traditional structures, such as lifelong employment and standardized education models, are becoming increasingly fluid as people opt for a patchwork approach to their careers. The rise of part-time work, remote jobs, side hustles (almost [50%](https://www.bankrate.com/loans/small-business/millennial-gen-z-american-dream/) of millennials and Gen Z have one), and the gig economy (a [$557 billion](https://www.businessresearchinsights.com/market-reports/gig-economy-market-102503) market expected to triple by 2032) requires individuals to self-direct their career paths and pursue non-traditional formats for continued learning. Additionally, rising healthcare costs, heightened consumer awareness of lifestyle diseases, and the fact that it isn’t getting any easier to navigate the traditional healthcare system have fostered a growing recognition of the value of proactive health management versus reactive care. A widespread cultural emphasis on self-care underpins the demand for tools with continuous data capture and tracking, and decision-making assistance, such as [OURA](https://ouraring.com/), for example. Second, technological advancements are playing a pivotal role in enabling, if not prompting, these shifts. Gen AI is capable of delivering hyper-personalized insights, guidance, and automation at scale, making sophisticated tools more accessible to individuals. This advancement is continuously accelerated by the frequency of digital interactions, with data analytics enabling users to track progress, optimize behaviors, and make informed, upfront decisions. 

Finally, broader economic pressures are weighing especially heavily on younger generations, reinforcing the urgency for proactive solutions. For the first time in modern history, 30 year olds today are [worse off](https://www.cnn.com/2020/01/11/politics/millennials-income-stalled-upward-mobility-us/index.html) economically than previous generations were at that age, and Gen Z believes they need a [salary of a whopping $600k](https://www.forbes.com/sites/jackkelly/2024/12/04/gen-zs-benchmark-for-financial-success-is-a-600k-salary/) to be financially successful in today’s world. Tools for financial resilience and economic growth are evolving from strategic advantages for some to necessities for all.Opportunities to invest in this transformation span four key areas:

- **Health and wellness** solutions are central, with AI-powered offerings addressing everything from diagnostics and preventive care to personalized fitness, mental health care, and nutrition optimization. 
- **Career empowerment and modernized education** represent another crucial domain, with lifelong learning and career planning platforms leveraging AI to identify skill gaps and recommend tailored solutions. Personal branding and networking tools further enhance individual agency in career development. 
- **Financial autonomy tools**, including budget optimization apps, AI-driven investment platforms, and business planning software, are also increasingly critical. 
- **Safety and resilience**, with platforms building new scaffolding for climate protection, insurance, digital identity protection, and local community building.

The market potential for solutions aligned with this thesis is vast. The global wellness economy is projected to reach $7 trillion by 2025, as consumer health continues to see tremendous tailwinds with the potential to propel companies like [Superpower](https://superpower.com/), [Function Health](https://www.functionhealth.com/), [Prenuvo](https://prenuvo.com/), and [Thatch](https://thatch.ai/) into mainstream consumer culture. The career tools market continues to grow rapidly, reflecting the increasing appetite for productivity and self-directed learning, evidenced by the market reception to [Glean](https://www.glean.com/), [Granola](https://www.granola.ai/), [Cove](https://cove.ai/) as well as [Stan](https://stan.store/), [Fora](https://www.foratravel.com/), and [Leland](https://www.joinleland.com/). Similarly, personal finance apps are expanding as individuals seek greater financial independence, as we’ve seen through the rapid growth of [Public](https://public.com/), [Era](https://era.app/), [Town](https://town.com/), [Haven](https://www.haventax.com/https://www.haventax.com/), and [Rivet](https://www.rivet.tax/).By focusing on these criteria, the "Proactive Measures" framework seeks to redefine personal agency and empower individuals to achieve their full potential. We see a future where empowerment and success are universally attainable.

‍`,
  },
  {
    slug: "investing-in-teal-health-a-better-experience-means-better-outcomes",
    title: "Investing in Teal Health: A Better Experience Means Better Outcomes",
    date: "January 16, 2025",
    year: 2025,
    author: "Nicole Johnson",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "Teal Health",
    excerpt: `There are several instances in consumer health — and particularly in women’s health — where a better experience isn’t just a nice-to-have or a matter of greater convenience and comfort, but a...`,
    content: `There are several instances in consumer health — and particularly in women’s health — where a better experience isn’t just a nice-to-have or a matter of greater convenience and comfort, but a fundamental lever for better healthcare outcomes. A better experience can actually be life-saving.

[Teal](https://www.getteal.com/) exemplifies this premise. Launching to the public in the coming months following their upcoming FDA approval, Teal is commercializing the market’s first-ever at-home collection screening for cervical cancer. This initial offering, the Teal Wand, dramatically transforms the experience for one of the most routine, critical screenings in women’s health and in doing so, dramatically improves the very quality of care. At Forerunner, we’re on an endless search for companies helping consumers take health into their own hands by modern measures. Teal embodies this … quite literally.For cervical cancer screenings to date, the very real shortcomings with the experience have led to very real compromises: today, an estimated 1 in 3 women are behind on their screenings. For anyone who’s had a Pap Smear, this might not be surprising. Between the required visit to the doctor, the cold speculum, and the stirrups, this traditional method that is notoriously disliked — but has been the only option. This is compounded by the fact that we are in a historic provider shortage, with about 50% of counties not having an OBGYN that can offer a Pap Smear. When the comfort, convenience, and accessibility of this critical screening are so severely compromised, it makes sense that already 93% (!) of women are saying they are interested in Teal’s at-home, less invasive alternative.

By solving comfort and convenience at home with a novel, DIY product, Teal is helping solve adherence and thus improve outcomes, aiming to help eliminate cervical cancer for all. 

Over time, Teal has ambitious plans to transform other pillars of women's health with better experiences and thus better outcomes. But for now, the company sees cervical cancer screening as a massive wedge–and one that brings all women back every few years by necessity.

The Teal Health opportunity wouldn’t be what it is today without Kara Egan, the CEO/Cofounder. Kara is a force, with years of operating and investing experience. The enormous gap in women’s health felt all too pronounced for her to stay on the sidelines, and she gathered a world-class team to build this.

As the Teal team looks ahead to its FDA approval in the coming months, this new capital will help the company accelerate their commercialization and set them on their journey to helping eradicate cervical cancer for all–and opening up other, new dimensions for what’s possible in women’s health. 

‍`,
  },
  {
    slug: "announcing-the-series-a-for-roon-democratizing-medical-expertise-in-the-ai-era",
    title: "Investing in Roon: Democratizing Medical Expertise in the AI Era",
    date: "November 26, 2024",
    year: 2024,
    author: "Eurie Kim",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "Roon",
    excerpt: `Today, we’re announcing that we’re co-leading the series A for Roon, which ensures everyone has access to a trusted expert to help navigate their critical health journeys. Roon is something I’ve...`,
    content: `Today, we’re announcing that we’re co-leading the series A for[ Roon](https://www.roon.com/), which ensures everyone has access to a trusted expert to help navigate their critical health journeys. Roon is something I’ve desperately wanted myself as both a caregiver and patient, as it’s solving a widespread, profound consumer pain point. In vulnerable moments when you need clinically sound information about a condition or illness, Dr. Google is still the prevailing first destination, despite a deluge of misinformation online and a lack of personalized guidance. One of the primary promises of technology is information at our fingertips, but if the information is inundating (or worse, incorrect), we’re arguably worse off than where we started. AI has the opportunity to compound this problem or be a solution — either by amplifying misinformation, or by driving efficiency, personalization, and scale for doctor-led expertise.

Roon is essentially what you’d get if you combined WedMD with Perplexity, but trained *only* on doctor-created clinical information and answers — so people can instantly pull up doctor recommendations, guides, and even videos to quickly navigate healthcare concerns. Currently, Roon has built resources to address critical conditions such as ALS, Glioblastoma, Dementia, as well as broader medically-nuanced topics like Fertility & Family Building, and in the next few months, will expand to cover more of women’s health (Endometriosis, PCOS, Menopause, Breast Cancer, Cervical Cancer, Basic Gynecological Health and more), followed by forays into pediatrics, cancer, neurology and metabolic health.As investors, we know there have been many efforts to displace Dr. Google over the decades through various approaches. For good reason: 7% of Google’s searches are health-related, as it can easily take 2-3+ months to see a doctor, and even then, the journey for answers just begins. 

Roon fits squarely into a few tailwinds and themes we’re tracking closely at Forerunner, which believe make the company disproportionately advantaged to win:

*Doctors as the new creators — and Roon as their platform to reach their audience: patients *One simple reason why Roon stands out: Doctors *love* it.For the past decade, we’ve seen doctors extend their reach beyond the doctor’s office and clinic to become public figures — largely through Instagram and TikTok. The benefits are clear: consumers are hungry for trusted clinical guidance, while doctors get to build their brands and combat the misinformation they see trickling into their clinics and making their jobs harder. However, Instagram wasn’t built with clinical expertise in mind, and many doctors crave a way to achieve this impact outside an environment that can feel so performative. Put simply: Doctors have become increasingly savvy online but don’t have a space designed for medicine in mind to scale their reach and expertise.

As a result, doctors are flocking to Roon to help educate consumers, build their brand (you might even see Roon linked in their Instagram bio), and save themselves time and effort by providing a highly accessible, efficient medium for answering the questions they get every day in their clinic.

Today, Roon has 500+ actively engaged Medical Expert creators from all major institutions (UCSF, Harvard, Stanford, Columbia, Johns Hopkins, UPenn, NYU, Duke etc.) across 30+ specialties.

*Search to Service*At Forerunner, we have a thesis about how the traditional, unilateral search experience - where the onus is on the consumer to sift through information - is being eclipsed by interactive, context-aware services that feel much more dynamic and bespoke.[ AI is underpinning this shift from search to service](https://www.forerunnerventures.com/our-perspectives/from-search-to-service-the-evolution-of-discovery-in-the-age-of-ai), as verticalized offerings emerge with much more dynamic, personalized offerings. We’re already seeing this play out with our investments in [Joy](https://www.forerunnerventures.com/our-perspectives/investing-in-joy-the-essential-companion-guide-for-navigating-parenthood), [Daydream](https://daydream.ing/), and more.*The team to take this on*Roon is an obvious embodiment of this shift, and there is arguably no better team to tackle this mission: Roon is founded by not only a neurosurgeon who sees the challenges patients face every day but also early Pinterest leaders who were formative in architecting its early product, marketing, partnership, and creator tools. They are intimately aware of consumer behavior when it comes to this kind of technology, and how it can evolve today for the AI era for something as crucial as health.

All three founders have felt the need for a service like this acutely. CEO Vikram Bhaskaran was a caregiver to his dad who passed away with ALS, CTO Arun Raganathan is currently a caregiver to his father in India who is suffering from dementia, and CMO Dr. Rohan Ramakrishna treats patients with brain cancer and has longed for a place where doctors could educate patient scalably.

As AI is poised to reshape every corner of every industry, healthcare clearly stands for reinvention — and scaling the expertise of doctors is a promise that consumers globally are eager to see. Roon the reimagination of access to healthcare information that we all need. 

‍`,
  },
  {
    slug: "fueling-tangible-career-growth-and-financial-mobility-leading-lelands-series-a",
    title: "Investing in Leland: Fueling Tangible Career Growth and Financial Mobility",
    date: "November 13, 2024",
    year: 2024,
    author: "Eurie Kim",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "Leland",
    excerpt: `We’re announcing that we’re leading the series A for Leland, which is building the trusted educational and professional coaching marketplace to become the go-to place for people looking to achieve a...`,
    content: `We’re announcing that we’re leading the series A for [Leland](https://www.joinleland.com/), which is building the trusted educational and professional coaching marketplace to become the go-to place for people looking to achieve a specific career goal.There is no shortage of stories and data illustrating the need for this valuable resource. Gen Z has notoriously struggled to find purpose and direction while transitioning into adulthood and building a career, with [47%](https://www.newsweek.com/gen-z-considering-career-changes-1957879) reporting that they want a career change and [one third](https://www.axios.com/2024/05/11/gen-z-job-career-struggle-unemployed) not making any income or salary (up 22% from 1990). Meanwhile, for the first time in history, younger generations are as likely to be worse off than their parents as they are to be better, given the mounting financial pressures that exist today. Viral stories about the [Varsity Blues Scandal](https://www.nytimes.com/news-event/college-admissions-scandal) and [tutor charging $200,000/month](https://www.wsj.com/us-news/education/ivy-league-college-venture-capital-23dc95fa) for college prep (working with 11 year olds, no less) show the sheer desperation and desire for young people to get ahead in an increasingly competitive environment.There have been many efforts to leverage technology to reshape upskilling and bridge the gap between education and careers, and we at Forerunner have long wanted to invest in solving this problem. It wasn’t until meeting the Leland team did we finally feel we’d found the right approach to drive fundamental scale and impact for consumers.

*The Marketplace Model:*Leland’s marketp
lace model is effective in this category because there are very clear opportunities for network effects, trust-building and transparency through reviews and profiles, broader selection & price points across coaches, and a scalable model across expertise, with coaching delivered in its most valuable format (one-on-one, personalized collaboration vs. unilateral online courses and content). By accepting only ~5% of the coaches that apply to be on the platform, Leland is becoming the most trusted source for top-quality professional development coaches. The referrals and organic growth that Leland is already seeing demonstrate the network effects at work.

*The Team:*John Koelliker, the CEO and Co-founder of Leland, is uniquely qualified to start this business. His strong operating experiences at three marketplaces (Uber, LinkedIn, and Curated) have given John tremendous appreciation and competency when it comes to the nuances of scaling marketplace models. Additionally, John’s entry point into the coaching space happened organically, born out of his passion for helping others get ahead, when he started his own MBA coaching program as a side hustle and quickly saw it take off, helping 1,000+ people get into their school of choice. The sheer demand for his program was humbling, and somewhat of a surprise — highlighting the profound opportunity to transform this concept into a scalable service for countless people to benefit from.

*A Focus on Outcomes:*Finally, Leland stands out for its laser focus on driving real career outcomes. While many upskilling and mentoring platforms are hobby-based or exploratory, Leland is about achieving tangible results. There is meaningful willingness to pay (amongst consumers and their family members) when there’s the prospect of actually landing a job, getting a promotion, and building a career. 

Today, Leland serves 70+ countries across 50+ categories, helping 100,000+ consumers with everything from becoming a product manager to getting into dental school, and beyond. And yet the team is still early in realizing their vision in unlocking human potential by making the world’s expertise more accessible. There’s never been a better time to join the mission or share Leland’s services with someone in your life: [https://www.joinleland.com/](https://www.joinleland.com/)‍`,
  },
  {
    slug: "human-insight-in-the-age-of-ai-announcing-fund-vii",
    title: "Human Insight in the Age of AI: Announcing Fund VII",
    date: "November 11, 2024",
    year: 2024,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: "Theses",
    company: null,
    excerpt: `Forerunner has always been about understanding people, what they want today and what they will need tomorrow. It’s a perspective that has shaped our portfolio and what we uniquely bring to the table...`,
    content: `Forerunner has always been about understanding people, what they want today and what they will need tomorrow. It’s a perspective that has shaped our portfolio and what we uniquely bring to the table when we partner with a startup.

This perspective is needed more than ever as AI becomes rapidly integrated into a vast range of new products and services that, if done well, could dramatically simplify and improve important parts of people’s lives. Healthcare, finances, education, and commerce are just the start of a long list of areas that will be transformed.
Today, we’re announcing a new $500 million early-stage fund focused on maximizing these opportunities and their value for consumers.

This fund brings our assets under management to nearly $3 billion since Forerunner’s founding 12 years ago. We see $500M as our sweet spot for serving the early-stage — the same fund size as our last two early-stage funds, and the right structure for us to ambitiously chase big ideas while maintaining focused portfolios and rich relationships built around shared success. Our early-stage investments are $1M - $20M across seed to series A, spanning health & wellness, commerce, consumer finance, prosumer, education, social and marketplaces.

Fund VII comes at a critical inflection point for consumer-focused businesses. Technology touches every part of a person’s life, but it has not always made it easier. You can immediately get the results of a blood test on your phone, but what you want is clarity on what the results mean and what you should do about them. Similarly, there is no shortage of sources for planning a vacation, but no simple way to generate an itinerary that makes everyone in the family happy. While tech’s promise of information at our fingertips and democratized goods and services was intended to empower us with optionality, consumers are now inundated, as the onus is on them to manage and optimize a seemingly endless list of life dimensions. 

At Forerunner, we invest at the intersection of invention and culture. We study big shifts in what tech can do and what consumers want. When these shifts collide, it provides the rare moments that reshape entire markets and build category-defining businesses.

Right now, AI’s ascension is paired with consumers increasingly expecting far more assistance and quality from what they invest their time and money in. [This creates a moment](https://www.forerunnerventures.com/our-perspectives/from-access-to-edit-how-ai-is-meeting-a-values-shift-among-consumers) for every category, sector, and company to be reimagined. **This creative stage is what innovators live for. Our new early-stage fund is dedicated to this time of imagination and development that will bridge what humans want with what AI will be able to do.**‍At the same time, a fundamental platform shift means that there are no set playbooks for how consumers will react to and experience what’s built. It can get messy. There will be a lot of competition around what seems obvious. Yet, what is hot today may be gone tomorrow. The biggest opportunities are often found in the shadows by those with a permission to dream and charter a unique path. Meeting this moment requires a careful mix of intense optimism and discernment.

At Forerunner, we feel we were made for this moment. We’re a nimble, tight-knit crew with 12 years of investing through multiple market cycles, dips, and twists. We came into venture with an intention that we couldn’t find anywhere else in the industry: An unwavering commitment to understanding human needs, wants, emotions, and cultural nuances that help us find the magical points where the psychological and analytical converge. 

It’s this intention that led us to [OURA](https://ouraring.com/), a product that’s reimagined how people think about something as fundamental as their sleep. It drove a big bet on [Faire](https://www.faire.com/) and the opportunity in indie retail during a time when ecommerce conglomerates and big box retailers seemed poised to eclipse Main St. And, through [Chime](https://www.chime.com/), a belief that the financial system could be reshaped to work for the many that it had preyed on for far too long. Likewise, this view has driven our more recent investments in [Daydream](https://www.forerunnerventures.com/our-perspectives/from-search-to-service-the-evolution-of-discovery-in-the-age-of-ai), [Fay](https://www.forerunnerventures.com/our-perspectives/how-fay-is-scaling-customized-nutrition-care-for-consumers-while-reshaping), [Duckbill](https://www.forerunnerventures.com/our-perspectives/delivering-on-techs-age-old-holy-grail-duckbill-the-indispensable-ai-powered), and [Fora](https://www.forerunnerventures.com/our-perspectives/how-fora-is-reimagining-the-composition-for-the-travel-agency).This specialty in the human, cultural side of business is (perhaps ironically) proving even more valuable in the age of AI. Today, software is largely a commodity. The opportunity to compete on tech alone is increasingly thin. Instead, cultural resonance and consumer connection is what will rule the day.** **‍‍We see foresight into human adaptation as required for success — *especially* as AI increasingly handles all that isn’t subjective. While technical prowess long reigned supreme in Silicon Valley, human instinct is now emerging as the ultimate competitive edge.As we look ahead to invest in the next wave of category-defining businesses, where creativity unlocks new AI-driven experiences, values, and form factors for consumers everywhere, we see industries prime for reinvention:

To date, Forerunner has invested in 150+ companies totaling to tens of billions in market cap. We know the next chapter will only be more interesting, intense, creative, and messy. But ultimately, we believe it will be even more transformational.`,
  },
  {
    slug: "from-access-to-edit-how-ai-is-meeting-a-values-shift-among-consumers",
    title: "From Access to Edit: How AI is Meeting a Values Shift Among Consumers",
    date: "August 26, 2024",
    year: 2024,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: "Theses",
    company: null,
    excerpt: `At Forerunner, we dedicate ourselves to understanding values shifts and technological shifts. Both are rare and defining: values shifts are rooted in a fundamental evolution of human needs, and...`,
    content: `At Forerunner, we dedicate ourselves to understanding values shifts and technological shifts. Both are rare and defining: values shifts are rooted in a fundamental evolution of human needs, and technological shifts underpin new solutions and pathways that advance people's way of living. Some of the most significant businesses are born out of these shifts by capitalizing on these novel tailwinds, meeting new demands, and going on to win with superior execution and economics.

In this current moment, we believe we’re in the midst of both a values shift and a technological shift, presenting a compounding opportunity for growth.

*Peak Access: The Diminishing Appeal of Tech’s Prevailing Value Proposition*The values shift that’s underway is born out of consumers' broad sense of fatigue and overwhelm from a culture that's now dominated by hyper-consumerism and a flurry of different decisions and tasks that [newly fall onto consumers' plates](https://www.theatlantic.com/family/archive/2021/01/to-do-list-tasks-never-end/617674/). We see a class of consumers who are stressed out and even paralyzed by the abundance of choice that’s in front of them. Recent Forerunner research found that consumer stress is up 39% this year from the last, and new [Accenture research](https://www.accenture.com/us-en/insights/consulting/empowered-consumer) shows that 74% of consumers abandon decision making and purchases simply because they feel overwhelmed by the volume of choice. This dynamic is present across nearly every life dimension due to spiking access to products, services and information, at both a micro and global scale. Rather than empower us with optionality, access is having an inverse effect where people are recoiling to what they know or forfeiting decisions altogether. 

This is no doubt a result of the past decade+ of innovation hyper-focusing on access. “[Democratizing access](https://www.google.com/search?sca_esv=a03d90e6355dafdc&sca_upv=1&rlz=1C5GCEM_enUS1108&q=%22democratizing+access%22&tbm=nws&source=lnms&prmd=invsbmt&sa=X&ved=2ahUKEwjr3NrU3pKGAxVaAjQIHYQGCd0Q0pQJegQICxAB&biw=1438&bih=771&dpr=2)” has long headlined the lion’s share of startup websites, from health and financial services to education, SMB tools, ecommerce, and beyond. The promise to untether products and experiences from their historical barriers — be that high costs, geographic constraints, or a reliance on expertise or gatekeepers — has been an excellent place to build from. The new more accessible offerings have typically entailed some DIY component, where the onus lands on the consumer to figure things out (plan your own vacation, without an old school travel agency), and/or an arbitrage model that captures ~80% the historical value for ~50% of the cost (manage your own money with digital tools, but no expert guidance).Many access-focused companies are great businesses, and many industries still stand to benefit from greater access. But generally speaking, access alone is an increasingly thin value proposition. Because when access becomes so abundant, it starts to work against consumers and become counterproductive. This leads to a profound desire for products and services that *edit* the vastness of what’s available, presenting the best option instead of more options, and helping do things for us instead of allowing us to do it ourselves.*A Return To Expertise and Outsourcing, and the (Long-Awaited) Promise of Personalization *And now for the major technological shift, generative AI. Gen AI is uniquely positioned to accelerate this shift from Access to Edit. Because at its core, the promise of Gen AI is to effectively edit our digital worlds, taking broad swaths of legwork off of our plates by offering up personalized insights with more comprehensive context than any one person could have themselves. This ultimately takes back some of the optionality and responsibility that access let loose onto consumers in the years past, and reverts us back to more “traditional” pathways where we rely on the quality of outsourced expertise — even if this time, AI is the engine. 

This gets at one hallmark of this emergent shift: an emphasis on quality. Historically, consumers have made product and purchasing decisions based on a three-part paradigm: price, convenience and quality — with the acceptance that most often a solution is only optimizing on two of the three dimensions. The past decade of access-focused companies have predominantly excelled at convenience and price. It’s not that quality fell by the wayside, it’s that having parity with the quality of legacy standards was generally adequate when a more convenient and/or cost-effective format was delivered. For example, with DoorDash and Instacart, you're paying for the convenience of delivery — you're not paying for better quality takeout or avocados. And with Netflix, you're getting a far greater selection for the cost and in a far more convenient experience — but for the most part, the content isn’t relatively better. 

With AI, we believe there’s a new opportunity to win on quality. We anticipate a shift in this three-point framework, moving from an emphasis on convenience & price (Access) to convenience & quality (Edit). So for example, rather than providing greater access to healthcare, companies in this new paradigm will provide *better* healthcare. Price will always be a factor, but parity will suffice — similarly to how quality parity was serviceable for the last wave of access-focused companies.Our early research illustrates this appetite, with consumers saying that quality is the #1 desired outcome from an AI experience, closely followed with convenience. 

With AI, quality largely hinges on a product or service's ability to properly capture nuance, intent and context to either 1) effectively serve up the most relevant and useful insights, or 2) effectively perform tasks on our behalf.** **We see a world of opportunity for products and services that help people get to the best possible output, providing fundamentally more useful value than the previous alternatives rather than cheaper or more accessible extensions of existing standards.

*Investing in the Shift From Access to Edit*To deliver on this quality opportunity within AI today, we see three immediate unique investable themes underpinning the next generation of pioneering companies:

- **Personalization:** Gen AI will finally deliver on the promise of personalization and advance what’s possible, surfacing insights and outputs with more comprehensive context than any one person could have themselves. This can take the shape of healthcare navigators that negotiate bills for you, agents that plan and book vacations specific to your inspirations, and financially planning entirely tailored to your goals. Gen AI can make personalization the main event.
- [**Search to Service**](https://www.forerunnerventures.com/our-perspectives/from-search-to-service-the-evolution-of-discovery-in-the-age-of-ai)**:** We see online discovery evolving from one-dimensional, unilateral experiences into highly engaging, interactive services. These services will transform open-ended searches into dynamic, actionable exchanges. Imagine insights and purchasing options curated through the lens of your inner style maven, parenting expert, or budgeter, incorporating all the right vertical-specific tooling to empower action. 
- **The Trust-Building Stack:** Consumer trust in AI — from data integrity to privacy, reliability, and accuracy in capturing nuance and intent — is essential to the potential of this new era. We are in an active building cycle to develop the capabilities and proficiencies needed to deliver on the potential of Gen AI enabled products and services. A new ‘trust-building [enabling] tech stack’ will emerge to support reliable experiences and broad consumer AI adoption.

Edit-focused offerings are already emerging and gaining market share across the major consumer categories, providing personalized, agentic experiences:

Meanwhile, an essential layer of enabling technology infrastructure is emerging to power consumer adoption, safety, and functionality:

In summary, access is no longer a burning consumer opportunity to deliver on. In fact, access is arguably now the consumer challenge. After decades of giving consumers the options and agency to do things themselves, people are now eager for relief — for personalized, actionable services that do things with them, or better yet, for them.

If you’re building a company accelerating the shift from Access to Edit, either through hyper personalized offerings and dynamic, interactive services — or the underlying infrastructure supporting consumer trust and adoption within this framework — we want to hear from you.`,
  },
  {
    slug: "how-stan-scaled-to-33m-in-arr-within-two-years-while-building-in-public",
    title: "How John Hu Scaled Stan to $30M in ARR Within Two Years While Building in Public",
    date: "August 16, 2024",
    year: 2024,
    author: "Eurie Kim",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "Stan",
    excerpt: `Tell us about your background and where you were before Stan. What was the inspiration that led you to start this company?Stan's mission is really personal to me and the rest of the team. It's just...`,
    content: `**Tell us about your background and where you were before Stan. What was the inspiration that led you to start this company?**Stan's mission is really personal to me and the rest of the team. It's just to empower anyone to get to work for themselves. The reason for that is that if you're like me, and you grow up as an Asian immigrant kid with a single mom, you're probably told by society to do certain things to be happy in life. You go to college and get X job and Y job and what have you, and you'll be happy and satisfied. So I did those things. I took out loans and paid for school and went through undergrad, working my way through college nights and weekends with kitchen jobs to pay for it. 

And then I was on to my next major checklist event in life: hustling my way into a job that would have me “set.” So I went off and worked my way into a job at Goldman Sachs — I cold-called my way there, as I didn’t know a single person with a connection. I emailed probably hundreds of alumni only to finally get through to a few, get an introduction internally, and prep like crazy for the interviews. I obviously thought it was going to be very fulfilling, but once I was finally working there, I looked at my peers and my bosses and saw how unhappy they were. I told myself, no WAY — I don’t want to be like that.

After Goldman, I went after private equity and VC, seeking out an investment role and getting accepted to Stanford’s business school. All this said on the surface that I was checking all the marks and getting to where I needed to be, but none of it felt fulfilling. I knew I wanted to do something myself. Content creation proved to be the first way that I could immediately start to do that. This was early in the pandemic, and I was spending a lot of time on TikTok…I started making some of my own content and it blew up. 

I ultimately just asked myself what kind of value I could create for the world, and for me that was about helping people get their dream job by working for themselves — which is what I ultimately did. Stan is like Shopify for creators — we enable anyone to be their own business, supporting them with the tools I found I was craving as an emerging creator. And so that's the mission of Stan and how it manifested. I built Stan for my own account, just to be able to live it for myself. And now we have 70,000 people on Stan doing that with me. It’s awesome.

**The creator tools industry has a lot of activity. Another way to put it is that it’s crowded. But Stan is working. What do you think the reason for that is?**This is a fun story to tell. There’s an analogy: when Google started, there were dozens of different search engines with nominal points of differentiation. Same with Stan — there were dozens of "link in bio" companies competing for the same opportunity.

At Stanford, they teach you all about the significant advantage you get in being a first mover. And when you reckon with the fact that all of these companies in the Creator Economy had raised hundreds of millions of dollars by the time I got started, you could reasonably say that Stan was objectively a stupid idea. But I went with my gut, and knew that we'd build something better — and looking back just a few years later, we've surpassed most of our competition.

It may sound silly, but the reason why our growth is so strong is simply because we care about our customers the most. We are our own customers, we talk to our customers every day — we are not just our customers’ champions, we are our own champions alongside those whom we’re building for.

**Am I correct in understanding that other business-in-a-box companies in the creator economy aren’t founded by creators?**Yes, that’s definitely a big part of our success. We are for creators, by creators. And then the team and the talent level we have is just exceptional. 

**That’s awesome. I guess a crowded market doesn't really matter that much if no one's doing it that well or with true authenticity. So you guys have seen significant growth. Tell me about it. **We are in our second year of business and on track to do $30M in ARR, after doing $15M last year (our first full year of business).

Our growth strategy is about recognizing that our customers are our best salespeople. We haven’t spent a single dollar on paid ads. Instead, we recognize that our customers are literally the best marketers in the world. That's what a creator is — they're a marketer. And so we do everything we can to delight them and give them a phenomenal experience. We align incentives with a profit share, so they are essentially affiliates, and then they end up doing all the BD work for us.

**I was watching one of your videos and you were commenting on how fragile Stan felt. We understand that may often feel true for any early stage company, but can you elaborate on that?**Yeah, we understand that things could always shift and we have to be ready for that. I live by the mantra my mom used to impress, which was “John, it takes 20 years to build a house and a single match to burn it down.” One of the reasons why it's fragile is because we're two steps ahead of everyone else — and people try to rip us off and copy us at every turn. If we stop moving, people will catch up. 

**What do you feel like you got the most right in what you set out to do, and where do you feel like you were the most wrong? Either an assumption you had, or a learning lesson?**I knew that the Creator Economy would be the future of work. The reason why Stan has a $100B opportunity ahead of it is because it sits at the crossroads of 1) macro tailwinds and 2) human nature. Who doesn't want to make a living working for themselves, on something they're actually passionate about? And who isn't getting disillusioned with corporate America and the legacy institutions we have to work through? The Creator Economy is the future of how we work — side hustles or full-time.

This is absolutely what I got right and what will carry us forward every day.

What I got most wrong: I think my development as a leader is recognizing that I can't do it all myself. And the best organizations are the ones that cultivate a team of incredible people to go off and do their own thing.

**Looking ahead, what’s next?**Our end goal vision is that literally anyone, if they have any desire to work for themselves either full-time or as a side hustle, can just show up and we'll give them the entire playbook and all the tools they need to be successful. So it’s giving literally the entire guaranteed partner track to entrepreneurship.

**Back to where we started: what does your mom think of this iteration of your career?**She always has absolutely no idea what I do. But she knows that it's becoming some sort of success and that makes her proud. She just wants me to be happy — and at some point, to work less.

‍`,
  },
  {
    slug: "great-food-doesnt-scale-until-it-does-wonders-big-swing-at-reshaping-the-restaurant-and-delivery-model",
    title: "Investing in Wonder: A Big Swing at Reshaping the Restaurant and Delivery Model",
    date: "August 16, 2024",
    year: 2024,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: "Investment Announcements",
    company: "Wonder",
    excerpt: `To many, Marc Lore is a familiar name. Marc founded Jet.com, which was acquired by Walmart, and before that Diapers.com, which was acquired by Amazon. He is undisputedly one of the most talented and...`,
    content: `To many, Marc Lore is a familiar name. Marc founded Jet.com, which was acquired by Walmart, and before that Diapers.com, which was acquired by Amazon. He is undisputedly one of the most talented and ambitious entrepreneurs when it comes to reshaping commerce that meets new consumer preferences.

‍

That’s why when we had the opportunity to invest in [Wonder](http://www.wonder.com/), Marc’s newest venture and a fundamentally new model for great food and meal planning at scale, we were immediately interested in what this opportunity could hold. Fast forward to today: the Wonder team is fiercely executing on building a unique concept for quick-service restaurants, food delivery, and food production that caters to consumers’ desire for excellent, affordable food with the convenience and speed of delivery, and chefs’ desire to reinvent their menus to meet these preferences. 

In tech, using technology to scale great food is an unrealized pursuit that the industry has danced around for years. Delivery services (DoorDash, Uber Eats, Postmates, etc.) have become massive businesses because of the sheer demand, even though they are plagued by high consumer fees and, often, contentious relationships with restaurants, which often have to take a significant cut in order to pay for these services, which can be disruptive to their core operations. Not to mention, most restaurant food is not optimized to travel and can look and taste less than desirable when it arrives at your door. 

‍

On the other hand, platforms that have attempted to vertically integrate and own the entire culinary operation have ultimately been unable to overcome the tough unit economics paired with the challenges of a highly sensitive production process. After all, food is arguably the most personal, subjective product that consumers pay for on a daily basis. The margin of error is severe. 

‍

Perhaps it takes someone as uniquely ambitious and visionary as Marc to take a swing at reimagining the restaurant and delivery model on a cellular level. Wonder's initial entry point is both very powerful and differentiated: a highly efficient platform for producing and distributing excellent meals, where chefs get to indulge the creative process and see their creations scale in ways they never thought possible. 

‍

A recent feature *Eater* notes:‍

“It’s tempting to lump Wonder into the space of ghost kitchen or delivery-only concepts that have come and gone since before the pandemic, but its partner chefs say this business is different. It’s the same selling point as the early days of delivery app Caviar, when it offered a premium product — takeout from higher-end restaurants — in a marketplace that’s otherwise about unlimited options, not curation.”

‍

Here’s a snapshot of how Wonder works today:

- It partners with popular chefs and restaurants from across the country to produce recipes (or even create new exclusive concepts specifically for Wonder’s model).
- Alongside the chefs, Wonder’s team works painstakingly to develop and refine a menu down to the microgram of each recipe (quite literally, a millionth of a gram) to ensure creations are not just expertly balanced but completely repeatable at scale.
- All items are designed to be prepared quickly using only a rapid-cook oven, a water bath, or a fryer. This enables Wonder tremendous efficiency: its kitchens can be as small as 750 square feet, with each location serving food from up to 30 restaurant concepts (indeed, everyone can order whatever they’d like).
- A customer can opt for pick-up or delivery from one of Wonder’s locations and choose from a seared salmon by Bobby Flay, samosas from Chef Meherwan Irani, a Sushi Nichi rainbow roll, Di Fara Pizza, a poke bowl, or paella by José Andrés.
- Delivery is fulfilled by a mix of employees and third-party couriers to deliver within a tight radius, and the company’s recent acquisition of Relay will mean even more capacity for fulfilling orders quickly and affordably.

‍

Wonder is still relatively early on its journey in the context of what it’s out to achieve. But if there were ever a signal of its positioning for success, it's the enthusiasm of critically acclaimed chefs, who have built and bet their entire careers on maintaining the excellence of their products for consumers. 

‍

Chef JJ Johnson, an up-and-coming name in New York’s culinary scene and a close early partner of Wonder, says, “I was shocked they got it to be that good. It����s going to be very successful, because they’ve done the groundwork. It’s something I talk to Bobby Flay about all the time. He’s like, ‘I wish I had a Marc Lore at your age.’”

‍

Over time, Wonder’s proprietary format can expand beyond chef-prepared food halls into adjacent concepts that get the best quality meals into people’s homes. But for now, if you’re in New York, New Jersey or Pennsylvania, check out one of Wonder’s 12 — soon to be 75+ — locations. 

‍`,
  },
  {
    slug: "investing-in-joy-the-essential-companion-guide-for-navigating-parenthood",
    title: "Investing in Joy: The Essential Companion Guide for Navigating Parenthood",
    date: "July 24, 2024",
    year: 2024,
    author: "Eurie Kim",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "Joy",
    excerpt: `Today, Joy is coming out of stealth to provide personalized, guided support throughout parenthood — from caring for a newborn to supporting parents’ financial health, well-being and beyond. Founded...`,
    content: `Today, [Joy](http://joy.co) is coming out of stealth to provide personalized, guided support throughout parenthood — from caring for a newborn to supporting parents’ financial health, well-being and beyond. Founded by parenting and edtech startup leaders, Joy is built by a team who has very much been there when it comes to the ups and downs of parenting. They are now creating the service that they — and so many others — craved while navigating such a formative, vulnerable time. Joy is now available for anyone to get 24/7 parenting coaching and support: joy.co.‍

**What Led Forerunner to Joy:**At Forerunner, we’re passionate about the concept of serving the [traditional needs of non-traditional consumers](https://www.forerunnerventures.com/our-perspectives/the-next-wave-of-game-changing-companies-will-be-life-changing-companies). We live
 in a society where consumers are increasingly dynamic, complex and diverse, with a wide mosaic of different views of success, life paths, careers and passions. But still, human needs are relatively predictable — everyone needs purpose, support, growth, and wellbeing — even if the way we fulfill these needs today looks different than it did in decades past. We see profound opportunities in reimagining and rebuilding these key life foundations to serve the wide set of modern consumers today — a thesis that led us to [OURA](https://ouraring.com/), [Atticus](https://www.forerunnerventures.com/our-perspectives/atticus-getting-americans-in-crisis-the-aid-they-deserve), [Fay](https://www.forerunnerventures.com/our-perspectives/how-fay-is-scaling-customized-nutrition-care-for-consumers-while-reshaping), and a range of companies [reshaping SMB opportunities](https://www.forerunnerventures.com/our-perspectives/from-digitally-native-brand-to-digitally-native-franchise-a-new-model). This theme also inspired our [investments in the caregiving space](https://www.forerunnerventures.com/our-perspectives/why-the-women-at-work-conversation-has-become-caregivers-at-work), which is currently plagued by tremendous emotional and financial strife. There is no shortage of statistics that illustrate this strain: caregiving is the [second most common](https://www.washingtonpost.com/business/2022/04/04/caregiving-economy-adults-work/) reason why someone exits the workforce (after retirement), [80%](https://www.marchofdimes.org/find-support/topics/postpartum/baby-blues-after-pregnancy) of new parents struggle emotionally postpartum, and [30%](https://www.pewresearch.org/social-trends/2023/01/24/parenting-in-america-today/) say they are stressed all or most of the time. ‍

**The Consumer Demand and Market Opportunity:**Researchers estimate that the “new mom economy” stands at $46 billion, a mere slice of the $2.4 trillion spending power that US mothers account for — and a number that is growing fast as more Millennial women become mothers each year. That’s because new parents are up against new challenges from those of decades past, with an increase in new parents settling down away from their hometowns and outside support of their immediate families, and a record level of women in the workplace prioritizing careers alongside caregiving. Regardless of the circumstances, consumers find themselves in one of the most meaningful and entirely new life experiences when becoming new parents, all without much scalable and standardized support.

As a mother of two young kids myself, I’ve been there. I’ve panicked wondering if my baby was getting enough food, sat for hours on hold trying to get through to my pediatrician’s office weekend advice nurse, and have been up at 2am deep down the google rabbit hole only to become more worried about an issue I didn’t even know if I should worry about in the first place. I’ve craved an expert source of readily available, empathetic support to help me through these moments of need with guidance specific to my babies, my family, and my needs. Instead, like so many other families, I’ve pieced it together manually — stitching disparate services and referrals from friends in a hurry, and often shelling out hundreds or thousands for specialists over the course of my kids' earliest years.

‍

**How Joy is Meeting the Moment:**That’s why we were struck when we came across [Joy](http://www.joy.co), which is helping to solve this burden by building the essential companion guide for navigating and thriving through parenthood. It is the market’s only end-to-end digital parenting resources platform that intimately understands and adapts to families’ needs over time, delivering the right experts, advice, content, and recommendations just when you need it. In an increasingly active parenting tech market, we were specifically drawn to Joy because of how the company solves for the massive fragmentation issues in this space. Joy supports a breadth of key parenting dimensions: feeding, sleep, learning, financial planning, life insurance, discounts and rewards on gear, and even access to resources for childcare. Joy’s initial product, Joy on Call, features 24/7 text-based access to a wide range of parent coaches and experts — from feeding and lactation specialists, sleep experts, and financial experts — ready to answer day-to-day questions like finding the best daycare for your child, setting up a will and buy life insurance, how to start solids and sleep train, plus how to get major savings on diapers and wipes, etc. In the coming years, Joy will expand further down the parenting life cycle to help toddlers, young children and beyond — building on the trusted relationship it forms with parents in the earliest, formative stages. 

The company is helmed by a seasoned crew who has been through it, both as parents and as operators. The Co-founder and CEO Alan Chan is an experienced founder whose prior company successfully exited to Yahoo, and who has a deep understanding of the parenting category having tackled it for over five years. Alan’s Co-founder, Emily Greenberg, leads Joy’s brand and parent experience and was formerly leading content at Lovevery after several senior edtech roles (Higher Ground Education, Wonderschool, and more). Joining Emily and Alan is Charlie Carpenter, who brings technical and product leadership across range dimensions of consumer tech, including a company he founded that sold to Canon.

We believe there is a clear opportunity to build the essential companion guide to parents, supporting them across all their critical milestones, moments, and memories. And we believe that this is the right time, team and approach to take this on.

‍`,
  },
  {
    slug: "winning-with-consumers-in-ai",
    title: "Winning With Consumers In AI",
    date: "July 18, 2024",
    year: 2024,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: "Theses",
    company: null,
    excerpt: `At Forerunner, we dedicate ourselves to understanding values shifts and technological shifts. Both are rare and defining: values shifts are rooted in a fundamental evolution of human needs, and...`,
    content: `At Forerunner, we dedicate ourselves to understanding values shifts and technological shifts. Both are rare and defining: values shifts are rooted in a fundamental evolution of human needs, and technological shifts underpin new pathways that advance people's way of living. In this current moment, we're in the midst of one of each, presenting a generational growth opportunity.

The values shift underway is born out of consumers' broad sense of fatigue and overwhelm from a culture that's now dominated by hyper-access and hyper-consumerism. The tech industry has fueled this: the lion's share of the past decade's startup have touted democratized access, and it’s created a flurry of different options, decisions and tasks that newly fall onto consumers' plates. This access is now working against consumers, who feel paralyzed by the sheer volume of choice. As a result, we now see a refreshed desire for experts and services that *edit* the vastness of what’s available, present the best possible options instead of more options, and do things for us instead of enabling us to do it ourselves.AI — the technological shift underway — is uniquely suited to drive the tech industry's shift from Access to Edit. Because at its core, the promise of AI is to effectively edit our digital worlds. It’s about capturing consumers’ intent and nuance to deliver services and personalized outcomes quickly and with more comprehensive context than any one person could have themselves.

In this deck, which we debuted at Fortune Brainstorm Tech this week, we cover this values shift and technology shift — and introduce our framework for how to build a winning consumer business in this domain:

- **Consumer appetite**: What we know about where consumers are most eager to use AI in their lives and what they anticipate from the experience
- **All eyes on quality:** Traditionally, products and services are measured against price, convenience and quality, and typically only able to optimize for two in contrast to the prevailing alternative. The past decade has focused on price and convenience, but the next decade with AI will focus on quality.
- **Magic and Trust**: These are the two essentially building blocks in this new era. We extrapolate how we define Magic (relief and delight) and Trust (”do it with me” and “do it for me”), as well as where we believe is the best place to build from with each — and how.

If you're building here, we welcome discussion and questions: investments@forerunnerventures.com. 

You can download the report [here](https://pitch.com/v/fortune-brainstorm-tech-winning-with-consumers-in-ai---kirsten-green---final-ucdzzd).`,
  },
  {
    slug: "the-emergence-of-ai-powered-services-firms",
    title: "The Emergence of AI-Powered Services Firms",
    date: "June 27, 2024",
    year: 2024,
    author: "Brian O'Malley",
    authorTitle: "Board Partner",
    category: "Theses",
    company: "MakerSights, Atticus, Craftwork",
    excerpt: `Why Selling Outputs Falls Short Without a Human TouchAfter being considered a “no fly zone” for the past few decades, services businesses are suddenly in vogue in Silicon Valley. By services, we...`,
    content: `*Why Selling Outputs Falls Short Without a Human Touch*After being considered a “no fly zone” for the past few decades, services businesses are suddenly in vogue in Silicon Valley. By services, we don’t mean the wave of consumer-oriented utility businesses in food, transportation, or home maintenance. Instead, we’re talking about knowledge-based work such as legal, financial, and healthcare services. At Forerunner, we’ve seen more businesses in the tax space in the past year than we have in the prior decade.

The first wave of software-enabled services businesses emerged over a decade ago, driven by new GPS capabilities and the widespread adoption of portable, internet-connected devices across all demographics. Now, a new wave is being catalyzed by AI, which automates knowledge tasks, in contrast to the physical tasks automated by the previous generation.

Each wave is first addressed by software companies filling in the gaps of adoption. In the early 2000s, pioneering two-factor authentication companies helped banks authenticate logins by sending codes to users’ mobile phones. Now, receiving six-digit codes for logins is so commonplace that iMessage auto-populates them, but companies that introduced this technology no longer exist.

In fact, not only was that service commoditized, but Twilio, the company that popularized it as part of its broader suite of telephony solutions, is now facing a similar margin squeeze on its own core business and falling victim to this same cycle. Meanwhile, the consumers of these solutions — pioneering services businesses like DoorDash, which reinvented delivery, and Uber, which reinvented transportation — are thriving. As technologies mature, you typically need to either be the underlying infrastructure or deliver the complete service. Middlemen offering solutions too often get squeezed.

When it comes to AI, the solutions selling into services firms have the potential to handle a much higher percentage of tasks than traditional workflow or rules-based systems, but many of the industries still require a human touch. Some services, such as law, healthcare, and architecture, must be delivered by a credentialed individual to be valid. Others, like investment banking and recruiting, demand a high level of trust and confidence due to the nature of the transaction.

In our view, many future winners will look more like historical offline stalwarts of the services world than the sexier SaaS-powered solutions that have dominated the past decade. That’s because — as technologies mature and AI-driven knowledge work moves up the stack to more nuanced tasks — there will be far less proprietary value in selling AI-generated outputs into firms, and thus far greater incentive for new firms to centralize AI productivity in-house alongside the irreplaceable, uniquely human aspects of the business. 

> *Put another way, don’t sell research tools to Goldman Sachs; be the next Goldman Sachs. Don’t sell CAD tools to Gensler; be the next Gensler. Don’t sell analytics to WPP; be the next WPP.*

*Now, with the emergence of LLMs, Forerunner is doubling down on opportunities that pair the IQ of AI with the EQ of actual people. **When “Selling the Work” Stops Working*Today, generating useful outputs from LLMs requires a rare combination of prompt engineering, model routing, and fine-tuning skills. As a result, highly profitable software companies are being born as contract manufacturers for knowledge work, selling AI-generated components to service providers who used to produce them in-house with human labor.

[**EvenUp**](https://www.evenuplaw.com/) has become a popular example of this model. Instead of helping injury lawyers manage their workflows, EvenUp leverages AI to transform medical records into demand packages – helping lawyers win more cases, settle faster, and save both time and money.There’s a lot to like about this approach. By [**selling the work**](https://www.sarahtavel.com/p/ai-startups-sell-work-not-software), a new concept that’s driven fresh thinking about AI applications, you can price relative to replacing labor rather than incrementally improving productivity. You also don’t have to deal with the liability, licensure, and overhead that comes with being a personal injury law firm.But “selling the work” comes with two major downsides: 

- As AI advances, the core value proposition loses value as high-quality outputs become easier to produce without supplemental engineering.
- The arbitrage opportunity that currently exists will collapse when prices begin to reflect the growing set of other AI-generated alternatives instead of human labor. 

For hints at where we’re heading, look no further than the [**professional exam performance**](https://openai.com/research/gpt-4) and [**60x cost**](https://openai.com/pricing) differences between GPT-4 and GPT-3.5 Turbo. The voice capabilities of GPT-4o close the gap even more. **Soon, it’s inevitable that model outputs will become commonplace, meaning service providers themselves – not middlemen – will hold the leverage. **After all, it’s service providers who have the credibility and licensure to sign off on finished work – and the expert judgment and relationships to cut through the noise that AI will inevitably amplify.

*The Problem with Legacy Service Providers*If AI-generated outputs become commoditized and services firms themselves hold the power, wouldn’t firms who have decades of experience dominate the AI opportunity? The reality is that legacy providers are very unlikely to win, even if they’re in pole position. That’s for four reasons:

- **Low technical aptitude.** They’ve historically been slow to embrace and maximize cutting-edge technology.
- **Misaligned incentives. **Their revenue models are often tied to hours of human labor rather than outputs or outcomes, which disincentivizes productivity gains.
- **Outdated org charts. **These organizations were built around a different labor model. It is much more difficult to cut staff due to innovation than to hire differently.
- **Slow and steady culture.** Their company cultures are often incompatible with the pace and goals of an innovative, fast-growing company.

Therein lies the potential for a new generation of AI-native services businesses. New services firms can prioritize AI implementation at every stage, organize expert employees to spend time on work that LLMs can’t replace, align business model incentives in more productive ways, and establish cultures that are far more risk-tolerant and aspirational than their predecessors. 

In the process, these companies can also prove critics of the AI + human model wrong by ensuring services are high-margin, sticky, and scalable – all while traditional seat-based SaaS businesses are having their margins [**rethought**](https://benn.substack.com/p/do-software-companies-actually-have) in the face of continuous R&D, intense competition, and new inference costs.*Why the “People Business” Will Become Even More Valuable with AI*Much attention has been paid to the roles AI will replace, but there's been less discussion about where it will make people even more valuable. And it clearly will make some people more valuable – particularly on the revenue-generating side of the business where experts can leverage hard-earned experience and relationships to cut through noise.

In knowledge-driven services businesses, the most senior people in the organization spend as much time generating business as they do running it. Take McKinsey as an extreme example. Making partner rarely happens because of phenomenal analysis; it’s more likely one gets there by signing and retaining strategic clients.

Now, think about an AI-enabled McKinsey. Not only could the associates research projects more efficiently, creating beautiful presentations in mere minutes, but senior partners could sell more work through assisted outreach and dynamically-generated proposals based on specific client needs.

We’ve seen this recently at our portfolio company, [**MakerSights**](https://www.makersights.com/). They historically sold tools to merchant teams at apparel brands to help them better understand consumer demand, manufacture the right products, reduce waste, and improve margins. However, as their customers cut headcount and tightened budgets, the Company faced headwinds that impacted the lion’s share of SaaS tools selling into leading apparel businesses.Fast forward to Q1 this year and Makersights completely revamped their approach, functioning more like an AI-powered services firm than a SaaS solution. The company now uses their own software combined with consumer panels to analyze a brand’s new collection providing c-level actionable insights, so time previously spent training customers on their product is now time spent delivering direct value. With these tools underpinned by AI, the Founders are freed up to be back in the room with decision-makers and drive customer growth.

While the company might look more like a consulting firm from the outside, they have margins like a software business and grew more in Q1 this year than they did all of last year. Even if the bulk of the work behind the scenes ends up being carried out by AI, Makersights is now much more of a “people business” — exercising judgment, building trust, and adding EQ to effectively communicate outputs.

Zooming out, this is an example of how AI will impact companies’ human labor investments in seemingly contradictory ways. More work completed through automation will require more expertise to validate decisions, build trust around that work, and oversee the expanded capacity. This is not a paradox; it’s natural for companies to invest more, not less, in revenue-generating assets as they become more productive.

*Where to Build an AI-Native Services Firm*Not all services categories are the right fit for the hybrid human + AI model. First, any eligible category should pass a simple Goldilocks test: the bulk of the core workflow must be highly automatable, but higher stakes elements like the sales, support, and service quality must benefit from the judgment and relationship skills of people.

Consider the difference between wealth management and financial analysis. Both fields involve calculations that can be fully automated, but wealth management also incorporates a complex emotional dimension. Decisions like how much to save for a child’s college education or whether to help a friend in financial distress are not just about numbers; they’re the kind of nuanced situations best discussed with an empathetic expert. 

At the opposite end of the spectrum are services that defy easy automation. Some face physical limitations since AI cannot fix a roof or tend to wounds. Others resist automation because human connection* is* the core service offered, like childcare. While AI can support learning, it cannot replace the development benefits students get with teachers and classmates at school.After passing this initial test, the best AI-native services categories also meet three additional criteria:

- **Regulatory moat. **They benefit from licensure requirements and other regulatory hurdles, which act as a natural barrier to entry and provide a stamp of trust and credibility. 
- **High trust. **They require a high degree of human trust, where a specific person can provide personalized support and be held accountable if things go wrong.
- **Pricing unlock. **Their cost structure flexibility can overturn the legacy business model, leveraging newfound efficiencies to align incentives more effectively.

*The best categories don't just have workflows that can be mostly (but not entirely) replaced by AI. They also offer natural barriers to entry, an economic premium for owning the customer relationship, and a pricing structure that's predicated on human labor and can be flipped on its head. Many legal, financial, and medical services stand out as examples that have all three.*These traits make it possible for AI-native firms to directly target large markets that have been resistant to change, moving beyond previous attempts with workflow management software suppliers or providers of secondary services that didn’t ultimately transform those core markets.

Again, consider wealth management, a highly regulated sector often viewed as outdated and distinct from tech-forward options like online stock trading. Although many robo-advisors have tried to challenge traditional firms, they've struggled to impact the larger market since consumers prefer having a personal relationship with their money manager – even if it’s more expensive. As a result, there’s still a massive gap in scale between offline and online options; UBS manages $5.7T in client assets while Wealthfront only oversees $50B, most of which was acquired through in-person meetings versus online sign up.

Now, there’s finally a catalyst for change in wealth management. New AI-native firms have the opportunity to reimagine the core category by offering even higher quality services than offline incumbents for less, flipping the revenue model from a percentage of AUM to a more modest fixed membership fee while opening the door for a wider set of folks to have their own wealth manager.

Our portfolio company, [**Atticus**](https://www.atticus.com/), has a similar opportunity in consumer legal services as the costs to serve clients come down through increased AI automation. As a business, Atticus acts as a social security law firm representing individuals with disabilities that make it difficult for them to continue working. Since firms in this category operate on a contingency basis, many cases are not picked up because the probability of winning isn’t high enough to justify the attorney cost to take the case to court. With a dramatically lower cost to qualify and serve, Atticus has the opportunity to take on more cases, growing the business faster while helping more people along the way.*What Happens Next? *Rather than simply transitioning SaaS to selling outcomes into services firms or trusting services incumbents to do the AI opportunity justice, we believe a new class of companies will deliver on this potential by building full-stack, AI-native services firms that emphasize a human touch. These companies will transform larger markets by replacing incumbents, not just selling to them. Importantly, we believe this is what the customer wants: intuitive, efficient experiences with a trusted point of contact.

**Put another way, don’t sell research tools to Goldman Sachs; be the next Goldman Sachs. Don’t sell CAD tools to Gensler; be the next Gensler. Don’t sell analytics to WPP; be the next WPP. **These markets are still dominated by the same organizations as decades ago, but that won’t remain true forever. We look forward to partnering with bold teams ready to change the status quo, embracing each wave of new technology while ensuring the face of these industries remains as human as ever.`,
  },
  {
    slug: "from-search-to-service-the-evolution-of-discovery-in-the-age-of-ai",
    title: "From Search to Service: The Evolution of Discovery in the Age of AI",
    date: "June 21, 2024",
    year: 2024,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: "Theses",
    company: "Daydream, Roon, Joy, Mindtrip, Duckbill",
    excerpt: `In the digital era, the way we access and interact with information has undergone continuous transformation. Traditional search engines have long served as gateways to vast repositories of data,...`,
    content: `In the digital era, the way we access and interact with information has undergone continuous transformation. Traditional search engines have long served as gateways to vast repositories of data, providing access to limitless information via queries and lists of links in a relatively static manner. As the volume and complexity of information have grown, this experience has rapidly deteriorated, making the need for personalized, intelligent discovery all the more evident. 

We believe the next evolution of search won’t look much like search at all. Rather, discovery will take the shape of tailored, dynamic services, where users can not only access information but interact with a highly personalized, actionable edit of what’s uniquely relevant to them. This shift requires a nuanced understanding of user intent and context, which is where Generative AI excels. Our investment in [Daydream](https://daydream.ing/) marks an early iteration of this shift, where the diminishing value of search is being eclipsed by new discovery services that are entirely context-aware and actionable. **Why Search is Being Reborn as Service**A search experience is inherently defined by “show me options” [access], while a service experience is defined by “show me the options that are uniquely best for me” [edit] and then “help me get the job done” [action]. The latter is exponentially more valuable, particularly in the context of the vastness that is the internet today. Gen AI-powered discovery services stand to break out with experiences that feel white-glove and bespoke, finally delivering on tech’s age-old promise of hyper-personalization, paired with agentic features that make things actionable. 

The transition from "Search to Service" holds the potential to transform how people discover, plan, purchase, and act across a range of life dimensions. Imagine a discovery experience that can book itineraries, style outfits, scrapbook research, turn a mosaic of health insights into tailored action plans, and present financial data in the context of personal realities and goals.

This level of integration demands platforms tailored to distinct verticals, honoring vertical-specific expertise and features, instead of a single destination as a catch-all for discovery needs. **This will give rise to a series of vertical-specific discovery platforms**. We imagine portals to the world of options that are edited through the lens of your inner traveler, student, style maven, health enthusiast, and budgeter, incorporating all the right tooling to empower action. **Crafting a Personalized, Actionable Search Experience: UI and Technology Tooling**Dynamic feedback, with real-time suggestions that evolve as you engage, will be a central focal point across all Gen AI discovery services, along with category-relevant features and intuitive, tailored design. To be unique, this type of experience will need to offer:

- Personalized dashboards to house specific data around preferences, actions, and goals related to the topic at hand. 
- Interactive elements within results to initiate immediate actions like purchasing, organizing, booking/scheduling, sharing, and storing. 
- Visualization experiences such as data comparisons for quick understanding, product and scene images to inspire and build confidence, timeline views for organizing information, and interactive maps for location-based planning.
- Sharing and collaboration features.

Ultimately the technology infrastructure is less of a means to stand out and instead table stakes in bringing an interactive, agentic search experience to life. There are two timely technology unlocks that must be leveraged: 

- Gen AI ensures interactions are more specific, engaging, and relevant. Data analytics tools and feedback loops are indispensable for tracking and analyzing user interactions to help refine personalization algorithms, while machine learning models are needed to adapt data to user preferences over time, ensuring that the search experience becomes increasingly personalized with each interaction.
- The agentic tooling stack: the integration infrastructure and APIs needed to facilitate access, authentication, and data sharing across platforms. 

With the right technology and AI infrastructure layers in place, there is a world of possibility for differentiating on dynamic, personalized discovery services across various verticals.

**The Opportunity for Versatile [and Sticky] Business Models**One thing we love about this evolved ‘Search to Service’ vision is that it can be supported by dynamic business models beyond advertising — a stark contrast to the SEO and ads-riddled models that dominate traditional search. The vertical nature implies higher intent traffic, while personalization should inspire higher conversion, making the commission and referral model far more compelling than basic search experiences.

The other obvious offering is a membership or subscription model based on access to enhanced features ranging from depth of profile personalization, volume of actions taken on a user’s behalf, and tooling to deliver results in tailored formats. Further, for an experience that clearly improves over time with a growing trove of user actions, loyalty, and retention are much stronger, as the shared investment in actions and data collection makes for high switching costs for the user. 

**Introducing Daydream, the “Search to Service” Model in Commerce**Daydream - [which just announced its imminent launch](https://techcrunch.com/2024/06/20/former-stitch-fix-coo-julie-bornstein-secures-50m-to-build-a-new-age-e-commerce-search-engine/) - will serve as an early example of this evolution from static, one-sided search to dynamic, actionable discovery services. The team is building an entirely new platform that leverages generative AI, machine learning, and computer vision to bring to life an intuitive, end-to-end discovery and shopping experience like no other. Led by retail visionary Julie Bornstein, the Daydream founding team has spent over a decade operating at the intersection of commerce and AI, hailing from Microsoft AI, Google, YouTube’s Gen AI division, Sephora, Nordstrom, StitchFix, Farfetch, and more. They are uniquely qualified to meet this moment of change, setting a new standard for search and….shopping. We’re not just motivated by Daydream’s vision to transform shopping, but to inspire the new standard in agentic, service-like platforms across nearly all divisions of the consumer market.

Join [Daydream’s waitlist](https://daydream.ing/welcome) to preview the future of shopping for yourself in the coming months.`,
  },
  {
    slug: "how-fay-is-scaling-customized-nutrition-care-for-consumers-while-reshaping",
    title: "Investing in Fay: Scaling Customized Nutrition Care for Consumers While Reshaping the Business Opportunity for Dietitians",
    date: "May 15, 2024",
    year: 2024,
    author: "Nicole Johnson",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "Fay",
    excerpt: `Today, we’re sharing that we’re leading the $20 million series A for Fay, the platform enabling consumers to access registered dietitians at little to no cost through insurance while empowering an...`,
    content: `Today, we’re sharing that we’re leading the $20 million series A for [**Fay**](https://www.faynutrition.com/), the platform enabling consumers to access registered dietitians at little to no cost through insurance while empowering an o
verlooked, lesser-served sector of healthcare providers–registered dietitians (RDs)–to build their personal businesses on their own terms. Fay stood out as the company to partner with in the nutrition space based on their tremendous impact and scale in a relatively short period of time, demonstrating their immediate resonance with RDs and their opportunity ahead—along with their product sophistication, [**unique model**](https://www.forerunnerventures.com/our-perspectives/from-digitally-native-brand-to-digitally-native-franchise-a-new-model), and the caliber of the team.Fay comes at a time when America is clearly at a critical moment with nutrition and dietetics across culture, health, and public interest. There’s no shortage of evidence illustrating this reality:

- Obesity rates in America hover around [**41%, up from 11% in 1990**](https://www.cdc.gov/obesity/data/adult.html), and the WHO has declared obesity an epidemic that continues to worsen.
- About half of all American adults [**have 1 or more preventable chronic diseases**](https://health.gov/our-work/nutrition-physical-activity/food-medicine), many of which are related to poor-quality eating patterns — including cardiovascular disease, high blood pressure, type 2 diabetes, some cancers, and poor bone health.
- Consumers are fundamentally rethinking the way they approach their health, as evidenced by the ballooning popularity of better-for-you food products, GLP-1s, wearables, and of generally embracing proactive medical care. 

While we know that nutrition is the foundation of health, and that poor nutrition is a key driver of chronic diseases, the system hasn’t set up consumers to properly understand and take control over their diet. We know empirically that RDs can effectively support individuals in managing and preventing conditions through nutrition care, but there’s a general lack of consumer awareness about the role that dietitians can play, not to mention, the broader role food and weight play in our larger health. This issue is compounded by limited in-network coverage, sticker shock with out-of-pocket costs, and the overall de-prioritization of proactive efforts within the healthcare system. 

Founded in 2022 by [**Sam Faycurry**](https://www.linkedin.com/in/samfaycurry/) and [**Mark Stefanski**](https://www.linkedin.com/in/markstefanski/), Fay connects patients with registered dietitians who deliver personalized nutrition and lifestyle counseling to change the way people think and feel about food—at little to no cost for consumers through in-network care. Fay has always operated by putting RDs first, offering providers the ability to accept insurance and run their business through the Fay Nutrition platform. At Forerunner, we refer to this model as a digitally-native franchise, where small business entrepreneurs can run their own business through a platform with supporting tools and resources needed for scale, all while aligned incentives ensure value accrual is greater through the platform versus off. This model honors providers’ desire to work on their own terms and practice their preferred methods of dietetics, while giving them a powerful and growing set of offerings to do so, all of which drive provider retention and end-patient outcomes.Fay wouldn’t be possible without Sam, Mark, and the incredibly energized and effective team they’ve built. Sam’s mother and sister are both RDs, and he saw an immense opportunity to empower this under-served, but very-much-needed class of healthcare providers. 

We believe this team and this model are best positioned to reshape nutrition care at a time when Americans need it most.`,
  },
  {
    slug: "evolving-beyond-vertical-saas-our-investment-in-stress-free-auto-and-their",
    title: "Evolving Beyond Vertical SaaS: Our investment in Stress-Free Auto and their Tech-Enabled Service Model",
    date: "March 28, 2024",
    year: 2024,
    author: "Brian O'Malley",
    authorTitle: "Board Partner",
    category: "Investment Announcements",
    company: "Stress Free",
    excerpt: `American culture is synonymous with cars. Considering how much time we spend behind the wheel, it's obvious why. In the past 40 years, the number of miles Americans collectively drive has increased...`,
    content: `American culture is synonymous with cars. Considering how much time we spend behind the wheel, it's obvious why. In the past 40 years, the number of [**miles**](https://www.thezebra.com/resources/driving/average-miles-driven-per-year/#:~:text=This%20breaks%20down%20to%20an,to%20the%20moon%20and%20back.) Americans collectively drive has increased from 1.5 trillion to 3.2 trillion per year, enough to take nearly 5,000 trips to the moon and back. That’s more than twice as much driving with a population that’s only 50% larger. And, the more people drive, the more essential the auto maintenance industry is to our quality of life. Unfortunately, in the world of auto maintenance, clarity and trust are rare finds and often overshadowed by predatory practices and consumer skepticism. The industry is notorious for pushing unnecessary repairs, bait-and-switch quotes, long wait times, and scare tactics. [**AAA found that nearly two-thirds of Americans**](https://newsroom.aaa.com/wp-content/uploads/2016/12/Auto-Repair-Survey-FINAL.pdf) don’t trust auto repair shops, and one-third don’t have a shop they feel confident visiting. In this landscape of doubt, Stress-Free Auto Care stands out by emerging as a destination for transparency and reliability.**What’s Under the Hood****‍**Our investment in Stress-Free didn’t start with the desire to invest in an auto repair shop. We set out with the belief that the right underlying software platform could help local businesses operate more effectively and transparently, providing a better customer experience along the way. The Stress-Free team started out with a similar thesis, initially providing software to auto repair shops and launching a marketplace called CarDash. But, after several years of trying to deploy software and build an efficient two-sided marketplace, they found the auto repair industry too resistant to change, too reluctant to adopt technology and, all too often, unmotivated to provide certain levels of transparency. Traditional shops were committed to their way of doing things, and while not optimized, many shops are successful enough operating at the status quo.After years of learning this the hard way, the Stress-Free team took a bet on themselves, acquiring a local, under-appreciated shop for only $60k in cash. As an experiment, they decided to run the business themselves using their own software and a new compensation model that motivated technicians to do right by their customers while maximizing efficiency. After three months, the shop had repaid the initial cash; today, it has repaid the initial investment more than tenfold. 

It turns out that when running a shop, the technology “under the hood” matters. Stress-Free’s software immediately streamlines customer bookings, taking a historically completely offline industry and moving 1/3 of appointments online, while simultaneously improving customer satisfaction to a 4.9 star rating. However, the obvious yet under-appreciated challenge of Vertical SaaS is that it needs to be implemented correctly to reach its full potential. By owning and operating its locations, Stress-Free ensures it has well-trained and incentivized staff to make use of that software. Further, recognizing that software alone is often not enough, Stress-Free also remodels, rebrands, and modernizes all their shops, including what has become a customer favorite Stress-Free lounge with modern amenities like phone chargers, great snacks and free Wifi. Stress-Free endeavors to have the customer’s physical experience at the shop parallel the quality of the modern software experience.

Our experience with Stress-Free has strengthened our interest in tech-enabled services businesses at Forerunner, showing that owning workflows can now be a venture-scale opportunity and more impactful than merely selling software in certain scenarios -- particularly with the improvements made possible by AI.

**Expansion through Activation**In the past two years, Stress-Free has continued to roll out this playbook, showing that its owned-and-operated, tech-enabled services model is working. Stress-Free has acquired nearly 20 shops, expanding outside the Bay Area into Southern California and Texas. 

Stress-Free offers a highly compelling path for established shop owners who are looking to sell their business and retire, but don’t have a liquid market given the nuances of full service auto repair. Stress-Free’s infrastructure and best practices make the model repeatable, which enables the opportunity to scalably make these acquisitions and bring them on platform.

Besides gaining access to the physical infrastructure of the shops that make the repairs possible, the acquisition playbook gives Stress-Free a leg-up over spinning up their own locations. First, the shops Stress-Free acquires have positive goodwill within the community through years of services and strong brand recognition, which translates to lower customer acquisition costs. They also inherit the existing staff, many of whom are experienced technicians that are increasingly hard to recruit in the open market.

By operating these shops, Stress-Free has built out a reputable brand and further refined their technology stack. While some software is built in house, some is integrated using best-in-class solutions, so there is as much integration and implementation as there is innovation. From here, the Company is looking to package up their stack and move into franchising. In line with our [**Digitally-Native Franchise**](https://www.forerunnerventures.com/our-perspectives/from-digitally-native-brand-to-digitally-native-franchise-a-new-model) thesis, this will enable local entrepreneurs to leverage the Stress-Free playbook while enabling the parent company to expand more quickly and capital efficiently, reaching over a hundred locations in the next few years.**Who’s Behind the Wheel**As Dominic Toretto famously stated, “It doesn't matter what's under the hood. The only thing that matters is who's behind the wheel.” So as much as the technology enabled the evolution, the process wouldn’t exist without [**Yinon Weiss**](https://www.linkedin.com/in/yweiss/), Stress-Free’s founder, and industry vets, like [**Rhett Whitehill**](https://www.linkedin.com/in/rhett-whitehill/), who he recruited to the team. Yinon is an operator in the truest sense of the word. Prior to starting CarDash, he served in the military for 10 years as an officer both in the Marine Corp and Army Special Forces. His drive, combined with Rhett’s understanding of the ethos of a successful shop, has set Stress-Free on the course it’s on today. The combination of the underlying platform, refreshed brand in a stalled industry and unparalleled team is going to reset consumer expectations in auto care and provide millions with a smoother ride ahead. We, at Forerunner, are looking forward to the journey!`,
  },
  {
    slug: "leading-craftworks-seed-round-to-build-the-beloved-consumer-brand-in-home",
    title: "Leading Craftwork’s Seed Round to Build the Beloved Consumer Brand in Home Services",
    date: "November 18, 2023",
    year: 2023,
    author: "Nicole Johnson",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "Craftwork",
    excerpt: `Meet Craftwork: a new company building the first iconic consumer brand in home services through a trusted, reliable, tech-enabled source for home repairs, starting with house painting — while also...`,
    content: `Meet [**Craftwork**](https://craftwork.com/): a new company building the first iconic consumer brand in home services through a trusted, reliable, tech-enabled source for home repairs, starting with house painting — while also reshaping the SMB sector in this space to be more equitable and lucrative for its many hardworking craftspeople. [**In the words of Tim Griffin, Craftwork’s CEO**](https://www.forbes.com/sites/brucerogers/2023/10/17/maria-davidson-builds-kojo-to-make-construction-more-efficient/?sh=6a194bcc404f): “*We believe this is a rare opportunity to build something massive, not just to build a national brand in home services, but also to provide good paying, stable jobs and to erase the stigma associated with the trades and to give folks an opportunity for upward mobility.”*When we first learned of Craftwork, we were taken by the freakishly effective, scrappy team: Craftwork has quickly scaled to significant revenue growth in just a few months of operating in only one market, and it wasn’t the founders’ first rodeos — Tim took this last company from $1m to $150m in revenue in just 18 months.

Today, we pleased to share that we led the $6m seed round for Craftwork, joined by General Catalyst, Y Combinator, a16z General Partner Jeff Jordan and DoorDash Co-founder Evan Moore.

We could have made the investment solely on the basis of flawless execution and full-category ambition, but it helped that Craftwork sits squarely at the intersection of several themes we’re tracking closely at Forerunner:

*Massive “real-world” industries where there’s meaningful opportunity for reinvention:*Home services is a $500B industry that’s hardly seen any change since it shifted from the Yellow Pages to marketplace aggregators in the 2000s. And today, consumers have no where to reliably turn when trying to do a home upgrade — pricing (and quality of service) are all over the map. Get three quotes online for a paint job; the spread and opacity of what you get back are mind boggling.

It’s easy to think that with all the tech advancements over the past 10-20 years, most opportunities for modernization have been claimed, but we still see plenty of space in big, unsexy industries that have been overlooked due to historical fragmentation or misconceptions. It’s this thesis that led us to invest in [**Fora**](https://www.forerunnerventures.com/our-perspectives/how-fora-is-reimagining-the-composition-for-the-travel-agency), a company reinventing the composition of the travel agency, and [**Atticus**](https://www.forerunnerventures.com/our-perspectives/atticus-getting-americans-in-crisis-the-aid-they-deserve), the largest public-interest legal services provider for consumers.*Digitally-Native Franchises:*While Craftwork has grown through an owned-and-operated model to date, there’s a big opportunity for scale through franchising where top quality, local home services businesses join Craftwork to modernize their operations, offer customers a sleek tech-enabled experience, and benefit from Craftwork’s brand halo that drives marketing and growth. Overall, we see [**Digitally-Native Franchises as a highly compelling new model for entrepreneurship**](https://www.forerunnerventures.com/our-perspectives/from-digitally-native-brand-to-digitally-native-franchise-a-new-model), where local SMBs thrive as a part of a larger platform with proven playbooks, operational and marketing support, and significantly more opportunity for value accrual than going at it on their own.*Consumers’ reorientation towards core life foundations, focusing on stability and pragmatism:*The home services space is seeing unique tailwinds: after years of so much time at home through the pandemic, consumers have refreshed, dedicated passion for renovating their living spaces and living more quiet, settled lives — a trend that’s persisted even since things “returned to normal” (*The Economist* calls this the age of the hermit consumer). This is all part of a larger trend where we’re seeing consumers craving more simple, pure ways of living, [**investing in stronger core life fundamentals**](https://www.forerunnerventures.com/our-perspectives/the-next-wave-of-game-changing-companies-will-be-life-changing-companies) amid a time of so much social, political and economic upheaval. One might argue that a weakened macro would be a major drag on home services, but with mortgage rates untenable for so many would-be homebuyers, consumers are instead upgrading the spaces they have.[**Read more on Craftwork’s seed funding in Forbes**](https://www.forbes.com/sites/brucerogers/2023/11/17/craftwork-out-to-modernize-home-services-market-scores-6-million-seed-round/?sh=57ebdb42be5a) and be sure to keep an eye out for those Craftwork-branded vans (and jumpsuits) when they come to your market.`,
  },
  {
    slug: "congratulations-to-jason-bornstein-our-newest-partner-and-head-of-research",
    title: "Congratulations to Jason Bornstein, our Newest Partner and Head of Research!",
    date: "November 3, 2023",
    year: 2023,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: null,
    company: null,
    excerpt: `At Forerunner, we believe in keeping our team lean, nimble and purposefully structured to only include the experts who will ensure we succeed — but we also remain eyes-wide-open about how to maintain...`,
    content: `At Forerunner, we believe in keeping our team lean, nimble and purposefully structured to only include the experts who will ensure we succeed — but we also remain eyes-wide-open about how to maintain an edge (call it the discipline of traditionalists paired with the hunger of entrepreneurs). With this approach, it was an easy and obvious next step to promote Jason Bornstein to Partner — and for him to assume a new, defining role for our firm: Head of Research.

Throughout Jason’s 5+ year tenure at Forerunner, and 10+ year tenure in the Forerunner community while previously at a portfolio company, he’s proved time and time again that he’s unafraid to push boundaries on common assumptions, inherently driven to take on new challenges, and highly skillful at combining analytical nuances with big picture thinking. This has made Jason an indispensable resource to our investment team and portfolio companies, who consistently rely on him for strategic guidance rooted in the values that make us Forerunner: teamwork, original thought, integrity, and curiosity.

Jason’s next role marks a new one at Forerunner, and one that’s illustrative of an ongoing commitment to hone our research-driven competitive edge. As our Partner and Head of Research, Jason will set Forerunner up to remain two steps ahead when it comes to projecting ongoing shifts in market conditions and evolutions of consumer needs, aspirations, attitudes, and inclinations. As consumer-led investors, we obsess about uncovering why people believe the things they believe, buy the things they buy, want the things they want, and pursue the goals they chose — and as modern consumers grow evermore individualistic and complex, consistent data-driven analysis is essential to illuminating these cultural dynamics. With Jason helming this practice, we’ll double down on the research that sharpens our investment strategies, crystalizes our market perspectives, and informs how we guide our companies. 

For these past several years Jason has proven to be an incredibly valuable thought partner — someone we and Forerunner entrepreneurs truly rely on. Jason makes us all better at what we do, and we look forward to him continuing to make a lasting impact at Forerunner, our portfolio, as well as on consumer research at large.`,
  },
  {
    slug: "how-fora-is-reimagining-the-composition-for-the-travel-agency",
    title: "How Fora Cofounders Henley Vazquez and Evan Frank are Reimagining the Composition of the Travel Agency",
    date: "September 25, 2023",
    year: 2023,
    author: "Brian O'Malley",
    authorTitle: "Board Partner",
    category: "Investment Announcements",
    company: "Fora",
    excerpt: `Despite especially tumultuous economic conditions for consumers, including a looming recession, inflation and historic rises in interest rates, consumer spending is proving remarkably resilient. Even...`,
    content: `Despite especially tumultuous economic conditions for consumers, including a looming recession, inflation and historic rises in interest rates, consumer spending is proving remarkably resilient. Even amidst the uncertainty of 2022 with the S&P 500 dropping -19.64%, people kept spending and credit and debit card activity [**rose +5.9% in 2022**](https://newsroom.bankofamerica.com/content/newsroom/press-releases/2023/01/bofa-data-finds-that-2022-was-a-solid-year-for-consumer-spending.html#:~:text=BofA%20aggregated%20credit%20and%20debit,over%2Dyear%20(%20YoY%20).). This year, the Consumer Price Index is holding strong and even [**seeing conservative growth**](https://edition.cnn.com/2023/08/10/economy/cpi-inflation-july/index.html), up 3.2% in July 2023.So what are consumers spending on? Housing, transportation and healthcare remain constants, but one category that’s been particularly strong is travel.

**The Resilience and Sheer Market Size of the Travel Industry:**Last year, the Travel & Tourism sector contributed [**7.6% to global GDP**](https://wttc.org/research/economic-impact#:~:text=In%202022%2C%20the%20Travel%20%26%20Tourism,%2C%20only%2014.1%25%20below%202019.), creating 22 million new jobs. This year, global tourism will hit [**95% of pre-pandemic**](https://www.unwto.org/news/tourism-set-to-return-to-pre-pandemic-levels-in-some-regions-in-2023) levels, up from 63% in 2022. Airbnb’s last-twelve-months revenue is up 23% as of summer 2023, while the price of hotel rooms is up about [**20%**](https://www.reuters.com/business/us-european-hotel-room-rates-could-keep-rising-industry-executives-2023-06-07/) since 2019 as demand outstrips supply. From a consumer perspective, these market dynamics are abundantly clear: people increasingly crave offline, enriching cultural experiences as antidotes to the isolation of remote work, the ubiquity of online-first interactions, and rising sentiments of loneliness and lack of purpose. In parallel, a growing demographic of younger generations see travel as an extension of their core identity, one defined by curiosity, adventure, and humanity. But for all of the travel industry’s resilience and consumer mindshare, it’s still largely dominated by dated incumbents operating on antiquated consumer experiences. Travel agencies might sound like an ancient pre-internet phenomena, but in the U.S. alone they comprise a $100B market that is actually growing. This is despite online travel agencies being over-merchandised with poor inventory and a lack of quality customer service, let alone the lack of built-in trust around recommendations. Their durability is illustrative of the profound desire from consumers to travel and the dearth of resources available for planning to do so, signaling a promising opportunity for modernization. There is a deep need for a fresh perspective that caters to younger travelers looking for unique experiences, recreating the travel-planning experience that millennials and Gen Z love most: sourcing tips from close trusted friends and experts who are in-the-know. 

**Fora: Dramatically Restructuring the Travel Agency Model**[**Fora**](https://www.foratravel.com/) is reinventing the composition of a travel agency, designed around the hobbyist-entrepreneur looking for flexible, engaging work and consumers who crave unique, thoughtful travel experiences that feel like they were curated by an expert friend. At the core of Fora’s success is a new class of travel advisors — a spirited and knowledgeable group of travel passionists and content creators turning their interests into their career or a side hustle — paired with a scalable technology platform and playbook that enables them to immediately function like pros. Today, anyone can apply to be a Fora advisor — and the demand is so strong that Fora is adding over 1,000 new advisors a month. The company has effectively opened a powerful new source of supply within the travel advisor market, and thus ignited a set of consumers who haven’t had services or experiences designed specifically for them. The model is a win-win-win for all parties: it’s free for consumers (and even gets them bonus perks and upgrades), hotels and experience providers get more leads without having to pay for ones that don’t convert, and advisors take a cut of what they book. Incentives are aligned all around and structured to drive more value for all.Fora also marks the first Digitally-Native Franchise backed by Forerunner, following our thesis that there is a profound, category-defining opportunity to build a new model for digital entrepreneurship within the services industries. Digital franchises sit in-between two recent tech-driven advancement that enabled people to work for themselves: 1) full solopreneurship, where there’s high autonomy and meaningful opportunity for upside, but higher risk and responsibility, and 2) gig economy work, where there’s limited risk but also limited flexibility and opportunities for value accrual. On either end of those, there are meaningful sacrifices — but digital franchises offer a middle ground. They provide the stability and structure of a proven business model as well as operational and marketing support, but the flexibility and upside potential of true entrepreneurship. The model is especially relevant today as consumers increasingly want to work for themselves in some shape or form, but are often intimidated about where to start, especially amid current economic conditions.

Founded in partnership with Forerunner by Henley Vazquez, who most recently ran her own boutique travel agency, Passported, Evan Frank, formerly Co-founder of onefinestay, and Jake Peters, who has built two consumer services business through successful acquisitions — the team is uniquely positioned to enable anyone with a passion for travel to launch their own business. And in just a few years since launching, Fora has booked over $100 million in travel. 

**A Travel-Planning Experience that Matches the Magic of Travel:**Today, Fora is comprised of a thriving, dynamic group of thousands of modern travel advisors who love their work. About 85% of Fora advisors are women, and 46% are parents — with some advising full-time and even earning over $100k a year through Fora, and some part-time as a fun and valuable side hustle. The strong bond they share over their passion has inspired Fora advisors to proactively plan meet-ups in their respective locations, and even travel cross-country for larger community events and industry conferences. As a result, travelers nationwide get more inspiring, personalized travel experiences that spark curiosity and connect them with new people and cultures. 

Amid a time of increased loneliness, isolation and feelings of stagnation, live, enriching experiences like Fora’s have never felt more valuable.`,
  },
  {
    slug: "delivering-on-techs-age-old-holy-grail-duckbill-the-indispensable-ai-powered",
    title: "Delivering on Tech’s Age-Old Holy Grail: Duckbill, the Indispensable AI-Powered Personal Assistant",
    date: "September 13, 2023",
    year: 2023,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: "Investment Announcements",
    company: "Duckbill",
    excerpt: `I asked the Forerunner team to share what’s on their to-do list, specifically their most dreaded, long-procrastinated tasks. Their responses:`,
    content: `I asked the Forerunner team to share what’s on their to-do list, specifically their most dreaded, long-procrastinated tasks. Their responses:

- A UPS insurance claim for a computer monitor that broke while moving across the country
- Asking Metromile to reconsider increased insurance costs over a tiny fender bender that was the other driver’s fault
- Getting my REAL ID
- Aggregating and my filing tax documents
- Tracking wedding gifts 
- Booking travel 
- Finding a primary care doctor
- Canceling an old credit card

Sound familiar? It’s easy to think that procrastination and to-do lists are relatively menial problems that could be solved with better focus or will power. But the issue is more profound: people today legitimately feel much more busy and pulled in different directions than they have in years past — and the stressors are emotional, mental, and structural. 

**The Burnout Generation:**Dual-income homes are [**more common than ever**](https://www.magnifymoney.com/news/dual-income-households-study/), which means more resources but also more competing priorities and less spare time. Experts on time management and human psychology [**share concerns**](https://www.theatlantic.com/family/archive/2021/01/to-do-list-tasks-never-end/617674/) about the byproducts of larger shares of people taking on the combined “social roles” of worker, spouse, and parent, noting that expectations have risen within each, coupled with sentiments that one has to be great across all or they’re “failing” as a person. Similarly, researchers are critical of the double-edged sword of tech-driven accessibility and enablement, cataloging a startling number of now-common tasks that only started to fall on consumers in the last decades: purging your inbox, managing online passwords, booking your own travel, researching health issues online, navigating online customer-service portals, updating your software, and so on. These sound small in effect, but in aggregate, they are overwhelming and contribute to an ongoing sense that the work is never done.It’s somewhat telling that to-do lists are not seen as something that should ever be completed in full. In fact, a fully checked-off to-do list might feel strange and signal something was forgotten. We are so accustomed to having a laundry list of unfinished tasks, the alternative feels awkward and imaginable.

**Introducing Duckbill:**Forerunner has led the $25 million series A for [**Duckbill**](https://www.getduckbill.com/) to provide consumers with some much-needed relief from this very problem. Duckbill is a personal assistant powered by experts and AI to tackle people’s never-ending to-do lists. Within Duckbill���s early base of beta customers, we’ve seen people naturally start by assigning out their most procrastinated, painful to-dos, then edging out from there to delegate deluges of seeming small and simple items that they never thought to outsource in the first place. The result is a quickly indispensable service that provides pain relief in areas consumers didn’t realize pain relief was possible. Duckbill is now fulfilling tasks in over 75 categories, ranging from scheduling appointments and reservations to planning birthday parties, researching purchase options and shopping on behalf of customers, vetting and scheduling a plumber, electrician and cleaner, researching and buying gifts, booking the most economical and efficient travel options, and more. For $100/month, customers can delegate tasks, which are all addressed within 24 hours through Duckbill’s 24/7 service (perfect for when you’re doom-scrolling at 2am, at work, or out for your Saturday morning jog). 

Duckbill’s early customer base is 70% women, which may not come as a surprise given that an American Psychological Association [**report**](https://www.glamour.com/story/why-your-to-do-list-may-be-the) found that 43% of women say they're more stressed out than they were five years earlier, and nearly 25% describe their stress as "extreme." Women under age 33 report the highest levels of stress of any generation, with those 33 to 46 coming in very close behind. The company has immediate opportunity to cater to all kinds of consumers, with certain demographics in clear, immediate need. **A Powerful Human-in-the-Loop AI Model**Duckbill follows our thesis that AI assistants will be the entry point to the internet. We believe consumers will gravitate towards a homebase to start all questions and address daily needs — just as Google was the beginning of all search, an AI assistant stands to integrate seamlessly with user needs and be where users start their day. Natural language is inherently human and social, so putting natural language at the forefront is how consumers take control back from technology and have it *work* for us.Duckbill opts for a powerful human-in-the-loop model where consumers get the benefit of both worlds: the nuance and personal touch of someone assigned to see every task is tackled, made possible by the efficiency and breadth of AI tools underpinning the legwork (a “copilot�
�). 

It’s worth noting that the concept of the tech-enabled personal assistant has long been seen as an unattainable holy grail in Silicon Valley: an oft-attempted, never realized ambition. There have been many efforts that failed to deliver on the true potential of the concept — there’s Siri, which is limited to basic questions you could google yourself, TaskRabbit, which has been largely reduced to home-related tasks, and numerous apps that have failed to gain meaningful traction and operationalize a scalable business. It’s not a coincidence that this idea is seeing a meaningful reboot in 2023, underpinned by the best of recent AI advancements, which are essential to a personal assistant in a truly scalable, highly effective format. 

If the promise of Duckbill seems nearly unbelievable, especially in the context of being an attractive and compelling business, we would not have disagreed until we met the highly competent and special team behind this company. Duckbill’s team, composed of former Uber, Whoop and Oscar leaders, we believe, is unparalleled in its experience, discipline and vision to take on this bold mission and operational challenge. The Founder and CEO Meghan Joyce is the former COO and EVP of Oscar Health, and prior, the General Manager of Uber in the US and Canada — bringing undeniable expertise in consumer products and leveraging technology to empower capabilities not yet previously proven.

We see Duckbill’s solution as an inevitability in the world of AI and consumer behavior — and essential amid a time when burnout, stress and busyness seem to dominate consumer sentiments. There’s never been a better team or better time to deliver on tech’s promise of the AI-powered personal assistant.`,
  },
  {
    slug: "atticus-getting-americans-in-crisis-the-aid-they-deserve",
    title: "Sam Byker is Building Atticus to Get Americans in Crisis the Aid They Deserve",
    date: "September 8, 2023",
    year: 2023,
    author: "Brian O'Malley",
    authorTitle: "Board Partner",
    category: "Investment Announcements",
    company: "Atticus",
    excerpt: `Every American pays into systems that are built to protect them when a crisis strikes. Our payroll taxes fund social safety net programs, our monthly premiums fund insurance coverage, and our...`,
    content: `Every American pays into systems that are built to protect them when a crisis strikes. Our payroll taxes fund social safety net programs, our monthly premiums fund insurance coverage, and our employer contributions fund various benefits. 

As a result, when something awful happens — a disabling illness, a workplace accident, a military injury — most theoretically have access to life-changing aid. Today, though, many never get it. Red tape, bureaucratic incompetence, and adversarial systems mean that millions of qualified people give up, get turned away, or simply never learn that they’re eligible.

Since 2021, we’ve partnered closely with Atticus on their simple yet powerful mission: to tear down barriers between Americans in crisis and the aid they need.

**A win-win model for clients and attorneys**Atticus is a digitally native public-interest law firm. They offer clients a no-brainer deal: Atticus will help them figure out if they qualify for aid, get a top-quality lawyer to represent them, and do all the legwork to prove they’re eligible and win benefits. Clients pay nothing up front, and nothing if they lose; if they win, Atticus gets a regulated share of what they earn, paid directly by government or insurers.

The space Atticus works in is massive: safety net and insurance programs pay out more than $1 trillion to individuals annually — more than 4% of GDP. But the field has seen little innovation, even as other complex consumer spaces have launched category-defining companies.

Atticus’s founder and CEO Sam Byker spent years working in government and as a field organizer. He heard again and again from constituents whose families had spent years fighting red tape after an illness or accident. Later, while pursuing a JD/MBA at Stanford, he studied the systems they were fighting, and got to know existing players in the space: small law firms and nonprofits, some great and some awful — with clients rarely able to tell the difference.

Atticus pursued a unique model: It focused intensely on regulatory compliance (becoming a licensed law firm), and built partnerships with top established local lawyers. By offering them high-quality software, a steady stream of vetted clients, and an attractive revenue-sharing model, the company managed to get many of the best and longest-established law firms in the country on its platform quickly.

**Re-imagining a legal system that works for everyone**As a result, growth has been fast: since its launch in 2019, Atticus has grown to be the #1 firm in the country helping disabled Americans get benefits. In 2023, it will help 25,000 clients — who as a result of its work will get more than $3 billion in lifetime aid. Its 80-person cross-discipline team includes lawyers, software engineers, product managers, marketers, and client experience agents — each role required to deliver the comprehensive experience.

The company’s first vertical was Social Security Disability, and it’s since expanded to workers’ compensation and a handful of other programs. The core focus today is on scaling its technology to create a seamless journey for clients, and to empower lawyers with better tools to scale their practice and effectively win more cases.

As we at Forerunner think about some of the biggest opportunities ahead, we come back to consumers’ core life needs still largely unmet despite so many tech-driven advancements over the past decade. 

When we look around, we see a society that’s grappling with how to maintain their personal health and wellbeing (both mentally and physically), grasping for financial security and career fulfillment amid increased economic uncertainty, and generally struggling to live contented, purposeful lives. 

Some of the most profound opportunities for entrepreneurship lie in rebuilding these core life foundations to work for today’s increasingly complex set of consumers. Atticus fits squarely into this nexus by arming people with an easy, powerful entrypoint to getting rightful aid in a crisis — a problem that disproportionately impacts middle and lower socioeconomic populations.

Since Forerunner led Atticus’ series A in 2021, the team has executed with great speed and intention. We were eager to deepen our support in their series B fundraise earlier this year, and are proud to continue to closely partner as they expand to provide great representation for all Americans.`,
  },
  {
    slug: "welcome-topline-pro-building-the-tech-stack-for-the-long-underserved-home",
    title: "Topline Pro: Building the Tech Stack for the Long Underserved Home Services Industry",
    date: "July 31, 2023",
    year: 2023,
    author: "Brian O'Malley",
    authorTitle: "Board Partner",
    category: "Investment Announcements",
    company: "Topline Pro",
    excerpt: `We’re announcing today that we’re leading the $12M series A for Topline Pro, which is building the first comprehensive tech stack for the $500B+ home services industry. Topline Pro enables the...`,
    content: `We’re announcing today that we’re leading the $12M series A for [**Topline Pro**](https://www.toplinepro.com/), which is building the first comprehensive tech stack for the [**$500B+**](https://www.forbes.com/sites/forbesbusinesscouncil/2022/06/23/as-home-service-companies-grow-entrepreneurial-prospects-expand/?sh=27278272c909) home services industry. Topline Pro enables the millions of entrepreneurs in home services to have more ownership and control over their business by dramatically improving how they’re discovered, build trust and customer relationships, and efficiently scale their bookings. Ultimately, Topline Pro is about fostering economic growth for a sector that has had to rely on dated, exploitative systems and generally been left out of the tech-enabled advancements that have transformed the scalability in other sectors.The impact of Topline Pro is often best conveyed directly through its customers, who see transformative business value from moving their business to the Topline Pro platform, which has generated over $180M in revenue for its customers since launching in winter 2022. There’s Jered, a landscaper in Daytona Beach, Florida who grew from $70K in revenue to over $2.2M in just over a year by using Topline Pro. And there’s Lauren, a home painter in Adrian, Michigan who started a business and grew it to nearly $1M in revenue in just 12 months. These entrepreneurs are skilled tradespeople at their unique craft and have long deserved a platform to properly capture their market value and potential. 

That gets at another point: this market has been dramatically underserved due to a mix of structural and cultural issues. For decades, conventional wisdom in venture capital was to stay far, far away from the SMB sector — it’s notoriously fragmented and there can be especially [**high churn**](https://www.forerunnerventures.com/our-perspectives/rebuilding-america-by-empowering-main-street-usa). Home services have been particularly neglected, both for these reasons and the assumptions that traditionally more “blue-collar” trades imply a less-sophisticated operator who isn’t tech savvy enough to employ the latest and greatest tech. As a result, home services SMB have had to rely on costly middlemen, both agencies and lead-generation platforms, where misaligned incentives impede growth and efficiency. As a consumer, many of us have experienced the flipside of this first hand: a deluge of contractors reaching out (and even repeatedly following up) after a request is submitted through an aggregator or marketplace.This is in stark contrast to the tailwinds of change we’ve seen in adjacent SMB industries: there’s Toast, which simplified POS for restaurants before expanding to a customer-facing ordering experience and growing to a $30B valuation, as well as Shopify, which has reshaped commerce opportunities for retail business across the globe. Both these platforms enable small businesses to operate with much more flexibility, efficiency and scale, so they can focus more on what they uniquely do best — be it cooking amazing food, or selling unique goods. There has been no analogous platform in home services, despite it being a massive, incredibly resilient category: it’s recession proof and incapable of being automated by AI (roofs will leak whether or not there’s a market downturn, and a pro will always have to fix it).

In home services, the entrepreneurs spend the majority of their time out on jobs that are manual by nature, so historically, the operational overhead is done outside primary work hours and duties. That creates a pronounced need for an efficient, comprehensive platform that can collapse legwork and automate growth. AI uniquely makes this possible, generating growth assets (ads, copy, reviews capabilities) while managing operational flows, and distributing the best practices to all pros across its platform. The long-term vision for Topline is to empower the business owner to make key decisions around management, but enable Topline to execute these decisions, so they accelerate growth while having more time and resources to focus on their craft or spend much-deserved time with friends and family.

Nick Ornitz & Shannon Kay, Topline Pro’s Co-founders, are uniquely suited to build this. They have long-standing expertise in the home services space, as well as a deep personal connection to small business owners — from family members who operate their own services companies to daily conversations with customers. 

Tech innovation can often feel saturated, especially in b2b SaaS, but we still find that there are millions of people and small businesses right before our eyes that deserve dramatically better tools and resources. With Topline Pro, there’s a profound, billions-dollar opportunity to reshape economic empowerment for the small businesses that have been an indispensable part of peoples’ lives for centuries.`,
  },
  {
    slug: "from-digitally-native-brand-to-digitally-native-franchise-a-new-model",
    title: "Digitally Native Franchises: a New Model for Commerce and Entrepreneurial Empowerment",
    date: "June 2, 2023",
    year: 2023,
    author: "Brian O'Malley & Jason Bornstein",
    authorTitle: "Board Partner & Partner, Head of Research",
    category: "Theses",
    company: "Fay, Craftwork, Fora",
    excerpt: `Over the past decades, software-enabled business models have unlocked new opportunities for people to work for themselves. Labor marketplaces, like Uber and Doordash, have allowed people to set their...`,
    content: `Over the past decades, software-enabled business models have unlocked new opportunities for people to work for themselves. Labor marketplaces, like Uber and Doordash, have allowed people to set their own hours within a structured framework, while the rise of DIY software tooling has made it easier to start and manage independent businesses.

However, solopreneurs and SMBs have had to make major tradeoffs at either end of this spectrum. They can optimize for control of their business, but end up largely on their own. Or they can get assistance running it, which largely means one is beholden to the whims of the platform. This has also resulted in highly uneven value distribution between solo workers and the tech businesses that serve them. In the gig work model, workers often only capture a fraction of the value they create while the platform companies command significant take rates. Conversely, in the independent operation model, solopreneurs are largely on their own using DIY software tools. The risk is higher without any added structure or support, but if successfully leveraged, they can create outsized value for their business compared to what they pay the software company.

We propose a middle-ground, a play on the historic franchise model, but reinvented with digitally-native platforms where solopreneurs can grow their own businesses, but get software-driven tools, structure and support to drive success.

**Revisiting the Franchise Business Model**What if there were a way for individuals to own and control their businesses, but also reap the benefits of scale marketing, supply chain and proven strategies? Well, it turns out this already exists in the analog world. You’ve probably heard about franchises as a way for business-savvy celebrities, like LeBron James or Sofia Vergara, to accumulate wealth, but you might not know how prevalent they are outside of these big names and, of course, outside of just restaurants. Businesses ranging from Great Clips to TrueValue Hardware to Century21 have all leveraged the franchise model to help grow.

Franchising has been an increasingly popular business model for many years and a major force in the American economy. It’s generally agreed that the franchise model first gained popularity in the US in the 1920s — A&W Root Beer is credited as the first true franchise business in the US and it became a tremendous success, expanding to 450 locations within 10 years.

Franchising has also become more prevalent than ever. According to a [**report**](https://www.franchise.org/sites/default/files/2023-03/2023-Franchising-Economic-Report.pdf) on the US franchise industry by the International Franchise Association, there were a total of 775,000 franchise establishments in the US in 2021, employing about 8.2 million people. They contributed over $787 billion to the US economy in that same year.**How do Franchises work?**Franchises are the partnership between the Franchisor and the Franchisee. The franchisor creates a business model and brand that has been proven successful, then a franchisor licenses the rights to use this business model and brand for a fee, in addition to fees related to any necessary equipment or infrastructure to get started. This reduces risk to franchisees looking to start their own business.

The franchisee is expected to follow the franchisor's operating procedures in order to maintain the brand's reputation and consistency, but has the freedom to grow and run the business within the defined structure. Consistency becomes an important factor for consumers who are loyal to the franchise and expect a certain brand promise. 

The franchise model works as follows:

The franchisor also provides ongoing support and training to the franchisee, and may assist with advertising and marketing efforts. By leveraging national campaigns and proven established structures, franchisees can collectively grow more strongly than they would on their own.

While franchisees are actively forgoing some autonomy, the playbook and assistance can make success more likely. Same thing for the franchisor. While they give up some level of local control, the empowered franchisee will likely have more passion for their own business than an employee or contractor would, bringing the grit and passion required for success.

**Introducing Digitally-Native Franchises (DNFs)**Digital franchises share the benefits with their offline counterparts, but have a few distinctions:

- Marketing Automation: While all franchisors help with marketing, DNFs also focus on acquiring customers for their franchisees through digital channels. These tools provide SEO, keyword buying and look-alike targeting — at a greater investment than a solopreneur might achieve on their own. If needed, off-hours CX could be an option to ensure leads are processed quickly.
- Unified Platform: From CRM to e-commerce to workflow, DNFs provide one platform for their franchisees. This leverages both software best practices, while also reducing any need for integrations. Benchmarking and best practices can be built into the platform, so that standards are easier to meet.
- Financial Services: By centralizing payments, DNFs can understand the success of individual businesses. These insights give DNFs the ability to understand where franchisees are at with growth and provide cash advances to make that growth less of a burden on the franchisee.
- Online Community: Starting a business can be both lonely and challenging, but through the power of online community, DNFs can provide the peer-level support and guidance needed to be successful. Along the way, many franchisees can become amazing friends.

The Digital Franchise model differentiates itself from both gig work and independent operations by introducing aligned incentives and shared responsibility at its core. This is reflected across all aspects of the model — from the revenue model itself to operational support, product development, demand generation, and even brand strategy.

Many startups, flush with cash over the past decade, have opted to run local operations themselves by employing workers and purchasing physical assets off their own balance sheet. While there is a greater level of control, what would have been advantageous if these businesses were launched as digitally-native franchises?

What would have been different if [**Clutter**](https://www.clutter.com/) worked with local people who wanted to own a storage business? What about [**Future**](https://www.future.co/) working with local trainers already in the gyms frequented by potential customers? Could OneMedical have been more successful as a collection of private practices?**What are some examples of Digital Franchises?**While each market segment will have unique characteristics, DNFs all have flavors of the above characteristics. Let’s look at a few early examples:

- Alma Health: Alma is a mental health company that provides personalized care to clients through a network of therapists who offer both in-person and teletherapy services. Therapists benefit from Alma’s network of insurance payers, guaranteeing payment in two weeks with enhanced reimbursement rates and a cost estimator for clients. Therapists also receive access to Alma’s caseload management system and directory to find new clients. The community is a members-only platform to share resources, referrals and support. It also has workshops with industry experts and continuing education courses to help with credentialing. 
- Fora Travel (a Forerunner portfolio company): Fora is a unified platform enabling anyone with a passion for travel to monetize that expertise as a modern travel agent. Unlike other travel agencies, Fora has a full-stack technology platform to make anything from collecting a credit card to publishing a blog post about the Riviera Maya as simple as a few clicks. Advisors receive training when they start and can participate in group trips with their peers to mix a little bit of discovery and fun at the same time. Instead of having to wait until payments are collected, advisors are promptly paid with one of the most favorable commission splits in the business, facilitated by the fact that Fora spends almost zero in end customer acquisition in a category known for massive marketing costs.
- Nana: Nana Appliance helps top appliance techs make more money by working for themselves. The platform qualifies jobs so that techs can focus on the work versus having to manage leads while being paid within 48 hours of the job. A unified technology platform enables techs to claim jobs, manage their schedule, and invoice customers from the palm of their hand. Master tech support can help on the trickiest jobs and the Nana community serves as a place to laugh about it later.

**Just as Forerunner partnered with some of the earliest digitally-native brands, now collectively valued over $30 billion, we’re actively investing in digitally-native franchises and believe the potential could be even larger.****What categories are a good fit for the Digital Franchise model?**While many businesses could be digital franchises, there are certain categories where the model will enhance the experience for both business owner and end customer. With the right market characteristics, we believe this model will have greater success rates, sticking power and platform leverage, all critical to building an enduring company. These characteristics can be divided into three primary categories:

- Specialized Human Craft*:* The ideal categories for digital franchises typically fall into the bucket where consumers think of them as “I got a person for X,” such as personal trainers, handymen or tax advisors. While the services themselves might be commonplace, the person delivering them builds loyalty through consistent delivery and the occasional unexpected moment of surprise & delight. This leads to strong word of mouth customer acquisition. Sometimes special training or certification is required, which helps the service provider stand out, but can be more difficult to scale.
- Standardized Digital Workflow: While the entrepreneur provides the face of the business, an underlying technology platform ensures the foundation is solid and operations run smoothly. In order for this to be true, the workflow across end franchisees needs to be standardized and measurable. These traits enable the entrepreneur to onboard and service more customers and spend less nights and weekends managing the operational overhead.
- Integrated Platform Advantage: On top of standardized workflow, there are opportunities to add category-specific platform advantages that add an extra edge. These can be defensive tools like centralized regulatory approvals or offensive ones like integrated alternative payment methods. Some categories lend themselves to centralized services where the franchisee can either benefit from avoiding certain customer challenges or taking advantage of offerings to make money while they sleep and add even more value to customers.

Note that the least attractive categories in regards to Individual Characteristics — ridesharing and food delivery — have also been the most successful with the gig work model. 

**What’s next for DNFs?**The introduction of Digitally-Native Brands, through companies like Bonobos, Glossier & Warby Parker, set a new standard. By disaggregating retailers and leveraging new technology platforms like Shopify, these brands were able to establish a direct relationship with their customers. On the heels of social media, and the advertising platforms that accompanied them, new customers were easier to have personalized relationships with than ever before. 

Digitally-Native Franchises have a similar opportunity for more service-first businesses. By fostering individual ownerships, DNFs play into the emerging trend to empower people to work for themselves. With the backdrop of AI advancements, digitally-native franchises can leverage a new tech stack ripe for automation, but with an increasingly human front end. And, just as online customer acquisition channels become more competitive and saturated, DNFs leverage something surprisingly old-school and capital-efficient: domain expertise and established trust within networks.

Just as Forerunner partnered with many of the earliest DNBs, now collectively valued over $30 billion, we’re actively investing in DNFs and believe the potential could be even larger. While the model is different, the need to understand the mindsets of your customers, both franchisees and their customers, remains critical. We’re actively looking to partner with founders and learn about others operating in this space. So please share thoughts and ideas because success here doesn’t just benefit those in the technology ecosystem, but the potentially millions of digitally-native franchisees looking for the purpose, community and financial empowerment inherent in the model.`,
  },
  {
    slug: "welcome-tally-health-our-investment-in-the-future-of-longevity",
    title: "Tally Health: Our Investment in the Future of Longevity",
    date: "April 6, 2023",
    year: 2023,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: "Investment Announcements",
    company: "Tally Health",
    excerpt: `One critical shift we’re tracking at Forerunner, which has gained sharp momentum in recent years, is how seemingly basic, core life fundamentals are becoming luxuries — and thus being reborn as...`,
    content: `One critical shift we’re tracking at Forerunner, which has gained sharp momentum in recent years, is how seemingly basic, [**core life fundamentals are becoming luxuries — and thus being reborn as aspirational consumer experiences**](https://www.forerunnerventures.com/our-perspectives/the-next-wave-of-game-changing-companies-will-be-life-changing-companies). Life fundamentals, like our health, community, security and wellbeing, have historically been seen as foundational and easily overlooked (especially when needs are met). But between recent societal upheavals like the pandemic, a looming recession, accelerated climate change, an overburdened healthcare system and a ballooning loneliness epidemic, core life fundamentals have become a lot more complicated and fragile — especially for an evermore diverse, individualist set of consumers where life paths are increasingly non-linear. This mounting instability has consumers looking to harken back to a more pure and even simple way of living that’s grounded in pragmatism. When you look for it, this is happening all around us: a night of deep sleep is now considered a badge of personal peak performance, a strong fitness routine is akin to status symbol, more traditional hobbies like gardening, cooking and thrifting are on the rise, and a rich, supportive community is a covetable asset. Perhaps no category is as emblematic of these shifts as personal health. It is a massive foundational category (nearly [**20% of the US’s GDP**](https://www.cms.gov/research-statistics-data-and-systems/statistics-trends-and-reports/nationalhealthexpenddata/nhe-fact-sheet#:~:text=NHE%20grew%202.7%25%20to%20%244.3,Gross%20Domestic%20Product%20(GDP).)) with skyrocketing consumer interest and a rapidly expanding scope of issues and priorities. But, it’s plagued by a reactive legacy system that’s ill-equipped to serve these growing demands. Recent Forerunner [**research**](https://thedinnerparty.forerunnerventures.com/) found that 54% of people say personal health is a main focus area in their lives — but many are grasping for how to make progress, with 41% saying they wish it was easier to achieve their health goals (more challenging than finances, work, school, and family & relationships). Between an acute provider shortage and dearth of proactive resources within the existing healthcare system, consumers are increasingly turning to new avenues for taking their personal health into their new hands. We’ve seen this trend brewing for years through our investments in [**OURA**](https://www.forerunnerventures.com/our-perspectives/the-worlds-next-great-digital-health-company-our-continued-investment-in-ura), which has redefined sleep as a key tenet of personal health and even a desirable fashion accessory, and [**Real**](https://www.forerunnerventures.com/our-perspectives/a-proactive-approach-to-mental-health), which is modernizing group therapy through self-education, community and positivity, and Hims&Hers, which rebranded historically stigmatized health products as essential parts of wellness. When the Forerunner team first learned of [**Tally Health**](http://tallyhealth.com/), we were immediately struck by the opportunity and how squarely it fits within tailwinds we’re seeing in consumer health and evolved consumer aspirations. Tally Health is charting a new frontier in longevity, spearheaded by a truly exceptional team: [**Dr. David Sinclair**](https://www.linkedin.com/in/davidsinclairphd/), a world-renowned researcher who has been studying longevity for over thirty years, [**Melanie Goldey**](https://www.linkedin.com/in/melanie-goldey/), a proven consumer and healthtech leader who was formerly COO of TMRW Life Sciences, and prior, the CFO of Refinery29, and [**Whitney Casey**](https://www.linkedin.com/in/whitneycasey/), an accomplished venture partner at L Catterton and former Founder/CEO of Finery (acquired by StitchFix). Together, they are bringing transformative science to market in a broadly accessible, consumer-first format, starting with a membership-based model for understanding (and improving) your biological age. The opportunity for impact is incredibly profound: aging is the primary risk factor for many of the common diseases and conditions that cause ~90% of deaths, including cancer, dementia and cardiovascular disease, and meanwhile, today’s healthcare system typically treats these manifestations of aging one by one, ‘whack-a-mole’ style instead of addressing the root cause first and foremost. This is a fundamental missed opportunity when you consider that **less than **[**10% of aging is determined by genetics, providing the opportunity to control the other 90% of how we age**](https://doi.org/10.1534/genetics.118.301613)**.**Tally’s signature product is a cheek swab test that estimates a consumer’s biological age — the age suggested by one’s physiological health rather than chronological years. This test was trained on an in-house dataset that includes over 8,000 people, spanning a chronological age range of 18-100 years, and representing the largest DNA methylation, adult cheek swab dataset ever generated. Using this data, Tally Health is building a holistic platform related to biological age, including a test delivered every 3 months to measure one’s health through a metric more indicative than years lived, personalized recommendations to help lower biological age through lifestyle adjustments, and a daily longevity supplement. 

Relative to the sheer progress we’ve seen in the startup ecosystem across women’s health, metabolic health and prescription care, longevity feels dramatically underserved, particularly in the context of its fundamental, universal importance. Everyone ages, and increasingly savvy, health-conscious generations are highly motivated to have more agency over the process — and ultimately live a more fulfilled life. 

At Forerunner, we think a lot about how the next wave of game-changing companies will be life-changing companies, as consumers navigate growing complexity within their core life foundations. We call this opportunity the traditional needs of an increasingly non-traditional society. Ta
lly Health is uniquely positioned to meet this new frontier for today’s — and tomorrow’s — generations. 

With Tally Health, we see a category-defining opportunity to partner with this team and open up access to these scientific breakthroughs that not just slow aging, but help reverse it.`,
  },
  {
    slug: "welcome-jump-a-new-approach-to-live-events-thats-a-win-win-win-for-fans",
    title: "Investing in Jump: A New Approach to Live Events That’s a Win-Win-Win for Fans, Teams, and Venues",
    date: "March 6, 2023",
    year: 2023,
    author: "Brian O'Malley",
    authorTitle: "Board Partner",
    category: "Investment Announcements",
    company: "Jump",
    excerpt: `This week, we shared that we’re welcoming Jump to the Forerunner portfolio and leading their $20M recent fundraise. Jump’s mission is inherently energizing. They are reshaping the fan experience by...`,
    content: `This week, we shared that we’re welcoming [**Jump**](https://jump.com/) to the Forerunner portfolio and leading their $20M recent [**fundraise**](http://bloomberg.com/news/articles/2023-03-01/a-rod-marc-lore-raise-funds-for-startup-to-take-on-ticketmaster). Jump’s mission is inherently energizing. They are reshaping the fan experience by creating a new category within the massive, widely-ridiculed ticketing industry to help fuel the magic of live events.At Forerunner, we see live events as an increasingly important part of consumers’ social fabric, as people crave community and seek out passions-aligned experiences for connection. But unfortunately, the experience surrounding these events is plagued with complicated purchasing processes and inflated prices. Archaic systems are frequently gamed by brokers & bots, sidelining true fans leaving them left out and frustrated.

In 2015, I led the Seed round for [**Gametime**](https://gametime.co/) in my prior investing role. The thesis was similar, but the approach was different. How can you leverage unsold and underutilized inventory to grant affordable, last minute access to people who want to be there in the middle of the action? While Gametime’s execution has been nothing short of impressive, becoming a scalable, profitable business as one of the largest secondary marketplaces, the company was always constrained operating within the existing, underlying infrastructure. The idea of circumventing the legacy ticketing systems seemed impossible.This unfortunate dynamic led me to want to write off the ticketing industry, despite its size ([**around $50B**](https://www.grandviewresearch.com/industry-analysis/online-event-ticketing-market)) and prevailing negative sentiment (the standard NPS hovers around negative 58). It wasn’t until we reconnected with a former Forerunner founder, [**Jordy Leiser**](https://www.linkedin.com/in/jordanleiser/), that I thought again about this market — and most of those thoughts were designed to try and talk him out of pursuing it!But, Jordy ended up convincing me otherwise. The Live Events industry had changed. As seen with the Taylor Swift ticket debacle, people are starting to [**pay attention**](https://www.washingtonpost.com/opinions/2023/01/26/ticketmaster-taylor-swift-senate-worst-monopoly/) to the underlying consumer friction. There is also greater [**competition**](https://www.esquire.com/sports/a43098257/fix-major-league-baseball-mlb/) for fan attention, so ownership groups are starting to be more creative about driving attendance. With the right people around the table, it feels like we’re at a uniquely opportune time to finally impact in an industry that’s been severely overdue for change.Jordy understood the importance of early case studies in order to validate his thesis. He teamed up with fellow Forerunner alum, [**Marc Lore**](https://www.linkedin.com/in/marclore/), who had been a longtime friend & mentor to him. Marc, and his business partner [**Alex Rodriguez**](https://www.linkedin.com/in/alex-rodriguez-b4161815a/), are not just historic leaders in their own industries — they are owners of the Minnesota Timberwolves. They represent a broader trend in ownership groups becoming both younger and more tech-savvy. Through his time building Diapers.com, Jet and now Wonder, Marc has reshaped categories through the flexibility of dynamic pricing, flexible inventory and creative bundling. These tools are available across all facets of online commerce, but have not been implemented in the sports business in a meaningful way.Now, Jump is injecting fresh energy into the fan experience by introducing real-time dynamic ticketing, which includes novel approaches to pricing, packaging, and promoting tickets — something that’s been impossible to do with legacy systems. To start, the platform will enable consumers to buy access to seats that free up when people leave midway through a game, so they can snag an incredible last-quarter view and bring teams and fans closer together (literally and figuratively). Fans that are already at the game get alerts when better seats become available, and pricing moves based on the demand in a reverse auction format. With more flexible and unique approaches to the fan experience on the way, Jump is reducing friction between teams and their fans and delighting consumers at every turn.

Building in the live event and ticketing industry isn’t for the faint of heart. The path ahead for the Jump is highly ambitious, and it’s one that’s only fit for leaders as accomplished and bold as Jump’s Co-founders. Without them leading the charge, it would have been near-impossible to invest in this category, but we’re thrilled to partner with them on their clear mission: fueling the magic of the live event experience.`,
  },
  {
    slug: "the-next-wave-of-game-changing-companies-will-be-life-changing-companies",
    title: "The Next Wave of Game-Changing Companies Will be Life-Changing Companies",
    date: "February 2, 2023",
    year: 2023,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: "Theses",
    company: "Sika Health, Pie, Hims and Hers, Headway, Duos, Speechify",
    excerpt: `Forerunner is dedicating $250 million to addressing the traditional needs of a non-traditional society You don’t have to look very far to see that humanity is in a precarious place. The last few...`,
    content: `**Forerunner is dedicating $250 million to addressing the traditional needs of a non-traditional society **You don’t have to look very far to see that humanity is in a precarious place. The last few years brought a tsunami of change that heightened new and longstanding adversities — deep flaws exposed within our healthcare system, accelerated social and political polarization, climate change that’s evolved into an ever-present threat, and now soaring inflation and a looming recession. Peering underneath the surface of these socioeconomic shifts, you find consumers who feel alone, inadequate, neglected by the institutions historically responsible for society’s well-being, and like there is too much stacked against them to reach a contented life. The mental health statistics are [**chilling**](https://www.nytimes.com/2022/10/27/opinion/global-sadness-rising.html). The amount of alone time spent per person has reached [**historic highs**](https://www.washingtonpost.com/opinions/2022/11/23/americans-alone-thanksgiving-friends/), with loneliness ballooning into an [**epidemic**](https://www.publichealth.columbia.edu/public-health-now/news/researchers-call-national-public-health-effort-prevent-loneliness). Financial security feels like an ever-moving and [**unattainable target**](https://fortune.com/2022/09/13/inflation-eating-americas-middle-class-financial-health/) for most, and especially a shrinking middle class. The caregiving crisis is keeping a massive, majority-women population [**out of the workforce**](https://www.cbsnews.com/news/covid-crisis-3-million-women-labor-force/) and in a prolonged [**state of financial strain**](https://www.aarp.org/caregiving/financial-legal/info-2021/high-out-of-pocket-costs.html). And millennial and Gen Z populations are [**seriously rethinking**](http://pewresearch.org/science/2021/05/26/gen-z-millennials-stand-out-for-climate-change-activism-social-media-engagement-with-issue/) their lifestyles and [**whether to start families**](https://link.springer.com/article/10.1007/s10584-020-02923-y) out of concern for the future state of the environment. Overall, people everywhere [**don’t feel optimistic**](https://thedinnerparty.forerunnerventures.com/) about the future. These are massive societal problems, and they are not (*yet*) turning corners, they are getting worse.At Forerunner, we’ve dedicated ourselves to investing in those championing change for consumers, which has led us to back defining companies like Chime, Glossier, Hims&Hers, OURA, Faire, and more. To invest with the consumer mindset is to deeply understand the needs of humanity — and in our decades of investing, we at Forerunner have never seen a time when the needs were so clear, so severe, and so fundamental. 

As an industry, investors and builders spend so much time thinking about what new fringe behavior might move mainstream and what new technology is poised to reshape society.** But in this tireless search for “what’s next” — I believe we’re missing the most immediate, important billions-dollar opportunities hiding in plain sight: core life fundamentals for an increasingly complicated world. **Life fundamentals, like our health, financial security, environmental safety, community and wellbeing, might be seemingly obvious and even mundane, but that’s just the point — in today’s world, they are increasingly scarce and unreliable. Life fundamentals are luxuries. Today, Forerunner is announcing our $250 million commitment to addressing the core needs of today’s consumer by helping reimagine and rebuild the life foundations for our increasingly complex world. Because however more complex and dynamic humanity becomes, the consumer’s needs are still remarkably traditional — perhaps especially so amidst mounting complexity. In the coming years, we expect to see a refreshed, sharper focus on the core life fundamentals that help people harken back to a more pure, simpler way of living — even if the avenues with which consumers pursue these more traditional values are new. And that’s where we think we can help make a difference: accelerating ideas for addressing the traditional needs of increasingly non-traditional consumers.

In consumers’ pursuit of the more fundamental elements of life, we are seeing two very important opportunities and shifts: the first is foundational, and the second is emotional.

**Traditional needs for non-traditional consumers:**Consumers have become incredibly diverse and dynamic in comparison to decades past — from our identities, beliefs, areas of passion and social investments, fields of work, and definitions of success — but our needs have proven to be much more impervious to change, and are still quite traditional. Regardless of whether you’re a solo entrepreneur, highly spiritual suburban dweller, career-driven mom, or Gen Z college grad trying to build a career and social life amid remote work — everyone needs purpose, direction, growth, and wellbeing. 

And as humanity becomes more and more complex and diverse, our paths for fulfilling core life needs become less and less obvious and reliable. Many of the longstanding institutions responsible for core life needs were designed for a more monolithic culture — particularly healthcare, government, education, the financial system, and community centers — and are not equipped to serve the ballooning scope of issues and priorities that now fall into these domains. 

As we look forward to rebuilding foundational needs for today, there are a few primary categories that are piping with unmet demand and opportunity for more profound alignment with modern consumers.

As we consider the future of these life fundamentals, we are asking ourselves and entrepreneurs — what does financial security look like amid widening wealth gaps and a shrinking middle class? What does family planning look like for LGBTQ+ couples when the prevailing system is heteronormative, and for women everywhere who are stretched too thin and delaying parenting until much later in life? What infrastructure is needed to support a burgeoning class of small business owners, creators, and freelancers — who are increasingly monetizing their talents for supplementary income or full-time work? How do we forge values-aligned communities to help restore some of the purpose and belonging that was once centralized around the church? How do we make sustainability more accessible to businesses and consumers vs. it feeling like a pressure to shoulder the higher costs? And with an overburdened and understaffed healthcare system that’s designed to be reactive, how do we provide consumers with the right resources to take personal health into their own hands and optimize their well-being?

These are issues underpinning some of the most profound consumer shifts of today and tomorrow, and where we see the most powerful opportunities for entrepreneurship.

**When life fundamentals are luxuries, nostalgia is everywhere**The second shift we’re tracking with high interest is more emotional: a romanticizing of the simpler, more grounded way of life — a throw back to past decades, even from a younger set of consumers that haven’t necessarily lived these experiences. Gen Z is [**chronicling the return to in-office work**](https://www.nytimes.com/2022/11/27/business/tiktok-office-influencers.html) as though it’s a kind of exotic, spiritual passage. Twenty- and thirty-something year olds are [**flocking to get AARP cards**](https://www.wsj.com/articles/aarp-card-members-inlation-budget-20-somethings-11666791911), traditionally a resource for those nearing retirement, to start scoring savings — a trend popularized by TikTok. (Did you know you can get AARP cards before you turn 50? We did not.) [**Flip phones**](https://www.cnn.com/2023/01/15/business/flip-phone-gen-z-ctrp/index.html) and [**classical music**](https://www.bbc.com/culture/article/20230113-gen-z-and-young-millennials-surprising-obsession) are making comebacks — specifically with Gen Z. And there’s been an explosion of interest in DIY activities — from woodworking, knitting, dyeing one’s own hair, cooking, home improvement projects, puzzles, and thrifting. Forerunner ran research this month on over 1,000 people across the US and found that 75% identify as nostalgic. Interestingly, this statistic didn't meaningfully change when looking at younger demographics who'd presumably be less likely to feel this way — our research showed that 72% of respondents under 30 years old identify as nostalgic.After years of social media-fueled exuberance, people are increasingly looking to invigorate the more traditional, analog parts of life.

**Adjacent to this nostalgia, the modern definition of wealth and success seems to be evolving from consumerism-driven abundance to true contentment.** A night of deep long sleep is now considered a badge of personal peak performance. Longevity and personal health are status symbols, amongst some of the most covetable assets. A strong, supportive community is the holy grail. Growing sentiments of nostalgia and an infatuation with a more pure, pragmatic lifestyle are being born out of the fragility of core life needs. Because when life fundamentals are luxuries, strong foundations are their own unique symbols of wealth. **The opportunity for entrepreneurship lies in redistributing these new scarcities to all.**As investors, we believe there has never been a more complex and fascinating time to focus on the consumer. The past decade has been dominated by digital proliferation and envy-driven consumerism, which seems to have left consumers feeling a bit guilty – and even sour. **Businesses feverishly built products vying for our attention and wallets, but all the while, society’s underlying foundations grew increasingly brittle. It’s like we were building a city on top of a fault, and the cracks are now starting to split.** Looking ahead, we see massive opportunities in building for the traditional needs of non-traditional consumers, so society can have stronger, more reliable paths for purpose, direction, growth and wellbeing. At Forerunner, we believe the next wave of game-changing companies will be life-changing companies. If you're a builder who shares this view and aims to improve lives for many we want to hear from you: [**investments@forerunnerventures.com**](mailto:investments@forerunnerventures.com).`,
  },
  {
    slug: "going-back-to-go-forward-foundational-needs-take-center-stage",
    title: "Going Back to Go Forward: Foundational Needs Take Center Stage",
    date: "December 13, 2022",
    year: 2022,
    author: "Forerunner Ventures",
    authorTitle: "",
    category: null,
    company: null,
    excerpt: `Today, Forerunner is unveiling comprehensive psychographic research that we’ve been developing since Summer 2022, illuminating who consumers are today and how our behaviors and preferences are...`,
    content: `Today, Forerunner is unveiling comprehensive psychographic research that we’ve been developing since Summer 2022, illuminating who consumers are today and how our behaviors and preferences are changing — and in conjunction, we’re providing an early look at our new collaborative primary research platform, [**The Dinner Party**](https://thedinnerparty.forerunnerventures.com/). At a point in history marked by broad economic uncertainty and increasingly complex, discerning consumers, research on human behavior and modern culture is all the more essential. This is true for us as investors, for startups of all industries, business models and stages, and for consumers who are searching for ways to make better sense of the world around us. We’re now ready to share what we found and welcome everyone to [**The Dinner Party**](https://thedinnerparty.forerunnerventures.com/), which is currently in public beta.Looking back a decade ago when we started Forerunner, we were captivated by the breakneck pace of change in human behavior and modern culture that was spurred by (what was, at the time) a novel boom in hyper connectivity via social media and mobile technology. We asked, how will these new pathways and frameworks shape the consumer mindset, redefine commerce, and push companies to set new standards for operating in this paradigm? These forces underpinned our early investments in hundreds of companies, many of which have scaled to becoming market-defining businesses in their sectors — Chime, Faire, Hims&Hers, Oura, Glossier, Narvar, Prose, Ritual, The Farmer’s Dog, and more.

The consumer shifts that Forerunner oriented around felt uniquely monumental at the time, but as we step back and look at the consumer again today, we feel a similar inflection point where humanity is in the midst of irreversible change. Rarely have we seen a time marked by so much transition, at such scale, across nearly every dimension of life. The global pandemic shut down schools and offices, highlighting deep flaws in many of our established institutions. The healthcare crisis laid bare untenable realities about social inequities. Social and political unrest spilled into the streets and onto our phones, permeating our consciousness. Climate change accelerated into an ever-present danger. And now, with a looming recession and soaring inflation, we are all forced to think hard about our needs amid mounting uncertainty and adversities. We are due for a re-examination of the Consumer: who we are today, and what behaviors and priorities may lay the foundation for the next decade of change. 

**The Dinner Party**We set out to conduct a comprehensive research effort, analyzing the psychology, behaviors, identities and consumption patterns of people across the US. To approach this with utmost objectivity and integrity in research design, we engaged Bain & Company’s Consumer Insights and Segmentation team to execute our survey of over 4,300 respondents ages 18+ across the US. We asked over 100 questions supplemented by qualitative interviews of randomly selected consumers of diverse viewpoints and experiences, leveraging statistical clustering and hundreds of iterations of analysis to derive our final consumer archetypes.

Our research ultimately illuminated eight psychographic archetypes that represent the most statistically significant profiles of people in the US today. We’re ready to not just share what we learned, but pull back the curtains on our early efforts to expand this archetype framework through a new collaborative research platform, The Dinner Party. Today, anyone can [**take the quiz**](https://thedinnerparty.forerunnerventures.com/)** **to find out which archetype they are, learn about their behavioral traits and affinities, and join a growing community that will help uncover ongoing consumer insights and opportunities through research and dialogue.**What We Learned**As we dove into the nuances of the eight archetypes, one clear theme was resonant across all: **people are struggling – we are craving purpose, direction, and resilience**. Consumers are grasping for community and belonging as the volume of alone time they [**spend**](https://www.washingtonpost.com/opinions/2022/11/23/americans-alone-thanksgiving-friends/) has steadily increased for years (even pre-COVID) across all demographics. People feel like they’re climbing a mountain when it comes to managing their health and wellness, which has exploded as a consumer category with compounding interest but too few support pathways for achieving sustainable improvement. And people feel kneecapped by the mounting financial burdens of today, with low levels of confidence in managing money amid soaring costs and economic uncertainty. This has all led to tremendous distrust from consumers toward the traditional institutions historically responsible for servicing the fundamental needs of society. The past decade has been dominated by digital proliferation and hyper consumerism that unbound our lives, but in the process, it seems society is losing its way. Businesses have been feverishly building products vying for consumers’ attention and wallets, but all the while, society’s underlying foundations have grown increasingly fragile — and now are starting to crack. 

Against this backdrop, our research shows that the “new” aspirational consumer lifestyle is starting to look remarkably…traditional. People are craving a return to the basics and desperate for some of the most primary core life needs. Life fundamentals are increasingly seen as “luxuries” in the sense that, despite seemingly fundamental, they’re increasingly scarce and unreliable: financial stability, health, security, purpose and community. It is very telling that over half of the respondents in our research, in one way or another, are looking to get back to the fundamentals — living day by day, thinking through priorities, needs and next steps. 

Now, as consumers look to stitch things back together and harken back to a simpler form of life, they are exploring non-traditional avenues. For example, as organized religion [**fades**](https://news.gallup.com/poll/341963/church-membership-falls-below-majority-first-time.aspx), people are searching for community, belonging and belief — see: the boom in tarot cards, astrology, “cult” brands, Discord threads, music festivals, and more. People are even looking to the companies where they work for political and values-aligned leadership (and the right boundaries for this are still very much an open question). And amid a growing medical provider [**shortage**](https://www.ama-assn.org/practice-management/physician-health/medicine-s-great-resignation-1-5-doctors-plan-exit-2-years#:~:text=Tanya%20Albert%20Henry&text=One%20in%20five%20physicians%20say,to%20recently%20published%20survey%20research.) that’s ballooned wait times from weeks to months, people are trying to take their health into their own hands, leading to compounding growth in health trackers, rampant health-related subreddits, supplements, self-care routines, and more. Finally, there is a profound interest from consumers in DIY vs. paying to outsource. This may stem from the pandemic where DIY activities of all forms (ex: building standing desks, cooking, dying one’s own hair) experienced a renaissance. And presumably, a looming recession and rising inflation will continue to drive people away from superfluous consumerism and compromising on cost for convenience. **Looking Ahead**Consumer sentiments can often be summed by levels of optimism. When we asked respondents about the future of their kids, only 41% are optimistic, mirroring a recent [**Gallup research**](https://news.gallup.com/poll/403760/americans-less-optimistic-next-generation-future.aspx) that found that only 42% of US adults think that today's youth "will have a better living standard, homes and education." This marks an 18% drop in two years and a statistically-tied low with 2011. Perhaps even more concerning, when taking a further step back and considering the future of the world — only 27% are optimistic. As consumer inspired investors, we believe there has never been a more complex and fascinating time. There is a massive opportunity in building for core life needs, as the historical structures and organizations responsible for these domains have come up short. Many of consumers’ problems are also new, yet to be fully identified, let alone solved for. Research can help illuminate the opportunities where we can build new paths for purpose, direction and resilience. 

**The next wave of game-changing companies will be life-changing companies.**`,
  },
  {
    slug: "the-new-playbook-for-b2b-e-commerce-our-investment-in-balance",
    title: "The New Playbook for B2B E-Commerce; Our Investment in Balance",
    date: "July 26, 2022",
    year: 2022,
    author: "Kirsten Green & Jason Bornstein",
    authorTitle: "Founder, Partner & Partner, Head of Research",
    category: "Investment Announcements",
    company: null,
    excerpt: `At Forerunner, we obsess about the purchase journey for the consumer–but sometimes, the consumer isn’t a person. It’s a business. And while B2C e-commerce has meaningfully evolved over the last...`,
    content: `At Forerunner, we obsess about the purchase journey for the consumer–but sometimes, the consumer isn’t a person. It’s a business. And while B2C e-commerce has meaningfully evolved over the last decade, B2B e-commerce has yet to be modernized to the same degree. 

Across lumber, steel, chemicals, diamonds, food, and beyond, the next decade holds game-changing potential to enable and unlock more B2B transactions online. But B2B commerce is uniquely different from B2C. It is driven by personal relationships, underpinned by rational business-related buying behaviors, characterized by larger transaction sizes with negotiated volume discounts, and executed with slow ACH payments, risky net terms, and costly invoice factoring. The pandemic challenged businesses to adapt and accelerate digital transformation – they are now more eager than ever for modern tools to digitize systems, mitigate risk and cost, and unlock upside. 

More digital marketplaces, distributors/wholesalers, and manufacturers are emerging across industries with vertical and horizontal B2B e-commerce offerings. In addition to the potential for those B2B e-commerce platforms to bring their respective industries online, the commerce enablement needs of those platforms are typically different from B2C and will require a new tech stack and playbook powered by new companies. While B2B commerce companies *can* partner with a leading B2C solution for B2B e-commerce, those companies most often have limitations on their ability to offer the range of payment methods, terms, and financing that the B2B ecosystem expects. The B2B opportunity is at the largest of scales. The [**global B2B e-commerce market is estimated to reach $25T by 2028**](https://www.yahoo.com/now/global-b2b-e-commerce-market-171800339.html), which would put B2B e-commerce at* three times* the size of B2C e-commerce with an expectation to grow *twice* as fast. Today, we are in the earlier innings of B2B e-commerce and we believe the tech stack will evolve and mature over the coming decade to be as robust as the B2C playbook for how to start and grow a business online – think Stripe, Shopify, and Klaviyo. From our early investment in Faire five years ago to more recent investments in Canal, Pavilion, and Buffalo Market, Forerunner has long believed in the potential here and from partnering with these founders we identified a critical opportunity that can shape the B2B e-commerce landscape in the years to come.Enter our latest Series B investment in [**Balance**](https://www.getbalance.com/), an all-in-one B2B payments platform for digital marketplaces, wholesalers, and manufacturers.The breadth and depth of Balance’s products and services stands out in the market. Balance offers a modern checkout experience with preferred B2B payment methods; 30/60/90-day net terms with digitized and seamless underwriting; instant payouts, where companies can receive full payment upfront less a financing fee; a reconciliation program to manage and settle AR digitally, as well as KYC and anti-money laundering services. Today, Balance is live with dozens of clients, including [**Bryzos**](https://www.bryzos.com/), [**Fabric**](https://fabric.inc/), and [**Choco. W**](https://choco.com/us/)ith the offering, these B2B companies can focus on their core competency of bringing buyers and sellers online, while Balance provides a top-notch digital payment experience, unlocks top of the funnel through sophisticated financial underwriting, and takes on the responsibility and risk of payments.The company was co-founded by [**Bar Geron**](https://www.linkedin.com/in/bar-geron/) and [**Yoni Shuster**](https://www.linkedin.com/in/yoni-shuster/), a team based in Israel who met while working on risk at PayPal risk team. With rich experience working together–both at PayPal, and on another startup–we were impressed to see the energy forming around this global team (attracting talent from Bread, Paypal, Flexport, and American Express) with offices in Israel and New York.The problem that Balance is solving could not be more timely. [**93% of CFOs said they are currently digitizing their accounting operations**](https://www.pymnts.com/news/b2b-payments/2022/25-percent-b2b-payments-are-made-by-check/#:~:text=More%20than%20half%20of%20CFOs,%2Dtime%20payments%20(52%25).), with priorities that include invoicing customers and vendors (61%), payment processing (51%) and tracking payments that are both received and due (48%). In 2021, there were[** 5.3B B2B ACH payments, valued at $50T and up 20% from 2020–all accelerated by Covid-19**](https://www.nacha.org/news/ach-network-sees-291-billion-payments-2021-led-major-gains-b2b-and-same-day-ach). On top of this, supply chains continue to be strained and costs are going up. The more efficient B2B commerce can become by moving online, the lower the cost of living for people everywhere. B2B e-commerce companies deserve better tools to transact. We believe Balance will help power a radical (and necessary) shift toward digitization for the next generation of B2B e-commerce. We’re thrilled to partner with Bar, Yoni and the Balance team as they build this brilliant, long-overdue solution.`,
  },
  {
    slug: "consumers-want-resale-but-the-business-model-needs-refining",
    title: "Consumers Want Resale—But the Business Model Needs Refining",
    date: "May 23, 2022",
    year: 2022,
    author: "Jason Bornstein",
    authorTitle: "Partner, Head of Research",
    category: null,
    company: null,
    excerpt: `I’ve become an occasional buyer and seller of secondhand goods online, and I find myself craving more. To date, my journey has had as many magic moments as frustrating experiences. Selling furniture...`,
    content: `I’ve become an occasional buyer and seller of secondhand goods online, and I find myself craving more. To date, my journey has had as many magic moments as frustrating experiences. Selling furniture on Craigslist in New York took hours (to my surprise), while selling furniture on Facebo
ok Marketplace in the Bay Area took weeks (to my demise). The nightstands I bought resale took weeks to find. I sold a belt that sat on a marketplace for several months, listed close to the MSRP, and only sold after being put on sale without my knowledge. I got lucky with selling my cars. I used both for nearly a year, sold them close to what I paid for them, and received the money in 48 hours–I just wish I would have known how valuable they were before I went deep on finding storage options.

Key stakeholders are similarly captivated: [**Resale**](https://www.voguebusiness.com/sustainability/resale-sustainability-whats-real-and-whats-false) has been [**all over**](https://www.businessoffashion.com/articles/retail/why-brands-are-racing-into-resale-in-five-charts/) the [**news**](https://www.wsj.com/articles/reselling-furniture-expert-tips-11643987380) lately. Just this week, ThredUp released [**a report**](https://www.thredup.com/resale/#size-and-impact) highlighting the energy and traction in the space. In the past year, brands and retailers of all sizes have launched or expanded their re-commerce capabilities–[**Target**](https://www.cnbc.com/2022/04/08/target-tiptoes-back-into-resale-with-new-thredup-deal.html), [**Apple**](https://fortune.com/2022/03/25/apple-iphone-lease-subscription-plan-bundle/), [**Joybird**](https://www.forbes.com/sites/pamdanziger/2022/05/19/floorfound-offers-retailers-an-easy-on-ramp-to-the-circular-furniture-market/?sh=69146ac24fc5), [**Lululemon**](https://www.today.com/shop/lululemon-new-t253265), [**REI**](https://www.modernretail.co/retailers/a-really-powerful-tool-reis-circular-commerce-director-on-how-resale-and-rental-aid-in-customer-acquistion/), [**Nike**](https://www.retaildive.com/news/floyd-enters-the-resale-market/599123/), [**Dick’s**](https://www.retaildive.com/news/dicks-launches-resale-program-for-outdoor-gear/622870/), [**IKEA**](https://www.ikea.com/us/en/newsroom/corporate-news/ikea-us-helps-customers-prolong-the-life-of-their-furniture-with-launch-of-buy-back-and-resell-service-puba9b1f107), and [**Farfetch**](https://www.voguebusiness.com/companies/farfetch-bets-big-on-resale-with-luxclusif-purchase), to name a few. At Forerunner, we’re challenging ourselves to think about what a next-gen, durable business model for resale might look like.While apparel gets most of the airtime, there’s so much more to the broader resale opportunity. Over the past decade, online resale has become a mainstream economy. In a recent Forerunner survey, **61% of consumers reported purchasing resale online in the past 12 months**–a level of buying that was consistent across age, gender, race/ethnicity, income, and geography. The online resale purchases were also spread out across categories, including electronics (30% purchased online), cars/transportation (29%), apparel/accessories (25%), sports/activity equipment (22%), furniture (20%), and collectibles/memorabilia (16%).The first cycle of online resale–horizontal P2P platforms like eBay, Craigslist–has matured into today’s vibrant second-cycle ecosystem of largely-managed and mostly-vertical marketplaces. Many of these are now public companies, including The RealReal, Poshmark, ThredUp, Carvana, Vroom, 1stdibs, GOAT, and StockX. Whereas the aim of first-cycle platforms was to connect buyers and sellers online for the first time, the aim of second-cycle marketplaces was to build trust and better consumer experiences to pull more buyers into the market. As buyers began purchasing across categories, new consumer behaviors emerged and solidified.

**Resale Reimagined–But Not Refined**Consumers have become savvier and more compelled by resale as a way to access one-of-a-kind items, purchase higher-quality goods at lower price points, or stay environmentally-conscious. In our survey, we discovered: 

- **91% of respondents plan to purchase the same or more resale **than they have in the past 12 months. 
- **68% of consumers reported thinking about the resale value of goods **when purchasing new items.
- **Consumers are most likely to build trust in online resale from seller reviews (37%) and buyer protection guarantees (37%) **rather than the high-quality photos (29%) and authentication (25%) that managed marketplaces popularized.

Buying behaviors also paved a path for buyers to become sellers, as well as for the emergence of “power sellers.” Sixty-two percent of consumers that have purchased resale online in the past 12 months also report selling resale online. Of the sellers that engage in the behavior monthly, 60% plan to sell more in the year ahead, 71% think of reselling as a side hustle, and–important to note–**93% would be interested in selling more if they had better tools to do so.**The pull in the market from consumers is clear: They want to buy (and sell) more resale. However, despite meaningful investment into managed and vertical platforms over the past decade–The RealReal, Carvana, Back Market, 1stDibs, etc.–**59% of consumers report preferring to buy on P2P platforms and 67% report preferring to sell on P2P platforms.** Unsurprisingly, with this preference in mind, Forerunner’s survey showed that legacy P2P platforms continue to own consumer mindshare: Amazon, eBay, Facebook, Walmart, and Craigslist remain the most popular platforms for buying and selling.Managed and vertical marketplaces may not be the answer to the pain points of P2P platforms. Many have invested in costly service offerings that do not match the majority of current consumer preferences. They have proven to be operationally-intensive, with high COGs needed to deliver a high-touch service and high marketing spend needed to drive demand. Poshmark, ThredUp, The RealReal, and Vroom, for example, are all projected to have over $400M in revenue while losing tens of millions of dollars of EBITDA in 2023.

**A 'Third Cycle' of Resale?**At Forerunner, we believe the resale trend is promising and there will be continued advancement in the category that could propel a third-cycle of resale. We have yet to see a convincing business model that supports sustainable growth while meeting consumer expectations, but we remain open-minded about how the category will evolve. 

Can resale be a standalone business–or is it a better add-on business, similar to how Facebook, Amazon, and Walmart leveraged a broad consumer reach to launch a complementary resale offering? What will lower the barrier-to-entry for the next cohort of sellers? Can a category-specific P2P platform reach a venture-backable scale? How can you empower consumers to better understand the value of their goods? What software can sellers use to automate the manual tasks that managed marketplaces have centralized? Can sellers be elevated to build direct relationships with consumers, lessening the need to drive demand through paid marketing? These questions are top of mind at Forerunner.

Companies like [**Archive**](https://www.archiveresale.co/) and [**Recurate**](https://recurate.com/) are powering P2P resale on a brand’s website – 45% of survey respondents expressed interest in this. Companies like [**AirRobe**](https://airrobe.com/), [**Gently**](https://www.gently.com/), and [**Beni**](https://www.joinbeni.com/) help consumers navigate the market and understand the resale value of their goods; 43% of respondents expressed interest in offerings like this. [**Upgraded**](https://upgraded.io/) and [**Tradeblock**](https://www.tradeblock.us/), which are pioneering rental and trade models, are abstracting the conversation away from price and back to the old world bartering days; 44% of our respondents expressed interest in trading goods.We’re continuing to learn and seek fresh approaches across the resale ecosystem, and given consumer behavior and interest in the category, no doubt more new business models will emerge that we are eager to explore.`,
  },
  {
    slug: "democratizing-access-to-real-estate-introducing-arrived",
    title: "Democratizing Access to Real Estate; Introducing Arrived",
    date: "May 18, 2022",
    year: 2022,
    author: "Brian O'Malley",
    authorTitle: "Board Partner",
    category: "Investment Announcements",
    company: "Arrived",
    excerpt: `Real estate investments provide a unique mix of benefits – especially when the markets are as volatile as they’ve been so far this year. Investors get steady cash flows, long-term appreciation,...`,
    content: `Real estate investments provide a unique mix of benefits – especially when the markets are as volatile as they’ve been so far this year. Investors get steady cash flows, long-term appreciation, generous tax advantages, effective diversification, and inflation resistance. In a survey Forerunner conducted last year, over 42% of respondents aged 30+ desired to own real estate. 

However, the asset class remains inaccessible to most Americans. Unlike stocks where you can buy fractions of a company and trade out whenever you see fit, real estate investors need to purchase entire properties–plus factor in the time to find tenants and learn the patience to manage them! Because of this, only 7% of Americans own real estate investments while 55% participate in the stock market. 

Arrived is democratizing access to real estate by allowing anyone to purchase shares of properties with built-in dividends and seamless property management. Arrived’s platform allows anyone to identify, assess, execute, and manage fractional investments in high-quality rental homes, regardless of their net worth or prior experience. On the company’s platform, consumers can browse pre-vetted single-family rental (SFR) investment opportunities, buy fractional shares in them, and earn rental income and appreciation – all without having to worry about contracts, mortgage lenders, brokers, tenants, property managers, and other headaches associated with conventional ownership. 

The process of making this simple to the consumer requires a lot of work behind the scenes across property management, financing, property selection, and customer service. We’re thrilled to work with this cross-disciplinary founding team. CEO [**Ryan Frazier**](https://www.linkedin.com/in/ryfraz/) and CTO [**Kenny Cason**](https://www.linkedin.com/in/kennycason/) previously built and sold a YC-backed Datarank. They’re joined by COO [**Alejandro Chouza**](https://www.linkedin.com/in/alejandrochouza/), who has deep expertise in bringing tech platforms into new markets as a GM at Uber. Arrived has worked with the SEC for over a year to reduce qualification time for new properties from nine months to just seven days. This is critical because, unlike IPOs of stocks that can take years to bring to market, the best properties sell in a matter of days.By making real estate investing fast, familiar, simple, and accessible for the first time, the company is building a new category for consumer investing and unlocking a previously unavailable avenue for financial independence. Leveraging these competitive advantages, Arrived eyes an opportunity to become the preeminent platform for all forms of real estate ownership and engagement. There is no end to the investment opportunities they can offer, including short-term rentals, multifamily properties, apartment buildings, international opportunities, second homes, tenant equity incentives, and unique derivative investment products over time.

Forerunner is proud to lead Arrived Homes’ $25 Series A alongside returning investors [**Core Innovation Capital**](http://corevc.com/), [**PSL Ventures**](https://www.psl.com/), [**Good Friends**](https://www.goodfriends.com/) and [**Neo**](https://neo.com/). We’re appreciative of the operational experience around the table as well with an exceptional set of angels, including Jeff Bezos, Marc Benioff, and Dara Khosrowshahi, Spencer Rascoff and the founding teams of Warby Parker, Harry’s, and Allbirds.As inflation goes through the roof, the stock market takes a hit, the crypto market is even scarier, and debt portfolios pay almost zero, consumers deserve access to the steady appreciation and consistent cash flow provided by real estate ownership. Ownership is the most tried-and-true path to wealth, and there is no more storied part of the American dream than owning a piece of property. The goal is not to guarantee returns, but to create a marketplace where individual investors can pick the right investments for their preferences and needs. We’re thrilled to join this special team as they bring their mission to a new class of investors.`,
  },
  {
    slug: "faires-max-rhodes-has-the-heart-and-drive-of-a-small-business-owner",
    title: "Faire’s Max Rhodes Has the Heart (and Drive) of a Small Business Owner",
    date: "April 20, 2022",
    year: 2022,
    author: "Forerunner Ventures",
    authorTitle: "",
    category: "Investment Announcements",
    company: "Faire",
    excerpt: `Max Rhodes, Co-Founder and CEO of Faire, had a tough time adjusting when he jumped from public school in Oklahoma to Yale University in 2005. After years of checking every box on the path to textbook...`,
    content: `Max Rhodes, Co-Founder and CEO of Faire, had a tough time adjusting when he jumped from public school in Oklahoma to Yale University in 2005. After years of checking every box on the path to textbook achievement, he quickly learned that the flawless academic record required to apply to top-tier law schools didn’t leave much room for real-world experiences or entrepreneurship.

But he was a natural problem-solver with a personality that wasn’t tailored to just fill a role. In stepping outside of the well-worn path of Ivy League achievers before him, he was able to uncover a passion for business-building. Being an entrepreneur involved a different set of skills, which he innately owned.

Rhodes launched two businesses during college. The first involved tutoring public school students to prepare them for competitive universities–inspired by his own experiences moving from high school to college. Rhodes loved that work, though it was a hard business to scale.

His second foray into entrepreneurship was through College Pro Painters, a student painting business that he operated in southern Connecticut during the summertimes. He became the best rookie franchisee in the country, and enamored with being an entrepreneur–which was the best mix of working with a variety of people, being your own boss, and finding new ways to solve problems. For instance, he identified Census Bureau statistics detailing household incomes by zip code, targeting his painting services toward the higher-income neighborhoods where he could earn higher rates. 

In scaling his painting business, he solidified his passion for being an operator. “In entrepreneurship, it felt like I had found my calling,” he says. “I realized what I wanted to do outside of just achieving. I actually consider myself lucky that I didn’t achieve as much in my first two years of college, because it forced me to find my own path.” 

##### Uncovering the Idea for Faire

Rhodes dreamt of launching a startup by the age of 20, but would spend the next decade on the path to the right idea. He eventually took a job at Bain & Company after graduating from Yale. During his tenure there, he introduced a product called the Blunt Umbrella to the U.S. market. He started attending trade shows after work–chaotic, with rows and rows of booths and exhibits–where he witnessed the inner workings of the wholesale industry firsthand. 

He continued working to bring the Blunt Umbrella to market when he joined Square as a product manager in 2011, attending these trade shows while also building technology for SMBs that could dramatically improve their operations. “I had been toying around with the idea for Faire for about five years, thinking, ‘There has got to be a better way to do this.’” 

First Rhodes had to consider: *Why do trade shows even exist? *After all, the practice felt decidedly dated. Amazon and e-commerce had changed the way we buy, but small businesses were still procuring inventory by mining hundreds of booths for thousands of potential products. After leaving Square, Rhodes and his co-founders–fellow Square alums Marcelo Cortes, Daniele Perito, and Jeff Kolovson–set up two weeks of interviews with retailers. It became abundantly clear that, in the minds of small business owners, trade shows were the best solution they had for gaining confidence in new products before purchasing. “Moving online removes one of the core value props of the trade show–being able to touch and feel the products,” Rhodes says. 

In a digital universe, the four co-founders came up with the solution: Shop owners could buy wholesale online via Faire’s marketplace, and Faire would offer free returns and a “buy now, pay later” option that was essentially try-before-you-buy. That meant Faire would adopt the risk. 

One of the best things that Rhodes learned at Square was that in pooling risk across a large body of data–many vendors, as opposed to just one–you could figure out how to better underwrite the risk. “We had confidence that we would lose money upfront, but we would eventually learn how to recommend products and offer credit to retailers in a way that would become financially sustainable,” Rhodes says.

##### SMBs: Alive and Thriving

Faire wasn’t necessarily an easy sell to early investors, some of whom were concerned about the dreaded “Retail Apocalypse” that was buzzing at the time. In Rhodes’ research, however, he discovered that local businesses were thriving despite the ominous talk of retail’s demise. The “shop local” movement was well underway, empowering consumers to support their local businesses and ultimately help their broader communities flourish. “A lot of shopping is getting something as quickly and cheaply as you can,” Rhodes says. “But the other half of it is much more experiential and emotional and driven by a desire to do good.” 

Not only is shopping local a sensory, curated experience–where it smells good, feels unique, and evokes great care–but you are also often purchasing directly from the person who owns the business, says Rhodes. “They’re artists, crafting this experience for you. You are supporting this entrepreneur who has taken this risk on themselves and is working their tail off,” he says. “They are a member of the community, their kids go to the same school as your kids, and that feels important. Plus, the pandemic really accelerated this movement toward local.”

Faire powers an entire ecosystem of do-gooding, using a data-driven approach to help retailers find the right products for their shops, while eliminating the inventory risk and offering access to capital that was previously only available to major retail players. Faire lends SMBs a robust sales, marketing and analytics platform to simplify their business operations and better serve their customers with great products.

And Rhodes was right: There was never a Retail Apocalypse among local businesses, all of whom have contributed to Faire’s rocketing success. In just five years, the company now hosts more than 60,000 brands within its marketplace, in addition to serving over 400,000 small retailers across North America and Europe. Late last year, the company reported record growth across Europe, raised its Series G funding on a $12.4 billion valuation, and reached $1 billion in annualized volume. 

##### The Mission is Personal

Rhodes has been impressed by the nimble nature of these small business owners – especially through the pandemic, as more brick-and-mortar retailers took their operations online, finding new ways to persist and thrive. “They’ve survived the Walmarts and Amazons of the world, and they’re really good at adapting to their environment,” he explains. “Now, they’ve started building Instagram presences, selling through TikTok, doing live sales, and building websites. They’ve really figured it out.”

Faire’s mandate is deeply personal to Rhodes, a serial entrepreneur who has run businesses both large and small. “I know their pain,” he says of Faire’s customers, with whom he speaks regularly. “The story is always the same. They say, ‘I really didn’t like my job.’ ‘I was lacking purpose.’ ‘I had this dream of starting a business, opening my own shop, selling on Etsy.’ That has just really resonated with me.” 

The vision for Faire has remained constant since Rhodes and his co-founders started, but the ambition has grown. In addition to expanding the company into new categories and territories, he sees an opportunity to help brands sell through social media, or offering analytics that improve their buying decisions. Rhodes sees endless ways to improve the Faire marketplace and better serve customers. 

“One of the things I love about Faire is that we succeed when our customers succeed, and we designed the business model from the very beginning to support that,” Rhodes says. “We only get paid when our customers sell products.” Faire only takes commission on new accounts, not existing ones. But the bigger each retailer gets, and the more locations they open, the more they purchase from Faire–and both grow together. “We really consider ourselves partners to the entrepreneurs that we support,” he says.

Rhodes will never forget the beginning of the story, though. “We started with the idea of helping a brand like Blunt Umbrellas get into more stores,” he says. In doing so, he found an unlock for nearly half a million small brands and independent retailers alike. 

*To learn more about how Faire is reinventing wholesale, visit **faire.com**. *`,
  },
  {
    slug: "the-worlds-next-great-digital-health-company-our-continued-investment-in-ura",
    title: "The World’s Next Great Digital Health Company; Our Continued Investment in ŌURA",
    date: "April 8, 2022",
    year: 2022,
    author: "Eurie Kim",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "Oura",
    excerpt: `I first came across ŌURA in early 2019. I have to give credit to my husband, who as a neurosurgeon, was working with a personal trainer to address his own health challenges—back pain from years of...`,
    content: `I first came across [**ŌURA**](https://ouraring.com/) in early 2019. I have to give credit to my husband, who as a neurosurgeon, was working with a personal trainer to address his own health challenges—back pain from years of standing over operating tables, terrible sleep habits engrained from erratic schedules being on-call, and a non-existent exercise routine given perpetual exhaustion. The first thing his trainer said he had to address was his poor sleep. *How can the body be expected to perform, if it hasn’t had a chance to recover?* The lightbulb went off for both of us, and so began our obsession with the ŌURA Ring and our quest for a great night’s sleep.As any venture investor would do, I looked up ŌURA’s company information first thing after buying my Gen 2 Ring. While the company was founded in Finland, it turned out they were expanding to the U.S., and the timing was right to bring on U.S.-based investors. As part of my diligence process, I spoke to Dr. Ashley Mason, research faculty at UCSF Osher Center for Integrative Health, to understand how she was leveraging the ŌURA Ring in her research. She explained the power of ŌURA’s biometric data to track and understand everything from sleep quality, stress levels, body recovery, illness detection through body temperature variations, and even my own hormonal cycles.

Armed with this information and my new ŌURA Ring, I wanted to put my learnings to the test. My husband and I were just beginning to consider having a second child, so I tracked my own data for a couple weeks to monitor my cycle and estimate when I was most likely to become pregnant based on the trends that Dr. Mason highlighted. Shockingly, it worked like a charm. Not only did ŌURA accurately predict my ovulation window, it also revealed a step-change in my body temperature indicating pregnancy—which I confirmed several weeks later with a pregnancy test. ŌURA was able to tell me within days that I had conceived. 

ŌURA hadn’t even started formalizing their women’s health features yet (which they recently launched with the new Gen 3 ring), but it was impossible to ignore all the potential ways this digital tool could completely change how a person proactively manages their health. With this vision in mind, Forerunner led the company’s Series B in December 2019 (and has invested in every round thereafter), and I’ve been honored to serve as Chairperson of the Board since then. All the while, I have remained obsessed with the product, delighted by each new feature and function, and inspired by the clear vision for ŌURA to become the next great digital health platform. 

This week, ŌURA [**announced**](https://ouraring.com/blog/investing-in-your-health/) that the incredible growth and trajectory of the company has enabled them to secure new financing at an impressive $2.55 billion valuation, to further investment into team, R&D, science and research, as well as new features for our member community. This best-in-class wearable meets the consumer where we are going. The global wellness market represents $1.5T, and is only projected to grow in the years ahead–especially post-pandemic, when many of us decided to up-level our health habits. Wearables in particular had a record-shattering year in 2021, with over 533M devices shipped worldwide, and adoption increasing steadily over the past five years.

Today, a quarter of U.S. adults sport a wearable—but the benefit of ŌURA Ring is that it doesn’t *feel *like one. I have tried nearly every wearable on the market over the past decade in my efforts to understand and improve my health. My two biggest personal gripes to date? Poor battery life and even poorer style. The litany of wristband formats have been uninspiring at best, and the Apple Watch battery can barely make it through the day, much less through the night. (Plus, who can sleep well with bulky tech strapped to their wrist?)I immediately loved the seamless nature of ŌURA Ring, which I wear 24/7 and often forget I have on. While ŌURA is one of the most accurate wearable devices on the market (99% heart rate and 92% body temperature correlation to clinical standards), the reality is, the ring's comfortable form factor and week-long battery life has enabled me to fully integrate the health platform into my routine, and thus drive the best data and insights that actually change my behavior for the better.

Wearing my ŌURA Ring has shifted my wellness regimen from reactive to proactive. I check my Readiness Score every morning to understand when I can push and when I need to take it easy. I consider my Sleep Score and stats to make sure I am getting enough consistent rest. I track my activity throughout the day. I note spikes in my body temperature in case I might be getting sick—a metric that was even more important during the Covid-19 pandemic. 

I’m not the only one to experience ŌURA’s impact. The company recently announced 1M rings sold. Of all the companies we have invested in at Forerunner, ŌURA members are some of the most passionate about this technology and its personal health impact. It’s been a thrill to watch everyone from Techies, Olympic athletes, F1 drivers, NFL players, British royalty, and even A-list stars like Jennifer Aniston, Gwyneth Paltrow, and Kim Kardashian become obsessed with their sleep and health data. This is only the beginning. 

In the coming months, ŌURA will launch workout heart rate monitoring, an enhanced sleep-staging algorithm and blood oxygen sensing. In addition, ŌURA has invested in women's and reproductive health—capabilities that turned me into a believer from the earliest days—through key research and features like Period Prediction.

Amidst the backdrop of a pandemic, the past few years have been a turning point for how we view and manage our health. We have all come to realize that health should never be taken for granted. Combining advancements in wearables, telemedicine, and wellness with a best-in-class product experience, ŌURA is well-positioned to become the go-to health platform for the modern consumer in the coming decade.`,
  },
  {
    slug: "access-to-the-best-medical-care-no-matter-where-you-live-introducing",
    title: "Access to the Best Medical Care, No Matter Where You Live; Introducing AmplifyMD",
    date: "March 28, 2022",
    year: 2022,
    author: "Eurie Kim",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "AmplifyMD",
    excerpt: `Medical specialists are a critical part of a hospital's ability to serve its patients – hematologists for leukemias, infectious disease specialists for insect-borne illnesses, neurologists for...`,
    content: `Medical specialists are a critical part of a hospital's ability to serve its patients – hematologists for leukemias, infectious disease specialists for insect-borne illnesses, neurologists for stroke. Yet specialities ranging from cardiology to psychiatry are in short supply at hospitals across the country, especially those outside of major urban centers. 

Of the approximately 6,000 hospitals in the United States, more than half have a shortage of specialists – missing three or more key specialists – and the vast majority have a gap in at least one important specialty. 

Over one million patient transfers occur annually when hospitals are missing the right doctors to treat patients with conditions like sepsis, stroke, insect-borne illnesses, or kidney disease, all of which specialists with specific skill sets. In addition to forcing susceptible patients to travel farther from their homes to find care, hospitals serving local communities also lose over $17B in revenue each year transferring patients that, with AmplifyMD, they otherwise would not need to send away.

Forerunner is proud to announce our investment in the team at [**AmplifyMD**](https://www.amplifymd.com/), a telemedicine platform that connects medical hospitals/facilities–with a particular focus on rural locales–to medical specialists they need to deliver inpatient specialty care. Forerunner led the company’s Seed round alongside Greylock, and we are thrilled to begin working with F-Prime Capital, who joins us as AmplifyMD’s Series A lead.The AmplifyMD platform consists of three core components: 1) a network of the most in-demand specialists, 2) hardware-agnostic software and a web app that allows for in-hospital access to real-time, remote specialist consults, and 3) added software that alleviates the burden of regulatory and compliance for health systems and physicians. 

This three-pronged approach creates a turnkey telemedicine solution for hospitals that can support the facilities with the highest needs– largely neglected by current vendors due to limited resources. At the same time, specialists gain the ability to serve patients they would never otherwise reach at attractive rates, while also holding more control over their workloads. 

Early results are extremely promising. The company has now onboarded over 20 hospitals onto its platform and has a strong pipeline slated for 2022. Hospitals using AmplifyMD saw a 60-80% reduction in transfers, as well as 20-30% reduction in 30-day readmissions. The platform is truly beneficial for both patients and providers. 

AmplifyMD is led by Co-Founders Meena Mallippeddi and Anand Nathan. Meena was inspired to launch the company after many years of working on the business side of the healthcare industry, where there was an obvious lack of specialty care among rural and small hospitals. Anand spent his career in executive strategy, operations, and finance roles across major tech companies. He was driven to use technology to make medical care more accessible to locales like his rural hometown.

Over the years, we at Forerunner have often asked ourselves: What services are truly needed by consumers of all kinds? Which populations have the greatest need? It became abundantly clear during the pandemic that medical care is of paramount importance – and everyone should have access to it, no matter who they are or where they live.`,
  },
  {
    slug: "personal-care-to-serve-americas-shifting-demographics-introducing-a-frame",
    title: "Personal Care to Serve America's Shifting Demographics; Introducing A-Frame",
    date: "March 10, 2022",
    year: 2022,
    author: "Eurie Kim",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "A Frame",
    excerpt: `The face of America is changing. According to the latest U.S. Census data, children in this country will grow up with no ethnic majority for the first time in our nation’s history. However, that...`,
    content: `The face of America is changing. According to the latest [**U.S. Census data**](https://www.insider.com/no-ethnic-majority-for-people-under-18-in-the-us-2021-8), children in this country will grow up with no ethnic majority for the first time in our nation’s history. However, that doesn’t mean the world is prepared to cater to these evolving demographics.While 40% of the U.S. population now identifies as non-white, the $25 billion natural personal care market lacks a dedicated mass-market option for Black and Brown customers who collectively spend over $9 billion per year on personal care and beauty products. 

As the racial minority in America shifts to a majority over the next few years, consumers are increasingly demanding goods and offerings that speak to their individual needs -- products that recognize and validate their identities, with ethnicity taking a leading role in the category of personal care. 

We are thrilled to announce our investment in [**A-Frame**](https://www.aframebrands.com/), a Los Angeles-based brand incubator and holding company dedicated to developing a portfolio of discrete, talent-led, sustainable personal care brands that will address the needs of this expanding consumer demographic. A-Frame has started with the 2021 launch of [**KINLÒ**](https://www.kinlo.com/), a functional skincare brand for POC, created in partnership with tennis star Naomi Osaka, and [**PROUDLY**](https://wwd.com/beauty-industry-news/beauty-features/gabrielle-union-dwyane-wade-start-baby-line-1234853293/), a natural baby care brand from Gabrielle Union and Dwyane Wade. A-Frame has other brand concepts in development, including offerings in moisturization led by John Legend, men’s personal care and grooming, women’s topical pain relief, general wellness, tweenhood, and female sexual health and empowerment. All subsequent brands launched under the A-Frame portfolio will be tied to their core thesis, which emphasizes five factors: 1) focus on underserved communities; 2) 50/50 tie-in with a top global talent; 3) sustainability in both ingredient composition and packaging; 4) DTC innovation; and 5) an exclusive retail partnership for distribution. 

A-Frame is led by Founder & CEO Ari Bloom, the former CEO of Avametric, an AR and simulation startup transforming the retail and e-commerce space (acquired by Gerber Technology in 2018), as well as Co-Founder Hill Harper. We were immediately impressed by their passion and conviction in the opportunity to serve the changing demographic landscape in America, with a mission-driven approach at the center of it all. At the same time, Ari and Hill is supported by a strong executive team in COO Avantha Arachchi and Chief Brand Officer Martin Ekechukwu, as well as a robust team of experts serving as brand CEOs who authentically reflect the audiences they are looking to serve. 

We’ve been eyeing the demographic shifts in America through an optimistic lens, but these changes must be met with [**innovation to match the needs**](https://www.forerunnerventures.com/our-perspectives/finding-product-human-need-fit-in-the-post-covid-era) of diverse populations who demand well-designed solutions that respect their identity and serve their uniqueness. We at Forerunner believe A-Frame is well-positioned to lead the market with both authentic values and business model innovation, and we are thrilled to support the team as they build the next generation of influential, sustainable, powerful consumer brands.*For more about A-Frame’s mission and family of brands, visit **aframebrands.com**.*`,
  },
  {
    slug: "homebounds-nikki-pechet-is-ready-to-build",
    title: "Homebound's Nikki Pechet Is Ready to Build",
    date: "March 5, 2022",
    year: 2022,
    author: "Forerunner Ventures",
    authorTitle: "",
    category: "Investment Announcements",
    company: "Homebound",
    excerpt: `With a recently-closed Series C, Homebound's Co-Founder & CEO is bringing her proprietary proptech platform to new markets. Growing up, Homebound Co-Founder & CEO Nikki Pechet wanted to be just like...`,
    content: `*With a recently-closed Series C, Homebound's Co-Founder & CEO is bringing her proprietary proptech platform to new markets. *Growing up, [**Homebound**](https://www.homebound.com/) Co-Founder & CEO Nikki Pechet wanted to be just like her dad. Her father started a small business out of their home in her childhood, and slowly scaled it into a bustling enterprise with an office and employees. “I always imagined myself as a business leader,” she says, and she certainly had no shortage of hustle for the job. After graduating from the University of Michigan in the early 2000s, Pechet moved to New York City ahead of all her friends to take a job on Pepsi’s brand team. Shortly thereafter, she also met real estate developer Stephen Ross of The Related Companies. Impressed with her drive, Ross asked Pechet to come work for him. She didn’t want to give up her Pepsi gig, but also didn’t want to miss the opportunity. “I told him, ‘I don’t have any friends, so I can work nights and weekends for you if that’s okay?’” she recalls. She juggled two full-time jobs right out of college. While working for Pepsi and The Related Companies, Pechet noticed a strange juxtaposition between the two worlds she navigated–CPG and real estate. “That was the first time I really saw and thought about how there were these big brands in soda water, but there were no big brands in real estate or homes.” Pechet ended up writing her business school essays about being an entrepreneur–it just wasn’t yet the right moment for her to pick up that torch. She would graduate from Harvard Business School, spend several years working on GTM strategy at Bain & Company, and then join Thumbtack as its VP of Marketing for a multi-year stint. 

When Pechet left Thumbtack, Founder Marco Zappacosta had to pull her aside and help her recognize that entrepreneurship was already in her DNA. “He told me, ‘You should really be a founder; you would be incredible,’” she says. “I remember being so astonished. In Silicon Valley, it’s easy to put founders on a pedestal. Having someone who knew me that well and who I trusted—someone who was such an incredible entrepreneur in his own right—tell me that I should be a founder was really the kick that I needed.” 

Around the same time she was exiting Thumbtack in 2018, California was reeling from a wildfire that took down 6,000 houses in Napa and Sonoma. It was a hopeless time for a lot of people. Homeowners were navigating a maze of insurance claims, permitting laws, and general contractors, trying to figure out how to get their houses rebuilt. Pechet’s home narrowly missed an encounter with the fire, but her eventual co-founder, Jack Abraham, did lose his home. Pechet wanted to help others through the process of getting homes rebuilt. “I was running all of go-to-market on both sides of the Thumbtack marketplace, which is the largest local services marketplace in the country, and I could not figure out how to help,” she says. “That’s when Jack said to me, ‘We have got to build something better.’” 

**Building a Platform to Build Better Homes**You could buy almost anything online when Pechet started Homebound in 2018, but you couldn’t sit down, open your laptop, customize a home design, and secure the necessary documents and contractors to bring it to life in a systematic, user-friendly way. For most consumers, building a home has been an opaque, clunky, and outdated process.

Combining Pechet’s experience in brand-building, GTM strategy, and real estate, Homebound was born of the idea that there *must *be a next-generation homebuilder with technology behind every step of the process. Not only did Pechet want to build a company that would make the home-building experience vastly more efficient, but she wanted the customer service on the platform to be unprecedented in a challenging industry. The result is the capabilities to create homes 80% faster through pre-construction, 10% faster through construction, and 8x more efficient during the design process.After inception, the team first responded to the Tubbs Fire in Northern California–the largest and most destructive wildfire in state history. “We thought this was a once-in-a-lifetime event that would never be replicated, and from there, we’d just go to other communities that simply needed more houses,” Pechet says. Fast forward six months, and the Woolsey Fire struck Malibu, burning down $2B worth of homes. After that event, Pechet received a note from a group of teachers in the area. They’d read about Homebound, and knew the company could help them. If Homebound didn’t step in, the teachers questioned if they’d ever be able to rebuild what they’d lost. 

With a three-week-old baby and a recently-closed Series A, Pechet and her Head of Growth got in a car and drove down to Malibu to meet with the community and scout properties for their second market. This was, after all, exactly why Homebound was born.

The company has launched in specific markets that desperately need its tech due to natural disasters like wildfires and hurricanes—including Northern California, Malibu, and the Bahamas. Homebound’s most recent market is Denver, which is still recovering from the Marshall Fire and the 1,000 homes it destroyed in December. In Colorado, Homebound will help homeowners who want to rebuild, as well as expand across the entire metro in the year ahead. The company will also enter markets where housing is scarce due to shifting populations–like Austin, which became the team’s first non-disaster market in 2021. 

It is nearly impossible to purchase a home in Austin, because the supply is so limited. “During the height of Covid, you’d go to an open house that started at noon, and there would be a line of 35 families waiting to get in,” Pechet says. “By the time you’d reach the door, somebody would have bought the house. It is that kind of dynamic.” 

Around 75% of the people in Homebound’s Austin customer pipeline were not originally planning to build a home. “They feel like it’s possible because they can see how simple the process is with Homebound–even though the process is not simple,” Pechet says. You have to deal with permitting, securing land, supply chain issues, weather, and a whole host of other sometimes-unpredictable variables. By utilizing the Homebound platform and local team members who understand the area, it becomes a step-by-step process that’s easier to digest. 

Homebound just closed a $75M Series C led by Khosla Ventures alongside a large debt facility from Goldman Sachs, and the company will start to ramp up in markets like Houston, Dallas, and Denver throughout 2022. Homebound has spent years iterating on its proprietary tech, which includes a custom design catalog, a platform that manages over 600 unique tasks in the home-building process, a procurement platform with APIs into all the biggest materials suppliers, and a financing engine. Once stitched together on an Airtable backend as the team worked out the kinks, Homebound has now built its own robust internal software platform to support rapid growth with an unparalleled, tech-enabled customer experience. 

**Building Endurance as a Founder**For Pechet, Homebound’s mission was and is deeply personal. “The whole genesis of the business was that it was our backyard that burned down,” she says. “It was our team and our friends and our family that we needed to get back home.” 

But that doesn’t mean things have come easily for her, despite tremendous drive and mission-mindedness. Being a founder requires the ability to embrace discomfort–constantly, and for a long time. Pechet says she spent the first two years of Homebound reminding herself that she felt sick all the time because she was living at the edge of her comfort zone. “But then you start to look back and realize that something that would have really devastated you six months ago doesn’t really bother you now,” she says. “You see that progress, and your comfort zone expands.”

Pechet insists being a founder is the hardest thing a person can ever do. She talks to a lot of would-be entrepreneurs with business ideas, and suggests they do some soul-searching before diving in. “I tell people to never, under any circumstances, start a business that you do not feel in your bones must exist,” she says. “If you don’t feel like this is the sort of business where your life won’t be complete unless it is on the planet while you are here, then don’t bother.” 

Why? At every stage of a rapidly-growing startup, it can feel like a dozen things are breaking at once. In the toughest moments, Pechet says you need to remember why you’re there and what your mandate is. “*If we don’t do this, families don’t get homes. Communities don’t get rebuilt*,” says Pechet. “I find that incredibly powerful in moments where things go wrong. You have to be able to step back and say, ‘We have to do this; it’s not a choice. It’s not about making a lot of money. This is about doing something that our world needs and our communities deserve.’”*For more information on Homebound and its services, visit **homebound.com**.*`,
  },
  {
    slug: "shepherding-the-usd2t-government-procurement-market-into-the-e-commerce-era",
    title: "Shepherding the $2T Government Procurement Market into the E-Commerce Era; Introducing Pavilion (formerly CoProcure)",
    date: "February 25, 2022",
    year: 2022,
    author: "Nicole Johnson",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "Pavilion",
    excerpt: `Forerunner and govtech?`,
    content: `Forerunner and govtech? 

The marriage may not be obvious at first glance, but when the company at hand is transforming the purchase journey for the sector and empowering buyers and sellers to do better business—absolutely.

Technology has fundamentally changed commerce in every sector except for government, which commands almost $2T annual spend–nearly 10% of U.S. GDP–on state and local purchases ranging from traffic cones to landscaping, PPE to playground equipment. While consumers and businesses outside of the government can quickly make informed purchasing decisions online, government agencies are stuck using 1900s technology for their essential purchases, forced to run buying through highly-regulated and highly-manual government processes. The greatest innovation is cooperative purchasing, which saves massive amounts of time by allowing government agencies to piggyback off of one anothers’ contracts. Cooperative purchasing is a growing $190B market now used to some degree by over 90% of state and local governments, but remains far from mainstream, facilitating just 18-20% of local government spending as of 2018.

Enter Pavilion, the only company offering a free search tool for all cooperative contracts across the U.S. Pavilion (formerly known as CoProcure) is looking to build the de facto marketplace for cooperative purchasing as it becomes a larger and larger piece of overall procurement spend. Timing is everything, and it couldn’t be better, with our country on the heels of a landmark infrastructure bill that will put trillions of incremental spending power into the hands of state and local governments. Moreover, Pavilion is catalyzed by changing demographics in government agencies, with digitally native millennials taking leadership roles in procurement with great appetite for, and fluency with, technology. And of course, Covid-19, which has driven greater govtech adoption and cooperative contracts utilization as smaller agency teams have had more work to accomplish than ever, procuring PPE, sanitation services, products for remote schooling, etc.). 

Pavilion's solution is resonating with government agencies and suppliers alike. More than 300 government agencies have already been activated on the platform, empowering public servants with access to 50K+ vendor contracts, and Pavilion is influencing well over $100M in annualized GMV with strong buyer retention. 

Above all else, Pavilion is a bet on a winning team. The company was founded by Mariel Reed, who epitomizes founder-market fit as a visionary for the sector. An early Coursera employee, Mariel most recently served as a public servant herself, as a Senior Innovation Strategist for the city of San Francisco. While there, she fell in love with procurement and observed a massive opportunity to bring a platform like Pavilion to life. She brought on Co-Founder Alicia Chen, the first female engineer at Dropbox who helped scale the organization from 70 to 2K+ people. The two have done a tremendous job bringing on world-class talent from companies like Palantir, Stripe, Netflix, Affirm, and Facebook, all with shared enthusiasm about scaling a massive technology company that stands to have dramatic social impact.

Big picture, Pavilion aims to reduce the costs of buying and selling in local government, level the playing field for businesses, and achieve better outcomes for communities across the U.S., and we’re honored to have the chance to back this team as they realize this vision of national consequence.

*Special thanks to *Pavilion's* ‘Ali’s’ - Ali Rosenthal of Leadout Capital (Pre-Seed Lead) and Ali Partovi of Neo (Seed Lead) - for bringing us this wonderful opportunity. We’re thrilled to be invested alongside them and others.*`,
  },
  {
    slug: "the-future-forerunners",
    title: "The Future Forerunners; Fund VI $1B",
    date: "February 17, 2022",
    year: 2022,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: "Theses",
    company: null,
    excerpt: `Today we're announcing our new $1B raise, including a $500M vehicle for early-stage investing, and a $500M vehicle for growth.At Forerunner, we spend most of our time thinking about the future—how...`,
    content: `*Today we're announcing our new $1B raise, including a $500M vehicle for early-stage investing, and a $500M vehicle for growth.*At Forerunner, we spend most of our time thinking about the future—how the world will change, who the consumer will be, and what technology we’ll need to meet tomorrow. As much as we’re energized by what’s ahead, milestones–a new year, a new fund cycle, and in this case a new decade–present an opportunity to reflect. In July, Forerunner will celebrate its 10th year in business. As we pause to consider where we were and where we aspire to go–as a firm, and as a culture–we are struck by the radical shifts we’ve witnessed while noting that the pace of change is likely to be even more profound in the years ahead. 

In 2012, Forerunner debuted with a modest fund and an initial team of two. At the time, legacy businesses were still category leaders. Department stores like Barneys, Lord & Taylor and Neiman Marcus, as well as big-box retailers like Kmart and Sports Authority, peppered the U.S.; they were frequented by millions and arguably the best place to engage a knowledgeable salesperson. 24 Hour Fitness had over [**400 locations**](https://www.sfgate.com/business/bottomline/article/24-Hour-Fitness-healthy-chain-for-sale-3755709.php) across the country (that would soon be up for sale). Hotels like Marriott and Hilton were the default lodging options. Blockbuster operated [**1,500 locations**](https://qz.com/144372/a-brief-illustrated-history-of-blockbuster-which-is-closing-the-last-of-its-us-stores/), and [**200 million physical CDs**](https://www.statista.com/statistics/186772/album-shipments-in-the-us-music-industry-since-1999/) were purchased that year. *The New York Times* had a [**circulation of 1.6M**](https://www.usatoday.com/story/money/2012/10/30/largest-us-newspapers/1669117/) for its weekday edition, as the publication’s digital subscription had only debuted one year prior. There were [**100M pay TV subscribers**](https://www.statista.com/statistics/251268/number-of-pay-tv-households-in-the-us/) using services like Comcast and AT&T. Many of us still maintained a landline. [**ExxonMobil had just lost its crown**](https://bits.blogs.nytimes.com/2011/08/09/apple-most-valuable-company/) as the world’s most valuable company.The incumbents still had market and mindshare, but huge cultural shifts were brewing, as the opportunity to connect and transact online at scale was rapidly emerging and evolving. With tech becoming ubiquitous, infiltrating more of our daily lives, the potential to meet human needs in modern, efficient ways felt endless; the digital revolution was well underway. 

U.S. e-commerce sales hit [**$225B**](https://www2.census.gov/retail/releases/historical/ecomm/12q4.pdf) in 2012, growing 15% year over year. Amazon had just notched [**10 million Prime subscriptions**](https://www.geekwire.com/2013/amazon-prime-10m-members-counting/), and Walmart drew in nearly [**$5B in ecommerce**](https://www.fastcompany.com/3002948/walmarts-evolution-big-box-giant-e-commerce-innovator) revenue. Spotify had just nabbed [**1M paid subscribers**](https://techcrunch.com/2012/12/06/spotify-by-the-numbers-now-5m-paying-subscribers-with-1m-in-the-u-s-alone-20m-users-overall/) in the United States. Digital-first retailers like Warby Parker and Bonobos were pioneering a new way to do business, cutting out the middle agent and building direct relationships with loyal consumers. A relatively-niche [**40 million users**](https://techcrunch.com/2012/04/13/instagrams-user-count-now-at-40-million-saw-10-million-new-users-in-last-10-days/) had adopted Instagram, and Netflix had just split off its DVD subscription business to focus on something more promising–streaming. That same year, ByteDance, Peloton, Instacart, Affirm, and Chime were founded to offer tech-enabled solutions to consumers who needed *more, different, *or* better *options, and Apple became the [**world’s most valuable company**](https://bits.blogs.nytimes.com/2011/08/09/apple-most-valuable-company/) for the very first time. Fast forward to the present, and [**smartphone sales have more than tripled**](https://www.statista.com/statistics/263437/global-smartphone-sales-to-end-users-since-2007/) in 10 years–from 472M in 2011 to 1.54B in 2021. Digital innovators have surpassed their legacy counterparts as fully-scaled category leaders. Amazon now serves over [**200M Prime customers**](https://news.yahoo.com/amazon-prime-has-200-million-members-142910961.html) and carries a $1.5T market cap. Spotify and Netflix have completely disrupted the way we consume media, eliminating the need for clunky discs. Airbnb has [**4M hosts worldwide**](https://news.airbnb.com/about-us/) with a market cap that of Marriott and Hilton combined. Social media has become ubiquitous; Facebook has [**2.9B users**](https://www.statista.com/statistics/268136/top-15-countries-based-on-number-of-facebook-users/), Instagram now has [**1B**](https://www.statista.com/statistics/325587/instagram-global-age-group/), and TikTok’s [**1B**](https://www.cnbc.com/2021/09/27/tiktok-reaches-1-billion-monthly-users.html) have made ByteDance the most valuable private company in the world. In 2022, owning a Peloton is as common as having a gym membership. Cable subscribers are shrinking rapidly while YouTube and Hulu beef up alternative TV offerings. Since our earliest days investing, we have been tracking this evolution every step of the way, with a particular eye on the user, the consumer: our *muse*. We map business potential to the evolving needs, preferences, and potential of people. We continue to look for areas where new markets are emerging, or existing ones are being reimagined. We look for categories where new tools, technologies, or behaviors can enable better business models that offer more access and reach. We track consumer values, and predict how that affects the way they choose to engage and transact. This focus has inspired us to invest accordingly.While adoption and business progress over the last decade has been exponential, as we look to the future we see ever more significant potential. Potential for companies to leverage agile software to move swifter, to scale fluidly into adjacent areas, to be buoyed by new paradigms in consumer preferences, priorities and possibilities, to extend their reach across borders, to address new concerns and growing needs. As Forerunner announces a $1B Fund VI, including a $500M vehicle for early-stage and a $500M vehicle for growth, and celebrates our 10th year of operation, we have our attention focused toward what the next 10 years will bring.

##### The Future Consumer

The pandemic has served as an accelerator of online access, fast-tracking us to a world that’s more informed and more connected than ever–via DMs, Messenger, SMS, WhatsApp, Telegram, Slack, Zoom and Discord–with digital fluency extending across demographics. From Instagram to TikTok, Facebook, to Twitter, social media usage across platforms increased by [**~30% in the first months**](https://www.statista.com/statistics/324267/us-adults-daily-facebook-minutes/) of the pandemic, and has [**continued climbing to higher levels since**](https://www.statista.com/statistics/278414/number-of-worldwide-social-network-users/). We’re seeing the rise of the side hustle–[**50% of millennials**](https://www.businessinsider.com/side-hustlers-experience-burnout-experts-build-self-confidence) now have one, and Gen Z is just as entrepreneurial–and witnessed thriving careers take off on social media. Substack has garnered [**1M paid subscribers**](https://www.forbes.com/sites/marisadellatto/2021/11/15/substack-announces-one-million-paid-subscribers/?sh=2d8197143e76) in just five years, as journalists and columnists have flooded the platform. [**Patreon boasts 250,000 creators**](https://www.patreon.com/about) and a $4B valuation, and the average number of views on a TikTok posted by Addision Rae [**regularly doubles or triples**](https://www.tiktok.com/@addisonre) the number of subscribers to *The New York Times*. We’re also seeing the rise of crypto and Web3, reaching outside the earliest adopter circles and making its way into mainstream use cases. In January, OpenSea surpassed [**$5B in monthly transaction volume**](https://cointelegraph.com/news/opensea-monthly-volumes-top-5b-as-nfts-continue-to-mainstream). According to a Forerunner survey, 22% of respondents purchased an NFT last year and another 30% are seeking their first purchase or looking to add to their collection. There is so much potential to meet an evolving consumer’s needs in the next era of digital.Who is the next-gen consumer? This is a topic we obsess over. In 2032, the population will be even more fragmented. The latest Census revealed there is [**no ethnic majority**](https://www.insider.com/no-ethnic-majority-for-people-under-18-in-the-us-2021-8) among children growing up in the United States, and media is finally beginning to [**reflect this diversity**](https://www.usatoday.com/story/entertainment/movies/2021/04/22/hollywood-diversity-report-pandemic-paved-way-inclusion-movies/7317279002/): BIPOC actors now make up nearly 40% of film leads, and women account for almost 48% of starring roles, growing four- and two-fold respectively over the last 10 years. Niche communities are forming on platforms like Roblox and Clubhouse, and [**26% of Facebook users’**](https://sproutsocial.com/insights/facebook-stats-for-marketers/) most-frequented group revolves around a hobby. The world will be more data-driven, more content-dense–the first iteration of Google indexed [**26M webpages**](https://googleblog.blogspot.com/2008/07/we-knew-web-was-big.html), whereas today’s Google indexes over 130T–and more automated than it is today. There will most likely be more inequality and more financial bifurcation, with [**millions of U.S. jobs displaced by technology**](https://www.mckinsey.com/featured-insights/future-of-work/the-future-of-work-after-covid-19), and a [**growing percentage of the wealth**](https://www.statista.com/chart/19635/wealth-distribution-percentiles-in-the-us/) owned by a shrinking percentage of the population. The [**climate will become more chaotic**](https://www.ipcc.ch/report/ar6/wg1/) and its problems surely more integral to our daily lives. Though the population will be older, the 2032 consumer is likely to be less generationally defined and more driven by psychographics. The aging process will be different; staying connected and informed will keep the consumer younger for longer. The world will also be less binary. More people will be comfortable with their individuality, with limitless expression through hyper-personalized products and experiences, both online and off, and a focus on cause-conscious brands that value social responsibility. The consumer will be more connected to culture than to geography. With participation in mindful movement on the rise, and with the cost of [**mental health expected to reach $6T by 2030**](https://www.jhsph.edu/research/centers-and-institutes/johns-hopkins-education-and-research-center-for-occupational-safety-and-health/2019MARCOEM_HANDOUTS/David%20Frances%20MACOEM%202019.pdf), the consumer will be more focused on holistic wellness.As web3 and crypto become more ubiquitous, more people will spend via non-fiat currencies and the metaverse will seamlessly blend the consumer’s online and offline experience. It’s an evolution of what we’re already seeing in this digitally-connected world, as tech like AR/VR will continue to take off; [**Oculus sold nearly 7M**](https://www.wsj.com/articles/metaverse-needs-more-than-vr-christmas-bump-11641135782) units in 2021, and most big tech companies are following suit with their own AR offering. Even more so than today, our online realities in 2032 will be as poignant as our physical ones.We see the seamless blending of two worlds bearing out in multiple capacities. Digital is merging social and professional life together, too. Today’s consumers are no longer just consumers; they are businesses–creating, curating, and coaching their way to financial independence online. In this shift lies an economic empowerment opportunity: Users are willing to pay for access, service, and expertise, and the emergence of Web3 is set to enable more value exchange and efficient payment, only increasing the potential for consumers to monetize. 

We’re also seeing new paradigms in purchasing. We’re just starting to see the rise of digital goods, with ownership and economic interests aligned with the creator–look for more of this in the years ahead. The consumer has been activated, both socially and economically, and is embracing their power; there is information about all kinds of products at scale, and people will be increasingly willing to “vote their conscience” through their spending decisions. The 2032 consumer will spend an increased share on services, and though they still want to buy, they’ll do so with a stronger interest in recycling, upcycling, and limiting waste.

##### The Future Forerunner

Just as the markets and consumers change, so does the investor landscape. The VC ecosystem is more dynamic than ever. In 2012, the year Forerunner debuted, our industry invested less than [**$60B globally**](https://news.crunchbase.com/news/global-vc-funding-unicorns-2021-monthly-recap/). 2021 saw a record year for VC funding–[**$643B in total**](https://news.crunchbase.com/news/global-vc-funding-unicorns-2021-monthly-recap/), with more than double the number of unique deals compared to a decade ago.In 2012, Forerunner was one of a few female-founded and led venture capital firms. Though there is considerable room to improve, I’m thrilled to see more diversity each year. According to new data released this month, there were [**627 U.S. venture capital and private equity firms**](https://fortune.com/2022/02/07/venture-capital-private-equity-firms-women-people-of-color-owned-record-fairview-capital-joann-price/) majority-owned by women and minorities last year—up 25% from the year prio
r, and including 175 first-time fund managers. The pace and potential of innovation has attracted capital across the globe and across disciplines. Today there are accelerator programs and venture studios helping to spin up new companies. There are dedicated pre-seed funds and seed funds competing with large VC funds for the same entry points. There are massive hedge funds leading series A rounds, offering less engagement and the hope of future follow-on funding. More traditional PE investors are flexing their models to invest earlier and in a more collaborative way. At the same time, the pace of change, the pace of business, and the pace of competition continues to reach a fever pitch. 

We love innovation. As a founder-led venture firm, Forerunner adopts the mindset and habits of the founders whom we seek to support. We have a constant eye on learning and refining our product, staying nimble, and building. We intentionally maintain a lean team and thoughtfully focus and engage in everything we do with an eye toward being informed, efficient, collaborative believers. Being a true partner to founders is the core of everything we do. To date, Forerunner has invested in 149 companies, and we were the first investors in 66% of the portfolio. We have worked closely with the vast majority of founders, and have collectively served on over 60 boards.

Forerunner’s first decade of partnership with groundbreaking companies is just the start. Like the consumers we address and the businesses we admire, Forerunner is also committed to evolving against the backdrop of opportunity. Our latest $1B raise enables us to invest at the earliest stages, maintaining a stake in how we support founders and teams shape the future, while also enabling us to invest in later-stage leaders and companies who we recognize as true standouts–changing the game in the areas our team feels most informed and passionate about. This expanded mandate will enable us to further leverage our deep commitment to thesis-driven investing, and in particular, our passion for knowing the consumer and building resources and networks to support companies serving them. Better yet, the more partnerships we forge with stand-out companies across connected and considered themes at various stages, the more dynamic networks we build, the broader our experience becomes, and the more impact we can offer our partners. 

We recognize that founders have a growing selection of alternatives when it comes to partnership and access to capital, and in this noisy ecosystem, it feels essential to create an edge both in terms of how you select investments and why founders should choose to work with you over others. Over time, reputations and track records certainly serve to support this goal; we also believe that our focused approach, as well as our commitment to honing a unique point of view and acquiring a related experience set and network, stand to make us uniquely valuable partners to a set of founders and companies. We’ve leaned into this strategy since day one and remain committed to it. 

The best part about embracing a new decade at Forerunner is that this decade starts with a committed team of 14, a trial-tested approach to investing and partnering, a network of founders we consider colleagues and friends, and a tremendous amount of energy and ambition for the future. And of course, a dynamic consumer–our muse, a **forerunner**–who will no doubt continue to inspire change and opportunity in business.`,
  },
  {
    slug: "better-commerce-tools-and-memberships-for-independent-restaurants-in-the-u-s",
    title: "Commerce Tools and Memberships for Independent Restaurants; Our Investment in Table22",
    date: "February 10, 2022",
    year: 2022,
    author: "Nicole Johnson",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "Table22",
    excerpt: `There are few industries with greater inertia than restaurants–a shame for a nearly $1T U.S. industry employing 15M people and serving as a cherished pinnacle of culture. The business model is, and...`,
    content: `There are few industries with greater inertia than restaurants–a shame for a nearly $1T U.S. industry employing 15M people and serving as a cherished pinnacle of culture. The business model is, and has always been, low-margin and high-failure. This is thanks to fierce competition, the inherent challenges of four-wall economics (especially in cities), high labor turnover and shortages, and, more recently, the reality that new platforms often hurt restaurants’ profit margins instead of help. So many restaurants, even the best-of-the-best, are scrambling to make ends meet month-to-month on their low-single-digit operating margins—if they can make it at all. Four out of five restaurants fail before their fifth birthday.

Tech has helped the industry progress, no doubt, but the P&L hasn’t gotten better, nor has the experience been reimagined for consumers beyond the transaction moment or the locus of consumption (i.e., your couch, instead of the restaurant). Notably, the proliferation of delivery apps promised a new day for restaurants and their reach, and while the order volumes have materialized, they’ve come at the cost of margins in an industry with famously razor-thin ones. 

Then came the pandemic, which was immensely disruptive to the industry in so many ways over the past couple of years; closures, the abrupt shift to delivery, labor shortages, and inflation pressured profits and wreaked havoc. The industry model was already unsustainable, and then the Pandemic laid it bare.

Sam Bernstein and his co-founders saw their original startup–a housing marketplace for college students–brought to a standstill by the pandemic. As they were searching for a way to pivot toward a new model that could empower small businesses they cared about to succeed in a go-forward world, they saw an opportunity to bring membership to restaurants. We’re [**obsessed with loyalty**](https://www.forerunnerventures.com/our-perspectives/your-cac-doesnt-matter) at Forerunner—consumers are looking for more meaningful ways to espouse the brands they share values with, and it’s in brands’ best interests to nurture this dynamic. With [**Table22**](https://table22.com/), the founders saw a way to realize this in the nearly $1T U.S. restaurant industry via memberships, with restaurant and consumer pull towards this new business model accelerated by macro events.Launched May 2020, Table22 enables restaurants to build, manage, and grow subscription offerings for consumers, via a purpose-built platform. Today these offerings run the gamut of products and experiences brought to life by all kinds of restaurant(s) and F&B proprietors, with physical offerings like[** L’Oco de Oro’s Regional Italian Pasta Club**](https://table22.com/loca-doro),[** Lost Lake’s Cocktail Club**](https://table22.com/lost-lake), and[** The Joint’s Fishmonger Feast**](https://table22.com/the-joint), rounded out by subscriber perks like members-only pricing in restaurants, exclusive invites to in-house events and tastings, and cooking demonstrations. When I met Sam in late 2020 ([**thanks**](https://nbt.substack.com/p/table22) to round lead Nikhil Basu Trivedi, longtime Forerunner co-investor in The Farmer’s Dog), he and his team had scrapped together a product resonating with a diverse roster of restaurants, from [**Che Fico in SF**](https://table22.com/che-fico)–their pantry provisions box is the best thing landing on my doorstep monthly–to [**Frankies Spuntino**](http://table22.com/frankies-spuntino) in Brooklyn. Customers loved the product. Marquee programs were driving hundreds of thousands of dollars in annualized subscription revenue to restaurants, with strong retention on both sides of the marketplace.Fast forward a year, and Table22 is powering offerings for 175 merchants. Subscription revenue is up 7x since our Seed investment closed, despite the constant wrenches thrown at the industry in the intervening period—variant after variant, debilitating labor shortages, waxing and waning indoor dining capacity constraints, and beyond. Most excitingly, as we’ve begun to see the light at the end of the pandemic tunnel, pull from consumers and restaurants is stronger than ever, with demand and retention on both sides as good as it’s ever been.

We couldn’t be more excited about Table22’s future as it builds the next generation of commerce tools for the millions of independent restaurants in the U.S. The team has already minted a new, durable model for the restaurant industry that better meets the modern consumer where they’re at, while meaningfully adding to restaurants’ bottom line–and things are just getting started.

*Table 22** is hiring actively across sales, account management, engineering, and product – check out open roles **here.*`,
  },
  {
    slug: "how-metafy-founder-and-ceo-josh-fabian-gave-world-class-gamers-a-platform-to",
    title: "Metafy's Josh Fabian Is Turning World-Class Gamers Into Coaches",
    date: "January 21, 2022",
    year: 2022,
    author: "Forerunner Ventures",
    authorTitle: "",
    category: "Investment Announcements",
    company: null,
    excerpt: `You’d never know it from his personable nature, but Josh Fabian, Founder and CEO of Metafy, wasn’t always popular. Adopted as a baby and raised in a small farm town as the only person of color, he...`,
    content: `You’d never know it from his personable nature, but [**Josh Fabian**](https://www.linkedin.com/in/joshfabian/), Founder and CEO of [**Metafy**](https://metafy.gg/), wasn’t always popular. Adopted as a baby and raised in a small farm town as the only person of color, he often felt like a fish out of water in his early years. “Gaming was my escape,” he says. “It was comforting to me.” Fabian found confidence in the hobby, as a shortcut to feeling “important, relevant, or significant,” he says. Then, as a teenager, he began competing–first, playing [**Yu-Gi-Oh!**](https://metafy.gg/yu-gi-oh-trading-card-game)–which became an evolution of the love he felt for games as a child. “Nothing mattered except for how much you prepared in advance,” he says. “It was a great equalizer, and that was the first magic moment for me.” Today, Fabian is world-class. He’s been in the top 0.01% of players for 10 games, including [**Clash Royale**](https://metafy.gg/clash-royale) and [**Hearthstone**](https://metafy.gg/hearthstone). In 2016, he left his Lead Designer position at Groupon to play games competitively when a select few had begun to earn a living doing what they loved. He played eight hours a day. “If I lost a game, I’d write down in a notebook who I lost to and what I could have done differently,” Fabian says. “I took it very seriously, just like a job.”He was top 20 in the world at Clash Royale–and one of the top YouTube streamers for the game–but it was hard to monetize his skills. One day during a stream, a viewer asked if he could teach them how to play like he did–an atypical style based on his experience with card games. Fabian agreed to teach the user for $100/hour, not thinking the person would say yes, but simply because that’s what he charged for his design work. And the viewer purchased his time.

This first transaction kicked off Fabian’s coaching career. “Every time I was streaming, I was coaching,” he says. He made about $40,000 in six months, which was dramatically more than he made just streaming at $30 a day. 

With a family in mind, and without the proper infrastructure to support a coaching business, Fabian ultimately went back to tech. But he did pass a love of gaming onto his kids, who wanted to learn [**Pokémon**](https://metafy.gg/pokemon-unite) themselves… just not from their dad, of course.Given the way he fell into coaching, Fabian decided to reach out to the Pokémon World Champion to see if he might be interested in teaching his kids; he agreed to do it at a rate of $20/hour. “That was the real ‘a-ha’ moment for Metafy,” Fabian says. “This guy was the World Champion in this game, and he is working in a warehouse." Even top players couldn't make enough money to sustain themselves simply by streaming, but an appetite to monetize through coaching was starting to reveal itself. Fabian knew if he didn't build Metafy, someone else would.

*Serving Coaches as Much as the Consumer*When he set out to create the Metafy platform, Fabian did so with a critical eye on the business model. “It’s hard being first to market, so I give credit where credit is due,” he says of the skills coaching platforms that came before. “But the reason most of our competitors have failed is because the model was inherently flawed.” You can’t treat coaches like products on a shelf, Fabian explains–taking a cut of their profits, ignoring whether or not they can earn a living at their trade, catering to the consumer but not the consultant. With competitors�� tools, coaches would often connect with students on the platform, and then ask them to pay via Venmo or PayPal for future sessions to bypass the company’s commission. After all, once a coach connected with a client, the company served little purpose.

Fabian didn’t want to build a platform that wasn’t truly aligned with the coaches’ interests. In a very human way, Fabian *knew *these top gamers. He’d shared drinks with them. He’d had good conversations with them. And he was concerned with their success. “I wanted to make sure that any decision we made, I could sit down across from our coaches and say, ‘Here’s why we did it,’ and not feel like the bad guy for saying it,” he says. “That led to Metafy’s approach where the coaches *are* our customers.”Today, coaches use Metafy to house their entire business–and even market it organically. Many link to their Metafy profile from their Twitter accounts, YouTube channels, or Twitch streams. In fact, the company has hardly marketed at all to students who sign up for coaching sessions (yet), but rather the gamers who teach on the platform drive growth. 

Fabian credits his stellar coaches with the platform’s surge of growth in 2021. In [**September**](https://medium.com/metafy/metafys-new-look-10c38ef017eb), Metafy reported that the gamers on the platform had cleared $100,000+. Just a year prior, they pulled in $1,206. Today, four coaches on the platform have quit their jobs to teach gaming full-time. “It’s humbling, shocking, and terrifying–you know, it’s a lot of feelings,” he says. “But it is very cool nonetheless.” *Rapid Growth as a Company and Founder*Metafy is in a stage of hyper-growth, which is its own form of trial by fire. Now a group of 36, Fabian began creating his leadership team in earnest over the past year–brilliant folks who spearhead teams like growth, engineering, and product management. “I have a really clear vision for Metafy,” he says. “And when I started to build the leadership team that I thought we needed to accomplish that vision, I started seeing, ‘Wow, being a leader of leaders is really challenging,’” he says. 

In his words, he’s learned to “eat his humble pie” and accept that he is not always right about every company decision. Fabian admits he is still learning to think more like a CEO and less like a Founder. “I always thought founders were just CEOs,” he says. “And it’s been a rocky transition. I think it’s important to say that, not just because it’s true, but because I think it’s rocky for everyone in this role.” 

Founders have a say in everything, effectively running a dictatorship, says Fabian. CEOs are running a more disciplined operation where people–often more skilled than the founder in their specialty–have a vote and an impact. “When your team grows, you are sharing a piece of your dream with every person on the team,” he says. “And you hope they are good stewards of the dream–but they can’t be good stewards if they don’t have the autonomy to do so.” 

To be a good Founder-CEO, and have longevity in the role, you have to allow your company to become a democracy, Fabian insists. “Your voice changes to represent the core tenants and mission of your company,” he says. “That’s how you ensure your presence is in the room even when you’re not in the room.” 

*To learn more about Metafy’s coaches, or to schedule a session, visit **metafy.gg**.*`,
  },
  {
    slug: "rebuilding-america-by-empowering-main-street-usa",
    title: "Rebuilding America by Empowering Main Street, USA",
    date: "December 16, 2021",
    year: 2021,
    author: "Brian O'Malley",
    authorTitle: "Board Partner",
    category: "Theses",
    company: "Faire, Topline Pro",
    excerpt: `✨ Insights included in this report were gathered via the Forerunner Consumer Braintrust, a diverse group of forward-thinking consumers weighing in on what’s now and what’s next. Click this link to...`,
    content: `*✨ Insights included in this report were gathered via the Forerunner Consumer Braintrust, a diverse group of forward-thinking consumers weighing in on what’s now and what’s next. Click **this link** to join the collective for early access to our reporting, as well as exclusive content, events, and giveaways for members. *✨While much has been written about Covid-19’s impact on commerce, shifting online at record pace, there’s been less conversation about the many consumers clamoring for ways to keep their dollars local. With [**68 cents of every dollar**](https://blog.mass.gov/blog/consumer-advice/think-local-7-reasons-why-supporting-local-business-is-good-for-your-community/)spent at small businesses staying in the local economy, this behavior has the potential to build some massive businesses while making an outsized impact on our communities. At Forerunner, we’ve been inspired by the founders innovating in this category. However, with 65% of U.S. shopping budgets still spent in-store, and almost 50% of businesses likely to change hands with [**Boomers rapidly retiring**](https://www.cnbc.com/2019/12/10/as-baby-boomers-retire-main-street-could-face-a-tsunami-of-change.html), we believe we’re at the tip of the iceberg, with numerous opportunities for innovation and empowerment waiting just below the surface.To better understand sentiment shifts, we wanted to learn from a mixture of local shoppers and the owners of the businesses they support. We leveraged our in-house [**Braintrust Panel**](https://www.surveymonkey.com/r/7RTVB2B) to understand the shopping preferences of early-adopters across demographics, categories and geography. We also polled local store owners to hear how they view the opportunity and underlying challenges, and consumers from the general population. ##### Local Businesses Finally Embracing Technology

When I first entered VC, it was practically forbidden to look at businesses serving the SMB sector. Sales were slow and churn was high. But, this wasn’t due to a lack of demand. Technology was sold as a cost center. Whether it was advertising or a software-based solution, the message was the same: Buy it and hopefully it works. All the risk was on the local merchant.

When cloud software dropped the barrier of adoption and business models lined up with local merchant success, this all changed. Value propositions need to be direct and crystal-clear. Are you unlocking revenue? Are you financing growth? Or are you saving costs? The best companies help on multiple dimensions here, but rarely start with multiple value propositions.

As an early adopter of technology, restaurants provide a unique test bed for this thesis. Household names like OpenTable and Yelp achieved massive local market share. But, while they were adopted, they weren’t necessarily embraced. This friction is evident in the valuations of the industry’s incumbent-leaders. Despite serving a $1 trillion market, OpenTable—the leader by a long shot in the table management and reservation space—was only purchased by Booking for $2.6 billion. Yelp hasn’t fared much better, trading at a market cap of $2.9 billion. Valuable companies, but discounted due to the conflict between them and their customers. These businesses suffered because they extracted tolls, but didn’t increase the size of the pie. 

When revenue models line up with customer success, new opportunities emerge to serve SMBs. Groupon was one of the first to do this. By providing actual customers versus potential leads, it became the fastest company ever to reach $1 billion in revenue and ballooned to a $30 billion valuation. However, that alignment faltered when sales reps were incentivized to sell as many customers as possible, flooding local merchants with discount customers when the restaurants were already full.

On the flip side, [**Toast**](https://pos.toasttab.com/) grew to a $5 billion valuation over eight years by providing a best-in-class cloud-based POS system for restaurants. It remained a cost center until the pandemic hit and the team rapidly shifted the value prop to be customer-facing. The software went from a beautiful product to a business essential. In the ensuing 18 months, the value of the business exploded to almost $30 billion. It would seem like restaurants have quite an appetite for technology after all. It just needs to be served up the right way. 

##### Consumers Want to Shop Local

After the Great Recession pitted Wall Street against Main Street, we became inundated with photos of our favorite mall, now shuttered and covered in weeds. Century-old names like Sears and J.C. Penney were filing for Bankruptcy while newer specialty stores like Sports Authority and Toys-R-Us weren’t faring much better. Low price outlets like Wal-Mart won on the price game, while Amazon won on the convenience game. It turns out having undifferentiated selection, poor customer service, and big, soulless facades wasn’t too inspiring to consumers. 

While those stores were shutting down, local favorites and specialty retailers were actually popping back up again. This reality ran counter to the prevailing wisdom in 2017 when the startup world was focused on a sea of gig workers, but it was core to the early pitch at [**Faire**](https://www.faire.com/). The founders’ time at Square had taught them something interesting: In the wake of big-box retailers filing for bankruptcy, small businesses were starting to flourish again. Since Borders shut down in 2008, the number of independent bookstores in the United States has doubled; removing the apex predator enabled local stores to thrive. There are many compelling reasons to shop local, like seeing products live before buying or the convenience of a quick exchange. But perhaps most encouraging, the impact of Covid prompted consumers to rally around their favorite local establishments. Organizations like [**Frontline Foods**](https://www.instagram.com/frontlinefoodssf/?hl=en) allowed users to raise money for healthcare workers to spend at nearby restaurants. Lunchbox [**spearheaded a national map**](https://helpmainstreet.com/), detailing SMBs where consumers could keep their dollars local. During the social justice movements of the past year, many writers helped identify [**AAPI**](https://nymag.com/strategist/article/aapi-owned-businesses-support-shop.html') and [**Black-owned**](https://nymag.com/strategist/article/black-owned-businesses-support-shop.html) small businesses to support. Our research found that 80% of consumers feel a greater responsibility to support local stores. “I know the money is going back into my community, and I know their employees are fairly compensated,” Victoria Maynard said of her favorite local options in our latest [**Forerunner Consumer Braintrust**](https://www.surveymonkey.com/r/7RTVB2B) survey. Not only do people prefer to shop local, 60% of people are willing to spend more for equal products and 65% of people are willing to wait longer to get their goods in the process (after all, do we really *need* everything next-day?).##### But, Does Behavior Match the Intent?

While this ambition is great, let me ask you a question: How much of your holiday shopping so far has been local? Surveys ultimately measure intent; aspirational actions sometimes fall short in reality. The same Braintrust respondents who were excited about shopping locally faced this challenge. Only 35% of people actually increased their local shopping behavior despite their best intentions. And, as Covid restrictions have eased, many people have reverted back to their previous habits built on convenience and low prices.

As April Underwood noted in her [**post**](https://nearby.medium.com/farewell-and-thank-you-from-nearby-bc7943d22afc) discussing her decision to shut down Nearby, a shopping and delivery platform for local retail, “As we’ve approached our second holiday season at Nearby, I’ve taken stock...that the need for what we’re building has waned and it’s time for us to bow out.” If a team as talented and well-capitalized as Nearby saw waning demand, there must be a larger issue at hand.As much as people want to shop online from their favorite local stores, the experience needs to cater to the unique nature of local businesses for it to work. Online pages have been optimized over the past two decades to highlight the strength of online stores: breadth, speed, and structure. The expectation should be that Amazon will win at this game, even if people “want” to buy locally. “Good Faith” isn’t a sustainable strategy. Trying to compete on these same dimensions as local stores is a tall order, so startups need to first help local businesses cater to their existing strengths before also trying to help them catch up where they’re already behind. 

##### Opportunity

Local businesses have inherent advantages because they are:

###### Tactile:

Consumers want to see products live. While this was the #1 reason consumers preferred local shopping (39%), merchants actually saw this as their biggest weakness: 45% of store owners felt that they were at a disadvantage to larger retailers when it came to showcasing products. 

While Warby Parker offers a “home try-on” option, their [**recent IPO**](https://forerunnerventures.com/our-perspectives/a-generation-defining-company-congratulations-warby-parker) was supercharged by its in-store experience driving its growth in offline retail. While shopping in person, you’ll never have the issue I recently had ordering ice cream bowls online, only to have them show up and be one inch in diameter. You can buy soccer cleats online, but there is nothing like going to a specialty store, trying them on, and kicking a ball around.###### Real-Time: 

Some 75% of shopkeepers thought that their proactive customer service was bringing people into the store, when only 15% of consumers said that they desired a salesperson to help them while shopping. Almost twice as many people said that salespeople actually made them less comfortable buying. So, why the disconnect?

Great service is not defined by an awkward, “Can I help you find something?” but instead by a friendly face and knowledgeable assistance *when needed*. This sentiment was reflected in Forerunner’s [**Inaugural ‘State of Service’ report**](https://www.forerunnerventures.com/our-perspectives/forerunner-inaugural-state-of-service-report), where consumers indicated best-in-class customer service was more about policies and availability of help rather than constant personal engagement. Questions can be answered as they come up. *“Will this shirt shrink?” “How quickly does this paint dry?” “What baseball bat is legal in the local Little League?”* Unlike many big-box stores, the staff has real expertise that translates into a more confident shopping experience. That’s what customer service is really about, isn’t it? Store owners and reps fade into the background when experiences are going as planned, but become available and ready when something is needed. ###### Human-Centric: 

Speaking of the staff, local shops are people-first. “With more and more online, and the pandemic, personal connection really suffers in a way that online can supplement but never truly replace,” says the Braintrust’s Jesse Reichenstein. “It sounds strange, but the connection with a local or small business feels more like being in a communal tribe, while being brand-loyal to a big retailer or online store often feels more like you’re all at the same party of higher-ideals while not necessarily having direct ties with each other.”

Selection is curated for the local market while advice can be catered to the customer. *“Does this color look good with my skin tone?” “If my feet pronate, which shoes are best for playing on turf?” “What dress would look best for a dinner at my favorite restaurant in town?” *As Meredith Parsons put it, “The reviews in online marketplaces have become a bit of a sham. When shopping locally, I can talk with the merchant who chose to carry the product, get recommendations, and see quality before purchasing.” ##### Where Forerunner Sees Opportunity

The old adage that SMBs spend like consumers, but make decisions like enterprises is still true today. So, value propositions need to be “no-brainers.” Through this research, we’ve determined four categories we believe are ripe for disruption with untapped potential to empower merchants.

##### 1. Solve an Existing Problem

SMB owners don’t wake up in the morning wanting to adopt new technology, but they do go to sleep every night worrying about their business. This is why it is critical to enter the door with a pitch that is too hard to ignore. This usually starts with low-risk access to new customers, because what business doesn’t want to grow? 

The restaurant industry is flush with solutions that help generate business. We’re all familiar with delivery providers like [**DoorDash**](https://www.doordash.com/), [**Postmates**](https://postmates.com/) and [**UberEats**](https://www.ubereats.com/), but there are a host of more niche solutions available, as well. Reservation services, like [**Tock**](https://www.exploretock.com/), help fancy restaurants maximize the value of their limited reservations while speciality providers, like [**Slice**](https://slicelife.com/), bring local pizzerias online. [**Taste**](https://www.gettaste.com/) brings New York favorites to the burbs, while [**Goldbelly**](https://www.goldbelly.com/) helps local restaurants expand their footprint nationwide. For those who want to sample goods on a repeated basis, [**Table22**](https://table22.com/) does something similar as a subscription offering.While there is clearly demand, the noise makes it difficult for any individual company to break out. When [**DoorDash **](https://www.doordash.com/)launched in 2014, they deliberately limited their hours and focused on local restaurants in Palo Alto. Unlike [**Postmates**](https://postmates.com/), which started in major metros and had a much more open-ended offering, this focus helped DoorDash become more meaningful to a smaller set of merchants. A year after going live, they were driving over 30% of Oren’s Hummus’ total business building the trust and reliance to more deeply integrate with operations. This focus gave them leverage to do more.Outside of restaurants, there is less noise, but it is more difficult to show up generating customers. [**Faire**](https://www.faire.com/) realized that specialty stores’ biggest challenge was having fresh, inspiring products to sell. But merchants weren’t willing to take the risk on new items, so Faire decided to take the inventory risk of “free returns.” If an item didn’t sell, they’d take it back. While this puts the risk squarely on Faire’s back, there was no better way to build merchant trust and start the flywheel. Over time, as the data improved, Faire’s ability to predict sell-through only got better, opening additional avenues for the business to become a strategic partner. ##### 2. Bring the Best of the Web Offline

Online ordering has potential to be a massive unlock for local businesses. As our data suggests, 30% of consumers chose to shop Amazon over a local retailer because they could “get items delivered quickly to their home.” 25% said it was harder to find the items they want in advance, and another 25% said that it was too time-consuming or hard on them not to have an option for home delivery. 

A 
full half of customers would have a more favorable opinion of local shopping if online ordering opened up. However, when asked about this, most merchants didn’t realize consumers were concerned about getting products delivered to their homes. Only 13% of SMB owners thought this was a challenge.

Perhaps merchants aren’t focused on it because there isn’t an easy fix. Operating an online store requires dedicated resources which are hard to allocate with marginal sales volume. So, why start out with a comprehensive online catalogue when customers are turning to you because of your people, your proximity, and your perspective?

Personal shopping platform, [**Dumpling**](https://dumpling.us/), launched with an elaborate catalog of items to help shoppers facilitate online transactions. But, after dozens of interviews, they realized that the magic of the platform wasn’t the catalogue, but the one-to-one experience of chat where the personal touch of the shoppers shined. So, they moved the shopping experience into the text stream, enabling that human connection to permeate the entire experience. Not surprisingly, the new-client conversion rate jumped by 34%.Currently, relationships with SMBs are stuck in the physical world—or, at best, some iMessage chat stream. The best store associates remember the personal preferences of their top clients, but there is no scalable [**Front**](https://front.com/)- or [**Attentive**](https://www.attentivemobile.com/)-like solution here. Heck, there isn’t even a [**Mailchimp**](https://mailchimp.com/) equivalent for offline retail. A strong digital tool could empower individual store associates to get to know their clients, understand their preferences, let them know when new items are in stock, and nurture a real, personal relationship. For local businesses to thrive, they need to do something more than just send a 10% off coupon on your birthday. They have the personnel, so why not make it personal?

##### 3. Bring Economies of Scale to Main Street

When shoppers stated why they purchase from Amazon or a big-box retailer, the number one reason (40% for each) was having a wide variety of products from which to choose. When inventory is paid out-of-pocket and limited to four walls, it becomes a meaningful hurdle for most SMBs to try and compete with larger brands on selection. 

However, a centralized warehouse solution split amongst independent stores could empower local merchants to offer far more inventory than they can each realistically carry in stores. This would help local retailers avoid turning customers away when they’re out of stock, a compounding problem with today’s supply chain challenges. Similar to many chain specialty stores like J. Crew or Vineyard Vines, local stores could still sell product and have it shipped directly to the customer, but they could keep a smaller inventory of specific SKUs on hand, freeing up space and capital to offer more options to customers. 

Wholesale marketplace, [**Joor**](https://www.joor.com/), with 13,000 brands already on the platform, is a natural touchpoint for boutiques to collaborate. The hub-and-spoke model has already proven powerful for grocery delivery. Billions of dollars of investment have gone into powering dark stores. So what about the established ones already on street corners across the country? Think about being able to pick up *all* your consumables at the local bodega versus just a few essentials. If something works in the grocery market with perishable items and notoriously low margins, it should work elsewhere.Markets that don’t already have digital inventory could take a page from the go-to-market strategy of [**Farfetch**](https://www.farfetch.com/shopping/women/items.aspx), photographing merchandise of common inventory across stores. Great photos have become table stakes for online commerce, and can only be done through scale and as a loss leader. This player could also help with reviews — something 20% of Amazon shoppers said was an important component of their purchasing decisions — by aggregating content across local shops. People don’t care if the best review on Amazon is from a person in a different state, and it’s unlikely they’d care if it was from a partner store either.##### 4. Finance Growth with New Ownership Models

Even with all these tools, many local businesses are too cash-strapped to innovate. The most successful ones have barely tapped into new marketing channels, despite clear evidence of ROI. Of the 65 million local businesses that have a Facebook page, only [**4 million take advantage of Facebook**](https://www.fundera.com/resources/local-shopping-statistics) advertising products.Why is it that consumers can leverage payment plans like [**Affirm**](https://www.affirm.com/), SaaS companies can take advantage of [**Pipe **](https://pipe.com/)securitization, and online merchants can utilize [**Ampla**](https://www.getampla.com/) or [**Clearco**](https://clear.co/), but the vast majority of offline merchants still need to walk into a bank branch to get a loan? Square has done an amazing job with [**Square Capital,**](https://squareup.com/us/en/legal/capital/capital) but that only applies if you use Square for processing. This applies to a fraction of merchants and was only possible as an add-on to an established business. Historically, a good way to finance growth locally is to [**franchise**](https://www.franchise.org/faqs/basics/what-is-a-franchise). In fact, 95% of McDonald’s locations globally are franchised, and ACE Hardware, ExxonMobile, and Century21 are good examples of franchises outside the food category. In our research, 27% of all shop owners desired to franchise their brand — a number that was almost 50% higher among merchants in urban areas. This statistic stands in direct contrast to most digitally-native businesses that either own their operations entirely or leverage an army of gig workers. Franchises have helped local businesses succeed by providing strategic direction, products, and marketing power. Why isn’t there an equivalent in the digital world, where the franchise offers centralized inventory management, a technology platform, and digital marketing tools? [**Hoist**](https://www.hoistup.com/) (formerly [**Main Street**](https://www.getmainstreet.com/)) has come up with an innovative model in home painting, but there are few others. Arguably, Domino’s Pizza has already embraced this transition with 70% of orders now coming through digital channels. It has paid off, too. Stock is up 14x since the chain’s mobile app launched in 2012. ##### Seeking Inspiration

At Forerunner, we believe the next wave of commerce disruption [**centers on the seller**](https://www.forerunnerventures.com/our-perspectives/the-next-revolution-in-commerce-will-be-driven-by-the-seller). Most of the conversation to date has centered around empowering new distribution online, but it is hard to ignore the opportunity right in front of us to empower Main Street USA. In this piece, we’ve largely focused on restaurants & specialty retail as early-adopters, but we believe there are innovative companies already impacting all swaths of local business from [**Podium**](https://www.podium.com/) to [**ServiceTitan**](https://www.servicetitan.com/), [**Squire**](https://getsquire.com/) to [**Solv**](https://www.solvhealth.com/).With 59 million people employed and a disproportionate amount of businesses owned by minorities, women and immigrants, there are countless additional opportunities for founders to make a massive impact in this category. Software doesn’t need to eat these local businesses; we believe it can embolden them. 

As investors, we’re inspired by the entrepreneurial spirit we’re seeing in this category. As consumers, we’re encouraged by the opportunity to fulfill an increasing amount of our needs by working with local business owners. Finally, as citizens, we’re hopeful that these trends can help bring the souls back into our local communities—following Covid, we could use an uplifting resurgence more than ever. 

**Quotes have undergone minor edits for length and clarity*`,
  },
  {
    slug: "dutch-founder-and-ceo-joe-spector-on-unlocking-the-pet-telehealth-landscape",
    title: "Dutch Founder & CEO Joe Spector on Unlocking the Pet Telehealth Landscape",
    date: "November 26, 2021",
    year: 2021,
    author: "Forerunner Ventures",
    authorTitle: "",
    category: "Investment Announcements",
    company: "Dutch",
    excerpt: `As Co-Founder of telehealth pioneer Hims & Hers, Joe Spector spent all his energy thinking about how best to grow the brand—like entering retailers like Target, or partnering with big-name stars. And...`,
    content: `As Co-Founder of telehealth pioneer Hims & Hers, Joe Spector spent all his energy thinking about how best to* grow* the brand—like entering retailers like Target, or partnering with big-name stars. And oh, Hims grew. The company made its public debut in 2021, just four years after it was founded.From the moment he realized Hims was going to be a big company—or more aptly, that it already *was*—Spector also recognized that he is an “entrepreneur at heart.” He felt at home in the earliest stages of business-building. “I love creating the universe and the uncertainty of it all,” he says. “It scares a lot of people, but I find it motivating.” While Spector wanted to stay in healthcare, he’d begun noodling on what it might look like to grow a new venture around October 2020; at the same time, he had just adopted a puppy. While he had been on the forefront of big shifts in human healthcare, Spector couldn’t help but notice that he had to do everything the antiquated way when it came to his new Corgi. Curious, he looked at the laws around veterinary telemedicine, and saw so many parallels to the regulations he’d seen while building the digital health landscape at Hims. “I just felt, *Oh my gosh.* This is a skillset I have that I can translate here,” he says. Spector was uniquely capable of leading Dutch based on his experiences in digital health, keenly interested in building a new telehealth platform from scratch, and excited by the opportunity to help people everyday—again. “What I loved about Hims was that it was mission-driven,” Spector says. “I’d love to read comments on Instagram from guys who felt more confident, or whose marriages were saved because of Hims.”

He left Hims in early 2021 to found [**Dutch**](https://www.dutch.com/), a telemedicine platform for pets. After raising a Seed round in May, Dutch has now launched in 38 states and is continuing to scale. Here’s more from Spector about what it's been like building the pet telehealth industry, as well as stepping into the role of founder-CEO for the first time.**JB: If you have a pet, you know going to the vet is rough on both the pet and the pet parent**—**even for something very minor. What problems did you notice with the experience, and how did you decide on the best approach for tackling them?**JS: When I first started, I took somewhat of a Hims-centric approach. I went condition-specific, because Hims started with two specific conditions: sex and hair. What we realized is that pets and pet healthcare are different. The first key difference is most pet parents don’t have insurance, whereas humans do, so it’s much more of a cash-pay market across a wider array of ailments. With Hims, there are only so many conditions you can target, because people will want to use insurance. With Dutch, there’s a wider array of treatable conditions, beyond just picking a few. Another behavior difference is that pets have an array of issues across a shorter period of time. They may have an ear infection one period, and a few months later they have a cut. A few months after that, they’re dealing with nutrition or obesity. It wasn’t like Hims, where a guy comes in for hair loss—he’s in, he’s out, and that’s it. Here, with Dutch, it’s more nuanced. We are currently introducing video conversations into the product more upfront, because the consumer doesn’t always know what the problem is. They know, ‘My pet just threw up,’ but there could be an array of reasons why. With Hims, it was often much more black-and-white. 

**JB: You started conceptualizing Dutch about six months into the pandemic. How do you think the timing of Covid played into how you are tackling this problem and the mechanisms you can explore? **JS: So much. First of all, at some point, we are going to go back to work and there will be a lot more pet separation anxiety. Then, in general, on the veterinary side, people are seeing all the applications of telehealth. The consumer is expecting telehealth as part of a normal clinical experience; on the veterinary side, a lot more vets are saying, “My colleagues in traditional medicine are getting to do telehealth, and I have to go to a brick-and-mortar location.” It's tough. One of the bigger shifts across so many industries is The Great Resignation. That is certainly happening with veterinarians, because in that profession, they still have to go to grad school just like doctors. They often accumulate several hundred thousand dollars of student loans, but the average vet is only making about $100,000 annually—so not nearly as much. The people making money in the vet industry are the clinic owners. Many vets are thinking, Why am I going into this brick-and-mortar location, seeing 30 to 40 cases per day, when I could be at home seeing patients? Almost 80% of vets are women, and with Covid, we know many moms had to drop out of the workforce to take care of their kids; they really are seeking flexibility and higher pay. We are getting way more organic resumes from vets to join Dutch than I ever remember at Hims, and I think it’s because even on the medical side, there's just this huge desire to do more telemedicine.

**JB: Tell us how you built the experience of Dutch. Where did you start?**JS: After being in Silicon Valley for 20 years, I wanted to build a business that focuses on culture, mission, and values at Day Zero. Or Day Negative-Ten. *[Laughs.]* Most founders that I’ve ever worked with have focused on product-market fit first, and we’ll get to the mission later. Here, we spent time even before launch deciding what we stand for and why we exist. We came up with four guiding principles, the first of which is “pets first.” That’s the prism through which we think. The second is “be the human your dog thinks you are,” and dogs think quite highly of us. The third is “agile like a cat,” which means we want you to move really fast but not necessarily break things. And the fourth one is “creativity is our kibble.” We’re doing this for the first time, so you might have to do multiple iterations before you get it right. So, with all that in mind, we built Dutch starting with two conditions that are pretty huge. Seventy percent of dogs have some form of anxiety, which takes many forms—situational, generalized. Then a focus on dermatology, which is one of the main reasons you take your animal to a vet. Within that, there are food allergies and skin issues. We have demonstrated the ability to do derm telehealth, so why in the world can we not do this for pets? It just seemed like that could be a huge solve in terms of access and affordability. When you go to a vet, when do you leave without a $200 or $300 bill? At Dutch, it is $50, so a fraction of the price. **JB: You’re scaling quickly since launch. What are you planning to build out next?**JS: By the end of this year, Dutch will be live with 12 different conditions. We also launched in eight states originally, and by the end of the year, we’ll be launched nationally. We spent the early part of our business life setting up our network and building our own Electronic Medical Record (EMR) dashboard tool. We’ve built out the infrastructure, so come December and early next year, we will be scaling geographically and across conditions. 

**JB: I’m curious. You’re not a first-time founder, but you’re a first-time CEO with Dutch. What have you found to be different about this experience at the helm of the company?**On the industry side, the reality is that Dutch is much earlier on the scene than Hims was. When Hims came around, you already had Teladoc, and Teladoc took some of the hits in the face from the old guard. Dutch is in that 1.0 arena; there’s a giant number of vets that want to support telemedicine, but it’s in its earliest days. Change is inevitable, but there’s still a contingent of people really digging in their heels, saying telemedicine will never exist for pets. That’s ludicrous, but also surprised me. As a CEO, it’s interesting. There is a *Ted Lasso* quote that really resonated with me, but essentially, he said he’s been underestimated his whole life, and he realized it has to do with the fact that a lot of people weren’t curious enough about him. I think for me, in many ways, this role has given me a lot more confidence that I don't think I had before. Previously, I would question, *'Could I fundraise?' 'Could I lead a team?' *Most of my 20-year career has been as an individual contributor, so with Dutch, I was going from a role player to being the leader of a big company. I think I always thought I had the ability to inspire, but I never had that chance. With Dutch, it’s been great to prove it out.*For more information or to schedule a vet appointment, visit **dutch.com**.*`,
  },
  {
    slug: "enabling-the-entrepreneur-next-door-introducing-traveljoy-and-fora",
    title: "Enabling The Entrepreneur Next Door; Introducing TravelJoy and Fora",
    date: "November 18, 2021",
    year: 2021,
    author: "Brian O'Malley",
    authorTitle: "Board Partner",
    category: "Investment Announcements",
    company: "Fora, TravelJoy",
    excerpt: `At Forerunner, we’re passionate about the empowerment economy, especially opportunities that help marginalized demographics enter the workforce. We love businesses that leverage a technology backbone...`,
    content: `At Forerunner, we’re passionate about the empowerment economy, especially opportunities that help marginalized demographics enter the workforce. We love businesses that leverage a technology backbone to streamline previously manual processes, and we’re focused on a future post-COVID world, where people are once again able to explore and travel. 

So, when the opportunity emerged to back two distinct businesses reimagining the intersection of all of these trends, we jumped at the chance to help these teams rethink the travel agent space—especially in a way that enables everyday entrepreneurs.

##### The Return of the Agent

Wait, travel agents? Seriously? Yes, that’s right. Travel agencies present a $100B market opportunity in the U.S., which is continuing to grow. As consumers return to travel, putting together a unique experience with the backdrop of COVID restrictions has become increasingly difficult, leading people to seek help in the process. Some travel agents report [**35% business growth**](https://www.nytimes.com/2021/04/14/travel/summer-vacation-travel-agents.html) compared to 2019 levels, with 50% of inbound coming from new customers. Our research at Forerunner backs this trend toward wanderlust: Aside from investing/saving, travel is the category where most consumers want to use their discretionary dollars. In a recent survey, we asked respondents: “If you had extra money today, how would you want to spend it?” Some 26% say travel, which was only bested by putting money away at 32%. 

The only problem is that, when booking a trip today, consumers are often cobbling together information from a variety of sources; on average, 83% of consumers are checking three or more sites before booking. Travel agents originally emerged to facilitate these transactions. Now, with more options than ever, they also assist with the paradox of choice. 

While many people understand that using an agent can help simplify the process of booking and planning travel, few understand that agents also can unlock deals not accessible on any website. Large OTAs have negotiated Best Rate Guarantees, prohibiting hotels' own websites from offering special deals. However, agencies are able to negotiate special rates that give travelers access to free amenities, early and late arrival, and free room upgrades. Expert assistance and unique travel deals have only previously been held back by technology; you’ve needed to be proficient with a fax machine. Until now.

##### Introducing TravelJoy

Our first investment, [**TravelJoy**](https://traveljoy.com/), was founded to take the headache out of operating a travel business. Dayo Esho witnessed these challenges firsthand: His mother, an agent herself, spent nights and weekends trying to stay ahead of client requests. Dayo previously co-founded and led Product at RapLeaf / LiveRamp, where he saw the power of an integrated tech stack and unified data architecture, and he teamed up with his longtime colleague from RapLeaf / LiveRamp, Chris Kline, to start TravelJoy.The company offers modern workflow and payments software to let travel entrepreneurs spend less time on “the process” and more time making sure people have an amazing trip. Travel is a notoriously expensive category to acquire customers, but TravelJoy’s product-led growth has helped scale demand with a capital-efficient approach. In the past year, TravelJoy has grown Daily Active Agents by 3x, trips created by 5x and GMV by 6x to a $100mm+ volume.

##### Introducing Fora Travel

While TravelJoy has focused on the infrastructure enabling agents to be more successful, [**Fora**](https://www.foratravel.com/) is reinventing the composition of a travel agency, designed around the hobbyist-entrepreneur looking for flexible, engaging work. The company aims to engage women especially, such as the 5.6 million stay-at-home moms in the U.S. who are seeking full- or part-time work arrangements. Millions of women [**dropped out of the labor force**](https://fortune.com/2021/02/13/covid-19-women-workforce-unemployment-gender-gap-recovery/) during the pandemic, in large part to be with children that were suddenly at home full-time. These numbers are not set to revert to pre-pandemic levels until 2024, two full years after men are projected to recover from pandemic job losses. Co-founder Henley Vazquez, who most recently ran her own boutique travel agency, Passported, and co-founder Evan Frank, formerly Co-founder of onefinestay, joined forces to enable anyone with a passion for travel to launch their own business. Fora sits nicely among the many possibilities for flexible, remote work in 2021, and will provide its emerging entrepreneurs all the components needed to start a travel business. This includes destination content creation, profile websites, community, and client perks historically only offered to industry insiders. In just two months post-launch, Fora has booked over $1 million in travel, with their top advisor representing ⅕ of total volume.

##### The Entrepreneur Next Door

At Forerunner, we’re firm believers that the next evolution in commerce will be driven by tools empowering [**anyone to become a seller**](https://www.forerunnerventures.com/our-perspectives/the-next-revolution-in-commerce-will-be-driven-by-the-seller). Much of this conversation is dominated by the emergence of “The Creator,” but we find inspiration in the passionate Entrepreneur Next Door. Echoing our past investments in companies like [**Curated**](https://www.forerunnerventures.com/our-perspectives/redefining-the-role-of-the-salesperson-our-latest-and-third-round-investment) and [**Loupe**](https://www.forerunnerventures.com/our-perspectives/transforming-a-heritage-hobby-for-a-new-age-our-investment-in-loupe), both TravelJoy and Fora empower these Entrepreneurs Next Door to take their passion and turn it into a sustainable business. The end customer benefits through unique experiences, unprecedented deals, and the surprise of an unexpected room upgrade, while the entrepreneurs get to monetize what they love. When the buyer and seller both win, that’s a business we at Forerunner can get behind. *For more information on TravelJoy, visit **traveljoy.com**. For more details on Fora, please visit **foratravel.com**. *`,
  },
  {
    slug: "commerce-potential-is-everywhere-introducing-canal",
    title: "Commerce Potential is Everywhere; Introducing Canal",
    date: "October 4, 2021",
    year: 2021,
    author: "Brian O'Malley",
    authorTitle: "Board Partner",
    category: "Investment Announcements",
    company: "Canal",
    excerpt: `We spend a lot of time online these days. The average American spent 3.5 hours per day on social media alone during 2020, amounting to 1300 hours per person last year. In addition to time, we also...`,
    content: `We spend a lot of time online these days. The average American spent [**3.5 hours per day**](https://www.forbes.com/sites/petersuciu/2021/06/24/americans-spent-more-than-1300-hours-on-social-media/?sh=218f4cf32547) on social media alone during 2020, amounting to 1300 hours per person last year. In addition to time, we also spend more of our money online than ever before. The share of global retail sales arising from e-commerce [**increased by $1.1 trillion**](https://news.un.org/en/story/2021/05/1091182) in 2020—accounting for 19 percent of retail spend, up from 16 percent the year prior—supercharged by a pandemic that forced consumers to embrace and discover more ways to buy online. Despite this boom, customer acquisition is increasingly difficult in the current commerce ecosystem. Throughout our portfolio, we’ve been hearing about rising CPA on Facebook and the challenges resulting from Apple's new privacy rules, not to mention increased competition from an ever-expanding number of brands. If you’re facing something similar, you’re not alone.

The opportunity to transact is increasingly massive, as people talk about products more than ever before on social channels like TikTok, Instagram, and YouTube. Unfortunately, the current methods of monetization—namely, affiliate programs—are a leftover remnant of the early internet. What these programs give in terms of ease of participation, they lack in effectiveness, converting at roughly ⅓ generic site traffic. Conversion should actually be higher, as the intent is much higher than a generic site visit.

It makes sense when you think about the steps involved: An influencer or curator needs to provide their followers with a unique code, which users need to remember as they leave the app. They then need to open another site on a separate browser to shop, pick out the right item, punch in the original affiliate code, and check out… if the code even works anymore. It’s surprising that any purchases happen at all.

[**Canal**](https://shopcanal.com/) is solving these problems in a way that benefits the brand, the curator, and the buyer. The team is building a platform to enable distributed checkout, so people can buy products wherever they discover them—whether that’s from a makeup artist tutorial on YouTube, a travel newsletter hosted on Substack, or another complementary brand looking to cross-sell products. Similar to how Plaid opened up the world of next-generation digital finance applications by making connections seamless, Canal is looking to do the same for commerce.With a few clicks and a brand’s approval, anyone can be up and selling. This surface-level simplicity highlights the magic of the Canal platform behind the scenes. Not only does the catalog need to be updated, but the underlying supply chain needs to be fluid in order to drop ship products from multiple suppliers all connected through one checkout flow. In a landscape that’s saturated with expensive and unreliable distribution channels, Canal unlocks trusted new channels for brands, generates new selling experiences for curators, and allows consumers to discover and buy products directly from platforms they already use.

Ultimately, the problem with the way we currently transact is one of integration & automation, which is why we believe this team is uniquely qualified to address it. Canal's product team is led respectively by CTO Clay Schubiner and CPO Liam Kinney; hailing from Canvas and Airbnb, these two led efforts in integration and AI respectively, two skills critical to the task here. CEO Bennett Carroccio joins Canal from our co-investor, a16z, where he worked on marketplace investments during his four-year tenure. With a strong background in business development at startups before he joined the VC, he understands the delicate balance of supply and demand necessary to this new model of commerce. 

At Forerunner, we know [**sellers are powering**](https://www.forerunnerventures.com/our-perspectives/the-next-revolution-in-commerce-will-be-driven-by-the-seller) the future of commerce, but they need better tools to allow their followers to transact on the same platforms they frequent for inspiration. Canal is building a more intuitive digital future, and we’re eager to see the novel experiences they empower in this new world of distributed commerce. *For more information, visit **shopcanal.com**. For open roles at Canal, see **here**. *`,
  },
  {
    slug: "a-generation-defining-company-congratulations-warby-parker",
    title: "A Generation-Defining Company; Congratulations, Warby Parker",
    date: "September 29, 2021",
    year: 2021,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: "Investment Announcements",
    company: "Warby Parker",
    excerpt: `I first met Dave Gilboa at a Peet’s Coffee on Sansome Street in San Francisco in the winter of 2010. He and three classmates—Neil Blumenthal, Jeff Raider, and Andy Hunt—were working on an idea for a...`,
    content: `I first met Dave Gilboa at a Peet’s Coffee on Sansome Street in San Francisco in the winter of 2010. He and three classmates—Neil Blumenthal, Jeff Raider, and Andy Hunt—were working on an idea for a company in connection with a business school project. Over a cup of coffee, Dave pitched me a whole story arc around the eyeglass industry; opaque, monopolistic, with drab incumbents, the industry was broken and, for customers, a source of dread instead of joy. 

Dave and Neil were convinced they could create an optical company for the modern consumer. To reach more customers and make glasses accessible, it would need to be digital-first. To ensure consumers found a pair of frames that looked good on them, it would (initially) need to involve a groundbreaking home try-on program. 

I’m not going to lie, at first I was overwhelmed by the business model. Dave and Neil were planning to design glasses in-house, produce and finance inventory, carry enough stock to satisfy a range of consumer desires, send out frames to customers for a week at a time to “try on,” usher those frames back to a warehouse, and work with different prescriptions. This seemed both logistically and financially challenging. But in conversations over the course of the next six months, I was consistently blown away by the founders at the center of the business.

I don’t recall the particular challenges they solved for, but rather the way Neil and Dave solved problems. They would run small tests, generate data, note feedback, and improve operations. Over and over, they demonstrated the rarefied ability to operate, learn, and improve plans in real time. They were such deliberate operators, and such good people—still best friends, with a symbiotic co-CEO relationship that’s almost unheard of among startup founders—I couldn’t help but want to be on their team, writing Warby Parker one of my earliest angel-investment checks.

Those first six months have come to define how Neil and Dave have led and operated for the last decade. They are incredible company builders: maniacally focused on consumer experience, thorough in their understanding of a complex market, deliberate in every move they make. I could elaborate on the team’s many milestones, or the business advantages they've unlocked that will propel continued success, but as I think of Neil and Dave, what’s perhaps most powerful is their unwavering commitment to building a world-class company culture and iconic brand. 

Walking the line between practical and emotional, Warby Parker has struck a chord with its intentional brand of
 cool. Not cool in an irreverent or indifferent sort of way; cool in the way that it's cool to read a book, be thoughtful, or be kind. Instead of glasses culminating in a ‘drat, I have to wear glasses’ sentiment like they did when I was a kid, Warby Parker made it cool to wear glasses. In fact, they made people *want *to wear glasses, with the brand’s signature style residing smack dab in the center of their face. This past week, as we were discussing Warby’s impending IPO as a team, a few things stood out. First, the brand has reimagined the way we buy glasses as effortless. Several Forerunner team members recalled their own magical experiences with the brand: trying on glasses virtually, and chatting with a customer service rep live; walking into a store and being inspired to, not just replace a pair of glasses, but buy two new pairs; even coveting those glasses enough to buy them without a prescription. Second, the company has blazed a trail for entrants across other traditional categories, with brands coming to be known as the “Warby Parker of X.” To us, this means turning a category on its head by upleveling all aspects of customer experience, business model, and company culture. Finally, with a solid foundation in place, the company is just getting started.

Despite the ubiquitousness of the brand, Warby estimates it has served less than two percent of the optical market with glasses and contact lenses. As the team implements a strong brick-and-mortar retail presence to match its original digital strategy, there is every reason to believe this company will continue to lead the way in its industry, both growing its market share and the size of the category at large. 

IPOs are always exciting, uncharted territory for first-time founders, with increased scrutiny and higher stakes. But in this new challenge, if 10 years of consistent out-performance is any indicator, I have every confidence in continued success. It’s been incredible to witness Neil and Dave’s journey, transforming their idea into more than a company. Warby Parker has become an emblem of the modern, consumer-first brand, and Forerunner is grateful to have witnessed their success from the beginning. 

Congratulations to Neil, Dave, and the whole Warby Parker team. The future is in focus, and it's very bright. 

*For more information, visit **warbyparker.com**.*`,
  },
  {
    slug: "how-the-yes-founder-and-ceo-julie-bornstein-became-the-queen-of-e-commerce",
    title: "Julie Bornstein: The Queen of E-Commerce",
    date: "September 25, 2021",
    year: 2021,
    author: "Forerunner Ventures",
    authorTitle: "",
    category: "Investment Announcements",
    company: "The Yes",
    excerpt: `Julie Bornstein, Founder and CEO of THE YES, is a pioneer of the e-commerce era. After working in politics, nonprofits and fashion, she found her way to investment banking in the late 1990s. Spoiler...`,
    content: `Julie Bornstein, Founder and CEO of THE YES, is a pioneer of the e-commerce era. After working in politics, nonprofits and fashion, she found her way to investment banking in the late 1990s. Spoiler alert: She didn’t like banking, but the career was a gateway to the new world of commerce. “I was working on the IPO of Bebe and the sale of Seattle’s Best Coffee to AFC, sitting across the table from these management teams, and I thought, ‘That’s what I want to do; I want to be on the retail side of business,’”' she says. At the very same time, a little startup that would shake up the commerce world was only just emerging. “The day that Amazon went live, I remember exactly where I was sitting when my brain exploded,” she says. “I thought, ‘If you can do this for books, you can do this for fashion.’” A fashion devotee herself, Bornstein could not wait to join the next evolution of shopping. She hustled her way into business development, landing a job at Starbucks. After two years at the coffee giant, Bornstein convinced Nordstrom.com CEO Dan Nordstrom to hire her. Full of ideas, she wanted to reimagine the retailer’s online presence; during her tenure from 2000 to 2005, sales soared from $10M to $350M per year.

##### From Urban Outfitters to Sephora to Stitch Fix

Bornstein kept evolving along with the capabilities of technology. She was the Head of E-Commerce at Urban Outfitters, and CMO and Chief Digital Officer of Sephora, always “advocating for the importance of the digital business,” she says. After Nordstrom, UO, and Sephora, Bornstein had seemingly done everything but join a digitally-native startup when Katrina Lake asked her to join Stitch Fix as COO in 2015. “I decided, I'll either stay and run this company when Katrina decides to leave, or it will really give me the experience that I need and want if I’m going to start my own business,” she says. She ended up falling in love with the ability to move fast and innovate. “I loved the pace, working with the investors, and being able to start from scratch building things the right way." Bornstein was acquainted with e-commerce platforms, but Stitch Fix took retail tech a step further. “The added layer was working with the data science team to see how they were building these models to learn about the user,” she says. She saw a unique opportunity for THE YES to serve a segment of the market spending a disproportionate amount of their wallet on fashion. “Stitch Fix was a great training ground, because I learned a lot of things that I would do differently,” says Bornstein. For instance, Stitch Fix had separate teams for data science and engineering, but building a real-time experience and model for shoppers really required a collaborative combination of both. “Our engineers needed to be machine-learning engineers, who are building these things into the customer experience,” she says. As she was leaving Stitch Fix, Bornstein was being recruited by several big retailers to be the CEO. But after decades in and around e-commerce, she’d seen it all: the inefficiencies of searching for the exact right product on a traditional platform, the problem with the collaborative filtering used by giants like Amazon, the drawbacks of legacy tech and talent. “I just realized it would be better to start from scratch than to build [THE YES] off the back of a bigger business.”

##### Saying YES to a New Idea for Ecommerce

Bornstein had a vision to deeply understand the entire apparel category, taking into account the nuance of what a consumer might like—a small puff sleeve versus an exaggerated puff sleeve, for instance. “We needed a system to understand all the dimensions of a product, so that as we learn about the user, that matchmaking can happen,” she says. “We spent two years developing the most extensive taxonomy there is. We are building scalable systems that are highly intelligent to adapt to your shopping." Bornstein first toyed with the idea of starting a company following her tenure at Sephora. “But I talked to an investor friend of mine, who told me I was too old to start a business,” she says. “He said, ‘You need to be young and scrappy and hungry.’ And I got in my head about that, though I later decided, ‘I may not have youth, but I have so much experience. I have seen so many things; my pattern recognition of problems is so strong.’” Launching a startup is super-scary, she says, but her focus and passion for the space made her so well-suited to start her own business. “If anyone was going to start a technology and AI-based fashion business, it’s me,” she says. At heart, Bornstein is the YES consumer: fashion-forward, brand savvy, knows what she likes. She also loves introducing others to just the right bag or perfect pair of shoes. “I’ve always loved shopping for people,” she says, mentioning she just found her sister the perfect navy heel. "You have to know all the brands.” THE YES was practically written in Bornstein’s DNA: “I was like, 'Why can’t I build that vehicle for the world?'” And so, she did.

*For more information, visit **theyes.com** or download **THE YES app** for iOS.*`,
  },
  {
    slug: "a-healthcare-system-that-shouldnt-need-to-exist-our-investment-in-alkeme",
    title: "A Healthcare System That Shouldn't Need to Exist; Introducing Alkeme",
    date: "September 20, 2021",
    year: 2021,
    author: "Brian O'Malley",
    authorTitle: "Board Partner",
    category: "Investment Announcements",
    company: "Alkeme",
    excerpt: `My first meeting with Ryan Mundy was memorable. In the first five minutes, it was immediately clear that he was an unstoppable force, hiding a fearless intensity behind a gentle smile and even kinder...`,
    content: `My first meeting with Ryan Mundy was memorable. In the first five minutes, it was immediately clear that he was an unstoppable force, hiding a fearless intensity behind a gentle smile and even kinder humility. In listening to his story as a world-class athlete, it was easy to create an impression of grit and tenacity that was likely to underpin anything he put his sights on. But what struck me most was an anecdote featuring his family that was at the same time deeply personal and profoundly ubiquitous. Stories about his family sounded like stories about my grandfather, my cousins, and broadly, members of my expanded community. 

As an investor, you are often challenged with the following: In what ways can you identify opportunities to serve an audience to which you do not belong? And how can you avoid treating yourself like the sample? My exchange with Ryan broke all those rules. As a Black man, I felt seen. I immediately realized that Ryan was on the mission to create that feeling for an entire community of people who have felt failed by our current healthcare system.

##### The Issue

Statistically, the Black population in the United States is at outsized risk for the vast majority of chronic diseases and health disparities. Compared to non-Hispanic Whites, African Americans are:

- 2x more likely to die from heart disease 
- 2x more likely to be diagnosed with Alzheimer’s / Dementia 
- 1.7x more likely to feel the burdens of stress
- 1.6x more likely to be diabetic
- 1.5x more likely to have high blood pressure

Despite the fact that African Americans are living longer, quality of life has continued its decline, with new analysis revealing that younger African Americans are living with or dying from conditions typically found in White Americans at older ages. Moreover, these diseases and causes of death are often due to economic and social conditions more common among Blacks than Whites.

The hard reality we have to face is that there are still cultural barriers to care, and our nation has yet to create a comprehensive and coordinated approach to patient care that is culturally sensitive and competent.

##### Introducing Alkeme

Alkeme is a new healthcare and wellness system. With its dedicated focus on Black affinity, Alkeme intends to empower the Black community to take agency over its health outcomes, starting with mental health as one of the community’s more pressing needs. The platform features a catalog of live-stream and on-demand content consisting of mental wellbeing techniques, guided meditation sessions, and practices hosted by mental health practitioners trained to meet the unique needs of Alkeme’s Black audience. 

Over time, the business will expand into a fuller suite of healthcare services to supplant the cultural shortcomings of more traditional healthcare practices. 

##### The Evolution of Healthcare

Alkeme sits at the intersection of a few key trends currently forging the evolution of healthcare and wellness.

*Reorganization around specific groups of people.* The traditional model of healthcare was structured in siloes, in which each practice (e.g., nutrition, primary care, mental health, etc.) existed separately from the next. Painting your healthcare plan as a consumer/patient meant creating a roster of practitioners with limited interoperability and exchange of resources and data. The healthcare system is slowly transitioning to platform-based health designed to offer comprehensives services organized around specific demographic groups. For example, Hims, Hers, Roman, Tia, Modern Fertility (acquired by Roman), and Papa were all designed with specific audiences in mind.*Mounting concern around mental health.* Nearly 1 in 5 adults suffer from serious psychological distress. The increase in mental unease affects all populations including both the most disadvantaged and most powerful members of society. Mental and behavioral disorders are among the leading causes of disability in the US, accounting for ~14% of all years of life lost to disability and premature death. Within the Black community, mental health has reached a tipping point, with raised awareness and newly sparked conversation. Mental health advocates like Naomi Osaka and Kid Cudi have recently emerged, furthering the destigmatization of the mental health movement in the black community and beyond.*The shift from reactive to proactive care.* Everyone exists along the spectrum of ill and well with regards to their mental health. One’s approach to seeking help exists within the range of proactive or reactive, with a strong correlation between wellness and proactivity. As a result, consumers are increasingly taking matters of health into their own hands, leaning into technology and digital services to support them along their journey. COVID-19 catalyzed the movement further, and rapid growth in telehealth utilization—38x higher than before the pandemic—signals a fundamental paradigm shift. ##### The Path Forward

With these past few years came continued exposure to pervasive racial traumas and stressors. The consequences of mental illness in minorities may be long-lasting and the lack of cultural understanding by healthcare providers may contribute to underdiagnosis and/or misdiagnosis of mental illness in people from racially/ethnically diverse populations.

Alkeme is on the path to dramatically change that narrative, building a system that not only prioritizes but celebrates the nearly 45 million Black people in America. In the past few months, Ryan has quietly assembled an incredible team of purpose-driven operators uniquely connected to this vision for Alkeme. The next chapter will orient around leveraging proprietary data and research designed to nurture not just the mind, but the body and soul of Black Americans. Mental health is only the beginning, and we at Forerunner couldn’t be more inspired to be a part of this journey.`,
  },
  {
    slug: "relationship-software-where-you-are-the-customer-vs-the-product-our",
    title: "Investing in Relationships; Introducing Clay",
    date: "August 30, 2021",
    year: 2021,
    author: "Brian O'Malley",
    authorTitle: "Board Partner",
    category: "Investment Announcements",
    company: "Clay",
    excerpt: `We’re pleased to announce our investment in Clay, rethinking the software that fosters one of the most important things in our lives: our interpersonal relationships. At Forerunner, we put people in...`,
    content: `We’re pleased to announce our investment in Clay, rethinking the software that fosters one of the most important things in our lives: our interpersonal relationships. At Forerunner, we put people in the center of everything we do. We watch how our lives are changing and how priorities are being reallocated. Across just about every demographic, we’ve seen interpersonal dynamics change as relationships become more digital-first than ever before.

Because of this perspective, we immediately clicked with Clay co-founders Zach and Matt. Besides having one of the most beautiful [**products**](https://clay.earth/) I’ve ever used, they spent extra time understanding their customers and their underlying needs. Unlike some founders who focus on shipping the easiest product to get to market, Zach and Matt focus on getting the right product to market. This nuance separated them from the dozens of other teams I’ve seen attacking this problem, making this company a “must back” for us at Forerunner.##### Not a Business Network and a Social Network...Just a Network

Emerging from COVID, people are realizing what had already become true: People have become increasingly important to one another, but differently from before. We don't have a business network and a social network. We don't have binary connections where we either know someone or we don't. Clay is the first relationship software company built for the end consumer as the customer—not some advertiser, not some recruiter, and certainly not your company. Clay understands that your network is yours, so you should manage it and you should own it. 

I’m just as likely to grab a drink with a work friend for purely social reasons as I am to discuss business with one of the other dads at my son’s baseball practice. At the same time, we’re living in a juxtaposed world of increased connectivity and unprecedented levels of loneliness. Social networks have provided connections like Cheetos provides sustenance...feeling good in the moment, but ultimately delivering empty calories. 

While many folks have talked about the need for a new “LinkedIn” or “Facebook” for the past decade, there have been few successful attempts at building a better relationship graph. But, in 2021, we believe things are different. Yes, like everything, COVID had an impact, but it wasn’t the driving force. These elements were already at work. While many, I think of three main changes:

- **Relationships have changed.** We might see individual people less, but we interact with more people than ever before. While many are increasingly focused on their inner circle, people move in and out of that circle more frequently and we generally maintain a larger sphere of connections. Comments, likes, and reposts create a much broader signal for connection.
- **Communication tools are fluid**. While many folks have given up home phones, an increasing number of formats drive communication. I might text someone in the morning, Slack them later, and then comment on their tweet that evening. In order to understand my relationship with that person, it is important to be comprehensive while also understanding context.
- **Willingness to pay. **Historically, relationship management tools were part of other products. I might get a free Contacts app with my iPhone or a module in Outlook. Or I can use Facebook or LinkedIn, which let me use their products for free in exchange for my data and attention. As consumers start to become more willing to pay for software that serves them as the primary user, it unlocks more opportunity for software developers to prioritize individual needs.

##### Networks are a Search Problem, Not a Graph One

We’ve all become spoiled by the efficiency of Google search. Results are high quality, fast and constantly changing based on updated information and my personal context. However, it wasn’t always like this. I remember using early search tools from InfoSeek, AskJeeves, Yahoo, etc, where you had to come up with the exact right keywords—and even then, search through dozens of pages to find the right information.

Searching for people today reminds me of those early search engine days. Connections are binary...we’re either friends or not. We either clicked “yes” eight years ago on LinkedIn, or we don’t know each other. The graph might tell us that we share multiple connections, but what if those underlying connections are dated or flawed? There is no “Page Rank” equivalent for strength of relationship, and there is certainly no representation of the dynamic nature of interpersonal relationships; each day either growing or shrinking, becoming more relevant or less. 

On top of that, there are limited tools to help me understand the intersection between people I care about and important events in their lives. Right now, we’re at the level of “it’s her birthday,” which is a far cry from where I’d like things to be: “Jane is going to be in town this weekend,” or “Mark has a tweet that is trending,” or “Someone you want to know just asked a question; you know a lot about that,” or even, “Someone important to you has a few friends that moved away, so you might want you to reach out.”

While these questions might seem impossible to accurately answer, it is not that far of a stretch if you consider just how good Google search has gotten: Not only do they list my favorite restaurant, they know the closest location, the hours, the menu, the best way to get there, and even what I should order.

By approaching relationship software as a “search engine” problem, which is ultimately a data-quality one, the Clay team has been able to deliver on “magic moments” related to people. The more people who use the product and the more data sources that become connected, the better the experience is for everyone involved. Enhanced and updated contact information for my network is appreciated, but knowing whom to reach out to when creates a special and engaging experience.

##### Inspired by the Ambition and Network Surrounding Clay

We’re inspired to work with Matt, Zach and the entire [**Clay team**](https://clay.earth/story). They’ve assembled an amazing syndicate including execs from [**Airtable**](https://clay.earth/zoelle-egner), [**Eventbrite**](https://clay.earth/kevin-hartz), [**Facebook**](https://clay.earth/sam-lessin), [**Oracle**](https://clay.earth/jonah-goodhart), [**LinkedIn**](https://clay.earth/shannon-brayton), [**Microsoft**](https://clay.earth/charlie-songhurst), [**Salesforce**](https://clay.earth/adam-evans), [**Tinder**](https://clay.earth/jeff-morris) and [**The White House**](https://clay.earth/josh-miller)—people who have worked at the intersection of relationship software and social networks, know that something better is possible, and believe this team is the one to build it.The ambition here is bold, both in the scope of the opportunity and what Clay will mean to our relationships. Relationships are messy. They aren’t black and white. So, for those folks willing to get their hands dirty, we welcome you to Clay. Early customers get an incredibly clean contact manager that understands the context of who is important to you today. As more customers join, and as Clay integrates additional data sources, the experience will only get better. We invite you to join this early experience and share your feedback. 

And to the Clay team: Welcome to the Forerunner family!

*Learn more about Clay, and start connecting deeply, by visiting **clay.earth**.*`,
  },
  {
    slug: "duos-co-founder-and-ceo-karl-ulfers-on-why-were-running-out-of-time-to",
    title: "DUOS Co-Founder & CEO Karl Ulfers: We Need to Reinvent Caregiving—Now",
    date: "August 11, 2021",
    year: 2021,
    author: "Forerunner Ventures",
    authorTitle: "",
    category: "Investment Announcements",
    company: "Duos",
    excerpt: `Karl Ulfers, Co-Founder and CEO of DUOS, admits he’s one of the lucky ones. Both his grandparents on his father’s side are still living—and, as he puts it, they are “stubborn, fiercely independent,...`,
    content: `[**Karl Ulfers**](https://www.linkedin.com/in/karl-ulfers-9736452/), Co-Founder and CEO of [**DUOS**](https://www.getduos.com/), admits he’s one of the lucky ones. Both his grandparents on his father’s side are still living—and, as he puts it, they are “stubborn, fiercely independent, and want to age in their own homes.” Now in their mid-90s, he couldn’t help but notice how hard it was to honor their wishes, though his dad was certainly trying.Healthcare was simply not optimized for the complexities of aging. “Everything was bespoke, hyper-fragmented, and the burden of making everything happen falls on loved ones,” says Ulfers. “As soon as I started to see that, I thought, ‘Wow, there’s got to be a better way.’” 

The need to better serve this demographic is already here, but coming faster than ever as *all *Baby Boomers reach retirement age. According to the [**Census Bureau**](https://www.census.gov/newsroom/press-releases/2018/cb18-41-population-projections.html), there will be more Americans over age 65 than Americans under age 18 by 2034—for the first time in our nation’s history. As Ulfers started to notice the needs of the aging population, he was the CEO of Rally Health. With a mission of putting health in the hands of the individual through digital technology, his experience collided with the right timing to take a new leap. “We had gotten big at 1500 people and over $1B in revenue,” says Ulfers. “I’ve always joined these earlier stage opportunities around 60-person size, but had never done one from the ground up.”Ulfers left his role to start DUOS, which launched earlier this year with two core components—digital healthcare platform, and workforce of personal assistants. Users can coordinate care and services via deeply engaged caregivers—Duos—who work to meet their needs, which may include meal delivery, transportation, housecleaning, booking medical appointments, helping with technology, delivering medications, and beyond. Duos are often stay-at-home parents, retirees, and emerging healthcare professionals who are looking for something flexible and part-time, and also want to be part of a mission. “What we are fundamentally building is a technology and service company that allows older adults to age independently, and provides their caregivers peace of mind while we do so,” says Ulfers.

Originally, the DUOS team thought more of its care would need to be coordinated in-person, but in some ways, the company launched at the right moment. As the pandemic forced everyone to go virtual-first, DUOS leaned into digital-first. “That has been incredible for us, because the scale and level of engagement we can get to in a virtual model is far greater than if we had to do in-person coordination and logistics around every interaction with the older adults and caregivers,” says Ulfers. “You always try to look for positive things that come out of bad things, and this was definitely a positive of the pandemic as it relates to our business.” 

The shift has helped DUOS start strong out of the gate. Over the past six months, the company has seen an 88% retention rate on the platform, and has been able to meet over 95% of the needs that older adults have brought forth. 

Pointing to the Census Bureau statistics on the aging population, Ulfers says the window is closing to lay a foundation for our older adults. “We have about five years to establish this new category we’re building at DUOS, which takes the labor that has previously fallen on loved ones and turns it into a technology and service,” he says. In teaming up with Duos, Ulfers hopes that older adults and caregivers can go back to nourishing parent-child or grandparent-grandchild relationships—a facet of wellness too frequently overlooked.

*Check out **getduos.com** and the company's **careers page** for more information. Want more consumer insights? Subscribe to Forerunner's weekly digest, **The CQ**, to get ongoing analysis from our investment team. *`,
  },
  {
    slug: "pet-health-is-going-the-way-of-human-health-our-investment-in-dutch",
    title: "Pet Health is Going the Way of Human Health; Our Investment in Dutch",
    date: "July 1, 2021",
    year: 2021,
    author: "Nicole Johnson",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "Dutch",
    excerpt: `We’ve all seen the headlines, noticed the trend, or engaged in it ourselves: The pandemic bred a pet boom. As the sector skyrockets and the pet telemedicine regulatory landscape changes...`,
    content: `We’ve all seen the headlines, noticed the trend, or engaged in it ourselves: The pandemic bred a pet boom. As the sector skyrockets and the pet telemedicine regulatory landscape changes rapidly—following the rapid expansion of human telemedicine—we are excited to announce Forerunner’s entry to the space with an investment in [**Dutch**](https://www.dutch.com/), the go-to destination for pet health.##### The Pet Boom

The pet market was wildly attractive even before the pandemic, with 75% of US households owning pets (1/2 owning at least one dog and over 1/3 owning at least one cat), which is [**up 20% in the last 30 years**](https://www.americanpetproducts.org/press_industrytrends.asp)). Then COVID-19 hit, priorities shifted homeward and a record [**~23M U.S. households acquired pets**](https://www.aspca.org/about-us/press-releases/new-aspca-survey-shows-overwhelming-majority-dogs-and-cats-acquired-during). Notably, Millennials and Gen Zers are acquiring pets at higher rates than older generations.The sector reached $100B+ for the first time in 2020, not only as the number of pets ballooned, but also as pet parents continued to spend more per pet. Thirty percent of pet parents spent [**more last year than in 2019**](https://www.prnewswire.com/news-releases/national-pet-industry-exceeds-over-100-billion-in-sales-for-first-time-in-industry-history-301255170.html). Underpinning and further driving growth is the ‘humanization of pets’ trend, which has been gaining steam for years as pets are viewed and treated more and more like family members. (Our early belief in this cultural shift led us to invest in [**The Farmer’s Dog**](https://www.thefarmersdog.com/) back in 2015). ##### Veterinary Care Bottlenecks

With the boom in pets, a boom in the need for medical care naturally followed. But vets were already struggling to meet pet care demand pre-pandemic, and 2020’s record pet acquisitions drove lead times for veterinary care through the roof. The average wait time to see a vet* **doubled* in 2020.Even when a vet is available, pet owners can be reluctant to bring their pets in for care. Many don’t want to stress their pets with an in-person visit—the sight of the carrier alone followed by the car/subway/bicycle rides to the dreaded clinic can make matters worse for pets with anxious tendencies. Many others don’t want to bear the cost for non-crisis moments, preferring to wait to bring their pet until they absolutely must. 

From the wait times, to pets’ poor experience, to the high price tags, many pet parents just avoid the visit altogether—and the deferral of care certainly doesn’t improve health outcomes.

##### The Pet Telemedicine Landscape

Sadly for pet parents, pet telemedicine maturation has trailed human telemedicine considerably, with leaders like Teladoc ($TDOC, $24B market cap post Livongo merger), Hims & Hers ($HIMS, $2B market cap), Lyra (privately valued at $5B), and Roman Health (privately valued at $5B) yet to see pet counterparts of comparable scale. For years, parents’ options were limited largely to dragging their pets, clawing and yelping, to in-person visits. 

The nascent pet telemedicine industry was also checked heavily by regulatory limitations. But, as with human telemedicine, restrictions fell precipitously as the pandemic challenged safety and access to in-person care. The FDA removed the need for in-person exams, and many practices and startups took the moment to adopt or expand virtual offerings. 

There’s still a ways to go to ensure that pet telemedicine can be practiced nationwide without a pre-established VCPR relationship, but we have reason to believe the industry will evolve in favor of expanded access to care—and that pet parents, having realized for themselves how much can be accomplished via telemedicine, will increasingly attach to virtual care offerings.

With the pet sector thriving, pet health mirroring the in-progress digital transformation of the human health sector, and pet parents increasingly sold on the merits and ease of telemedicine post-pandemic, there’s never been a better time to invest in problem solvers in the category. 

##### Dutch

Dutch just launched its platform for virtual, vet-prescribed treatment plans for pets’ underserved conditions, delivered to their doggie doors. With Dutch, pet parents now have a more immediate means of treating their pets’ chronic conditions that are often left untreated until a veterinary visit is required for more acute issues. Just as Hims & Hers created the 'digital front door' for self-pay consumer healthcare, we see an opportunity to build the go-to pet health/wellness destination with a similar offering. 

Dutch 
will initially address chronic veterinary issues like pet anxiety and dermatology/allergies, adding treatment for more ailments over time. These conditions significantly impact pets’ wellbeing. Take dogs: Roughly 75% of dogs exhibit at least one anxiety-related behavior (with instances likely to jump as owners return to offices and restart other out-of-home rhythms), and 15% of dog-owning households have dogs with skin disorders or allergies ([**Scientific Reports, 2020**](https://www.nature.com/articles/s41598-020-59837-z); [**AVMA, 2020**](https://www.avma.org/javma-news/2020-02-15/more-itchy-pets-no-problem)). Both are underserved due to the logistical challenges highlighted above, and because many pet parents don’t realize there are safe, effective medications out there to improve pets’ quality of life.The company was founded by Joe Spector, dog dad and one of the co-founders of Hims. As we observed as early Hims investors, Joe was instrumental in establishing the company’s national telemedicine and doctor network, setting up the initial pharmacy supply chain, and launching retail partnerships—balancing precision and clinical integrity with warp speed in all efforts. A magnet for talent, Joe has surrounded himself with the team to win, including world-class veterinary specialists and founding team members spanning the telemedicine and consumer industries, from Roman, to Reformation, to Mattel.

There’s no better time, and no better team, to consumerize veterinary care through telemedicine, and we couldn’t be prouder to play a role in expanding access to happier, healthier pets.

*See what we're so excited about; check out **dutch.com, **or connect with Dutch on **Facebook**, **Twitter**, **Instagram**, **LinkedIn** and **YouTube**.*`,
  },
  {
    slug: "screendoor-supporting-underrepresented-voices-with-capital-and-community",
    title: "Screendoor: Supporting Underrepresented Voices with Capital and Community",
    date: "June 9, 2021",
    year: 2021,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: null,
    company: null,
    excerpt: `We don’t want to wait around for change; we want to accelerate it.In venture capital, I see diversity not as a hollow buzzword, but a mission to make the startup ecosystem—and thus, the larger...`,
    content: `*We don’t want to wait around for change; we want to accelerate it.*In venture capital, I see diversity not as a hollow buzzword, but a mission to make the startup ecosystem—and thus, the larger world—a more representative place. This mission extends beyond the founders and executives in our portfolio, but also to the fellow funders who are well-positioned to back a broad range of businesses with customers across backgrounds, genders, races and ethnicities. Investors who approach the market with a diverse lens offer a more holistic view of the landscape and arguably have advantages in identifying, connecting with and championing diverse founders and leaders addressing genuine whitespaces that deserve attention.

At Forerunner, we are committed to bringing more underrepresented voices to the venture ecosystem. We make that a priority within our firm and we’re always looking for ways to extend diversity beyond our walls. That’s why I’m thrilled to be part of the collective at [**Screendoor**](https://www.screendoorpartners.com/), a $50M+ investment vehicle managed by a coalition of experienced seed-stage investors **intent on accelerating diversity in our industry faster than the status quo will accommodate. **Screendoor’s goals are simple, yet lofty. Goal number one is to get capital into the hands of underrepresented General Partners *faster,* and goal number two is to build the networks to support the growth of lasting firms. In doing so, Screendoor aims to advance a vision of the future where underrepresented voices are heard loud and clear, championing a new generation of winners that will resonate with all* *communities and demographics. With a rolling application process, Screendoor will deploy investments across promising U.S.-based individual General Partners and venture funds with at least one diverse GP at the helm in the coming months. With this initial fund, Screendoor will write checks from $500K to $5M across roughly 15 firms, and provide ongoing support and mentorship from the seasoned team of Screendoor advisors and LPs. 

In addition to pursuing the above goals, I’m thrilled for the opportunity to collaborate with fellow investors: Shauntel Garvey (Reach Capital), Eva Ho (Fika Ventures), Chris Howard (Fuel Capital), Charles Hudson (Precursor Ventures), Aileen Lee (Cowboy Ventures), Kanyi Maqubela (Kindred Ventures), Satya Patel (Homebrew), Leah Solivan (Fuel Capital), and Hunter Walk (Homebrew) and grateful to Screendoor’s initial LPs committed to leadership in venture and our shared desire to foster diversity: Princeton University, the University of Michigan, Harvard Management Company, Sapphire Partners, and The James Irvine Foundation, among others.

We don’t want to wait around for change; we want to accelerate it. We already know [**diversity improves**](https://hbr.org/2018/07/the-other-diversity-dividend) investment [**outcomes**](https://www.institutionalinvestor.com/article/b1df7fg0bq3jfv/Want-20-Higher-Returns-Do-This), which means there’s no excuse for standing idle.`,
  },
  {
    slug: "prose-co-founder-and-ceo-arnaud-plas-on-the-power-of-personalization",
    title: "Prose Co-Founder & CEO Arnaud Plas on the power of personalization",
    date: "June 6, 2021",
    year: 2021,
    author: "Forerunner Ventures",
    authorTitle: "",
    category: "Investment Announcements",
    company: "Prose",
    excerpt: `Arnaud Plas, Co-Founder and CEO of Prose, is a CPG and beauty industry veteran. He moved around from Henkel to L’Oreal, working in Paris, Dusseldorf and New York across various marketing and digital...`,
    content: `Arnaud Plas, Co-Founder and CEO of [**Prose**](http://prose.com/), is a CPG and beauty industry veteran. He moved around from Henkel to L’Oreal, working in Paris, Dusseldorf and New York across various marketing and digital acceleration functions, all while noticing the ways technology could improve products — and thus, build better brands. In other words, Plas was a natural entrepreneur.While harboring dreams of starting his own company, he hired his future co-founder, Paul Michaux, at L’Oreal in 2015. “We were having intense discussions about where the industry was going, L’Oreal’s position in the market, the white spots,” Plas says. “It was a great collaboration for a year.” When Plas left the company in 2016, he told Michaux he’d love for him to join. “I said, ‘I just want to be an entrepreneur. I would have too many regrets if I stayed an employee forever,’” he recalls. Thankfully, Michaux felt the same way.

The duo went back to France for 18 months to work on the mission and vision for personalized hair care, where they also added CTO Nicolas Mussat. Plas had recognized the issues with customer segmentation, or grouping customers broadly into categories (“long hair,” “blonde hair,” “curly hair,” “dandruff”), and wanted to solve for it. “Maybe 20 years ago, the technology just wasn’t there yet, but I felt that now we could create something much more relevant for customers,” says Plas. “We could create a product for a person, not for a segment.”

Big beauty players like L’Oreal have a supply chain in place that has somewhat married them to their segmented business model; Plas wanted to start from scratch, creating the process to address people as individuals and building the supply chain to scale that vision. He knew this idea had legs. “Prose was the only concept where I was waking up at night so excited, not just about the core product, but about all the things it could enable,” Plas says. “A better shopping experience, feedback from the customer, improving your product over time.”

Today, Prose is reinventing the personalization, customization and supply chain infrastructure to grow with their consumer. With the company’s own software-powered machine, a customer purchases products first, and then those products are made according to their unique hair-type specifications — instead of making a million units of product, for instance, and then trying to sell all of it to customers. Prose’s model cuts down on waste, as well. “It was better for the planet and better for our customers,” Plas says.

Though Prose is growing quickly — the company tripled revenue for the third year in a row, with 75% of its revenue under subscription — Plas’ proudest moment as a founder-CEO is more personal. In fact, it happens each January at the company gathering in Canada. “Usually at the first dinner, I do an intro speech,” he says. “Just looking around at all those different people coming from different countries, different backgrounds, with different reasons for being at the company — without Prose, they would not be in that place at that moment, speaking together. Seeing them so happy and excited about the mission of the company is really where I load the battery for the year.”

For Plas, the Prose journey has been a thrilling ride, with his role as CEO evolving year over year, bringing new challenges. “You have to move from doing to getting, getting to empowering, from empowering to representing the company more and more,” he says.

But if any would-be founders are wondering if Plas’ entrepreneurial dreams lived up to expectations, he has simple advice: Start the company, whether you aspire to have a thriving small business or a unicorn startup. “It’s a fantastic experience learning about yourself and people in general,” he says. “And what is extremely rewarding is that you’re making such an impact on the people around you, whether it’s customers or employees… Life is too short not to go for it.”

*Learn more at **prose.com**. Follow the journey on **Instagram** and **Facebook**.*`,
  },
  {
    slug: "reimagining-freedom-at-any-age-with-an-investment-in-duos",
    title: "Reimagining Freedom at Any Age; Our Investment in DUOS",
    date: "June 6, 2021",
    year: 2021,
    author: "Nicole Johnson",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "Duos",
    excerpt: `For years we’ve pored over the older adult space at Forerunner, and for good reason: the US population of individuals 65+ is growing rapidly as Baby Boomers age. As the fabric of society continues to...`,
    content: `For years we’ve pored over the older adult space at Forerunner, and for good reason: the US population of individuals 65+ is growing rapidly as Baby Boomers age. As the fabric of society continues to shift, there’s a gaping delta between this consumer group’s evolving needs and the legacy products and services that exist to support them. 

We have seen commendable innovation in the market across offerings and business models, but none map back to the unique insights we have about Boomers’ new and emerging needs so they can live their best lives at home. 

Established within [**Redesign Health**](https://redesignhealth.com/) in 2020, DUOS is a healthcare platform providing older adults with the resources and partnerships they need to stay healthy and independent at home, like meal services, rides to doctor's appointments, or help around the house. (More simply, you can think of DUOS as a hub for older adults to find friendly, personal, and mostly-virtual assistants.) Unlike the legacy homecare sector, DUOS’ No. 1 priority is member empowerment, which it reinforces through meaningful relationship-building and collaboration with families, health plans, and doctors to help orchestrate the best possible care.At Forerunner, we’re looking to partner with world-class management teams, and DUOS is a prime example of the dynamic we’re looking for. The team is led by CEO [**Karl Ulfers**](https://www.linkedin.com/in/karl-ulfers-9736452) who has operated on the cutting edge of digital health for 15+ years, including as the former CEO and CPO of Rally Health and VP of Consumer Solutions at OptumHealth. Karl is surrounded by a notably diverse founding team of operators spanning healthcare and consumer tech �� from Accolade, to AthenaHealth, to The Players’ Tribune — and are all uniquely credible to execute on the company’s mission and vision. DUOS sits at the intersection of consumer and healthcare tailwinds set to drive ongoing change. 

**Demographic shifts: **At Forerunner, we always start with the consumer. Older adults’ perennial and increasing desire for independence, growing technology fluency, and heightened expectations for convenience will continue to drive care closer to home — with all three of these trends augmented by Covid-19. **Healthcare industry shifts:** Several trends are converging to set the stage for DUOS. You have the phenomena of Medicare coverage expansion and the increasing prioritization of members’ Social Determinants of Health (SDOH) scores and preventative care.We see DUOS as shaping culture not only with respect to older adults whose lifestyles and wellness they champion, but also with respect to the novel workforce they’re mobilizing on the service side. 

The model is vertically integrated: the company is hiring a new, humanized workforce of “Duos,” who build high-trust relationships with older adults. Today, that means a mix of stay-at-home moms, early retirees, social workers, and aspiring healthcare professionals — all individuals who are deeply fulfilled by and uniquely credible in creating trusting relationships with older adults through empathy, diversity, and caregiving experience. 

DUOS is transforming the aging and independent living services category, and we couldn’t be prouder to back the team on their mission.

Check out DUOS [**here**](https://www.getduos.com/) and their open roles [**here**](https://boards.greenhouse.io/duos).`,
  },
  {
    slug: "the-next-revolution-in-commerce-will-be-driven-by-the-seller",
    title: "The Next Revolution in Commerce Will Be Driven by the Seller",
    date: "May 3, 2021",
    year: 2021,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: "Theses",
    company: null,
    excerpt: `Today, the internet is the indisputable focal point of our day-to-day lives. Our smartphones seem as critical as our right arms. We Slack our colleagues, SMS our friends, Zoom our business contacts,...`,
    content: `Today, the internet is the indisputable focal point of our day-to-day lives. Our smartphones seem as critical as our right arms. We Slack our colleagues, SMS our friends, Zoom our business contacts, find new content on Substack, store data in the cloud, and purchase online via personalized tools that seem to know what we need before we do. 

A decade ago when we started Forerunner Ventures, the commerce ecosystem was in flux with the proliferation of online shopping. As the internet became a more vibrant place, the consumer’s path to purchase was reimagined; this evolution inspired the rise of digital-first brands like [**Glossier**](https://www.glossier.com/), [**Away**](https://www.awaytravel.com/), [**Warby Parker**](https://www.warbyparker.com/), and [**Dollar Shave Club**](https://www.dollarshaveclub.com/) catering to the buyer and expanding the shoppable universe to tens of thousands of direct-to-consumer outposts with global reach, while simultaneously forcing traditional retailers to rethink their longstanding value propositions and business models. The market is well into reorganizing around a new digital-first reality as we’ve evolved our tech habits as a society. It started with the personal computer. After computers were adopted en masse as a more efficient way to conduct business, everyone started becoming fluent in the ways of the World Wide Web. Once the internet had gone mainstream, and we started toting it in our pockets, users embraced social networking platforms as a means to connect with their friends and colleagues. Finally—and critically for commerce’s next chapter—users collectively embraced *discovery* via new platforms, becoming increasingly adept at making digital mediums work to meet their needs, further their goals, and seize opportunities to be the master of their own online universe. As COVID-19 forced us into our homes this past year, digital’s widespread adoption only sped up, especially in relation to how we buy and sell. According to [**McKinsey research**](https://www.mckinsey.com/business-functions/marketing-and-sales/our-insights/the-great-consumer-shift-ten-charts-that-show-how-us-shopping-behavior-is-changing), categories seeing customer growth rates of 25% or more include OTC medicine, grocery, household products, personal care, alcohol, home furnishings and appliances, food takeout and delivery, fitness and wellness, vitamins and supplements, and children’s. At the same time, social discovery became even more pervasive. Over the past year, [**54% of consumers**](https://www.forbes.com/sites/garydrenik/2021/04/22/businesses-are-increasing-their-investments-in-social-media-as-consumers-use-social-media-more-than-ever-before--heres-why/?sh=110fe4a67156) claim their social media usage has increased—led by the Gen Z and millennial cohorts—and 43% now say they engage with social platforms to uncover new brands that pique interest.Times of hardship and change often bring about innovation. As we were all downloading TikTok, learning about NFTs, stumbling upon new brands via our favorite influencers, and diving down the rabbit hole of online potential, we were also ushering in the next revolution in commerce powered by the **seller**. **The Evolving Environment**As we’ve created new norms online, and restructured our lives around the internet, commerce has barreled toward an opportunistic moment. Digital access and fluency has continued to bring us closer to more people, opening up a new era of potential built on one-on-one connections. 

If commerce is a transaction between buyer and seller, the face of the seller is evolving with new tools for discovery and purchase that allow for a personal relationship between creator and customer. Beyond a corporation or mass retailer, the seller is now frequently a person or small business. We are seeing a new long-tail retailer learning how to make the internet work in their favor, enabled by social media and without the need to lean into a digital mass marketplace—they simply need a captive audience, which is easier to attract than ever. Newer platform entrants like [**Curated**](https://www.curated.com/), [**The Yes**](https://www.theyes.com/), and [**Faire**](https://www.faire.com/) are also continuing to uplevel the digital retailing experience with a stronger eye toward interaction, one-to-one engagement and personalization.This more personalized form of digital commerce is fueled by the social realities of our current culture, and the empowerment of the seller. Arguably, the potential and desire for independence has never been higher than it is today. According to recent data collected by Forerunner, 37% of people have more interest in working for themselves after the pandemic; 57% of respondents claim the driver of this wish is flexibility, or put simply, more control over their own lives. 

We see the independence thread play out in the creator economy. With the platforms and tools emerging to sell products, services and content, “creators” want to cut out the middleman and sell directly to their consumer on a 1:1 basis with genuine connection as the foundation. Think of an influencer on TikTok, who is selling her art via Cashdrop. The wholesaler or the retailer is no longer a requirement; she only needs a product, a means of discovery, and a platform to enable the purchase. Think of the journalist, who no longer needs to cater to a publication’s vision for his work. He can start his own newsletter on Substack, tap into his engaged Twitter audience, and charge a subscription fee to generate content completely in line with his own vision. Think of a digitally-native brand on Instagram that 'drops' a new product every six weeks. With social media, Shopify, and a personal relationship with me, the consumer, a single individual has the building blocks of a modern business in the new commerce economy. 

There’s a consumer appetite to reward those bootstrapping it on their own, as well. Even though the concept of a creator is still in its infancy, some 27% of our survey respondents reported purchasing from one over the past year. For Gen Z, that number increased to 45%. We only expect these statistics to grow.

**The Commerce Economy**As digital tools enable a generation of new entrepreneurs and “solopreneurs” to attract, engage and transact at scale, we imagine commerce [**coming full circle**](https://medium.com/forerunner-insights/empowerment-forerunner-at-fund-iv-1dd0cc1b6bc9): from the barter system, all the way back around to one-on-one intimate connections. Today, this manifests as digital microtransactions with single consumers. To pull off this reimagined form of commerce, we need new tools, different marketing platforms, access to reach the consumer and pose a transaction—and we’re getting them. A new suite of technologies, from [**Shopify**](https://www.shopify.com/) to [**Pietra**](https://www.pietrastudio.com/), [**Universe**](https://onuniverse.com/) to [**Stir**](https://usestir.com/), will bring to life a cohesive purchase experience: efficiently and securely collecting personal information, processing payments, routing orders, executing fulfillment and shipping. Solopreneurs will have the ability to participate in the commerce economy, with tools like [**Islands**](https://islands.xyz/), [**Creative Juice**](https://getjuice.com/), and [**ShopShops**](https://shopshops.live/), designed to enable direct access to audience, data, capital, and product collaboration, allowing individual influencers to have impact beyond “likes.” In these ways, the commerce ecosystem is so much more than retail. Commerce encompasses the way buying and selling is inspired, motivated and facilitated in the digital landscape, and typically involves three prongs of business: product, discovery, and enablement.

- **Product: **The service, content or goods around which transactions are based; these are the creators and artists who sell online, or your favorite brands (encompassing offerings ranging from physical goods, to digital goods, to services, to access).
- **Discovery:** The means by which we discover new goods and services on the internet. This is social like TikTok, Instagram, Pinterest, and YouTube, as well as digital platforms personalized for the preferences of unique users, like Curated, Chums, The Expert, The Yes, and Faire, or those bringing shopping into the social sphere, like Loupe, WhatNot, ShopShops, Newness, and Finary, or those gamifying shopping (look for more to come here).
- **Enablement:** The means by which we facilitate the path to purchase. Think Stripe, Shopify, Cashdrop, Linktree, Substack, Stir, Catch, Imprint, Karat, and Canal.

> *Commerce companies show up everywhere in the new digital landscape.*

For instance, TikTok isn’t just a social media company. With its tens of thousands of creators, it also stands to become a huge driver of commerce in the coming years. The New York Times or The Information? These are not just news or media companies, but also commerce companies with revenue built on subscriptions to their content. Stripe is not just one of the most exciting fintech companies of our generation, but you guessed it—it’s a commerce company, powering transactions across a broad range of digitally-native brands. 

A move to commerce-based business models is being further fueled by the increasingly transparent shortcomings of ad-supported models, where the users themselves are the products being sold. Some tech companies have exploited this model in a way that the consumer doesn’t appreciate—not to mention, allowing ads to disrupt the user experience in the process—and many are begging for something better. The commerce model gives them that, allowing consumers to not only buy with their dollars, but to vote with them. In a commerce business model, revenue is derived from actual value in a consumer’s life via a good, a service, or access that they’re willing and happy to pay for.

As share of spend continues to expand across categories including education, entertainment, technology, the digital realm (NFTs), and influencer-endorsed products, the potential for commerce as a business model makes sense in more places, like online courses (from formal to informal), online services and advice, specialized writing and content, video-hosted gatherings, and assisted-discovery services. From charging admission to events on Clubhouse, newsletter subscriptions on Substack, or shopping with an expert on Curated, there’s no end to the ways commerce can fuel the next evolution of online business—driven by an empowered seller who’s finding a world of opportunity in the new 1:1 economy.

> *While the transformation in digital commerce over the last decade was inspired by a thoroughly modern buyer, Forerunner is convinced the next evolution will be propelled by the seller.*

Not only will this shift create an incredible environment of inspiration for new business, it will also provide an opportunity to **further grow the universe of entrepreneurs and expand the pathways to pursue financial freedom.**`,
  },
  {
    slug: "interior-design-at-your-fingertips-an-investment-in-the-expert",
    title: "Interior Design at Your Fingertips; an Investment in The Expert",
    date: "April 30, 2021",
    year: 2021,
    author: "Nicole Johnson",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: null,
    excerpt: `The Expert is on a mission to expand access to the knowledge, inspiration, and validation of great designers regardless of budget or geographic location.`,
    content: `The Expert is on a mission to expand access to the knowledge, inspiration, and validation of great designers regardless of budget or geographic location.

Home is big business, because consumers take pride in their spaces. We’ve had our eye on the home sector since the inception of Forerunner, with investments over our lifetime including [**Serena & Lily**](https://www.serenaandlily.com/), [**The Inside**](https://www.theinside.com/), [**Sunday Lawn Care**](https://www.getsunday.com/), and [**Homebound**](https://www.homebound.com/), to name a few. But the concept of home became ever-important when Home became our Everything in 2020. Online furniture and decor seller Wayfair (NYSE: W) is a superior proxy for consumers’ transformed appreciation for interiors: its stock up more than 250% since the eve of the COVID-19 pandemic, with performance sustained a year later by customers’ elevated demand and entrenched online shopping behavior. And the trend isn’t going away: according to a recent survey by McKinsey, 30% of US adults plan to splurge on items for their home after the pandemic.

Within the broader sector, we’ve circled around new models for the $150B global interior design industry, observing room for improvement for trade and consumers alike. Interior design is arguably the absolute best-suited source of home inspiration and commerce enablement for consumers, but the trade is a famously walled garden. 

Individual designers can only render services for a handful of clients at a time, with projects ranging from months to years, and budgets ranging from the thousands to $1M+ in the upper echelon. Designer profitability and success depends on the number of clients they’re able to take on, the accuracy of their budgeting and bidding, timely delivery and completion of projects, and customer happiness with the end product — all perennial challenges not easily solved with software.

While tech hasn’t solved the industry’s challenges or successfully transformed the business model, it *has* brought us social media. The supremely-visual home design sector has been a massive beneficiary of visual social platforms like Instagram and Pinterest over the past decade. Top designers will rack up engaged social followings in the tens-of-thousands to millions (e.g., [**Bobby Berk**](https://www.instagram.com/bobby), [**Amber Interiors**](https://www.instagram.com/amberinteriors), [**Leanne Ford**](https://www.instagram.com/leannefordinteriors/?hl=en), [**Brigette Romanek**](https://www.instagram.com/brigetteromanek/?hl=en); all members of The Expert’s community). These days, designers are their own class of influencer — whether they’re gracing the coveted Architectural Digest 100 cover, or born on Instagram. Regardless of their origin, however, the bread-and-butter business model restricts an interior designer’s ability to connect with more than a select few customers at any given time. The Expert solves for this. 

The platform connects anyone, anywhere with the world’s leading interior designers via video consultation. The company aims to be a sustainable solution for the interior design industry, allowing Experts to broaden their reach and monetization in a predictable, rewarding, and low-friction way. 

Today, users can browse The Expert’s directory of 80+ design icons and emerging talent; consider their portfolios, designer bios, consultation offerings and pricing; book an appointment; and get personalized advice and inspiration. Tomorrow, we see The Expert as the go-to destination for all things Home, closing the loop on inspiration to help consumers upgrade their spaces.

The Expert was launched by a team that gets it, and the company is in a uniquely credible position to prompt change in the industry. Co-founder and CEO Leo Seigal is a serial entrepreneur who iterates at lightning speed with his finger on the pulse of the consumer’s needs. Leo conceived of The Expert during the pandemic with his best friend and co-founder, Jake Arnold, a pioneering designer who has earned the trust and respect of his peers and the broader industry throughout his career.

The home design space is ripe for transformation, and we are pleased to be partnering with the team at The Expert as they broaden access to interior beauty for designers and consumers. 

Book a session with an Expert [**here**](https://www.theexpert.com/). Follow The Expert [**Here**](https://www.instagram.com/theexpert/).`,
  },
  {
    slug: "empowering-consumers-to-find-the-best-possible-brands-with-an-investment-in",
    title: "Empowering Consumers to Find the Best Possible Brands; Introducing Thingtesting",
    date: "February 24, 2021",
    year: 2021,
    author: "Nicole Johnson",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: null,
    excerpt: `On the heels of the DTC revolution, brand choices have exploded. And in so many ways, there’s never been a better time to be a consumer.`,
    content: `On the heels of the DTC revolution, brand choices have exploded. And in so many ways, there’s never been a better time to be a consumer. 

There are brands out there to meet consumers’ every need, whether they’re cutting back on alcohol, trying to be mindful of their carbon footprint, or wanting to support Black-owned businesses. And it’s not just physical goods we’re talking about - it’s credit cards; it’s virtual therapy; it’s accident insurance; it’s all DTC in our book. Take Shopify as an example for the barreling wave of modern consumer brands: the company hit 1.7M merchants recently, up from 1M in 2019.

And what even is DTC anymore? Thanks to the maturation of consumer business playbooks and consumer expectations, every brand born today is “direct-to-consumer” as a table-stakes component of its strategy. Plus, more often than not, products are distributed via all the channels, from livestream shopping networks, to second-hand marketplaces, to HSA/FSA programs, to Amazon, to your local corner store. 

The proliferation of brands, and the resulting world of choice--of ways to optimize for right product, right price, right delivery service-level-agreement, right brand, and right alignment with our individual values--is generally positive for today’s consumer, with a major, mounting catch. It’s becoming the Wild West out there.

The endles
s aisle of new choices is impossible to wrangle and transparency, while waxing as a consumer expectation, is waning as brands and channels proliferate. Where’s the single source of truth for consumers?

Enter [**Thingtesting**](https://thingtesting.com/about), which has rapidly gained steam as the No. 1 destination for the modern consumer to make intentional brand choices. Thingtesting started as a brand-spotting [**Instagram account**](https://www.instagram.com/thingtesting/?hl=en) and passion project, and we’ve been glued to its rise since it launched in 2018. Founder and CEO [**Jenny Gyllander**](https://twitter.com/gyllanderjenny?lang=en) is a modern brand whisperer who started Thingtesting while working in the VC world, initially chronicling and adding an objective voice to the deluge of new DTC brands she was seeing in the industry. Consumer and brand enthusiasm quickly eclipsed her expectations; it was clear that consumers wanted to think critically about what they buy. Jenny embraced Thingtesting [**full-time in Spring 2019**](https://medium.com/@gyllanderjenny/thingtester-by-day-3b58f2e824db), recognizing an opportunity to build a place of discovery, information, and community for curious consumers.She [**raised a pre-seed round**](https://techcrunch.com/2019/09/19/thingtesting/), surrounded herself with a small but mighty team spanning the U.S. and Europe, and got to work building a web platform to deliver on these consumer needs. When we reconnected with Jenny this past fall, we were taken by the engagement she was driving with her users, and most of all, her fierce commitment to building something better for modern consumers. We are eager to partner with Jenny, having led her recent investment round, with much enthusiasm about her incredible capabilities as a founder and leader and the company’s path forward.Every purchase is a vote of confidence, and we believe Thingtesting is building the go-to spot for today’s and tomorrow’s consumer to make that vote from a more empowered place. 

Join Thingtesting [**here.**](https://thingtesting.com/about)[**Instagram**](https://www.instagram.com/thingtesting/) | [**Twitter**](https://twitter.com/thingtesting_)`,
  },
  {
    slug: "making-plant-based-dairy-indistinguishable-from-conventional-dairy",
    title: "Making Plant-Based Dairy Indistinguishable from Conventional Dairy; Introducing Eclipse",
    date: "December 17, 2020",
    year: 2020,
    author: "Eurie Kim",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: "Eclipse",
    excerpt: `Consumers are more mindful of the health and environmental impact of the food they eat. We’re increasingly looking for clean, plant-based foods to replace meat and dairy, which together use 83% of...`,
    content: `Consumers are more mindful of the health and environmental impact of the food they eat. We’re increasingly looking for clean, plant-based foods to replace meat and dairy, which together use [**83% of farmland**](https://josephpoore.com/Science%20360%206392%20987%20-%20Accepted%20Manuscript.pdf) and produce 60% of agriculture’s carbon footprint, while supplying only 18% of calories and 37% of protein consumed. While vastly improved over the past decade, existing plant-based dairy options continue to simply replace milk with other ingredients like soy, almond, oat, and rice, and as a result have remained subpar alternatives that have largely been unable to convert the [**65% of Americans**](https://ghr.nlm.nih.gov/condition/lactose-intolerance) with lactose sensitivity and [**58% of Americans**](https://www.meatconference.com/sites/default/files/books/Understanding%20Emerging%20Trends.pdf) consuming milk and dairy as a protein source. No company, in our eyes, had a novel or defensible approach to matching the taste, texture, and experience of real dairy at a comparable price.

Until we met with Eclipse, a plant-based dairy company with a patent-pending process to create plant-based milk indistinguishable from conventional dairy, with all the form factor flexibility milk offers. The founders, Aylon Steinhart and Thomas Bowman, are a complementary and special team redefining and elevating the industry standard with the belief you shouldn’t have to compromise taste when eating plant-based foods. Together they captured our imagination and taste buds. Starting with ice cream, the Eclipse team has ambitions to create a category-defining brand across all dairy products with their plant-based solution.

**Shelves full of alternatives but no substitutes**While alternative dairy has become popular in recent years, market penetration is only 10%, but consumer mindshare continues to grow; plant based dairy has grown [**11% YoY**](https://plantbasedfoods.org/wp-content/uploads/2019_all-sales_bycategory-1.jpg) at a time where the conventional dairy market is down [**25%**](https://www.ibisworld.com/industry-statistics/market-size/dairy-farms-united-states/). The popularization of non-dairy alternatives to date has followed a wave of fads shifting from soy to almond to oats, with cashew, coconut, and rice gaining notoriety in between. This is best illustrated in the rapid rise of Oatly, a Swedish company founded in 1994, which reached [**$200M in sales in 2019 and expects to reach $400M sales in 2020**](https://www.forbes.com/sites/mergermarket/2020/02/28/a-latte-riding-on-ipo-for-oat-milk-leader-oatly/#759bae785522). Though the arc of alternative dairy has led to incrementally better products, a step change substitute has not emerged to capture the broader mass market consumer and drive a tipping point in adoption.**Plant-based meat paved the way**The momentum of modern plant-based meat, namely from Beyond and Impossible, has primed consumers for welcoming Eclipse’s dairy substitute. Beyond and Impossible developed products with comparable taste and nutritional value, along with a repeatable playbook for accelerated brand building and distribution through food institutions such as Burger King, Starbucks, and Dunkin Donuts. 

They also have shown the ability to create defensible enterprise value through proprietary processes and brand equity in a category that has traditionally traded at lower multiples and exits; Beyond Meat traded at 37X its revenue-to-multiple at IPO; RXBar traded at 5X its revenue-to-multiple at acquisition, and Oatly 5X its revenue-to-multiple during its latest round. Eclipse’s go-to-market and dairy base platform, which can be used across dairy categories, has a chartered path to follow.

**Clean label and capital efficient model **Leading with expertise — Aylon at a leading plant-based food institute and Thomas in culinary arts and commercial product development at JUST — the team leveraged their knowledge to create a patent-pending process for plant-based milk that indistinguishably replicates the molecular composition of dairy milk and can be used as a base across the category. 

The team’s early ability to quickly iterate formulations based on partner and consumer feedback allowed them to impressively bring their first product to market in less than one year. Additionally, knowing what matters to today’s consumer, Aylon and Thomas had an eye toward creating affordable products with a clean label — Eclipse’s milk base can be made without additives, such as gums, and uses commodity raw ingredients, providing a price and production advantage over competitive dairy alternatives. In an emerging plant-based and cell-based market, where many approaches take years and tens of millions of dollars before they’re ready for market, the team’s thoughtful, capital efficient, and proprietary approach stood out to us and speaks to the team’s unique advantage

**And a beloved brand is already growing**The company publicly launched in the fall of 2019 with ice cream, an item that brings joy to consumers, and a strategic starting point from which to build a relationship with the consumer. 

For launch, the team partnered with highly regarded regional ice cream shops Humphry Slocombe and OddFellows and generated outsized press buzz on CNN, Forbes, San Francisco Chronicle, Mic, and inbound interest from over 1,000 partners, including large tech offices and multinational food service and CPG brands. 

The proof is in the ice cream.`,
  },
  {
    slug: "congratulations-to-nicole-johnson-our-newest-partner",
    title: "Congratulations to Nicole Johnson, Our Newest Partner",
    date: "December 16, 2020",
    year: 2020,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: null,
    company: null,
    excerpt: `Since our founding nearly 10 years ago, Forerunner has remained a small but mighty team.`,
    content: `Since our founding nearly 10 years ago, Forerunner has remained a small but mighty team.

We’ve learned from each other, worked together tirelessly to accomplish goals, weathered the markets, celebrated wins, overcame losses, and beat the odds. Forerunner’s mission and vision have always stood firmly upon our core values of teamwork, original thought, integrity, and community. We don’t win as individuals; we win as a team.

Nicole Johnson embodies these qualities as a collaborator and so much more. That’s why we’re so incredibly proud to name Nicole Forerunner’s newest Partner.

When Eurie and I met Nicole seven years ago, she had hopes of networking with our portfolio. She had a depth to her — not only in her knowledge, but in her personality and people skills. When we were looking to hire our first analyst, she immediately came to mind. Luckily for us, she accepted and joined us.

How far we’ve come together since then.

During her time at Forerunner, Nicole has proven time and time again to be a critical and strategic thinker, as well as a dedicated and trusted team player; the combination of which makes her effective at spotting great investments and building lasting relationships with entrepreneurs. Not only does she understand the merits of a quality company and investment, she knows how this industry works forward and backward and has proven to be keen at spotting potential. She is original in her thinking and unabashedly unafraid to challenge ideas. And she is just as good at building trust and relationships with people as she is at critical thinking and analysis.

Importantly, Nicole has a keen eye for identifying consumer trends, and she intuitively understands where originality and delight meet business potential. Nicole has been instrumental in sourcing, diligence, and implementing investment execution within our portfolio including companies such as Calibrate, Heroes, Neighborhood Goods, Nécessaire, Prose, and Stadium Goods (exited), among others.

The founders she works with rely on her and appreciate her candor and guidance in helping them refine strategy, evaluate market opportunity, and evolve consumer experience. “Nicole intuitively understood our mission from our first conversation. She pushed us to define a new category for consumers and to meet consumer needs with a product that resonates. From copyedits to closing candidates, she has been an invaluable and unstoppable asset to our team,” said Isabelle Kenyon, founder of Calibrate.

Nicole has risen quickly on the Forerunner team to be an incredibly valuable and equal thought partner, someone I can truly rely on. Having a partner like Nicole makes us all better at what we do, both at work and in our lives. We look forward to Nicole continuing to make a lasting impact at Forerunner, our portfolio companies, as well as on the broader venture ecosystem.`,
  },
  {
    slug: "education-will-never-be-the-same",
    title: "Education Will Never Be the Same; Our Investment in Juni",
    date: "August 26, 2020",
    year: 2020,
    author: "Eurie Kim",
    authorTitle: "Partner",
    category: "Investment Announcements",
    company: null,
    excerpt: `The ability to educate our children effectively in a remote learning environment has never been more pertinent. With the majority of the nation’s 57M school-aged children toiling with remote learning...`,
    content: `The ability to educate our children effectively in a remote learning environment has never been more pertinent. With the majority of the nation’s 57M school-aged children toiling with remote learning and/or delayed school openings as a result of COVID-19, families are desperate for guidance and resources on how to provide their children quality education given the circumstances. 

Shortly before the COVID-19 crisis hit earlier this year, we led a $10.5M Series A financing for Juni Learning, a fundamentally unique digital-first education platform that empowers hundreds of curated & trained instructors from top colleges to educate students K-12 through Juni’s live 1:1 and group classes. Founded in 2017 by Vivian Shen and Ruby Lee, two Stanford Computer Science graduates, Juni initially launched a proprietary coding and STEM offering, where traditional K-12 programs have historically been under-resourced despite an ever-growing need for education in these subjects. Since launch, Juni has already broadened its platform to offer math and English courses to serve the additional demands driven by the pandemic and will be further expanding their class offering in the coming months. 

Current educational programs, within formal K-12 educational systems as well as supplemental extracurricular programs, are woefully inadequate in providing quality coding/STEM instruction – either in lacking qualified personnel or missing the course entirely.

Only 18% of high schools that are accredited to teach Advanced Placement classes had computer science as an offering, and further, minority students, students in rural communities, and girls are less represented in computer science education than others. The National Center for Science and Engineering Statistics found that only 19% of computer science degrees were awarded to women and 22% to underrepresented minority students. Meanwhile, the workforce is experiencing an increasing demand for professionals with coding and engineering backgrounds to support evolving technological needs. With an expected ~$40B to be spent annually on enrichment education in the US by 2022, we at Forerunner believe that it is imperative to democratize access to quality education in STEM and other core subjects by leveraging technology to enable scalable learning for both students and teacher.

COVID-19 has put a spotlight on the limitations of our traditional educational system. Suddenly, digital education which was once considered* in support* of the core curriculum has now become the primary channel for learning across all subjects. This step-change in behavior and market need has provided powerful tailwinds for Juni as a platform that has been built from ground up with technology and remote learning in mind across every point of interaction - lessons, projects, progress tracking, collaboration, and community. In the past three months alone, Juni has tripled revenue and delivered over 50,000 classes with 70% of its students located outside the Bay Area and across 47 states. Juni has more than 500 instructors from top universities who are all trained in the Juni curriculum and matched individually to each student based on their needs. 

While the traditional education system suffers from a shortage of qualified teachers due to underfunding, challenging school environments, and minimal professional development support and recognition, Juni’s instructor supply is the deep, untapped pool of 500K undergraduate and graduate students with tutoring and teaching experience in the US, all of whom are eager to have flexible employment opportunities that enable them to leverage their expertise. Without access to Juni’s platform and proprietary curriculum, traditional instructors would need to coordinate meeting times, maintain their own CRM of students & parents, handle payment, develop their own courses and projects. The Juni platform enables each instructor to deliver a consistent, high-quality experience with less than 10 minutes of prep per class and start teaching within two weeks of their acceptance into the program. The result is a robust path to providing high engagement, personalized education to students at scale. 

Ultimately, Juni’s mission is to provide a true digital university experience for students K-12, making learning fun, accessible, and personalized for any student, no matter where they are in their learning journey. The modern parent is eager to instill a love of learning in their children’s hearts and minds, and while much of education has historically focused on test scores and rankings, Juni imagines a world where learning is mapped to what students need to thrive in the world today and tomorrow. 

Visit: [**https://junilearning.com/**](https://junilearning.com/)`,
  },
  {
    slug: "investing-where-people-demand-change",
    title: "Investing Where People Demand Change",
    date: "July 21, 2020",
    year: 2020,
    author: "Kirsten Green",
    authorTitle: "Founder, Partner",
    category: null,
    company: null,
    excerpt: `In 2020, the onset of a new decade, we find ourselves at a human and business inflection point. To put this into context, the last twenty years have seen enormous professional, personal, and cultural...`,
    content: `*In 2020, the onset of a new decade, we find ourselves at a human and business inflection point.* To put this into context, the last twenty years have seen enormous professional, personal, and cultural transitions, some of which gave way to growing global uncertainty. As a society, we sought distraction from reality. This need for diversion aligned flawlessly with the rise of technology. We began living under the influence of the algorithm and the Amazon-ification of culture, where gradually our wants superseded our needs. On the heels of an era of extremes—extreme access, extreme shopping, extreme wealth disparity, extreme media, extreme exposure, extreme politics—people are looking for balance. People are growing fatigued by what some view as reckless consumerism and they are increasingly frustrated by institutions. We now witness a consumer in transition. Today’s emerging wants and needs are shaped by a confluence of trends: environmentalism, preventative health, case for self-investment, loneliness, shifting values, COVID-19, social activism and the fight for injustice. 

In a society that has arguably valued economic progress over human progress, we find ourselves in a split market. For too long we have seen our needs (human sector) and wants (consumer sector) as separate entities, instead of two halves of the same being. 

The next ten years will be centered on readdressing the unintended consequences of the last two decades in order to create balanced businesses that deliver value that is both sustainable for people and the planet.

In championing the next wave of category-leading business, we need to design the market to see the whole person, both their wants and needs. Ultimately a balanced market will yield more valued, and valuable, businesses while addressing a more valued, and valuable, customer.

**We call this Venture with Intention. **Now more than ever we need to be investing in the next wave of business growth inspired by changes people truly desire — and require — in order to move away from disruption, distribution, and distraction toward adaptation, creation, and traction. 

This Fall, we’re on the cusp of a political election, of which has left many of us confused, disillusioned, and uncertain of our futures. We’re more than halfway through the beginning of a new decade, and already this year has intensified and exposed so many important issues that have been simmering beneath the surface of our social contracts. We’re living amid the crisis and fallout of COVID and the social pandemic of racism. 

The pandemic left us all to isolate, but the need to support the profound Black Lives Matter movement inspired us to take to protests and stand for social and racial reform. 

For the past months, we have been motivating ourselves to learn, understand and act. This isn’t just within the walls of the Forerunner Ventures office but with our portfolio companies as well. For too long, there has been a lack of self-awareness permeating the predominantly white tech community. What we’ve seen and our ongoing education of the deeply rooted matters, have become a guiding principle as we build our roadmap for permanent change and allyship. This is not a templated corporate statement; this is our call to daily action to keep anti-racist momentum going, and we’ll continue to use this to make not only business decisions, but personal ones as well. 

In sum, we’ve had to rethink what values and actions we hold dear, and we can no longer live our lives without empathy for how everything we do impacts the world around us. Our actions, our words, our purchases, and our conversations have an influence we are more attuned to than ever. 

With all of this in mind, we believe that our legacy of understanding people’s behaviors, preferences, and expectations offers a distinct advantage. When combined with a clear view of what it takes to have real business and social impact and reach scale, we believe we are well-positioned to find the next set of breakout companies.`,
  },
];

export const categories: ArticleCategory[] = ["Investment Announcements", "Theses", "Research"];

export function getYears(): (number | string)[] {
  return [2026, 2025, 2024, 2023, 2022, "Pre-2022"];
  }

export function getCompanies(): string[] {
  const allCompanies: string[] = [];
  articles.forEach(a => {
    if (a.company) {
      a.company.split(', ').forEach(c => {
        const trimmed = c.trim();
        if (trimmed && !allCompanies.includes(trimmed)) allCompanies.push(trimmed);
      });
    }
  });
  return allCompanies.sort((a, b) => a.localeCompare(b));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getAllArticles(): Article[] {
  return articles;
}


