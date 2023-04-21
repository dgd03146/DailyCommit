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
  }
};

module.exports = nextConfig;
