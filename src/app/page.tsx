import { Hero } from "@/components/sections/hero";
import { StackMarquee } from "@/components/sections/stack-marquee";
import { WorkRail } from "@/components/sections/work-rail";
import { Services } from "@/components/sections/services";
import { Proof } from "@/components/sections/proof";
import { Process } from "@/components/sections/process";
import { StoriesPreview } from "@/components/sections/stories-preview";
import { Faq } from "@/components/sections/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StackMarquee />
      <WorkRail />
      <Proof />
      <Services />
      <Process />
      <StoriesPreview />
      <Faq />
    </>
  );
}
