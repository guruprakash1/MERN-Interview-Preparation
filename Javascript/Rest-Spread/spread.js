//The spread operator (...) in JavaScript is used for two main purposes:

//1. Array Spreading:

// We can use the spread operator to spread the elements of an array into a new array. 
//It creates a shallow copy of the original array.

// Ex-1
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5];

console.log(newArray);  // [1, 2, 3, 4, 5]


// 2. Object Spreading:

// Similarly, we can use the spread operator to spread the properties of an object into a new object.
//  It creates a shallow copy of the original object.

// EX-2

const originalObject = { name: 'John', age: 30 };
const newObject = { ...originalObject, city: 'New York' };

console.log(newObject);  // { name: 'John', age: 30, city: 'New York' }

//It replace apply method as we can send array of parameters with spread.

// Ex-3: replace apply method

function sum(a, b, c) {
    console.log(a + b + c);
}

const arrVal = [1, 2, 3];
sum.apply(null, arrVal);//By using apply method
sum(...arrVal);//By using spread oprator

//OP

// (5) [1, 2, 3, 4, 5]
// {name: 'John', age: 30, city: 'New York'}
// 6
// 6

// Ex-4: By concat method

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const output = arr1.concat(arr2);

// console.log(output);

//OP:

// [1, 2, 3, 4, 5, 6]

// Ex-5: By spread operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const output = [...arr1, ...arr2, ...arr3]

console.log(output);

//OP:
// [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Ex-6: copy method

const arrc1 = [1, 2, 3];
const arrc2 = arrc1;
arr2.push(4, 5);
console.log(arrc1);
console.log(arrc2);
//OP: Here we have only pushes in the arrc2 but it copies in both the arrays
// [1, 2, 3]
// [1, 2, 3]

// Ex-7: Will not do copy 

const arrc3 = [1, 2, 3];
const arrc4 = [...arrc3, 4, 5]
console.log(arrc3);
console.log(arrc4);

//OP: Here only arrc4 value changes
// [1, 2, 3]
//  [1, 2, 3, 4, 5]