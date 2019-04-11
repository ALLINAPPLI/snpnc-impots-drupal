module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/snpnc-impots/' : '/',
  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
