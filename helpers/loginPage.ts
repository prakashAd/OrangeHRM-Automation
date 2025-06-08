import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly baseUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = process.env.BASE_URL || 'https://orangehr.demo.diagonal.software/web/index.php/auth/login';

    // Initialize all locators
    this.usernameInput = page.locator("xpath=//input[@placeholder='Username']");
    this.passwordInput = page.locator(
      "xpath =//input[@placeholder='Password']"
    );
    this.loginButton = page.locator(
      "xpath=//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']"
    );
    this.errorMessage = page.locator(
      "xpath=//p[contains(@class, 'oxd-alert-content-text')]"
    );
  }
  async goto(): Promise<void> {
    // Add your base URL here
    try {
      await this.page.goto(this.baseUrl)
    } catch (error) {
      throw new Error(`Navigation to base  url is failed,${error}`);
    }
  }

  async login(username: string, password: string): Promise<void> {
    try {
      await this.usernameInput.waitFor({ state: "visible", timeout: 5000 });
      await this.usernameInput.fill(username);
      await this.passwordInput.waitFor({ state: "visible", timeout: 5000 });
      await this.passwordInput.fill(password);
      await this.loginButton.waitFor({ state: "visible", timeout: 5000 });
      await this.loginButton.click();
      await this.page.waitForTimeout(10000);
    } catch (error: any) {
      throw new Error(`Unable to Login to system,${error}`);
    }
  }

  // Error assertion
  async assertErrorMessage(expectedText: string): Promise<void> {
    await expect(this.errorMessage).toHaveText(expectedText);
  }
  //Add success verification
  async verifysuccessfulLogin(): Promise<void> {
    await expect(this.page).toHaveURL(
      "https://orangehr.demo.diagonal.software/web/index.php/dashboard/index"
    );
  }
}
