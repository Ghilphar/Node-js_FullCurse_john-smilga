const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html' })
        res.write('<h1>Home Page</h1')
    }
    else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html' })
        res.write('<h1>About Page</h1')
    }
    else {
        res.writeHead(404, {'content-type': 'text/html' })
        res.write('<h1>No Page</h1')
    }
    res.end()
})

server.listen(5000)


// Express gonna take care of the headers but sending them matters.
// Mozilla is a really good docs for everithing related for http