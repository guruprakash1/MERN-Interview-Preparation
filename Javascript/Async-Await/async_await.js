//The async keyword is used to define a function as asynchronous.
// An asynchronous function always returns a Promise, either resolved with the function's return value or rejected with an exception thrown inside the function.

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved promise 1');
    }, 5000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved promise 2');
    }, 10000)
})

async function handlePromsie() {
    console.log('Hello World');
    const val1 = await p1;
    const val2 = await p2;
    console.log(val1);
    console.log(val2);
}

handlePromsie();

// O/P

// Hello World->immediatley
// Resolved promise 1->
// Resolved promise 2

// In your code, the await keyword is used, which means the handlePromise function will wait for each promise to be resolved before moving to the next one. Therefore, it will wait for 5 seconds (p1) and then wait an additional 10 seconds (p2), resulting in a total wait time of 15 seconds.

// Here's a breakdown:

    // console.log('Hello World');: This line is executed immediately.

    // const val1 = await p1;: This line waits for p1 to be resolved. It takes 5 seconds for p1 to resolve.

    // const val2 = await p2;: This line waits for p2 to be resolved. It takes an additional 10 seconds for p2 to resolve.

// So, the total execution time will be 5 seconds (for p1) + 10 seconds (for p2) = 15 seconds.
//  The await keyword in an async function ensures that the promises are awaited sequentially, not in parallel.