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

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources,
});

export default i18next;
