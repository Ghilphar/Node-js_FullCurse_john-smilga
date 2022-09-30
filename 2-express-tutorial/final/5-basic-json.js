const express = require('express')
const app = express()
const {products} = require('./data')


// This is our first and most basic API
app.get('/', (req, res) => {
    res.status(200).json(products)
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000..');
})