"use client"
import { useEffect } from 'react'

const sequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export function useKonami(onTrigger: () => void) {
  useEffect(() => {
    let buffer: string[] = []
    const handler = (e: KeyboardEvent) => {
      buffer.push(e.key)
      buffer = buffer.slice(-sequence.length)
      if (sequence.every((k,i) => buffer[i] === k)) {
        onTrigger()
        buffer = []
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onTrigger])
}
