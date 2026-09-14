import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/motion/blur-fade";
import { TextReveal } from "@/components/motion/text-reveal";

type SectionHeadingProps = {
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
};

export function SectionHeading({
  title,
  description,
  className,
  align = "left",
  as = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      <TextReveal
        text={title}
        as={as}
        className={cn(
          "font-display text-4xl leading-[1.12] sm:text-5xl sm:leading-[1.15]",
          align === "center" && "justify-center",
        )}
      />

      {description && (
        <BlurFade delay={0.15}>
          <p
            className={cn(
              "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </BlurFade>
      )}
    </div>
  );
}
