const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('assets',resolve('src/assets'))
      .set('views', resolve('src/views'))
	  .set('components', resolve('src/components'))
  },
  devServer: {
	  disableHostCheck: true,
      proxy: {
          '/api': {
              target: 'http://www.china-4s.com/',
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                '^/api': ''
              }
          }
      }
  }
};