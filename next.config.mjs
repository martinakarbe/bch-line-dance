/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  outputFileTracingIncludes: {
    "/api/intern/bilder/*": ["./private-assets/intern/**/*"],
  },
};

export default nextConfig;
