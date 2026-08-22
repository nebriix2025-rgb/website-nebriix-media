import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root: there's an unrelated package-lock.json in the parent
  // directory (~/), which Turbopack would otherwise infer as the root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
