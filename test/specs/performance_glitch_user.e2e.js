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

    const startTime = Date.now();

    await LoginPage.loginForm("performance_glitch_user", "secret_sauce");
    await LoginPage.loginButtonClick();

    const currentUrl = await browser.getUrl();
    expect(currentUrl).toEqual("https://www.saucedemo.com/inventory.html");

    const endTime = Date.now();
    const executionTime = endTime - startTime;
    console.log(`Login execution time: ${executionTime} ms`);
    expect(executionTime).toBeLessThan(2000);
    });

    it("Buy error", async () => {
      await expect(AddToCart.addbackpackButton).toBeDisplayed();
      await expect(AddToCart.addjacketButton).toBeDisplayed();

      await AddToCart.addbackpackButtonClick();

      await AddToCart.addjacketButton.scrollIntoView();
      await AddToCart.addjacketButtonClick();

      await expect(AddToCart.removejacketButton).toBeDisplayed();
      await AddToCart.removejacketButtonClick();

      await expect(AddToCart.toCart).toBeDisplayed();
      await AddToCart.toCartClick();

      await expect(AddToCart.checkout).toBeDisplayed();
      await AddToCart.checkoutClick();

      await AddToCart.checkoutForm("", "", "");
      await expect(AddToCart.continue).toBeDisplayed();
      await AddToCart.continueClick();

      await expect(AddToCart.errorMessage).toHaveTextContaining(
        "Error: First Name is required"
      );
    });

    it("Buy", async () => {
      await AddToCart.checkoutForm("Barbara", "Millan", "2000");
      await expect(AddToCart.continue).toBeDisplayed();
      await AddToCart.continueClick();

      await expect(AddToCart.finish).toBeDisplayed();
      await AddToCart.finish.click();

      const startTime = Date.now();

      await AddToCart.backHomeClick();

      const currentUrl = await browser.getUrl();
      expect(currentUrl).toEqual("https://www.saucedemo.com/inventory.html");

      const endTime = Date.now();
      const executionTime = endTime - startTime;
      console.log(`Login execution time: ${executionTime} ms`);
      expect(executionTime).toBeLessThan(2000);
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

  it("navbar user", async () => {
    await expect(UserHomePage.productsText).toBeDisplayed();
    await expect(UserHomePage.buttonBurguer).toBeDisplayed();
    await UserHomePage.buttonBurguerClick();

    await expect(UserHomePage.logOutButton).toBeDisplayed();
    await UserHomePage.logOutButtonClick();
  });
});
