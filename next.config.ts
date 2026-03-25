import type { NextConfig } from "next";

const backendBaseUrl = process.env.INTERNAL_API_BASE_URL ?? "http://localhost:5000";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${backendBaseUrl}/api/:path*`
      },
      {
        source: "/storage/:path*",
        destination: `${backendBaseUrl}/storage/:path*`
      }
    ];
  }
};

export default nextConfig;
