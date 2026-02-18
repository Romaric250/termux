'use client'

import { Header, HeroSection, GitIsHardSection, ComparisonTable, CTABlock, Footer } from '@/components'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <GitIsHardSection />
      <ComparisonTable />
      <CTABlock />
      <Footer />
    </div>
  )
}
