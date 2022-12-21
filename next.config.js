
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  swcMinify: false,

  images: {
    domains: ["phamtiensang.site"],
  },
  env: {
    HOSTNAME_CMS: "https://phamtiensang.site/graphql",
    HOSTNAME: "https://phamtiensang.site/graphql",
    HOSTNAME_DEMO: "https://phamtiensang.site",
    NEXT_PUBLIC_HOME_DOMAIN: "okhub.vn",
  },
};

module.exports = nextConfig;
