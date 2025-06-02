/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '/Portfolio2',
  assetPrefix: '/Portfolio2',
  trailingSlash: true,
}

module.exports = nextConfig 