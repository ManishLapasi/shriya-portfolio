import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
