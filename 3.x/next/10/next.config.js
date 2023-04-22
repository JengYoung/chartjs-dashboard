/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  future: {
    webpack5: true
  },
  webpack(config) {
		config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });
    
		return config;
	},
}

module.exports = nextConfig
