import { Aurora } from "@/components/fx/aurora";
import { BlurFade } from "@/components/motion/blur-fade";
import { TextReveal } from "@/components/motion/text-reveal";

type PageHeaderProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
      <Aurora className="opacity-70" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <TextReveal
          text={title}
          as="h1"
          className="max-w-5xl font-display text-4xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
        />

        {description && (
          <BlurFade delay={0.15}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          </BlurFade>
        )}

        {children && <BlurFade delay={0.25}>{children}</BlurFade>}
      </div>
    </section>
  );
}
