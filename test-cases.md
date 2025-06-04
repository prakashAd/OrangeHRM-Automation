Manual Test Cases for OrangeHRM

Test Case 1: Verify user can log in with valid credentials
Precondition: User has valid credentials (Admin)
Steps:
1 Navigate to login page
2 Enter valid username and password
3 Click login
Expected: Dashboard loads with a welcome message

Test Case 2: Verify user cannot log in with invalid credentials
Steps:
1 Navigate to login page
2 Enter incorrect username/password
3 Click login
Expected: Error message displayed: "Invalid credentials"

Test Case 3: Verify a new Employee is added successfully
Precondition: Logged in as Admin
Steps:
1 Go to PIM > Add Employee
2 Fill in First Name and Last Name
3 Click Save
4 Go to Employee List and search for the employee
Expected: Employee is listed in search results

Test Case 4: Verify Editing Employee details successfully
Precondition: Employee exists in the list
Steps:
1 Search and select employee
2 Edit job title or contact info
3 Save changes
Expected: Updated details are saved and displayed

Test Case 5: Role-Based Access (Non-admin user)
Precondition: User with limited permissions
Steps:
1 Log in as a non-admin user
2 Try to access PIM module or add employee
Expected: Access denied or restricted
