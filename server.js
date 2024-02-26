//imports
const inquirer = require("inquirer");
const mysql = require("mysql2");
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to db
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
  },
  console.log(`Connected to the movies_db database.`)
);

app.get('/', async (req, res) => {
    // prompt user for action
    const userChoice = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Select an action:',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
        ],
      },
    ]);
})

switch (userChoice.action) {
    case "View all departments":
        viewAllDepartments();
        break;
    case "View all employees":
        viewAllEmployees();
        break;
    case "Add a department":
        addDepartment();
        break;
    case "Add a role":
        addRole();
        break;
    case "Add an employee":
        addEmployee();
        break;
    case "Add a Manager":
        addManager();
        break;
    case "Update an employee role":
        updateEmployeeRole();
        break;
    case "View Employees by Manager":
        viewEmployeesByManager();
        break;
    case "View Employees by Department":
        viewEmployeesByDepartment();
        break;
    case "Delete Departments | Roles | Employees":
        deleteDepartmentsRolesEmployees();
        break;
    case "View the total utilized budget of a department":
        viewTotalUtilizedBudgetOfDepartment();
        break;
    case "Exit":
        connection.end();
        console.log("Goodbye!");
        break;
    // Handle other cases for different actions
    default:
      res.send('Invalid action');
  };

  //create a department
  app.post('/api/new-department', ({ body }, res) => {
    const sql = `INSERT INTO departments (department_name)
        VALUES (?)`;
    const params = [body.department_name];
    
    db.query(sql, params, (err, result) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        res.json({
          message: 'success',
          data: body
        });
      });
  })

  // read all departments
app.get('/api/departments', (req, res) => {
    const sql = `SELECT id, department_name AS name FROM departments`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });
  
  // delete a department
  app.delete('/api/departments/:id', (req, res) => {
    const sql = `DELETE FROM departments WHERE id = ?`;
    const params = [req.params.id];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.statusMessage(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
        message: 'Department not found'
        });
      } else {
        res.json({
          message: 'deleted',
          changes: result.affectedRows,
          id: req.params.id
        });
      }
    });
  });
        
                


