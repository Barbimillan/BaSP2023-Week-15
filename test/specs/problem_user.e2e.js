import LoginPage from "../pageobjects/LoginPage.js";
import UserHomePage from "../pageobjects/homePageuser.js";
import AddToCart from "../pageobjects/addToCart.js";

describe("go to login user", () => {
  beforeAll(() => {
    browser.setWindowSize(1360, 768);
    browser.url("https://www.saucedemo.com/");
  });

  it("success process", async () => {
    await expect(LoginPage.loginButton).toBeDisplayed();
    await expect(LoginPage.userNameInput).toBeDisplayed();

    await LoginPage.loginForm("problem_user", "secret_sauce");
    await LoginPage.loginButtonClick();

    const currentUrl = await browser.getUrl();
    expect(currentUrl).toEqual("https://www.saucedemo.com/inventory.html");
  });

  it("open facebook", async () => {
    await UserHomePage.footerFbButton.scrollIntoView();
    await expect(UserHomePage.footerFbButton).toBeDisplayed();
    await UserHomePage.footerFbButtonClick();

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
    await UserHomePage.footerTWButton.scrollIntoView();
    await expect(UserHomePage.footerTWButton).toBeDisplayed();
    await UserHomePage.footerTWButtonClick();

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
    await UserHomePage.footerlinkedinButton.scrollIntoView();
    await expect(UserHomePage.footerlinkedinButton).toBeDisplayed();
    await UserHomePage.footerlinkedinButtonClick();

    const windowHandles = await browser.getWindowHandles();

    const linkedinWindowHandle = windowHandles[windowHandles.length - 1];
    await browser.switchToWindow(linkedinWindowHandle);

    const linkedinTitle = await browser.getTitle();
    expect(linkedinTitle).toBeDisplayed("linkedin");

    await browser.closeWindow();

    const originalWindowHandle = windowHandles[0];
    await browser.switchToWindow(originalWindowHandle);
  });

  it("Buy", async () => {
    await expect(AddToCart.addbackpackButton).toBeDisplayed();
    await AddToCart.addbackpackButtonClick();

    await expect(AddToCart.toCart).toBeDisplayed();
    await AddToCart.toCartClick();

    await expect(AddToCart.checkout).toBeDisplayed();
    await AddToCart.checkoutClick();

    await AddToCart.checkoutForm("Barbara", "Millan", "2000");
    await expect(AddToCart.continue).toBeDisplayed();
    await AddToCart.continueClick();

    await expect(AddToCart.errorMessage).toHaveTextContaining(
      "Error: Last Name is required"
    );
  });

  it("navbar user", async () => {
    await expect(UserHomePage.productsText).toBeDisplayed();
    await expect(UserHomePage.buttonBurguer).toBeDisplayed();
    await UserHomePage.buttonBurguerClick();

    await expect(UserHomePage.logOutButton).toBeDisplayed();
    await UserHomePage.logOutButtonClick();
  });
});
