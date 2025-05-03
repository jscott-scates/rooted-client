/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      yjs: require.resolve('yjs'), // <-- Adjust path if needed
    };
    return config;
  },
};

export default nextConfig;
