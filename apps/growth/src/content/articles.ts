/**
 * Insights articles.
 *
 * Written answer-first: the opening paragraph answers the title's question
 * outright, so an answer engine can quote it. Every figure carries a `sources`
 * entry — the site's positioning is "we show you the math", so nothing here is
 * stated without a citation. Keep it that way when adding pieces.
 *
 * Block types: h2, p, list (unordered), takeaway (a pull-quote-style summary).
 */

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "takeaway"; text: string };

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  /** Target query cluster — informs the title tag and internal links. */
  keywords: string[];
  /** Service page this article funnels to. */
  relatedService: string;
  sources: { label: string; url: string }[];
  faqs: { q: string; a: string }[];
  body: Block[];
  /** Under /public. Used as the article plate, the index thumbnail and the social card. */
  image: string;
  imageAlt: string;
};

export const articles: Article[] = [
  {
    slug: "only-1-percent-of-local-businesses-get-recommended-by-chatgpt",
    image: "/photos/insights/chatgpt.jpg",
    imageAlt: "Silhouette of a person holding a smartphone against the light",
    title:
      "Only 1.2% of Local Businesses Get Recommended by ChatGPT. Here Is What They Do Differently.",
    description:
      "AI use for local recommendations jumped from 6% to 45% of US consumers in 2026, yet only 1.2% of business locations are ever recommended. The businesses that make the cut share four traits.",
    date: "2026-09-15",
    readTime: "6 min read",
    category: "AI Visibility",
    keywords: [
      "get recommended by ChatGPT",
      "ChatGPT local business recommendations",
      "AI visibility local business",
    ],
    relatedService: "ai-search-optimization",
    sources: [
      {
        label: "Search Engine Journal — AI Visibility for Local Businesses",
        url: "https://www.searchenginejournal.com/ai-overview-recommendation-plan-reviewly-spa/587030/",
      },
      {
        label: "SOCi — The Challenge of AI Visibility for Brands",
        url: "https://www.soci.ai/blog/the-challenge-of-ai-visibility-for-brands-part-1/",
      },
      {
        label: "CMC SEO — How ChatGPT Recommends Local Businesses in 2026",
        url: "https://cmc-seo.com/chatgpt-recommends-local-businesses/",
      },
    ],
    faqs: [
      {
        q: "How many local businesses does ChatGPT recommend?",
        a: "Very few. Research in 2026 found only about 1.2% of business locations are ever recommended by ChatGPT, even though 45% of US consumers now use AI to find local businesses. The gap is not demand — it is evidence.",
      },
      {
        q: "What does ChatGPT look at before recommending a business?",
        a: "Clear business details that match across the web, substantive website content, a strong and recent review profile, and mentions on trusted third-party sites. It retrieves live web results and reasons over them, so it can only recommend what it can verify.",
      },
    ],
    body: [
      {
        type: "p",
        text: "ChatGPT recommends only about 1.2% of local business locations, according to 2026 research into AI visibility. At the same time, the share of US consumers using AI to find local businesses has jumped from 6% to 45%. That is the whole story in two numbers: the customers have moved, and almost nobody has followed them.",
      },
      {
        type: "p",
        text: "ChatGPT passed one billion weekly active users this year, and a large share of those conversations are recommendation questions — \"who is a good dentist near me\", \"which plumber should I call\". The businesses that appear in those answers get a customer who has already been told they are the right choice. Everyone else gets nothing, and never finds out the question was asked.",
      },
      { type: "h2", text: "Why so few businesses make the cut" },
      {
        type: "p",
        text: "AI assistants do not have an opinion about your business. They retrieve live web results and reason over what they find. If the evidence is thin, contradictory or missing, the safest thing for the model to do is leave you out — and it does. Most local businesses have given it almost nothing to work with: a one-page website, a handful of reviews, listings that disagree about the phone number.",
      },
      { type: "h2", text: "The four things the 1.2% have in common" },
      {
        type: "list",
        items: [
          "Consistent details everywhere. Name, address, phone, hours and services are identical on the website, Google Business Profile, Yelp, and every directory. When listings disagree, the model loses confidence and omits the business rather than risk being wrong.",
          "A review profile with substance. ChatGPT-recommended businesses average 4.3 stars, but the rating is the least of it. The model reads the language in reviews to build a picture of what a business is actually good at. Detailed reviews that name the service and the outcome are worth roughly six times more than generic five-star ratings.",
          "Real website content. Dedicated service pages, location pages, FAQs, and structured data. Pages carrying proper JSON-LD schema are cited about 3.2 times more often, because schema tells the model exactly who you are without guesswork.",
          "Mentions on sites you do not control. Directory listings, Reddit threads, press, partner sites. Independent mentions are trusted precisely because the business cannot fabricate them.",
        ],
      },
      { type: "h2", text: "What this means if you rank well on Google already" },
      {
        type: "p",
        text: "Less than you would hope. Only about 45% of businesses in Google's map pack also appear in AI recommendations, which means more than half of the businesses that have done the hard work of ranking locally are invisible the moment a customer asks an assistant instead of typing a search. Google's local ranking rewards proximity and category; AI rewards evidence. They are different games.",
      },
      {
        type: "takeaway",
        text: "AI recommendation is not a ranking to climb. It is a body of evidence to assemble. The businesses that get recommended are the ones with the strongest evidence.",
      },
      { type: "h2", text: "Where to start" },
      {
        type: "p",
        text: "Ask the assistants yourself. Open ChatGPT, Google and Perplexity and ask for your own service in your own city. Note who is named. Then check your listings for the mismatches those competitors do not have. That audit — your visibility, your competitors, the gap — is exactly what we run for free, because the number is usually large enough to make the next step obvious.",
      },
    ],
  },
  {
    slug: "ai-overviews-answer-68-percent-of-local-searches",
    image: "/photos/insights/overviews.jpg",
    imageAlt: "Aerial view of a city at night with illuminated streets",
    title:
      "AI Overviews Now Answer 68% of Local Searches. The Map Pack Shows for 39%. Mind the Gap.",
    description:
      "Google's AI Overviews appear on more than two-thirds of local searches, while the map pack businesses fought to rank in shows on fewer than four in ten. A 29-point gap where customers get an answer without ever seeing your listing.",
    date: "2026-09-14",
    readTime: "5 min read",
    category: "Local Search",
    keywords: [
      "Google AI Overviews local business",
      "AI Overviews local search",
      "map pack vs AI Overview",
    ],
    relatedService: "google-business-profile",
    sources: [
      {
        label: "Whitespark — The Prevalence of AI Overviews in Local Search",
        url: "https://whitespark.ca/blog/case-study-the-prevalence-of-ai-overviews-in-local-search/",
      },
      {
        label: "Search Engine Journal — AI Overviews Now Answer Most Local Searches",
        url: "https://www.searchenginejournal.com/ai-overviews-now-answer-most-local-searches-how-to-get-your-business-cited/580757/",
      },
      {
        label: "Digital Information World — How AI Overviews Are Changing Local Search",
        url: "https://www.digitalinformationworld.com/2026/06/how-google-ai-overviews-are-changing-local-search.html",
      },
    ],
    faqs: [
      {
        q: "How often do AI Overviews appear for local searches?",
        a: "Around 68% of local searches now trigger a Google AI Overview, compared with about 39% that show the traditional map pack. The overview sits above everything else and answers the question directly.",
      },
      {
        q: "Does the map pack still matter?",
        a: "Yes, but it is no longer the top of the page. It matters most for navigational searches where someone already knows who they want. For discovery searches — \"best\", \"near me\", \"who should I use\" — the AI Overview increasingly answers before the map pack is reached.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Google AI Overviews appear on about 68% of local searches. The map pack — the three-listing block at the top of results that local businesses have spent years competing for — appears on about 39%. That 29-point gap is a set of customers who ask a question, read Google's own answer, and never scroll to the listings.",
      },
      {
        type: "p",
        text: "This is the quiet change in local search this year. Nothing about the map pack got worse. It simply moved down the page, underneath an answer Google writes itself, drawing on sources it chooses.",
      },
      { type: "h2", text: "Who gets cited in the overview" },
      {
        type: "p",
        text: "Not, for the most part, the businesses themselves. Analysis of local AI Overview citations found that roughly 60% point to third-party publishers — Reddit, Quora, Yelp, Thumbtack, HomeGuide, ZipRecruiter — while about 40% cite individual local businesses. So even when a business appears, it is often because a third-party site mentioned it, not because its own website was chosen.",
      },
      { type: "h2", text: "What a local business should do" },
      {
        type: "list",
        items: [
          "Keep ranking for the map pack. It still converts, and it is still visible on 39% of searches. This is not either/or.",
          "Write the answer Google wants to give. If people search \"how much does a crown cost in Denver\", have a page that answers it plainly, in the first paragraph, with a heading that matches the question.",
          "Add FAQ and LocalBusiness schema. Structured data is how the overview identifies a trustworthy, citable source. Pages with it are cited around three times more often.",
          "Be present on the third-party sites Google cites. A Yelp listing that is complete, a Reddit thread where a customer recommended you, a directory entry with the same details as your website.",
          "Check your own queries monthly. Search the questions your customers ask and note whether an overview appears, who it cites, and whether that is you.",
        ],
      },
      {
        type: "takeaway",
        text: "The map pack rewarded being close and being categorised correctly. The AI Overview rewards being the clearest, best-evidenced answer to the question. Businesses need both, and most have only worked on the first.",
      },
    ],
  },
  {
    slug: "reddit-is-the-top-source-google-ai-cites",
    image: "/photos/insights/reddit.jpg",
    imageAlt: "Neighbours sitting on stools outside a local shop, talking",
    title:
      "Reddit Is Now the #1 Source Google's AI Cites. Here Is What a Local Business Should Do About It.",
    description:
      "Reddit accounts for 21% of all Google AI Overview citations, with YouTube at nearly 19%. Google now surfaces Reddit threads as Community Perspectives inside local results. Most local businesses have never posted on either.",
    date: "2026-09-12",
    readTime: "6 min read",
    category: "AI Visibility",
    keywords: [
      "Reddit AI Overview citations",
      "Reddit local business marketing",
      "Community Perspectives Google",
    ],
    relatedService: "community-presence",
    sources: [
      {
        label: "SERPreach — AI Overviews Cite YouTube and Reddit While Vendor Sites Go Uncited",
        url: "https://www.openpr.com/news/4628331/serpreach-snapshot-google-ai-overviews-cite-youtube-and-reddit",
      },
      {
        label: "Nobori — AI Overviews Add Reddit Community Perspectives",
        url: "https://nobori.ai/blog/google-ai-overviews-community-perspectives-reddit-citations-2026",
      },
    ],
    faqs: [
      {
        q: "Why does Google's AI cite Reddit so much?",
        a: "Because Reddit threads contain firsthand, specific, unsponsored experience — exactly the kind of evidence a model trusts more than a business's own marketing. Reddit accounts for about 21% of all AI Overview citations, more than any other source.",
      },
      {
        q: "Should a local business post on Reddit?",
        a: "Participate, yes. Advertise, no — that gets accounts banned and threads deleted. Answer questions in local and industry subreddits, be useful, and let the business be mentioned naturally. One genuine recommendation in a relevant thread can be cited across thousands of AI answers.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Reddit is the single most-cited source in Google AI Overviews, accounting for about 21% of all citations. YouTube is second at 18.8%. Analysis published in September 2026 found that on commercial queries, AI Overviews frequently skip the vendor's own website entirely and cite Reddit, YouTube and third-party listicles instead. Google has since started surfacing Reddit threads directly inside local results under the label Community Perspectives.",
      },
      {
        type: "p",
        text: "For a local business, this is the strangest and most important shift of the year. The place your customers are being told who to hire is a forum most business owners have never opened.",
      },
      { type: "h2", text: "Why a forum outranks your website" },
      {
        type: "p",
        text: "AI systems are built to be sceptical of marketing. A business page saying \"we are the best dentist in Denver\" carries almost no weight, because every business page says that. A Reddit thread where three residents independently name the same dentist carries enormous weight, because nobody paid for it and the model can see that. The same logic explains YouTube: a walkthrough video of a real job is evidence in a way a service page is not.",
      },
      { type: "h2", text: "What to do — and what not to do" },
      {
        type: "list",
        items: [
          "Do not post adverts. Reddit's communities and moderators remove promotional content quickly, and a banned account is worse than no account.",
          "Do answer questions. Find the subreddit for your city and for your industry. When someone asks a question you can genuinely answer — \"how do I know if my roof needs replacing\" — answer it well, with no pitch.",
          "Do make the business findable. A complete, accurate profile so that when someone does mention you, the trail leads somewhere.",
          "Do the same on Quora, and check the directories AI cites: Yelp, Thumbtack, HomeGuide, Nextdoor. A missing or inconsistent listing on any of them is a hole in the evidence.",
          "Put your video on YouTube. Short clips of real work, titled the way people search. It is the second most-cited source, and it is one you fully control.",
        ],
      },
      {
        type: "takeaway",
        text: "Sixty percent of AI Overview citations go to sites businesses do not own. Your own website is necessary, but it is no longer sufficient. The evidence that gets you recommended increasingly lives elsewhere.",
      },
    ],
  },
  {
    slug: "schema-markup-3x-more-ai-citations-local-business",
    image: "/photos/insights/schema.jpg",
    imageAlt: "Computer screen displaying HTML for web development",
    title:
      "The Schema Markup That Makes a Local Business 3.2x More Likely to Be Cited by AI",
    description:
      "Pages carrying proper JSON-LD schema are cited in AI responses about 3.2 times more often. Here is the specific structured data a local business needs, what each piece tells the model, and the mistake that cancels it out.",
    date: "2026-09-10",
    readTime: "7 min read",
    category: "Technical",
    keywords: [
      "LocalBusiness schema markup",
      "schema markup AI citations",
      "JSON-LD local business",
    ],
    relatedService: "local-seo-website",
    sources: [
      {
        label: "CMC SEO — How ChatGPT Recommends Local Businesses in 2026",
        url: "https://cmc-seo.com/chatgpt-recommends-local-businesses/",
      },
      {
        label: "Position Digital — AEO Best Practices for 2026",
        url: "https://www.position.digital/blog/answer-engine-optimization-best-practices/",
      },
    ],
    faqs: [
      {
        q: "What is schema markup?",
        a: "Schema markup is a block of structured data, usually JSON-LD, added to a web page that describes the page's content in a format machines read directly: this is a business, here is its name, address, hours, services and reviews. Search engines and AI systems use it to understand a page without inferring.",
      },
      {
        q: "Which schema types does a local business need?",
        a: "LocalBusiness (or a specific subtype such as Dentist or Plumber) on the homepage, Service on each service page, FAQPage wherever there are questions and answers, and BreadcrumbList for navigation. Together they tell an AI who you are, what you do, where, and what people ask.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Web pages that carry proper JSON-LD schema markup are cited in AI responses about 3.2 times more often than pages without it. For a local business the reason is simple: LocalBusiness schema tells an AI crawler exactly who you are, where you are and what you offer, in a format it can read without guessing. A page without it makes the model infer all of that from prose, and models are cautious about inferring.",
      },
      { type: "h2", text: "The four types that matter" },
      {
        type: "list",
        items: [
          "LocalBusiness — or better, the specific subtype: Dentist, Attorney, Plumber, HairSalon, Restaurant. Name, address, phone, hours, service area, price range. This is the entity record. Put it on the homepage and make every value match your Google Business Profile exactly.",
          "Service — one per service page. Name, description, provider, area served. This is what lets an AI match \"emergency plumber in Denver\" to a specific page on your site rather than to your homepage.",
          "FAQPage — wherever you answer customer questions. Each question and answer becomes a discrete, quotable unit. This is the single most effective schema type for appearing in AI answers, because it hands the model a ready-made answer.",
          "BreadcrumbList — the page's position in the site. Minor on its own, but it helps the model understand that a service page belongs to a business, which belongs to a location.",
        ],
      },
      { type: "h2", text: "The mistake that cancels it out" },
      {
        type: "p",
        text: "Inconsistency. If your schema says the business opens at 8am, your Google profile says 9am and Yelp says 8:30am, the model does not average them. It concludes it cannot trust any of the three and may omit your hours entirely, or omit you. Schema only helps when the details in it match the details everywhere else. Fix the listings first, then add the markup that confirms them.",
      },
      { type: "h2", text: "How to check whether you have it" },
      {
        type: "p",
        text: "Paste your homepage into Google's Rich Results Test. If it reports no structured data, you have none. Most local business websites built on templates report exactly that. It is also one of the first things we check in a visibility audit, because it is cheap to fix and the effect is measurable within weeks.",
      },
      {
        type: "takeaway",
        text: "Schema is not a ranking trick. It is the difference between an AI knowing what your business is and an AI guessing. Models recommend what they know.",
      },
    ],
  },
  {
    slug: "review-substance-beats-review-count-for-ai",
    image: "/photos/insights/reviews.jpg",
    imageAlt: "Customer looking at her phone inside a cafe, street visible outside",
    title:
      "Review Substance Beats Review Count 6-to-1 in AI Recommendations",
    description:
      "AI systems read the language in reviews to build a profile of what a business actually does well. A detailed review naming the service and the result is worth about six generic five-star ratings. Here is how to get the kind that count.",
    date: "2026-09-08",
    readTime: "5 min read",
    category: "Reviews",
    keywords: [
      "reviews AI recommendations",
      "how to get detailed Google reviews",
      "review quality vs quantity",
    ],
    relatedService: "review-reputation-management",
    sources: [
      {
        label: "CMC SEO — How ChatGPT Recommends Local Businesses in 2026",
        url: "https://cmc-seo.com/chatgpt-recommends-local-businesses/",
      },
      {
        label: "TwentyOne Solutions — How Local Businesses Show Up in ChatGPT (2026 Guide)",
        url: "https://twentyonesolutions.com/resources/local-businesses-show-up-in-chatgpt-ai-search-guide",
      },
    ],
    faqs: [
      {
        q: "Do AI assistants read the text of reviews?",
        a: "Yes. They analyse the language in reviews to build a reputation profile — which services are mentioned, how outcomes are described, whether the tone is specific or generic. Review substance is about six times more important for AI visibility than the raw count.",
      },
      {
        q: "How do I get customers to write detailed reviews?",
        a: "Ask a specific question instead of asking for a review. \"What was the job, and how did it turn out?\" produces detail; \"please leave us a review\" produces \"great service, 5 stars\". Automate the ask by text or email right after the job, with a one-tap link.",
      },
    ],
    body: [
      {
        type: "p",
        text: "When an AI assistant decides whether to recommend a local business, review substance matters about six times more than review count. The model reads the reviews. A review that says \"replaced our water heater the same day, explained the two options, cleaned up after\" tells it what you do, how fast, and how you treat people. A review that says \"great service, five stars\" tells it almost nothing, and fifty of them tell it almost nothing fifty times.",
      },
      {
        type: "p",
        text: "This is a genuine change from how Google's own local ranking has worked, where volume and rating carried most of the weight. ChatGPT-recommended businesses average 4.3 stars — high, but not perfect — and what separates them from the 4.6-star business that never gets mentioned is usually the text.",
      },
      { type: "h2", text: "What a substantive review contains" },
      {
        type: "list",
        items: [
          "The specific service. Not \"they helped us\" but \"they did our kitchen remodel\".",
          "Something about the process. Timing, communication, how a problem was handled.",
          "The outcome. What is different now.",
          "Ideally, the location. A mention of the neighbourhood or city reinforces the geographic signal AI uses to match you to a query.",
        ],
      },
      { type: "h2", text: "How to get them without begging" },
      {
        type: "p",
        text: "Change the question. \"Would you leave us a review?\" produces a rating. \"What did we do for you, and how did it go?\" produces a paragraph. Send it automatically — a text or email within a day of the job, with a link that opens the review form in one tap. Businesses that do this consistently go from single digits to dozens of detailed reviews within a few months, and the reviews read like evidence rather than applause.",
      },
      { type: "h2", text: "Respond to every one" },
      {
        type: "p",
        text: "Responding to reviews increases consumer trust by about 45%, and your responses are text the model reads too. A specific, calm reply to a negative review — what happened, what you did about it — often does more for your profile than the review does against it. Silence reads as indifference to humans and to models alike.",
      },
      {
        type: "takeaway",
        text: "Reviews are no longer a score. They are the primary text an AI reads to decide what your business is good at. Write the ask so the answer is worth reading.",
      },
    ],
  },
  {
    slug: "what-is-answer-engine-optimization-for-local-business",
    image: "/photos/insights/aeo.jpg",
    imageAlt: "Person working at a desk, seen through a window",
    title:
      "What Is Answer Engine Optimization? A Plain-English Guide for Local Business Owners",
    description:
      "Answer engine optimization is the practice of making your business the answer an AI gives, not a link in a list. Here is what it means, how it differs from SEO, and the five things it comes down to for a local business.",
    date: "2026-09-05",
    readTime: "6 min read",
    category: "Guides",
    keywords: [
      "what is answer engine optimization",
      "AEO for local business",
      "AEO vs SEO",
    ],
    relatedService: "ai-search-optimization",
    sources: [
      {
        label: "HubSpot — Answer Engine Optimization Trends in 2026",
        url: "https://blog.hubspot.com/marketing/answer-engine-optimization-trends",
      },
      {
        label: "CXL — Answer Engine Optimization: The Comprehensive Guide for 2026",
        url: "https://cxl.com/blog/answer-engine-optimization-aeo-the-comprehensive-guide/",
      },
      {
        label: "Position Digital — AEO Best Practices for 2026",
        url: "https://www.position.digital/blog/answer-engine-optimization-best-practices/",
      },
    ],
    faqs: [
      {
        q: "What is the difference between AEO and SEO?",
        a: "SEO aims to rank a page in a list of results. AEO aims to be the answer itself — the business an AI names, the paragraph a featured snippet quotes, the source a voice assistant reads aloud. They overlap heavily, but AEO puts far more weight on clear direct answers, structured data, consistent business details and third-party evidence.",
      },
      {
        q: "Does a small local business need AEO?",
        a: "Yes, and arguably more than a large one. Local recommendation questions — \"who is a good electrician in Austin\" — are exactly the queries AI assistants now answer directly, and they name specific businesses. A local business that is not set up to be named simply is not in the conversation.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Answer engine optimization, or AEO, is the practice of making your business the answer an AI gives, rather than one link among ten. When someone asks ChatGPT, Google's AI Overview, Perplexity or a voice assistant \"who should I hire for X in my city\", AEO is the work that determines whether your name is in the reply. Traditional SEO gets you into a list; AEO gets you into the sentence.",
      },
      { type: "h2", text: "How answer engines actually work" },
      {
        type: "p",
        text: "The major assistants do not answer from memory. They run a live web search, retrieve the most relevant pages, and reason over them — an approach called retrieval-augmented generation. That means two things for a local business. First, what is on the web right now matters more than what the model was trained on. Second, the model can only recommend what it can find and verify. If the evidence is not there, or contradicts itself, you are left out.",
      },
      { type: "h2", text: "The five things AEO comes down to" },
      {
        type: "list",
        items: [
          "Answer-first content. Pages that state the answer in the first paragraph, under a heading that matches the question. Listicles and structured lists make up about a third of all AI citations, because a model prefers one comprehensive, scannable source over assembling fragments.",
          "Entity consistency. Your name, address, phone, hours and services identical everywhere. Inconsistency is the fastest way to be omitted — the model would rather say nothing than say something wrong.",
          "Structured data. LocalBusiness, Service and FAQPage schema so the model reads facts instead of inferring them. Pages with it are cited roughly three times more often.",
          "Third-party evidence. Reviews with substance, directory listings, Reddit and Quora mentions, YouTube. Sixty percent of AI Overview citations go to sites businesses do not own.",
          "Measurement. Ask the assistants your own customers' questions every month and record who is named. AI visibility is now a metric, and it moves.",
        ],
      },
      { type: "h2", text: "What AEO is not" },
      {
        type: "p",
        text: "It is not a replacement for SEO, and it is not a trick. Everything that makes a business more citable — clear content, consistent details, real reviews, presence where customers talk — also makes it a better business to find by any route. AEO is mostly the discipline of doing those things deliberately, and checking that they worked.",
      },
      {
        type: "takeaway",
        text: "Where Google lists ten results and a map, an AI names a handful of businesses per question. Answer engine optimization is the work of being one of them.",
      },
    ],
  },
];

export const articleCategories = [
  "All",
  ...Array.from(new Set(articles.map((a) => a.category))),
];
