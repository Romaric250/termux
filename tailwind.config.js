/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
        'display': ['IBM Plex Mono', 'monospace'],
        'body': ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        'git-dark': '#0d1117',
        'git-gray': '#21262d',
        'git-green': '#238636',
        'git-blue': '#58a6ff',
        'git-orange': '#f78166',
        'git-purple': '#bc8cff',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'typewriter': 'typewriter 2s steps(40) 1s forwards',
        'cursor': 'cursor 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        cursor: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#58a6ff' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'terminal-bg': 'linear-gradient(135deg, #0d1117 0%, #21262d 100%)',
      },
    },
  },
  plugins: [],
}