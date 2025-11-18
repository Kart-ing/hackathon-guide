export type ResourceItem = {
  title: string
  description: string
  url: string
  category: string
  slug: string
}

export const categories = [
  'Hackathons',
  'Ideation',
  'Development',
  'AI/ML',
  'Guides'
] as const

export const resources: ResourceItem[] = [
  // 11. Hackathon discovery
  { title: 'Devpost', description: 'Discover and submit to hackathons worldwide.', url: 'https://devpost.com', category: 'Hackathons', slug: 'devpost' },
  { title: 'MLH', description: 'Major League Hacking events and resources.', url: 'https://mlh.io', category: 'Hackathons', slug: 'mlh' },
  { title: 'Hack Club', description: 'A teen hacker community with events and tools.', url: 'https://hackclub.com', category: 'Hackathons', slug: 'hack-club' },

  // 12. Ideation
  { title: 'Product Hunt', description: 'See trending products and ideas.', url: 'https://www.producthunt.com', category: 'Ideation', slug: 'product-hunt' },
  { title: 'GitHub Trending', description: 'Trending repos by language and time range.', url: 'https://github.com/trending', category: 'Ideation', slug: 'github-trending' },
  { title: 'Google Trends', description: 'What the world is searching for.', url: 'https://trends.google.com', category: 'Ideation', slug: 'google-trends' },

  // 13. Development tools
  { title: 'VS Code', description: 'Fast, flexible, extensible code editor.', url: 'https://code.visualstudio.com', category: 'Development', slug: 'vs-code' },
  { title: 'Vercel', description: 'Zero-config deploys for web apps.', url: 'https://vercel.com', category: 'Development', slug: 'vercel' },
  { title: 'Firebase', description: 'Auth, database, hosting and more.', url: 'https://firebase.google.com', category: 'Development', slug: 'firebase' },

  // 14. AI/ML tools
  { title: 'Hugging Face', description: 'Models, datasets, spaces for AI.', url: 'https://huggingface.co', category: 'AI/ML', slug: 'hugging-face' },
  { title: 'Modal', description: 'Serverless GPUs for ML workloads.', url: 'https://modal.com', category: 'AI/ML', slug: 'modal' },
  { title: 'OpenAI', description: 'APIs for GPT, embeddings, vision.', url: 'https://platform.openai.com', category: 'AI/ML', slug: 'openai' },

  // 15. Guides and tips
  { title: 'Winning Hackathon Guide', description: 'Tips from champions on how to win.', url: 'https://www.notion.so/hackathon-guide', category: 'Guides', slug: 'winning-hackathon-guide' },
  { title: 'Pitch Deck Cheatsheet', description: 'Structure your story and demo.', url: 'https://www.seedtoscale.com/resource/pitch-deck-cheatsheet', category: 'Guides', slug: 'pitch-deck-cheatsheet' },
  { title: 'Design Resources', description: 'Icons, colors, UI kits for fast design.', url: 'https://www.figma.com/community', category: 'Guides', slug: 'design-resources' }
]
