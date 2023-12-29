import { Locator, Page, expect } from "@playwright/test";

export default class LoginPage{

    userNameField: Locator;
    passwordField: Locator;
    loginButton: Locator;

    constructor (protected page:Page){
    this.userNameField = this.page.locator('[data-test="username"]');
    this.passwordField = this.page.locator('[data-test="password"]');
    this.loginButton = this.page.locator('[data-test="login-button"]');
    }

    public async loginToApplication(username:string, password:string, url:string){
        await this.page.goto(url);
        await this.validateRightLinkDisplay(url);
        await this.userNameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
        await this.validateRightLinkDisplay(`${url}inventory.html`);
    }

    public async validateRightLinkDisplay(url:string){
        await expect(this.page).toHaveURL(url);
    }

}