const startUpMenu =require("./index")
const db = require('../db/connection');
const inquirer = require('inquirer');


const deptQ =
  [{
    name: "departments_menu",
    message: "Please pick an option!",
    type: "list",
    choices: [
      "Show all departments",
      "Add a department",
      "Exit"
    ]
  }];


function deptTable() {

  inquirer.prompt(deptQ).then(response => {
    switch (response.departments_menu) {
      case "Show all departments":
        db.query(`SELECT * FROM department`, function (err, res) {
          if (err) return err
          console.log("------DISPLAYING ALL TABLES!---------");
          console.table(res);
        })
        deptTable();
        break;

      case "Add a department":
        addDept();
        break;

      case "Exit":
      // THIS NEEDS TO BE FIXED! Need to be able to return to main menu
      exit();
    }
  })
}

function exit() {
  db.end();
}


function addDept() {
  inquirer.prompt([
    {
      message: "What is the name of the department you wish to add?",
      type: "input",
      name: "deptName"
    }
  ]).then(response => {
    db.query(`INSERT INTO department(name) VAlUE (?)`, response.deptName)
    db.query(`SELECT * FROM department`, function (err, res) {
      if (err) return err
      console.log("------DISPLAYING ALL TABLES!---------");
      console.table(res);
    })
    deptTable();
  })
}

module.exports = deptTable;