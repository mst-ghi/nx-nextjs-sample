const withNx = require('@nrwl/next/plugins/with-nx');
const { withFederatedSidecar } = require('@module-federation/nextjs-mf');

const nextConfig = withFederatedSidecar({
  name: 'micro2',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './Micro2Index': './pages/index.tsx',
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
})({
  // original next.config.js export
  assetPrefix: 'micro2-assets',
});

module.exports = withNx(nextConfig);
