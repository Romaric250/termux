'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import { useState, useEffect } from 'react'
import { 
  Terminal, 
  CheckCircle, 
  XCircle, 
  Lightbulb,
  ArrowRight,
  Trophy,
  Timer,
  Target
} from 'lucide-react'

interface Challenge {
  id: string
  name: string
  description: string
  task: string
  solution: string
  hints: string[]
  explanation: string
  category: 'beginner' | 'intermediate' | 'advanced'
  points: number
}

const sampleChallenges: Challenge[] = [
  {
    id: '1',
    name: 'Git Init Master',
    description: 'Initialize a new Git repository in the current directory',
    task: 'Use git init to create a new repository',
    solution: 'git init',
    hints: ['Think about the command to start a new repository', 'It\'s a simple two-word command'],
    explanation: 'git init creates a new Git repository in the current directory. This is the first step in version controlling your project.',
    category: 'beginner',
    points: 10
  },
  {
    id: '2',
    name: 'Stage Everything',
    description: 'Stage all files in the current directory for commit',
    task: 'Use git add to stage all files',
    solution: 'git add .',
    hints: ['You want to add all files', 'Use the dot to represent current directory'],
    explanation: 'git add . stages all files in the current directory. The dot (.) represents the current directory.',
    category: 'beginner',
    points: 10
  },
  {
    id: '3',
    name: 'First Commit',
    description: 'Create your first commit with the message "Initial commit"',
    task: 'Use git commit with a message',
    solution: 'git commit -m "Initial commit"',
    hints: ['You need to commit with a message', 'Use the -m flag for message'],
    explanation: 'git commit -m "message" creates a new commit with the specified message. The -m flag allows you to add a commit message.',
    category: 'beginner',
    points: 15
  }
]

export default function PlayPage() {
  const [currentChallenge, setCurrentChallenge] = useState<Challenge>(sampleChallenges[0])
  const [userInput, setUserInput] = useState('')
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState<string[]>([])
  const [timeLeft, setTimeLeft] = useState(60)
  const [isTimerRunning, setIsTimerRunning] = useState(false)

  useEffect(() => {
    if (isTimerRunning && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [timeLeft, isTimerRunning])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (userInput.trim().toLowerCase() === currentChallenge.solution.toLowerCase()) {
      setIsCorrect(true)
      setScore(score + currentChallenge.points)
      setCompleted([...completed, currentChallenge.id])
      setShowExplanation(true)
      setIsTimerRunning(false)
    } else {
      setIsCorrect(false)
      setShowHint(true)
    }
  }

  const nextChallenge = () => {
    const nextIndex = sampleChallenges.findIndex(c => c.id === currentChallenge.id) + 1
    if (nextIndex < sampleChallenges.length) {
      setCurrentChallenge(sampleChallenges[nextIndex])
      setUserInput('')
      setIsCorrect(null)
      setShowHint(false)
      setShowExplanation(false)
      setTimeLeft(60)
      setIsTimerRunning(true)
    }
  }

  const resetChallenge = () => {
    setUserInput('')
    setIsCorrect(null)
    setShowHint(false)
    setShowExplanation(false)
    setTimeLeft(60)
    setIsTimerRunning(true)
  }

  useEffect(() => {
    setIsTimerRunning(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-git-dark via-git-gray to-git-dark">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8"
        >
          <div className="flex items-center space-x-3">
            <Terminal className="w-7 h-7 sm:w-8 sm:h-8 text-git-blue shrink-0" />
            <h1 className="font-display text-2xl sm:text-3xl font-bold gradient-text">Git Challenge</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-git-blue">
              <Trophy className="w-5 h-5" />
              <span className="font-mono">{score}</span>
            </div>
            <div className="flex items-center space-x-2 text-git-orange">
              <Timer className="w-5 h-5" />
              <span className="font-mono">{timeLeft}s</span>
            </div>
          </div>
        </motion.div>

        {/* Challenge Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8"
        >
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="min-w-0">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{currentChallenge.name}</h2>
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-git-blue" />
                <span className="text-sm text-gray-400 capitalize">{currentChallenge.category}</span>
                <span className="text-sm text-git-green">• {currentChallenge.points} points</span>
              </div>
            </div>
          </div>

          <div className="mb-4 sm:mb-6">
            <p className="text-gray-300 text-base sm:text-lg mb-3 sm:mb-4">{currentChallenge.description}</p>
            <div className="bg-git-gray rounded-lg p-3 sm:p-4 border border-white/10 overflow-x-auto">
              <p className="text-git-blue font-mono">{currentChallenge.task}</p>
            </div>
          </div>

          {/* Terminal Input */}
          <form onSubmit={handleSubmit} className="mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 bg-git-gray rounded-lg p-3 sm:p-4 border border-white/10">
              <span className="text-git-green font-mono">$</span>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Enter your Git command..."
                className="flex-1 min-w-0 bg-transparent text-white font-mono focus:outline-none focus-ring text-sm sm:text-base"
                disabled={isCorrect === true}
              />
              <button
                type="submit"
                disabled={!userInput.trim() || isCorrect === true}
                className="bg-git-blue hover:bg-git-purple disabled:bg-gray-600 text-white px-4 py-2 rounded transition-colors focus-ring shrink-0"
              >
                Enter
              </button>
            </div>
          </form>

          {/* Feedback */}
          {isCorrect === true && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-4"
            >
              <div className="flex items-center space-x-2 text-green-400 mb-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Correct!</span>
              </div>
              <p className="text-gray-300">{currentChallenge.explanation}</p>
            </motion.div>
          )}

          {isCorrect === false && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4"
            >
              <div className="flex items-center space-x-2 text-red-400 mb-2">
                <XCircle className="w-5 h-5" />
                <span className="font-semibold">Incorrect</span>
              </div>
              {showHint && (
                <p className="text-gray-300">
                  <span className="text-git-orange">Hint:</span> {currentChallenge.hints[0]}
                </p>
              )}
            </motion.div>
          )}

          {/* Actions */}
          <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center space-x-2 text-git-orange hover:text-git-blue transition-colors focus-ring"
            >
              <Lightbulb className="w-4 h-4" />
              <span>Show Hint</span>
            </button>

            {isCorrect === true ? (
              <button
                onClick={nextChallenge}
                className="flex items-center space-x-2 bg-git-green hover:bg-git-blue text-white px-4 py-2 rounded transition-colors focus-ring"
              >
                <span>Next Challenge</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={resetChallenge}
                className="text-gray-400 hover:text-white transition-colors focus-ring"
              >
                Reset
              </button>
            )}
          </div>
        </motion.div>

        {/* Progress */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-xl p-4 sm:p-6"
        >
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Progress</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {sampleChallenges.map((challenge) => (
              <div
                key={challenge.id}
                className={`p-3 rounded-lg border ${
                  completed.includes(challenge.id)
                    ? 'bg-green-900/20 border-green-500/30'
                    : 'bg-git-gray border-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-300">
                    {challenge.name}
                  </span>
                  {completed.includes(challenge.id) && (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  )}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {challenge.points} points
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 