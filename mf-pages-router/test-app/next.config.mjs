import NextFederationPlugin from "@module-federation/nextjs-mf";

export default {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'checkout',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './Product': '@/pages/Product/index.tsx',
          },
          shared: {},
          extraOptions: {},
        })
      );
    }

    return config;
  },
};
