// module.exports = {
//   target: "server", // Ensures SSR is enabled
//   reactStrictMode: true, // Activates React Strict Mode for development
//   images: {
//     unoptimized: true, // Disables built-in image optimization
//   },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export (no Image Optimization API)
  },
  trailingSlash: true, // Optional for static export to work well with cPanel
};

module.exports = nextConfig;
