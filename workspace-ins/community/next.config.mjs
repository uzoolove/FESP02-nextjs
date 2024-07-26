/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.fesp.shop',
        pathname: '/files/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/files/**',
      },
      {
        protocol: 'https',
        hostname: '*.githubusercontent.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
