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

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <TextReveal
          text={title}
          as="h1"
          className="max-w-4xl font-display text-5xl font-light leading-[1.06] sm:text-6xl lg:text-[4.5rem] lg:leading-[1.1]"
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
