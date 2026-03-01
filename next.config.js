/** @type {import('next').NextConfig} */
// GitHub Pages serves at https://<user>.github.io/<repo-name>/

const basePath = "/Dreame-Balloons";

const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
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
