import { Locator, Page, expect } from "@playwright/test";
// import { UserData } from "../fixtures/employee";

export class DashboardPage {
  readonly page: Page;
  readonly userNameMenu: Locator;
  readonly dropDownMenu: Locator;
  readonly logoutButton: Locator;
  readonly adminButton: Locator;
  readonly addUserContainer: Locator;
  readonly addUserButton: Locator;
  readonly clickOnstatus: Locator;
  readonly userRoleDropdown: Locator;
  readonly clickToRole: Locator;
  readonly clickToEnabled: Locator;
  readonly EmployNameInput: Locator;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly clickToSave: Locator;
  readonly essOption: Locator;
  readonly selectEmployeeName: Locator;

  constructor(page: Page) {
    this.userNameMenu = page.locator(
      "xpath=//p[@class='oxd-userdropdown-name']"
    );
    this.dropDownMenu = page.locator("xpath=//ul[@class='oxd-dropdown-menu']");
    this.logoutButton = page.locator(
      "xpath=//a[@class='oxd-userdropdown-link'][text()='Logout']"
    );
    this.adminButton = page.locator(
      "xpath=(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[1]"
    );
    this.addUserButton = page.locator(
      "xpath=//button[@class='oxd-button oxd-button--medium oxd-button--secondary']"
    );
    this.addUserContainer = page.locator(
      "xpath=//div[@class='orangehrm-card-container']"
    );
    this.clickToRole = page.locator(
      "xpath =//div[@class='oxd-form-row']/div[1]/div[1]/div[1]/div[2]"
    );
    this.userRoleDropdown = page.locator(
      "xpath=//div[@class='oxd-form-row']/div[1]/div[3]"
    );
    this.clickOnstatus = page.locator(
      "xpath=//div[@class='oxd-form-row']/div[1]/div[3]/div[1]/div[2]"
    );
    this.clickToEnabled = page.locator("xpath=//span[text()='Enabled']");

    this.EmployNameInput = page.getByPlaceholder("Type for hints...");
    this.selectEmployeeName = page.locator(
      "xpath=//span [text()='Paypal Raj Bhandari']"
    );
    this.userNameInput = page.locator(
      "xpath =(//input[contains(@class, 'oxd-input') and @autocomplete='off'])[1] "
    );
    this.passwordInput = page.locator("xpath=(//input[@type='password'])[1]");
    this.confirmPasswordInput = page.locator(
      "xpath=(//input[@type='password'])[2]"
    );
    this.clickToSave = page.locator(
      "xpath=//button[@class='oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space']"
    );
    this.essOption = page.locator("xpath=//span[text()='ESS']");
  }

  async adduser(
    employeeName: string,
    username: string,
    password: string,
    confirmPassword: string
  ) {
    try {
      await this.adminButton.waitFor({ state: "visible", timeout: 5000 });
      await this.adminButton.click(); // it will click on the Admin option of the sidebar
      // Wait for navigation to complete
      await this.addUserButton.waitFor({ state: "visible", timeout: 5000 });
      await this.addUserButton.click(); // it will click on the Add user button of the Admin page

      await this.addUserContainer.waitFor({ state: "visible", timeout: 5000 });

      await this.clickToRole.waitFor({ state: "visible", timeout: 10000 });
      await this.clickToRole.click(); // it will click the user role dropdown

      await this.userRoleDropdown.waitFor({ state: "visible", timeout: 10000 }); // it will wait for the dropdown

      await this.essOption.waitFor({
        state: "visible",
        timeout: 10000,
      });
      await this.essOption.click(); // it will click the ESS option

      await this.clickOnstatus.waitFor({ state: "visible", timeout: 5000 });
      await this.clickOnstatus.click();
      await this.clickToEnabled.waitFor({ state: "visible", timeout: 5000 });
      await this.clickToEnabled.click(); //it will click on the Enabled option
      await this.EmployNameInput.fill(employeeName); //it will fill the employee name
      await this.selectEmployeeName.waitFor({
        state: "visible",
        timeout: 10000,
      });
      await this.selectEmployeeName.click(); //it will select to the employee
      await this.userNameInput.fill(username); //it will fill username
      await this.passwordInput.fill(password); //it will fill password
      await this.confirmPasswordInput.fill(confirmPassword);
      await this.clickToSave.click();
    } catch (error: any) {
      throw new Error(`Unable to add user,${error}`);
    }
  }
  async logout() {
    try {
      await this.userNameMenu.waitFor({ state: "visible", timeout: 5000 });
      await this.userNameMenu.click();
      await this.dropDownMenu.waitFor({ state: "visible", timeout: 5000 });
      await this.logoutButton.click();
    } catch (error: any) {
      throw new Error(`Unable to logout from system,,${error}`);
    }
  }
}
