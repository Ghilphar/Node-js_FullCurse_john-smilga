require('dotenv').config()

// async errors
require('express-async-errors') // We have done one on 3-Task-Manager

const express = require('express')
const app = express()

const connectDB = require('./db/connect')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
const productsRouter = require('./routes/products')

// midleware
app.use(express.json())

//routes

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products route</a>')
})

app.use('/api/v1/products', productsRouter)

// products route

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 4000

const start = async () => {
    try {
        connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listenning on port: ${port}`))
    } catch (err) {

    }
}

start()