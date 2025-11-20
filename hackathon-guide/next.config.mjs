/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'react-hot-toast',
      'lucide-react',
      'react-type-animation'
    ]
  }
};

export default nextConfig;
