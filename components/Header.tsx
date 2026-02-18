'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useAuthModal } from '@/contexts/AuthModalContext'

const navLinks = [
  { href: '/challenges', label: 'Challenges' },
  { href: '/leaderboard', label: 'Leaderboard' },
  { href: '/docs', label: 'Docs' },
  { href: '/community', label: 'Community' },
]

export default function Header() {
  const { openLogin, openRegister } = useAuthModal()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="relative z-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-git-green flex items-center justify-center rounded">
            <span className="text-white font-mono text-base sm:text-lg">&gt;</span>
          </div>
          <span className="font-display font-semibold text-lg sm:text-xl tracking-tight">TERMUX</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-git-green transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={openLogin}
            className="text-sm font-medium text-git-green border border-git-green px-4 py-2 rounded hover:bg-git-green/10 transition-colors"
          >
            Login
          </button>
          <button
            onClick={openRegister}
            className="text-sm font-medium text-git-green hover:underline transition-colors"
          >
            Register
          </button>
          <Link
            href="/play"
            className="text-sm font-medium bg-git-green text-white px-4 py-2 rounded hover:bg-git-green/90 transition-colors"
          >
            Start playing
          </Link>
        </div>

        {/* Mobile: CTA + hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            href="/play"
            className="text-sm font-medium bg-git-green text-white px-3 py-2 rounded hover:bg-git-green/90 transition-colors shrink-0"
          >
            Play
          </Link>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 px-4 text-sm font-medium hover:text-git-green hover:bg-white/5 rounded transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => { openLogin(); setMobileOpen(false) }}
                className="w-full text-left py-3 px-4 text-sm font-medium text-git-green border border-git-green rounded hover:bg-git-green/10 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => { openRegister(); setMobileOpen(false) }}
                className="w-full text-left py-3 px-4 text-sm font-medium text-git-green hover:underline"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
