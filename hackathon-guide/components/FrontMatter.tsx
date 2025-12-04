import { Users, BookOpen, Map, Lightbulb } from 'lucide-react'

export default function FrontMatter() {
  return (
    <div className="space-y-8">
      <div className="rounded-lg border border-white/10 bg-[var(--card)]/60 p-6">
        <div className="flex items-start gap-3 mb-3">
          <Users size={24} className="text-primary mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Who This Guide is For</h3>
            <p className="opacity-90">
              This guide is designed for <span className="text-primary font-semibold">Penn State Computer Science students</span> and other novice-to-intermediate hackers looking to maximize their efficiency and win hackathons. Whether you're attending your first hackathon or your tenth, this resource will help you discover opportunities, build faster, and pitch better.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-[var(--card)]/60 p-6">
        <div className="flex items-start gap-3 mb-3">
          <BookOpen size={24} className="text-secondary mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">What This Guide Assumes You Know</h3>
            <p className="opacity-90 mb-3">
              To get the most out of this guide, you should have:
            </p>
            <ul className="space-y-2 opacity-90">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Basic familiarity with coding (any language)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Understanding of version control with Git and GitHub</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>General knowledge of hackathon structure (ideation → building → pitching)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Willingness to learn new tools and frameworks quickly</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-[var(--card)]/60 p-6">
        <div className="flex items-start gap-3 mb-3">
          <Map size={24} className="text-accent mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">How This Guide is Organized</h3>
            <p className="opacity-90 mb-4">
              The guide follows the natural flow of a hackathon lifecycle, organized chronologically to support you from start to finish:
            </p>
            <div className="space-y-3">
              <div className="pl-4 border-l-2 border-primary/40">
                <p className="font-semibold text-primary">1. Hackathon Discovery</p>
                <p className="text-sm opacity-80">Find events that match your interests and eligibility (Devpost, MLH, Hack Club)</p>
              </div>
              <div className="pl-4 border-l-2 border-secondary/40">
                <p className="font-semibold text-secondary">2. Ideation & Validation</p>
                <p className="text-sm opacity-80">Generate winning ideas and validate market fit (Product Hunt, GitHub Trending, Google Trends)</p>
              </div>
              <div className="pl-4 border-l-2 border-accent/40">
                <p className="font-semibold text-accent">3. Development Tools</p>
                <p className="text-sm opacity-80">Build and deploy your project fast (VS Code, Vercel, Firebase)</p>
              </div>
              <div className="pl-4 border-l-2 border-primary/40">
                <p className="font-semibold text-primary">4. AI/ML Integration</p>
                <p className="text-sm opacity-80">Leverage cutting-edge AI to accelerate development (Hugging Face, Modal, OpenAI)</p>
              </div>
              <div className="pl-4 border-l-2 border-secondary/40">
                <p className="font-semibold text-secondary">5. Winning Strategy</p>
                <p className="text-sm opacity-80">Pitch effectively and maximize your chances of winning</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-[var(--card)]/60 p-6">
        <div className="flex items-start gap-3 mb-3">
          <Lightbulb size={24} className="text-accent mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Tips for Using This Guide</h3>
            <ul className="space-y-3 opacity-90">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">→</span>
                <span><span className="font-semibold">Start with Strategy:</span> Read the "Winning Tips" section first to understand what judges value, then work backward to choose tools that support your pitch.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">→</span>
                <span><span className="font-semibold">Browse by Category:</span> Use the resource filters to find tools based on your project type (AI/ML, Web3, Hardware, etc.).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">→</span>
                <span><span className="font-semibold">Click for Details:</span> Each resource card links to a detailed page with usage guides, tips, and video tutorials specific to hackathon workflows.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">→</span>
                <span><span className="font-semibold">Deploy Early:</span> Set up your deployment pipeline (e.g., Vercel) in the first hour—having a live URL is critical for demos.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">→</span>
                <span><span className="font-semibold">Share this Guide:</span> Bookmark it, share it with your team, and reference it during hackathons. All links open internally first for safety and context.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
