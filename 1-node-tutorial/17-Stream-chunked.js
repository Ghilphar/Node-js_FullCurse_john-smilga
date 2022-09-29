console.log('stream example')

var http = require('http')
var fs = require('fs')

http
    .createServer(function (req, res) {
        // const text = fs.readFileSync('./content/bigbig.txt', 'utf8')
        // res.end(text)
        const fileStream = fs.createReadStream('./content/bigbig.txt', 'utf8')
        fileStream.on('open', () => {
            fileStream.pipe(res)
        })
        fileStream.on('error', (err) => {
            res.end(err)
        })
    })
    .listen(5000)

// If we go on Network and we look for our localhost request we can see Transfer-Encoding: is chunked