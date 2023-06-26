class addToCart {
    get addButton (){
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get toCart (){
        return $('#shopping_cart_container');
    }

    get checkout (){
        return $('#checkout');
    }

    get firstNameInput () {
        return $('#first-name')
    }

    get lastNameInput () {
        return $('#last-name')
    }

    get postalCodeInput () {
        return $('#postal-code')
    }

    get continue (){
        return $('#continue');
    }

    get finish (){
        return $('#finish');
    }

    get backHome (){
        return $('#back-to-products');
    }

    get errorMessage (){
        return $('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3')
    }

    async addButtonClick() {
        await this.addButton.click ();
    }

    async toCartClick() {
        await this.toCart.click ();
    }

    async checkoutClick() {
        await this.checkout.click ();
    }

    async checkoutForm (firstname, lastName, postalCode) {
        await this.firstNameInput.setValue(firstname);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(postalCode);
    }

    async continueClick() {
        await this.continue.click ();
    }

    async backHomeClick() {
        await this.backHome.click ();
    }
}

export default new addToCart();