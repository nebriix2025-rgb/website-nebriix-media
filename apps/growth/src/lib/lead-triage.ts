import { services } from "@/content/site";
import { choice, jevDecide, noul, score, type JevResponse } from "@/lib/jev";

/**
 * Classifies an inbound lead before it reaches the webhook.
 *
 * Everything a lead form needs decided is a decision, not an essay — which is
 * which service, how urgent, is this real — so it is one Jev call rather than
 * a language model writing a paragraph we would then have to parse. One
 * request, four answers, roughly a third of a cent, well under a second.
 *
 * The output is advisory. It rides along in the webhook payload as a `triage`
 * object so the automation can route and prioritise; it never decides whether
 * a lead is delivered. See the spam note below.
 */

export type Triage = {
  /** Service slug the enquiry most likely belongs to, from the live list. */
  service: string;
  serviceConfidence: number;
  /**
   * Position on the URGENCY scale below, low to high. Can fall between levels.
   * Whether the API indexes levels from 0 or 1 is not documented, so sort and
   * threshold on this number and show `urgencyLabel` — which comes from the
   * response's own legend — rather than mapping the number yourself.
   */
  urgency: number;
  urgencyLabel: string | null;
  /** Position on the FIT scale below, low to high. Same caveat as urgency. */
  fit: number;
  fitLabel: string | null;
  /** Probability this is junk. Advisory only — see below. */
  junkProbability: number | null;
  model: string;
};

const URGENCY = [
  "Just reading, no stated need",
  "Researching a problem for later",
  "Has a specific problem now and is comparing options",
  "Ready to buy — asking about starting, pricing or availability",
];

const FIT = [
  "Not a business we serve — student, job seeker, vendor pitching us, or unrelated",
  "A business, but outside what we do",
  "A local or multi-location business that we can help",
  "Ideal: a local business with a physical presence competing on local discovery",
];

/** Built from the live services list so routing can't drift from the site. */
function serviceCriteria(): Record<string, string> {
  const criteria: Record<string, string> = {};
  for (const s of services) criteria[s.slug] = s.oneLiner;
  criteria["general"] =
    "No clear single service, or a general enquiry about working together";
  return criteria;
}

export async function triageLead(
  kind: string,
  values: Record<string, string>,
): Promise<Triage | null> {
  // Field labels are included so the model reads a form, not a blob.
  const state = [
    `Enquiry type: ${kind}`,
    ...Object.entries(values)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`),
  ].join("\n");

  const result: JevResponse | null = await jevDecide(state, {
    service: {
      type: "choice",
      instructions:
        "This is an enquiry to a local-business growth agency. Which single service does it most likely concern?",
      criteria: serviceCriteria(),
    },
    urgency: {
      type: "score",
      instructions: "How close is this person to needing work done?",
      criteria: URGENCY,
    },
    fit: {
      type: "score",
      instructions:
        "How well does the sender match a business this agency can genuinely help?",
      criteria: FIT,
    },
    junk: {
      type: "noul",
      instructions: "Is this submission junk rather than a real enquiry?",
      criteria: {
        true: "Automated spam, gibberish, an SEO or outsourcing pitch aimed at us, or a test submission",
        false:
          "A real person enquiring, even if brief, vague or imperfectly written",
      },
    },
  });

  if (!result) return null;

  const service = choice(result, "service");
  const urgency = score(result, "urgency");
  const fit = score(result, "fit");

  // A missing core answer means the shape isn't what we expect; drop the whole
  // thing rather than ship a half-filled object the automation might trust.
  if (!service || !urgency || !fit) return null;

  return {
    service: service.value,
    serviceConfidence: service.confidence,
    urgency: urgency.value,
    urgencyLabel: urgency.label,
    fit: fit.value,
    fitLabel: fit.label,
    junkProbability: noul(result, "junk"),
    model: result.model,
  };
}
