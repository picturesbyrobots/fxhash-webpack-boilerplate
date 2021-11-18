const config = require("./webpack.config")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  ...config,


  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      template: "./public/sandbox.html",
      chunks: ['sandbox'],
      inject: true,
      publicPath: "./",
      filename: "sandbox.html"
    })],
  mode: "development",
  devServer: {
    // disables the Hot Module Replacement feature because probably not ideal
    // in the context of generative art
    // https://webpack.js.org/concepts/hot-module-replacement/
    hot: false,
    port: 8080,
    open: true,
    //after index.html is done compiling we can spit out a message to all dev servers
    onAfterSetupMiddleware : function (devServer)  {
      devServer.sendMessage(devServer.sockets, "content-changed");
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
}