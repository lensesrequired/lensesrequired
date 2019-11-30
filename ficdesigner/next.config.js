const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const assetPrefix = process.env.BUILDING_FOR_NOW ? '/ficdesigner' : ''

module.exports = withSass(withCss({
  target: 'serverless',
  assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: '/_next/static/',
          outputPath: 'static/',
          name: '[name].[ext]'
        }
      }
    });
    return config;
  }
}));
