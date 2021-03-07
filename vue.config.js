module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/'
    : '/',
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Evrim Coskun\'s Portfolio';
        return args;
      });
  },
}
