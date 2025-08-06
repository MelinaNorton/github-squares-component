// next.config.js or next.config.ts
import { type NextConfig } from 'next';
import transpileModules from 'next-transpile-modules';

// Wrap your config so Next will process your published package
const withTM = transpileModules(['github-carousel']);

const nextConfig: NextConfig = {
  // any other Next.js settings you have
  reactStrictMode: true,
  experimental: {
    // keep your turbopack/SWC flags here if needed
  },
};

export default withTM(nextConfig);
