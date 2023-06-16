/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  async rewrites() {
    return[
      {
        source: '/images/:path*',
        destination: '/public/images/:path*',
      },
    ];
  },
};
