import type { LucideIcon } from "lucide-react";
import {
  Bot,
  MapPin,
  Globe,
  Video,
  Share2,
  Target,
  Star,
} from "lucide-react";

/**
 * Single source of truth for site copy, transcribed from the website brief.
 *
 * SOURCING: figures carrying `needsSource: true` are third-party claims taken
 * from the brief. They are rendered as written but must have a citation
 * attached — or be cut — before launch. First-party audit data (the 32-audit
 * set) is ours and is marked `firstParty`.
 */

export const site = {
  name: "Nebriix",
  url: "https://nebriix.com",
  title: "Nebriix | Become the Business AI Recommends",
  tagline: "We help local businesses become the one AI recommends.",
  description:
    "Your competitors show up when someone searches. You don't. We build the visibility systems that get local businesses recommended by Google, ChatGPT and AI assistants.",
  email: "Hello@nebriix.com",
  /** PLACEHOLDER — confirm before launch. */
  phone: "+971 4 000 0000",
  phoneHref: "tel:+97140000000",
  whatsapp: "https://wa.me/97140000000",
  responseCommitment: "We respond to every inquiry within 24 hours.",
  socials: {
    instagram: "https://www.instagram.com/nebriix",
    tiktok: "https://www.tiktok.com/@nebriix",
    youtube: "https://www.youtube.com/@nebriix",
    linkedin: "https://www.linkedin.com/company/nebriix",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/* ------------------------------------------------------------------- home */

export const hero = {
  headline: "Your competitors show up when someone searches. You don't.",
  headlineAccent: "We fix that.",
  sub: "We help local businesses become the one AI recommends. More visibility. More calls. More clients.",
  cta: "Get Your Free Visibility Audit",
};

export const problem = {
  headline: "The way people find local businesses has changed. Has your marketing?",
  points: [
    {
      stat: "93%",
      body: "of consumers search online before choosing a local business.",
      needsSource: true,
    },
    {
      stat: "#3",
      body: "ChatGPT and Google AI are now the third most popular source of local business recommendations, behind only Google Search and Facebook.",
      needsSource: true,
    },
    {
      stat: "30x",
      body: "AI platforms are more selective than Google. High Google rankings alone no longer guarantee visibility.",
      needsSource: true,
    },
    {
      stat: "0",
      body: 'Most local businesses have zero AI visibility. Ask "recommend a dentist in Denver" and they are not in the answer.',
      needsSource: false,
    },
  ],
  closing:
    "The businesses that show up are the ones with strong review profiles, consistent online presence, real website content, and signals AI systems can verify.",
};

export const howItWorks = [
  {
    number: "01",
    title: "We audit your online presence",
    body: "We research your Google ranking, reviews, website, social media, competitors, and AI visibility. You get a full report showing exactly where you stand and what you are missing.",
  },
  {
    number: "02",
    title: "We build your visibility system",
    body: "Google Business Profile, website SEO, content, reviews, social media, AI optimization. Everything working together.",
  },
  {
    number: "03",
    title: "You get more clients",
    body: "More calls. More bookings. More revenue. We track every lead and report monthly on exactly what is working.",
  },
];

/**
 * First-party aggregate data from the 32+ audits completed. These are ours —
 * no external citation needed, but keep them current as the number grows.
 */
export const auditStats = {
  firstParty: true,
  headline: "The numbers that matter",
  lede: "We have audited 32+ local businesses across 10+ US cities and 4 international markets. Here is what we found.",
  counters: [
    { value: 32, suffix: "+", label: "Businesses audited" },
    { value: 28, suffix: "/32", label: "Had zero Google reviews" },
    { value: 20, suffix: "/32", label: "Had no Google Business Profile" },
    { value: 15, suffix: "/32", label: "Had no website at all" },
  ],
  findings: [
    "Every single one ranked only for their own name, if at all. None ranked for non-branded search terms.",
    "None would be recommended by an AI assistant.",
    "Combined estimated revenue lost across all audited businesses: over $1.5M per year.",
    "The same two fixes applied to every one: a review-bearing Google Business Profile and a real indexable web presence.",
  ],
  revenueGap: "$1.5M+",
  invisibleRange: "2,000 to 8,000",
};

export const finalCta = {
  headline: "Find out what you are missing. Free.",
  sub: "We will audit your Google ranking, reviews, website, social media, and AI visibility. You will see exactly how many potential clients are finding your competitors instead of you. No cost. No commitment.",
  cta: "Get Your Free Audit",
};

/* --------------------------------------------------------------- services */

export type ServiceSection = {
  heading: string;
  items?: string[];
  body?: string;
  /** Rendered as a sub-grouped list, for pages with categorised bullets. */
  groups?: { label: string; items: string[] }[];
};

export type Service = {
  slug: string;
  name: string;
  oneLiner: string;
  icon: LucideIcon;
  headline: string;
  /** Keyword cluster this page targets, for the meta description. */
  metaDescription: string;
  sections: ServiceSection[];
  /** Numbered explainer, used where the brief lists ranking factors. */
  factors?: { title: string; body: string }[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "ai-search-optimization",
    name: "AI Search Optimization",
    oneLiner: "Get recommended by ChatGPT, Google AI, and Siri",
    icon: Bot,
    headline:
      "When someone asks AI to recommend a business like yours, do they say your name?",
    metaDescription:
      "Get your local business recommended by ChatGPT, Google AI Overviews, Perplexity and Siri. We build the review, citation and structured-data signals AI systems verify.",
    sections: [
      {
        heading: "The Problem",
        items: [
          "ChatGPT, Google AI Overviews, Siri, and Alexa are increasingly how people discover local businesses.",
          "AI systems are 30x more selective than Google search. They recommend a tiny number of businesses per query.",
          "AI pulls recommendations from reviews, directory listings, website content, press mentions, and cross-platform consistency.",
          "If your business lacks these signals, AI will never mention you. It will recommend your competitors instead.",
        ],
      },
      {
        heading: "What We Do",
        items: [
          "Audit your current AI visibility across ChatGPT, Google AI, Perplexity, and other AI platforms.",
          "Identify the specific signals missing: reviews, citations, structured data, content depth, NAP consistency.",
          "Build the evidence layer AI systems need to recommend you: reviews on the right platforms, consistent directory listings, structured website content, schema markup, and authority signals.",
          "Monitor your AI visibility monthly and adjust the strategy based on what is working.",
        ],
      },
      {
        heading: "Why It Matters",
        items: [
          "AI platforms are expected to drive more website visits than traditional search by 2028.",
          "Nearly half of ChatGPT's citations come from third-party sites such as Yelp, TripAdvisor and BBB, not your own website.",
          "Businesses with strong multi-platform presence are recommended far more often.",
          "This is not a future problem. It is happening right now. If you are not being recommended, you are already losing clients.",
        ],
      },
    ],
    factors: [
      {
        title: "Review volume and quality",
        body: "Number of reviews, average rating, recency, and sentiment across Google, Yelp, and industry-specific platforms.",
      },
      {
        title: "NAP consistency",
        body: "Name, address, phone number must be identical across every directory listing, website, and social profile.",
      },
      {
        title: "Website content depth",
        body: "Thin one-page sites with 500 characters of text give AI nothing to cite. Detailed service pages, location pages, FAQ content, and blog posts give AI reasons to recommend you.",
      },
      {
        title: "Structured data and schema markup",
        body: "LocalBusiness schema, FAQ schema and review schema help AI systems parse your business information accurately.",
      },
      {
        title: "Multi-platform brand mentions",
        body: "Press coverage, directory listings, partner mentions, case studies on other sites. AI trusts businesses mentioned across multiple sources.",
      },
      {
        title: "Geographic signals",
        body: "Business name, content, and listings that clearly associate you with your service area.",
      },
    ],
    cta: "Find out if AI recommends you. Get a free AI visibility audit.",
  },
  {
    slug: "google-business-profile",
    name: "Google Business Profile Optimization",
    oneLiner: "Own the map pack where 90% of local searches happen",
    icon: MapPin,
    headline:
      "90% of local searches happen on Google. If your profile is weak, you are invisible.",
    metaDescription:
      "Google Business Profile optimization for local businesses: map pack ranking, review generation, weekly posts, photo strategy and duplicate listing cleanup.",
    sections: [
      {
        heading: "The Problem",
        items: [
          "Google Business Profile is the single most important local discovery channel.",
          "The map pack — the three businesses at the top of a local Google search — gets the majority of clicks.",
          "Most local businesses have an incomplete, unoptimized, or unclaimed profile.",
          "Businesses with fewer than 20 reviews are unlikely to appear in the map pack for competitive terms.",
          "Many businesses have zero Google reviews while their competitors have 50, 100, or 200+.",
        ],
      },
      {
        heading: "What We Do",
        items: [
          "Claim and verify your Google Business Profile, or optimize the existing one.",
          "Complete every field: categories, services, service areas, business description, attributes, hours, photos.",
          "Add high-quality photos — exterior, interior, team, work examples — on a regular basis.",
          "Write and publish Google Posts weekly to keep the profile active.",
          "Set up a review generation system with automated requests after every job or appointment.",
          "Respond to every review, positive and negative, professionally.",
          "Monitor and fix duplicate or conflicting listings that suppress your ranking.",
          "Track map pack ranking weekly and report on changes.",
        ],
      },
      {
        heading: "The Data",
        items: [
          "Businesses with 40+ Google reviews are 3x more likely to appear in the map pack than businesses with fewer than 10.",
          "Responding to reviews increases consumer trust by 45%.",
          "Businesses that post weekly see 70% more profile views than those that do not.",
          "A complete profile with reviews, photos and posts sends the strongest possible signal to both Google and AI systems.",
        ],
      },
    ],
    cta: "See how your Google Business Profile compares to your competitors.",
  },
  {
    slug: "local-seo-website",
    name: "Local SEO and Website",
    oneLiner: "Rank on page 1 for the searches that bring clients",
    icon: Globe,
    headline: "If your website does not rank, it does not exist.",
    metaDescription:
      "Local SEO and website builds for service businesses: technical fixes, location and service pages, schema markup, and lead capture that converts visitors into calls.",
    sections: [
      {
        heading: "The Problem",
        items: [
          "Most local business websites are digital business cards: a logo, a phone number, and nothing else.",
          "Google cannot rank a website with 500 characters of text and no keyword-targeted content.",
          "Many businesses use builder templates with no SEO foundations.",
          "Some businesses have no website at all and rely entirely on social media, which is not indexable by search engines.",
          "Without location-specific service pages, blog content, and proper on-page SEO, the website will never appear on page 1.",
        ],
      },
      {
        heading: "What We Do",
        groups: [
          {
            label: "Website audit and fixes",
            items: [
              "Mobile responsiveness check and fix",
              "Page speed optimization",
              "On-page SEO: title tags, meta descriptions, header structure, alt text, internal linking",
              "LocalBusiness schema markup and FAQ schema",
              "Fix broken pages, 404 errors and dead links",
              "Clear CTAs: click-to-call, booking forms, contact forms above the fold",
            ],
          },
          {
            label: "Content that ranks",
            items: [
              'Dedicated service pages for each service — "Emergency Plumbing in Denver", not just "Services"',
              "Location pages for each city or neighbourhood served",
              "Blog content targeting long-tail keywords that bring search traffic",
              "FAQ pages answering the questions potential clients actually search for",
            ],
          },
          {
            label: "For businesses without a website",
            items: [
              "A professional, mobile-first, SEO-optimized website built from scratch",
              "IDX search integration for real estate agents",
              "Online booking integration for service businesses",
              "Lead capture forms and call tracking",
            ],
          },
        ],
      },
    ],
    cta: "Get a free website audit showing exactly what is holding you back.",
  },
  {
    slug: "video-production",
    name: "Video Production",
    oneLiner: "Content that stops the scroll and starts conversations",
    icon: Video,
    headline: "The algorithm rewards video. Static images get buried.",
    metaDescription:
      "Done-for-you short and long-form video production for local businesses. Scripting, voiceover, editing and delivery — you approve, we handle the rest.",
    sections: [
      {
        heading: "The Problem",
        items: [
          "Instagram, TikTok, and YouTube all prioritize video content in their algorithms.",
          "Businesses posting only static images get a fraction of the reach they could.",
          "Most local business owners do not have the time, skills, or tools to produce professional short-form video consistently.",
          "The businesses winning on social media are posting 3 to 5 videos per week. Most local businesses post 3 per month.",
        ],
      },
      {
        heading: "What We Do",
        body: "Full production pipeline. You approve, we handle everything else.",
        items: [
          "Script writing using AI-assisted workflows, delivered for your approval before production",
          "Professional voiceover and narration, via AI voice tools or your own voice",
          "Stock video and asset sourcing from professional libraries",
          "Background music selection and licensing",
          "Full editing: cuts, transitions, text overlays, effects, pacing",
          "Delivery of finished video files ready to post",
        ],
      },
      {
        heading: "What We Produce",
        items: [
          "Short-form vertical video, 30 to 90 seconds, for TikTok, Reels and Shorts",
          "Long-form video, 3 to 10 minutes, for YouTube",
          "Property walkthroughs and listing tours for real estate",
          "Before and after transformation videos for contractors, salons and med spas",
          "Day-in-the-life and behind-the-scenes content",
          "Testimonial and review-based videos",
          "Educational content that builds authority",
          "Product showcase and demo videos",
        ],
      },
    ],
    cta: "See what your content could look like. Request a free sample video.",
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    oneLiner: "Consistent presence that builds trust and drives discovery",
    icon: Share2,
    headline: "Posting is not a strategy. Growth is.",
    metaDescription:
      "Strategic social media management across TikTok, Instagram, YouTube and Facebook. Content calendars, captions, hashtags and monthly reporting on real metrics.",
    sections: [
      {
        heading: "The Problem",
        items: [
          "Most local businesses post inconsistently: a burst of posts, then weeks of silence.",
          "Static graphics and stock photos get near-zero algorithmic reach.",
          "Posting without a strategy — right times, formats, hooks, hashtags — is wasted effort.",
          "Many businesses have thousands of followers but single-digit likes per post, meaning the algorithm has stopped showing their content.",
        ],
      },
      {
        heading: "What We Do",
        items: [
          "Post across TikTok, Instagram, YouTube and Facebook at the optimal days and times for your audience",
          "Write captions that drive engagement: questions, hooks, calls to action",
          "Hashtag research and strategy per platform",
          "SEO-optimized titles, descriptions and tags for every YouTube video",
          "Custom thumbnail design for every video",
          "Monthly content calendar planned in advance and sent for approval",
          "Comment engagement and community interaction to boost algorithmic reach",
          "Monthly analytics report: what performed, what did not, follower growth, reach and engagement trends",
          "Repurpose each piece across platforms — one video becomes a Reel, a TikTok, a Short and a Story",
        ],
      },
      {
        heading: "What We Do Not Do",
        items: [
          "We do not buy followers. Fake followers destroy your engagement rate and make the algorithm punish your account.",
          "We do not use generic templates. Every piece is tailored to your brand voice and audience.",
          "We do not disappear. You get a monthly report and a content calendar. You always know what is being posted and why.",
        ],
      },
    ],
    cta: "See what consistent, strategic content could do for your business.",
  },
  {
    slug: "lead-generation-system",
    name: "Lead Generation System",
    oneLiner: "Stop hoping for clients. Start capturing them.",
    icon: Target,
    headline: "Stop hoping clients find you. Start capturing them.",
    metaDescription:
      "A complete local lead generation system: market audit, Google Business Profile, website conversion, review engine, content, AI visibility and full lead tracking.",
    sections: [
      {
        heading: "The Problem",
        items: [
          "Most local businesses have no system for generating leads online.",
          "They rely on word of mouth, referrals, and hope.",
          "When someone searches for their service online, they find competitors instead.",
          "Even businesses that get website traffic often have no way to capture a visitor as a lead: no form, no chat, no booking, no clear CTA.",
        ],
      },
    ],
    factors: [
      {
        title: "Discovery audit",
        body: "We research your market: how many people search for your service in your city every month, who your top three competitors are, where they outrank you, what they do that you do not, and how much revenue you are losing to invisibility.",
      },
      {
        title: "Google Business Profile",
        body: "We set up or optimize your profile so you show up in the map pack where most local searches happen.",
      },
      {
        title: "Website optimization",
        body: "We fix or build your website so it ranks for the search terms that bring clients and converts visitors into leads through booking forms, click-to-call, chat and lead magnets.",
      },
      {
        title: "Review engine",
        body: "We set up a system that automatically requests reviews from every client after every job. Reviews drive Google ranking, AI recommendations, and client trust.",
      },
      {
        title: "Content and social",
        body: "We create and post video content that reaches new audiences and drives them to your website or booking page.",
      },
      {
        title: "AI visibility",
        body: "We build the signals AI systems need to recommend you by name: reviews, citations, directory listings, structured data, content depth.",
      },
      {
        title: "Tracking and reporting",
        body: "We set up call tracking, form tracking and UTM links so every lead is attributable. Monthly reporting shows exactly how many leads came in, from where, and what to adjust.",
      },
    ],
    cta: "Get your free lead generation audit. See exactly what you are missing.",
  },
  {
    slug: "review-reputation-management",
    name: "Review and Reputation Management",
    oneLiner: "Turn happy clients into your most powerful marketing",
    icon: Star,
    headline:
      "Your reviews are your most powerful marketing. Most businesses waste them.",
    metaDescription:
      "Review generation and reputation management for local businesses. Automated review requests, response management, and multi-platform review presence.",
    sections: [
      {
        heading: "The Problem",
        items: [
          "Businesses with strong reviews win. Businesses without reviews lose. It is that simple.",
          "Most local businesses have fewer than 20 Google reviews while their competitors have 50 to 200+.",
          "Many have excellent reviews trapped on the wrong platform, where potential clients never see them.",
          "Negative reviews that are never responded to damage trust and ranking.",
          "AI systems heavily weight review volume, recency and sentiment when deciding which businesses to recommend.",
        ],
      },
      {
        heading: "What We Do",
        items: [
          "Set up automated review request workflows by text or email after every job",
          "Provide direct Google review links that make it one-tap easy to leave a review",
          "Respond to every review, positive and negative, professionally and promptly",
          "Monitor review sentiment and flag issues before they become patterns",
          "Build review presence across the platforms that matter for your industry: Google, Yelp, Zillow, Realtor.com, Healthgrades, Avvo, Houzz",
          "Surface reviews in your content: turn 5-star reviews into social posts, website testimonials and video",
          "Track review count and average rating monthly",
        ],
      },
      {
        heading: "Why Reviews Matter for AI",
        items: [
          "ChatGPT pulls nearly half its local business recommendations from third-party review sites.",
          "Google AI Overviews weight review volume and rating heavily in local recommendations.",
          "Businesses with 40+ reviews across multiple platforms are exponentially more likely to be recommended by AI.",
          "A business with 5 reviews competing against one with 200 will lose every time, regardless of how good the actual service is.",
        ],
      },
    ],
    cta: "Find out how your reviews compare to your competitors.",
  },
];

export const industries = [
  "Realtors",
  "Lawyers",
  "Dentists",
  "Contractors",
  "Salons",
  "Photographers",
  "Restaurants",
  "Fitness studios",
  "Med spas",
];

/* ------------------------------------------------------------------ about */

export const about = {
  headline: "We are not another social media agency.",
  story: [
    "We started by doing what most agencies do: offering to post on Instagram for local businesses. It did not work. Nobody cared about posts. They cared about clients.",
    'So we changed the pitch. Instead of "we will manage your Instagram," we said "here is how many clients you are losing and here is how we fix it."',
    "We audit every business before we pitch. We show them their Google ranking, their competitors, their review count, the search volume for their service in their city, and the revenue they are leaving on the table. Then we build a system to capture it.",
    "We are not a big agency. We are a small team that uses AI-powered workflows to deliver at scale. AI handles the repetitive work — research, scheduling, analytics. Humans handle the strategy, creative decisions, and client relationships.",
    "We work with local service businesses. If your business depends on local clients finding you, we can help.",
  ],
  values: [
    {
      title: "We show our work",
      body: "Every client gets a monthly report with real numbers.",
    },
    {
      title: "We do not sell vanity metrics",
      body: "Followers do not pay rent. Leads do.",
    },
    {
      title: "We eat our own cooking",
      body: "Everything we recommend to clients, we do for ourselves.",
    },
    {
      title: "No long contracts",
      body: "We do not lock clients in. If the results are not there, you can leave.",
    },
  ],
};

/* ------------------------------------------------------------- free audit */

export const audit = {
  headline:
    "Find out how many clients you are losing to competitors who show up online.",
  sub: "We will audit your Google ranking, reviews, website, social media, competitors, and AI visibility. Free. No commitment.",
  deliverables: [
    "Where you rank on Google for your main service terms",
    "How many reviews you have versus your top three competitors",
    "Website quality assessment: mobile, speed, SEO, lead capture",
    "Social media analysis: engagement rate, content type, posting frequency",
    "AI visibility check — does ChatGPT or Google AI recommend you?",
    "Estimated monthly search volume for your service in your city",
    "Revenue math: how much you are likely losing per month to competitors who show up",
  ],
  cta: "Send My Free Audit",
};

/** Pull-quotes used across the site, from the brief's key phrases. */
export const keyPhrases = {
  aiRecommends: "Become the one AI recommends.",
  competitors: "Your competitors show up. You don't. We fix that.",
  leads: "We don't sell followers. We generate leads.",
  evidence:
    "The businesses that get recommended are the ones with the strongest evidence.",
  posting: "Posting is not a strategy. Growth is.",
  selective:
    "AI is 30x more selective than Google. If you are not visible, you do not exist.",
  math: "We show you the math before we ask for a dollar.",
};
