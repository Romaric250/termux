'use client'

import Link from 'next/link'
import { useAuthModal } from '@/contexts/AuthModalContext'

export default function Header() {
  const { openLogin, openRegister } = useAuthModal()

  return (
    <nav className="relative z-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-git-green flex items-center justify-center rounded">
            <span className="text-white font-mono text-lg">&gt;</span>
          </div>
          <span className="font-display font-semibold text-xl tracking-tight">TERMUX</span>
        </Link>
        <div className="flex items-center space-x-8">
          <Link href="/challenges" className="text-sm font-medium hover:text-git-green transition-colors">
            CHALLENGES
          </Link>
          <Link href="/leaderboard" className="text-sm font-medium hover:text-git-green transition-colors">
            LEADERBOARD
          </Link>
          <Link href="/docs" className="text-sm font-medium hover:text-git-green transition-colors">
            DOCS
          </Link>
          <Link href="/community" className="text-sm font-medium hover:text-git-green transition-colors">
            COMMUNITY
          </Link>
          <button
            onClick={openLogin}
            className="text-sm font-medium text-git-green border border-git-green px-4 py-2 rounded hover:bg-git-green/10 transition-colors"
          >
            LOGIN
          </button>
          <button
            onClick={openRegister}
            className="text-sm font-medium text-git-green hover:underline transition-colors"
          >
            REGISTER
          </button>
          <Link
            href="/play"
            className="text-sm font-medium bg-git-green text-white px-4 py-2 rounded hover:bg-git-green/90 transition-colors"
          >
            START PLAYING
          </Link>
        </div>
      </div>
    </nav>
  )
}
