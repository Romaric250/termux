import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Git Mastery - Master Git Through Interactive Challenges',
  description: 'Learn Git through interactive challenges, daily exercises, and a beautiful web interface. Master version control with hands-on practice.',
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
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 