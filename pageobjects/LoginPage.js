'use strict';
var Page = require('./page');
const UiMap = require('../uimap/LoginMap');
// const Util = require('../util/util');
// const MAX_WAIT = require('constants').waitTime;

const uimap = new UiMap();

class LoginPage extends Page{
    open(){
        super.open('login');
    }
    isLoaded(){
        return super.isLoaded(uimap.isLoaded);
    }
    validLogin(){
        browser.click(uimap.username);
        browser.keys('tsao@photoshelter.com');
        browser.click(uimap.password);
        browser.keys('Raveen^Futt');
        browser.click(uimap.submit);
        browser.waitUntil(function(){
            return browser.getUrl() != 'https://www.photoshelter.com/login';
        });
        return browser.getUrl();
    }
    invalidLogin(){
        browser.click(uimap.username);
        browser.keys('tsao@photoshelter.com');
        browser.click(uimap.password);
        browser.keys('wrong_password');
        browser.click(uimap.submit);
        browser.waitUntil(function(){
            return browser.getUrl() != 'https://www.photoshelter.com/login';
        });
        return browser.getUrl();
    }
}

module.exports = new LoginPage();
