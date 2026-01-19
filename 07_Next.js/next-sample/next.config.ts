import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 他の config があればそのまま残す */
  reactStrictMode: true,
  images: {
    domains: ["images.dog.ceo"], // ← ここを追加
  },
};

export default nextConfig;