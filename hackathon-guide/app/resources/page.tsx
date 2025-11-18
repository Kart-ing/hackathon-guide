import Link from 'next/link'
import { resources, categories } from '../../data/resources'

export default function ResourcesIndex() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold">All Resources</h1>
      <p className="opacity-80 mt-2">Browse categories and open a resource to see details before heading out.</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map(c => (
          <span key={c} className="px-3 py-1 rounded bg-white/5 border border-white/10 text-sm">{c}</span>
        ))}
      </div>
      <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map(r => (
          <li key={r.slug} className="rounded border border-white/10 p-4">
            <h3 className="font-semibold">{r.title}</h3>
            <p className="opacity-80 text-sm mt-1">{r.description}</p>
            <Link href={`/resources/${r.slug}`} className="text-primary inline-block mt-3">Open details →</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
