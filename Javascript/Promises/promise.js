//Promises are used to work with async operations.
//A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. 
//It is a pattern commonly used in modern JavaScript to work with asynchronous code in a more organized and manageable way.

// A Promise is in one of three states:

//     Pending: The initial state; the promise is neither fulfilled nor rejected.

//     Fulfilled: The operation completed successfully, and the promise has a resulting value.

//     Rejected: The operation failed, and the promise has a reason for the failure.

//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const url = 'https://jsonplaceholder.typicode.com/users';

const user = fetch(url);

console.log(user);

user.then((data) => {
    console.log(data);
})

const myPromise = new Promise((resolve, reject) => {
    // Perform an asynchronous operation
    // If successful, call resolve(value)
    // If an error occurs, call reject(reason)
  });
  
//   then(): This method is used to handle the fulfillment of a Promise. 
//   It takes one or two callback functions: one to handle the resolved value, and an optional one to handle rejected cases.

  myPromise.then(
    (value) => {
      // Handle fulfillment
    },
    (reason) => {
      // Handle rejection
    }
  );

//   catch(): This method is used to handle the rejection of a Promise. 
// It is similar to the second callback in then() but is specifically used for error handling.

myPromise.catch((reason) => {
    // Handle rejection
  });
  
//   finally(): This method is used to specify a callback function that is executed regardless of whether the Promise is fulfilled or rejected.
//    It is often used for cleanup operations.
  
myPromise.finally(() => {
    // Do something, regardless of success or failure
  });
  