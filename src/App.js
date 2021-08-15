import React, { Suspense } from 'react';
import Hello from './components/Hello';

function App() {
    return (
        <Suspense fallback="loading">
            <div className="App">
                <Hello />
            </div>
        </Suspense>
    );
}

export default App;
