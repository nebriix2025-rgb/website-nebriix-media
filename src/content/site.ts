import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Workflow,
  Video,
  Target,
  Palette,
  Code2,
  PhoneCall,
  Scissors,
  Share2,
  Sparkles,
  TrendingUp,
  Building2,
} from "lucide-react";

/**
 * Single source of truth for site copy.
 *
 * Copy here is transcribed from the live nebriix.com (WordPress/Mokko) unless a
 * comment marks it NEW. Anything marked NEW has no equivalent on the current
 * site and needs sign-off before launch.
 */

export const site = {
  name: "Nebriix",
  url: "https://nebriix.com",
  title: "Nebriix | AI Agency — Automation, Content & Lead Generation",
  tagline: "AI-Powered Growth for Modern Brands.",
  description:
    "We build AI systems, automate workflows, and create content that scales your brand — without adding headcount.",
  footerBlurb:
    "Nebriix helps brands grow with AI automation, content, and lead generation. We build smart systems that scale.",
  email: "Hello@nebriix.com",
  /** NOTE: placeholder on the live site — confirm before launch. */
  phone: "+971 4 000 0000",
  phoneHref: "tel:+97140000000",
  app: "https://nebriix.cloud",
  socials: {
    instagram: "https://www.instagram.com/nebriix",
    twitter: "https://twitter.com/nebriix",
    facebook: "https://www.facebook.com/nebriix",
    linkedin: "https://www.linkedin.com/company/nebriix",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Stories", href: "/stories" },
  { label: "Contact", href: "/contact" },
] as const;

/* ---------------------------------------------------------------- services */

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  icon: LucideIcon;
  category: string;
};

/** The 12 services from the home-page accordion, in their original order. */
export const services: Service[] = [
  {
    slug: "video-editing-clipping",
    title: "Video Editing & Clipping",
    blurb:
      "Scroll-stopping content on demand. Precision edits, tight cuts, and platform-ready formatting — without the back-and-forth.",
    icon: Scissors,
    category: "Video & Content",
  },
  {
    slug: "ai-receptionist-voice-agents",
    title: "AI Receptionist & Voice Agents",
    blurb:
      "Never let a hot lead go cold. Voice agents that answer calls, qualify prospects, and book your calendar every hour you're not working.",
    icon: PhoneCall,
    category: "AI Automation",
  },
  {
    slug: "ai-chatbot-development",
    title: "AI Chatbot Development",
    blurb:
      "Your best closer, always available. Trained on your business, it handles objections and nudges visitors toward yes.",
    icon: Bot,
    category: "AI Automation",
  },
  {
    slug: "long-form-to-short-form",
    title: "Long-Form to Short-Form",
    blurb:
      "One recording. Thirty pieces of content. We extract your best moments and reformat them for every platform, every time.",
    icon: Video,
    category: "Video & Content",
  },
  {
    slug: "ai-social-media-content",
    title: "AI Social Media Content",
    blurb:
      "A full-time content team at a fraction of the cost. Daily posts, sharp captions, branded visuals — generated and posted.",
    icon: Share2,
    category: "Video & Content",
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    blurb:
      "Find the bottleneck. Automate it. We map your operations and build pipelines that eliminate the manual work eating your team's hours.",
    icon: Workflow,
    category: "AI Automation",
  },
  {
    slug: "lead-generation-ai",
    title: "Lead Generation AI",
    blurb:
      "Stop waiting for inbound. AI that identifies, reaches, and qualifies prospects at scale — so your team only talks to buyers.",
    icon: Target,
    category: "Lead Generation",
  },
  {
    slug: "custom-ai-integrations",
    title: "Custom AI Integrations",
    blurb:
      "Describe the problem. We build the solution. Bespoke AI wired directly into your existing tools.",
    icon: Sparkles,
    category: "AI Automation",
  },
  {
    slug: "creative-brand-design",
    title: "Creative & Brand Design",
    blurb:
      "Your brand's first impression, built to last. We craft strong visual identities — from brand identity and logo systems to packaging, label design, UI/UX, and content templates — that build trust and recognition at every touchpoint.",
    icon: Palette,
    category: "Brand & Design",
  },
  {
    slug: "web-app-development",
    title: "Web & App Development",
    blurb:
      "Clean, fast, and built for results. We design and develop web apps, landing pages, and interactive digital experiences using modern tools — from no-code and low-code solutions to fully AI-integrated builds that work the moment they launch.",
    icon: Code2,
    category: "Web & App",
  },
  {
    slug: "digital-growth-marketing",
    title: "Digital Growth Marketing",
    blurb:
      "Grow your audience. Own your niche. We build data-driven social media strategies, content calendars, conversion funnels, and paid ad campaigns across Instagram, TikTok, and YouTube — so your brand reaches the right people and converts them.",
    icon: TrendingUp,
    category: "Lead Generation",
  },
  {
    slug: "real-estate-media-production",
    title: "Real Estate Media Production",
    blurb:
      "Cinematic property showcases that sell. We produce stunning real estate media — drone aerials, interior walkthroughs, 3D tours, and video highlights — designed to make every listing look its best and attract serious buyers faster.",
    icon: Building2,
    category: "Video & Content",
  },
];

/* ------------------------------------------------------------ case studies */

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  meta: { label: string; value: string }[];
  overview: string;
  approach: string;
  result: string;
  /** Pulled from `result` for the work-grid teaser. */
  headline: string;
};

/** All 10 case studies, transcribed from their detail pages. */
export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-video-ad-campaign-d2c-brand",
    title: "AI Video Ad Campaign — D2C Brand",
    client: "D2C Fashion & Lifestyle Brand",
    category: "Video & Content",
    year: "2024",
    meta: [
      { label: "Platform", value: "Meta & TikTok" },
      { label: "Service", value: "AI Video Production" },
    ],
    overview:
      "A fast-growing D2C brand needed high-performing video ad content at scale — without the cost and delays of traditional production. Nebriix deployed an AI-powered video production pipeline that generated 20+ ready-to-launch ad creatives in under two weeks, fully branded and platform-optimised for Meta and TikTok.",
    approach:
      "The brand was producing only 2–3 video ads per month due to production bottlenecks and high agency retainer costs. Nebriix built an end-to-end AI content system combining AI scriptwriting, AI voiceover, automated video editing, and dynamic caption generation. Each ad was tailored to a specific audience segment and platform format.",
    result:
      "Within 60 days of launch, the campaign delivered a 3.8x ROAS on Meta and a 2.4x improvement in CTR on TikTok. The brand reduced content production costs by 65% while tripling weekly output. The AI pipeline is now a permanent part of their marketing infrastructure.",
    headline: "3.8x ROAS in 60 days",
  },
  {
    slug: "ai-chatbot-integration-saas-platform",
    title: "AI Chatbot Integration — SaaS Platform",
    client: "B2B SaaS Platform",
    category: "AI Automation",
    year: "2024",
    meta: [
      { label: "Integration", value: "CRM & Helpdesk" },
      { label: "Service", value: "AI Chatbot Development" },
    ],
    overview:
      "A growing SaaS company was losing leads at the top of funnel — website visitors were bouncing without converting because support and qualification were slow. Nebriix designed and deployed a custom AI chatbot trained on the product's knowledge base, pricing structure, and FAQs — live on the website and inside the app.",
    approach:
      "The chatbot needed to handle pre-sales qualification, support tickets, and onboarding questions simultaneously — without sounding robotic. Nebriix built a multi-intent conversational AI using GPT-4, integrated with the client's CRM and helpdesk. The bot qualifies leads, books demos, and escalates complex queries seamlessly.",
    result:
      "Demo bookings increased by 41% in the first 30 days. Support ticket volume dropped by 58%, freeing the team to focus on high-value accounts. The AI chatbot now handles over 800 conversations per month with a 94% resolution rate — with zero added headcount.",
    headline: "41% more demo bookings",
  },
  {
    slug: "lead-generation-system-uae-real-estate",
    title: "Lead Generation System — UAE Real Estate",
    client: "Real Estate Developer, UAE",
    category: "Lead Generation",
    year: "2024",
    meta: [
      { label: "Region", value: "GCC & MENA" },
      { label: "Service", value: "Full-Stack Lead Gen System" },
    ],
    overview:
      "A UAE-based real estate developer was running disconnected ad campaigns with no consistent lead pipeline. Nebriix built a full-stack lead generation system — from audience targeting and ad creative to automated follow-up sequences and CRM integration — designed to qualify and convert high-intent buyers.",
    approach:
      "The client was generating leads but losing them post-capture due to slow follow-up and no nurture sequences. Nebriix deployed AI-driven Meta and Google ad campaigns, combined with a multi-step WhatsApp and email automation that contacted, qualified, and scored every lead within minutes of submission.",
    result:
      "The system generated 1,200+ qualified leads in the first 90 days at a cost-per-lead 44% below the market average. Conversion rate from lead to appointment increased from 6% to 19%. The developer attributed AED 3.2M in closed deals directly to the Nebriix lead generation system.",
    headline: "AED 3.2M in closed deals",
  },
  {
    slug: "brand-identity-fintech-startup",
    title: "Brand Identity — FinTech Startup",
    client: "FinTech Startup, MENA",
    category: "Brand & Design",
    year: "2024",
    meta: [
      { label: "Services", value: "Brand Strategy, Visual Identity" },
      { label: "Service", value: "UI Design & Pitch Deck" },
    ],
    overview:
      "A FinTech startup launching in the MENA region needed a complete brand identity that would communicate trust, innovation, and global ambition — all before their first funding round. Nebriix handled everything from naming strategy and visual identity to brand guidelines and investor pitch deck design.",
    approach:
      "The client needed to stand out in a crowded FinTech landscape while appealing to both institutional investors and retail consumers. Nebriix ran a competitive brand audit, defined positioning pillars, then built a full visual system — logo, typography, colour palette, UI design language, and tone of voice guidelines that scaled across digital and print.",
    result:
      "The brand launched to strong reception from investors and early users. The startup closed its seed round within 60 days of the rebrand, with investors citing the brand's clarity and professionalism as a key confidence factor. The Nebriix-designed identity is now central to all product marketing across 5 countries.",
    headline: "Seed round closed in 60 days",
  },
  {
    slug: "ai-video-production-ecommerce-brand",
    title: "AI Video Production — E-Commerce Brand",
    client: "E-Commerce Brand, GCC",
    category: "Video & Content",
    year: "2024",
    meta: [
      { label: "Region", value: "GCC Region" },
      { label: "Service", value: "AI Video Production" },
    ],
    overview:
      "An e-commerce brand selling across the GCC needed a constant stream of product videos for their website, social media, and marketplace listings — but traditional video production was too slow and expensive to match their catalogue size. Nebriix built an AI video production workflow that created professional product videos at scale.",
    approach:
      "The brand had over 200 SKUs requiring video content, with new products launching weekly. Nebriix implemented an AI-driven pipeline using text-to-video generation, automated product showcases, AI voiceover in Arabic and English, and template-based editing that maintained brand consistency across every output.",
    result:
      "The brand produced 200+ product videos in 3 weeks — a task that would have taken 6 months and cost 10x more with traditional production. Product pages with video saw a 34% increase in conversion rate. The system continues to produce new content weekly with minimal human involvement.",
    headline: "200+ product videos in 3 weeks",
  },
  {
    slug: "workflow-automation-law-firm",
    title: "Workflow Automation — Law Firm",
    client: "Regional Law Firm",
    category: "AI Automation",
    year: "2024",
    meta: [
      { label: "Services", value: "AI Automation, Workflow Design" },
      { label: "Service", value: "AI Agents & CRM Integration" },
    ],
    overview:
      "A regional law firm with 40+ attorneys was spending thousands of billable hours per year on administrative tasks — document intake, client communication, contract review scheduling, and case status updates. Nebriix mapped their operations and deployed a comprehensive AI workflow automation system across the firm.",
    approach:
      "Legal workflows require precision, confidentiality, and compliance — which ruled out generic automation tools. Nebriix built custom AI agents for document classification, automated client intake forms with CRM sync, AI-assisted contract summary generation, and a WhatsApp-based status update bot for clients. All systems were built with data privacy and legal compliance at the core.",
    result:
      "The firm reclaimed an estimated 320 billable hours per month. Client satisfaction scores improved by 28% due to faster response times and proactive updates. The firm's managing partner reported that automation had effectively added the capacity of two full-time associates without the cost.",
    headline: "320 billable hours reclaimed monthly",
  },
  {
    slug: "social-media-growth-system-lifestyle-brand",
    title: "Social Media Growth System — Lifestyle Brand",
    client: "Lifestyle & Wellness Brand",
    category: "Video & Content",
    year: "2024",
    meta: [
      { label: "Platforms", value: "Instagram, TikTok, YouTube" },
      { label: "Service", value: "Social Media Growth System" },
    ],
    overview:
      "A lifestyle brand with strong products but minimal online presence needed to build an engaged social media audience fast. Nebriix created a full AI-powered content strategy and production system — covering Instagram, TikTok, and YouTube Shorts — built to grow followers, drive engagement, and convert viewers into buyers.",
    approach:
      "The brand had no internal content team and needed consistent output across multiple platforms. Nebriix built an automated content calendar, AI-generated short-form video scripts, AI voiceover production, and a scheduling system that published content daily without manual input. Every post was data-driven, optimised for platform algorithms.",
    result:
      "In 90 days, the brand grew from 4,000 to 38,000 followers across platforms. Average engagement rate reached 6.2% — more than double the industry benchmark. The content system drove a 22% increase in direct website traffic, with social channels now accounting for 31% of monthly revenue.",
    headline: "4k to 38k followers in 90 days",
  },
  {
    slug: "ai-voice-agent-medical-practice",
    title: "AI Voice Agent — Medical Practice",
    client: "Private Medical Practice, UAE",
    category: "AI Automation",
    year: "2024",
    meta: [
      { label: "Services", value: "AI Voice Agent, Call Automation" },
      { label: "Service", value: "Arabic & English" },
    ],
    overview:
      "A busy private medical practice in the UAE was overwhelmed with inbound calls — appointment bookings, rescheduling, prescription inquiries, and insurance queries were consuming reception staff the entire day. Nebriix deployed a custom AI voice agent to handle inbound calls 24/7, freeing the team to focus on patients.",
    approach:
      "Healthcare voice automation requires natural conversation, empathy, and strict data compliance. Nebriix built a multilingual AI voice agent (Arabic and English) integrated with the practice's scheduling system. The agent books, reschedules, and cancels appointments, answers common questions, and transfers complex calls to staff — all with a human-like conversational flow.",
    result:
      "The AI voice agent now handles 73% of all inbound calls without human involvement. Reception staff workload dropped by over 60%, allowing them to redirect attention to in-clinic patient experience. Patient no-show rates dropped by 31% due to automated reminder calls. The practice expanded capacity without adding staff.",
    headline: "73% of calls handled autonomously",
  },
  {
    slug: "web-app-development-proptech-platform",
    title: "Web App Development — PropTech Platform",
    client: "PropTech Startup",
    category: "Web & App",
    year: "2023",
    meta: [
      { label: "Sector", value: "Real Estate Technology" },
      { label: "Service", value: "Full-Stack Web App" },
    ],
    overview:
      "A PropTech startup was operating their property listing and tenant management processes entirely through spreadsheets and manual emails. They needed a purpose-built web application to centralise operations, improve the landlord and tenant experience, and support their planned Series A expansion across 3 new markets.",
    approach:
      "The platform needed to serve multiple user types — landlords, tenants, property managers, and admin — with different permission levels and workflows. Nebriix designed and built a full-stack web application with AI-powered property matching, automated tenancy documentation, integrated payment processing, and a real-time maintenance request system.",
    result:
      "The platform launched on schedule and onboarded 150+ properties in the first month. Operational efficiency improved by 70% with automated workflows replacing manual processes. The startup successfully raised their Series A within 6 months of launch, with investors citing the platform's technology as a core competitive advantage.",
    headline: "Series A raised within 6 months",
  },
  {
    slug: "digital-marketing-system-b2b-services",
    title: "Digital Marketing System — B2B Services",
    client: "B2B Professional Services Firm",
    category: "Lead Generation",
    year: "2023",
    meta: [
      { label: "Region", value: "UK & MENA" },
      { label: "Service", value: "B2B Digital Marketing System" },
    ],
    overview:
      "A B2B professional services firm relied entirely on referrals for new business, with no digital marketing presence or inbound lead pipeline. Nebriix built a complete B2B digital marketing system from scratch — including SEO, LinkedIn outreach automation, paid search campaigns, and a content marketing engine designed to generate qualified inbound leads consistently.",
    approach:
      "B2B buyers require trust-building over longer sales cycles. Nebriix developed a full-funnel content strategy with AI-assisted thought leadership articles, LinkedIn automation for targeted outreach to decision-makers, Google Ads campaigns for high-intent keywords, and an email nurture sequence that moved prospects from awareness to consideration.",
    result:
      "Within 6 months, the firm's website traffic increased by 340%. The LinkedIn outreach system generated 85 qualified discovery calls in 90 days. The business closed 14 new retainer clients directly from digital channels — representing $420K in new annual recurring revenue attributed entirely to the Nebriix marketing system.",
    headline: "$420K in new recurring revenue",
  },
];

export const categories = [
  "All",
  "AI Automation",
  "Brand & Design",
  "Lead Generation",
  "Video & Content",
  "Web & App",
] as const;

/* ------------------------------------------------------------------ proof */

/**
 * Every figure below is quoted from a case study above — no invented numbers.
 * `source` is the slug the claim comes from.
 */
export const proofStats = [
  {
    value: 3.8,
    decimals: 1,
    suffix: "x",
    label: "ROAS on Meta in 60 days",
    source: "ai-video-ad-campaign-d2c-brand",
  },
  {
    value: 1200,
    suffix: "+",
    label: "Qualified leads in 90 days",
    source: "lead-generation-system-uae-real-estate",
  },
  {
    value: 320,
    suffix: "",
    label: "Billable hours reclaimed monthly",
    source: "workflow-automation-law-firm",
  },
  {
    value: 73,
    suffix: "%",
    label: "Inbound calls fully automated",
    source: "ai-voice-agent-medical-practice",
  },
];

/* ------------------------------------------------------------------- about */

/** Verbatim from /creative-agency/ — the live "About Us" page. */
export const about = {
  heading: "Trust us — we're experts",
  lead: "We are a global AI agency building intelligent systems, automation, and content that scale brands without limits.",
  support:
    "AI-first and results-driven. Nebriix builds systems that automate, scale, and grow businesses across 12+ countries worldwide.",
  closing:
    "We build intelligent systems and drive measurable growth through the power of AI and automation.",
  marquee: "An AI-powered growth engine for your brand",
};

/**
 * The live founders slider pairs names and roles incorrectly (e.g. "AI Engineers"
 * labelled "Head of Growth"). Reproduced here as roles only until real names and
 * headshots are supplied.
 */
export const team = [
  { name: "Ahmed", role: "Founder" },
  { name: "—", role: "Head of AI Systems" },
  { name: "—", role: "Head of Growth & Lead Generation" },
  { name: "—", role: "Creative Director & Brand Design" },
  { name: "—", role: "Head of Content & Video Production" },
  { name: "—", role: "Head of Web & App Development" },
];

/* ----------------------------------------------------------------- stories */

export type Story = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  categories: string[];
  excerpt: string;
};

/** The 9 posts on /stories/, with their on-page excerpts. */
export const stories: Story[] = [
  {
    slug: "ai-workflow-automation-replacing-operations-teams",
    title:
      "How AI Workflow Automation Is Replacing $500K/Year Operations Teams",
    date: "2024-01-06",
    readTime: "3 min read",
    categories: ["AI Automation", "AI Technology"],
    excerpt:
      "In 2024, the most competitive companies aren't the ones with the biggest teams — they're the ones with the best automated systems.",
  },
  {
    slug: "every-business-will-run-on-ai-next-3-years",
    title:
      "Why Every Business Will Run on AI in the Next 3 Years (And What to Do Now)",
    date: "2024-01-06",
    readTime: "3 min read",
    categories: ["AI Technology", "Business Strategy"],
    excerpt:
      "We're at an inflection point. The businesses that recognize it and act now will own the next decade. Those that wait will spend it catching up.",
  },
  {
    slug: "ai-lead-generation-2025-booking-qualified-calls",
    title:
      "AI Lead Generation in 2025: How Top Agencies Are Booking 10x More Qualified Calls",
    date: "2024-01-06",
    readTime: "3 min read",
    categories: ["Business Strategy", "Lead Generation"],
    excerpt:
      "The era of cold calling, spray-and-pray email blasts, and expensive SDR teams is ending. The companies winning at sales in 2025 have one thing in common.",
  },
  {
    slug: "ai-chatbots-vs-human-sales-reps-which-closes-more-deals",
    title: "AI Chatbots vs. Human Sales Reps: Which Closes More Deals in 2025?",
    date: "2024-01-06",
    readTime: "3 min read",
    categories: ["AI Automation", "Business Strategy"],
    excerpt:
      "It's the question every business owner is quietly asking: should we hire more salespeople, or should we deploy AI?",
  },
  {
    slug: "ai-agency-vs-in-house-team-real-numbers",
    title: "AI Agency vs. In-House Team: The Real Numbers Behind the Decision",
    date: "2024-01-06",
    readTime: "3 min read",
    categories: ["AI Automation", "Business Strategy"],
    excerpt:
      "Every growing company faces it eventually: do we hire in-house for our AI and automation needs, or do we bring in an agency?",
  },
  {
    slug: "dubai-real-estate-brand-scaled-300-percent-ai-content",
    title:
      "How a Dubai Real Estate Brand Scaled 300% in 6 Months Using AI Content Systems",
    date: "2024-01-04",
    readTime: "3 min read",
    categories: ["Case Studies", "Content & Video"],
    excerpt:
      "When a Dubai-based real estate developer came to Nebriix, they had a problem most growing brands recognize: great properties, a talented team, but no reach.",
  },
  {
    slug: "complete-guide-ai-voice-agents-never-miss-lead",
    title:
      "The Complete Guide to AI Voice Agents: How Smart Businesses Never Miss a Lead Again",
    date: "2024-01-04",
    readTime: "3 min read",
    categories: ["AI Automation", "AI Technology"],
    excerpt:
      "Every missed call is a missed deal. Every after-hours inquiry that goes unanswered is a potential client handed directly to your competitor.",
  },
  {
    slug: "short-form-video-brand-growth-scale-with-ai",
    title:
      "Short-Form Video Is the #1 Driver of Brand Growth Right Now — Here's How to Scale It With AI",
    date: "2024-01-04",
    readTime: "3 min read",
    categories: ["Business Strategy", "Content & Video"],
    excerpt:
      "If you're not publishing short-form video consistently in 2025, you're invisible. Reels, TikTok, and Shorts now account for the majority of organic reach.",
  },
  {
    slug: "10-signs-your-business-is-ready-for-ai-automation",
    title: "10 Signs Your Business Is Ready for AI Automation (And How to Start)",
    date: "2023-11-23",
    readTime: "4 min read",
    categories: ["AI Automation", "Business Strategy"],
    excerpt:
      "Most business owners know they should be doing something with AI. But the gap between knowing it matters and knowing where to start is where most stall.",
  },
];

export const storyCategories = [
  "AI Automation",
  "AI Technology",
  "Business Strategy",
  "Case Studies",
  "Content & Video",
  "Lead Generation",
] as const;

/* ------------------------------------------------------------------ stack */

/** "Tools We Build With" logo strip, in the live site's order. */
export const stack = [
  "openai",
  "anthropic",
  "cursor",
  "make",
  "midjourney",
  "elevenlabs",
  "runway",
  "higgsfield",
  "n8n",
  "hubspot",
  "zapier",
  "notion",
] as const;

/* -------------------------------------------------------------- NEW copy */

/**
 * NEW — the live site has no process section. Written to give the home page a
 * "how we work" beat. Needs sign-off.
 */
export const process = [
  {
    number: "01",
    title: "Audit",
    body: "We map where your time actually goes — the handoffs, the copy-paste, the follow-ups nobody owns.",
  },
  {
    number: "02",
    title: "Design",
    body: "We scope the smallest system that removes the biggest bottleneck, and agree on what success looks like.",
  },
  {
    number: "03",
    title: "Build",
    body: "We ship it wired into the tools you already use — not a demo, not a prototype.",
  },
  {
    number: "04",
    title: "Scale",
    body: "We measure, tune, and extend the system into the next workflow once the first one is holding.",
  },
];

/** NEW — no FAQ exists on the live site. Needs sign-off. */
export const faqs = [
  {
    q: "How long does a typical build take?",
    a: "Most first systems ship in two to four weeks. We deliberately scope the first project small — one workflow, one measurable outcome — so you see it working before committing to anything larger.",
  },
  {
    q: "Do we need technical people on our side?",
    a: "No. We build into the tools you already run, and hand over documentation plus a walkthrough. If you have a technical team we'll work alongside them; if you don't, the system is built to be operated by whoever owns the process today.",
  },
  {
    q: "What does this actually replace?",
    a: "Usually the repetitive middle of a process — qualifying inbound, chasing follow-ups, reformatting content, moving data between tools. The judgement calls stay with your team. The typing doesn't.",
  },
  {
    q: "Who owns the systems you build?",
    a: "You do. Accounts, workflows, prompts and code sit in your infrastructure. There's no lock-in and nothing stops working if you stop working with us.",
  },
  {
    q: "How do you price?",
    a: "Fixed scope, fixed price per project, agreed before anything starts. Ongoing support and iteration is a separate monthly retainer, and it's optional.",
  },
];
