import { test } from "@playwright/test";
import { DashboardPage } from "../helpers/dashboard";
import { LoginPage } from "../helpers/login";
import { UserData, ValidCredentials } from "../fixtures/employee";

test.describe("logout", () => {
  test("successfull logout from system", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.login(ValidCredentials.username, ValidCredentials.password);
    await dashboardPage.logout();
  });
  // Navigate to "Add Employee"
  test.only("Create new employee", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.login(ValidCredentials.username, ValidCredentials.password);
    await dashboardPage.adduser(
      UserData.employeeName,
      UserData.username,
      UserData.password,
      UserData.confirmPassword
    );
  });
});
