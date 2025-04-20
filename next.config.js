/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const withOptimizedImages = require("next-optimized-images");

const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      buffer: require.resolve("buffer"),
      crypto: require.resolve("crypto-browserify"),
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
      process: require.resolve("process/browser"),
    };
    return config;
  },
  reactStrictMode: true,
  eslint: {
    dirs: ["components", "config", "hooks", "pages", "store", "types", "utils"],
  },
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    esmExternals: false,
    outputStandalone: true,
  },
  async redirects() {
    return [
      {
        source: "/maiar-ghosts",
        destination: "/project/ghostverse",
        permanent: true,
      },
    ];
  },
};
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    publicExcludes: ["!robots.txt", "!sitemap.xml", "!sitemap-0.xml"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; font-src 'self' 'https://fonts.googleapis.com'; script-src 'self'",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(); battery=(self);",
          },
        ],
      },
    ];
  },
});
module.exports = withOptimizedImages({
  // your Next.js config options here
});
module.exports = nextConfig;
