'use strict';

class LoginMap{

    get username(){return 'input[type="text"]';}
    get password(){return 'input[type="password"]';}
    get submit(){return 'input[type="submit"]';}
    // selector above should be changed once [data-test-ref] attr is implemented

    get isLoaded(){
        return {
            username: this.username,
            password: this.password,
            submit: this.submit
        };
    }

}

module.exports = LoginMap;
