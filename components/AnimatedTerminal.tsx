'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const TERMINAL_BLOCKS = [
  { type: 'command' as const, text: '$ git status' },
  { type: 'output' as const, text: 'On branch master\nYour branch is up to date with origin/master.\n\nChanges not staged for commit:\n  modified:   package.json' },
  { type: 'command' as const, text: '$ git checkout -b fix/prod-explosion' },
  { type: 'output' as const, text: "Switched to a new branch 'fix/prod-explosion'" },
  { type: 'command' as const, text: '$ git merge conflict-heaven' },
  { type: 'output' as const, text: 'Auto-merging index.js\nCONFLICT (content): Merge conflict in index.js' },
]

function renderOutput(text: string) {
  const parts = text.split(/(origin\/master|fix\/prod-explosion|master|CONFLICT)/g)
  return parts.map((part, i) => {
    if (['master', 'origin/master', 'fix/prod-explosion'].includes(part)) {
      return <span key={i} className="text-git-green">{part}</span>
    }
    if (part === 'CONFLICT') {
      return <span key={i} className="text-git-green font-semibold">{part}</span>
    }
    return part
  })
}

export default function AnimatedTerminal() {
  const [blockIndex, setBlockIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    const block = TERMINAL_BLOCKS[blockIndex]
    if (!block) return

    const isCommand = block.type === 'command'
    const delay = isCommand ? 35 : 18

    if (charIndex < block.text.length) {
      const timer = setTimeout(() => setCharIndex((c) => c + 1), delay)
      return () => clearTimeout(timer)
    }

    if (blockIndex < TERMINAL_BLOCKS.length - 1) {
      const timer = setTimeout(() => {
        setBlockIndex((b) => b + 1)
        setCharIndex(0)
      }, isCommand ? 400 : 200)
      return () => clearTimeout(timer)
    }

    const promptTimer = setTimeout(() => setShowPrompt(true), 300)
    return () => clearTimeout(promptTimer)
  }, [blockIndex, charIndex])

  useEffect(() => {
    if (!showPrompt) return
    const cursorTimer = setInterval(() => setShowCursor((c) => !c), 530)
    const restartTimer = setTimeout(() => {
      setBlockIndex(0)
      setCharIndex(0)
      setShowPrompt(false)
    }, 5000)
    return () => {
      clearInterval(cursorTimer)
      clearTimeout(restartTimer)
    }
  }, [showPrompt])

  const isTyping = blockIndex < TERMINAL_BLOCKS.length && !showPrompt
  const currentBlock = isTyping ? TERMINAL_BLOCKS[blockIndex] : null
  const completedCount = showPrompt ? TERMINAL_BLOCKS.length : blockIndex

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex-1 max-w-xl"
    >
      <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-gray-400 ml-4 font-mono">git root@termux-internal</span>
        </div>
        <div className="p-4 font-mono text-sm min-h-[280px]">
          {TERMINAL_BLOCKS.slice(0, completedCount).map((block, i) => (
            <div key={i} className={block.type === 'command' ? 'text-git-green' : 'text-gray-300 mt-2'}>
              {block.type === 'command' ? block.text : renderOutput(block.text)}
            </div>
          ))}
          {currentBlock && (
            <div className={currentBlock.type === 'command' ? 'text-git-green' : 'text-gray-300 mt-2'}>
              {currentBlock.type === 'command'
                ? currentBlock.text.slice(0, charIndex)
                : renderOutput(currentBlock.text.slice(0, charIndex))}
              <span className="inline-block w-2 h-4 ml-0.5 align-middle bg-git-green animate-pulse" />
            </div>
          )}
          {showPrompt && (
            <div className="mt-4 flex items-center">
              <span className="text-git-green">$</span>
              <span className={`ml-2 w-2 h-4 bg-git-green transition-opacity duration-75 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
