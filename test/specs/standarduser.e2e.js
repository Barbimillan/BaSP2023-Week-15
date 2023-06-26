import loginPage from "../pageobjects/loginPage.js";
import userHomePage from "../pageobjects/homePageuser.js";
import addToCart from "../pageobjects/addToCart.js";

describe("go to login user", () => {
  beforeAll(() => {
    browser.setWindowSize(1360, 768);
    browser.url("https://www.saucedemo.com/");
  });

  it("success process", async () => {
    await expect(loginPage.loginButton).toBeDisplayed();
    await expect(loginPage.userNameInput).toBeDisplayed();

    await loginPage.loginForm("standard_user", "secret_sauce");
    await loginPage.loginButtonClick();

    const currentUrl = await browser.getUrl();
    expect(currentUrl).toEqual("https://www.saucedemo.com/inventory.html");
  });

  it("Buy error", async () => {
    await expect(addToCart.addbackpackButton).toBeDisplayed();
    await expect(addToCart.addjacketButton).toBeDisplayed();

    await addToCart.addbackpackButtonClick();

    await addToCart.addjacketButton.scrollIntoView();
    await addToCart.addjacketButtonClick();

    await expect(addToCart.removejacketButton).toBeDisplayed();
    await addToCart.removejacketButtonClick();

    await expect(addToCart.toCart).toBeDisplayed();
    await addToCart.toCartClick();

    await expect(addToCart.checkout).toBeDisplayed();
    await addToCart.checkoutClick();

    await addToCart.checkoutForm("", "", "");
    await expect(addToCart.continue).toBeDisplayed();
    await addToCart.continueClick();

    await expect(addToCart.errorMessage).toHaveTextContaining(
      "Error: First Name is required"
    );
  });

  it("Buy", async () => {
    await addToCart.checkoutForm("Barbara", "Millan", "2000");
    await expect(addToCart.continue).toBeDisplayed();
    await addToCart.continueClick();

    await expect(addToCart.finish).toBeDisplayed();
    await addToCart.finish.click();

    await addToCart.backHomeClick();
  });

  it("open facebook", async () => {
    await userHomePage.footerFbButton.scrollIntoView();
    await expect(userHomePage.footerFbButton).toBeDisplayed();
    await userHomePage.footerFbButtonClick();

    const windowHandles = await browser.getWindowHandles();

    const facebookWindowHandle = windowHandles[windowHandles.length - 1];
    await browser.switchToWindow(facebookWindowHandle);

    const facebookTitle = await browser.getTitle();
    expect(facebookTitle).toBeDisplayed("facebook");

    await browser.closeWindow();

    const originalWindowHandle = windowHandles[0];
    await browser.switchToWindow(originalWindowHandle);
  });

  it("open twitter", async () => {
    await userHomePage.footerTWButton.scrollIntoView();
    await expect(userHomePage.footerTWButton).toBeDisplayed();
    await userHomePage.footerTWButtonClick();

    const windowHandles = await browser.getWindowHandles();

    const twitterWindowHandle = windowHandles[windowHandles.length - 1];
    await browser.switchToWindow(twitterWindowHandle);

    const twitterTitle = await browser.getTitle();
    expect(twitterTitle).toBeDisplayed("twitter");

    await browser.closeWindow();

    const originalWindowHandle = windowHandles[0];
    await browser.switchToWindow(originalWindowHandle);
  });

  it("open linkedin", async () => {
    await userHomePage.footerlinkedinButton.scrollIntoView();
    await expect(userHomePage.footerlinkedinButton).toBeDisplayed();
    await userHomePage.footerlinkedinButtonClick();

    const windowHandles = await browser.getWindowHandles();

    const linkedinWindowHandle = windowHandles[windowHandles.length - 1];
    await browser.switchToWindow(linkedinWindowHandle);

    const linkedinTitle = await browser.getTitle();
    expect(linkedinTitle).toBeDisplayed("linkedin");

    await browser.closeWindow();

    const originalWindowHandle = windowHandles[0];
    await browser.switchToWindow(originalWindowHandle);
  });

  it("navbar user", async () => {
    await expect(userHomePage.productsText).toBeDisplayed();
    await expect(userHomePage.buttonBurguer).toBeDisplayed();
    await userHomePage.buttonBurguerClick();

    await expect(userHomePage.logOutButton).toBeDisplayed();
    await userHomePage.logOutButtonClick();
  });
});
