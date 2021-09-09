import React, { useEffect, useState } from 'react';
import './addressBar.css';

const AddressBar = () => {
    const [address, setAddress] = useState('');

    return (
        <div className="addressBar">
            <input type="text" className="address"></input>
        </div>
    );
};
export default AddressBar;
