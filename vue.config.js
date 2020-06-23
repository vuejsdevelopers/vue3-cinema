const path = require("path");
module.exports = {
  devServer: {
    proxy: `http://localhost:${process.env.SERVER_PORT}`
  },
  chainWebpack: config => {
    config.resolve.alias.set("vue$", path.resolve("node_modules/vue/dist/vue.esm-bundler.js"));
  }
};
