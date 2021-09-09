import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tab from './Tab';

const TabsBar = () => {
    const [tabs, setTabs] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/e-scape/sites.json')
            .then(resp => resp.data)
            .then(setTabs)
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <ul>
                {tabs.map(tab => (
                    <Tab key={tab.id} tab={tab} />
                ))}
            </ul>
        </div>
    );
};

export default TabsBar;
