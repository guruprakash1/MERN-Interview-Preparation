//Hoisitng means we can access variable and function before it's inititlaization.

// Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed.
// This means that you can use variables or functions in your code before they are declared.

getName();
console.log(x);

function getName(){
    console.log('Namaste Javascirpt');
}
var x =10;

// Output

// Namaste Javascirpt
// hoisting.js:4 undefined