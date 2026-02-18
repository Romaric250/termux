'use client'

import Link from 'next/link'
import { Shield, Wifi, User } from 'lucide-react'

export default function AuthNav() {
  return (
    <nav className="relative z-10 border-b border-git-green/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-mono text-sm text-git-green font-medium">TERMUX_v1.0</span>
        <div className="flex items-center gap-6 font-mono text-xs text-git-green">
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5" />
            SECURE_SHELL
          </span>
          <span className="flex items-center gap-1.5">
            <Wifi className="w-3.5 h-3.5" />
            ETH0: ACTIVE
          </span>
          <Link href="/" className="p-1.5 rounded border border-git-green/50 hover:bg-git-green/10 transition-colors">
            <User className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </nav>
  )
}
