// Streams use to read or write secuentialy.
/*
    4 differents types of streams:
    - Writable
    - Readable
    - Duples - read and write
    - Transform 
*/

const { writeFileSync } = require('fs')

for (let i = 0; i < 100000; i++) {
    writeFileSync('./content/bigbig.txt', `hello world ${i}\n`, {flag: 'a'})
}
