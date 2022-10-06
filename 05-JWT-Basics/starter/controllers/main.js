// Check username, pasword in post(login) request
// if exist create a new JWT
// send back to front-end

//setup authentification so only the request with JWT can access the dashboard

const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')


//just for demo

const login = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        throw new CustomAPIError('Please provide username and password', 400)
    }
 
 
    const id = new Date().getDate()

    // try to keep payload small, better experience for the user
    // jsut for DEMO in production use long unguessable secret values
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
    console.log(token)
    res.status(200).json({ msg: 'user created', token })
// mongo
// Joi
}


const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg: `Hello, Felipe Garibotti`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login, dashboard
}