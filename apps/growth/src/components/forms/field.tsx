"use client";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type FieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
  defaultValue?: string;
  multiline?: boolean;
  rows?: number;
  className?: string;
};

export function Field({
  name,
  label,
  placeholder,
  type = "text",
  required,
  error,
  defaultValue,
  multiline,
  rows = 6,
  className,
}: FieldProps) {
  const describedBy = error ? `${name}-error` : undefined;
  const Control = multiline ? Textarea : Input;

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={name}>
        {label} {required && <span className="text-primary">*</span>}
      </Label>

      <Control
        id={name}
        name={name}
        // Textarea has no `type`; passing one would be an invalid attribute.
        {...(multiline ? { rows } : { type })}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className={cn(
          // 48px and 16px on phones: under 44px is a missed tap, and iOS zooms
          // the page on any input below 16px.
          "h-12 bg-surface/40 text-base sm:h-10 sm:text-sm",
          multiline && "h-auto min-h-40 resize-none",
          error && "border-destructive",
        )}
      />

      {error && (
        <p id={`${name}-error`} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

/** Hidden from users, catches naive bots. */
export function Honeypot() {
  return (
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
  );
}
