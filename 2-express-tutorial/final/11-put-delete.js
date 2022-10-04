const express = require('express')
const app = express()
let { people } = require('./data')

// static assets - build in middleware
app.use(express.static('./methods-public'))
// Parse form data
app.use(express.urlencoded({extended: false}))
// parse json
app.use(express.json())

app.post('/login', (req, res) => {
    const { name } = req.body
    //res.status(200).send(`Hello, ${req.body.name}`) / We use a middleware to process the http form
    if (name)
        res.status(200).send(`Hello, ${name}`)
})

app.get('/api/people', (req, res) => {
    console.log(people)
    res.status(200).json({ success: true, data: people })
})


app.post('/api/people', (req, res) => {
    const { name } = req.body
    people = name 
    if (!name)
        res.status(400).json({succes: false, msg: 'please provide name value'})
    else 
        res.status(201).json({ succces: true, person: name})
})

app.post('/api/people/postman', (req, res) => {
    const { name } = req.body
    if (!name) {
        res
            .status(400)
            .json({succes: false, msg: 'please provide name value'})
    }
    res.status(201).send({ succes: true, data: [...people, name] })
})

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    
    const person = people.find((person) => person.id === Number(id)) 
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${id}` })
    }
    else {
        const newPeople = people.map((person) => {
            if(person.id === Number(id)){
                person.name = name
            }
            return person
        })
        res.status(200).json({ success: true, data: newPeople})
    }
    // console.log(name, id)
    // res.end()
})

app.delete('/api/people/:id', (req, res) => {
    const { id } = req.params
    
    const person = people.find((person) => person.id === Number(id)) 
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${id}` })
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(id))
    // const newPeople = people.filter((person) => {
    //     if (person.id !== Number(id))
    //         return person
    // })
    console.log(newPeople)
    return res.status(200).json({ success: true, data: newPeople})
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000..');
})