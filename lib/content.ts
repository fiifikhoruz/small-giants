/**
 * content.ts
 * Single source of truth for all site copy and section data.
 * Everything here is written copy — no placeholders, no lorem ipsum.
 */

export const hero = {
  words: ["BUILD", "BETTER.", "THINK", "BIGGER.", "KEEP", "LEARNING."],
  lines: ["BUILD BETTER.", "THINK BIGGER.", "KEEP LEARNING."],
  sub: "The modern school for entrepreneurs.",
  body:
    "Content, community and practical business education for founders who never stop learning.",
  primaryCta: "Explore the Vision",
  secondaryCta: "Join the Journey",
};

export const stats = [
  { value: 47000, suffix: "+", label: "Founders learning with us" },
  { value: 312, suffix: "", label: "Playbooks, frameworks & teardowns" },
  { value: 92, suffix: "%", label: "Say they'd never go back to a classroom" },
  { value: 6, suffix: "", label: "AI agents running the content engine" },
];

export const marqueeTerms = [
  "Build better",
  "Think bigger",
  "Keep learning",
  "Ship in public",
  "Compound knowledge",
  "Stay curious",
  "Founder-first",
  "The school we wish existed",
];

/* SECTION 1 — Why Small Giants Exists */
export const originPanels = [
  {
    index: "01",
    kicker: "The end of the syllabus",
    headline: "Traditional education ends.",
    body:
      "You hand back the gown, frame the certificate, and the structure that organised your learning for two decades simply stops. No more curriculum. No more deadlines that someone else sets.",
  },
  {
    index: "02",
    kicker: "Day one",
    headline: "Business begins.",
    body:
      "Then the real test starts. Hiring before you can afford to. Pricing with no data. Selling something nobody has heard of. The exam now has no answer key, and the grade is whether the company survives.",
  },
  {
    index: "03",
    kicker: "Moving targets",
    headline: "The challenges keep changing.",
    body:
      "What worked at ten thousand in revenue breaks at ten million. Channels die. Markets shift. The skill that made you is rarely the skill that scales you. The questions never stop arriving.",
  },
  {
    index: "04",
    kicker: "The gap",
    headline: "The learning shouldn't stop.",
    body:
      "Yet most founders are left to figure it out alone, gluing lessons together from scattered threads, expensive cohorts and advice that doesn't survive contact with their reality.",
  },
  {
    index: "05",
    kicker: "Our reason",
    headline: "That's why Small Giants exists.",
    body:
      "We're building the school we wish existed: a place that treats entrepreneurship as a lifelong craft, and keeps teaching long after the world stops handing out lessons.",
  },
];

/* SECTION 2 — The Founder Operating System */
export const founderOS = [
  {
    n: "01",
    title: "Thinking",
    blurb:
      "Sharper mental models for ambiguity, risk and bets you can't run twice.",
    insight:
      "The best founders aren't the most confident. They're the ones who change their mind fastest when the evidence does.",
  },
  {
    n: "02",
    title: "Building",
    blurb: "Turning a rough idea into something people can actually use.",
    insight:
      "Ship the version that embarrasses you slightly. Taste is a feedback loop, not a launch-day decision.",
  },
  {
    n: "03",
    title: "Sales",
    blurb: "The skill founders avoid longest and need earliest.",
    insight:
      "Selling isn't convincing. It's helping the right person see what they already wanted clearly enough to act.",
  },
  {
    n: "04",
    title: "Growth",
    blurb: "Finding the one channel that compounds before you spread thin.",
    insight:
      "Most growth problems are retention problems wearing a marketing costume.",
  },
  {
    n: "05",
    title: "AI",
    blurb: "Using leverage that didn't exist for any founder before you.",
    insight:
      "AI doesn't replace judgement. It removes the busywork that used to crowd it out.",
  },
  {
    n: "06",
    title: "Hiring",
    blurb: "Building the team that builds the company.",
    insight:
      "Hire for the slope, not the intercept. Where someone is going matters more than where they start.",
  },
  {
    n: "07",
    title: "Systems",
    blurb: "Replacing heroics with processes that run without you.",
    insight:
      "If a result depends on you remembering, it isn't a system. It's a liability with good intentions.",
  },
  {
    n: "08",
    title: "Leadership",
    blurb: "Becoming someone other people choose to follow.",
    insight:
      "Culture is the worst behaviour you're willing to tolerate from your best performer.",
  },
];

/* SECTION 3 — The Content Engine (flywheel) */
export const flywheel = [
  {
    id: "research",
    label: "Research",
    detail:
      "We go to the source: operators, primary data, teardowns and the questions founders are actually asking this week.",
  },
  {
    id: "insights",
    label: "Insights",
    detail:
      "Raw research becomes a point of view. We separate the durable principle from the temporary tactic.",
  },
  {
    id: "content",
    label: "Content",
    detail:
      "Insights become essays, playbooks, videos and frameworks — formats matched to how founders really learn.",
  },
  {
    id: "distribution",
    label: "Distribution",
    detail:
      "One idea, reshaped for every surface: newsletter, social, search and the feeds where founders spend their time.",
  },
  {
    id: "audience",
    label: "Audience",
    detail:
      "Attention compounds into trust. The audience tells us what's working and what to dig into next.",
  },
  {
    id: "community",
    label: "Community",
    detail:
      "Readers become members. Members trade real numbers, hard lessons and warm introductions.",
  },
  {
    id: "education",
    label: "Education",
    detail:
      "Community knowledge hardens into structured learning: courses, cohorts and reference material that lasts.",
  },
];

/* SECTION 4 — The Entrepreneur Library */
export type LibraryCaseStudy = {
  label: string;
  title: string;
  frame: string;
  hook: string;
  readingTime: string;
  sections: { heading: string; body: string }[];
  signals: string[];
  lessons: string[];
};

export type LibraryFramework = {
  label: string;
  title: string;
  intro: string;
  principles: { heading: string; body: string }[];
  takeaways: string[];
};

export type LibraryCategory = {
  category: string;
  tagline: string;
  items: { type: string; title: string; meta: string }[];
  featured?: {
    caseStudy: LibraryCaseStudy;
    framework: LibraryFramework;
  };
};

export const library: LibraryCategory[] = [
  {
    category: "Growth",
    tagline: "Channels that compound, not campaigns that spike.",
    items: [
      { type: "Playbook", title: "Finding your first scalable channel", meta: "9 steps · 14 min" },
      { type: "Framework", title: "The retention-before-acquisition audit", meta: "Framework" },
      { type: "Case study", title: "How a B2B newsletter hit 50k with zero ad spend", meta: "Teardown" },
      { type: "Article", title: "Why your CAC is lying to you", meta: "7 min read" },
    ],
  },
  {
    category: "Sales",
    tagline: "The founder-led motion, demystified.",
    items: [
      { type: "Playbook", title: "Your first 20 sales calls, scripted", meta: "Playbook · 18 min" },
      { type: "Framework", title: "The objection map", meta: "Framework" },
      { type: "Resource", title: "Cold outreach templates that get replies", meta: "12 templates" },
      { type: "Case study", title: "Closing enterprise as a two-person team", meta: "Teardown" },
    ],
  },
  {
    category: "AI",
    tagline: "Leverage no previous founder had.",
    items: [
      { type: "Playbook", title: "Building your founder agent stack", meta: "Playbook · 22 min" },
      { type: "Framework", title: "What to automate vs. what to keep human", meta: "Framework" },
      { type: "Resource", title: "Prompt library for operators", meta: "40+ prompts" },
      { type: "Article", title: "The unit economics of an AI-native team", meta: "11 min read" },
    ],
  },
  {
    category: "Startups",
    tagline: "From idea to traction, without the mythology.",
    items: [
      { type: "Playbook", title: "Validating before you build", meta: "Playbook · 16 min" },
      { type: "Framework", title: "The pre-seed readiness checklist", meta: "Framework" },
      { type: "Case study", title: "Three pivots that worked (and why)", meta: "Teardown" },
      { type: "Resource", title: "The fundraising data room template", meta: "Template" },
    ],
    featured: {
      caseStudy: {
        label: "Featured founder case study",
        title: "Say Something",
        frame: "Building a category instead of a product.",
        hook: "Most startups launch a product and hope a market shows up. Say Something did the opposite: it named a behaviour people already wanted permission to perform, then built the smallest possible thing to make it easy. The product was almost incidental. The category did the selling.",
        readingTime: "9 min read · Founder teardown",
        sections: [
          {
            heading: "Identifying the opportunity",
            body: "The gap wasn't a missing feature. It was a missing permission. People constantly had something to say — a thank you, an apology, an unspoken truth, a piece of encouragement — and almost no low-stakes way to say it. The opportunity lived in the everyday friction of human expression, not in a competitor's product roadmap. The founding insight was behavioural, not technical: watch what people already try to do in the margins, then remove the awkwardness that stops them.",
          },
          {
            heading: "Building a category, not a feature",
            body: "Instead of positioning against existing messaging apps, Say Something framed a new behaviour and gave it a name. A named behaviour is a category in disguise. When you compete on features you join a race that's already crowded; when you name a behaviour you become the default verb for it. The product became a wedge into a much larger idea — that saying the thing matters — and the bigger idea is what people repeated to each other.",
          },
          {
            heading: "Product development",
            body: "The team built the smallest thing that made the behaviour effortless, then iterated on friction rather than features. Every release answered one question: what's still stopping someone from saying the thing? That discipline kept the product narrow and the experience fast. Features that didn't serve the core act were cut, even good ones, because a category is defended by clarity, not by surface area.",
          },
          {
            heading: "Community building",
            body: "Early users weren't an audience, they were co-authors. The first hundred people shaped the tone, the etiquette and the unwritten rules of how you 'say something' here. The team invested in rituals over functionality — moments that made participation feel shared. Community scaled the behaviour faster than any feature could, because people don't adopt a category alone; they adopt it because the people around them already have.",
          },
          {
            heading: "Distribution",
            body: "Distribution was designed into the act itself. Saying something to someone implicates a second person, so every use was a quiet invitation. Growth came from the behaviour spreading person to person, not from campaigns renting attention. The most durable distribution channel turned out to be the conversation the product started — people explaining it to each other in their own words.",
          },
          {
            heading: "Product-market fit signals",
            body: "The signals were qualitative before they were quantitative. People used it unprompted, without nudges or reminders. They adopted the product's language as their own. They came back without being pulled back. And, most tellingly, they explained it to others better than the marketing did. When your users start doing your positioning for you, you've found the edge of product-market fit.",
          },
        ],
        signals: [
          "Unprompted, repeat use with no notifications driving it",
          "Users adopting the product's language in everyday speech",
          "People explaining the idea to others more clearly than the brand could",
          "Demand for the behaviour in contexts the team never designed for",
        ],
        lessons: [
          "Sell the behaviour, not the build. The product is the wedge; the category is the story.",
          "Narrow beats broad. Clarity is how a young category defends itself.",
          "Design distribution into the act, so using it is sharing it.",
          "Treat your first users as co-authors of the category, not as a launch audience.",
        ],
      },
      framework: {
        label: "Featured framework",
        title: "Building a Category Instead of a Product",
        intro: "A Small Giants resource, drawn from the Say Something journey. A practical lens for founders who'd rather create demand than fight for it.",
        principles: [
          {
            heading: "Products vs. categories",
            body: "A product is a thing you sell. A category is a belief people adopt. Products compete on features and get compared on a spec sheet; categories compete on worldview and get repeated in conversation. Founders who only ship a product spend their lives explaining why theirs is better. Founders who frame a category get to define what 'better' even means. The work is naming the behaviour or belief your product unlocks, then making your product the most natural way to live it.",
          },
          {
            heading: "Why communities scale better than campaigns",
            body: "Campaigns rent attention; communities compound it. A campaign's value ends the moment you stop paying for it. A community keeps producing value — language, norms, referrals, proof — long after the launch. Communities also carry a category further than ads can, because people trust a behaviour their peers have already adopted more than a message they've been served. The cheapest, most durable growth is a group of people who feel ownership over the idea.",
          },
          {
            heading: "Why conversation became the product",
            body: "In the strongest categories, the interaction is the value. When the core act is inherently social, every use creates a second user and every conversation is a quiet act of distribution. Conversation is also a feedback loop: it tells you which framing lands, which words spread, and where the behaviour wants to go next. Build the loop where talking about it and using it are the same motion, and the category teaches you how to grow it.",
          },
        ],
        takeaways: [
          "Name the behaviour before you build the feature.",
          "Pick the smallest product that makes the behaviour effortless.",
          "Invest in rituals and norms, not just functionality.",
          "Make every use an invitation, so distribution is built in.",
          "Watch for language adoption — it's the earliest signal a category is forming.",
        ],
      },
    },
  },
  {
    category: "Product",
    tagline: "Build the thing people return to.",
    items: [
      { type: "Playbook", title: "Shipping your first version in public", meta: "Playbook · 13 min" },
      { type: "Framework", title: "The activation moment map", meta: "Framework" },
      { type: "Article", title: "Saying no as a product strategy", meta: "8 min read" },
      { type: "Case study", title: "Rebuilding onboarding for 2x activation", meta: "Teardown" },
    ],
  },
  {
    category: "Systems",
    tagline: "Make the business run without you.",
    items: [
      { type: "Playbook", title: "Documenting your first ten processes", meta: "Playbook · 15 min" },
      { type: "Framework", title: "The delegation ladder", meta: "Framework" },
      { type: "Resource", title: "The operating cadence template", meta: "Template" },
      { type: "Article", title: "When to systemise and when to stay scrappy", meta: "6 min read" },
    ],
  },
  {
    category: "Leadership",
    tagline: "Become someone people choose to follow.",
    items: [
      { type: "Playbook", title: "Your first management operating manual", meta: "Playbook · 17 min" },
      { type: "Framework", title: "The feedback that actually lands", meta: "Framework" },
      { type: "Case study", title: "Scaling culture from 5 to 50", meta: "Teardown" },
      { type: "Article", title: "Leading through the messy middle", meta: "9 min read" },
    ],
  },
];

/* SECTION 5 — Build in Public timeline */
export const timeline = [
  {
    day: "Day 1",
    title: "A landing page and a promise",
    experiment: "Put up a one-line waitlist and tell ten founders the idea out loud.",
    win: "31 sign-ups before there was anything to sign up for.",
    failure: "The headline tried to say everything. It said nothing.",
    lesson: "Specific beats impressive. Name the exact person you're for.",
  },
  {
    day: "Day 30",
    title: "First content, first signal",
    experiment: "Ship one essay and one teardown a week, no matter what.",
    win: "A single teardown out-performed everything else combined.",
    failure: "Three polished essays nobody finished reading.",
    lesson: "Make more of what works. Stop defending what doesn't.",
  },
  {
    day: "Day 60",
    title: "Distribution gets a system",
    experiment: "Turn every long piece into eight short ones across channels.",
    win: "Reach tripled with the same underlying research.",
    failure: "Auto-posting without editing flopped on every platform.",
    lesson: "Repurposing is translation, not copy-paste.",
  },
  {
    day: "Day 100",
    title: "Readers become members",
    experiment: "Open a small paid community to the most active 200 readers.",
    win: "The first cohort filled in 48 hours.",
    failure: "Underpriced it and nearly buried ourselves in support.",
    lesson: "Charge enough to take the work seriously. So will they.",
  },
  {
    day: "Day 365",
    title: "A media company that compounds",
    experiment: "Wire research, content and community into one loop.",
    win: "Each new piece now makes the next one cheaper and better.",
    failure: "Lost a month to a redesign no reader ever asked for.",
    lesson: "Compounding beats polishing. Protect the loop.",
  },
];

/* SECTION 6 — The AI Layer */
export const agents = [
  {
    id: "research",
    name: "Research Agent",
    role: "Scans, reads and clusters",
    detail:
      "Monitors operators, primary sources and founder questions in real time, then clusters the noise into the themes worth a human's attention.",
  },
  {
    id: "content",
    name: "Content Agent",
    role: "Drafts with our voice",
    detail:
      "Turns an approved insight into a structured first draft, trained on our editorial standards so editors start at the ten-yard line, not the kickoff.",
  },
  {
    id: "repurposing",
    name: "Repurposing Agent",
    role: "One idea, every surface",
    detail:
      "Reshapes a single piece into threads, scripts, carousels and newsletter cuts, each tuned to the platform rather than pasted across them.",
  },
  {
    id: "knowledge",
    name: "Knowledge Agent",
    role: "Remembers everything",
    detail:
      "Indexes every essay, comment and lesson into a living memory, so nothing we've learned is ever published twice or lost.",
  },
  {
    id: "analytics",
    name: "Analytics Agent",
    role: "Closes the loop",
    detail:
      "Watches what actually lands, feeds the result back to Research, and tells the engine what to make more of next week.",
  },
];

/* SECTION 7 — How This Website Was Built */
export const buildProcess = [
  { phase: "Research", note: "Mapped the founder-education landscape and where it fails." },
  { phase: "Strategy", note: "Chose a single positioning: the school we wish existed." },
  { phase: "Architecture", note: "Designed the narrative as a scroll, not a sitemap." },
  { phase: "Design", note: "Built a high-contrast editorial system, one accent colour." },
  { phase: "Development", note: "Shipped in Next.js, TypeScript, Tailwind and Framer Motion." },
  { phase: "AI Collaboration", note: "Ran the whole thing with an AI in the loop end to end." },
];

export const aiCollab = [
  {
    title: "AI accelerated research",
    body:
      "Instead of weeks reading around the category, I used AI to cluster competitor positioning, surface the recurring gaps founders complain about, and pressure-test the angle before a single word of copy was written.",
    metric: "Weeks of desk research → an afternoon",
  },
  {
    title: "AI accelerated writing",
    body:
      "Every section here is human-edited, but AI gave me fast first drafts to react to. Reacting to a draft is far quicker than facing a blank page, so the copy went through more revisions, not fewer.",
    metric: "More drafts, sharper final copy",
  },
  {
    title: "AI accelerated design",
    body:
      "I used AI to generate layout directions, name the palette, and stress-test the type scale against references like Linear and Stripe, then made the taste calls myself.",
    metric: "Dozens of directions explored, one shipped",
  },
  {
    title: "AI accelerated development",
    body:
      "Components, animation logic and responsive edge-cases were built with AI pairing throughout, which freed my attention for the parts that needed judgement: motion timing, hierarchy and feel.",
    metric: "Build time cut, polish time protected",
  },
];

/* FINAL — If I Joined The Sprint Tomorrow (8-week execution) */
export const sprint = {
  eyebrow: "If I joined the sprint",
  title: "If I joined the sprint tomorrow",
  intro:
    "Small Giants already has the mission. The challenge now is turning it into a repeatable content engine. Over the next eight weeks — 200+ pieces across TikTok, Instagram and LinkedIn — I would focus on systems, leverage and compounding outcomes, not heroics.",
  pillars: [
    {
      n: "01",
      title: "Content pipeline",
      flow: "Idea → Research → Script → Edit → Publish → Analyse",
      body: "One workflow, end to end. Reduce friction at every handoff, raise output, and document the process so it runs without any single person — including me.",
    },
    {
      n: "02",
      title: "AI workflows",
      flow: "Research · Ideation · Scripting · Repurposing · Analysis",
      body: "Use AI to accelerate the heavy lifting across the pipeline. A force multiplier on the busywork — never a replacement for the editorial judgement that decides what is actually worth saying.",
    },
    {
      n: "03",
      title: "Content systems",
      flow: "Create once · Reuse intelligently",
      body: "Repeatable frameworks for the formats that recur: founder stories, business insights, AI explainers, startup lessons, trend analysis. Build the template once, then reuse it with intent.",
    },
    {
      n: "04",
      title: "Growth loops",
      flow: "Audience → Newsletter → Community",
      body: "Find the formats that win, track engagement honestly, and double down on what works — tying content performance to the things that compound: audience, newsletter and community growth.",
    },
  ],
  closer:
    "The objective isn't simply publishing 200 pieces. It's building a system capable of producing the next 2,000.",
};

export const nav = [
  { label: "Vision", href: "#why" },
  { label: "Operating System", href: "#founder-os" },
  { label: "Engine", href: "#engine" },
  { label: "Library", href: "#library" },
  { label: "The Founder", href: "#founder" },
  { label: "AI Layer", href: "#ai-layer" },
  { label: "The Build", href: "#built" },
];

/* SECTION 5 — The Founder (lessons from the journey, contributor voice) */
export const founderThesis = {
  eyebrow: "The Founder",
  title: "Lessons from the journey",
  lead: "Before this application, I spent years learning the same things Small Giants teaches — the slow, expensive way.",
  body: [
    "I founded Sorted Chale and built it from the ground up in Ghana, growing it into a global experience brand for the African diaspora. The plan was to sell experiences. What it actually taught me was how people change.",
    "The real product was never the events. It was the belonging they created — people came back for who they got to be when they were with us. Culture, identity and community turned out to be the whole business.",
    "That is the same thread Small Giants is already pulling on: that learning, belonging and building are inseparable, and that founders need somewhere to do all three long after formal education ends.",
    "So I am not bringing a different vision. I am bringing the lived version of the one Small Giants already has — which is exactly why I wanted to contribute before being asked.",
  ],
  pillars: [
    {
      name: "Belonging",
      tag: "What I learned first",
      body: "People learn fastest where they feel they belong. Sorted Chale ran on it. It is the same force that turns an audience into a community — and a community into a media company that compounds.",
    },
    {
      name: "Learning",
      tag: "What kept mattering",
      body: "The questions only got harder after school ended, and the support quietly disappeared. Treating learning as a lifelong craft, not a credential, is the gap Small Giants exists to close.",
    },
    {
      name: "Building",
      tag: "What it is all for",
      body: "Belonging and learning only matter if they help you build. Everything I have done points back to the work — shipping, selling, growing — and that is the bias I would bring to the content too.",
    },
  ],
  journey: [
    { node: "Sorted Chale", note: "Built from the ground up in Ghana — an experience brand for the diaspora." },
    { node: "Community", note: "The real product was the people who kept coming back, not the events." },
    { node: "Belonging", note: "What they came back for: feeling part of something that understood them." },
    { node: "Learning", note: "I watched founders teach themselves in the dark, alone." },
    { node: "Entrepreneurship", note: "The throughline — building things that change how people live and feel." },
    { node: "Small Giants", note: "The company already building exactly this. Which is why I wanted in." },
  ],
};
