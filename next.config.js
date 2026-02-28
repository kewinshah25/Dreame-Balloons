/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Dreame-Balloons",
  reactStrictMode: true,
  // Required for GitHub Pages: static export so workflow can upload ./out
  output: "export",
  // Required when using output: 'export' — no Image Optimization API in static build
  images: { unoptimized: true },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
