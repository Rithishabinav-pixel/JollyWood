
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "500mb",
    },
    proxyClientMaxBodySize: "50mb",
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
