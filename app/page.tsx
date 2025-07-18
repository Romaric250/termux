'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  Terminal, 
  GitBranch, 
  Code, 
  Trophy, 
  Zap, 
  Star,
  ArrowRight,
  Play,
  Users,
  Target,
  Award
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [currentText, setCurrentText] = useState(0)
  const texts = [
    "Master Git Commands",
    "Solve Interactive Challenges", 
    "Track Your Progress",
    "Join the Community"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-git-dark via-git-gray to-git-dark">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(88,166,255,0.1),transparent_50%)]" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-git-blue/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-git-purple/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-git-orange/10 rounded-full blur-2xl animate-bounce-slow" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <Terminal className="w-8 h-8 text-git-blue" />
          <span className="font-display text-2xl font-bold gradient-text">Git Mastery</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-6"
        >
          <Link href="/challenges" className="text-gray-300 hover:text-git-blue transition-colors">
            Challenges
          </Link>
          <Link href="/leaderboard" className="text-gray-300 hover:text-git-blue transition-colors">
            Leaderboard
          </Link>
          <Link href="/login" className="text-gray-300 hover:text-git-blue transition-colors">
            Login
          </Link>
          <Link 
            href="/register" 
            className="bg-git-blue hover:bg-git-purple text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 focus-ring"
          >
            Get Started
          </Link>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-shadow">
            <span className="gradient-text">Master</span>
            <br />
            <span className="text-white">Git</span>
            <br />
            <span className="gradient-text">Today</span>
          </h1>

          {/* Animated Subtitle */}
          <motion.div 
            key={currentText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl text-gray-300 mb-8 font-mono"
          >
            {texts[currentText]}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link 
              href="/play"
              className="group bg-gradient-to-r from-git-blue to-git-purple hover:from-git-purple hover:to-git-orange text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 focus-ring flex items-center space-x-2 neon-glow"
            >
              <Play className="w-5 h-5" />
              <span>Start Learning</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/demo"
              className="group glass-effect text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 focus-ring flex items-center space-x-2"
            >
              <Terminal className="w-5 h-5" />
              <span>Try Demo</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-git-blue mb-2">500+</div>
              <div className="text-gray-400">Challenges</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-git-purple mb-2">10K+</div>
              <div className="text-gray-400">Learners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-git-orange mb-2">50+</div>
              <div className="text-gray-400">Git Commands</div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Why Choose Git Mastery?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Interactive Learning",
                description: "Learn by doing with hands-on Git challenges that simulate real-world scenarios."
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Gamified Progress",
                description: "Track your progress with achievements, leaderboards, and daily challenges."
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Real-time Feedback",
                description: "Get instant feedback on your Git commands with detailed explanations."
              },
              {
                icon: <GitBranch className="w-8 h-8" />,
                title: "Progressive Difficulty",
                description: "Start with basics and advance to complex Git workflows and strategies."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community Driven",
                description: "Join a community of developers learning and mastering Git together."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Daily Challenges",
                description: "Keep your skills sharp with fresh daily challenges and streak tracking."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-git-blue mb-4 group-hover:text-git-purple transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Ready to Master Git?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who have transformed their Git skills through interactive challenges and hands-on practice.
          </p>
          <Link 
            href="/register"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-git-green to-git-blue hover:from-git-blue hover:to-git-purple text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 focus-ring neon-glow"
          >
            <Star className="w-5 h-5" />
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Terminal className="w-6 h-6 text-git-blue" />
            <span className="font-display text-xl font-bold gradient-text">Git Mastery</span>
          </div>
          <p className="text-gray-400">
            © 2024 Git Mastery. Built with ❤️ for developers worldwide.
          </p>
        </div>
      </footer>
    </div>
  )
} 