class UserHomePage {
  async loginform(username, password) {
    await this.userNameInput.setValue(username);
    await this.passwordInput.setValue(password);
  }

  get productsText() {
    return $("#header_container > div.header_secondary_container > span");
  }

  get buttonBurguer() {
    return $("#react-burger-menu-btn");
  }

  get addToCartButtonShopping() {
    return $("#shopping_cart_container > a");
  }

  get containerInventory() {
    return $("#inventory_container");
  }

  get footerContain() {
    return $("#page_wrapper > footer");
  }

  get footerFbButton() {
    return $("#page_wrapper > footer > ul > li.social_facebook > a");
  }

  get footerTWButton() {
    return $("#page_wrapper > footer > ul > li.social_twitter > a");
  }

  get footerTWButton() {
    return $("#page_wrapper > footer > ul > li.social_twitter > a");
  }

  get footerlinkedinButton() {
    return $("#page_wrapper > footer > ul > li.social_linkedin > a");
  }

  get logOutButton() {
    return $("#logout_sidebar_link");
  }

  async buttonBurguerClick() {
    await this.buttonBurguer.click();
  }

  async footerFbButtonClick() {
    await this.footerFbButton.click();
  }

  async footerTWButtonClick() {
    await this.footerTWButton.click();
  }

  async footerlinkedinButtonClick() {
    await this.footerlinkedinButton.click();
  }

  async logOutButtonClick() {
    await this.logOutButton.click();
  }
}

export default new UserHomePage();
