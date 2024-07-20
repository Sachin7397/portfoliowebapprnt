module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
      return webpackConfig;
    },
  },
};
