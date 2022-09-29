// The event loop is what allows Node.js to perform non-blocking I/O operations - despite  the fact
// that Javascript is single-threaded - by offloading operations to the system kernel whenever possible.

// external ressources node.js event loop (nodejs.dev)
// Javascript gona first execute the code line by line and then it will execute the callback
// So we can offload time consuming task.

// The event loop register the callback and then execute it
// When there is no immeidate code to run then we execute the callback

const { readFile } = require('fs')

console.log('started a first task')
// Check File Path

readFile('../content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})
console.log('starting next task')