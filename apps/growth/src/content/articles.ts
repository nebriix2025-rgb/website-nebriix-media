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
    slug: "ai-overviews-on-brand-name-searches-local-business",
    title:
      "Searching Your Business Name Now Returns an AI Answer 8 Times out of 10. Here Is Who Google Is Quoting.",
    description:
      "Two independent datasets published on 1 and 2 October put AI Overviews on 83% to 90% of brand-name searches, up from 26% at the start of September. The query where you used to be the answer is now answered by Google, out of sources you do not own. Here is what it quotes, and how to make those sources say the right thing.",
    date: "2026-10-02",
    readTime: "8 min read",
    category: "AI Visibility",
    keywords: [
      "AI Overviews branded searches",
      "AI Overview on my business name",
      "brand name search AI Overview 2026",
    ],
    relatedService: "ai-search-optimization",
    image: "/photos/insights/name.jpg",
    imageAlt: "A business name in red neon lettering above a shopfront at night",
    sources: [
      {
        label: "Ahrefs — AI Overviews Currently Appear for 83% of Branded Searches (2 October 2026)",
        url: "https://ahrefs.com/blog/ai-overviews-on-branded-searches/",
      },
      {
        label: "DemandSphere — AI Overviews on branded queries tripled in September (1 October 2026)",
        url: "https://www.demandsphere.com/blog/branded-ai-overviews-september-2026/",
      },
      {
        label: "Search Engine Land — Google AI Overviews jump from 26% to 80% of branded queries",
        url: "https://searchengineland.com/google-ai-overviews-jump-branded-queries-september-492962",
      },
      {
        label: "Search Engine Land — AI local visibility is up to 30x harder than ranking in Google (SOCi 2026 Local Visibility Index)",
        url: "https://searchengineland.com/ai-local-visibility-report-2026-468085",
      },
      {
        label: "Search Engine Roundtable — Google Local Knowledge Panel Now An AI Overview (17 September 2026)",
        url: "https://www.seroundtable.com/google-local-knowledge-panel-ai-overview-42105.html",
      },
    ],
    faqs: [
      {
        q: "Does Google show an AI Overview when someone searches my business name?",
        a: "Very probably, and that changed in the last two weeks of September 2026. Ahrefs, analysing 232.8 million US desktop search-result crawls including 92.5 million branded-keyword crawls, found AI Overviews on 83% of branded queries by late September, up from 61.3% in July. DemandSphere, tracking branded keywords daily, recorded a rise from 26.12% on 1 September to a peak of 90.48% on 27 September. Google announced nothing.",
      },
      {
        q: "Can I stop Google showing an AI Overview for my own business name?",
        a: "No. There is no setting, no opt-out, and no appeal. What you can change is the material it is written from — your Business Profile, your website, your reviews and the third-party listings Google trusts. The answer is a summary of your public footprint, so the only available lever is the footprint.",
      },
      {
        q: "What does Google cite in an AI Overview about a business?",
        a: "For large brands, Ahrefs found the most frequently cited sources were Wikipedia (71.9%), YouTube (38.6%) and LinkedIn (22.8%) — none of which the brand fully controls. For a local business the equivalent set is Google Maps and your Business Profile, Yelp, Facebook, the directories in your trade, local press, and public threads where people discuss businesses like yours. Your own website is one voice among those, not the loudest.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Someone types your business name into Google. They are not comparing, not browsing — they have already chosen you and want your hours or your number. That query was the one piece of search a business could count on owning. In the last two weeks of September, Google took the top of it.",
      },
      {
        type: "p",
        text: "Two independent measurements published this week agree. Ahrefs analysed 232.8 million US desktop search-result crawls between July and September, 92.5 million of them branded keywords, and found AI Overviews appearing on 83% of branded queries by late September — up from 61.3% in July and 65.1% in August. DemandSphere, tracking branded keywords once a day across markets and devices, recorded 26.12% on 1 September, a sharp climb from 18 September, and a peak of 90.48% on 27 September. Google made no announcement. It simply started answering.",
      },
      {
        type: "p",
        text: "Ahrefs also measured where the AI Overview sits: for major brands it occupies position one 76.2% of the time, above the brand's own website.",
      },
      { type: "h2", text: "The risk is not clicks. It is who gets to describe you." },
      {
        type: "p",
        text: "The reflex worry is traffic, and honestly nobody has measured that yet — neither study tracked clicks, and both say so. Ahrefs' Ryan Law puts the real problem more sharply: competitors and external sources can now control the narrative of your brand directly in the search results.",
      },
      {
        type: "p",
        text: "Look at what gets quoted. For large brands, the most-cited sources in branded AI Overviews are Wikipedia at 71.9%, YouTube at 38.6% and LinkedIn at 22.8%. A brand owns none of those outright. A YouTube video from an unofficial account describing a product you discontinued is, as far as the summary is concerned, evidence.",
      },
      {
        type: "p",
        text: "A local business has the same problem with a different cast. Nobody has written your Wikipedia page. What exists instead is your Google Business Profile, your Maps listing, Yelp, Facebook, the trade directories, whatever the local paper wrote in 2022, and a Reddit thread where someone asked for a recommendation. That is the raw material. Your website is one voice in it.",
      },
      { type: "h2", text: "What the local data says about being described wrongly" },
      {
        type: "p",
        text: "SOCi's 2026 Local Visibility Index, which analysed nearly 350,000 locations across 2,751 multi-location brands, found business profile information was only about 68% accurate on ChatGPT and Perplexity. On Gemini it was 100% — because Gemini is grounded in Google Maps. The lesson is unglamorous and precise: assistants that read your Maps data get you right, and assistants that assemble you from the wider web get you wrong about a third of the time.",
      },
      {
        type: "p",
        text: "The same report found reviews working as a filter rather than a ranking signal. Locations recommended by ChatGPT averaged 4.3 stars; on Perplexity 4.1; on Gemini 3.9. Businesses with ratings near 3.4 stars and review response rates below 5% were, in SOCi's finding, effectively invisible in AI recommendations — not ranked low, absent. In ordinary local search a middling rating still ranks on proximity. Here it disqualifies.",
      },
      { type: "h2", text: "A timing detail worth noticing" },
      {
        type: "p",
        text: "DemandSphere's climb begins on 18 September. On 17 September, Search Engine Roundtable confirmed Google had started rendering the local knowledge panel — the card that appears when you search a business by name — as an AI Overview. Google has confirmed no connection between the two, and one day's gap is not proof of anything. But both changes point the same way, and they arrived in the same week.",
      },
      { type: "h2", text: "The thirty-minute version of fixing this" },
      {
        type: "list",
        items: [
          "Search your own business name on a phone, signed out, and screenshot what you get. This is now the front page of your business, and most owners have never seen it. Mark every statement as right, stale or missing.",
          "Read the citations, not just the summary. Whatever Google links under that answer is the set of pages that currently define you. Open each one. Those are your real priorities for the next month, in the order Google listed them.",
          "Fix Maps first. It is the one source that measurably produces accurate descriptions. Complete every field — category, services, attributes, hours, a real 500-character description — because an empty field is how a summary ends up thin or invented.",
          "Treat your rating as a gate, not a score. If you are under about 4.2 stars, that is the work. Ask properly, respond to everything, and let the average move; nothing else on this list matters as much if the filter excludes you before the describing starts.",
          "Publish one plain page that answers \"what is [your business name]\" — who you are, what you do, where, since when, and what makes you the obvious choice. Date it, mark it up with LocalBusiness structured data, and link it from your home page. If you do not write the canonical description of your own business, something else becomes it.",
          "Get one credible third party to say the same thing. A local paper, a chamber listing, a well-run directory in your trade. Corroboration is what turns a claim on your own website into a fact the model will repeat.",
        ],
      },
      {
        type: "p",
        text: "One caution on all of this: Google changes AI Overview triggering constantly, and 90% in late September does not guarantee 90% in December. Ahrefs says as much. But the direction of travel across eighteen months has been one way only, and everything on the list above pays for itself through ordinary search even if the Overview disappears tomorrow.",
      },
      {
        type: "takeaway",
        text: "Brand-name searches used to be the one query you owned. As of late September, Google writes the answer to roughly eight or nine of every ten of them, assembled from sources you do not control, and it sits above your website three times in four. You cannot switch it off. Search your own name tonight, read what Google quotes, and go fix those sources in the order it listed them.",
      },
    ],
  },
  {
    slug: "google-ai-mode-monitoring-agents-local-business",
    title:
      "Google Now Watches the Web for Your Customers While They Sleep. Here Is How to Be What It Finds.",
    description:
      "On 28 September Google began rolling out AI Mode's information monitoring to everyone, globally, free — a feature that cost $199.99 a month in June. Customers tell Search what to watch for, and Google pushes them an alert when it appears. Two of Google's four headline examples are a local business's news. This is discovery without a search, and almost nobody is set up for it.",
    date: "2026-09-29",
    readTime: "8 min read",
    category: "Google",
    keywords: [
      "Google AI Mode monitoring local business",
      "Google information agents business visibility",
      "Google push notification local discovery",
    ],
    relatedService: "ai-search-optimization",
    image: "/photos/insights/watch.jpg",
    imageAlt: "People gathered outside a small brightly lit restaurant at night",
    sources: [
      {
        label: "Robby Stein (VP Product, Google Search) on X — info monitoring rolling out globally",
        url: "https://x.com/rmstein/status/2104720139971404016",
      },
      {
        label: "Search Engine Journal — Google Rolls Out AI Mode Info Monitoring To All Users Globally (28 September 2026)",
        url: "https://www.searchenginejournal.com/google-ai-mode-info-monitoring-global-rollout/591312/",
      },
      {
        label: "Search Engine Roundtable — Google Globally Rolls Out Monitoring Capabilities In AI Mode (28 September 2026)",
        url: "https://www.seroundtable.com/google-ai-mode-monitoring-capabilities-42179.html",
      },
      {
        label: "The Next Web — Google wants Search to work while you sleep, and its new information agents are the plan",
        url: "https://thenextweb.com/news/google-wants-search-to-work-while-you-sleep-and-its-new-information-agents-are-the-plan",
      },
      {
        label: "Digital Applied — Google AI Mode Information Agents: A New Referral Surface (June 2026)",
        url: "https://www.digitalapplied.com/blog/google-ai-mode-information-agents-geo-referral-surface-guide",
      },
      {
        label: "Google Search Status Dashboard — September 2026 spam update",
        url: "https://status.search.google.com/incidents/XhUDXP7A67iHCD2kmbVu",
      },
      {
        label: "Search Engine Roundtable — Google September 2026 Spam Update Has Big Weekend Impact (28 September 2026)",
        url: "https://www.seroundtable.com/google-september-2026-spam-update-weekend-impact-42174.html",
      },
    ],
    faqs: [
      {
        q: "What is Google's AI Mode information monitoring?",
        a: "It is a standing request you give Google Search. You tell AI Mode what you want watched — a restaurant opening near you, a product back in stock, holiday activities for kids — and Google continuously checks websites, forums, social posts, real-time data and its Shopping Graph of 60+ billion products, then sends a push notification through the Google app when something matches. It launched to $199.99-a-month Ultra subscribers on 12 June 2026, reached AI Pro over the summer, and on 28 September started rolling out to everyone globally at no cost.",
      },
      {
        q: "Can a local business get in front of these alerts?",
        a: "Nobody outside Google can say for certain. Google has not published how monitoring agents choose their sources, and there is no report in Search Console that separates agent-driven visits from other Search traffic. What is knowable is what the agents are watching for — changes, dated and verifiable — and that a business which publishes real, dated news has something to be found, while one whose site has not changed in two years does not.",
      },
      {
        q: "Should I publish more content so Google notices me?",
        a: "Publish more real things, not more words. In the same week this rolled out, Google's September 2026 spam update — live since 24 September, global, all languages, running up to two weeks — was visibly hitting AI-generated and programmatically produced pages. A genuine dated announcement about your business beats fifty generated articles, and the generated articles now carry risk that did not exist a month ago.",
      },
    ],
    body: [
      {
        type: "p",
        text: "On 28 September, Google's VP of Product for Search, Robby Stein, announced that information monitoring in AI Mode is rolling out to everyone, globally, free. In his words, you \"tell AI Mode exactly what to look for & Search will continuously check across changing info on the web like sites, forums and social posts\" — plus real-time data and a Shopping Graph of more than 60 billion products — and it notifies you when something turns up. In June this cost $199.99 a month. Now it is a default part of Search.",
      },
      {
        type: "p",
        text: "Read Google's own four examples of what people will monitor: new restaurants and pop-ups nearby, local holiday activities with the kids, back-in-stock alerts, price drops. Two of the four are a small local business's news. Google is not describing a research tool. It is describing a machine that waits for your opening, your event, your new arrival, and then taps a nearby stranger on the shoulder about it.",
      },
      { type: "h2", text: "This is discovery without a search" },
      {
        type: "p",
        text: "Every visibility conversation a local business has ever had assumes a moment: the customer wants something, types it, and you either appear or you do not. Monitoring removes the moment. The customer set the request weeks ago and forgot about it. When your news appears, Google pushes it to their phone unprompted. The search that found you had already happened, long before you had anything to be found for.",
      },
      {
        type: "p",
        text: "That inverts which part of your online presence matters. Your service pages answer people who are searching today; they change once a year and that is fine. Monitoring rewards the opposite thing — the part of your presence that changes. A business whose website and profile have not moved in eighteen months is not a bad search result. It is simply invisible to a system whose entire job is noticing change.",
      },
      {
        type: "p",
        text: "Google has been building to this all year: information agents were announced at I/O in May, launched to Ultra subscribers on 12 June, reached AI Pro over the summer, and went free and global this week. Stein's closing line on the announcement was \"lots more to come\".",
      },
      { type: "h2", text: "The honest part: nobody knows how it picks" },
      {
        type: "p",
        text: "Google has not disclosed how monitoring agents select their sources, and anyone telling you they have cracked it is guessing. Worse, there is currently no way to measure it: as Search Engine Journal put it this week, local businesses and retailers cannot yet tell how often monitoring will surface their sites or send them visits. There is no line in Search Console for agent-driven traffic.",
      },
      {
        type: "p",
        text: "So treat everything below as durable fundamentals that happen to line up with how these systems behave elsewhere — not as a formula. If Google never sends you a single monitored visit, every item on this list still earns its place through ordinary search, AI Overviews and customers who read your profile.",
      },
      { type: "h2", text: "Five things that make a business findable by something that is watching" },
      {
        type: "list",
        items: [
          "Publish dated news in a place you own. Not a blog of tips — a genuinely dated page for openings, new services, seasonal menus, extended hours, events. An agent watching for \"new places in this neighbourhood\" needs a page with a date on it to point at. Most local sites have nowhere for news to live.",
          "Post to your Google Business Profile, and now check whether anyone sees it. View counts came back to Business Profile posts on 10 September, covering the last 18 months across Search and Maps. For the first time in three years you can tell whether posting is doing anything. Post the news, then read the number.",
          "Mark up events and offers properly. Event and Offer structured data is how a machine tells \"this happens on 12 October at this address\" apart from a sentence in a paragraph. It costs nothing and it is the difference between parseable and ignorable.",
          "Get corroborated somewhere that is not your own site. Monitoring pulls from forums and social posts as well as websites. A local paper, a neighbourhood group, a community page mentioning your opening is a second, independent signal that the thing actually happened — and it is the signal you are least likely to have.",
          "Keep the boring details identical everywhere. Hours, address, phone, name. When a system is comparing sources to decide what changed, contradictions between your site, your profile and a directory read as noise. Consistency is what makes a genuine change legible as a change.",
        ],
      },
      { type: "h2", text: "The trap this week set at the same time" },
      {
        type: "p",
        text: "There is an obvious wrong conclusion here — \"Google rewards fresh content, so generate a lot of it\" — and Google spent the same week punishing exactly that. The September 2026 spam update went live on 24 September at 9:15am Pacific, globally and in all languages, with a rollout of up to two weeks. It is the fourth spam update of the year, after March, June and August, making this the most active year for them since 2021. Over the weekend of 26–27 September the tracking tools lit up, and analyst Glenn Gabe reported big drops across sites, with AI-generated and programmatically produced pages prominent among them.",
      },
      {
        type: "p",
        text: "Put the two stories side by side and the instruction is unusually clear. Google has built a system that rewards businesses for having real news, and in the same week tightened the screws on businesses that manufacture fake news to feed it. Publish fewer things, make them true, and put a date on them.",
      },
      {
        type: "takeaway",
        text: "Since 28 September, any customer can ask Google to watch the web for things like your business and get pushed an alert when one appears — free, worldwide. Nobody knows exactly how it picks sources, so do not rebuild around it. Do give your business somewhere for real, dated news to live, post it to your profile, mark up your events, get mentioned somewhere that is not your own website, and resist the urge to manufacture the news.",
      },
    ],
  },
  {
    slug: "jev-typesafe-ai-model-that-does-not-talk",
    title:
      "Jev Is an AI That Refuses to Talk. For a Local Business, That Is the Point.",
    description:
      "TypeSafe AI came out of stealth on 15 September with $40M and a model that cannot write a sentence. Jev answers only three kinds of question — pick one, rate this, yes or no — in under half a second, for about $0.00035 a call. Most of what a small business actually wants automated is a decision, not an essay. Here is what it can do, and the four places it will quietly let you down.",
    date: "2026-09-24",
    readTime: "9 min read",
    category: "AI News",
    keywords: [
      "Jev TypeSafe AI model",
      "System One model small business",
      "AI decision model automation cost",
    ],
    relatedService: "ai-automation-agents",
    image: "/photos/insights/jev.jpg",
    imageAlt: "An old control room lined with dials, gauges and switches, with no operator present",
    sources: [
      {
        label: "Wikipedia — Jev (AI model)",
        url: "https://en.wikipedia.org/wiki/Jev_(AI_model)",
      },
      {
        label: "Forbes — This $200 Million Startup Wants To Fix AI's Overconfidence Problem (15 September 2026)",
        url: "https://www.forbes.com/sites/the-prompt/2026/09/15/this-200-million-startup-wants-to-fix-ais-overconfidence-problem/",
      },
      {
        label: "DCVC — TypeSafe emerges from stealth with a new way of doing AI",
        url: "https://www.dcvc.com/news-insights/typesafe-emerges-from-stealth-with-a-new-way-of-doing-ai/",
      },
      {
        label: "Requesty — TypeSafe Jev explained: how it works, LLM differences and API pricing",
        url: "https://www.requesty.ai/blog/typesafe-jev-explained",
      },
      {
        label: "regolo.ai — Jev and system one models: benchmarks, open-source alternatives, and when to use them",
        url: "https://regolo.ai/jev-and-system-one-models-benchmarks-open-source-alternatives-and-when-to-use-them/",
      },
      {
        label: "Alex Molas — Jev can't be calibrated (23 September 2026)",
        url: "https://www.alexmolas.com/2026/09/23/jev-cant-be-calibrated.html",
      },
    ],
    faqs: [
      {
        q: "What is Jev?",
        a: "Jev is an AI model released on 15 September 2026 by TypeSafe AI, a San Francisco lab founded by former OpenAI researcher Diogo Almeida, which came out of stealth the same day with a $40 million seed round led by DCVC at a $200 million valuation. Unlike ChatGPT or Gemini, Jev does not write text. It answers three kinds of question — choose one of these options, score this against a rubric, or yes/no — and returns the answer as a typed value with probabilities and a confidence figure, in roughly 70 to 500 milliseconds.",
      },
      {
        q: "What would a small business actually use it for?",
        a: "Decisions that happen hundreds of times a month and never need a paragraph: is this contact-form submission a real enquiry or spam, which of your services is this message about, is this review angry enough to alert the owner tonight, is this WhatsApp message a booking request, does this after-hours call need escalating. Each of those is a single yes/no or pick-one. At roughly $0.00035 per call, ten thousand of them cost about $3.50 a month.",
      },
      {
        q: "Should I trust its confidence scores?",
        a: "Not out of the box. On 23 September, Alex Molas published a direct challenge to TypeSafe's calibration claim: calibration is a property of a model and a dataset together, not of a model alone, so a model calibrated on the lab's data can be badly miscalibrated on yours. His advice — and it is the right advice — is to treat the numbers as rankings rather than probabilities, measure them against your own labelled examples, and recalibrate before you wire any threshold to an action that matters.",
      },
    ],
    body: [
      {
        type: "p",
        text: "On 15 September, a San Francisco lab called TypeSafe AI came out of two years of stealth with $40 million led by DCVC, a $200 million valuation, and a model that cannot write a sentence. It is called Jev. Ask it a question and you get no paragraph, no explanation, no apology — just a typed value, a set of probabilities, and a confidence figure, in less time than it takes a web page to load. Its founder, Diogo Almeida, helped build InstructGPT, ChatGPT and GPT-4 at OpenAI before leaving in 2024. His summary of what went wrong is worth sitting with: \"We've been optimizing for humans and we're super human at pleasing humans.\"",
      },
      {
        type: "p",
        text: "This matters to a business with one location and four staff more than it might sound. Almost nothing a small business needs automated is an essay. It is a decision — made the same way, hundreds of times a month, by someone who is also trying to serve customers.",
      },
      { type: "h2", text: "Three questions, and that is all" },
      {
        type: "p",
        text: "Jev answers exactly three shapes of question, and refuses everything else:",
      },
      {
        type: "list",
        items: [
          "Choice — pick one of the options I have defined. Returns the pick plus a probability for every option. \"Is this enquiry about plumbing, heating, or a warranty claim?\"",
          "Score — rate this against a rubric I have written out. Returns the level plus probabilities. \"How urgent is this message, from routine to same-day emergency?\"",
          "Noul — yes or no, returned as a probability between 0 and 1. \"Is this person asking to book?\"",
        ],
      },
      {
        type: "p",
        text: "That is the whole product. It cannot write your reply, explain its reasoning, or do arithmetic. It was trained entirely on synthetic data using a method TypeSafe calls reinforcement learning for calibrated decisions — optimising for being right and for knowing how right it is, rather than for sounding good.",
      },
      { type: "h2", text: "The number that changes the arithmetic" },
      {
        type: "p",
        text: "Jev costs $0.042 per million input tokens, and output is free — because there is no output to speak of. In practice that lands at roughly $0.00035 per decision. A hundred thousand requests of a thousand tokens each comes to about $4.20. Independent testing puts median latency at 350–440 milliseconds, against 10–35 seconds for a frontier model asked to reason its way to the same answer. TypeSafe's own benchmarks claim 40–200x faster and 40–400x cheaper, and to the company's credit it says plainly that those workflows were built in-house and the gains \"likely sit at the high end of real-world results\".",
      },
      {
        type: "p",
        text: "Take the honest version and it is still a change of category. Routing every enquiry that reaches your business through an AI used to be something you costed carefully. At a third of a cent a decision, cost stops being the constraint. What is left is the harder question of whether the answer is good enough to act on — which is where most of this article goes.",
      },
      {
        type: "p",
        text: "The name is not decoration, by the way. Jev is named for William Stanley Jevons, the Victorian economist who noticed that making coal cheaper to burn made Britain burn far more of it. TypeSafe is betting the same thing happens to machine judgement.",
      },
      { type: "h2", text: "Five decisions in a local business worth automating" },
      {
        type: "list",
        items: [
          "Spam versus real enquiry on your contact form. A yes/no on every submission, with a confidence figure. Below a threshold you set, it goes to a review folder instead of your inbox — and you stop missing real leads inside a pile of junk.",
          "Which service this is about. A choice across your service list, attached to the enquiry before a human reads it. This is what makes \"all enquiries go to the right person\" possible without a receptionist.",
          "Does this review need the owner tonight. A score against a rubric you write: neutral, unhappy, publicly damaging. Most review alerts are noise; this is the filter that makes you read the ones that are not.",
          "Is this message a booking request. A yes/no on inbound WhatsApp or Instagram messages, so booking-shaped messages get answered first when the queue is forty deep on a Saturday.",
          "Should this after-hours call be escalated. A score on the transcript of a voice agent's call, deciding whether it waits until morning or rings your mobile at 11pm.",
        ],
      },
      {
        type: "p",
        text: "Notice what every one of these has in common. The model is not speaking to your customer. It is sorting, ranking and routing behind the scenes, and a human or a script writes whatever gets sent. That is the safe shape, and it is the shape Jev is built for.",
      },
      { type: "h2", text: "Four ways it will let you down" },
      {
        type: "p",
        text: "This is a two-week-old model. The independent work on it is already unflattering in specific, useful ways, and anyone selling it to you without mentioning these is not on your side.",
      },
      {
        type: "list",
        items: [
          "The confidence number is not a promise. On 23 September, Alex Molas published a careful argument that Jev cannot be calibrated in general, because calibration depends on the data as much as the model — a model calibrated on the lab's distribution can be wrong about its own certainty on yours. He found the same problem posed through different primitives producing inconsistent calibration. Treat the figures as rankings, label a couple of hundred of your own examples, and recalibrate before you attach a threshold to anything that costs money.",
          "It cannot tell you why. There is no rationale, ever. When a customer disputes how their enquiry was handled, or a regulator asks how an automated decision was made, \"the model returned 0.87\" is not an answer. Under the EU AI Act and GDPR that is a genuine compliance problem, not a theoretical one. Keep a human decision in front of anything that affects a person's money or their treatment.",
          "It is sensitive to how you ask. Reversing the order of the options in a choice shifted probabilities from 0.84–0.89 to 0.93–0.96 on identical inputs. Fix your option order and your rubric wording, and re-test when you change them.",
          "It gets noticeably worse in other languages. Measured accuracy drops of around 11 points in Russian, 6.5 in Korean, and 3 to 6 in Spanish, with calibration usually degrading alongside. For any business in Dubai handling Arabic, Hindi, Urdu, Russian and English in the same inbox, this is the single most important line in this article: test in the languages your customers actually write in, not just English.",
        ],
      },
      {
        type: "p",
        text: "One more piece of housekeeping: behaviour changed measurably between releases 1.12 and 1.13. If you build on it, pin the version. A silent model upgrade rewriting how your enquiries get sorted is the kind of problem you discover a month late.",
      },
      { type: "h2", text: "Where this is heading" },
      {
        type: "p",
        text: "Jev is not alone. There is an open-weight replication, a rival model that works by swapping a single URL, an open benchmark tracking dozens of these systems, and lighter open-source options that run in tens of milliseconds on ordinary hardware. That tells you the category is real and that no one is locked in. It also means the honest recommendation today is not \"go and buy Jev\". It is: notice that the decision layer of your business just became almost free, and start listing the decisions.",
      },
      {
        type: "p",
        text: "The chat assistants will keep getting the attention, because they talk and we like being talked to. The models that quietly sort your enquiries, flag your angry reviews and wake you up for the call that matters will not be interesting to read about. They will just mean the business runs when you are asleep.",
      },
      {
        type: "takeaway",
        text: "Jev is a model that answers only pick-one, rate-this, and yes/no — fast, and for about a third of a cent. Most of what a small business wants automated is exactly that shape. Use it to sort and route behind the scenes, never to speak to a customer, test it in every language your customers use, and check its confidence scores against your own data before you trust a single threshold.",
      },
    ],
  },
  {
    slug: "google-business-profile-panel-is-now-an-ai-overview",
    title:
      "Google Is Replacing Your Business Profile Panel With an AI Overview. Here Is What It Will Say About You.",
    description:
      "Since 17 September, searching a business by name on mobile can return an \"AI Overview\" instead of the familiar profile card — a few sentences a model wrote about the shop, with a \"Show more\" that opens an AI Mode chat. Google is now describing businesses in its own words. Here is where those words come from, and how to make sure they are right.",
    date: "2026-09-21",
    readTime: "7 min read",
    category: "Google",
    keywords: [
      "Google Business Profile AI Overview",
      "local knowledge panel AI Overview",
      "AI Overview describing my business",
    ],
    relatedService: "google-business-profile",
    image: "/photos/insights/panel.jpg",
    imageAlt: "Neon sign in a shop window reading Yes, we are open",
    sources: [
      {
        label: "Search Engine Roundtable — Google Local Knowledge Panel Now An AI Overview (17 September 2026)",
        url: "https://www.seroundtable.com/google-local-knowledge-panel-ai-overview-42105.html",
      },
      {
        label: "Search Engine Roundtable — Google AI Summaries Now In Local Knowledge Panels (April 2025)",
        url: "https://www.seroundtable.com/google-ai-review-summaries-local-panels-39166.html",
      },
      {
        label: "Search Engine Roundtable — Google AI Writing Some Search Knowledge Panels (April 2024)",
        url: "https://www.seroundtable.com/google-ai-writing-some-knowledge-panels-37294.html",
      },
      {
        label: "Search Engine Journal — Google Adds Post View Counts To Business Profiles (10 September 2026)",
        url: "https://www.searchenginejournal.com/google-business-profile-post-view-counts/589128/",
      },
      {
        label: "Search Engine Roundtable — Google Business Profiles New Collected Info Actions (June 2026)",
        url: "https://www.seroundtable.com/google-business-profiles-collected-info-41535.html",
      },
    ],
    faqs: [
      {
        q: "What changed in the Google Business Profile panel?",
        a: "On 17 September 2026, Search Engine Roundtable confirmed that Google is showing an \"AI Overview\" in place of the local knowledge panel for some brand-name searches on mobile. Instead of the standard card — hours, phone, photos, reviews — the searcher sees a model-written summary of the business with a \"Show more\" button that opens an AI Mode conversation. It was first shared by Google Business Profile expert Ben Fisher and reproduced independently. It appears to be a live rollout on mobile, not a lab test.",
      },
      {
        q: "Where does Google's AI get the description of my business?",
        a: "From what is already published about you: your website, your Business Profile fields, your reviews, and third-party listings. In the confirmed example, the summary was \"mostly correct\" but repeated outdated details that traced back to old copy on the business's own website. The AI is not inventing your description; it is compressing your public footprint. Stale footprint, stale description.",
      },
      {
        q: "Can I turn the AI Overview off for my business?",
        a: "No. There is no setting in the Business Profile dashboard to opt out of AI-written summaries. What you control is the input: the accuracy of your profile fields, the currency of your website, the substance of your reviews, and — through the Collected Info tab — the details Google's automated assistant has gathered by phone or message. Fix the sources and the summary follows.",
      },
    ],
    body: [
      {
        type: "p",
        text: "For fifteen years, when someone searched your business by name, Google showed them your card: the name you chose, the hours you set, the photos you uploaded, your reviews, a map pin. It was the one place on the internet where the business got to speak in its own fields. Since 17 September, that card is being replaced — for some searches, on mobile — with an \"AI Overview\": a few sentences a model wrote about you, and a \"Show more\" button that opens a chat where the searcher can ask Google anything about your business and get an answer you never wrote.",
      },
      {
        type: "p",
        text: "Search Engine Roundtable's Barry Schwartz confirmed it on his own company's listing after Google Business Profile expert Ben Fisher shared it. His verdict on the AI's description of his business: \"mostly correct\", with outdated details that came from ageing copy on his own website. His reaction is the one every owner should sit with: \"I am not sure I want AI describing my business, when I can.\"",
      },
      { type: "h2", text: "This did not come from nowhere" },
      {
        type: "p",
        text: "Google has been walking towards this for two years. In April 2024 it began labelling AI-written text inside general knowledge panels. In November 2024 it added AI review summaries to Google Maps, and by April 2025 those summaries were on the right-hand panel in Search, with a \"report\" link for when they were wrong. Each step kept the business's own fields underneath. This step puts the AI's paragraph on top and folds the fields behind a button.",
      },
      {
        type: "p",
        text: "The direction matches everything else Google has done this year: AI Mode now sits inside AI Overviews, follow-up questions are the default, and the model answering them is the same one that answers \"best plumber near me\". The brand-name search was the last place a local business was safe from being summarised. It is not any more.",
      },
      { type: "h2", text: "What the AI is actually reading" },
      {
        type: "p",
        text: "The summary is not creative writing. It is compression. The model reads what already exists about your business and writes a paragraph. In practice, that means five sources, in roughly this order of weight:",
      },
      {
        type: "list",
        items: [
          "Your Business Profile fields — category, description, services, attributes, hours. If your services list says three things and you do nine, the AI says three.",
          "Your website — especially the home page and the about page. This is where the confirmed example went wrong: the site still described a niche the company had moved on from, so the AI did too.",
          "Your reviews — not the star average, the text. The AI quotes themes: \"customers mention friendly staff and long waits\". Whatever your last forty reviewers wrote about is now your description.",
          "Third-party listings and mentions — directories, local press, Reddit. Where these disagree with your profile, the AI has to pick, and it will not always pick you.",
          "Collected Info — details Google's own automated assistant gathered by calling, texting or WhatsApping your verified number. Since June there is a tab in the dashboard showing exactly what it recorded and letting you delete anything wrong. Most owners have never opened it.",
        ],
      },
      { type: "h2", text: "The 30-minute check to do this week" },
      {
        type: "p",
        text: "Search your business by name on your phone, in Chrome, signed out. If you get the AI Overview, read it as a customer would and mark every line as right, stale, or missing. Then work backwards to the source of each error:",
      },
      {
        type: "list",
        items: [
          "Stale service or specialism → your website's home or about page still says it. Rewrite the page. The AI re-reads it within weeks.",
          "Wrong hours, phone or address → open Business Profile, Edit profile, Collected info. If the automated assistant recorded it, delete it there and correct the field. Then check the same detail on Apple Maps, Bing, Yelp and your Facebook page; one disagreement is enough to reintroduce it.",
          "A theme in the summary you would rather not lead with (\"long waits\") → that is your reviews talking. It cannot be edited; it can be outweighed. Ask your next twenty happy customers to mention the specific thing you want to be known for.",
          "A service you offer that the AI never mentions → it is not on your profile's services list, not a heading on your site, and not in a review. Add it in all three places. The AI needs to see it more than once to say it.",
          "The description is fine but thin → your profile's description field is probably empty or generic. Write 500 characters that say what you do, for whom, where, and what makes you the obvious choice. That field is one of the first things the model reads.",
        ],
      },
      { type: "h2", text: "Two small things that arrived in the same fortnight" },
      {
        type: "p",
        text: "On 10 September Google restored view counts to Business Profile posts — retired in 2023, now back on every post card, covering the last 18 months across Search and Maps. It is the first time in three years you can see whether anyone reads what you post. And the Collected Info tab, spotted in June, is now widely available. Together they mean the profile is no longer a form you fill in once. It is a feed the AI reads continuously, and Google has just handed you two instruments to see what it is reading.",
      },
      {
        type: "takeaway",
        text: "Google is now describing your business in its own words, and those words are compressed from your website, your profile fields, your reviews, and what its assistant recorded when it called you. None of that is out of your hands. Search your name on your phone this week, read what the AI says, and fix the source of every line that is wrong.",
      },
    ],
  },
  {
    slug: "sequoia-kleiner-bet-180m-on-ai-visibility-free-tracking-sheet",
    title:
      "Sequoia and Kleiner Just Paid $1.8 Billion for \"Showing Up in AI Answers\". Here Is the Free Version.",
    description:
      "Profound, which helps brands appear in ChatGPT and other AI answers, raised $180M on 15 September at a $1.8B valuation. Its customers are Walmart, Comcast and Estée Lauder. The signals it tracks for them are the same ones a local business can track for itself in a spreadsheet — this article gives you the sheet.",
    date: "2026-09-20",
    readTime: "8 min read",
    category: "Investors",
    keywords: [
      "Profound AI visibility funding",
      "track AI visibility local business",
      "AI search visibility spreadsheet",
    ],
    relatedService: "ai-search-optimization",
    image: "/photos/insights/invest.jpg",
    imageAlt: "City with high-rise buildings at night",
    sources: [
      {
        label: "TechCrunch — AEO startup Profound hits unicorn valuation, raises $180M Series D",
        url: "https://techcrunch.com/2026/09/15/aeo-startup-profound-hits-unicorn-valuation-raises-180m-series-d-7-months-after-last-round/",
      },
      {
        label: "Bloomberg — Profound Hits $1.8 Billion Value to Boost Brands in AI Search",
        url: "https://www.bloomberg.com/news/articles/2026-09-15/profound-hits-1-8-billion-value-to-boost-brands-in-ai-search",
      },
      {
        label: "SiliconANGLE — Profound raises $180M to boost brands' visibility in AI services",
        url: "https://siliconangle.com/2026/09/15/profound-raises-180m-to-boost-brands-visibility-in-ai-services/",
      },
      {
        label: "Crunchbase News — The Week's 10 Biggest Funding Rounds (18 September 2026)",
        url: "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-space-fintech-temporal/",
      },
    ],
    faqs: [
      {
        q: "What does Profound do?",
        a: "Profound is marketing software that helps brands appear more often in AI answers. It identifies the prompts a brand's buyers type into ChatGPT and similar assistants, measures how often the brand is mentioned in the responses, and helps the brand change what it publishes to be mentioned more. It raised $180 million on 15 September 2026 at a $1.8 billion valuation, led by Sequoia Capital and Kleiner Perkins, and has more than 1,000 enterprise customers.",
      },
      {
        q: "Can a small business track its AI visibility without paying for software?",
        a: "Yes. The core of what enterprise tools do is: pick the questions your customers ask, run them in ChatGPT, Gemini and Perplexity on a schedule, and record which businesses are named. A spreadsheet with five queries, three assistants and a monthly row does the job for a local business. The article includes the exact columns.",
      },
      {
        q: "Why does it matter that investors funded this?",
        a: "Because Sequoia and Kleiner Perkins do not fund categories they think are temporary. A $1.8 billion valuation for software that does nothing except get brands mentioned by AI is a statement that being named in AI answers is now a permanent, measurable part of marketing — and the enterprise side of the market has already started paying for it.",
      },
    ],
    body: [
      {
        type: "p",
        text: "On 15 September, a company called Profound raised $180 million at a $1.8 billion valuation, led by Sequoia Capital and Kleiner Perkins. Profound does one thing: it helps brands show up in AI answers. It finds the prompts a brand's customers type into ChatGPT, measures how often the brand is mentioned in the replies, and helps the brand change what it publishes so it gets mentioned more. It has more than 1,000 enterprise customers, including Walmart, Comcast and Estée Lauder, and tripled its revenue in the last six months. This round came less than seven months after its last one.",
      },
      {
        type: "p",
        text: "Two of the most disciplined investors in the world just priced \"being named by AI\" as a category. That is the news. The thing worth acting on is what it means for everyone who is not Walmart.",
      },
      { type: "h2", text: "What the money is actually saying" },
      {
        type: "p",
        text: "Venture firms do not write $180 million cheques for a tactic. They write them for a shift they believe is permanent. Profound's round says that a meaningful share of buying decisions now start with a question to an AI assistant rather than a search, that the brands named in the answer win those decisions, and that the largest companies have noticed and are paying to be named. The week's ten largest rounds, per Crunchbase, were dominated by AI infrastructure and enterprise tooling. Profound was the only one aimed squarely at the question this site exists for.",
      },
      {
        type: "p",
        text: "Here is the uncomfortable part for a local business. Walmart can afford to hire a unicorn to be recommended by ChatGPT. The dentist competing with a chain, the independent plumber competing with a franchise — they are up against businesses that now have a dedicated budget for exactly the thing most local owners have never heard of. The gap between the 1.2% of businesses AI recommends and everyone else is about to be widened by money.",
      },
      { type: "h2", text: "What the software measures, and why you can do it yourself" },
      {
        type: "p",
        text: "Strip away the dashboards and enterprise tooling like Profound does three things. It decides which questions matter — the prompts a customer would actually type. It runs those questions against the assistants, repeatedly, and records who is named. And it changes what the brand publishes to move those numbers. At enterprise scale, across thousands of prompts and dozens of markets, that needs software. For one local business in one city, it needs about five questions, three assistants, and twenty minutes a month.",
      },
      { type: "h2", text: "The free version: an AI visibility tracking sheet" },
      {
        type: "p",
        text: "Open a spreadsheet. Make these columns, in this order, and fill in one row per query per assistant, once a month.",
      },
      {
        type: "list",
        items: [
          "Date — the day you ran it. Consistency matters more than the day itself; pick the first Monday of the month.",
          "Query — the exact wording. Use five: \"best [your service] in [city]\", \"[your service] near me\" (with location on), \"who should I use for [your service] in [city]\", \"[your service] [city] reviews\", and one specific to your speciality, e.g. \"emergency [your service] [city]\".",
          "Assistant — ChatGPT, Gemini, Perplexity. Run each query in all three. Add Google's AI Mode if you want a fourth.",
          "Named? — Yes or No. Were you mentioned at all, anywhere in the answer.",
          "Position — if named, were you first, second, third. If not named, leave blank. Voice assistants tend to read only the first.",
          "Who was named — the businesses that appeared, in order. This column is your real competitor list, and it will not match your Google map pack.",
          "Cited sources — what the assistant linked to or referenced: Yelp, Google, Reddit, a directory, a competitor's site. This tells you where the evidence lives and where yours is missing.",
          "Notes — anything the answer got wrong about you (hours, phone, services). Every error here is a listing inconsistency somewhere on the web.",
        ],
      },
      {
        type: "p",
        text: "Fifteen rows a month. After three months you have a trend line no agency can argue with: the share of queries where you are named, the share where you are first, and the exact competitors and sources that keep beating you. That trend line is what Profound sells to Walmart. Yours costs a spreadsheet.",
      },
      { type: "h2", text: "What to do when the sheet says No" },
      {
        type: "list",
        items: [
          "If the assistant named competitors and cited Yelp or a directory you are not on — get on it, with details identical to your Google profile.",
          "If it cited Reddit — find the thread. Someone in your city is recommending businesses to your customers, and you are not in the conversation.",
          "If it got your hours or phone wrong — that is a listing somewhere disagreeing with your website. Fix the listing, not the AI.",
          "If it named nobody with a rating below 4.3 — reviews are the gate. Fix the ask, not the number.",
          "If it named you but low — you have the evidence, and it is thin. More substantive reviews and a real service page usually move position within a quarter.",
        ],
      },
      {
        type: "takeaway",
        text: "Sequoia and Kleiner just confirmed that being named by AI is a market worth $1.8 billion. The enterprise version needs software. The local version needs five questions, three assistants, and the honesty to write down who got named instead of you.",
      },
    ],
  },
  {
    slug: "siri-runs-on-gemini-voice-search-local-business",
    title:
      "Siri Now Runs on Google Gemini. When Customers Ask Out Loud, Only One Business Gets Named.",
    description:
      "In one week: iOS 27 shipped a rebuilt Siri that routes hard questions to Google's Gemini, Google released Gemini 3.8 Live for real-time voice, and OpenAI's GPT-Live reached its API. Voice answers don't give a list. They give a name. Here is what that means for a local business, and what it costs to be on the other end of the call.",
    date: "2026-09-17",
    readTime: "7 min read",
    category: "AI News",
    keywords: [
      "Siri Gemini local business",
      "voice search local business 2026",
      "AI voice assistant recommendations",
    ],
    relatedService: "ai-search-optimization",
    image: "/photos/insights/voice.jpg",
    imageAlt: "Woman talking on an iPhone",
    sources: [
      {
        label: "AI News — Siri AI arrives with Google inside, and much of the world is locked out",
        url: "https://www.artificialintelligence-news.com/news/siri-ai-google-gemini-rollout/",
      },
      {
        label: "The Eastern Herald — iOS 27 arrives Monday: Apple's rebuilt Siri runs on Google Gemini",
        url: "https://easternherald.com/2026/09/13/ios-27-siri-google-gemini-apple-launch/",
      },
      {
        label: "CNBC — Apple picks Google's Gemini to run AI-powered Siri",
        url: "https://www.cnbc.com/2026/01/12/apple-google-ai-siri-gemini.html",
      },
      {
        label: "AI Weekly — AI News for September 16, 2026 (Gemini 3.8 Live)",
        url: "https://aiweekly.co/ai-news-today/edition/2026-09-16",
      },
      {
        label: "Build Fast with AI — AI News Today, September 16, 2026 (GPT-Live, Gemini 3.8 Live pricing)",
        url: "https://blog.buildfastwithai.com/ai-news-today-september-16-2026",
      },
    ],
    faqs: [
      {
        q: "Does Siri use Google Gemini now?",
        a: "Yes. iOS 27, released 14 September 2026, ships a rebuilt Siri that handles simple requests on the device and routes anything more complex to a custom version of Google's Gemini, under a deal reported at around $1 billion a year. ChatGPT remains available as a separate opt-in fallback. The advanced features need an iPhone 15 Pro or newer and a paid iCloud+ plan, and the rollout excludes the EU for now.",
      },
      {
        q: "How is a voice recommendation different from a search result?",
        a: "A search result is a list; a voice answer is a sentence. When someone asks a phone out loud for a plumber, the assistant names one or two businesses, not ten. Voice is therefore the most selective discovery channel that has ever existed, and the evidence that gets a business chosen — consistent details, substantive reviews, structured content, third-party mentions — matters more, not less.",
      },
      {
        q: "What does an AI voice agent for a business cost now?",
        a: "Google's Gemini 3.8 Live, released 15 September, is priced at $0.005 per minute of audio in and $0.018 per minute out — roughly $1.38 an hour of continuous conversation. That is the raw model cost; a working receptionist adds telephony and integration on top. It is still a fraction of a part-time salary, and it answers at 3am.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Since Monday, when an iPhone owner asks Siri a question it cannot answer on the device, the question goes to Google's Gemini. iOS 27 shipped on 14 September with a rebuilt Siri that holds a real conversation, reads the user's mail and messages for context, pulls live answers from the web and carries out tasks across apps — with Gemini doing the heavy reasoning under a deal reported at about $1 billion a year. The next day Google released Gemini 3.8 Live, a real-time voice model that can talk while it reasons and calls tools. OpenAI's GPT-Live had reached its API the week before. In seven days, talking to a machine stopped being a novelty and became the default interface on the most widely used phone in the United States.",
      },
      {
        type: "p",
        text: "For a local business the implication is narrower and sharper than \"AI is coming\". It is this: a growing share of the people looking for you will ask a question out loud and get a spoken answer. And a spoken answer does not contain a list.",
      },
      { type: "h2", text: "Why voice is the most selective channel yet" },
      {
        type: "p",
        text: "Type \"dentist near me\" and you get a map with three pins, ten blue links and an AI Overview citing a few more. Say \"find me a dentist\" to a phone and you get something like: \"Cherry Creek Dental has a 4.9 rating and openings tomorrow — want me to book it?\" One name. Perhaps two. Nobody reads a list aloud. Every channel that already existed — Google's map pack, ChatGPT's recommendations, AI Overviews — was already narrowing the field. Voice narrows it to one, and the person asking never sees who came second.",
      },
      {
        type: "p",
        text: "The assistant picks that one name the same way ChatGPT and Google's AI already pick theirs: from evidence it can verify. Business details that match across every listing. Reviews with enough substance to say what the business is actually good at. A website with real content and structured data that states what it does and where. Mentions on sites the business does not control. Nothing about that list is new. What is new is that the penalty for failing it just went from \"lower on the page\" to \"not mentioned at all\".",
      },
      { type: "h2", text: "The details that decide a spoken answer" },
      {
        type: "list",
        items: [
          "A rating and a review count the assistant can read out. Voice answers lean on the numbers because they are easy to say. A business with no rating has nothing to be said about it.",
          "Hours and availability that are correct right now. \"Are they open?\" is the first follow-up, and an assistant that finds three different sets of hours will pick the business whose hours it trusts.",
          "A name that is unambiguous when spoken. If your business shares a name with a chain or a different trade in the same city, the assistant needs a location and category signal to disambiguate — and if it cannot, it will not risk the wrong answer.",
          "Something bookable. iOS 27's Siri carries out tasks across apps. \"Book it\" only works if there is a booking flow to complete. A phone-number-only website ends the conversation with \"you'll need to call them\".",
          "Consistent structured data. LocalBusiness and Service schema is the closest thing to a spec sheet an assistant gets. It is how the model confirms the category, the area and the offer before it says your name.",
        ],
      },
      { type: "h2", text: "The other end of the call" },
      {
        type: "p",
        text: "There is a second half to this week's news, and it is the part most coverage skipped. Gemini 3.8 Live is priced at $0.005 a minute of audio in and $0.018 a minute out — about $1.38 an hour of continuous conversation. GPT-Live shipped to OpenAI's API without a published price and, at least on Artificial Analysis's speech-to-speech leaderboard, ranks below Gemini's Extended Thinking variant at 82.6. Those are the raw costs of a voice that can answer a phone, understand what is being asked, check a calendar and book. Telephony and integration sit on top, but the model itself is now cheaper per hour than a cup of coffee.",
      },
      {
        type: "p",
        text: "Put the two halves together. A customer's phone will increasingly ask for a business by voice and try to book it. A business can now, for the first time at small-business prices, have a voice on the other end that picks up every time, at any hour, and completes the booking. The businesses that get named will be the ones with the evidence; the ones that convert the naming into a job will be the ones that answer.",
      },
      { type: "h2", text: "What to be sceptical about" },
      {
        type: "p",
        text: "Three things. The new Siri's advanced features require an iPhone 15 Pro or newer and a paid iCloud+ subscription, so the installed base is smaller than \"every iPhone\" suggests. The rollout skips the EU entirely for now. And people have been promised a useful Siri before. Adoption of voice for local discovery will be gradual, and the early numbers will be small. But the direction has been set by the two companies that control the phone and the search engine, on the same week, and the evidence a business needs in order to be named by voice is identical to what it needs for ChatGPT, Perplexity and AI Overviews today. There is no separate preparation. There is just doing the work sooner.",
      },
      {
        type: "takeaway",
        text: "A search result gives ten businesses a chance. A spoken answer gives one. This week the phone in most customers' pockets started giving spoken answers, and the model behind them costs a business less than $1.40 an hour to talk back.",
      },
    ],
  },
  {
    slug: "meta-muse-whatsapp-agent-can-it-book-your-business",
    title:
      "Meta Just Put a Buying Agent Inside WhatsApp. Can It Book Your Business?",
    description:
      "Meta's Muse, launched 8 September, is a personal AI agent that lives in WhatsApp and books, fills forms, negotiates and buys on a person's behalf — and keeps working after they close the chat. The next customer who asks it for a plumber will never see a search results page.",
    date: "2026-09-15",
    readTime: "6 min read",
    category: "AI News",
    keywords: [
      "Meta Muse WhatsApp",
      "AI agent books appointments",
      "AI agents local business",
    ],
    relatedService: "ai-automation-agents",
    image: "/photos/insights/muse.jpg",
    imageAlt: "Person typing into a form on a smartphone",
    sources: [
      {
        label: "Meta — Introducing Muse: The World's First Personal AI Agent Built for Everyone",
        url: "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/",
      },
      {
        label: "TechCrunch — Meta debuts its Muse AI agent. Will consumers trust it?",
        url: "https://techcrunch.com/2026/09/08/meta-debuts-its-muse-ai-agent-will-consumers-trust-it/",
      },
      {
        label: "The National — What is Meta's Muse AI agent?",
        url: "https://www.thenationalnews.com/future/technology/2026/09/08/meta-muse-ai-agent/",
      },
      {
        label: "Axios — Meta debuts Muse, its long-planned personal AI agent",
        url: "https://www.axios.com/2026/09/08/meta-debuts-muse-personal-ai-agent",
      },
    ],
    faqs: [
      {
        q: "What is Meta Muse?",
        a: "Muse is a personal AI agent Meta launched on 8 September 2026. It lives inside WhatsApp and a standalone app, and it can send emails, book travel, fill out web forms, negotiate prices and complete purchases on a person's behalf. Give it an open-ended goal and it builds a plan and keeps working on it after the chat is closed.",
      },
      {
        q: "Is Muse available for businesses?",
        a: "At launch Muse is a consumer product, rolling out in the United States to users aged 18 and over, with a free tier and paid plans at $20 and $100 a month. There is no business-side product yet. What matters for a business is the other direction: whether an agent acting for a customer can find you, verify you and complete a booking on your site.",
      },
      {
        q: "How does a local business get chosen by an AI agent?",
        a: "The same way it gets recommended by ChatGPT or Google's AI: consistent name, address, phone and hours everywhere; substantive recent reviews; structured data that states plainly what you offer and where; and mentions on third-party sites. Plus one more thing an agent specifically needs — a website it can actually act on, with a booking or enquiry form it can complete.",
      },
    ],
    body: [
      {
        type: "p",
        text: "On 8 September Meta launched Muse, which it calls the world's first personal AI agent built for everyone. It lives inside WhatsApp. You tell it what you want — book a table, find a plumber, get three quotes for a bathroom — and it goes and does it: fills in the forms, sends the emails, negotiates the price, completes the purchase, and carries on working after you have closed the chat. For a local business, the important word in that sentence is not \"agent\". It is \"WhatsApp\".",
      },
      {
        type: "p",
        text: "WhatsApp is where a large share of local commerce already happens, especially outside the United States. Meta has just put an assistant in the same window that can act on a customer's behalf. Muse is US-only at launch, for adults, with a free tier and $20 and $100 monthly plans for heavier use. But the direction is not in doubt, and Meta is not the only one building this.",
      },
      { type: "h2", text: "What changes when the customer stops searching" },
      {
        type: "p",
        text: "Until now, a person looking for a dentist typed a query, looked at a list, opened a few websites, and picked one. Every step in that process was a place where a business could be seen. An agent collapses it. The person says \"book me a dental cleaning this week\", and the agent decides who to call, checks availability, and books. The customer sees one confirmation. They never see the list, the map pack, or your competitor's website — or yours.",
      },
      {
        type: "p",
        text: "So the question is no longer \"do we rank\" but \"would an agent pick us, and could it complete the job if it did\". Those are two different tests, and most local businesses currently fail both.",
      },
      { type: "h2", text: "Test one: would an agent choose you?" },
      {
        type: "p",
        text: "Agents choose the way AI assistants already recommend: on evidence they can verify. Name, address, phone and hours that match across every listing. Reviews with enough substance to say what you are actually good at. A website with real content and structured data that states plainly what you do and where. Mentions on sites you do not control. This is the same work that gets a business into ChatGPT's answers, and the same 1.2% of businesses currently pass it.",
      },
      { type: "h2", text: "Test two: could an agent complete the booking?" },
      {
        type: "p",
        text: "This is the new part. An agent that has picked you still has to act. If your website has an online booking form, it books. If it has a quote request form, it submits one. If it has a phone number and nothing else, the agent either calls — and reaches voicemail at 9pm — or moves to the competitor whose site it can operate. A business that cannot be booked by a machine will, increasingly, not be booked.",
      },
      {
        type: "list",
        items: [
          "Online booking on the website, wired to a real calendar, not a form that emails someone to call back.",
          "Forms that are plain HTML, clearly labelled, and work without a human interpreting them. Agents fill forms; they do not decode them.",
          "Structured data — LocalBusiness, Service, FAQPage — so the agent can confirm what it is booking before it books.",
          "An answer on the other end. If the agent calls, something should pick up. An AI receptionist that books directly is, for the first time, talking to a peer.",
          "Consistent details everywhere. An agent that finds two different phone numbers for you will not guess. It will pick the business with one.",
        ],
      },
      { type: "h2", text: "The part worth being sceptical about" },
      {
        type: "p",
        text: "TechCrunch's launch coverage asked the right question: will consumers trust an agent with their card and their inbox? Early adoption will be slower than the announcement suggests, and Muse is one product in one country. But every major platform is building the same thing, WhatsApp already has the audience, and the businesses that are bookable by an agent today are the ones that will be default choices when the behaviour becomes normal. Being early to this is cheap. Being late is not.",
      },
      {
        type: "takeaway",
        text: "For a decade, local marketing was about being seen by a person. It is becoming about being chosen by an agent and bookable by a machine. The evidence that gets you chosen is the same. The booking flow is the new requirement.",
      },
    ],
  },
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
