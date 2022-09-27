/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
	unoptimized: true // Incompatible with statically generated sites.
  }
}

module.exports = nextConfig
