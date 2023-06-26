class loginPage {

    get userNameInput () {
        return $('#user-name')
    }

    get passwordInput () {
        return $('#password')
    }

    get loginButton () {
        return $('#login-button');
    }

    get errorMessage (){
        return $('#login_button_container > div > form > div.error-message-container.error > h3')
    };

    get footerContain (){
        return $('#page_wrapper > footer');
    }

    get footerFbButton(){
        return $('#page_wrapper > footer > ul > li.social_facebook > a')
    }

    async loginForm (username, password) {
        await this.userNameInput.setValue(username);
        await this.passwordInput.setValue(password);
    }

    async loginButtonClick() {
        await this.loginButton.click ();
    }

    async footerFbButtonClick() {
        await this.footerFbButton.click();
    }
}

export default new loginPage();