import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  reactStrictMode: false,
  images: {
    domains: ["picsum.photos", "via.placeholder.com", "cloudflare-ipfs.com", "loremflickr.com"],
  },
};

export default nextConfig;
