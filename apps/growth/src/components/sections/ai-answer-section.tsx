import { AiAnswerMock } from "@/components/sections/ai-answer-mock";
import { BlurFade } from "@/components/motion/blur-fade";
import { TextReveal } from "@/components/motion/text-reveal";

/**
 * The AI-answer mock, given its own beat. In the paires-style hero nothing
 * competes with the headline, so this moves to first position below it —
 * still the first thing a visitor reaches after the fold.
 */
export function AiAnswerSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
        <div>
          <TextReveal
            text="Ask an AI for a business like yours. Listen for your name."
            as="h2"
            className="max-w-xl font-display text-4xl leading-[1.12] sm:text-5xl"
          />
          <BlurFade delay={0.15}>
            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              ChatGPT, Google AI and Perplexity recommend a handful of businesses
              per query. They pick from the evidence they can verify: reviews,
              listings, real website content. Most local businesses have given
              them nothing to work with.
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.2}>
          <AiAnswerMock />
        </BlurFade>
      </div>
    </section>
  );
}
