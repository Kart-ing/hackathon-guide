import { Github, Linkedin, Mail, Award } from 'lucide-react'

export default function AboutAuthor() {
  return (
    <div className="rounded-lg border border-white/10 bg-[var(--card)]/60 p-5 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">About the Author</h2>

      <div className="space-y-4 opacity-90 text-sm sm:text-base leading-relaxed">
        <p>
          Hey! I'm <span className="text-primary font-semibold">Kartikey Pandey</span>, a computer science student at Penn State with a passion for hackathons and building innovative projects.
        </p>

        <p>
          I've won in 9+ hackathons, gotten multiple awards, and helped organize teams participating in Hackathons in the PSU CS Community. This guide is a collection of resources and strategies I've learned through hundreds of hours of hacking, mentoring, and judging projects.
        </p>

        <div className="pt-4 border-t border-white/10">
          <p className="text-xs sm:text-sm opacity-70 mb-3">Why trust this guide?</p>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li className="flex items-start gap-2">
              <Award size={16} className="text-accent mt-0.5 flex-shrink-0" />
              <span>Winner at MLH hackathons including PennApps, HackPSU, and others</span>
            </li>
            <li className="flex items-start gap-2">
              <Award size={16} className="text-accent mt-0.5 flex-shrink-0" />
              <span>Mentor and workshop leader at Penn State hackathons</span>
            </li>
            <li className="flex items-start gap-2">
              <Award size={16} className="text-accent mt-0.5 flex-shrink-0" />
              <span>Active contributor to open-source projects on GitHub</span>
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
