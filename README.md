# Employee_Tracker

### <ins>Description<ins>
Welcome to my SQL employee database tracker where users can easily view and interact with information through the command-line of the application that is stored in an SQL Employee Tracker database.

## Overview
### <ins>The Challenge:<ins>
    Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). Your assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

### <ins>User Story:<ins>
    AS A business owner
    I WANT to be able to view and manage the departments, roles, and employees in my company
    SO THAT I can organize and plan my business

### <ins>Acceptance Criteria:<ins>
    GIVEN a command-line application that accepts user input
    WHEN I start the application
    THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
    WHEN I choose to view all departments
    THEN I am presented with a formatted table showing department names and department ids
    WHEN I choose to view all roles
    THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
    WHEN I choose to view all employees
    THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    WHEN I choose to add a department
    THEN I am prompted to enter the name of the department and that department is added to the database
    WHEN I choose to add a role
    THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
    WHEN I choose to add an employee
    THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
    WHEN I choose to update an employee role
    THEN I am prompted to select an employee to update and their new role and this information is updated in the database

### <ins>Installation Instructions & Process<ins>
### Instructions
Before initiating the application, be sure to install inquirer and mysql2@8.2.4. The mysql version is a requirement for this application to run properly.
### Process
1. Clone or download the zip folder of the repo: [Toshie's Employee_Tracker Repo](https://github.com/tmaraki/Employee_Tracker/tree/main)
2. Install the following:
    - Inquirer.js Version 8.2.4
        
        npm i inquirer@8.2.4

    - MySQL2 Version 3.1.2
        
        npm i mysql2

3. Open repo in any source code editor
4. Open the integrated terminal and follow the [Usage Instructions](#usage-instructions) to initiate the application

### <ins>Usage Instructions<ins>
1. Open the Content Management System named Employee_Tracker
2. Open the 'Integrated Terminal' on the 'server.js' file
3. Initialize the application! In the integrated terminal, type the command:
    node server.js
4. Use the 'UP' and 'DOWN' arrows to navigate, and 'ENTER' to select an option
5. Follow the command-line prompts until you have your desired output

If you run into error messages, you may need to log into Mysql and run all three sql files:
1. Log into Mysql using command:

    mysql -u root -p

2. Run all three sql files using commands:

    SOURCE db/schema.sql
    SOURCE db/seeds.sql
    SOURCE db/query.sql

3. Exit mysql by typing:

    exit

### <ins>Walkthrough Video<ins>
[Click Here](https://drive.google.com/file/d/12sTHu8Eo5lpIcp1F46UmDhcRV--8Hf0r/view?usp=sharing) for a walkthrough video. 

### <ins>Repository Link<ins>
[Toshie's Github Repository for Employee_Tracker](https://github.com/tmaraki/Employee_Tracker/tree/main)
