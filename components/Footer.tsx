'use client'

import { Github, Twitter, Mail } from 'lucide-react'
import Link from 'next/link'
import { useAuthModal } from '@/contexts/AuthModalContext'

export default function Footer() {
  const { openLogin } = useAuthModal()
  return (
    <footer className="relative z-10 py-10 sm:py-12 md:py-16 px-4 sm:px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 sm:gap-12">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-3 sm:mb-4">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-git-green flex items-center justify-center rounded shrink-0">
              <span className="text-white font-mono text-base sm:text-lg">&gt;</span>
            </div>
            <span className="font-display font-semibold text-lg sm:text-xl tracking-tight">TERMUX</span>
          </div>
          <p className="text-gray-400 text-sm max-w-md mb-4 sm:mb-6">
            The browser-based terminal game that turns Git commands into muscle memory. No install. No risk.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="flex gap-10 sm:gap-16">
          <div>
            <h4 className="font-display font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Game</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/play" className="hover:text-white transition-colors">Play</Link></li>
              <li><Link href="/challenges" className="hover:text-white transition-colors">Challenges</Link></li>
              <li><Link href="/leaderboard" className="hover:text-white transition-colors">Leaderboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/docs" className="hover:text-white transition-colors">Docs</Link></li>
              <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
              <li><button onClick={openLogin} className="hover:text-white transition-colors text-left">Login</button></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-xs text-gray-500 flex flex-col sm:flex-row gap-2 sm:gap-4 px-4 sm:px-0">
        <span>© 2026 TERMUX. All rights reserved. v1.0</span>
        <span>
          Developed with love by{' '}
          <a href="https://github.com/romaric250" target="_blank" rel="noopener noreferrer" className="text-git-green hover:underline transition-colors">
            Romaric Lonfonyuy
          </a>
        </span>
      </div>
    </footer>
  )
}
