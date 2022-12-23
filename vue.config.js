const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: 'admin',
    themeColor: '#C51619',
    msTileColor: '#861F1F',
    appleMobileWebAppStatusBarStyle: 'power by crs',
    manifestOptions: {
      background_color: '#920606'
    }
  }
})
