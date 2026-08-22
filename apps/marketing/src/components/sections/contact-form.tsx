"use client";

import { useActionState } from "react";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";

import { submitContact, type ContactState } from "@/app/actions/contact";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const initial: ContactState = { status: "idle" };

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
          name="your-email"
          label="Email"
          type="email"
          placeholder="you@company.com"
          required
          error={state.errors?.["your-email"]}
          defaultValue={state.values?.["your-email"]}
        />
      </div>

      <Field
        name="your-subject"
        label="Subject"
        placeholder="What's this about?"
        error={state.errors?.["your-subject"]}
        defaultValue={state.values?.["your-subject"]}
      />

      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-primary">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          required
          defaultValue={state.values?.message}
          placeholder="Tell us what you're trying to automate, scale, or fix."
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          className="resize-none bg-surface/40"
        />
        {state.errors?.message && (
          <p id="message-error" className="text-xs text-destructive">
            {state.errors.message}
          </p>
        )}
      </div>

      {/* Honeypot — hidden from users, catches naive bots. */}
      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor="company-website">Company website</label>
        <input
          id="company-website"
          name="company-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Button
        type="submit"
        disabled={pending}
        className="h-13 w-full rounded-full text-base sm:w-auto sm:px-10"
      >
        {pending ? "Sending…" : "Send"}
        <Send className="size-4" />
      </Button>
    </form>
  );
}

type FieldProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  error?: string;
  defaultValue?: string;
};

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required,
  error,
  defaultValue,
}: FieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>
        {label} {required && <span className="text-primary">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn("bg-surface/40", error && "border-destructive")}
      />
      {error && (
        <p id={`${name}-error`} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
