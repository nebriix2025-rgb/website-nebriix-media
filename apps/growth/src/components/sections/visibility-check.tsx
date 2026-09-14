"use client";

import { useActionState } from "react";
import { AlertCircle, CheckCircle2, Search } from "lucide-react";

import { submitVisibilityCheck, type LeadState } from "@/app/actions/leads";
import { Field, Honeypot } from "@/components/forms/field";
import { BlurFade } from "@/components/motion/blur-fade";
import { Button } from "@/components/ui/button";

const initial: LeadState = { status: "idle" };

/**
 * "Check your AI visibility" prompt from the brief.
 *
 * Deliberately does NOT render an instant verdict. Deciding whether ChatGPT
 * recommends a business means actually querying the assistants and reading the
 * citations — we can't do that client-side, and printing a fabricated
 * "you're invisible" to a real business would be a false claim from a company
 * whose entire pitch is "we show you the math". So this captures the business
 * and queues the real check instead.
 */
export function VisibilityCheck() {
  const [state, action, pending] = useActionState(
    submitVisibilityCheck,
    initial,
  );

  return (
    <section className="relative overflow-hidden border-y border-border py-24 sm:py-32">

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <BlurFade>
          <Search className="mx-auto size-8 text-primary" />
          <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            Does AI recommend your business?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Tell us your business and city. We will run the actual queries across
            ChatGPT, Google AI and Perplexity, and send you the results — including
            who gets recommended instead of you.
          </p>
        </BlurFade>

        <BlurFade delay={0.12}>
          {state.status === "success" ? (
            <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-primary/30 bg-primary/5 p-10">
              <CheckCircle2 className="size-8 text-primary" />
              <p className="font-display text-2xl tracking-tight">
                We&rsquo;re on it.
              </p>
              <p className="text-sm text-muted-foreground">
                {state.message ??
                  "We'll run the check and email you the results within 24 hours."}
              </p>
            </div>
          ) : (
            <form action={action} className="mt-10 space-y-4 text-left">
              {state.status === "error" && state.message && (
                <p
                  role="alert"
                  className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive"
                >
                  <AlertCircle className="mt-0.5 size-4 shrink-0" />
                  {state.message}
                </p>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  name="business-name"
                  label="Business name"
                  placeholder="Bright Smile Dental"
                  required
                  error={state.errors?.["business-name"]}
                  defaultValue={state.values?.["business-name"]}
                />
                <Field
                  name="city"
                  label="City"
                  placeholder="Denver, CO"
                  required
                  error={state.errors?.city}
                  defaultValue={state.values?.city}
                />
              </div>

              <Field
                name="email"
                label="Email"
                type="email"
                placeholder="you@business.com"
                required
                error={state.errors?.email}
                defaultValue={state.values?.email}
              />

              <Honeypot />

              <Button
                type="submit"
                disabled={pending}
                className="h-12 w-full rounded-full text-base"
              >
                {pending ? "Sending…" : "Check my AI visibility"}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Free. No commitment. We reply within 24 hours.
              </p>
            </form>
          )}
        </BlurFade>
      </div>
    </section>
  );
}
