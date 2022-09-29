const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('user hit the ressource')
    res.status(200).send('Hoem Page')
})

app.get('/about', (req, res) => {
    res.status
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>ressouce not found</h1>')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})