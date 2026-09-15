"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { promptGroups } from "@/content/prompts";
import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/motion/blur-fade";
import { RevealImage } from "@/components/motion/reveal-image";

/** Highlights [placeholders] so the reader sees exactly what to replace. */
function Highlighted({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[") ? (
          <mark
            key={i}
            className="rounded-sm bg-foreground/10 px-1 font-medium text-foreground"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard can be unavailable (insecure context, permissions). The text
      // is selectable on the page, so there's still a path.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied" : "Copy prompt"}
      className={cn(
        "inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm transition-colors sm:h-9",
        copied
          ? "border-foreground bg-foreground text-background"
          : "border-foreground/20 text-foreground hover:border-foreground/50",
      )}
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export function PromptPack() {
  return (
    <div className="space-y-20">
      {promptGroups.map((group, gi) => (
        <section key={group.title} id={group.title.toLowerCase().replace(/[^a-z]+/g, "-")}>
          <div className="grid items-end gap-8 sm:grid-cols-[1fr_minmax(0,16rem)]">
            <BlurFade>
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">{group.title}</h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                {group.intro}
              </p>
            </BlurFade>
            <BlurFade delay={0.1}>
              <RevealImage
                src={group.image}
                alt={group.imageAlt}
                className="aspect-[4/3]"
                sizes="(max-width: 640px) 100vw, 16rem"
                parallax={6}
              />
            </BlurFade>
          </div>

          <ol className="mt-8 space-y-6">
            {group.prompts.map((p, i) => (
              <li key={p.id}>
                <BlurFade delay={i * 0.05}>
                  <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {String(gi + 1).padStart(2, "0")}.{i + 1} · {p.where}
                        </p>
                        <h3 className="mt-2 font-display text-xl leading-snug sm:text-2xl">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-[15px] text-muted-foreground">{p.outcome}</p>
                      </div>
                      <CopyButton text={p.prompt} />
                    </div>

                    <pre className="mt-6 whitespace-pre-wrap rounded-xl bg-background p-5 font-sans text-[15px] leading-relaxed text-foreground/85 selection:bg-foreground/20">
                      <Highlighted text={p.prompt} />
                    </pre>
                  </article>
                </BlurFade>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
