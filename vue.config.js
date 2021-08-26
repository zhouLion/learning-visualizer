const { resolve } = require('path');

/** @type {import("@vue/cli-service").ProjectOptions} */
module.exports = {
  lintOnSave: true,
  productionSourceMap: true,
  publicPath: process.env.BASE_URL,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('./src'),
        '~': resolve('./src/components/_ui'),
      },
      extensions: ['vue', 'tsx', 'ts', 'js', 'json', 'd.ts'],
    },
  },
  devServer: {
    port: 8021,
  },
};
