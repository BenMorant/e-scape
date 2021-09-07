import './headerBar.css';

const HeaderBar = () => {
    const appName = 'E-Scape';

    const handleClose = () => {
        // eslint-disable-next-line no-restricted-globals, no-alert
        if (confirm("Voulez vous vraiment quitter l'application ?")) {
            window.close();
        }
    };

    const handleMinify = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    };

    const handleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        }
    };

    return (
        <div className="headerBar">
            <div className="headerButtonContainer">
                <button type="button" onClick={handleClose} className="headerButton" id="closeButton">
                    <span className="buttonSymbol">x</span>
                </button>
                <button type="button" onClick={handleMinify} className="headerButton" id="minifyButton">
                    <span className="buttonSymbol">-</span>
                </button>
                <button type="button" onClick={handleFullscreen} className="headerButton" id="fullscreenButton">
                    <span className="buttonSymbol">+</span>
                </button>
            </div>
            <div className="appTitle">{appName}</div>
        </div>
    );
};

export default HeaderBar;
