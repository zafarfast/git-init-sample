const mysql = require('mysql2');
const fs = require('fs')

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Camberwell123',
      database: 'employee_db'
    },
    console.log(`Connected to the employee database.`)
  );
  

  function viewAllEmployees()
  {
    let query = 'SELECT employee.id, employee.first_name, employee.last_name, title, salary, m.first_name, m.last_name FROM employee JOIN role1 ON employee.id = role1.id JOIN employee m ON m.id = employee.manager_id'
    db.query( query,(err,result)=>{
        console.log("")
        console.table(result)

    })
  }

  module.exports = viewAllEmployees;