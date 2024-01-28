//it's like a race. the person who will finish first will be the winner.
//It will givew the value not array.
//if the 1st promise is error, it wwill return result of 1st settled error.
//Whether it is success or error it will give the output.
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 Success')
    }, 3000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P2 Success');
        // reject('P2 Failure');
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