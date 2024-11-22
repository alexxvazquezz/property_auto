const { expect } = require('@playwright/test');


exports.LoginPage = class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        this.usernameInput = page.locator("//div/input[@type='text']");
        this.passwordInput = page.locator("//div/input[@type='password']");
        this.loginButton = page.locator("//button[text()='Login']");
     }
    
     async inputUsername(username) {
        await this.usernameInput.fill(username)
     }

     async inputPassword(password) {
        await this.passwordInput.fill(password);
     }

     async clickLogin() {
        await this.loginButton.click();
     }

     async login(username, password) {
        await this.inputUsername(username);
        await this.inputPassword(password);
        await this.clickLogin();
     }
}

