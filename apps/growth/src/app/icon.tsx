import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Favicon. The script wordmark is illegible at 16–32px, so the tab icon is a
 * serif "N" monogram on the brand navy — the same navy/cream pair as the site.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0d14",
          borderRadius: 14,
          color: "#faf8f3",
          fontSize: 44,
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 400,
          letterSpacing: -2,
        }}
      >
        N
      </div>
    ),
    size,
  );
}
