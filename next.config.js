{import('next').nextConfig}

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",

      }
    ],
  },
  /* config options here */
};

module.exports = nextConfig
