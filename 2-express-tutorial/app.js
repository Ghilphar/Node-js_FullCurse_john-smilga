const express = require('express')
const app = express()
const {products} = require('./data')


// This is our first and most basic API
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

// route parameter
app.get('/api/products/:productID', (req, res) => {
    console.log(req)
    console.log(req.params)
    const {productID} = req.params
    const singleProduct = products.find((product) => product.id === Number(productID))
    res.json(singleProduct)
})



app.listen(5000, () => {
    console.log('Server is listening on port 5000..');
})