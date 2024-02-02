//The rest operator in JavaScript is represented by three dots (...).
//It allows us to represent an indefinite number of arguments as an array.
//The rest parameter must be the last parameter in a function declaration.

// what we are passing in function call that is argument like sum(1, 2, 3, 4);
//What we are receiving in function that we are calaing as parament like function sum(a, b, c) {}

function sum(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
    let total = 0;
    for (let i in c) {
        console.log(c[i]);
        total += c[i];
    }
    console.log(total);
    console.log(c.length);
    console.log(c.indexOf(6));
    console.log(c[1])
}
sum(1, 2, 3, 4, 5, 6, 7, 8);

// op

// 1
// 2
// 11 (6) [3, 4, 5, 6, 7, 8]
// 3
// 4
// 5
// 6
// 7
// 8
// 33
//6
//3
//4