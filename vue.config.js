/*
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/sites/all/modules/snpnc/app-impots/' : '/',
}
*/

if (process.env.NODE_ENV === 'production') {
  const version = process.env.npm_package_version;
  const name = process.env.npm_package_name;

  module.exports = {
    outputDir: `dist/${version}`,
    publicPath: `${process.env.BASE_URL}/${version}`,
    configureWebpack: {
      output: {
        filename: `${name}.js`
      }
    },
    chainWebpack: config => {
      // Don't split js and css in chunks, produce single files.
      config.optimization.delete("splitChunks");
      // Don't minify html
      config.plugin('html')
          .tap(args => { args[0].minify = false; return args })
    },
    css: {
      extract: {
        filename: `${name}.css`
      }
    }
  }
}