
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 Success')
    }, 3000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('P2 Success');
        reject('P2 Failure');
    }, 1000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P3 Success')
    }, 2000)
})
const result = Promise.allSettled([p1, p2, p3]).then(res => {
    console.log(res);
}).catch(err => console.error(err))

console.log('result', result);