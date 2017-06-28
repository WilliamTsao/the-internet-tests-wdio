const LoginPage = require('../pageobjects/LoginPage.js');
describe('Login', function(){

    beforeEach(function() {
        // runs before all tests in this block
        LoginPage.open();
        LoginPage.isLoaded().should.be.true;
    });

    it('valid login', function(){
        LoginPage.validLogin().should.be.equal('https://www.photoshelter.com/mem/home/index');
    });

    it('invalid login', function(){
        LoginPage.invalidLogin().should.be.equal('https://www.photoshelter.com/login');
    });

});
