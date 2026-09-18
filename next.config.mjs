/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "500mb",
    },
  },
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.jollywood.co.in",
        pathname: "/blog/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
