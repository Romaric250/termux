'use client'

import { useState, useEffect, useRef } from 'react'
import { useAuthModal } from '@/contexts/AuthModalContext'

const VALID_PROVIDERS = ['github', 'google']

export default function AuthModal() {
  const { isOpen, mode, close, openLogin, openRegister } = useAuthModal()
  const [input, setInput] = useState('')
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (mode) {
      setInput('')
      setSelectedProvider(null)
      setIsConnecting(false)
      setError(null)
    }
  }, [mode])

  useEffect(() => {
    if (isOpen && !selectedProvider) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen, selectedProvider])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const provider = input.trim().toLowerCase()
    if (VALID_PROVIDERS.includes(provider)) {
      setError(null)
      setSelectedProvider(provider)
      setIsConnecting(true)
      setTimeout(() => {
        setIsConnecting(false)
        setSelectedProvider(null)
      }, 2500)
    } else {
      setError(`Unknown provider '${input.trim() || '(empty)'}'. Available: github | google`)
    }
  }

  if (!isOpen || !mode) return null

  const isLogin = mode === 'login'
  const prompt = isLogin ? '[root@termux ~]# login --provider' : '[guest@termux ~]# create-account --provider'
  const title = isLogin ? 'SESSION: LOGIN_MODULE' : 'SESSION: CREATE_ACCOUNT_MODULE'
  const message = isLogin
    ? 'System ready. Establish secure handshake to access the core Git learning modules.'
    : 'Select authentication gateway to initialize local environment.'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={close}
      />
      <div className="relative w-full max-w-lg bg-[#1a1a1a] rounded-lg border border-white/10 overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/90" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/90" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/90" />
            </div>
            <span className="font-mono text-xs text-git-green ml-3 flex items-center gap-1.5">
              {title}
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm2-2v2h6V7a3 3 0 00-6 0z" clipRule="evenodd" /></svg>
            </span>
          </div>
          <button
            onClick={close}
            className="text-gray-400 hover:text-white transition-colors font-mono text-sm"
          >
            [x]
          </button>
        </div>
        <div className="p-6 space-y-6">
          <p className="font-mono text-sm text-gray-400">{message}</p>
          {!selectedProvider ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-1 font-mono text-sm">
                <span className="text-git-green">{prompt}</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value)
                    setError(null)
                  }}
                  placeholder=" "
                  className="flex-1 min-w-[120px] bg-transparent text-git-green font-mono outline-none placeholder:text-git-green/40"
                  spellCheck={false}
                  autoComplete="off"
                />
                <span className="w-2 h-4 bg-git-green animate-pulse" />
              </div>
              {error && (
                <p className="font-mono text-xs text-red-400">{error}</p>
              )}
              <p className="font-mono text-xs text-gray-500">Available: github | google (press Enter)</p>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="font-mono text-sm text-git-green">
                {prompt} {selectedProvider}
              </div>
              <div className="space-y-3 pt-2 border-t border-white/10">
              <div className="font-mono text-xs text-git-green flex items-center justify-between">
                <span>ESTABLISHING_SSH_TUNNEL</span>
                <span>65%</span>
              </div>
              <div className="h-1.5 bg-git-gray rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-git-green rounded-full transition-all duration-500" />
              </div>
              <div className="font-mono text-xs text-git-green flex items-center gap-2">
                <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                Waiting for secure connection...
              </div>
              <div className="font-mono text-xs text-git-green flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm2-2v2h6V7a3 3 0 00-6 0z" clipRule="evenodd" /></svg>
                CONNECTION_ENCRYPTED_VIA_SSH_SSL
              </div>
              <div className="font-mono text-xs text-git-green text-right">PING: 24MS</div>
              </div>
            </div>
          )}
          {!isLogin && !selectedProvider && (
            <label className="flex items-center gap-2 cursor-pointer pt-2 border-t border-white/10">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-git-green bg-transparent text-git-green focus:ring-git-green"
              />
              <span className="font-mono text-xs text-gray-400">--verbose-updates (Subscribe to Termux devlog)</span>
            </label>
          )}
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => isLogin ? openRegister() : openLogin()}
              className="font-mono text-xs text-git-green hover:underline"
            >
              {isLogin ? 'Create account →' : 'Already have an account? Login →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
