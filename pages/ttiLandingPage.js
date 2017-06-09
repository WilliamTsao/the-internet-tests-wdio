const ttiLandingMap = require('../pages/ttiLandMap.js');

class ttiLandingPage {
    isLoaded(){
        let loaded = true;
        for(const selector in ttiLandingMap.isLoaded()){
            loaded = browser.isVisible(selector);
            if(!loaded){
                return false;
            }
        }
    }
}

module.exports = ttiLandingPage;
