/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  pageExtensions: ["page.tsx", "api.ts"],
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
