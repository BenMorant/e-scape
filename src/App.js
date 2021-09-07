import Hello from './components/Hello/Hello';
import Browser from './components/Browser/Browser';
import Frame from 'react-frame-component';

function App() {
    return (
        <div className="App">
            <Browser />
            <Frame className="pages-container" head={<link type="text/css" rel="stylesheet" href="./frame.css" />}>
                <Hello />
            </Frame>
        </div>
    );
}

export default App;
