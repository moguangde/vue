const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  assetsDir: '.',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src/'))
      .set('_components', resolve('src/components'))
      .set('_plugins', resolve('src/plugins'))
      .set('_api', resolve('src/api'))
      .set('_store', resolve('src/store'))
      .set('_route', resolve('src/route'))
      .set('_utils', resolve('src/utils'))
      .set('_views', resolve('src/views'))
      .set('_assets', resolve('src/assets'))
    config.module.rule('pug')
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end()
    config.module.rule('vue')
      .test(/\.vue$/)
      .use('iview-loader')
      .loader('iview-loader')
      .options({
        prefix: true
      })
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/styles/theme/iview-variables.less')
      ]
    }
  }

}
