//It will wait for any success criteria
//If there is all errors then it will return arrays of errors.

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 Success')
    }, 3000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('P2 Success');
        reject('P2 Failure');
    }, 1000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P3 Success')
    }, 2000)
})
const result = Promise.race([p1, p2, p3]).then(res => {
    console.log(res);
}).catch(err => console.error(err))

console.log('result', result);