/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com' // 사용한 도메인 URL 등록
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/products/deleted_forever',
        destination: '/products',
        permanent: true
      },
      {
        source: '/products/deleted_temp',
        destination: '/products',
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
