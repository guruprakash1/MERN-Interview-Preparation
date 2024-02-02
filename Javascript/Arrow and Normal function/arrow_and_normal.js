//Funciton Declrattion and Expression
//A function declaration must have a function name.
//A function expression is similar to a function declaration without the function name.

// Function declaration does not require a variable assignment. 
// Function expressions can be stored in a variable assignment.

// Ex-1:
// function myFun(a, b) {//Function Declaration
//     console.log(a + b);
// }

// let myFun2 = (a, b) => { //Function Expression
//     console.log(a + b);
// }

// myFun(1,2);
// myFun2(1,2);

//OP
// 3
// 3

// Ex-2: We can't call arrow function before initialization
// myFun(1,2);
// myFun2(1,2);
// function myFun(a, b) {
//     console.log(a + b);
// }

// let myFun2 = (a, b) => {
//     console.log(a + b);
// }

//OP
// 3
//ReferenceError: Cannot access 'myFun2' before initialization

// Ex-3: Arguments not working in arrow function


// function myFun(a, b) {
//     console.log(arguments);
//     console.log(a + b);
// }

// let myFun2 = (a, b) => {
//     console.log(arguments);
//     console.log(a + b);
// }

// myFun(1,2);
// myFun2(1,2);

//OP

//Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]0: 11: 2callee: ƒ myFun(a, b)length: 2Symbol(Symbol.iterator): ƒ values()[[Prototype]]: Object
// 3
//ReferenceError: arguments is not defined

// Ex-4: No prortotype for arrow function

// function myFun(a, b) {
//     console.log(a + b);
// }

// let myFun2 = (a, b) => {
//     console.log(arguments);
//     console.log(a + b);
// }

// console.log(myFun.prototype);
// console.log(myFun2.prototype);

//OP
//{constructor: ƒ}
//undefined

// Ex-5: New keyword will not work in arrow function

// function myFun(a, b) {
//     console.log(a + b);
// }

// let myFun2 = (a, b) => {
//     console.log(arguments);
//     console.log(a + b);
// }

// console.log(new myFun());
// console.log(new myFun2());

//OP
// myFun(a, b)
//

// Ex-6: arrow function don't have this

const obj = {
    name: 'Prakash',
    normal: function () {
        console.log(`The name inside noraml is ${this.name}`);
    },
    arrow: () => {
        console.log(`The name inside arrow is ${this.name}`);
    }
}
obj.normal();
obj.arrow();
//op

//The name inside noraml is Prakash
//The name inside arrow is 