import { promptGroups } from "@/content/prompts";
import { BlurFade } from "@/components/motion/blur-fade";
import { PillLink } from "@/components/ui/pill-link";

const COUNT = promptGroups.reduce((n, g) => n + g.prompts.length, 0);
const FIRST = promptGroups[0].prompts[0];

/** The giveaway, surfaced on the home page with the first prompt shown in full. */
export function PromptPackTeaser() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <BlurFade>
          <p className="text-sm text-muted-foreground">Free · no sign-up</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.12] sm:text-4xl lg:text-5xl">
            {COUNT} prompts we use in the first hour of every audit.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Paste them into ChatGPT or Perplexity. Find out whether AI recommends
            you, write a profile that ranks, get reviews with substance, and build
            content AI can cite. Yours to keep.
          </p>
          <div className="mt-8">
            <PillLink href="/free-tools">Get the Prompt Pack</PillLink>
          </div>
        </BlurFade>

        <BlurFade delay={0.15}>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="text-sm text-muted-foreground">01.1 · {FIRST.where}</p>
            <p className="mt-2 font-display text-xl">{FIRST.title}</p>
            <pre className="mt-5 whitespace-pre-wrap rounded-xl bg-background p-5 font-sans text-[15px] leading-relaxed text-foreground/85">
              {FIRST.prompt}
            </pre>
            <p className="mt-4 text-xs text-muted-foreground">
              Run this in three assistants. Whoever gets named is your real competition.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
