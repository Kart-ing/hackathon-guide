import Hero from '../components/Hero'
import Resources from '../components/Resources'
import StrategyTips from '../components/StrategyTips'

export default function Page() {
  return (
    <div className="space-y-24 py-16">
      <section id="home">
        <Hero />
      </section>
      <section id="resources">
        <Resources />
      </section>
      <section id="strategy" className="pb-24">
        <StrategyTips />
      </section>
    </div>
  )
}
