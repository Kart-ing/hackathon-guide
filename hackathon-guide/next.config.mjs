/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
