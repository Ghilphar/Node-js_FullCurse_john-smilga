//started operating system process
console.log('first');
setTimeout(() => {
    console.log('second')
}, 0)
console.log('third')
// complete and exited operating system process

//We can see we execute the callback after the third console.log