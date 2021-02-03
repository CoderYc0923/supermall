module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px-to-viewport")({
            unitToConvert: "px",
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,
      propList: ["*"],
      viewportUnit: 'vw',
      fontViewportUnit: "vw",
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      exclude:[/Tabbar/],
      landscape: false
          })
        ]
      }
    }
  }
}