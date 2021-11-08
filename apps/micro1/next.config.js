const withNx = require('@nrwl/next/plugins/with-nx');

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
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
          'react-dom': {
            eager: true,
            singleton: true,
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

module.exports = withNx(nextConfig);
