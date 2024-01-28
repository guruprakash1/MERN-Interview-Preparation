//It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence. 

// Ex-1: Normal JS
function add(a, b, c) {
    return a + b + c;
}

const addVal = add(1, 2, 3);
console.log(addVal);

// O/P
// 6


// Ex-2: By closure

function add1(a1) {
    return function (b1) {
        return function (c1) {
            return a1 + b1 + c1;
        }
    }
}
const addVal1 = add1(1)(2)(3);
console.log(addVal1);

// O/P
// 6

// Ex-3: By closure and arrow function

const add2 = (a2) => (b2) => (c2) => a2 + b2 + c2;
const addVal2 = add2(1)(2)(3);
console.log(addVal2);

// O/P
// 6
