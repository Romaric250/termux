'use client'

import { motion } from 'framer-motion'

const TABLE_ROWS = [
  { feature: 'Learning Method', old: "Copy-pasting commands you don't understand", termux: 'Interactive CLI challenges' },
  { feature: 'Retention', old: 'Forget it in a week', termux: 'Muscle memory through repetition' },
  { feature: 'Failure Mode', old: 'Break production, panic, revert', termux: 'Fail safely in a sandbox' },
  { feature: 'Realism', old: 'Theoretical examples', termux: 'Real-world merge conflicts & scenarios' },
]

export default function ComparisonTable() {
  return (
    <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 px-2">
          The Termux way
          <span className="text-gray-500 font-normal"> vs </span>
          the old way
        </h2>
        <div className="mt-8 sm:mt-12 -mx-4 sm:mx-0 overflow-x-auto">
          <div className="min-w-[520px] sm:min-w-0 overflow-hidden rounded-lg border border-white/10">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 sm:py-4 sm:px-6 bg-git-gray/50 font-display font-semibold text-xs sm:text-sm">Feature</th>
                  <th className="text-left py-3 px-4 sm:py-4 sm:px-6 bg-blue-900/30 font-display font-semibold text-xs sm:text-sm">StackOverflow & Docs</th>
                  <th className="text-left py-3 px-4 sm:py-4 sm:px-6 bg-git-green/20 font-display font-semibold text-git-green text-xs sm:text-sm">Termux Training</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm">
                {TABLE_ROWS.map((row, i) => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="py-3 px-4 sm:py-4 sm:px-6 font-medium">{row.feature}</td>
                    <td className="py-3 px-4 sm:py-4 sm:px-6 text-gray-400">{row.old}</td>
                    <td className="py-3 px-4 sm:py-4 sm:px-6">{row.termux}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
