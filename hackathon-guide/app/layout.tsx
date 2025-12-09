import type { Metadata } from 'next'
import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import Navigation from '../components/Navigation'
import MatrixRain from '../components/MatrixRain'
import Footer from '../components/Footer'
import Providers from '../components/Providers'

const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  title: 'HackGuide | Midnight Hacker Kit',
  description: 'Curated resources, tools, and winning strategies for hackathons.',
  metadataBase: new URL('https://hackguide.vercel.app'),
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jetbrains.variable}>
      <body>
  <MatrixRain />
  <Navigation />
  <main className="relative z-10 max-w-6xl mx-auto px-4">{children}</main>
  <Footer />
  <Providers />
      </body>
    </html>
  )
}
