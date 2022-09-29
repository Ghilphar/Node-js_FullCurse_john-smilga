const EventEmitter = require('events')

const customEmitter = new EventEmitter()    // on - listen for an event
                                            // emit - emit an event
customEmitter.on('response', (name, id) => {
    console.log(`data recieved name: ${name} with id: ${id}`)
})
customEmitter.on('response', () => {
    console.log(`Some other logic here `)
})



customEmitter.emit('response', 'john', 34) // We gonna emit the even 'response' , we need here to match the 2 strings.

// A lot of build in modules depends on events. Is a core fonctinnality of node. same if you may not use them for your own code.