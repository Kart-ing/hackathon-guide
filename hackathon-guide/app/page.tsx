import Hero from '../components/Hero'
import Resources from '../components/Resources'
import StrategyTips from '../components/StrategyTips'
import AboutAuthor from '../components/AboutAuthor'
import FrontMatter from '../components/FrontMatter'

export default function Page() {
  return (
    <div className="space-y-24 py-16">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutAuthor />
      </section>
      <section id="front-matter" className="space-y-6">
        <FrontMatter />
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
