"use client";

import { useActionState } from "react";
import { AlertCircle, CheckCircle2, ArrowUpRight } from "lucide-react";

import { submitAudit, type LeadState } from "@/app/actions/leads";
import { audit } from "@/content/site";
import { Field, Honeypot } from "@/components/forms/field";
import { Button } from "@/components/ui/button";

const initial: LeadState = { status: "idle" };

export function AuditForm() {
  const [state, action, pending] = useActionState(submitAudit, initial);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-10">
        <CheckCircle2 className="size-8 text-primary" />
        <p className="font-display text-2xl tracking-tight">
          Your audit is queued.
        </p>
        <p className="text-muted-foreground">
          {state.message ??
            "We'll send your full report within 24 hours — ranking, competitors, reviews, search volume and the revenue math."}
        </p>
      </div>
    );
  }

  return (
    <form
      action={action}
      className="rounded-2xl border border-border bg-card p-8 sm:p-10"
    >
      <div className="space-y-6">
        {state.status === "error" && state.message && (
          <p
            role="alert"
            className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive"
          >
            <AlertCircle className="mt-0.5 size-4 shrink-0" />
            {state.message}
          </p>
        )}

        <div className="grid gap-6 sm:grid-cols-2">
          <Field
            name="business-name"
            label="Business name"
            placeholder="Bright Smile Dental"
            required
            error={state.errors?.["business-name"]}
            defaultValue={state.values?.["business-name"]}
          />
          <Field
            name="your-name"
            label="Your name"
            placeholder="Your name"
            required
            error={state.errors?.["your-name"]}
            defaultValue={state.values?.["your-name"]}
          />
          <Field
            name="email"
            label="Email"
            type="email"
            placeholder="you@business.com"
            required
            error={state.errors?.email}
            defaultValue={state.values?.email}
          />
          <Field
            name="phone"
            label="Phone"
            type="tel"
            placeholder="Best number to reach you"
            required
            error={state.errors?.phone}
            defaultValue={state.values?.phone}
          />
          <Field
            name="city"
            label="City"
            placeholder="Denver, CO"
            required
            error={state.errors?.city}
            defaultValue={state.values?.city}
          />
          <Field
            name="service"
            label="What service does your business offer?"
            placeholder="Cosmetic dentistry"
            required
            error={state.errors?.service}
            defaultValue={state.values?.service}
          />
          <Field
            name="website"
            label="Website URL"
            type="url"
            placeholder="https:// (if you have one)"
            error={state.errors?.website}
            defaultValue={state.values?.website}
          />
          <Field
            name="instagram"
            label="Instagram handle"
            placeholder="@yourbusiness (if you have one)"
            error={state.errors?.instagram}
            defaultValue={state.values?.instagram}
          />
        </div>

        <Honeypot />

        <Button
          type="submit"
          disabled={pending}
          className="h-13 w-full rounded-full text-base"
        >
          {pending ? "Sending…" : audit.cta}
          <ArrowUpRight className="size-4" />
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          Free. No commitment. We respond within 24 hours.
        </p>
      </div>
    </form>
  );
}
