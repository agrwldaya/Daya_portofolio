import type { Metadata } from 'next'
import { Inter, Dancing_Script, Caveat, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Particles from '@/components/Particles'
import ScanLine from '@/components/ScanLine'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
})

const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing',
  weight: ['400', '500', '600', '700'],
})

const caveat = Caveat({ 
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Dayashankar Agrawal | Full-Stack Developer',
  description: 'Full-Stack Developer specializing in React, Next.js, Node.js, and competitive programming. Building scalable web applications and solving complex problems.',
  icons: {
    icon: '/portofolio_logo.png',
    shortcut: '/portofolio_logo.png',
    apple: '/portofolio_logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${dancingScript.variable} ${caveat.variable} font-mono antialiased`}>
        <Particles />
        <ScanLine />
        <Navigation />
        {children}
      </body>
    </html>
  )
}

