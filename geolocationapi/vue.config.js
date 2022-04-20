const fs = require('fs');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  publicPath: '/',
  transpileDependencies: [],
  chainWebpack: config => {
    config.plugin('polyfills').use(NodePolyfillPlugin)

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          'vl-style-icon': 'src',
          'VlStyleIcon': 'src',
        }
        return options
      })
  },
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.ts',
      // title of the application
      title: 'IPIN2022 Geolocation API',
    },
  },
  devServer: {
    port: 8081,
    host: '0.0.0.0',
    https: {
      key: fs.readFileSync('../common/cert/key.pem'),
      cert: fs.readFileSync('../common/cert/server.crt'),
    },
  }
}
