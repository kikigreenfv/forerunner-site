{`import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Forerunner Ventures",
  description: "Forerunner Ventures Privacy Policy",
  robots: {
    index: false,
    follow: false,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-20 pt-32 pb-12 md:pb-16 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-10 w-[300px] h-[300px] bg-foreground/[0.02] rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-4">Legal</p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-foreground/50">Last Updated: July 11, 2024</p>
        </div>
      </section>

      <main className="px-6 md:px-12 lg:px-20 pb-20">
        {/* Divider */}
        <div className="border-t border-foreground/10 mb-12" />
        
        <article className="max-w-3xl">
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-8">
            <p>
              This Privacy Policy describes the privacy practices of Forerunner Ventures Management, LLC and our subsidiaries and affiliates (collectively "Forerunner," "we," "us" or "our") and how we handle personal information that we collect through our digital properties that link to this Privacy Policy including our websites (the "Service").
            </p>

            <p>
              <strong>California residents:</strong> See our <a href="#california" className="text-lavender hover:underline">Notice to California residents</a> for information about your personal information and privacy rights.
            </p>

            <nav className="border-l-2 border-foreground/20 pl-6 my-10">
              <h2 className="text-sm uppercase tracking-widest text-foreground/50 mb-4">Index</h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#personal-info" className="hover:text-lavender transition-colors">Personal information we collect</a></li>
                <li><a href="#how-we-use" className="hover:text-lavender transition-colors">How we use your personal information</a></li>
                <li><a href="#how-we-share" className="hover:text-lavender transition-colors">How we share your personal information</a></li>
                <li><a href="#your-choices" className="hover:text-lavender transition-colors">Your choices</a></li>
                <li><a href="#other-sites" className="hover:text-lavender transition-colors">Other sites and services</a></li>
                <li><a href="#security" className="hover:text-lavender transition-colors">Security</a></li>
                <li><a href="#international" className="hover:text-lavender transition-colors">International data transfer</a></li>
                <li><a href="#children" className="hover:text-lavender transition-colors">Children</a></li>
                <li><a href="#changes" className="hover:text-lavender transition-colors">Changes to this Privacy Policy</a></li>
                <li><a href="#contact" className="hover:text-lavender transition-colors">How to contact us</a></li>
                <li><a href="#california" className="hover:text-lavender transition-colors">Notice to California residents</a></li>
              </ul>
            </nav>

            <section id="personal-info">
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">Personal information we collect</h2>
              
              <p className="mb-4"><strong>Information you provide to us.</strong> Personal information you may provide to us through the Service or otherwise includes:</p>
              
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Contact data,</strong> such as your first and last name, email and mailing addresses, phone number, professional title, and organizational affiliation.</li>
                <li><strong>Company data.</strong> Any information about you, your colleagues or your company that you share with us in relation to investments or potential investments in your company by the funds we manage, such as your and colleagues' professional and educational backgrounds.</li>
                <li><strong>Research data</strong> that you provide when you agree to participate in our surveys, quizzes or research activities, such as your age, interests, survey and quiz responses and demographic data.</li>
                <li><strong>Communications data,</strong> including information that we exchange with you when you contact us with questions or feedback, through social media, or otherwise.</li>
                <li><strong>Marketing data,</strong> such as your preferences for receiving our marketing communications and details about your engagement with them.</li>
                <li><strong>Event registration data.</strong> Information you provide when you register for or attend in-person or online events that we host or co-host.</li>
                <li><strong>Other data</strong> not specifically listed here, which we will use as described in this Privacy Policy or as otherwise disclosed at the time of collection.</li>
              </ul>

              <p className="mb-4"><strong>Third party sources.</strong> We may combine personal information we receive from you with personal information we obtain from other sources, including, public sources such as social media platforms.</p>

              <p className="mb-4"><strong>Automatic data collection.</strong> We, our service providers, and our business partners may automatically log information about you, your computer or mobile device, and your interaction over time with the Service, our communications and other online services, such as:</p>

              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Device data,</strong> such as your computer's or mobile device's operating system type and version, manufacturer and model, browser type, screen resolution, RAM and disk size, CPU usage, device type (e.g., phone, tablet), IP address, unique identifiers (including identifiers used for advertising purposes), language settings, mobile device carrier, radio/network information (e.g., WiFi, LTE, 3G), and general location information such as city, state or geographic area.</li>
                <li><strong>Online activity data,</strong> such as pages or screens you viewed, how long you spent on a page or screen, the website you visited before browsing to the Service, navigation paths between pages or screens, information about your activity on a page or screen, access times, and duration of access, and whether you have opened our marketing emails or clicked links within them.</li>
                <li><strong>Communication interaction data</strong> such as your interactions with our email, text or other communications (e.g., whether you open and/or forward emails) – we may do this through use of pixel tags (which are also known as clear GIFs), which may be embedded invisibly in our emails.</li>
              </ul>

              <p className="mb-4"><strong>Cookies and similar technologies.</strong> Some of the automatic collection described above is facilitated by the following technologies:</p>

              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Cookies,</strong> which are small text files that websites store on user devices and that allow web servers to record users' web browsing activities and remember their submissions, preferences, and login status as they navigate a site. Cookies used on our sites include both "session cookies" that are deleted when a session ends, "persistent cookies" that remain longer, "first party" cookies that we place and "third party" cookies that our third-party business partners and service providers place.</li>
                <li><strong>Local storage technologies,</strong> like HTML5, that provide cookie-equivalent functionality but can store larger amounts of data on your device outside of your browser in connection with specific applications.</li>
                <li><strong>Web beacons,</strong> also known as pixel tags or clear GIFs, which are used to demonstrate that a webpage or email was accessed or opened, or that certain content was viewed or clicked.</li>
              </ul>

              <p><strong>Data about others.</strong> Users of the Service may have the opportunity to provide the contact information of others to us, such as when you provide someone's contact information for our newsletter. Please do not provide someone else's information to us unless you have their permission to do so.</p>
            </section>

            <section id="how-we-use">
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">How we use your personal information</h2>
              
              <p className="mb-4">We use your personal information for the following purposes or as otherwise described at the time of collection:</p>

              <p className="mb-2"><strong>Service delivery and operations.</strong> We use your personal information to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>provide, operate and improve the Service and our business;</li>
                <li>explore business opportunities and execute transactions, including our investments in companies and investments in the funds we manage;</li>
                <li>enable security features of the Service;</li>
                <li>communicate with you about the Service, including by sending announcements, mailing list updates, security alerts, and support and administrative messages;</li>
                <li>understand your needs and interests, and personalize your experience with the Service and our communications; and</li>
                <li>provide support for the Service, and respond to your requests, questions and feedback.</li>
              </ul>

              <p className="mb-6"><strong>Research and development.</strong> We may use your personal information for research and development purposes, including to analyze and improve the Service and our business and to learn about consumer archetypes. As part of these activities, we may create aggregated, de-identified or other anonymous data from personal information we collect. We make personal information into de-identified or anonymous data by removing information that makes the data personally identifiable to you. We may use this aggregated, de-identified, or otherwise anonymous data and share it with third parties for our lawful business purposes, including to analyze and improve the Service and promote our business.</p>

              <p className="mb-6"><strong>Marketing.</strong> We, our service providers may collect and use your personal information for marketing and advertising purposes. We may send you Forerunner-related direct marketing communications as permitted by law, including by email and mail. You may opt-out of our marketing communications as described in the Opt-out of marketing section below.</p>

              <p className="mb-2"><strong>Compliance and protection.</strong> We may use your personal information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>comply with applicable laws, lawful requests, and legal process, such as to respond to subpoenas or requests from government authorities;</li>
                <li>protect our, your or others' rights, privacy, safety or property (including by making and defending legal claims);</li>
                <li>audit our internal processes for compliance with legal and contractual requirements and internal policies;</li>
                <li>enforce the terms and conditions that govern the Service; and</li>
                <li>prevent, identify, investigate and deter fraudulent, harmful, unauthorized, unethical or illegal activity, including cyberattacks and identity theft.</li>
              </ul>
            </section>

            <section id="how-we-share">
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">How we share your personal information</h2>
              
              <p className="mb-4">We may share your personal information with the following parties and as otherwise described in this Privacy Policy or at the time of collection:</p>

              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Affiliates.</strong> Our corporate parent, subsidiaries, and affiliates, for purposes consistent with this Privacy Policy.</li>
                <li><strong>Service providers.</strong> Companies and individuals that provide services on our behalf or help us operate the Service or our business (such as hosting, information technology, customer support, print and mail fulfillment, email delivery, marketing, and website analytics).</li>
                <li><strong>Investors.</strong> We may share with investors and prospective investors in our funds bios and other information about the founders and key personnel of our portfolio companies.</li>
                <li><strong>Professional advisors.</strong> Professional advisors, such as lawyers, auditors, bankers and insurers, where necessary in the course of the professional services that they render to us.</li>
                <li><strong>Authorities and others.</strong> Law enforcement, government authorities, and private parties, as we believe in good faith to be necessary or appropriate for the compliance and protection purposes described above.</li>
                <li><strong>Business transferees.</strong> Acquirers and other relevant participants in business transactions (or negotiations of or due diligence for such transactions) involving a corporate divestiture, merger, consolidation, acquisition, reorganization, sale or other disposition of all or any portion of the business or assets of, or equity interests in, Forerunner or our affiliates (including, in connection with a bankruptcy or similar proceedings).</li>
              </ul>
            </section>

            <section id="your-choices">
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">Your choices</h2>
              
              <p className="mb-4">You have the following choices with respect to your personal information.</p>

              <p className="mb-4"><strong>Opt-out of marketing communications.</strong> You may opt-out of marketing-related emails by following the opt-out or unsubscribe instructions at the bottom of the email, or by contacting us. Please note that if you choose to opt-out of marketing-related emails, you may continue to receive service-related and other non-marketing emails.</p>

              <p className="mb-4"><strong>Cookies.</strong> Most browser settings let you delete and reject cookies placed by websites. Many browsers accept cookies by default until you change your settings. If you do not accept cookies, you may not be able to use all functionality of the Service and it may not work properly. For more information about cookies, including how to see what cookies have been set on your browser and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-lavender hover:underline">www.allaboutcookies.org</a>.</p>

              <p className="mb-4">We use Google Analytics to help us understand user activity on the Service. You can learn more about Google Analytics cookies at <a href="https://developers.google.com/analytics/resources/concepts/gaConceptsCookies" target="_blank" rel="noopener noreferrer" className="text-lavender hover:underline">Google Analytics Cookies</a> and about how Google protects your data at <a href="http://www.google.com/analytics/learn/privacy.html" target="_blank" rel="noopener noreferrer" className="text-lavender hover:underline">Google Analytics Privacy</a>.</p>

              <p className="mb-4">You can prevent the use of Google Analytics relating to your use of our sites by downloading and installing a browser plugin available at <a href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noopener noreferrer" className="text-lavender hover:underline">Google Analytics Opt-out</a>.</p>

              <p className="mb-4"><strong>Do Not Track.</strong> Some Internet browsers may be configured to send "Do Not Track" signals to the online services that you visit. We currently do not respond to "Do Not Track" signals. To find out more about "Do Not Track," please visit <a href="http://www.allaboutdnt.com" target="_blank" rel="noopener noreferrer" className="text-lavender hover:underline">www.allaboutdnt.com</a>.</p>

              <p><strong>Declining to provide information.</strong> We need to collect personal information to provide certain services. If you do not provide the information we identify as required or mandatory, we may not be able to provide those services.</p>
            </section>

            <section id="other-sites">
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">Other sites and services</h2>
              <p>The Service may contain links to websites and other online services operated by third parties. In addition, our content may be integrated into web pages or other online services that are not associated with us. These links and integrations are not an endorsement of, or representation that we are affiliated with, any third party. We do not control websites or online services operated by third parties, and we are not responsible for their actions. We encourage you to read the privacy policies of the other websites and online services you use.</p>
            </section>

            <section id="security">
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">Security</h2>
              <p>We employ a number of technical, organizational and physical safeguards designed to protect the personal information we collect. However, security risk is inherent in all internet and information technologies and we cannot guarantee the security of your personal information.</p>
            </section>

            <section id="international">
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">International data transfer</h2>
              <p>We are headquartered in the United States and may use service providers that operate in other countries. Your personal information may be transferred to the United States or other locations where privacy laws may not be as protective as those in your state, province, or country.</p>
            </section>

            <section id="children">
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">Children</h2>
              <p>The Service is not intended for use by children under 16 years of age. If we learn that we have collected personal information through the Service from a child under 16 without the consent of the child's parent or guardian as required by law, we will delete it.</p>
            </section>

            <section id="changes">
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">Changes to this Privacy Policy</h2>
              <p>We reserve the right to modify this Privacy Policy at any time. If we make material changes to this Privacy Policy, we will notify you by updating the date of this Privacy Policy and posting it on the Service or other appropriate means. Any modifications to this Privacy Policy will be effective upon our posting the modified version (or as otherwise indicated at the time of posting). In all cases, your use of the Service after the effective date of any modified Privacy Policy indicates your acceptance of the modified Privacy Policy.</p>
            </section>

            <section id="contact">
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">How to contact us</h2>
              <p className="mb-4">To exercise your choices or if you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
              <ul className="space-y-2">
                <li><strong>Email:</strong> <a href="mailto:info@forerunnerventures.com" className="text-lavender hover:underline">info@forerunnerventures.com</a></li>
                <li><strong>Mail:</strong> One Letterman Drive, Building C Suite C5-100, San Francisco, CA 94129</li>
                <li><strong>Phone:</strong> 415-500-6618</li>
              </ul>
            </section>

            <section id="california">
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">Notice to California residents</h2>
              
              <p className="mb-4">This notice describes our collection, use and disclosure of personal information of California residents in our capacity as a "business" under the California Consumer Privacy Act ("CCPA") and their rights with respect to their personal information. For purposes of this notice, "personal information" has the meaning given in the CCPA but does not include information exempted from the scope of the CCPA.</p>

              <p className="mb-2"><strong>Your privacy rights.</strong> As a California resident, you have the following rights under the CCPA:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Right to know.</strong> You can request information about the categories of personal information that we have collected; the categories of sources from which we collected personal information; the business or commercial purpose for collecting, sharing and/or selling personal information; the categories of any personal information that we sold or disclosed for a business purpose; and the categories of any third parties with whom personal information was sold, shared or disclosed for a business purpose.</li>
                <li><strong>Right to access.</strong> You can request a copy of certain personal information that we have collected about you.</li>
                <li><strong>Right to deletion.</strong> You can request that we delete personal information that we collected from you.</li>
                <li><strong>Right to correction.</strong> You can request that we correct inaccurate personal information that we have collected about you.</li>
                <li><strong>Nondiscrimination.</strong> You are entitled to exercise the rights described above free from discrimination as prohibited by the CCPA.</li>
              </ul>

              <p className="mb-4">The rights described above are not absolute, and in certain cases, we may decline your request as permitted by law. We cannot process your request if you do not provide us with sufficient detail to allow us to understand and respond to it.</p>

              <p className="mb-4"><strong>Identity verification.</strong> You may submit requests to exercise your right to know, access, deletion and correction via email to <a href="mailto:info@forerunnerventures.com" className="text-lavender hover:underline">info@forerunnerventures.com</a>. We need to verify your identity to process your requests to exercise your rights to know, access, deletion and correction, and we reserve the right to confirm your California residency. To verify your identity, we may require you to log into an online account if you have one, provide identifiers we can match against information we may have collected from you previously, confirm your request using the email or telephone account stated in the request, provide government identification, or provide a declaration under penalty of perjury, where permitted by law.</p>

              <p className="mb-6"><strong>Authorized agents.</strong> Your authorized agent may make a request on your behalf upon our verification of the agent's identity and our receipt of a copy of a valid power of attorney given to your authorized agent pursuant to California Probate Code Sections 4000-4465. If you have not provided your agent with such a power of attorney, we may ask you and/or your agent to take additional steps permitted by law to verify that your request is authorized, such as information required to verify your identity and that you have given the authorized agent permission to submit the request.</p>

              <p className="mb-2"><strong>Information practices.</strong> The following describes our practices currently and during the past 12 months:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Sources and purposes.</strong> We collect all categories of personal information from the sources and use them for the business purposes described above in the Privacy Policy.</li>
                <li><strong>Sales and sharing of personal information.</strong> We do not "sell" or "share" personal information as those terms are defined in the CCPA and have no actual knowledge that we have sold or shared the personal information of California residents under 16 years of age.</li>
                <li><strong>Sensitive personal information.</strong> We do not use or disclose sensitive personal information for purposes that California residents have a right to limit under the CCPA.</li>
                <li><strong>Retention.</strong> The criteria for deciding how long to retain personal information is generally based on whether such period is sufficient to fulfill the purposes for which we collected it as described in this notice, including complying with our legal obligations.</li>
              </ul>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
`}
