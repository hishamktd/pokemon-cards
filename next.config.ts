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
  images: {
    domains: [
      'vishmvrcizpuo7zs.public.blob.vercel-storage.com',
      'www.google.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.BLOB_BASE_URL || 'localhost',
        port: '',
      },
    ],
  },
};

export default nextConfig;
