const http = require('http')

const server = http.createServer((req, res) => { // req = incoming request, response is what we send back
    if (req.url === '/'){
        res.end('Welcome to the home page')
    }
    else if (req.url === '/about'){
        res.end('This is Felipe Website')
    }
    else {
        res.end(`
        <h1>Ooops</h1>
        <p>We can't seem to find the page you are looking for !</p>
        <a href="/">Back Home</a>
        `)
    }
})

server.listen(5000)