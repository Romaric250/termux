import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'

const ibmPlexMono = IBM_Plex_Mono({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'TERMUX - Master Git or Break Production',
  description: 'The browser-based terminal game that turns complex Git commands into muscle memory. Conquer the CLI in a high-stakes hacker environment without risking your actual repo.',
  keywords: 'git, learning, interactive, challenges, version control, web development',
  authors: [{ name: 'Git Mastery Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Git Mastery - Master Git Through Interactive Challenges',
    description: 'Learn Git through interactive challenges, daily exercises, and a beautiful web interface.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Git Mastery - Master Git Through Interactive Challenges',
    description: 'Learn Git through interactive challenges, daily exercises, and a beautiful web interface.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${ibmPlexMono.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
} 