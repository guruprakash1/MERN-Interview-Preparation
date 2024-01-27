//let and const are also hoisted but they are hoisted very differenly
//We can say that it will be in temporal dead zone for the time being.

//let and const store in different memory and we can't access the meory space.

//Since the let varibale hoisetd and till it initialized some value, the time between them is know as temporal dead zone.
// Ex-1:
let a = 10;
console.log(a);
var b = 100;

// Ex-2
// console.log(c);
let c = 10;
var d = 100;

// O/P

// Uncaught ReferenceError: Cannot access 'c' before initialization. 
// Why?
//Because let is in temporal dead zone and we can't access it's value before initialization.

// Ex-3
// console.log(x);
let y = 10;
var z = 100;

// O/P

// Uncaught ReferenceError: x is not defined
// Why?
//As there is no x so we got the Reference error.

// Ex-3
// let n= 10;  
// let n = 100; //Error
// var n =20;//Error

// O/P

// Uncaught SyntaxError: Identifier 'n' has already been declared
// Why?
// Because let is strict and it is block-scoped variable.

// Ex-4

// const m;
// m=1009;

// O/P

// Uncaught SyntaxError: Missing initializer in const declaration
// Why?
//const is more strict than let and in the same line we need to declare the value.

// Ex-5
const i = 1000;
i=2000;

//O/P

// Uncaught TypeError: Assignment to constant variable.
// Why?
//in const case we can't assign again the value
// Conclusion
// There are 3 types of error in JS
    // i->ReferenceError
    // ii->SyntaxError
    // iii->TypeError

//const->Whenever there is no chnage of value we should use const
//let-Whenever we want to chnage the value or we want to push new values to variable we should use let.
//var-Global scope, not try to use.