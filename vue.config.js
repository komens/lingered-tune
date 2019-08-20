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
      proxy: {
          '/api': {
              target: 'http://api.youngam.cn/music',
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                '^/api': ''
              }
          }
      }
  }
};