/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, context) => {
        // config.node = false;

        return config;
    }
};

export default nextConfig;
