import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sabios",
  images: { unoptimized: true },
};

export default nextConfig;
