"use client"
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Filter } from 'lucide-react'
import { resources, categories, type ResourceItem } from '../data/resources'
import toast from 'react-hot-toast'
import Link from 'next/link'

export default function Resources() {
  const [active, setActive] = useState<string>('All')

  const filtered = useMemo(() => {
    if (active === 'All') return resources
    return resources.filter(r => r.category === active)
  }, [active])

  const onCopy = async (item: ResourceItem) => {
    await navigator.clipboard.writeText(`${location.origin}/resources/${item.slug}`)
    toast.success('Details link copied!')
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Resource Hub</h2>
        <div className="flex items-center gap-2 text-sm opacity-70">
          <Filter size={16} />
          Filter by category
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {['All', ...categories].map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-3 py-1.5 rounded border text-sm ${active === cat ? 'border-primary text-primary' : 'border-white/10 hover:border-white/20'}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(item => (
          <Link href={`/resources/${item.slug}`} key={item.title}>
            <motion.article
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 350, damping: 24 }}
              className="card-hover rounded-lg border border-white/10 bg-[var(--card)]/80 p-4 cursor-pointer h-full"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-lg hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-80 mt-1">{item.description}</p>
                </div>
                <div className="text-primary" aria-label="Open details">
                  <ExternalLink size={18} />
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs opacity-70">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">{item.category}</span>
                <button 
                  className="hover:text-primary" 
                  onClick={(e) => {
                    e.preventDefault()
                    onCopy(item)
                  }}
                >
                  Copy link
                </button>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </div>
  )
}
