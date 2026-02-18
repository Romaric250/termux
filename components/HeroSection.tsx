'use client'

import { motion } from 'framer-motion'
import { Play, Trophy } from 'lucide-react'
import Link from 'next/link'
import AnimatedTerminal from './AnimatedTerminal'

export default function HeroSection() {
  return (
    <section className="relative z-10 min-h-[calc(100dvh-5rem)] sm:min-h-[calc(100vh-5rem)] flex items-center py-12 sm:py-16 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full text-center lg:text-left"
          >
            <span className="inline-block bg-git-green text-white text-xs font-semibold px-3 py-1 rounded mb-4 sm:mb-6">
              v1.0 now live
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Master Git or
              <br />
              <span className="text-git-green">Break Production</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              The browser-based terminal game that turns complex Git commands into muscle memory. Conquer the CLI in a high-stakes hacker environment without risking your actual repo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
              <Link
                href="/play"
                className="inline-flex items-center justify-center gap-2 bg-git-green text-white px-5 py-3 sm:px-6 sm:py-3 rounded font-medium hover:bg-git-green/90 transition-colors"
              >
                <Play className="w-4 h-4 shrink-0" />
                Init session
              </Link>
              <Link
                href="/leaderboard"
                className="inline-flex items-center justify-center gap-2 border border-white text-white px-5 py-3 sm:px-6 sm:py-3 rounded font-medium hover:bg-white/5 transition-colors"
              >
                <Trophy className="w-4 h-4 shrink-0" />
                Leaderboard
              </Link>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-git-gray border-2 border-black" />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-400">Developers pushing commits today</span>
            </div>
          </motion.div>
          <AnimatedTerminal />
        </div>
      </div>
    </section>
  )
}
