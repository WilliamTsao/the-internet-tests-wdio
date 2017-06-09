const ttiLandingMap = require('../uimap/ttiLandingMap.js');

const ttiLandingPage = {
    isLoaded(){
        let loaded = true;
        const essentials = ttiLandingMap.isLoaded();
        for(const name in essentials){
            loaded = browser.isVisible(essentials[name]);
            if(!loaded){
                console.log(`${name} is not loaded`);
                break;
            }
            console.log(`${name} is loaded`);

        }
        return loaded;
    }
};

module.exports = ttiLandingPage;
