  const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output : "export",
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: 'public',
    register: true,
    disable: process.env.NODE_ENV === "development",
  }
}
//module.exports = nextConfig
  module.exports = withPWA(nextConfig)