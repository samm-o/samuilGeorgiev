/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/samuilGeorgiev', // replace with your actual repository name
  images: {
    unoptimized: true,
  },
  assetPrefix: '/samuilGeorgiev/', // replace with your actual repository name
}

module.exports = nextConfig 