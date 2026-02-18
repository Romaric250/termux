import Link from 'next/link'
import Header from '@/components/Header'

export default function ChallengesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-16 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Challenges</h1>
        <p className="text-gray-400 mb-6 sm:mb-8">Browse all Git challenges.</p>
        <Link href="/play" className="inline-block bg-git-green text-white px-5 py-3 sm:px-6 sm:py-3 rounded font-medium hover:bg-git-green/90 transition-colors">
          Start playing
        </Link>
        <div className="mt-6">
          <Link href="/" className="text-git-green hover:underline text-sm sm:text-base">← Back to Termux</Link>
        </div>
      </div>
    </div>
  )
}
