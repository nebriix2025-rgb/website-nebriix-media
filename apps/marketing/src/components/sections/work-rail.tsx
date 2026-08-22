"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

import { caseStudies } from "@/content/site";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FEATURED = caseStudies.slice(0, 6);

export function WorkRail() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Horizontal pin is a desktop affordance: on touch it fights native
      // scrolling, so below `lg` the same markup just stacks and scrolls.
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const el = track.current;
        if (!el) return;

        const distance = () => el.scrollWidth - window.innerWidth;

        const tween = gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            // Scroll length mirrors the horizontal travel, so the rail moves
            // 1:1 with the wheel instead of feeling geared.
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });
    },
    { scope: section },
  );

  return (
    <section ref={section} className="relative overflow-hidden py-24 lg:py-0">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:pt-28">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            title="Systems we've shipped."
            description="Ten builds across automation, content, lead generation and product — each one still running."
          />
          <ButtonLink
            href="/work"
            variant="outline"
            className="h-11 rounded-full px-5"
          >
            See All Projects
            <ArrowUpRight className="size-4" />
          </ButtonLink>
        </div>
      </div>

      <div className="mt-14 lg:mt-16 lg:pb-28">
        <div
          ref={track}
          className="flex flex-col gap-6 px-5 sm:px-8 lg:w-max lg:flex-row lg:gap-8 lg:pr-[12vw]"
        >
          {FEATURED.map((study, i) => (
            <SpotlightCard
              key={study.slug}
              className="lg:w-[36rem] lg:shrink-0"
            >
              <Link
                href={`/work/${study.slug}`}
                className="flex h-full flex-col justify-between gap-10 p-8 sm:p-10 lg:h-[26rem]"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">
                    {study.category}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} / {String(FEATURED.length).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl leading-tight tracking-tight sm:text-3xl">
                    {study.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {study.overview.split(". ")[0]}.
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                    <span className="font-display text-lg text-primary">
                      {study.headline}
                    </span>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
