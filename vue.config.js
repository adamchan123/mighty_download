module.exports = {
  publicPath:'./',
  lintOnSave: true,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 100,
            propList:['*']
          })
        ],
      },
    },
  },
};
