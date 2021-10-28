const { withFederatedSidecar } = require('@module-federation/nextjs-mf');

const nextConfig = withFederatedSidecar({
  name: 'micro2',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './Micro2Index': './pages/index.tsx',
  },
  shared: {
    react: {
      requiredVersion: false,
      singleton: true,
    },
  },
})({
  // original next.config.js export
  assetPrefix: 'micro2-assets',
});

module.exports = nextConfig;
