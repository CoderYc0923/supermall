module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
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
    }
  }
}