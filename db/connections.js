// modules
const mysql = require('mysql2');
const inquirer = require('inquirer')
const express = require('express')

const app = express()
const port = process.env.PORT || 3001

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'secretpassword',
      database: 'employees_db'
    },
    console.log(`Connected to the classlist_db database.`)
  );

  connection.query('select * from employee', (err, result) => {
    console.log(result)
});






// Test route to prove express server is running //
app.get('/test', (_req, res) => {
    res.send('hello people')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    
})


  module.exports = db;