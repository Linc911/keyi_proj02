// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, {
        // 244 Kib
        limit: 249856,
      }));
  },
  productionSourceMap: false,
};
