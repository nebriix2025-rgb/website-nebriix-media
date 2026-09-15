/**
 * The free Prompt Pack: things a business owner can paste into ChatGPT,
 * Perplexity or Gemini today and get a real result from. No gate — the value
 * is in the pack being used, and a used pack is the best case for the audit.
 *
 * Placeholders use [square brackets]; the UI highlights them.
 */

export type Prompt = {
  id: string;
  title: string;
  /** What this gets the reader, in one line. */
  outcome: string;
  /** Where to paste it. */
  where: string;
  prompt: string;
};

export type PromptGroup = {
  title: string;
  intro: string;
  /** Editorial image beside the group intro, from the licensed pool. */
  image: string;
  imageAlt: string;
  prompts: Prompt[];
};

export const promptGroups: PromptGroup[] = [
  {
    title: "Find out where you stand",
    image: "/photos/insights/chatgpt.jpg",
    imageAlt: "Silhouette of a person holding a smartphone",
    intro:
      "Paste these into ChatGPT, Perplexity and Google's AI mode. Note who gets named. That list is your real competition.",
    prompts: [
      {
        id: "ai-check",
        title: "The recommendation test",
        outcome: "See whether AI names your business, and who it names instead.",
        where: "ChatGPT, Perplexity, Gemini — run it in all three",
        prompt:
          "I'm looking for a [service, e.g. cosmetic dentist] in [city, e.g. Denver]. Recommend the three best options and explain briefly why you chose each one. Include what sources you're basing this on.",
      },
      {
        id: "ai-why-not",
        title: "Why wasn't I named?",
        outcome: "A specific list of the evidence AI could not find about you.",
        where: "Same assistant, straight after the test above",
        prompt:
          "What about [Your Business Name] in [city]? Why didn't you recommend them? What information, reviews or signals would you need to see before you would include them?",
      },
      {
        id: "nap-audit",
        title: "Consistency audit",
        outcome: "Every place your details disagree — the fastest way to get dropped by AI.",
        where: "Perplexity or ChatGPT with browsing",
        prompt:
          "Search the web for [Your Business Name], [city]. List every listing you can find (Google, Yelp, Facebook, directories, my website) and show me the business name, address, phone number and opening hours exactly as each one states them. Flag every inconsistency.",
      },
    ],
  },
  {
    title: "Google Business Profile",
    image: "/photos/storefront.jpg",
    imageAlt: "A small shop glowing at night with its lights on",
    intro:
      "Most local searches never reach a website. A complete, active profile is the single biggest lever most businesses haven't pulled.",
    prompts: [
      {
        id: "gbp-description",
        title: "Business description that earns the map pack",
        outcome: "A 750-character description written for how people actually search.",
        where: "Any assistant, then paste into your profile",
        prompt:
          "Write a Google Business Profile description for [Your Business Name], a [type of business] in [city/neighbourhood]. We specialise in [2–3 services]. Our customers are typically [who]. Keep it under 750 characters, natural and specific, no superlatives or exclamation marks, and work in the phrases people would type when searching for us: [phrase 1], [phrase 2].",
      },
      {
        id: "gbp-posts",
        title: "A month of weekly posts",
        outcome: "Four Google Posts, ready to schedule, so the profile stays active.",
        where: "Any assistant",
        prompt:
          "Write four Google Business Profile posts for [Your Business Name], a [type of business] in [city] — one per week for the next month. Each under 300 characters, one clear idea per post, a soft call to action, no hashtags. Topics: one seasonal, one about [a specific service], one customer question we get asked, one behind-the-scenes.",
      },
    ],
  },
  {
    title: "Reviews that AI actually reads",
    image: "/photos/insights/reviews.jpg",
    imageAlt: "Customer looking at her phone inside a cafe",
    intro:
      "Review substance matters about six times more than review count for AI visibility. The ask decides what you get.",
    prompts: [
      {
        id: "review-request",
        title: "The review request that gets detail",
        outcome: "A text message that produces a paragraph instead of 'great service, 5 stars'.",
        where: "Any assistant, then send by SMS or email after every job",
        prompt:
          "Write a short, friendly text message asking a customer of [Your Business Name] to leave a Google review. Instead of asking for 'a review', ask two specific questions: what we did for them, and how it turned out. Mention it takes two minutes. Under 320 characters. Include a placeholder for the review link.",
      },
      {
        id: "review-reply",
        title: "Reply to a negative review",
        outcome: "A calm, specific response that helps your profile more than the review hurt it.",
        where: "Any assistant",
        prompt:
          "A customer left this review of [Your Business Name]: \"[paste the review]\". Write a public reply from the owner. Acknowledge the specific issue, don't argue or make excuses, say concretely what we've done or will do about it, and invite them to contact us directly. Under 120 words, no defensiveness, no marketing language.",
      },
    ],
  },
  {
    title: "Content that gives AI something to cite",
    image: "/photos/insights/schema.jpg",
    imageAlt: "Computer screen displaying HTML",
    intro:
      "A one-page site with 500 characters of text gives an AI nothing to work with. These build the pages it can actually quote.",
    prompts: [
      {
        id: "service-page",
        title: "A service page outline",
        outcome: "The structure of a page that can rank for a real search, not just 'Services'.",
        where: "Any assistant",
        prompt:
          "Outline a web page for '[specific service, e.g. Emergency Plumbing] in [city]' for [Your Business Name]. Include: an H1 that matches how people search, an opening paragraph that answers 'what do you do and for whom' in two sentences, H2 sections covering process, pricing approach, service area, and why us, and a list of 6 questions customers actually ask about this service with a two-sentence answer for each. Plain language, no filler.",
      },
      {
        id: "faq-generator",
        title: "The questions people actually ask",
        outcome: "An FAQ block written answer-first, the format AI engines quote.",
        where: "Any assistant",
        prompt:
          "List the 10 questions someone in [city] is most likely to ask before hiring a [type of business]. For each, write a direct answer of two or three sentences that a business owner could publish — the answer in the first sentence, then the reason. Write for [Your Business Name], which [one line about what makes you different].",
      },
    ],
  },
  {
    title: "Be mentioned where AI looks",
    image: "/photos/insights/reddit.jpg",
    imageAlt: "Neighbours on stools outside a local shop, talking",
    intro:
      "Around 60% of AI citations go to sites you don't own — Reddit most of all. Participation, not advertising.",
    prompts: [
      {
        id: "reddit-find",
        title: "Find the conversations",
        outcome: "The subreddits and threads where your customers already ask for recommendations.",
        where: "Perplexity or ChatGPT with browsing",
        prompt:
          "Find active Reddit communities for [city] and for [industry]. Then find recent threads in them where people ask for recommendations for a [type of business] or ask questions a [type of business] could answer well. List the subreddit, thread title and link for each.",
      },
      {
        id: "reddit-answer",
        title: "A genuinely useful answer",
        outcome: "A reply that helps, gets upvoted, and doesn't get you banned.",
        where: "Any assistant, then post it yourself",
        prompt:
          "Someone on Reddit asked: \"[paste the question]\". I run [Your Business Name], a [type of business] in [city]. Write a reply that genuinely answers their question with specific, useful advice from a professional's point of view. Do not pitch my business, do not include a link, and only mention what I do if it's natural to say why I know this. Conversational, under 150 words.",
      },
    ],
  },
];
