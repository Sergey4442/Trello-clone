{import('next').nextConfig}

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",

      },
      {
        protocol: "https",
        hostname: 'images.unsplash.com'
      },
    ],
  },
  /* config options here */
};

module.exports = nextConfig
