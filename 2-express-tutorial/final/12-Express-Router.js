const express = require('express')
const app = express()
const people = require('./routes/people')
const loginRouter = require('./routes/auth')

// static assets - build in middleware
app.use(express.static('./methods-public'))
// Parse form data
app.use(express.urlencoded({extended: false}))
// parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', loginRouter)



app.listen(5000, () => {
    console.log('Server is listening on port 5000..');
})


// Check /routes/