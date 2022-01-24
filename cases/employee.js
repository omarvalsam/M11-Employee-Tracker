const startUpMenu =require("./index")
const db = require('../db/connection');
const inquirer = require('inquirer');

var roleArr =[];
function selectRole(){
  db.query("SELECT * FROM role", function(err, res) {
    if (err) throw err
    for (var i = 0; i < res.length; i++) {
      roleArr.push(res[i].title);
    }

  })
  return roleArr;
}