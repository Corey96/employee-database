const express = require('express')
const mysql =require('mysql2')

const app = express()
const port = process.env.PORT || 3001

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'secretpassword',
    database: 'employee_db'
});

connection.query('select * from employees', (err, result) => {
    console.log(result)
});






// Test route to prove express server is running //
app.get('/test', (_req, res) => {
    res.send('hello people')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    
})

