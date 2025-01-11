import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  bundlePagesRouterDependencies: false,
  eslint: { ignoreDuringBuilds: false },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/cards',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
