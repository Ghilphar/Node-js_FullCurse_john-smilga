const express = require('express')
const router = express.Router()


router.post('/', (req, res) => {
    const { name } = req.body
    //res.status(200).send(`Hello, ${req.body.name}`) / We use a middleware to process the http form
    if (name)
        res.status(200).send(`Hello, ${name}`)
    else {
        res.status(401).json({ succes: false, msg: 'Please use a name'})
    }
})

module.exports = router