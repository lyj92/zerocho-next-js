import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  reactStrictMode: false,
  images: {
    domains: [
      "picsum.photos",
      "via.placeholder.com",
      "cloudflare-ipfs.com",
      "loremflickr.com",
      "localhost",
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
