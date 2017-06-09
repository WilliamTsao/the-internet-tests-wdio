const ttiLandingPage = require('../pageobjects/ttiLandingPage.js');

describe('landing page is loaded', function(){

    it('links should be visible', function(){
        browser.url('/');
        ttiLandingPage.isLoaded().should.be.true;
    });
});

