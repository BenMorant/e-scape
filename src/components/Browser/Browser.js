import React from 'react';
import AddressBar from './AddressBar';
import './browser.css';
import HeaderBar from './HeaderBar';
import TabsBar from './TabsBar';

const Browser = () => {
    return (
        <nav className="browser">
            <HeaderBar />
            <TabsBar />
            <AddressBar />
        </nav>
    );
};
export default Browser;
