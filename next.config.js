/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '/Portfolio2', // Replace with your repository name
  assetPrefix: '/Portfolio2', // Replace with your repository name
  trailingSlash: true,
}

module.exports = nextConfig 