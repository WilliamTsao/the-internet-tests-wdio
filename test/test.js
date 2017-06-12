const ttiLandingPage = require('../pageobjects/ttiLandingPage.js');

describe('landing page is loaded', function(){

    before(function() {
        // runs before all tests in this block
        browser.url('/');
        ttiLandingPage.isLoaded().should.be.true;
    });

    it('some other tests', function(){
        
    });
});

