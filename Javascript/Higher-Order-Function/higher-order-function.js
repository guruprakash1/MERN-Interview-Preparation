//A function which takes another functiona as an argument or return a function from it is known as higher order function.

function x() {
    console.log('Namaste');
}

function y(x) {
    x();
}
//Here x is the callback function and y is the higher order fucntion.


// Ex-2: Better example

const radius = [1, 2, 3, 4];

const area = function (radius) {
    return Math.PI * radius;
}
const circumference = function (radius) {
    return 2 * Math.PI * radius;
}
const diameter = function (radius) {
    return 2 * radius;
}
const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output;
}
console.log(calculate(radius, area));
console.log(radius.map(area));