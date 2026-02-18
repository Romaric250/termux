import Link from 'next/link'

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">DOCS</h1>
        <p className="text-gray-400 mb-8">Documentation coming soon.</p>
        <Link href="/" className="text-git-green hover:underline">← Back to TERMUX</Link>
      </div>
    </div>
  )
}
