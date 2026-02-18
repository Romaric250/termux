'use client'

import { motion } from 'framer-motion'
import { GitMerge, GitBranch, ArrowUp } from 'lucide-react'

const SCENARIOS = [
  {
    icon: <GitMerge className="w-8 h-8 text-git-green" />,
    title: 'MERGE CONFLICT HELL',
    description: 'Navigate the dreaded three-way merge. Resolve conflicts like a pro before your PR gets blocked.',
    level: 'LVL 12 SCENARIO',
  },
  {
    icon: <GitBranch className="w-8 h-8 text-git-green" />,
    title: 'DETACHED HEAD MYSTERY',
    description: 'You checked out a commit. Now nothing works. Find your way back to safety.',
    level: 'LVL 08 SCENARIO',
  },
  {
    icon: <ArrowUp className="w-8 h-8 text-git-green" />,
    title: 'ACCIDENTAL FORCE-PUSH',
    description: 'Oops. You overwrote main. Learn to recover and prevent it from ever happening again.',
    level: 'LVL 15 SCENARIO',
  },
]

export default function GitIsHardSection() {
  return (
    <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">
          Git is Hard. We made it a Game.
        </h2>
        <p className="text-base sm:text-lg text-gray-400 text-center mb-10 sm:mb-16 max-w-2xl mx-auto px-2">
          Real scenarios. Real commands. Zero risk to your actual codebase.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {SCENARIOS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-git-gray/50 border border-white/10 rounded-lg p-5 sm:p-6 hover:border-git-green/30 transition-colors"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>
              <span className="text-xs text-gray-500">{item.level}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
