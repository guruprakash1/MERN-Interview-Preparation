// function x() {
//     var i = 100;
//     setTimeout(() => {
//         console.log(i);
//     }, 3000);
//     console.log('Namaste Javascirpt');
// }
// x();

// O/P

// Namaste Javascirpt
// 100

// Ex-2

function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
    console.log('Namaste Javascirpt');
}
x();

// O/P


// 6->after 1s
// 6->after 2s
// 6->after 3s
// 6->after 4s
// 6->after 5s

// Why?
// Because they refer the smae memory space
//As in the memory location the value is 6, so it is pritniting 6.
//As js doesn't wait for anything, so it runs again and again.

// Solution

// Ex-3: Solution to the previosu qa

function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
    console.log('Namaste Javascirpt');
}
x();
// O/P
// 1->after 1s
// 2->after 2s
// 3->after 3s
// 4->after 4s
// 5->after 5s

// Why?
// Because let varibaloe is block scope and the function creates closure with new variable.

// Ex-4: With var how to do it?

function x() {
    for (var i = 1; i <= 5; i++) {
    function close(i) {
            setTimeout(() => {
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }
    console.log('Namaste Javascirpt');
}
x();

// O/P

// 1->after 1s
// 2->after 2s
// 3->after 3s
// 4->after 4s
// 5->after 5s

// Why?

//Because every time close function called it thinks it as a new copy of i