1. //Give the output of below code
console.log(null==undefined);

//Output
true

2. //Write a mul function which will return the multipliaction of these 3
// console.log(mul(2)(3)(4))->24

function mul(a){
  return function(b) {
    return function(c) {
      return a * b * c;
    }
  }
}

console.log(mul(2)(3)(4));
//Output
24

3. Write a program to check the occurance of the array

const arr = [1, 2, 1, 1, 2, 4];

function countOccurrences(arr) {
  const countMap = {};

  arr.forEach((value) => {
    countMap[value] = (countMap[value] || 0) + 1;
  });

  return countMap;
}

const occurrences = countOccurrences(arr);

console.log("Occurrences:", occurrences);

//Output

Occurrences: { '1': 3, '2': 2, '4': 1 }

4. What will be output of below question?
  function fruit(){
    console.log(name);
    console.log(price);
    var name = 'appple';
    let price = 20;
}

fruit();

//O/P

undefined
ERROR!
/tmp/ruNnfbroZF.js:6
    console.log(price);
                ^

ReferenceError: Cannot access 'price' before initialization

Why ?
1st we are getting undefined because in js hoisting we are allow to use varibale before declaraing, so we are allowed to use var value.
But in case of let and const we can't access it beofre declaring. Because hoisitng don't allow to use in let and const.

5. What will be output of below question?
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1)
}

//Output : 3 times 3
3
3 
3
// Why?
// As we declare var and it is global scope and setTimeout is executed in separte thread and it will take some time.
//As var is global scope so the loop is finished before the settimeOut function

6. What will be output of below question?
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1)
}

//Output :
0 
1 
2 
// Why?
// Because let is function scope
//As it is block scope so every time out the value will be different.

7.What will be output of below question?
console.log(+true);
console.log(typeof +true);

//Output: 
1 
number
// Why?
//Because we added + sign, so it is converting it to number.

8. What will be output of below question?
console.log(!"anil");
console.log(!!"anil");
console.log(typeof("anil"));
//Output :
false
true
string
// Why?
i- First output: Because negeation of string will be false,
ii- Second output: Double negation will be true
iii- Third output: Type of string will be string.

9. What will be output of below question?

  let data = "size";
const bird = {
    size: "small"
}
console.log(bird[data]);
console.log(bird["size"]);
console.log(bird.size);
console.log(bird.data);
//Output:
small
small
small
undefined
// Why?
i- First output: So whenevre we have object and we pass that key as varibale we can use that bracket
ii- Second output: Inside the bracket we can use string value
iii- Third output: We can access the object by . operaotor
iv-As we are using bird . varibale name so it is not working.
  
10. What will be output of below question?
let c = { name: 'peter' };
let d;
d = c;
c.name = 'alex';
console.log(d.name);
//Output:
alex
// Why?

Whenever we are using object it is act like reference. So when we change oin varibale c it will chnage automatically in varibale d. 
  As both have the same memory reference.
11. What will be output of below question?
var x;
var x= 8;
var x =10;
console.log(10);
//Output:
10

12. What will be output of below question?
var x;
var x= 8;
let x =10;
console.log(10);
//Output:
Uncaught SyntaxError: Identifier 'x' has already been declared
// Why?
As let is function scope so we can't declare.

13. What will be output of below question?
let a = 3;
let b = new Number(3);
console.log(a==b);
console.log(a===b);
//Output:
true
false
Why?
i- First output: becaue both are number
ii- Second output: Bercause whenevr we write new keyword it will create object and we have created number object
They can be same in value but they have different types.

14. What will be output of below question?
  function fruit(){
    console.log('hello');
}
fruit.name = 'world';
console.warn(fruit());
//Output:
hello
undefined
i- First output: Because we are just calling a function
ii- Seconf output: Because we have not found any value.

15. What will be output of below question? 
console.log(1 + "2");
//Output:
12
Why?
Integer with string will be concatenating not doing the summation

16. What will be output of below question? 
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
//Output:
0
2
2
Why?
i- First output: number++ will chnage the value post and before that we are doing console.log, so we are getting 0;
ii- Second output: It's already incremented in line 1 and again it incrementes in line 2.
iii-Third output: As it is 2 it is giving 2.

17. What will be output of below question? 
function getAge(...args){
 console.log(typeof args);
}
console.log(getAge(21));
//Output:
object
Why?
Becuase in JS nothing is array, it is object.
  
18. What will be output of below question? 
function getAge(){
    "use strict";
    age = 21;
    console.log(age);
}
getAge();
//Output:
Uncaught ReferenceError: age is not defined
Why?
As we have added use strict mode we need to declare the varibale first before we use.
  
19. What will be output of below question? 
console.log(eval('10*20+5'));
//Output:
205
Why?
As we have written eval, it will converting it into integer and giving as integer value

20. How many times the value will store? 
sessionStorage.setItem('cool_secret', 123);
//Output:
It will store the till the browser will close or the tab will close.
  
21. What will be output of below question? 
const obj = {1: 'a', 'hello' : 'b', 3 : 'c'};
console.log(obj.hasOwnProperty(1));
console.log(obj.hasOwnProperty("1"));
console.log(obj.hasOwnProperty('hello'));
//Output:
true
true
true
In case of integer we can access by string or int, but in case of string key we can only access by string.
  
