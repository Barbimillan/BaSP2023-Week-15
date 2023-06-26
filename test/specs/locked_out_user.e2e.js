import LoginPage from "../pageobjects/LoginPage.js";

describe("go to login user", () => {
  beforeAll(() => {
    browser.setWindowSize(1360, 768);
    browser.url("https://www.saucedemo.com/");
  });

  it("success process", async () => {
    await expect(LoginPage.loginButton).toBeDisplayed();
    await expect(LoginPage.userNameInput).toBeDisplayed();
    await LoginPage.loginForm("locked_out_user", "secret_sauce");
    await LoginPage.loginButtonClick();
    await expect(LoginPage.errorMessage).toHaveTextContaining(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
