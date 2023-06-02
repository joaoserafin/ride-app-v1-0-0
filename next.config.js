// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

const withPWA = require('next-pwa')

module.exports = withPWA({
    // reactStrictMode: true,
    pwa: {
        dest: 'public',
        registrer: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === 'development'
    }
})