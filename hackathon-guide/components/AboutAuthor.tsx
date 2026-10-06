import { Github, Linkedin, Mail, Award } from 'lucide-react'

export default function AboutAuthor() {
  return (
    <div className="rounded-lg border border-white/10 bg-[var(--card)]/60 p-5 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">About the Author</h2>

      <div className="space-y-4 opacity-90 text-sm sm:text-base leading-relaxed">
        <p>
          Hey! I'm <span className="text-primary font-semibold">Kartikey Pandey</span>. I studied computer science at Penn State.
        </p>

        <p>
          I've won 13 prizes at 12 hackathons and founded Penn State's collegiate hackathon team. This guide collects the resources and strategies I picked up along the way.
        </p>

        <div className="pt-4 border-t border-white/10">
          <p className="text-xs sm:text-sm opacity-70 mb-3">Why trust this guide?</p>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li className="flex items-start gap-2">
              <Award size={16} className="text-accent mt-0.5 flex-shrink-0" />
              <span>Prizes at hackathons including HackPSU, HackHarvard, Bitcamp, MHacks, Cal Hacks and the UC Berkeley AI Hackathon</span>
            </li>
            <li className="flex items-start gap-2">
              <Award size={16} className="text-accent mt-0.5 flex-shrink-0" />
              <span>Founded the Penn State Collegiate Hackathon Team, which went from #185 to #74 (merit rank) in one year</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-4">
          <a
            href="https://github.com/Kart-ing"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs sm:text-sm hover:text-primary transition-colors touch-manipulation py-1"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kartikeypandey2004/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs sm:text-sm hover:text-primary transition-colors touch-manipulation py-1"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="mailto:kartikeypandey.official@gmail.com"
            className="flex items-center gap-2 text-xs sm:text-sm hover:text-primary transition-colors touch-manipulation py-1"
          >
            <Mail size={18} />
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}
