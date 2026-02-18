import Link from 'next/link'

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">LEADERBOARD</h1>
        <p className="text-gray-400 mb-8">See how you rank against other developers.</p>
        <Link href="/" className="text-git-green hover:underline">← Back to TERMUX</Link>
      </div>
    </div>
  )
}
