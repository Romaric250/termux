'use client'

import { AuthModalProvider } from '@/contexts/AuthModalContext'
import AuthModal from './AuthModal'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthModalProvider>
      {children}
      <AuthModal />
    </AuthModalProvider>
  )
}
