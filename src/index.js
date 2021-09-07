import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from './services/i18n';
import Hello from './components/Hello/Hello';
import Browser from './components/Browser/Browser';
import Frame from 'react-frame-component';
import './frame.css';

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
