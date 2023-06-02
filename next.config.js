// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// const withPWA = require('next-pwa')

// module.exports = withPWA({
//     // reactStrictMode: true,
//     pwa: {
//         dest: 'public',
//         registrer: true,
//         skipWaiting: true,
//         disable: process.env.NODE_ENV === 'development'
//     }
// })





const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development",
    },
};

const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
});

module.exports = withPWA(nextConfig);


