const homepageMap = require('../uimap/homepagemap.js');
describe('page is loaded', function(){
    it('links should be visible', function(){
        browser.url('/');
        for(const key in homepageMap.links){
            isLoaded(homepageMap.links[key]).should.be.true;
        }
    });
    it('headings should be visible', function(){
        for(const key in homepageMap.headings){
            isLoaded(homepageMap.headings[key]).should.be.true;
        };}
    });
});


function isLoaded(name){
    /*if (browser.isVisible(name)){
        return true;
    }
    else{
        if(browser.isExisting(name)){
            console.log(`${name} exists but is not visible`);
        }else{
            console.log(`${name} does not exist in DOM`);
        }
        return false;
    }*/
    return browser.isVisible(name);
}