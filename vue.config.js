const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  outputDir: 'myPrject',
  css: {
    sourceMap: process.env.NODE_ENV === 'development'
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('common', resolve('src/common'))
      .set('util', resolve('src/util'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('mixins', resolve('src/mixins'))
      .set('api', resolve('src/api'))
      .set('store', resolve('src/store'))
      .set('views', resolve('src/views'))
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  }
}
function addStyleResource (rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, 'src/common/css/base.scss') // 需要全局导入的scss
      ]
    })
}
