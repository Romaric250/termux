'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthModal } from '@/contexts/AuthModalContext'

export default function LoginPage() {
  const router = useRouter()
  const { openLogin } = useAuthModal()

  useEffect(() => {
    openLogin()
    router.replace('/')
  }, [openLogin, router])

  return null
}
