import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

//https://www.i18next.com/overview/typescript#argument-of-type-defaulttfuncreturn-is-not-assignable-to-parameter-of-type-xyz
declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

const language = localStorage.getItem('language') || undefined;
const fallbackLng = ['en'];
// const availableLanguages = ['en', 'vn'];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    //resources,
    fallbackLng,
    lng: language,
    debug: true,
    // whitelist: availableLanguages,
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
  });

export default i18n;
