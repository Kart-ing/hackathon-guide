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
        imagePlaceholder: '/assets/devpost-example.png'
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
  },
  'vercel': {
    sections: [
      {
        heading: 'What is Vercel?',
        paragraphs: [
          'Vercel is a cloud platform for deploying and hosting web applications with zero configuration. Built by the creators of Next.js, it\'s optimized for modern frontend frameworks and offers instant deployments, automatic HTTPS, and global CDN distribution.',
          'For hackathons, Vercel is a game-changer. Instead of spending hours configuring servers or wrestling with deployment pipelines, you can go from code to live URL in under 60 seconds. This means more time building features and less time fighting infrastructure.'
        ],
        imagePlaceholder: 'Screenshot of Vercel dashboard showing recent deployments'
      },
      {
        heading: 'Why Vercel is Perfect for Hackathons',
        paragraphs: [
          'Judges need to see your project live—not just code. A broken "localhost" demo or a "works on my machine" excuse won\'t win prizes. Vercel ensures your project is always accessible with a public URL you can share instantly.',
          'Speed matters in hackathons. Vercel\'s git integration means every push to GitHub automatically deploys a preview. You can iterate rapidly, share progress with teammates, and have a production-ready demo without any DevOps overhead.'
        ],
        list: [
          'Deploy in 30 seconds: Connect GitHub repo → auto-deploy on every push',
          'Free tier includes unlimited projects, 100GB bandwidth, and custom domains',
          'Automatic HTTPS and SSL certificates (no configuration needed)',
          'Preview deployments for every branch—test features before merging',
          'Built-in analytics to track demo views and engagement',
          'Serverless functions for backend APIs without managing servers'
        ],
        imagePlaceholder: 'Screenshot of Vercel deployment workflow from GitHub push to live URL'
      },
      {
        heading: 'How to Use Vercel in a Hackathon',
        paragraphs: [
          'Start by pushing your project to GitHub (even if it\'s just a basic scaffold). Sign in to Vercel with your GitHub account, click "New Project," and import your repo. Vercel auto-detects frameworks like Next.js, React, Vue, or static HTML and configures everything automatically.',
          'Once deployed, you get a `.vercel.app` URL instantly. Share this link in your Devpost submission, pitch deck, and with judges. Every time you push code, Vercel redeploys—so your demo is always up-to-date with your latest features.'
        ],
        list: [
          'Sign up at vercel.com with your GitHub account (takes 30 seconds)',
          'Click "New Project" and import your hackathon repo',
          'Vercel auto-detects your framework and sets build commands',
          'Get a live URL immediately (e.g., your-project.vercel.app)',
          'Push code to GitHub → Vercel auto-deploys in ~1 minute',
          'Add environment variables in dashboard for API keys (never commit secrets!)',
          'Use Preview Deployments to share feature branches with teammates',
          'Upgrade to a custom domain if you want (optional, but looks professional)'
        ],
        imagePlaceholder: 'Step-by-step screenshot: Vercel import flow from GitHub to live deployment'
      },
      {
        heading: 'Pro Tips for Hackathon Success',
        paragraphs: [
          'Deploy early—even if your project is half-built. Having a live URL from hour 1 gives you a safety net. If your laptop crashes or you run out of time, you still have something to show judges.',
          'Use Vercel\'s serverless functions for quick backend APIs. Need to call OpenAI, query a database, or proxy requests? Create an `/api` folder in Next.js and Vercel handles the rest. No Express server or Docker containers required.'
        ],
        list: [
          'Deploy a "Coming Soon" page in the first hour to secure your URL',
          'Use environment variables for API keys (Vercel keeps them secret)',
          'Share preview URLs with your team to review features before merging',
          'Add a custom domain for bonus points (yourproject.tech looks better than .vercel.app)',
          'Enable Vercel Analytics to show judges real-time usage stats in your pitch',
          'If your build fails, check the build logs in the dashboard—errors are clear and actionable'
        ],
        imagePlaceholder: 'Screenshot of Vercel environment variables settings and analytics dashboard'
      },
      {
        heading: 'Common Hackathon Use Cases',
        paragraphs: [
          'Most winning projects use Vercel for frontend hosting paired with serverless functions for backend logic. For example: deploy a React dashboard on Vercel, use `/api` routes to call GPT-4, and store data in Firebase or Supabase. No server management, just pure product focus.',
          'Vercel also excels at static sites with dynamic content. Build a landing page with Next.js, fetch data from external APIs at build time, and deploy in seconds. Judges love fast, polished UIs—and Vercel\'s CDN ensures your demo loads instantly worldwide.'
        ]
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/06w3-l_TbqI'
  }
}

export function getResourceContent(slug: string): ResourceContent | null {
  return contentMap[slug] || null
}
