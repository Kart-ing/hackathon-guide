"use client"
import { Toaster } from 'react-hot-toast'
import { Analytics } from '@vercel/analytics/react'
import KonamiListener from '@/components/KonamiListener'

export default function Providers() {
  return (
    <>
      <Analytics />
      <KonamiListener />
      <Toaster position="top-right" />
    </>
  )
}
