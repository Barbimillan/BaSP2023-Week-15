class userHomePage {

    async loginform (username, password) {
        await this.userNameInput.setValue(username);
        await this.passwordInput.setValue(password);
    }

    get productsText (){
        return $('#header_container > div.header_secondary_container > span');
    }

    get buttonBurguer (){
        return $('#react-burger-menu-btn');
    }

    get addToCartButtonShopping (){
        return $('#shopping_cart_container > a');
    }

    get containerInventory(){
        return $('#inventory_container');
    }

    get logOutButton () {
        return $('#logout_sidebar_link');
    }

    async buttonBurguerClick() {
        await this.buttonBurguer.click();
    }

    async logOutButtonClick() {
        await this.logOutButton.click();
    }
}

export default new userHomePage();