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
export const library: {
  category: string;
  tagline: string;
  items: { type: string; title: string; meta: string }[];
}[] = [
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

/* FINAL — If I Joined Small Giants Tomorrow */
export const roadmap = [
  {
    window: "30 Days",
    theme: "Learn the engine, find the leaks",
    items: [
      "Audit every content surface and map what already compounds vs. what leaks attention.",
      "Sit in on the full workflow, from research to publish, and document where time actually goes.",
      "Ship a weekly teardown in Small Giants' voice to prove I can produce, not just plan.",
      "Stand up a lightweight dashboard so we're arguing with data, not opinions.",
    ],
  },
  {
    window: "60 Days",
    theme: "Build the systems",
    items: [
      "Turn the best-performing formats into repeatable templates the whole team can run.",
      "Wire an AI repurposing workflow so one piece reliably becomes eight, edited not auto-posted.",
      "Launch a structured experiment cadence: one growth bet shipped and measured every week.",
      "Tighten the path from reader to community member with a clear, owned funnel.",
    ],
  },
  {
    window: "90 Days",
    theme: "Compound it",
    items: [
      "Hand the team a knowledge base that makes every new piece cheaper and better than the last.",
      "Prove one acquisition channel that compounds, with the unit economics to defend scaling it.",
      "Ship a small piece of education — a mini-course or framework library — from existing content.",
      "Leave behind systems that run without me, so my next 90 days start further up the curve.",
    ],
  },
];

export const nav = [
  { label: "Vision", href: "#why" },
  { label: "Operating System", href: "#founder-os" },
  { label: "Engine", href: "#engine" },
  { label: "Library", href: "#library" },
  { label: "AI Layer", href: "#ai-layer" },
  { label: "The Build", href: "#built" },
];
