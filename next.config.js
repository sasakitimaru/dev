/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        mdxRs: true,
    },
    reactStrictMode: true,
    swcMinify: true,
}

const withMDX = require('@next/mdx')()
const { withContentlayer } = require('next-contentlayer')

module.exports = withMDX(nextConfig)
module.exports = withContentlayer(nextConfig)