import { test } from "@playwright/test";
import { AdminPage } from "../helpers/adminPage";
import { LoginPage } from "../helpers/loginPage";
import { UserData, ValidCredentials } from "../utils/testData";

// Addition of new user
test("Create new user", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);

  await loginPage.goto();
  await loginPage.login(ValidCredentials.username, ValidCredentials.password);
  await adminPage.adduser(
    UserData.employeeName,
    UserData.username,
    UserData.password,
    UserData.confirmPassword
  );
  await page.waitForTimeout(2000);
});

//Updating a existing user
test("Update a existing user", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);
  await loginPage.goto();
  await loginPage.login(ValidCredentials.username, ValidCredentials.password);
  await adminPage.updateUser();
});

//Deletion of user
test("Delete new user", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);

  await loginPage.goto();
  await loginPage.login(ValidCredentials.username, ValidCredentials.password);
  await adminPage.deleteUser();
});
