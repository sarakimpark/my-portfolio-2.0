import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Parent folder has a lockfile; pin Turbopack to this project so CSS/modules resolve.
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sarakimpark.github.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
