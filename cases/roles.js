const startUpMenu =require("./index")
const db = require('../db/connection');
const inquirer = require('inquirer');

const rolesQ =
  [{
    name: "roles_menu",
    message: "Please pick an option!",
    type: "list",
    choices: [
      "Show all roles",
      "Add a role",
      "Exit"
    ]
  }];


function roleTable() {

  inquirer.prompt(rolesQ).then(response => {
    switch (response.roles_menu) {
      case "Show all roles":
        db.query(`SELECT * FROM role`, function (err, res) {
          if (err) return err
          console.log("------DISPLAYING ALL TABLES!---------");
          console.table(res);
        })
        roleTable();
        break;

      case "Add a role":
        addRole();
        break;

      case "Exit":
        // THIS NEEDS TO BE FIXED! Need to be able to return to main menu
        exit();
    }
  })
}



// ----------------ADDING A ROLE__________

function addRole() {
  db.query(`SELECT * FROM department`, function (err, res) {
    if (err) throw err;
    inquirer.prompt([
      {
        message: "What is the name of the role you wish to add?",
        type: "input",
        name: "title"
      },
      {
        message: "How much do they make in a year?",
        type: "input",
        name: "salary"
      },
      {
        message: "What is their department?",
        type: "list",
        name: "deptartment",
        choices: function () {
          var dArray = [];
          for (let i = 0; i < res.length; i++) {
            dArray.push(res[i].name);
          }
          return dArray;
        },
      }

    ]).then(response => {
      let department_id;
            for (let a = 0; a < res.length; a++) {
                if (res[a].name == response.Department) {
                    department_id = res[a].id;
                }
            }

      db.query(`INSERT INTO role(title, salary, department_id) VAlUE (?, ?, ?)`, [response.title, response.salary, response.department_id])
      if (err){ throw err
      }
      console.log("role was successfully added!")
      showRoles();
    })
  }
  )
}

function showRoles(){
db.query(`SELECT * FROM role`, function (err, res) {
  if (err) return err
  console.log("------DISPLAYING ALL roles!---------");
  console.table(res);
})
roleTable();
}

function exit() {
  db.end();
}

module.exports = roleTable;