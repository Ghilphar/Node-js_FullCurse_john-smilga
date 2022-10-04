const express = require('express')
const app = express()
const tasks = require('./routes/task')

const port = 3000

// Middleware
app.use(express.json())




//routes
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/api/v1/tasks', tasks)

/*
app.get('/api/v1/task')                 - get al the task
app.post('/api/v1/task')                - Create a new task
app.get('/api/v1/task/:id')             - Get a unique task
app.patch('/api/v1/task/:id')           - Update task
app.delete('/api/v1/task/:id')          - Delete task
*/



app.listen(port, (rea, res) => {
    console.log(`Server listenning on ${port}...`)
})