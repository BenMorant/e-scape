import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
// "Inline" English and French translations.
// We can localize to any language and any number of languages.
const resources = {
    en: {
        translation: {
            hello_world: 'Hello world !',
        },
    },
    fr: {
        translation: {
            hello_world: 'Salut le monde !',
        },
    },
};
i18next.use(initReactI18next).init({
    resources,
    lng: 'fr',
    interpolation: {
        escapeValue: false,
    },
    debug: true,
});
export default i18next;
