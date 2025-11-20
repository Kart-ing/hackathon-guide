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
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#home" className="font-bold tracking-wide text-primary">HackGuide</a>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="hover:text-primary" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
