const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
//    res.send('Middleware is really powerfull')
    next()                                          // it's important to set the next() if not we will not pass to the next middleware
} 

module.exports = logger