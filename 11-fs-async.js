const {readFile, writeFile} = require("fs")

console.log('start')
readFile("./content/first.txt", "utf8", (err, result) => {
    if (err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            "./content/result-async.txt", 
            `Here is the result of async functions : ${first} and ${second}`,
            (err, result) => {
                if (err){
                    console.log(result)
                }
                // console.log(result);
                console.log('done with this task')
            })
    })
})
console.log('starting with the next task')