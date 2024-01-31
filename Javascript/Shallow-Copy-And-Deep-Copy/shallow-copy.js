//Definition: A shallow copy creates a new object or array, but does not create new copies of the nested objects or arrays within the original object or array. 
// Instead, it copies references to the nested objects or arrays.

// Ex-1
// let developer1 = { name: 'Prakash' };

// let developer2 = developer1;

// developer2 = developer1;

// developer2.name = 'Pradeepta';

// console.log(developer1);
// console.log(developer2);

//op

// Pradeepta
// Pradeepta

// Ex-2: Shallow copy
// If we don't want to copy the object we can acheive this in 2 ways

//By object assign ways:

// let developer1 = { name: 'Prakash' };

// //We can do by object.assign
// // let developer2 = Object.assign({}, developer1);
// // or we can do by spread operator
// let developer2 = {...developer1};

// developer2.name = 'Pradeepta';

// console.log(developer1);
// console.log(developer2);

// /op

// Prakash
// Pradeepta

// A deep copy creates a new object or array and also recursively creates new copies of all the nested objects and arrays within the original object or array.
//  It results in a fully independent copy.

// Ex-3: Deep Copy

// let developer1 = { name: 'Prakash', skills: 'Node Js'};

// // let developer2 = {...developer1}; If we add nested objects then skills alos going in developer1 
// //to avoid this we can use json stringify
// let developer2 = JSON.parse(JSON.stringify(developer1))


// developer2.name = 'Pradeepta';
// developer2.skills = 'React Js';

// console.log(developer1);
// console.log(developer2);

//Op

// {name: 'Prakash', skills: 'Node Js'}
// {name: 'Pradeepta', skills: 'React Js'}

// Ex-4: if we use function what will be the behaviour

// let developer1 = { name: 'Prakash', skills: 'Node Js', calculatAge : function(){return 30}, joiningDate: Date.now()};

// let developer2 = JSON.parse(JSON.stringify(developer1))


// developer2.name = 'Pradeepta';
// developer2.skills = 'React Js';

// console.log(developer1);
// console.log(developer2);

// Initial o/p

//{name: 'Prakash', skills: 'Node Js', joiningDate: 1706640233836, calculatAge: ƒ}
// {name: 'Pradeepta', skills: 'React Js', joiningDate: 1706640233836}->Here not copying the function for that we have to use lodash

// Ex-5: if we use function what will be the behaviour
const _ = require('lodash');

let developer1 = { name: 'Prakash', skills: 'Node Js', calculatAge : function(){return 30}, joiningDate: Date.now()};

let developer2 = _.cloneDeep(developer1);


developer2.name = 'Pradeepta';
developer2.skills = 'React Js';

console.log(developer1);
console.log(developer2);



