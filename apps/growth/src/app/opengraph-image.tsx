import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Site-wide social card. Navy ground, cream serif — the same language as the
 * page, so a shared link looks like the site it opens.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0d14",
          color: "#faf8f3",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, opacity: 0.6 }}>
          NEBRIIX
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 72, lineHeight: 1.05, letterSpacing: -2.5, maxWidth: 1000 }}>
            Become the business AI recommends.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              opacity: 0.6,
              fontFamily: "Helvetica, Arial, sans-serif",
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            Your competitors show up when someone searches. You don&apos;t. We fix
            that.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
