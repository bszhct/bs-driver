const urlConfig = {
  limit: 9999999
}

const vueConfig = {
  css: {
    extract: false,
    loaderOptions: {
      less: {
        modifyVars: {
        },
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {
    // 将字体文件打包到代码中
    config.module
      .rule('fonts')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, urlConfig))

    // 将图片打包到代码中
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, urlConfig))

    // 将 svg 图片打包到代码中
    const svgRule = config.module.rule('svg')
    // 清除之前存在的配置
    svgRule.uses.clear()
    svgRule
      .use('url-loader')
      .loader('url-loader')
      .options(urlConfig)
  }
}

module.exports = vueConfig
