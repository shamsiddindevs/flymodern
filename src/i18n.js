import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ru from './locales/ru.json';
import uz from './locales/uz.json';

// Translation files
const resources = {
    en: { translation: en },
    ru: { translation: ru },
    uz: { translation: uz },
  };
const savedLanguage = localStorage.getItem('language') || 'uz';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLanguage, // Default language
        fallbackLng: 'en', // Fallback language
        interpolation: {
            escapeValue: false, // React already escapes values
        },
    });

export default i18n;