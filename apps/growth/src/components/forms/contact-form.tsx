"use client";

import { useActionState } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";

import { submitContact, type LeadState } from "@/app/actions/leads";
import { Field, Honeypot } from "@/components/forms/field";
import { Button } from "@/components/ui/button";

const initial: LeadState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-10">
        <CheckCircle2 className="size-8 text-primary" />
        <p className="font-display text-2xl tracking-tight">Message sent.</p>
        <p className="text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-6">
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
          name="your-name"
          label="Name"
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
          error={state.errors?.phone}
          defaultValue={state.values?.phone}
        />
        <Field
          name="business-name"
          label="Business name"
          placeholder="Your business"
          error={state.errors?.["business-name"]}
          defaultValue={state.values?.["business-name"]}
        />
      </div>

      <Field
        name="message"
        label="Message"
        multiline
        required
        placeholder="Tell us about your business and what you are trying to fix."
        error={state.errors?.message}
        defaultValue={state.values?.message}
      />

      <Honeypot />

      <Button
        type="submit"
        disabled={pending}
        className="h-13 w-full rounded-full text-base sm:w-auto sm:px-10"
      >
        {pending ? "Sending…" : "Send message"}
        <Send className="size-4" />
      </Button>
    </form>
  );
}
