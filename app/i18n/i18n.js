import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import i18nXHR from 'i18next-xhr-backend';
import 'isomorphic-fetch'

export async function getTranslation(lng, ns) {
  lng = lng || 'en'
  ns = ns || 'common'
  const response = await fetch(`http://localhost:3000/static/locales/${lng}/${ns}.json`)
  const json = await response.json()
  const translations = {
    [lng]: { [ns]: json }
  }

  return translations
}

function startI18n (translations, ssr, lng, ns) {
  const options = {
    fallbackLng: 'en',
    resources: ssr ? translations : undefined,
    ns: ['common', 'routes'],
    defaultNS: ns || 'common',
    debug: false,
    backend: (ssr ? undefined : {
      loadPath: '/static/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      test: '{{ng}}'
    })
  }

  return i18n
  //  .use(LanguageDetector)
   .use(i18nXHR)
   .init(options)
}

export default startI18n
