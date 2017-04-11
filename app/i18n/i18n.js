import i18n from 'i18next'

const startI18n = file => {
  return i18n
  .init({
    fallbackLng: 'en',
    resources: file,

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: false,
    backend: {
      loadPath: '/app/i18n/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      test: '{{ng}}'
    },

    interpolation: {
      formatSeparator: ',',
      format: function (value, format, lng) {
        if (format === 'uppercase') return value.toUpperCase()
        return value
      }
    }
  })
}

export default startI18n
