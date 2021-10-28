// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  assetPrefix: 'micro2-assets',
  nx: {
    svgr: false,
  },
};

module.exports = withNx(nextConfig);
