import Link from 'next/link'
import Header from '@/components/Header'

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-16 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Leaderboard</h1>
        <p className="text-gray-400 mb-6 sm:mb-8">See how you rank against other developers.</p>
        <Link href="/" className="text-git-green hover:underline text-sm sm:text-base">← Back to Termux</Link>
      </div>
    </div>
  )
}
