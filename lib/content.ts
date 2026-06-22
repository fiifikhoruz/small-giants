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
      "Insights become essays, playbooks, videos and frameworks, each matched to how founders really learn.",
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
  image?: string;
  imageAlt?: string;
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
        frame: "Building a category, not just a product.",
        hook: "The real one. Say Something is the first locally made Ghanaian conversation card game, built by AB Card Games. I led it as co-founder and product lead, end to end. Here is the honest teardown: what we got right, what we changed, and what the market actually taught us.",
        readingTime: "8 min read · Founder teardown · AB Card Games",
        image: "/say-something-cards.jpg",
        imageAlt:
          "The four Say Something editions by AB Card Games, Ghana, Global, Spicy and Christian, held up against bold colour backgrounds",
        sections: [
          {
            heading: "The opportunity",
            body: "Social card games out of the US and Europe travelled the world, but none of them felt West African. The references missed. The language felt borrowed. The humour was someone else's. There was no locally made conversation game in Ghana at all. That gap was the whole opportunity: a game built for how people here actually sit together, talk, and play, at parties, dates, and church hangouts.",
          },
          {
            heading: "Building a category, not a feature",
            body: "We did not set out to make one clever card game. We built a system: a modular game with themed editions that share a single mechanic (draw a card, respond, let the group react) and change only the context. Ghana, Global, Spicy, Christian, and a Complete pack. The behaviour we were really naming was Ghanaians connecting through their own references, and owning that mattered more than any single feature.",
          },
          {
            heading: "What I owned",
            body: "All of it. The product concept and strategy, the core game mechanic, hundreds of prompts written and curated across editions, the branding and packaging, the pricing tiers, and the go-to-market through event activations and direct sales. Product decisions and content decisions, not one or the other.",
          },
          {
            heading: "Pricing and editions",
            body: "Five editions, priced by card count and what local buyers will actually pay: Ghana at GHS 250, Global and Spicy at GHS 150 each, Christian at GHS 200, and the 200-card Complete pack at GHS 450. We launched four at once on purpose, to learn which segments had real pull instead of guessing. Three months in, faith-based demand was obvious, so we shipped the Christian edition. It landed a 15-deck bulk order almost immediately.",
          },
          {
            heading: "How it actually grows",
            body: "The best-converting moments were never paid ads. They were social events where people played it once and got it instantly. Sales peaked on the 13th of February, around a Valentine's activation. A real share of orders are gifts: people buy it for other people, which is word of mouth you can watch happen at the till.",
          },
          {
            heading: "The honest constraints",
            body: "Awareness is the hard part. Ghana has no real board-game retail, so discovery lives in events, social media, and word of mouth, and delivery across Accra alone needs creative workarounds. Building the game was half the job. Getting it into hands, in a market with no retail rails, is the harder half. I underestimated that going in.",
          },
        ],
        signals: [
          "A single bulk order of 15 Christian editions, GHS 1,800, validating niche demand",
          "Sales peaking on the 13th of February, tied to a Valentine's event",
          "Gift-driven, repeat purchases: people buying it for others",
          "Ghana's first locally developed card game, covered by JoyOnline and GhanaWeb",
        ],
        lessons: [
          "Cultural relevance pulls harder than clever features. Prompts need to feel familiar, not smart.",
          "Test your assumptions, do not trust them. A Twi-written card fell flat, so we went English-first with Ghanaian references baked into the tone.",
          "Start broad, then commit to signal. Four editions showed us where the pull was; the fifth followed the data.",
          "Protect unit economics early. We traded premium packaging for simpler production plus a QR code, keeping the feel without the cost.",
        ],
      },
      framework: {
        label: "Featured framework",
        title: "Building a Category Instead of a Product",
        intro: "A Small Giants resource, drawn from building Say Something at AB Card Games. A lens for founders who would rather create demand than fight for it.",
        principles: [
          {
            heading: "Products vs. categories",
            body: "A product is a thing you sell. A category is a behaviour people adopt. Say Something is not really 'a card game.' It is Ghanaians connecting through their own humour, and the game is the simplest way to do it. Compete on features and you join a crowded shelf. Name and own a behaviour and you become the default way to do it. There was no locally made conversation game in Ghana, so we did not build a better one. We built the first, and got to define what it should feel like.",
          },
          {
            heading: "Why communities and events beat campaigns",
            body: "The cheapest, most durable growth was never an ad. It was a room of people playing the game once, understanding it instantly, then buying it for friends. In a market with no board-game retail, the product spread through shared experiences: parties, dates, church hangouts, a Valentine's activation. People trust a behaviour their friends already do far more than a message they were served.",
          },
          {
            heading: "Why the interaction is the product",
            body: "Say Something only works when people talk, so every play creates the next player and every session is a small act of distribution. That is the strongest position a product can hold: the thing people do with it is also how it grows. Build for the interaction itself, and the product starts marketing itself.",
          },
        ],
        takeaways: [
          "Name the behaviour before you polish the feature.",
          "Build the product as a system: one mechanic, many editions, so it scales without losing focus.",
          "Put it where people already gather, and let them feel it before they buy.",
          "Test cultural assumptions in public, then follow the data, not your taste.",
          "Watch for gifting and word of mouth. They are the earliest sign a category is forming.",
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
  title: "200+ pieces in 8 weeks",
  intro:
    "Small Giants already has the mission. The challenge now is turning it into a repeatable content engine. Over the next eight weeks, the goal is 200+ pieces across TikTok, Instagram and LinkedIn. I would focus on systems, leverage and compounding outcomes, not heroics.",
  pillars: [
    {
      n: "01",
      title: "Content pipeline",
      flow: "Idea → Research → Script → Edit → Publish → Analyse",
      body: "One workflow, end to end. Reduce friction at every handoff, raise output, and document the process so it runs without any single person, including me.",
    },
    {
      n: "02",
      title: "AI workflows",
      flow: "Research · Ideation · Scripting · Repurposing · Analysis",
      body: "Use AI to accelerate the heavy lifting across the pipeline. A force multiplier on the busywork, never a replacement for the editorial judgement that decides what is actually worth saying.",
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
      body: "Find the formats that win, track engagement honestly, and double down on what works, tying content performance to the things that compound: audience, newsletter and community growth.",
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
  title: "The ideas behind Small Giants",
  lead: "Small Giants makes more sense once you trace where it comes from.",
  body: [
    "Vidette Adjorlolo, the founder of Small Giants, built Sorted Chale from the ground up in Ghana: a travel brand rooted in culture and belonging, grown into a global experience company for the African diaspora.",
    "Travel was the medium. Belonging was the point. Her work has always blended storytelling, identity and business, designing experiences that go deeper than itineraries and systems that lift local communities while giving travellers a sense of home across Africa.",
    "As a Schwarzman Scholar, she widened that lens onto culture, leadership and how things scale. Small Giants reads like the same instinct pointed at a new audience: founders who need somewhere to keep learning, belonging and building long after formal education ends.",
    "I am applying for the Content and Growth role, not pitching a vision. I mapped this throughline because the best way to help build something is to understand what it is really about first.",
  ],
  pillars: [
    {
      name: "Belonging",
      tag: "The starting point",
      body: "People commit where they feel they belong. Sorted Chale ran on it. The same force turns an audience into a community, and a community into a media company that compounds.",
    },
    {
      name: "Learning",
      tag: "The constant",
      body: "Learning should not stop when school does. The questions get harder and the support thins out. Small Giants treats learning as a lifelong craft for founders, not a credential to frame on a wall.",
    },
    {
      name: "Building",
      tag: "The point",
      body: "Belonging and learning matter when they help you build. The throughline from travel to media is the same instinct: make something real that changes how people live.",
    },
  ],
  journey: [
    { node: "Sorted Chale", note: "A travel brand built from the ground up in Ghana, for the African diaspora." },
    { node: "Community", note: "The real product was never the itinerary. It was the people and the belonging." },
    { node: "Belonging", note: "Culture and identity: giving travellers a sense of home across Africa." },
    { node: "Learning", note: "As a Schwarzman Scholar, a wider lens on culture, leadership and scale." },
    { node: "Entrepreneurship", note: "Storytelling, identity and business, woven into a single craft." },
    { node: "Small Giants", note: "The same instinct, now a media and education company for founders." },
  ],
};
