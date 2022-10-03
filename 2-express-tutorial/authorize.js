const authorize = (req, res, next) => {
    const {user} = req.query
    if(user === 'Felipe'){
        req.user = {name: 'Felipe', id: 6}
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize