const db = require('./db/connection');
const sql = require('mysql2');
const express = require('express');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3004;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());





// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  inquirer.prompt([
    {
      message: " Hi there and welcome to your employee tracker! Please select an opition from below.",
      type: "list",
      choices: ["Departments", "Roles", "Employees", "Delete everything!", "Finacial Options!"],
      name: "Start-up Menu"
    }
  ]).then(function (response) {
    
    switch(response) {
      
      case "Departments":
        // Function to call departments section, view all and add a new department.
        break;
      
      case "Roles":
        // Function to See all roles, add a role.
        break;
      
      case "Employess":
        // Function to see employee list, add an employee,remove an employee, update employee info(manager, role)
        break;

      case "Delete everything!":
        // deletes everything
        break;

      case "Finacial Options!":
        // allows for user to pull up salaries of each department. 
        break;
    }
  })


  // THIS CODE IS CURRENTLY UNDER DEVELOPMENT, NEED TO INQUIRER HOW TO LOAD FOR EXAMPLES.
  // const sql =
  //   `source db/db.sql,
  //   source db/schema.sql,
  //   source db/seeds.sql`;

  // db.query(sql, (err) => {
  //   if (err) {
  //     throw err;
  //   }
  // });
});