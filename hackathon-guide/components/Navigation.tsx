"use client"
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#resources', label: 'Resources' },
  { href: '#strategy', label: 'Strategy' },
  { href: '#about', label: 'About' }
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-black/30 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-14 flex items-center justify-between">
        <a href="#home" className="font-bold tracking-wide text-primary flex items-center gap-2 py-2">
          <span className="text-2xl">⚡</span>
          <span className="hidden sm:inline">Midnight Hacker</span>
          <span className="sm:hidden">MH</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors py-2">
              {l.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden p-2 -mr-2 touch-manipulation active:scale-95 transition-transform"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-primary transition-colors py-3 px-2 rounded hover:bg-white/5 touch-manipulation active:scale-98"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
