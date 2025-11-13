import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  allowedDevOrigins: [
    'https://*.cloudworkstations.dev',
    'http://*.cloudworkstations.dev',
    'https://3000-firebase-studio-1762178732492.cluster-64pjnskmlbaxowh5lzq6i7v4ra.cloudworkstations.dev',
    'http://3000-firebase-studio-1762178732492.cluster-64pjnskmlbaxowh5lzq6i7v4ra.cloudworkstations.dev',
  ],
};

export default nextConfig;
