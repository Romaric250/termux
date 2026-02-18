'use client'

import { motion } from 'framer-motion'
import { Play, Trophy } from 'lucide-react'
import Link from 'next/link'
import AnimatedTerminal from './AnimatedTerminal'

export default function HeroSection() {
  return (
    <section className="relative z-10 min-h-[calc(100vh-5rem)] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <span className="inline-block bg-git-green text-white text-xs font-semibold px-3 py-1 rounded mb-6">
            V1.0 NOW LIVE
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Master Git or
            <br />
            <span className="text-git-green">Break Production</span>
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
            The browser-based terminal game that turns complex Git commands into muscle memory. Conquer the CLI in a high-stakes hacker environment without risking your actual repo.
          </p>
          <div className="flex gap-4 mb-8">
            <Link
              href="/play"
              className="inline-flex items-center gap-2 bg-git-green text-white px-6 py-3 rounded font-medium hover:bg-git-green/90 transition-colors"
            >
              <Play className="w-4 h-4" />
              INIT SESSION
            </Link>
            <Link
              href="/leaderboard"
              className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 rounded font-medium hover:bg-white/5 transition-colors"
            >
              <Trophy className="w-4 h-4" />
              LEADERBOARD
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-git-gray border-2 border-black" />
              ))}
            </div>
            <span className="text-sm text-gray-400">Developers pushing commits today</span>
          </div>
        </motion.div>
        <AnimatedTerminal />
      </div>
      </div>
    </section>
  )
}
