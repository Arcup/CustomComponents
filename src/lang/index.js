import { createI18n } from 'vue-i18n'
import esJson from './locals/es_MX.json'
import enJson from './locals/en_US.json'

const messages = {
  en: enJson,
  es: esJson
}

const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})

export default i18n