import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    SC_DISABLE_SPEEDY: "false", // Existing environment variable
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'), // This creates the alias
    };
    return config;
  },
};

export default nextConfig;
