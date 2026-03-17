import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { CookieConsent } from '@/components/cookie-consent'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Forerunner Ventures',
    template: '%s | Forerunner Ventures',
  },
  description: 'Forerunner Ventures is an early-stage venture firm backing founders who build companies around how people actually live. We invest at Seed and Series A in consumer-focused businesses across health, finance, commerce, and more.',
  keywords: ['venture capital', 'early-stage investing', 'consumer tech', 'seed stage', 'Series A', 'Forerunner Ventures', 'Kirsten Green', 'fintech', 'health tech', 'commerce'],
  authors: [{ name: 'Forerunner Ventures' }],
  creator: 'Forerunner Ventures',
  publisher: 'Forerunner Ventures',
  metadataBase: new URL('https://forerunnerventures.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://forerunnerventures.com',
    siteName: 'Forerunner Ventures',
    title: 'Forerunner Ventures',
    description: 'Forerunner Ventures is an early-stage venture firm backing founders who build companies around how people actually live.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ForerunnerVC',
    creator: '@ForerunnerVC',
    title: 'Forerunner Ventures',
    description: 'Forerunner Ventures is an early-stage venture firm backing founders who build companies around how people actually live.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
