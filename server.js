const express = require('express')
const app = express()
const port = process.env.PORT || 3001

//test route to prove express server is running//
app.get('/test', (_req, res) => {
    res.send('hello people')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    
})

