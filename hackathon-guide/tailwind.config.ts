import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0f14',
        primary: '#00e5ff',
        secondary: '#b084f7',
        accent: '#00ff9c',
        card: '#0e151b'
      },
      fontFamily: {
        mono: ['var(--font-jetbrains)']
      },
      boxShadow: {
        glow: '0 0 30px rgba(0, 229, 255, 0.35)',
        neon: '0 0 20px rgba(176, 132, 247, 0.45)'
      }
    }
  },
  plugins: []
}

export default config
