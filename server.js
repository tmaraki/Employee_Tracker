//imports
const inquirer = require("inquirer");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;

// create mysql connection
const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employeeTracker_db'
  },
  console.log(`Connected to the movies_db database.`)
);

// connect to the database
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to the database");
    start();
});

// starting application
function start() {
    inquirer
        .prompt({
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Add a Manager",
                "Update an employee role",
                "View Employees by Manager",
                "View Employees by Department",
                "Delete Departments | Roles | Employees",
                "View the total utilized budget of a department",
                "Exit",
            ],
        })
        .then((answer) => {
            switch (answer.action) {
                case "View all departments":
                    viewAllDepartments();
                    break;
                case "View all roles":
                    viewAllRoles();
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
            }
        });
}

// close the connection when the application exits
process.on("exit", () => {
    connection.end();
});


//   //create a department
//   app.post('/api/new-department', ({ body }, res) => {
//     const sql = `INSERT INTO departments (department_name)
//         VALUES (?)`;
//     const params = [body.department_name];
    
//     db.query(sql, params, (err, result) => {
//         if (err) {
//           res.status(400).json({ error: err.message });
//           return;
//         }
//         res.json({
//           message: 'success',
//           data: body
//         });
//       });
//   })

//   // read all departments
// app.get('/api/departments', (req, res) => {
//     const sql = `SELECT id, department_name AS name FROM departments`;
    
//     db.query(sql, (err, rows) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//          return;
//       }
//       res.json({
//         message: 'success',
//         data: rows
//       });
//     });
//   });
  
//   // delete a department
//   app.delete('/api/departments/:id', (req, res) => {
//     const sql = `DELETE FROM departments WHERE id = ?`;
//     const params = [req.params.id];
    
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.statusMessage(400).json({ error: res.message });
//       } else if (!result.affectedRows) {
//         res.json({
//         message: 'Department not found'
//         });
//       } else {
//         res.json({
//           message: 'deleted',
//           changes: result.affectedRows,
//           id: req.params.id
//         });
//       }
//     });
//   });
        
                


