module.exports = {
  devServer: {
    proxy: `http://localhost:${process.env.SERVER_PORT}`
  }
};
