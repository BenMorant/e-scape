import React from 'react';
import AddressBar from './AddressBar';
import './browser.css';
import HeaderBar from './HeaderBar';

const Browser = () => {
    const address = null;

    return (
        <nav className="browser">
            <HeaderBar />
            <AddressBar />
        </nav>
    );
};
export default Browser;
