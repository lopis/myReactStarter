rimport i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import 'isomorphic-fetch'


const startI18n = file => i18n
.init({
  fallbackLng: 'en',
  resources: file,
  ns: ['common', 'routes'],
  defaultNS: 'common',
  debug: false
})
// .use(LanguageDetector)

export default startI18n
