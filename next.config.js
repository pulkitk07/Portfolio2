/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio2' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio2' : '',
  trailingSlash: true,
}

module.exports = nextConfig 