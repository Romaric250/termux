import Link from 'next/link'

export default function ChallengesPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">CHALLENGES</h1>
        <p className="text-gray-400 mb-8">Browse all Git challenges.</p>
        <Link href="/play" className="inline-block bg-git-green text-white px-6 py-3 rounded font-medium hover:bg-git-green/90 transition-colors">
          Start Playing
        </Link>
        <br /><br />
        <Link href="/" className="text-git-green hover:underline">← Back to TERMUX</Link>
      </div>
    </div>
  )
}
