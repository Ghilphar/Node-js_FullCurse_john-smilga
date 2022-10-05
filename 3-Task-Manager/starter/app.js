const express = require('express')
const app = express()
const tasks = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

const port = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(express.static('./public'))

//routes

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

/*
app.get('/api/v1/task')                 - get al the task
app.post('/api/v1/task')                - Create a new task
app.get('/api/v1/task/:id')             - Get a unique task
app.patch('/api/v1/task/:id')           - Update task
app.delete('/api/v1/task/:id')          - Delete task
*/

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, (req, res) => {
            console.log(`Server listenning on ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()