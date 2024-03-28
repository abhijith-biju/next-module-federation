import NextFederationPlugin from "@module-federation/nextjs-mf";

export default {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'checkout',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            product: 'product@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          },
          shared: {},
          extraOptions: {},
        })
      );
    }

    return config;
  },
};
