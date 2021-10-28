const nextConfig = {
  webpack(config, options) {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        remoteType: 'var',
        remotes: {
          micro2: 'micro2',
        },
        shared: {
          react: {
            // Notice shared ARE eager here.
            eager: true,
            // singleton: true, react@17
            requiredVersion: false,
          },
        },
      })
    );

    config.module.rules.push({
      test: /_app.js/,
      loader: '@module-federation/nextjs-mf/lib/federation-loader.js',
    });

    return config;
  },
};

module.exports = nextConfig;
