const inquirer = require('inquirer') //Prompt the user for input
// const chalk = require('chalk') // Colors the interface text
const welcomeMsg = require('./lib/welcome') //Displays welcome banner at app start
const viewAllEmployees = require('./lib/viewAllEmployees') //Displays welcome banner at app start

// const fs = require('fs') //File system module


// welcomeMsg();

function getUserInput() {

    inquirer
      .prompt([
        {
          name: "options",
          type: "list",
          message: "What do you want to do?",
          choices: ["View All Employees", "Add Employee", "Update Employee Role","View All Role","Add Role","View All Departments","Add Department"]
        }
  
  
      ]).then((response) => {
        if (response.options == "View All Employees") {
            viewAllEmployees()
            //getUserInput()
          }
        else if (response.options == "Add Employee") {
        }
        else if (response.options == "Update Employee Role") {
        }
        else if (response.options == "View All Role") {
        }
        else if (response.options == "Add Role") {
        }
        else if (response.options == "View All Departments") {
        }
        else if (response.options == "Add Department") {
        }
  
      });
  
  }
  
  getUserInput();