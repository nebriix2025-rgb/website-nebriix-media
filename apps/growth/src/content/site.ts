import type { LucideIcon } from "lucide-react";
import {
  Bot,
  MapPin,
  Globe,
  Video,
  Share2,
  Target,
  Star,
  Users,
  Layers,
  Code2,
  Workflow,
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
  { label: "Insights", href: "/insights" },
  { label: "Free Tools", href: "/free-tools" },
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
  /**
   * Answer-first Q&A. Each answer stands alone in two or three sentences so an
   * answer engine can quote it verbatim. Also emitted as FAQPage schema.
   */
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "ai-search-optimization",
    faqs: [
      {
        q: "What is AI search optimization?",
        a: "AI search optimization is the work of making a business the one ChatGPT, Google AI Overviews, Perplexity and voice assistants recommend when someone asks for a service in a specific place. It focuses on the evidence AI systems verify before recommending anyone: reviews, consistent directory listings, structured website content and mentions on third-party sites.",
      },
      {
        q: "How does ChatGPT decide which local businesses to recommend?",
        a: "ChatGPT and similar assistants retrieve live web results and then favour businesses with strong, recent, detailed reviews, identical name-address-phone details across listings, substantive website content and mentions on trusted third-party sites such as Yelp, Reddit and industry directories. Only about 1.2% of business locations currently get recommended, so the bar is evidence, not luck.",
      },
      {
        q: "Does ranking on Google mean AI will recommend me?",
        a: "No. Research in 2026 found only a 45% overlap between businesses in Google's map pack and businesses AI assistants recommend, so more than half of map-pack winners are absent from AI answers. AI weighs review substance and third-party mentions far more heavily than Google's local ranking does.",
      },
      {
        q: "How long does it take to show up in AI recommendations?",
        a: "Most businesses see first appearances within 60 to 90 days once the missing signals are in place \u2014 usually reviews on the right platforms, corrected listings and structured content. We check ChatGPT, Google AI and Perplexity monthly and report which queries you appear for.",
      },
    ],
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
    faqs: [
      {
        q: "What is a Google Business Profile?",
        a: "A Google Business Profile is the free listing that appears in Google Maps and in the map pack at the top of local search results. It holds your categories, hours, photos, reviews and posts, and it is the single most important local discovery channel \u2014 most local searches never reach a website.",
      },
      {
        q: "How many reviews do I need to rank in the map pack?",
        a: "Businesses with fewer than 20 Google reviews rarely appear in the map pack for competitive terms, and those with 40 or more are roughly three times more likely to appear than those with fewer than 10. Volume matters, but so do recency and detail: a steady flow of specific, recent reviews outperforms a large but stale total.",
      },
      {
        q: "Should I respond to negative reviews?",
        a: "Yes, every time, promptly and professionally. Responding to reviews raises consumer trust by around 45%, and an unanswered negative review damages both trust and ranking. A calm, specific reply often does more for you than the review does against you.",
      },
      {
        q: "How often should I post on my Google Business Profile?",
        a: "Weekly. Businesses that post weekly see about 70% more profile views than those that do not, and regular posts keep the profile active in Google's eyes. We write and schedule them so it happens without you thinking about it.",
      },
    ],
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
    faqs: [
      {
        q: "Why doesn't my website rank on Google?",
        a: "Most local business websites are digital business cards: a logo, a phone number and a few hundred characters of text. Google cannot rank a page with nothing to rank. Dedicated pages for each service and each location, proper title tags and headings, and answers to the questions people actually search are what earn page-one positions.",
      },
      {
        q: "Do I need a separate page for every service?",
        a: "Yes. A page titled \"Emergency Plumbing in Denver\" can rank for that search; a generic \"Services\" page cannot. Each service and each city or neighbourhood you serve should have its own page with real content, because that is what both Google and AI assistants use to match you to a query.",
      },
      {
        q: "What is schema markup and does it matter?",
        a: "Schema markup is structured data added to a page that tells search engines and AI systems exactly what a business is, where it operates and what it offers. Pages with proper LocalBusiness and FAQ schema are cited in AI responses about 3.2 times more often than pages without it.",
      },
      {
        q: "I only have an Instagram page. Is that enough?",
        a: "No. Social media profiles are not indexable in the way a website is, so a business that exists only on Instagram is invisible to Google search and to AI assistants for non-branded queries. A fast, mobile-first website with real content is the foundation everything else stands on.",
      },
    ],
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
    faqs: [
      {
        q: "Why does video matter for a local business?",
        a: "Instagram, TikTok and YouTube all rank video above static images, and YouTube is now the second most-cited source in Google AI Overviews at nearly 19% of citations. A local business posting only photos gets a fraction of the reach it could, and no presence at all in the video results AI increasingly draws from.",
      },
      {
        q: "How many videos should a local business post?",
        a: "The businesses winning on social media post three to five short videos per week. Most local businesses post three per month. The gap is production capacity, which is exactly what a done-for-you pipeline removes.",
      },
      {
        q: "Do I need to be on camera?",
        a: "Not necessarily. We produce property walkthroughs, before-and-after transformations, product showcases and educational clips using your footage, licensed stock and AI voiceover. If you are comfortable on camera, that footage performs best; if not, there is still plenty to work with.",
      },
      {
        q: "Who owns the videos?",
        a: "You do. Every finished file is delivered to you for approval before anything is posted, and the assets are yours to reuse on your website, in ads or anywhere else.",
      },
    ],
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
    faqs: [
      {
        q: "What does social media management include?",
        a: "Posting across TikTok, Instagram, YouTube and Facebook at the right times, captions written to drive engagement, hashtag and YouTube SEO research, custom thumbnails, a monthly content calendar sent for approval, comment engagement and a monthly analytics report showing reach, growth and what to adjust.",
      },
      {
        q: "Why do my posts get so few likes despite my follower count?",
        a: "When an account posts inconsistently or relies on static graphics, the algorithm stops showing its content, so a business can have thousands of followers and single-digit engagement. Consistent video, strong hooks and community interaction are what restore reach.",
      },
      {
        q: "Do you buy followers?",
        a: "Never. Purchased followers destroy engagement rate, which is the metric platforms use to decide whether to show your content at all. We grow accounts with real audiences or not at all.",
      },
      {
        q: "How do I know what is being posted?",
        a: "You receive a full content calendar in advance for approval and a monthly report afterwards. You always know what went out, when, and how it performed.",
      },
    ],
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
    faqs: [
      {
        q: "What is a local lead generation system?",
        a: "A connected set of assets that turns local search demand into enquiries you can track: an optimised Google Business Profile, a website that ranks and converts, an automated review engine, video content that reaches new audiences, the signals AI assistants need to recommend you, and call and form tracking so every lead is attributable.",
      },
      {
        q: "How do you know how many clients I am losing?",
        a: "We measure monthly search volume for your service in your city, check where you rank for those terms, identify your top three competitors and what they do online, and apply your average client value. That produces a revenue figure for the demand currently going to competitors \u2014 and we show it to you before asking for anything.",
      },
      {
        q: "How are leads tracked?",
        a: "Call tracking numbers, form tracking and UTM-tagged links attribute every enquiry to its source. Your monthly report shows how many leads came in, from where, and what to adjust next.",
      },
      {
        q: "What if I already get leads from referrals?",
        a: "Referrals are valuable, but they are not a system: they cannot be scaled, forecast or replaced if a referrer stops sending work. A lead generation system runs alongside referrals and captures the demand that is already searching for you.",
      },
    ],
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
    faqs: [
      {
        q: "Why do reviews matter so much for AI recommendations?",
        a: "Nearly half of ChatGPT's local business citations come from third-party review sites, and AI systems weigh review volume, recency and sentiment heavily when deciding whom to recommend. Businesses with 40 or more reviews across several platforms are exponentially more likely to be recommended than those with a handful.",
      },
      {
        q: "Is it better to have more reviews or better reviews?",
        a: "Better. Review substance is about six times more important for AI visibility than review count. A detailed review that names the specific service and outcome tells an AI far more than a dozen generic five-star ratings, so we help clients ask for reviews in a way that produces detail.",
      },
      {
        q: "How do you get customers to leave reviews?",
        a: "An automated request by text or email after every job or appointment, with a one-tap link straight to the review form. Most businesses that do this consistently move from single digits to dozens of reviews within a few months.",
      },
      {
        q: "Which review platforms matter for my industry?",
        a: "Google first, always. Beyond that it depends on the industry: Zillow and Realtor.com for real estate, Healthgrades for medical practices, Avvo for law firms, Houzz for contractors, Yelp for restaurants and salons. We build presence on the platforms AI actually cites for your category.",
      },
    ],
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
  {
    slug: "community-presence",
    name: "Community & Third-Party Presence",
    oneLiner: "Be mentioned where AI actually looks: Reddit, YouTube, directories",
    icon: Users,
    headline:
      "60% of AI citations go to sites you don't own. Are you on any of them?",
    metaDescription:
      "Reddit, Quora, YouTube and directory presence for local businesses. Build the third-party mentions that Google AI Overviews and ChatGPT cite most.",
    sections: [
      {
        heading: "The Problem",
        items: [
          "Reddit is the most-cited source in Google AI Overviews, at 21% of all citations. YouTube is second at nearly 19%.",
          "60% of AI Overview citations point to third-party publishers such as Reddit, Quora, Yelp, Thumbtack and HomeGuide, not to business websites.",
          "Google now surfaces Reddit threads as Community Perspectives inside local results.",
          "Most local businesses have no presence on any of these platforms, so AI has no independent evidence they exist.",
        ],
      },
      {
        heading: "What We Do",
        items: [
          "Audit where your business is mentioned, where competitors are, and where you are absent",
          "Genuine participation in relevant local and industry subreddits — answers, not adverts",
          "Quora and community Q&A contributions targeting the questions people actually search",
          "Accurate, complete listings on the directories AI cites for your category",
          "YouTube presence built from your video content, optimised so it is citable",
          "Monthly tracking of third-party mentions and which AI answers they feed",
        ],
      },
      {
        heading: "Why It Matters",
        items: [
          "AI systems trust third-party mentions precisely because the business does not control them.",
          "A single accurate thread recommending you can be cited across thousands of AI answers.",
          "This is the fastest-growing gap between businesses that get recommended and businesses that do not.",
        ],
      },
    ],
    cta: "Find out where AI is looking for you — and not finding you.",
    faqs: [
      {
        q: "Why does Reddit affect whether AI recommends my business?",
        a: "Reddit is the most-cited source in Google AI Overviews, at about 21% of all citations, and Google now surfaces Reddit threads as Community Perspectives inside local results. When someone asks an AI for a recommendation, a genuine mention of your business in a relevant local thread is one of the strongest signals it can find.",
      },
      {
        q: "Isn't this just posting ads on Reddit?",
        a: "No, and doing that gets a business banned. Community presence means genuinely useful participation: answering questions in local and industry subreddits, contributing to Quora threads people actually search, and ensuring your business is accurately listed on the directories AI cites, such as Yelp, Thumbtack, HomeGuide and Nextdoor.",
      },
      {
        q: "Which third-party sites matter most?",
        a: "In 2026, 60% of AI Overview citations point to third-party publishers rather than business websites. The ones that matter most are Reddit, YouTube, Quora, Yelp and the leading directory for your industry. We audit where you are absent and build presence there first.",
      },
      {
        q: "How is this different from social media management?",
        a: "Social media management grows your own channels. Community presence builds mentions of your business on other people's platforms \u2014 the third-party evidence AI systems trust precisely because you do not control it.",
      },
    ],
  },
  {
    slug: "web-app-development",
    name: "Web & App Development",
    oneLiner: "Booking, portals and custom web apps that actually convert",
    icon: Code2,
    headline:
      "Your website is a brochure. Your competitors' is a booking engine.",
    metaDescription:
      "Custom web and app development for local businesses: online booking, client portals, quote calculators and lead-capture systems that turn visitors into customers.",
    sections: [
      {
        heading: "The Problem",
        items: [
          "Most local business websites can show a phone number and nothing else. A visitor who wants to book at 11pm leaves.",
          "Template builders cannot add the things that convert: online booking, instant quotes, client login, automated follow-up.",
          "Every manual step between a visitor and a confirmed job is a place where the lead falls out.",
          "Custom development has historically been priced for enterprises, so small businesses have gone without.",
        ],
      },
      {
        heading: "What We Do",
        items: [
          "Online booking and scheduling wired to your calendar, with reminders that cut no-shows",
          "Quote calculators and instant-estimate tools for trades, clinics and studios",
          "Client portals: project status, documents, invoices, messaging in one place",
          "Lead-capture flows with call tracking and CRM sync, so every enquiry is attributed",
          "Fast, mobile-first builds on modern frameworks, hosted and monitored",
          "AI-assisted development throughout, which is why a build that used to take months takes weeks",
        ],
      },
      {
        heading: "Why It Matters",
        items: [
          "A booking button on every page is the single largest conversion lift most local businesses ever see.",
          "Speed and mobile performance are ranking factors for Google and trust signals for visitors.",
          "Software you own beats a subscription you rent: no per-seat fees, no platform lock-in.",
        ],
      },
    ],
    cta: "Tell us what your customers wish they could do on your site. We will scope it for free.",
    faqs: [
      {
        q: "How much does a custom web app cost for a small business?",
        a: "Far less than it did two years ago. AI-assisted development means a booking system, client portal or quote tool that once took a team months is scoped and built in weeks. We price fixed-scope, agreed up front, and the audit tells you what the build is worth before you commit.",
      },
      {
        q: "Can you add booking to my existing website?",
        a: "Usually, yes. If the site is on a modern platform we integrate booking, quoting or a portal into it. If it is on an old builder that cannot support it, we rebuild the site around the new functionality and migrate the content.",
      },
      {
        q: "Do I own the code?",
        a: "Yes. Everything we build is delivered into your own accounts and repositories. There is no platform fee and nothing stops working if you stop working with us.",
      },
      {
        q: "How is this different from Local SEO and Website?",
        a: "That service makes a site rank and read well. This one makes it do things: take bookings, produce quotes, log clients in. Most businesses need the first before the second; the audit tells you which.",
      },
    ],
  },
  {
    slug: "saas-software-development",
    name: "SaaS & Custom Software",
    oneLiner: "MVPs, internal tools and integrations, built in weeks not quarters",
    icon: Layers,
    headline:
      "You have a process. It should be software.",
    metaDescription:
      "SaaS and custom software development: MVPs, internal tools, dashboards and integrations for growing businesses, built with AI-assisted development.",
    sections: [
      {
        heading: "The Problem",
        items: [
          "The spreadsheet that runs the business has become the bottleneck that limits it.",
          "Off-the-shelf software forces your process to fit the tool instead of the other way round.",
          "Traditional agencies quote six figures and six months for what is often a focused, well-scoped tool.",
          "Ideas for a product sit unbuilt because the first step looked too expensive.",
        ],
      },
      {
        heading: "What We Do",
        items: [
          "MVPs for new products: the smallest version that real customers can pay for, shipped fast",
          "Internal tools that replace the spreadsheet: job tracking, scheduling, inventory, reporting",
          "Dashboards that pull from the systems you already use and show the numbers that matter",
          "Integrations between the tools you have \u2014 CRM, accounting, booking, messaging \u2014 so data stops being re-typed",
          "Multi-tenant SaaS foundations: auth, billing, roles, admin, ready to scale",
          "AI-assisted development end to end, with senior engineers directing it and reviewing every line",
        ],
      },
      {
        heading: "Why It Matters",
        items: [
          "A tool built around your process compounds: every hour it saves is saved every week.",
          "An MVP in the market in six weeks learns more than a perfect product in a year.",
          "Software you own is an asset on the balance sheet. A subscription is a cost on the P&L.",
        ],
      },
    ],
    cta: "Describe the process, the spreadsheet or the idea. We will tell you what it would take.",
    faqs: [
      {
        q: "What is an MVP and do I need one?",
        a: "A minimum viable product is the smallest version of a product that real customers can use and pay for. If you have a product idea, an MVP is almost always the right first step: it tests demand with real money before you build the full thing, and it is what investors expect to see.",
      },
      {
        q: "How can you build software so much faster than a traditional agency?",
        a: "AI-assisted development. Senior engineers direct AI tooling that produces, tests and documents code far faster than typing it by hand, then review everything before it ships. The result is the same quality of software in a fraction of the calendar time, which is why the pricing works for businesses that could never afford a traditional build.",
      },
      {
        q: "Will it scale if the business grows?",
        a: "Yes. We build on modern, mainstream frameworks and cloud infrastructure that scale from ten users to ten thousand without a rewrite. Multi-tenant SaaS foundations \u2014 auth, billing, roles \u2014 are designed in from the start when a product is the goal.",
      },
      {
        q: "Who maintains it after launch?",
        a: "Your choice. We hand over full documentation and a walkthrough so an in-house or freelance developer can maintain it, or we run an optional monthly retainer for iteration, monitoring and support. There is no lock-in either way.",
      },
    ],
  },
  {
    slug: "ai-automation-agents",
    name: "AI Automation & Agents",
    oneLiner: "Voice receptionists, chatbots and workflows that run without you",
    icon: Workflow,
    headline:
      "Never let a hot lead go cold. An AI agent answers every hour you don't.",
    metaDescription:
      "AI automation for local businesses: 24/7 voice receptionists, website chatbots trained on your business, and workflow automation that removes the manual work eating your team's week.",
    sections: [
      {
        heading: "The Problem",
        items: [
          "Every missed call is a missed job. Most local businesses miss a third of their calls, and after-hours enquiries go straight to whoever answers first.",
          "Staff spend hours a week on intake, scheduling, follow-ups and status updates that follow the same script every time.",
          "Website visitors with a question leave when nobody answers it in the moment.",
          "Generic chatbots frustrate customers because they know nothing about the actual business.",
        ],
      },
      {
        heading: "What We Do",
        items: [
          "AI voice receptionists that answer, qualify, book and reschedule around the clock, and hand complex calls to a human",
          "Website chatbots trained on your services, pricing and FAQs, live on the site and inside the booking flow",
          "Automated intake, reminders, review requests and follow-up sequences wired into your CRM",
          "Workflow automation across the tools you already use \u2014 n8n, Make, Zapier, HubSpot \u2014 mapped from how your team actually works",
          "Multilingual where it matters, with data privacy and compliance designed in",
          "Monthly reporting on calls handled, conversations resolved and hours reclaimed",
        ],
      },
      {
        heading: "Why It Matters",
        items: [
          "A medical practice we built for now handles 73% of inbound calls with no human involvement; no-shows fell 31% from automated reminders.",
          "A SaaS chatbot lifted demo bookings 41% in its first month and now resolves 94% of 800+ monthly conversations.",
          "A law firm reclaimed an estimated 320 billable hours a month \u2014 the capacity of two associates \u2014 without hiring.",
        ],
      },
    ],
    cta: "Find out which of your calls and tasks an agent could take today.",
    faqs: [
      {
        q: "What can an AI receptionist actually do?",
        a: "Answer every inbound call instantly, at any hour, in a natural voice; qualify the caller; book, reschedule or cancel appointments against your live calendar; answer routine questions; and transfer anything complex to a human with context. In a medical practice we built for, it now handles 73% of all inbound calls without staff involvement.",
      },
      {
        q: "Will customers know they are talking to an AI?",
        a: "It is disclosed where regulation or good practice requires, and the conversation is natural enough that most callers simply get what they needed. What customers notice is that the phone is answered immediately, every time, including at 9pm on a Sunday.",
      },
      {
        q: "Which tools does workflow automation connect?",
        a: "Whatever you already run. We build on n8n, Make and Zapier and connect CRMs such as HubSpot, calendars, booking systems, messaging, accounting and email, so data moves between them without anyone re-typing it. The audit maps your process first and identifies the handoffs worth automating.",
      },
      {
        q: "What does it cost compared with hiring?",
        a: "A fraction. An agent runs 24/7 for less than a part-time salary, and a law firm we worked with reclaimed roughly 320 billable hours a month \u2014 about two full-time associates' capacity \u2014 without adding headcount. We scope each automation against the hours it will save so the return is clear before you commit.",
      },
    ],
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
