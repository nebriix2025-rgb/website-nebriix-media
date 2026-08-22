import { howItWorks } from "@/content/site";
import { BlurFade } from "@/components/motion/blur-fade";
import { SectionHeading } from "@/components/sections/section-heading";

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          title="How it works"
          description="Three steps. No jargon, no retainer you cannot explain to your accountant."
        />

        <ol className="mt-16 grid gap-8 lg:grid-cols-3">
          {howItWorks.map((step, i) => (
            <li key={step.number}>
              <BlurFade delay={i * 0.1} className="h-full">
                <div className="group relative h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40">
                  <span className="font-mono text-xs tracking-widest text-primary">
                    {step.number}
                  </span>
                  <h3 className="mt-6 font-display text-2xl leading-snug tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </BlurFade>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
