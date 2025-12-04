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
  },
  'mlh': {
    sections: [
      {
        heading: 'What is Major League Hacking (MLH)?',
        paragraphs: [
          'Major League Hacking (MLH) is the official student hackathon league, powering over 200 weekend-long invention competitions annually across North America, Europe, Asia, and Africa. Founded in 2013, MLH has become the gold standard for high-quality, beginner-friendly hackathons.',
          'MLH doesn\'t just list events—they organize, sponsor, and run them. Every MLH event follows strict quality guidelines: free attendance, inclusive culture, experienced mentors on-site, and transparent judging. For students, this means you\'re guaranteed a well-run experience, not a chaotic weekend.'
        ],
        imagePlaceholder: 'Screenshot of MLH season homepage showing upcoming hackathons and regions'
      },
      {
        heading: 'Why MLH is Essential for Hackathon Success',
        paragraphs: [
          'MLH hackathons are free, beginner-friendly, and specifically designed for students. Unlike general hackathons that may charge fees or expect professional-level projects, MLH events welcome first-timers with workshops, mentors, and swag. Many attendees code their first project ever at an MLH event.',
          'The MLH network is also a recruiting pipeline. Sponsors like GitHub, Google, Microsoft, and Meta attend to scout talent. Winning or even participating in an MLH hackathon can lead to internship offers, especially if you showcase your project on LinkedIn and tag sponsors.'
        ],
        list: [
          '200+ hackathons per year across 5 continents, all with verified quality standards',
          'Free attendance, travel reimbursements, and meals provided at most events',
          'MLH coaches on-site at every event to help debug, mentor, and answer questions',
          'Hardware lab with Raspberry Pis, Arduinos, VR headsets, and more (borrow for free)',
          'Exclusive sponsor challenges with bonus prizes (e.g., "Best use of Twilio API" = $500)',
          'Community Slack with 150K+ hackers for team formation and networking'
        ],
        imagePlaceholder: 'Photo of MLH event with students coding, mentors helping, and swag tables'
      },
      {
        heading: 'How to Use MLH for Your Hackathon Journey',
        paragraphs: [
          'Start by browsing the MLH Season calendar at mlh.io/seasons. Events are organized by semester ("MLH Fall 2024," "MLH Spring 2025"), making it easy to plan ahead. Filter by location (in-person vs. virtual) and check eligibility—most require you to be a current student.',
          'Register early—popular events like PennApps, HackMIT, and TreeHacks fill up in hours. After registering, join the event Discord or Slack. Teams often form there before the event, so introduce yourself, share your skills (frontend, backend, ML, design), and find collaborators.'
        ],
        list: [
          'Visit mlh.io/seasons and filter by your region or virtual events',
          'Read the event description carefully—note travel reimbursement policies and themes',
          'Register ASAP (some events use lottery systems, others are first-come)',
          'Join the pre-event Discord/Slack to find teammates and learn about workshops',
          'Check sponsor challenges before the event—plan your project around bonus prizes',
          'Arrive to opening ceremony on time—MLH coaches introduce tools, APIs, and rules',
          'Submit to Devpost by the deadline (MLH events use Devpost for all submissions)'
        ],
        imagePlaceholder: 'Screenshot of MLH event schedule with workshops, meals, and submission deadlines'
      },
      {
        heading: 'Pro Tips for MLH Events',
        paragraphs: [
          'MLH events are highly competitive, but they\'re also incredibly supportive. Take advantage of workshops—learn new tools like Firebase, Figma, or OpenAI APIs during the event. Coaches are there to help, so don\'t hesitate to ask for debugging help or architecture advice.',
          'Focus on sponsor challenges if you want to maximize prize opportunities. Many MLH hackathons have 10+ sponsor prizes on top of the main awards. For example, winning "Best Use of MongoDB" might earn $1,000 even if you don\'t win overall. Read challenge descriptions carefully and integrate sponsor tools genuinely (judges can tell if you force-fit).'
        ],
        list: [
          'Attend the opening ceremony workshop—sponsors demo their APIs and tools',
          'Use the MLH hardware lab to prototype IoT or VR projects (free checkout)',
          'Tag @MLHacks on Twitter/X when you ship—they retweet and amplify cool projects',
          'Take breaks: MLH events have games, karaoke, and midnight snacks to recharge',
          'Submit to multiple sponsor challenges (one project can win several categories)',
          'Network with other hackers—exchange contacts, many form long-term teams'
        ],
        imagePlaceholder: 'Photo of MLH sponsor booth with swag, stickers, and hardware lab equipment'
      },
      {
        heading: 'Beyond the Weekend: MLH Fellowship & Community',
        paragraphs: [
          'MLH also runs the MLH Fellowship, a remote internship program where you contribute to open-source projects, build portfolio projects, or work on production codebases at startups. It\'s a great way to gain real-world experience if you can\'t land a traditional internship.',
          'The MLH community extends beyond events. Join the MLH Discord to stay connected with hackers worldwide, get notified about new seasons, and participate in online mini-hacks. Many students credit MLH with launching their tech careers—it\'s more than just hackathons, it\'s a movement.'
        ]
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/2kHPmnobudY'
  },
  'hack-club': {
    sections: [
      {
        heading: 'What is Hack Club?',
        paragraphs: [
          'Hack Club is a global network of high school coding clubs and hackathons, built by teenagers for teenagers. Unlike traditional CS education, Hack Club is project-based, community-driven, and completely free. It started in 2014 and now spans 400+ clubs in 30+ countries.',
          'Hack Club is best known for organizing massive, unique hackathons like Assemble (1,000+ high schoolers building hardware projects in San Francisco) and hosting online events like Arcade (a summer coding challenge with prizes). If you\'re in high school or college, Hack Club is the best entry point into hacking culture.'
        ],
        imagePlaceholder: 'Photo of Hack Club Assemble event with students building hardware projects'
      },
      {
        heading: 'Why Hack Club is Perfect for Beginners',
        paragraphs: [
          'Hack Club events are radically inclusive. There are no prerequisites, no applications, and no "you must know X to participate" barriers. Their philosophy: everyone can code, and the best way to learn is by building real projects with friends.',
          'The community is also incredibly generous. Hack Club gives away free tools like GitHub Pro, domain names, cloud credits, and even hardware kits. They believe in removing financial barriers so anyone can build, regardless of background.'
        ],
        list: [
          'Free hackathons with no entry fees, no applications—just show up (or join virtually)',
          'Beginner workshops that teach web dev, game dev, and hardware hacking from scratch',
          'Free tools: GitHub Student Pack, Hack Club Bank (fiscal sponsorship for projects), domains',
          'Slack community with 50K+ members—ask questions, share projects, get feedback 24/7',
          'Shipyard: build and deploy projects, earn "doubloons," redeem for swag and hardware',
          'Unique events: Assemble (hardware), Epoch (overnight), Outernet (rural hackathons)'
        ],
        imagePlaceholder: 'Screenshot of Hack Club Slack workspace with active project channels'
      },
      {
        heading: 'How to Get Involved with Hack Club',
        paragraphs: [
          'Start by joining the Hack Club Slack at hackclub.com/slack. Introduce yourself in #introductions, share what you\'re interested in building, and lurk in channels like #ship (where people share daily progress) and #hardware (for Raspberry Pi / Arduino projects).',
          'If you\'re in high school, consider starting a Hack Club at your school. Hack Club HQ provides free curriculum, stickers, grants for pizza, and a dedicated Slack channel. If you\'re in college, you can still join events and the community—age is just a number in Hack Club.'
        ],
        list: [
          'Join hackclub.com/slack and introduce yourself in #introductions',
          'Browse #ship to see what others are building—get inspired and share your own projects',
          'Participate in Arcade: a summer event where you code projects and earn prizes',
          'Check hackathons.hackclub.com for upcoming events (Assemble, Epoch, etc.)',
          'Start a Hack Club at your school: get free curriculum, funding, and mentorship',
          'Use Hack Club Bank to accept donations or sponsorships for your projects/events',
          'Join workshops in Slack—topics range from "Intro to Web Dev" to "Building AI Apps"'
        ],
        imagePlaceholder: 'Screenshot of Hack Club hackathons page showing event calendar and registration'
      },
      {
        heading: 'Pro Tips for Hack Club Events',
        paragraphs: [
          'Hack Club hackathons prioritize vibes and creativity over perfection. Don\'t stress about building the "best" project—focus on building something fun, weird, or useful. Judges love personality and storytelling over polished code.',
          'Take advantage of Hack Club\'s free resources. Apply for the GitHub Grant (free credits), use Shipyard to deploy projects, and redeem doubloons for hardware like Raspberry Pis or Arduino kits. The more you engage, the more opportunities you unlock.'
        ],
        list: [
          'Ship daily on #ship in Slack—even small progress counts and builds momentum',
          'Collaborate across timezones—Hack Club is global, so you can pair-program anytime',
          'Attend Hack Club meetups (Assemble, Epoch) in person—friendships formed IRL are powerful',
          'Use Sprig (Hack Club\'s game engine) to build retro games and win a custom handheld console',
          'Contribute to OnBoard: design a PCB, get it manufactured for free, share your process',
          'Ask questions fearlessly—Hack Club\'s culture is "there are no dumb questions"'
        ],
        imagePlaceholder: 'Photo of Hack Club swag, stickers, and hardware kits (Raspberry Pi, Sprig console)'
      },
      {
        heading: 'Hack Club Philosophy: Optimism & Agency',
        paragraphs: [
          'Hack Club believes teenagers are capable of extraordinary things when given the right tools and community. The culture is optimistic, high-energy, and radically transparent. Everything—from financials to event planning—happens in public Slack channels.',
          'If you\'re someone who wants to build, learn, and connect with like-minded creators, Hack Club is your home. Whether you\'re coding your first website or launching a startup, the community will cheer you on and help you ship.'
        ]
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/2BID8_pGuqA'
  }
}

export function getResourceContent(slug: string): ResourceContent | null {
  return contentMap[slug] || null
}
