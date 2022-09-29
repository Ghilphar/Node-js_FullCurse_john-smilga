const {readFile, writeFile} = require('fs').promises
// const util = require('util')

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile)


const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8') // await readFilePromise('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        console.log(first, '\n' ,second);
        await writeFile(
            './content/result-mind-grenade.txt',
            `This is awesome : ${first} ${second}`, {flag: 'a'}
        )
    }
    catch {
        console.log('error');
    }
}

// So here we use a nice try and catch blocks. To perform our async function and control what happen to our code.

start()


// We have a function who return a Promise, Promise is a callbak with 2 arguments resolve for the result and reject for the error.
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)  //return - Here we change to reject
//             }
//             else {
//                 resolve(data) //console.log(data) - we resolve the result
//             }
//         })
//     })
// }

// getText('./content/first.txt')
//     .then(bigballs => console.log(bigballs))  // No real need to use result     - You can name your variables as you wish but better respect the convention
//     .catch(error => console.log(error))       // No real need to use err        - You can name your variables as you wish but better respect the convention 

// So here we use a funciton who respond with a promise. A promise need a .then to process the result from resolve.
// But also need a .catch to process the err from reject