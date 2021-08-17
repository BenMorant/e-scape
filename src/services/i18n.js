import i18next from 'i18next';
import commonFr from '../translations/fr/common.json';
import commonEn from '../translations/en/common.json';

const resources = {
    en: {
        common: commonEn,
    },
    fr: {
        common: commonFr,
    },
};

i18next
    .init({
        interpolation: { escapeValue: false },
        lng: 'en',
        resources,
    })
    .then(() => {
        if (i18next.languages.every(lang => i18next.getDataByLanguage(lang) === undefined)) {
            throw new Error('Failed to load localization');
        }
    });

export default i18next;
