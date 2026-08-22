"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  /** Field-level errors, keyed by input name. */
  errors?: Record<string, string>;
  /**
   * Echoed back on failure. React 19 resets a form once its action resolves, so
   * without this a validation error would wipe everything the visitor typed.
   */
  values?: Record<string, string>;
};

const MAX = { name: 120, email: 200, subject: 200, message: 4000 };

/**
 * Forwards the enquiry to CONTACT_WEBHOOK_URL — an n8n / Make / Zapier catch
 * hook. Nebriix already runs all three, so this avoids adding an email vendor.
 *
 * With no webhook configured the action fails loudly rather than pretending to
 * send, so a misconfigured deploy can't silently swallow leads.
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("your-name") ?? "").trim();
  const email = String(formData.get("your-email") ?? "").trim();
  const subject = String(formData.get("your-subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Bots fill hidden fields; humans leave them empty.
  const honeypot = String(formData.get("company-website") ?? "").trim();

  const errors: Record<string, string> = {};
  if (!name) errors["your-name"] = "Please tell us your name.";
  if (!email) errors["your-email"] = "We need an email to reply to.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors["your-email"] = "That email doesn't look right.";
  if (!message) errors["message"] = "Let us know what you're after.";

  for (const [field, limit] of Object.entries(MAX)) {
    const key = field === "message" ? "message" : `your-${field}`;
    const value = String(formData.get(key) ?? "");
    if (value.length > limit) errors[key] = `Please keep this under ${limit} characters.`;
  }

  const values = {
    "your-name": name,
    "your-email": email,
    "your-subject": subject,
    message,
  };

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please check the fields below.",
      errors,
      values,
    };
  }

  // Silently accept bot submissions so they don't retry with a different shape.
  if (honeypot) return { status: "success" };

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return {
      status: "error",
      message:
        "The contact form isn't connected yet. Please email Hello@nebriix.com directly.",
      values,
    };
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        subject: subject || "(no subject)",
        message,
        submittedAt: new Date().toISOString(),
        source: "nebriix.com/contact",
      }),
    });

    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);

    return {
      status: "success",
      message: "Thanks — we'll be in touch within one business day.",
    };
  } catch (error) {
    console.error("[contact] webhook delivery failed", error);
    return {
      status: "error",
      message:
        "Something went wrong sending that. Please email Hello@nebriix.com directly.",
      values,
    };
  }
}
