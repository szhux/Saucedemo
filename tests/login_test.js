import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";

fixture `Login Page`
    .page("https://www.saucedemo.com/");

test("Login with correct credentials", async t => {
    await t
        .typeText(LoginPage.usernameInput, "standard_user")
        .typeText(LoginPage.passwordInput, "secret_sauce")
        .click(LoginPage.loginButton)
        .expect(ProductPage.inventoryList.visible).ok("Invetory item list is displayed");
});

test("Login with incorrect credentials", async t => {
    await t
        .typeText(LoginPage.usernameInput, "standard_user")
        .typeText(LoginPage.passwordInput, "secret_sauce2")
        .click(LoginPage.loginButton)
        .expect(LoginPage.errorMessage.innerText).contains("Epic sadface")
});