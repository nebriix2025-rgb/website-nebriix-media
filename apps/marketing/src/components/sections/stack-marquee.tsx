import Image from "next/image";

import { stack } from "@/content/site";
import { Marquee } from "@/components/motion/marquee";
import { BlurFade } from "@/components/motion/blur-fade";

export function StackMarquee() {
  return (
    <section className="border-y border-border bg-surface/20 py-14">
      <BlurFade>
        <p className="text-center font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Tools We Build With
        </p>
      </BlurFade>

      <Marquee className="mt-10 mask-fade-x" speed={45} gap="4rem">
        {stack.map((name) => (
          <Image
            key={name}
            src={`/brand/${name}.png`}
            alt={`${name} logo`}
            width={120}
            height={60}
            className="h-8 w-auto opacity-45 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </Marquee>
    </section>
  );
}
