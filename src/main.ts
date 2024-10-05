import './assets/index.css'
import App from './App.vue'
import {createI18n} from 'vue-i18n'

import en from "@/translations/en";
import ru from "@/translations/ru";

import Language from "./services/Language.ts";

const i18n = createI18n({
    legacy: false,
    fallbackLocale: ['en', 'ru'],
    messages: {
        en: en,
        ru: ru,
    }
})

import {ViteSSG} from 'vite-ssg/single-page'
export const createApp = ViteSSG(App, ({app, router, routes, isClient}) => {
    if (isClient) {
        i18n.global.locale.value = Language.currentLanguage()
    }

    app.use(i18n)
})
