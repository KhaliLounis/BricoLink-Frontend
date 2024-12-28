import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  webpack: (config: Configuration) => {
    config.watchOptions = {
      poll: 1000, // Poll every second for file changes
      aggregateTimeout: 300, // Delay before rebuilding
    };
    return config;
  },
  webpackDevMiddleware: (config: Configuration) => {
    config.watchOptions = {
      poll: 1000, // Poll every second for file changes
      aggregateTimeout: 300, // Delay before rebuilding
    };
    return config;
  },
};

export default nextConfig;
