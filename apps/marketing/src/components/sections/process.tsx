import { process } from "@/content/site";
import { BlurFade } from "@/components/motion/blur-fade";
import { SectionHeading } from "@/components/sections/section-heading";

export function Process() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          title="Small first. Then compounding."
          description="We don't sell a transformation programme. We remove one bottleneck, prove it holds, then move to the next."
        />

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <li key={step.number} className="bg-background">
              <BlurFade delay={i * 0.08} className="h-full">
                <div className="group relative h-full p-8 transition-colors hover:bg-surface/40">
                  <span className="font-mono text-xs tracking-widest text-primary">
                    {step.number}
                  </span>
                  <h3 className="mt-6 font-display text-2xl tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                  {/* Accent rule that draws in on hover. */}
                  <span className="absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </BlurFade>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
