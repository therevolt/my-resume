module.exports = {
  trailingSlash: true,
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/" },
      "/portofolio": { page: "/portofolio" },
    };
  },
};
