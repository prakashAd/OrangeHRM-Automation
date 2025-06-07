
import { test } from "@playwright/test";
import { LoginPage } from "../helpers/loginPage";
import { ValidCredentials } from "../fixtures/testData";
import { DashboardPage } from "../helpers/logoutPage";

//logouts the user from system
test.describe("logout test", () => {
  test("successfull logout from system", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.login(ValidCredentials.username, ValidCredentials.password);
    await dashboardPage.logout();
  })})