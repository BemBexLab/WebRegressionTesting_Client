import type { NextConfig } from "next";

const backendBaseUrl =
  process.env.INTERNAL_API_BASE_URL ?? "https://web-regression-testing-server-fawn.vercel.app";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${backendBaseUrl}/api/:path*`
      }
    ];
  }
};

export default nextConfig;
