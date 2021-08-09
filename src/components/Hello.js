import React from 'react';
import { useTranslation } from 'react-i18next';

const Hello () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('hello_world')}</h1>
            <h2> 06 Aug 2021</h2>
        </div>
    );
};

export default Hello;
