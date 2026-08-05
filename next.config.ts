import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uniscore.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'ttenda.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'nickspay.com.ng',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
  },
};

export default nextConfig;
