import loginPage from "../pageobjects/loginPage.js";
import addToCart from "../pageobjects/addToCart.js";

describe('go to login user', () => {
    beforeAll(() => {
        browser.setWindowSize(1360, 768);
        browser.url("https://www.saucedemo.com/");
    });

    it('success process', async () => {
        await expect(loginPage.loginButton).toBeDisplayed();
        await expect(loginPage.userNameInput).toBeDisplayed();
        await loginPage.loginForm("locked_out_user", "secret_sauce");
        await loginPage.loginButtonClick();
        await expect(loginPage.errorMessage).toHaveTextContaining('Epic sadface: Sorry, this user has been locked out.');
    });
});