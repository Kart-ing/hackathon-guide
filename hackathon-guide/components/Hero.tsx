"use client"
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="text-center py-12 sm:py-16 md:py-20 px-4">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-6xl font-bold glitch leading-tight" data-text="Hack smarter. Ship faster."
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hack smarter. Ship faster.
      </motion.h1>
      <div className="mt-6 text-secondary text-base sm:text-lg md:text-2xl min-h-[2em]">
        <TypeAnimation
          sequence={[
            'Discover hackathons ➜', 1500,
            'Ideate and validate ➜', 1500,
            'Build with modern tooling ➜', 1500,
            'Win with strategy ➜', 1500
          ]}
          speed={45}
          repeat={Infinity}
        />
      </div>
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
        <a href="#resources" className="w-full sm:w-auto px-5 py-3 rounded border border-primary/40 hover:border-primary text-primary text-center touch-manipulation active:scale-95 transition-transform">
          Explore Resources
        </a>
        <a href="#strategy" className="w-full sm:w-auto px-5 py-3 rounded bg-primary/10 hover:bg-primary/20 border border-white/10 text-center touch-manipulation active:scale-95 transition-transform">
          Winning Tips
        </a>
      </div>
    </div>
  )
}
