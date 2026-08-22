"use server";

export type LeadState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
  /**
   * Echoed back on failure. React 19 resets a form once its action resolves, so
   * without this a validation error would wipe everything the visitor typed.
   */
  values?: Record<string, string>;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldSpec = {
  name: string;
  label: string;
  required?: boolean;
  email?: boolean;
  max: number;
};

/**
 * Shared handler for every lead form on the site. `kind` lands in the webhook
 * payload so n8n / Make / Zapier can route an audit request differently from a
 * general enquiry without needing separate endpoints.
 */
async function handleLead(
  kind: string,
  spec: FieldSpec[],
  formData: FormData,
): Promise<LeadState> {
  const values: Record<string, string> = {};
  const errors: Record<string, string> = {};

  for (const field of spec) {
    const value = String(formData.get(field.name) ?? "").trim();
    values[field.name] = value;

    if (field.required && !value) {
      errors[field.name] = `${field.label} is required.`;
      continue;
    }
    if (value && field.email && !EMAIL.test(value)) {
      errors[field.name] = "That email doesn't look right.";
      continue;
    }
    if (value.length > field.max) {
      errors[field.name] = `Please keep this under ${field.max} characters.`;
    }
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please check the fields below.",
      errors,
      values,
    };
  }

  // Bots fill hidden fields; humans leave them empty. Accept silently so they
  // don't retry with a different shape.
  if (String(formData.get("company-website") ?? "").trim()) {
    return { status: "success" };
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return {
      status: "error",
      message:
        "The form isn't connected yet. Please email Hello@nebriix.com directly.",
      values,
    };
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind,
        ...values,
        submittedAt: new Date().toISOString(),
        source: `nebriix.com/${kind}`,
      }),
    });

    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);

    return {
      status: "success",
      message: "Thanks — we'll be in touch within 24 hours.",
    };
  } catch (error) {
    console.error(`[${kind}] webhook delivery failed`, error);
    return {
      status: "error",
      message:
        "Something went wrong sending that. Please email Hello@nebriix.com directly.",
      values,
    };
  }
}

const AUDIT_FIELDS: FieldSpec[] = [
  { name: "business-name", label: "Business name", required: true, max: 160 },
  { name: "your-name", label: "Your name", required: true, max: 120 },
  { name: "email", label: "Email", required: true, email: true, max: 200 },
  { name: "phone", label: "Phone", required: true, max: 60 },
  { name: "city", label: "City", required: true, max: 120 },
  { name: "service", label: "Service", required: true, max: 300 },
  { name: "website", label: "Website URL", max: 300 },
  { name: "instagram", label: "Instagram handle", max: 120 },
];

export async function submitAudit(_prev: LeadState, formData: FormData) {
  return handleLead("free-audit", AUDIT_FIELDS, formData);
}

const CONTACT_FIELDS: FieldSpec[] = [
  { name: "your-name", label: "Name", required: true, max: 120 },
  { name: "email", label: "Email", required: true, email: true, max: 200 },
  { name: "phone", label: "Phone", max: 60 },
  { name: "business-name", label: "Business name", max: 160 },
  { name: "message", label: "Message", required: true, max: 4000 },
];

export async function submitContact(_prev: LeadState, formData: FormData) {
  return handleLead("contact", CONTACT_FIELDS, formData);
}

const VISIBILITY_FIELDS: FieldSpec[] = [
  { name: "business-name", label: "Business name", required: true, max: 160 },
  { name: "city", label: "City", required: true, max: 120 },
  { name: "email", label: "Email", required: true, email: true, max: 200 },
];

export async function submitVisibilityCheck(
  _prev: LeadState,
  formData: FormData,
) {
  return handleLead("ai-visibility-check", VISIBILITY_FIELDS, formData);
}
