const db = require('./db/connection');
const express = require('express');
const inquirer = require('inquirer');
const app = express();
const cTable = require('console.table');
const startUpMenu = require('./cases');



// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// This starts both sql and inuirer prompts.
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  startUpMenu();
});
