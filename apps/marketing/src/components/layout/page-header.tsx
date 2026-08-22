import { Aurora } from "@/components/fx/aurora";
import { BlurFade } from "@/components/motion/blur-fade";
import { TextReveal } from "@/components/motion/text-reveal";

type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-40 sm:pb-20 sm:pt-48">
      <Aurora className="opacity-70" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <TextReveal
          text={title}
          as="h1"
          className="font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
        />

        {description && (
          <BlurFade delay={0.15}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          </BlurFade>
        )}
      </div>
    </section>
  );
}
