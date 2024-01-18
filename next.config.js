/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack5: true,
    images:{
      domains:["images.unsplash.com"]
    },
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
};


module.exports = nextConfig
