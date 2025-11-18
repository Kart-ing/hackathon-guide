"use client"
import { useState } from 'react'
import { useKonami } from '../lib/useKonami'
import toast from 'react-hot-toast'

export default function KonamiListener() {
  const [active, setActive] = useState(false)
  useKonami(() => {
    setActive(true)
    toast.success('Konami unlocked! Matrix turbo mode ⚡')
    setTimeout(() => setActive(false), 4000)
  })
  return active ? (
    <div className="fixed inset-0 -z-0 pointer-events-none animate-pulse" style={{ boxShadow: 'inset 0 0 200px rgba(0,229,255,0.25)' }} />
  ) : null
}
