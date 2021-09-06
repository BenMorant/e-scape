import './headerBar.css';

const HeaderBar = () => {
    const appName = 'E-Scape';

    const handleClose = () => {
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
        <>
            <h1>Je suis la headerBar</h1>
            <button type="button" onClick={handleClose} className="closeButton">
                close
            </button>
            <button type="button" onClick={handleMinify} className="minifyButton">
                minify
            </button>
            <button type="button" onClick={handleFullscreen} className="fullscreenButton">
                fullscreen
            </button>
            {appName}
        </>
    );
};

export default HeaderBar;
