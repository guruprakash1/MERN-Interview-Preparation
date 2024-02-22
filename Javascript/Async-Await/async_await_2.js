When you use async and await in a function, it indicates that the function contains asynchronous operations.
However, it's essential to understand that async and await work together to simplify asynchronous code and make it look more like synchronous code,
  but they don't alter the fundamental behavior of asynchronous execution.

async Function Declaration:

    When you declare a function with the async keyword, it becomes an asynchronous function.
    An asynchronous function always returns a promise, and the value it resolves to is the value returned by the function.

async function myAsyncFunction() {
  return 42;
}


await Expression:

    The await keyword can only be used inside an asynchronous function.
    It is used to wait for a promise to resolve and returns the resolved value.


async function example() {
  const result = await myAsyncFunction();
  console.log(result); // 42
}

Non-Blocking Behavior:

    While an asynchronous function is waiting for an asynchronous operation (like a promise) to complete, it doesn't block the entire program.
    Other parts of your program can continue execution while the asynchronous operation is in progress.


async function example() {
  console.log('Start');

  const result = await myAsyncFunction();

  console.log(result); // 42
  console.log('End');
}

example();
console.log('After calling example');


//OP:

Start
After calling example
42
End
