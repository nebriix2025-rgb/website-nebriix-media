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
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1] tracking-tight sm:text-6xl">
          This page doesn&rsquo;t exist.
        </h1>
        <p className="mt-6 max-w-lg text-lg text-muted-foreground">
          The link may be out of date. Start with the audit, or see what we do.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink
            href="/free-audit"
            className="h-13 rounded-full px-8 text-base"
          >
            Get Your Free Audit
            <ArrowUpRight className="size-4" />
          </ButtonLink>
          <ButtonLink
            href="/services"
            variant="outline"
            className="h-13 rounded-full px-8 text-base"
          >
            See our services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
