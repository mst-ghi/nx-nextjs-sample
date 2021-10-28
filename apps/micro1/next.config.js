// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  assetPrefix: 'micro1-assets',
  async rewrites() {
    return [
      {
        source: '/micro2',
        destination: 'http://localhost:6601',
      },
    ];
  },
  nx: {
    svgr: false,
  },
};

// module.exports = withNx(nextConfig);
module.exports = nextConfig;
