import { test, expect } from "playwright/test";
import { LoginPage } from "../helpers/loginPage";
import { ValidCredentials, InvalidCredentials } from "../utils/testData";

test.describe("login tests", () => {
  test("Successful login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    //  console.log("here")
    //Test steps
    await loginPage.goto();
    await loginPage.login(ValidCredentials.username, ValidCredentials.password);

    // Assertions
    // 1. Verify exact dashboard URL
    await expect(page).toHaveURL(
      "https://orangehr.demo.diagonal.software/web/index.php/dashboard/index"
    );
  });
  //Test script for incorrect credentials
  test("Incorrect credentials with error message", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      InvalidCredentials.username,
      InvalidCredentials.password
    );
    await expect(page.locator(".oxd-alert-content-text")).toHaveText(
      "Invalid credentials"
    );
  });
});
