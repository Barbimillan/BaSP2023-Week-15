import loginPage from "../pageobjects/loginPage.js";

describe("go to login user", () => {
  beforeAll(() => {
    browser.setWindowSize(1360, 768);
    browser.url("https://www.saucedemo.com/");
  });

  it("username required", async () => {
    await loginPage.loginForm("", "");

    await loginPage.loginButtonClick();

    await expect(loginPage.errorMessage).toBeDisplayed();
    await expect(loginPage.errorMessage).toHaveTextContaining(
      "Epic sadface: Username is required"
    );
  });

  it("password required", async () => {
    await loginPage.loginForm("user", "");

    await loginPage.loginButtonClick();

    await expect(loginPage.errorMessage).toBeDisplayed();
    await expect(loginPage.errorMessage).toHaveTextContaining(
      "Epic sadface: Password is required"
    );
  });

  it("username and password not match", async () => {
    await loginPage.loginForm("user", "password");

    await loginPage.loginButtonClick();

    await expect(loginPage.errorMessage).toBeDisplayed();
    await expect(loginPage.errorMessage).toHaveTextContaining(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
