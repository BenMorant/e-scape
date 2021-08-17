import { useTranslation } from 'react-i18next';

const Hello = () => {
    const { t, i18n } = useTranslation('common');

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <button type="button" onClick={() => changeLanguage('fr')}>
                fr
            </button>
            <button type="button" onClick={() => changeLanguage('en')}>
                en
            </button>

            <div>
                <h1>{t('hello_world')}</h1>
            </div>
        </div>
    );
};
export default Hello;
