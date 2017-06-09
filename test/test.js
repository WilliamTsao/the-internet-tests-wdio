const ttiLandingPage = require('../pages/ttiLandPage.js');

describe('page is loaded', function(){

    it('links should be visible', function(){
        browser.url('/');
        ttiLandingPage.isLoaded().should.be.true;
    });
});

