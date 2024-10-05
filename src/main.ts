import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

import Language from "@/services/Language";
import en from "@/translations/en";
import ru from "@/translations/ru";
const i18n = createI18n({
    legacy: false,
    locale: Language.currentLanguage(),
    fallbackLocale: ['en', 'ru'],
    messages: {
        en: en,
        ru: ru,
    }
})

createApp(App)
.use(i18n)
.mount('#app')
