'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthModal } from '@/contexts/AuthModalContext'

export default function RegisterPage() {
  const router = useRouter()
  const { openRegister } = useAuthModal()

  useEffect(() => {
    openRegister()
    router.replace('/')
  }, [openRegister, router])

  return null
}
