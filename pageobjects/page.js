'use strict';

class Page{
    constructor(){
        this.title = 'My page';
        browser.on('error', function(e) {
            // will be executed everytime an error occurred
            // e.g. when element couldn't be found
            console.log(e.body.value.class);   // -> "org.openqa.selenium.NoSuchElementException"
            console.log(e.body.value.message); // -> "no such element ..."
        });
    }

    open(path){
        browser.url('/' + path);
    }

    isLoaded(essentials){
        let loaded = true;
        for(const key in essentials){
            loaded = browser.isVisible(essentials[key]);
            if(!loaded){
                console.log(`${key} is not loaded`);
                break;
            }
        }
        return loaded;
    }
}

module.exports = Page;
