import { ArrowUpRight } from "lucide-react";

import { Aurora } from "@/components/fx/aurora";
import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden">
      <Aurora />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
          404
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">
          This page doesn&rsquo;t exist.
        </h1>
        <p className="mt-6 max-w-lg text-lg text-muted-foreground">
          The link may be out of date. Try our work, or tell us what you were
          looking for.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/" className="h-13 rounded-full px-8 text-base">
            Back home
          </ButtonLink>
          <ButtonLink
            href="/work"
            variant="outline"
            className="h-13 rounded-full px-8 text-base"
          >
            See our work
            <ArrowUpRight className="size-4" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
