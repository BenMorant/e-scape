// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// without stubbing do this:
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// i18n.use(initReactI18next).init({
//   lng: 'en',
//   fallbackLng: 'en',

//   // have a common namespace used around the full app
//   ns: ['translations'],
//   defaultNS: 'translations',

//   // debug: true,

//   interpolation: {
//     escapeValue: false, // not needed for react!!
//   },

//   resources: { en: { translations: {} } },
// });

Enzyme.configure({ adapter: new Adapter() });
