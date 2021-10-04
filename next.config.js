const withMDX = require("@next/mdx")({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["ik.imagekit.io"],
  },
  withMDX,

  webpack: (config) => {
    config.experiments = { topLevelAwait: true };
    return config;
  },
};
