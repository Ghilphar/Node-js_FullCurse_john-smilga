const os = require('os')

// info about curret user
const user = os.userInfo()
console.log(user)

// method return the system uptime

console.log (`The system uptime is ${os.uptime}`)

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOs)