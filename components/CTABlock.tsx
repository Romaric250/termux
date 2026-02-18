'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function CTABlock() {
  return (
    <section className="relative z-10 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="bg-git-green rounded-2xl p-12 md:p-16 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-start justify-between gap-8">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  READY TO BECOME A GIT LEGEND?
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-xl">
                  Join 50,000+ developers mastering the command line. Start your first session now — free, in-browser, no install required.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/play"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded font-medium hover:bg-white/10 transition-colors"
                  >
                    INITIALIZE GAME
                  </Link>
                  <Link
                    href="/challenges"
                    className="inline-flex items-center gap-2 bg-white text-git-green px-6 py-3 rounded font-medium hover:bg-white/90 transition-colors"
                  >
                    VIEW MODULES
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="hidden md:block text-white/20">
                <div className="w-24 h-24 rounded-lg bg-white/10 flex items-center justify-center">
                  <span className="font-mono text-4xl">&gt;_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
