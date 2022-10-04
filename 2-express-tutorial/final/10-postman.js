const express = require('express')
const app = express()
let { people } = require('./data')

// static assets - build in middleware
app.use(express.static('./methods-public'))
// Parse form data
app.use(express.urlencoded({extended: false}))
// parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
    console.log(people)
    res.status(200).json({ success: true, data: people })
})

app.post('/login', (req, res) => {
    const { name } = req.body
    //res.status(200).send(`Hello, ${req.body.name}`) / We use a middleware to process the http form
    if (name)
        res.status(200).send(`Hello, ${name}`)
})

app.post('/api/people', (req, res) => {
    const { name } = req.body
    people = name 
    if (!name)
        res.status(400).json({succes: false, msg: 'please provide name value'})
    else 
        res.status(201).json({ succces: true, person: name})
})

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        res
            .status(400)
            .json({succes: false, msg: 'please provide name value'})
    }
    res.status(201).send({ succes: true, data: [...people, name] })
})



app.listen(5000, () => {
    console.log('Server is listening on port 5000..');
})