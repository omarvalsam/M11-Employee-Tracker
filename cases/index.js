const express = require('express');
const db = require('../db/connection');
const cTable = require('console.table');
const deptTable = require('./department');
const inquirer = require('inquirer');
const roleTable = require('./roles');
const eTable = require('./employee');






function startUpMenu() {
  const startQ =[{
    name: "Main_menu",
    message: " Hi there and welcome to your employee tracker! Please select an opition from below.",
    type: "list",
    choices:
    [
    "Departments",
    "Roles",
    "Employees",
    "Delete everything!",
    "Finacial Options!"
    ]

  }]
inquirer.prompt(startQ)
  .then(response => {
    console.log(response.Main_menu);
    switch (response.Main_menu) {

      // Function to call departments section, view all and add a new department.
      case "Departments":
        deptTable();
        break;

      case "Roles":
        // Function to See all roles, add a role.
        roleTable();
        break;

      case "Employees":
        // Function to see employee list, add an employee,remove an employee, update employee info(manager, role)
        eTable();
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
}


module.exports = startUpMenu;