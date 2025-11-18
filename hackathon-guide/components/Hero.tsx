"use client"
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="text-center py-20">
      <motion.h1
        className="text-4xl md:text-6xl font-bold glitch" data-text="Hack smarter. Ship faster."
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hack smarter. Ship faster.
      </motion.h1>
      <div className="mt-6 text-secondary text-lg md:text-2xl">
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
      <div className="mt-10 flex items-center justify-center gap-4">
        <a href="#resources" className="px-5 py-2 rounded border border-primary/40 hover:border-primary text-primary">Explore Resources</a>
        <a href="#strategy" className="px-5 py-2 rounded bg-primary/10 hover:bg-primary/20 border border-white/10">Winning Tips</a>
      </div>
    </div>
  )
}
