import { notFound } from 'next/navigation'
import { resources } from '../../../data/resources'
import Link from 'next/link'
import { getResourceContent } from '../../../data/resourceContent'

export function generateStaticParams() {
  return resources.map(r => ({ slug: r.slug }))
}

export default function ResourcePage({ params }: { params: { slug: string } }) {
  const item = resources.find(r => r.slug === params.slug)
  if (!item) return notFound()
  const content = getResourceContent(item.slug)
  
  return (
    <div className="py-12 max-w-4xl">
      <Link href="/" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">← Back to Home</Link>
      
      <header className="mt-6 border-b border-white/10 pb-6">
        <h1 className="text-4xl font-bold">{item.title}</h1>
        <p className="mt-2 text-secondary">Category: {item.category}</p>
        <p className="mt-3 text-lg opacity-90">{item.description}</p>
      </header>

      {content && (
        <article className="mt-8 space-y-8 prose prose-invert max-w-none">
          {content.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-2xl font-semibold mb-3">{section.heading}</h2>
              <div className="space-y-3 opacity-90">
                {section.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
              </div>
              {section.list && (
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  {section.list.map((li, k) => <li key={k}>{li}</li>)}
                </ul>
              )}
              {section.imagePlaceholder && (
                <div className="my-6 border border-dashed border-white/20 rounded p-8 text-center opacity-60">
                  <p className="text-sm">📷 Image Placeholder: {section.imagePlaceholder}</p>
                </div>
              )}
            </section>
          ))}

          {content.videoUrl && (
            <section className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">Video Tutorial</h2>
              <div className="aspect-video rounded overflow-hidden border border-white/10">
                <iframe
                  width="100%"
                  height="100%"
                  src={content.videoUrl}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </section>
          )}
        </article>
      )}

      <div className="mt-12 flex gap-4 border-t border-white/10 pt-6">
        <a 
          href={item.url} 
          target="_blank" 
          rel="noreferrer" 
          className="px-5 py-2.5 rounded bg-primary/20 border border-primary/40 text-primary hover:bg-primary/30 transition-colors"
        >
          Visit {item.title} →
        </a>
        <Link href="/" className="px-5 py-2.5 rounded border border-white/10 hover:border-white/20 transition-colors">
          Back to Resources
        </Link>
      </div>
    </div>
  )
}
