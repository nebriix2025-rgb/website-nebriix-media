import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to the monorepo root. Dependencies are hoisted there
  // by npm workspaces, so pointing this at the app directory makes Turbopack
  // fail to resolve next/package.json.
  turbopack: {
    root: path.join(__dirname, "..", ".."),
  },

  // Proxy PostHog through our own domain. Analytics hostnames sit on every
  // blocklist, so a direct connection quietly loses the privacy-conscious
  // visitors — who are exactly the people researching an agency.
  async rewrites() {
    const host =
      process.env.NEXT_PUBLIC_POSTHOG_INGEST ?? "https://eu.i.posthog.com";
    const assets = host
      .replace("//eu.i.", "//eu-assets.i.")
      .replace("//us.i.", "//us-assets.i.");
    return [
      {
        source: "/ingest/static/:path*",
        destination: `${assets}/static/:path*`,
      },
      { source: "/ingest/:path*", destination: `${host}/:path*` },
    ];
  },

  // The proxy above needs the trailing-slash-free form to match.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
