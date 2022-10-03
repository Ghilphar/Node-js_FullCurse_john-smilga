const express = require('express')
const app = express()
const {products} = require('./data')


// This is our first and most basic API
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

// route parameter
app.get('/api/products/:productID', (req, res) => {
    // console.log(req)
    // console.log(req.params)
    const {productID} = req.params
    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    )
    if(!singleProduct){
        return res.status(404).send('Product Does not Exist')
    }
    console.log(singleProduct)
    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send("Hello world")
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if (sortedProducts.length < 1){
        res.status(200).json({ success: true, data: []})
    }
    res.status(200).json(sortedProducts)
    // if(req.query.name && req.query.id)
    //     res.send(`Hello ${ req.query.name } your id is ${ req.query.id }!`)
    // else
    //     res.send('Hello World')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000..');
})