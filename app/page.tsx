'use client'

import { motion } from 'framer-motion'
import { 
  Play, 
  Trophy, 
  GitMerge, 
  GitBranch, 
  ArrowUp,
  Github,
  Twitter,
  Mail,
  ChevronRight
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <nav className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-git-green flex items-center justify-center rounded">
            <span className="text-white font-mono text-lg">&gt;</span>
          </div>
          <span className="font-display font-semibold text-xl tracking-tight">TERMUX</span>
        </div>
        
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
          <Link href="/login" className="text-sm font-medium text-git-green border border-git-green px-4 py-2 rounded hover:bg-git-green/10 transition-colors">
            LOGIN
          </Link>
          <Link 
            href="/play" 
            className="text-sm font-medium bg-git-green text-white px-4 py-2 rounded hover:bg-git-green/90 transition-colors"
          >
            START PLAYING
          </Link>
        </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left - Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <span className="inline-block bg-git-green text-white text-xs font-semibold px-3 py-1 rounded mb-6">
              V2.0 NOW LIVE
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

          {/* Right - Terminal Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 max-w-xl"
          >
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              {/* Window controls */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-gray-400 ml-4 font-mono">git root@termux-internal</span>
              </div>
              {/* Terminal content */}
              <div className="p-4 font-mono text-sm min-h-[280px]">
                <div className="text-git-green">$ git status</div>
                <div className="text-gray-300 mt-2">
                  On branch <span className="text-git-green">master</span>
                  <br />
                  Your branch is up to date with <span className="text-git-green">origin/master</span>.
                  <br /><br />
                  Changes not staged for commit:
                  <br />
                  &nbsp;&nbsp;modified:&nbsp;&nbsp;package.json
                </div>
                <div className="text-git-green mt-4">$ git checkout -b fix/prod-explosion</div>
                <div className="text-gray-300 mt-2">Switched to a new branch &apos;<span className="text-git-green">fix/prod-explosion</span>&apos;</div>
                <div className="text-git-green mt-4">$ git merge conflict-heaven</div>
                <div className="text-gray-300 mt-2">
                  Auto-merging index.js
                  <br />
                  <span className="text-git-green font-semibold">CONFLICT</span> (content): Merge conflict in index.js
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-git-green">$</span>
                  <span className="ml-2 w-2 h-4 bg-git-green animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Git is Hard Section */}
      <section className="relative z-10 py-20 px-6 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Git is Hard. We made it a Game.
          </h2>
          <p className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Real scenarios. Real commands. Zero risk to your actual codebase.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-git-gray/50 border border-white/10 rounded-lg p-6 hover:border-git-green/30 transition-colors"
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

      {/* Comparison Table */}
      <section className="relative z-10 py-20 px-6 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-2">
            THE TERMUX WAY
            <span className="text-gray-500 font-normal"> VS </span>
            THE OLD WAY
          </h2>

          <div className="mt-12 overflow-hidden rounded-lg border border-white/10">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-4 px-6 bg-git-gray/50 font-display font-semibold">FEATURE</th>
                  <th className="text-left py-4 px-6 bg-blue-900/30 font-display font-semibold">STACKOVERFLOW & DOCS</th>
                  <th className="text-left py-4 px-6 bg-git-green/20 font-display font-semibold text-git-green">TERMUX TRAINING</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t border-white/10">
                  <td className="py-4 px-6 font-medium">Learning Method</td>
                  <td className="py-4 px-6 text-gray-400">Copy-pasting commands you don&apos;t understand</td>
                  <td className="py-4 px-6">Interactive CLI challenges</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-4 px-6 font-medium">Retention</td>
                  <td className="py-4 px-6 text-gray-400">Forget it in a week</td>
                  <td className="py-4 px-6">Muscle memory through repetition</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-4 px-6 font-medium">Failure Mode</td>
                  <td className="py-4 px-6 text-gray-400">Break production, panic, revert</td>
                  <td className="py-4 px-6">Fail safely in a sandbox</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-4 px-6 font-medium">Realism</td>
                  <td className="py-4 px-6 text-gray-400">Theoretical examples</td>
                  <td className="py-4 px-6">Real-world merge conflicts & scenarios</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* CTA Block */}
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

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-git-green flex items-center justify-center rounded">
                <span className="text-white font-mono text-lg">&gt;</span>
              </div>
              <span className="font-display font-semibold text-xl tracking-tight">TERMUX</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md mb-6">
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
          <div className="flex gap-16">
            <div>
              <h4 className="font-display font-semibold mb-4">GAME</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/play" className="hover:text-white transition-colors">Play</Link></li>
                <li><Link href="/challenges" className="hover:text-white transition-colors">Challenges</Link></li>
                <li><Link href="/leaderboard" className="hover:text-white transition-colors">Leaderboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">PLATFORM</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/docs" className="hover:text-white transition-colors">Docs</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
                <li><Link href="/login" className="hover:text-white transition-colors">Login</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-xs text-gray-500">
          © 2024 TERMUX. All rights reserved. v2.0
        </div>
      </footer>
    </div>
  )
}
