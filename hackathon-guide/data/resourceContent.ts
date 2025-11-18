export type ResourceContent = {
  sections: {
    heading: string
    paragraphs: string[]
    list?: string[]
    imagePlaceholder?: string
  }[]
  videoUrl?: string
}

const contentMap: Record<string, ResourceContent> = {
  'devpost': {
    sections: [
      {
        heading: 'What is Devpost?',
        paragraphs: [
          'Devpost is the world\'s largest platform for hosting and discovering hackathons. It connects hundreds of thousands of developers, designers, and innovators with opportunities to build software projects, compete for prizes, and showcase their work to recruiters and sponsors.',
          'Founded in 2012, Devpost has become the industry standard for hackathon discovery and submission. Major organizations like Meta, Google, Microsoft, and MIT host their hackathons on Devpost, making it a central hub for both virtual and in-person competitions.'
        ],
        imagePlaceholder: 'Screenshot of Devpost homepage showing featured hackathons and search bar'
      },
      {
        heading: 'Why Devpost is Useful for Hackathons',
        paragraphs: [
          'Devpost streamlines the entire hackathon lifecycle—from discovery to submission. Instead of scouring the web for events, you can browse hundreds of active and upcoming hackathons filtered by topic, prize amount, location, and eligibility.',
          'The platform also serves as your portfolio. Every project you submit becomes part of your public profile, which recruiters and hiring managers actively search when looking for talent. Many students land internships and jobs directly through their Devpost portfolios.'
        ],
        list: [
          'Discover 100+ active hackathons at any given time across AI/ML, web3, hardware, social good, and more',
          'Filter by eligibility (student-only, global, regional) and prize pools ($1K–$100K+)',
          'Submit projects with a standardized format: description, demo video, GitHub link, and tech stack',
          'Build a public portfolio that showcases your best hacks to potential employers',
          'Join a community of 1M+ hackers and receive notifications for new events matching your interests'
        ],
        imagePlaceholder: 'Screenshot of Devpost hackathon filters (category, prize, location, status)'
      },
      {
        heading: 'How to Use Devpost Effectively',
        paragraphs: [
          'Start by creating a free account and completing your profile with skills, interests, and links to GitHub/LinkedIn. Then explore the "Hackathons" tab to find events. Pay attention to eligibility requirements, deadlines, and judging criteria before registering.',
          'When submitting a project, quality matters more than quantity. Write a clear project description that explains the problem, your solution, and the impact. Include a 2–3 minute demo video (use Loom or OBS), add screenshots, and link your GitHub repo. Judges often spend less than 5 minutes per submission, so make it easy to understand your work.'
        ],
        list: [
          'Set up email alerts for new hackathons in your areas of interest (AI, fintech, health, etc.)',
          'Read past winning submissions to understand what judges value—many hackathons publish winners publicly',
          'Use Devpost\'s built-in team formation tools if you need collaborators (or find teammates on Discord)',
          'Submit early and iterate—many platforms allow updates until the deadline',
          'After the hackathon, update your project with "What I learned" and "What\'s next" sections to show growth'
        ],
        imagePlaceholder: 'Screenshot of a winning Devpost project submission with video, description, and gallery'
      },
      {
        heading: 'Pro Tips for Maximizing Success',
        paragraphs: [
          'Treat your Devpost profile like a living resume. Organize your projects with thoughtful thumbnails and update older submissions with retrospectives. Recruiters often filter by tech stack (React, Python, TensorFlow), so tag your projects accurately.',
          'Participate in "always-on" hackathons hosted by companies like Replit, Twilio, and MongoDB—these have rolling deadlines and can be great for experimenting with new tools. Even if you don\'t win, shipping a finished project to Devpost demonstrates initiative and follow-through.'
        ],
        imagePlaceholder: 'Screenshot of a well-organized Devpost user profile with multiple project cards'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/yzckOD7y7Xw'
  }
}

export function getResourceContent(slug: string): ResourceContent | null {
  return contentMap[slug] || null
}
