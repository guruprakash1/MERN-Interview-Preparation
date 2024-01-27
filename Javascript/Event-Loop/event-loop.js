//Whenever any Javascirpt code run a global execution content is created
//Global execution content is then pushed inside callstack.
//Now in global execution content the code will run line by line
//To execute any function there will be execution content is created.
//And again the executin content will be pushed inside call stack
//Once the excution content is complete then it will pops out from the callstack.
//So to run anything we need to push inside the callstack.

//The callstack don't have any timer. The browser have the super power of the timer, localStorage, bluetooth etc..

//To access all these inside callstack, we need webApi.
//seTimeout is not part of js. DOM API is alos not part of js.
//Even the console.log is not part of js. 
//So these are the super power of browser have it. And bwoser allow to use these super p[owers.
//So when use the setTimeOut it register a callback.

//To run the setTimeout function, means when the timer is expired means reach at 5000 ms, it needs to insert inside the callback queue.
//The event loop checks the callback queue and it pushes inside the callstack.
//Event loop is like gatekeeper it checks the callback queue and pushes insdie the callstack.

// Callback Queue->Event Loop->Call Stack
//Once it goes to callstack it goes like the same

// Event Loop: Check the image


//Callback Quueue or Task Queue Check the image

//Microtask queue:
// It is like similar to callback queue but it is having higher priority.
//Whatever the function comes inside it will execute first and then callback queue.
//CBF-callback function goes inside the microtask queue.
//All the function which come through promises will go through microtask queue.


// What is starvation of callback queue?

//If there are many callback function present inside the micro task queue, and only one in callback queue. So as the micro task has the high priority. 
// so it will keeps executing and which is inside the callback queue, it will be present there.




