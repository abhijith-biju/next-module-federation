const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'checkout',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './checkout': './pages/checkout',
          },
          shared: {},
          extraOptions: {},
        }),
      );
    }

    return config;
  },
};