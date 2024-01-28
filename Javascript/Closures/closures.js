// What is closure?

// A closure gives you access to an outer function's scope from an inner function.
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)
//In JavaScript, closures are created every time a function is created, at function creation time.

//In simple A function with it's lexical scope forms closure.

function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    y();
}
x();

// O/P

7
// Why?

//Here a don't we find from the function a, so it checks it's function of x and there it got it's value as 7, which is it's lexical envirnment.



// Ex-2
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z());

// O/P

7

// Why?

//We returned y and it remembers the function was returned and giving the o/p as 7 b ecause of the closure. Because onece the function is gone it will be removed from memory.
//Here not only function returend it returned function along with the lexical function.

// Ex-3 : It is simillar to Ex-2. We can writre return function.

function x() {
    var a = 7;
    return function y() {
        console.log(a);
    }
}
var z = x();
console.log(z());

// Ex-4 : What is the o/p of below function?

function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}
var z = x();
console.log(z());

// O/P

100
// why?

// Because in it's outer env a's value is 100.

// Ex-5 : What is the o/p of below function?

function z() {
    var b = 200;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}

z();

// O/P

// 7 200

//Currying is only possible because of closure