// Check username, pasword in post(login) request
// if exist create a new JWT
// send back to front-end

//setup authentification so only the request with JWT can access the dashboard

const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors')


//just for demo

const login = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        throw new BadRequestError('Please provide username and password')
    }
    const id = new Date().getDate()
    // try to keep payload small, better experience for the user
    // jsut for DEMO in production use long unguessable secret values
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
    res.status(200).json({ msg: 'user created', token })
// mongo
// Joi
}


const dashboard = async (req, res) => {
    const { username } = req.user
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({
        msg: `Hello, ${username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`
    })
    
}

module.exports = {
    login, dashboard
}