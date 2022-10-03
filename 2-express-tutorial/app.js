const express = require('express')
const app = express()
let { people } = require('./data')

// static assets - build in middleware
app.use(express.static('./methods-public'))


app.get('/api/people', (req, res) => {
    console.log(people)
    res.status(200).json({ success: true, data: people })
})

app.get('/login', (req, res) => {
    
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000..');
})