import { problem } from "@/content/site";
import { BlurFade } from "@/components/motion/blur-fade";
import { SectionHeading } from "@/components/sections/section-heading";
import { DotGrid } from "@/components/fx/dot-grid";

export function Problem() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 sm:py-32">
      <DotGrid className="opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title={problem.headline} />

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {problem.points.map((point, i) => (
            <li key={point.body} className="bg-background">
              <BlurFade delay={i * 0.08} className="h-full">
                <div className="group h-full p-8">
                  <p className="font-display text-5xl tracking-tight text-primary">
                    {point.stat}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {point.body}
                  </p>
                </div>
              </BlurFade>
            </li>
          ))}
        </ul>

        <BlurFade delay={0.2}>
          <p className="mt-14 max-w-3xl border-l-2 border-primary pl-6 font-display text-xl leading-relaxed tracking-tight sm:text-2xl">
            {problem.closing}
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
