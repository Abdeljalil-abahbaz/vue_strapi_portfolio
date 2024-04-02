const { defineConfig } = require('@vue/cli-service')
process.env.VUE_APP_HOST = 'http://localhost:4000'
module.exports = defineConfig({
  transpileDependencies: true
})
