import LoginPage from "../pageobjects/LoginPage.js";

describe("go to login user", () => {
  beforeAll(() => {
    browser.setWindowSize(1360, 768);
    browser.url("https://www.saucedemo.com/");
  });

  it("username required", async () => {
    await LoginPage.loginForm("", "");

    await LoginPage.loginButtonClick();

    await expect(LoginPage.errorMessage).toBeDisplayed();
    await expect(LoginPage.errorMessage).toHaveTextContaining(
      "Epic sadface: Username is required"
    );
  });

  it("password required", async () => {
    await LoginPage.loginForm("user", "");

    await LoginPage.loginButtonClick();

    await expect(LoginPage.errorMessage).toBeDisplayed();
    await expect(LoginPage.errorMessage).toHaveTextContaining(
      "Epic sadface: Password is required"
    );
  });

  it("username and password not match", async () => {
    await LoginPage.loginForm("user", "password");

    await LoginPage.loginButtonClick();

    await expect(LoginPage.errorMessage).toBeDisplayed();
    await expect(LoginPage.errorMessage).toHaveTextContaining(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
