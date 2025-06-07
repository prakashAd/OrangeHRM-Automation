Manual Test Cases for OrangeHRM

Test Case 1: Verify user can log in with valid credentials
Precondition: User has valid credentials (Admin)
Steps:
1 Navigate to login page
2 Enter valid username and password
3 Click login
Expected: Dashboard Page loads

Test Case 2: Verify user cannot log in with invalid credentials
Steps:
1 Navigate to login page
2 Enter incorrect username/password
3 Click login
Expected: Error message displayed: "Invalid credentials"

Test Case 3: Verify a new Employee is added successfully
Precondition: Logged in as Admin
Steps:
1 Go to ADMIN > Add Button
2 Select User Role,User Status,Fill Employee Name,Username,Password,confirm Password
3 Click Save
4 Go to Employee List and search for the employee
Expected: Employee is listed in search results

Test Case 4: Verify Editing Employee details successfully
Precondition: Employee exists in the list
Steps:
1 Search and select employee
2 Edit User Role,Employee Name,Status,ChangePassword
3 Click Save
Expected: Updated details are saved and displayed

Test Case 5: Verify user can logout from system
Precondition: User has valid credentials (Admin)
Steps:
1 Navigate to login page
2 Enter valid username and password
3 Click login
4.Navigated to Dashboard
5.Click to user name at top right corner, a modal appears and click to logout button
Expected: Login page is displayed
