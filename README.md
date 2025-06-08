
Automation Scripts for OrangeHRM
Why Playwright?
  Playwright is used for automation due to:
- Native support for Chromium, Firefox, WebKit
- Built-in test runner and fixtures
- Screenshot, video, and trace capturing
- Auto-waiting for elements
- Rich HTML reports


 Test Types & Prioritization
  Priority | Description                          

 P0         Login, Add User, Logout          
 P1         Edit/Delete User, View Records   
 P2         Role-based access, negative scenarios

  Test Types:
- Smoke Testing
- Functional Testing (CRUD)
- Negative Testing
- Role-Based Access Control (RBAC)

Instructions for executing automated tests, including environment setup and
dependencies:

 1.Clone the Repository

git clone <repo-url>

2.Install Dependencies
npm install


3.Install Browsers

npx playwright install --with-deps

4.Run All Tests

npx playwright test


5.Run Specific Test

npx playwright test tests/login.spec.ts


6.View HTML Report

npx playwright show-report


#Reporting
- Screenshots, videos, and traces are captured on test failures
- HTML report generated in `/playwright-report`

