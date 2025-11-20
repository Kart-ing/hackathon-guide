import Hero from '../components/Hero'
import Resources from '../components/Resources'
import StrategyTips from '../components/StrategyTips'
import AboutAuthor from '../components/AboutAuthor'

export default function Page() {
  return (
    <div className="space-y-24 py-16">
      <section id="home">
        <Hero />
      </section>
      <section id="resources">
        <Resources />
      </section>
      <section id="strategy" className="pb-12">
        <StrategyTips />
      </section>
      <section id="about" className="pb-24">
        <AboutAuthor />
      </section>
    </div>
  )
}
