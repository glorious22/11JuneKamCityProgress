import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import en from './locales/en.json';
import fr from './locales/fr.json';
import ln from './locales/ln.json';
import xh from './locales/xh.json';
import zu from './locales/zu.json';

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  ln: { translation: ln },
  xh: { translation: xh },
  zu: { translation: zu }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;