const startUpMenu = require("./index")
const db = require('../db/connection');
const inquirer = require('inquirer');

const employeeQ =
  [{
    name: "employee_menu",
    message: "Please pick an option!",
    type: "list",
    choices: [
      "Show all employees",
      "Add an employee!",
      "Update an employees info!",
      "Exit"
    ]
  }];


function eTable() {

  inquirer.prompt(employeeQ).then(response => {
    switch (response.employee_menu) {
      case "Show all employees":
        db.query(`SELECT * FROM employees`, function (err, res) {
          if (err) return err
          console.log("----------DISPLAYING ALL EMPLOYEES!----------");
          console.table(res);
        })
        eTable();
        break;

      case "Add an employee!":
        addEmployee();
        break;

      case "Exit":
        // THIS NEEDS TO BE FIXED! Need to be able to return to main menu
        exit();
    }
  })
}




function addEmployee() {

  db.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.log(res);
    const roleChoice = [];
    res.forEach(({id, title }) => {
      roleChoice.push({
        value: id,
        name: title
      });
    });
    //employee array for manager choice
    db.query("SELECT * FROM employees", (err, res) => {
      if (err) throw err;
      const employeeChoice = [
        {
          name: 'None',
          value: 0
        }
      ];
      //an employee could have no manager
      res.forEach(({ first_name, last_name, id }) => {
        employeeChoice.push({
          name: first_name + " " + last_name,
          value: id
        });
      });

      inquirer.prompt([
        {
          message: "What is the new employee's name?",
          type: "input",
          name: "fName"
        },
        {
          message: "what is their last name?",
          type: "input",
          name: "lName"
        },
        {
          message: "what is their role?",
          role: "list",
          choices: roleChoice,
          name: "role_id"
        },
        {
          message: "Do they have a manager? leave empty if N/a",
          type: "list",
          name: "m_choice",
          choices: employeeChoice,
        }

      ]).then(response => {
        const query = `INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES (?)`;
        let manager_id = response.m_choice !== 0 ? response.m_choice : null;
        db.query(query, [[response.fName, response.lName, response.role_id, manager_id]], (err, res) => {
          if (err) throw err;
          console.log(`successfully inserted employee ${response.fName} ${response.lName}`);
          db.query(`SELECT * FROM employee`, function (err, res) {
            if (err) return err
            console.log("------DISPLAYING ALL EMPLOYEES!---------");
            console.table(res);
          })
          eTable();
        });
      });
    });
  });
};


function exit() {
  db.end();
}

module.exports = eTable;