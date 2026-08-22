import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to the monorepo root. Dependencies are hoisted there
  // by npm workspaces, so pointing this at the app directory makes Turbopack
  // fail to resolve next/package.json.
  turbopack: {
    root: path.join(__dirname, "..", ".."),
  },
};

export default nextConfig;
