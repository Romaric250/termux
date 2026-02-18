'use client'

import { createContext, useContext, useState, useCallback } from 'react'

type AuthMode = 'login' | 'register' | null

interface AuthModalContextType {
  isOpen: boolean
  mode: AuthMode
  openLogin: () => void
  openRegister: () => void
  close: () => void
}

const AuthModalContext = createContext<AuthModalContextType | null>(null)

export function AuthModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<AuthMode>(null)

  const openLogin = useCallback(() => {
    setMode('login')
    setIsOpen(true)
  }, [])

  const openRegister = useCallback(() => {
    setMode('register')
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    setMode(null)
  }, [])

  return (
    <AuthModalContext.Provider value={{ isOpen, mode, openLogin, openRegister, close }}>
      {children}
    </AuthModalContext.Provider>
  )
}

export function useAuthModal() {
  const context = useContext(AuthModalContext)
  if (!context) {
    throw new Error('useAuthModal must be used within AuthModalProvider')
  }
  return context
}
