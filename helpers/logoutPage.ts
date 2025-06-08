import { Locator, Page, expect } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  readonly userNameMenu: Locator;
  readonly dropDownMenu: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.userNameMenu = page.locator(
      "xpath=//p[@class='oxd-userdropdown-name']"
    );
    this.dropDownMenu = page.locator("xpath=//ul[@class='oxd-dropdown-menu']");
    this.logoutButton = page.locator(
      "xpath=//a[@class='oxd-userdropdown-link'][text()='Logout']"
    );
}
   async logout() {
    try {
      await this.userNameMenu.waitFor({ state: "visible", timeout: 5000 });
      await this.userNameMenu.click();
      await this.dropDownMenu.waitFor({ state: "visible", timeout: 5000 });
      await this.logoutButton.click();
    } catch (error: any) {
      throw new Error(`Unable to logout user from system,,${error}`);
    }
}
}
