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
            <span className="headerButtonContainer">
                <button type="button" onClick={handleClose} className="headerButton" id="closeButton">
                    X
                </button>
                <button type="button" onClick={handleMinify} className="headerButton" id="minifyButton">
                    &#8210;
                </button>
                <button type="button" onClick={handleFullscreen} className="headerButton" id="fullscreenButton">
                    +
                </button>
            </span>
            <div className="appTitle">{appName}</div>
        </div>
    );
};

export default HeaderBar;
