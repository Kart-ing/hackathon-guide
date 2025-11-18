"use client"
import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animationId = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const alphabet = '01アイウエオカキクケコサシスセソﾊﾋﾌﾍﾎABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const fontSize = 16
    let columns = Math.floor(canvas.width / fontSize)
    let drops = Array(columns).fill(1)
    let frameCount = 0

    const draw = () => {
      if (!ctx) return
      frameCount++
      
      // Only update every 3 frames for slower animation
      if (frameCount % 3 !== 0) {
        animationId = requestAnimationFrame(draw)
        return
      }

      ctx.fillStyle = 'rgba(10, 15, 20, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#00e5ff'
      ctx.font = `${fontSize}px monospace`
      
      for (let i = 0; i < drops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.985) {
          drops[i] = 0
        }
        drops[i]++
      }
      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas ref={ref} className="fixed inset-0 -z-10 opacity-25" aria-hidden />
  )
}
