import { faqs } from "@/content/site";
import { BlurFade } from "@/components/motion/blur-fade";
import { SectionHeading } from "@/components/sections/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-20">
          <SectionHeading
            title="Questions we get asked."
            className="lg:sticky lg:top-32 lg:self-start"
          />

          <BlurFade>
            {/* Base UI accordions are single-open and collapsible by default. */}
            <Accordion className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.q} value={faq.q}>
                  <AccordionTrigger className="py-6 text-left font-display text-lg tracking-tight hover:no-underline data-[state=open]:text-primary sm:text-xl">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-2xl pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
