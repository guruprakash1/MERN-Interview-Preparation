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

22. What will be output of below question? 
const obj = {1: 'a', "hello" : 'b', 1 : 'c'};
console.log(obj);
//Output:
{1: 'c', hello: 'b'}

Why?
In js if we use the same key then it will take the last value but the position will not change.
23. What will be output of below question? 
  for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
//Output:
1
2
4
Why?
As we have written when it is 3 continue, so it is crossing the loop.
  
24. What will be output of below question? 
const foo = () => console.log('First');
const bar = () => setTimeout(()=>console.log('Second'));
const baz = () => console.log('Third');

bar();
foo();
baz();

//Output:
First
Third
Second
Why?
Function declaration is not important, calling function is imporatant. as we are calling bar() first and there setTimeput function present so it will take time to execute.

25. What will be output of below question? 
    <div onclick="console.log('first')">
    <div onclick="console.log('Second')">
      <button onclick="console.log('Third')">Click</button>
    </div>
  </div>
//Output:
Third
Second 
First

Why?
Event bubble happens from inside to outside.

26. What will be output of below question? 

const person = { name: 'Lylod' };

function sayHi(age) {
    return `Name is ${this.name} is ${age}`;
}
console.log(sayHi.call(person, 21));
console.log(sayHi.apply(person, 22));
console.log(sayHi.bind(person, 23));

//Output:
Name is Lylod is 21
CreateListFromArrayLike called on non-object
ƒ sayHi(age) {
    return `Name is ${this.name} is ${age}`;
}

27. What will be output of below question? 
console.log(typeof typeof 1); 

output:
string

28. What will be output of below question? 

let arr = [1, 2, 3];
arr[7] = 6;
console.log(arr);
output:
[1, 2, 3, empty × 4, 6]

29. What will be output of below question? 
const arr = [1, 2, 3];
arr[5] = arr;
console.log(arr);

output:
[1, 2, 3, empty × 2, Array(6)]

30. What will be output of below question? 
console.log([...'Prakash']);
console.log([...[1, 2, 3]]);

output:
['P', 'r', 'a', 'k', 'a', 's', 'h']
[1, 2, 3]

Why?
  Spread operator spreads the values

31. What will be output of below question? 
  
console.log(1 + 2 + '4');
console.log(1 + 2 + + '4');
  
output:
34
7

32. What will be output of below question? 
let data = [1, 2, 3].map((num) => {
    if (typeof num == 'number') return;
    return num * 2;
})
console.log(data);

output:

[undefined, undefined, undefined]
Why?
  Because we are just returning, and not returung any value. Empty return will be undefined.
33. What will be output of below question? 
  function getInfo(member) {
    member.name = 'Prakash';
}
const person = { name: ' Guru' }
getInfo(person)
console.log(person);

output:
{name: 'Prakash'}

Why?

  When we are passing object it is passed as reference, so the value will changed.
  
34. What will be output of below question? 
function car(){
    this.make= 'tata';
    return {make : 'kia'}
}
const mycar = new car();
console.log(mycar.make);
output:
kia
Why?
As we are returning the function so we are getting the last retun value
35. What will be output of below question? 
(()=> {
    let x = y = 10;
})();
console.log(typeof x);
console.log(typeof y);

output:
undefined
output.js:174 number

36. Add age in the below code.

const person={
Name: “john”
}

Answer:

const updatePerson = {
...person,
age: 32
}

Detailed Explanation: 

In the given code snippet, the use of the spread (...) syntax is to create a shallow copy of the person object and then add a new property age: 32 to the copied object. 
This is not an example of using the rest parameter.

Here, the spread operator (...) is used for object spreading, not for rest parameters. 
It is a concise way to copy the properties of one object into another. 
In this case, it creates a new object updatePerson with the properties of person and adds an additional property age.

37. Assign a and b to the first 2 and the rest to others.
  const arr1 = [1, 2, 4, 5, 6];

Answer 

const [a, b, ...others] = arr1;

Detailed Explanation:

const [a, b, ...others] = arr1;: This line uses destructuring assignment. a gets the value at index 0 of arr1, b gets the value at index 1, and the ...others syntax is the rest parameter, which collects the remaining elements of the array into a new array named others.

38. Make a combination which can be 10 let a = [1,4, 5, 3, 6, 2] 

Answer:
function findCombinations(array, targetSum) {
  const result = [];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        result.push([array[i], array[j]]);
      }
    }
  }

  return result;
}

const a = [1, 4, 5, 3, 6, 2];
const targetSum = 10;

const combinations = findCombinations(a, targetSum);
console.log(combinations);

Detailed explanation:

In this example, the findCombinations function takes an array and a target sum as parameters and returns an array of pairs whose elements add up to the target sum. The provided array is [1, 4, 5, 3, 6, 2], and the target sum is 10. 
  The function will output the combinations that meet the condition.
    
39. How we can call the below function?
  
function Person(name) {
  this.name = name;
}

Person.prototype.talk = function() {
 console.log(this.name)
}

//The below way we can find the combination
var person = new Person("John");
person.talk(); // Output: John

40.Write a function which will give fizz if the modulous is 3 and buzz if modulus is 5
// Moduls
// for(let i = 1; i <20; i++){
//     if(i%3==0){
//         console.log('fizz');
//         console.log(i);
//     }else if(i%5==0){
//           console.log('buzz');
//                   console.log(i);
//     }
// }

41.Reverse a word

const str = 'hello world';

let output = '';
for (let i = str.length - 1; i >= 0; i--) {
    output = output + str[i];
}

console.log(output);
//output
//dlrow olleh

42. Write a function for fibonaci ServiceWorkerRegistration
function generateFibonacci(n) {
  const fibonacciSeries = [0, 1];

  for (let i = 2; i < n; i++) {
      const nextFibonacci = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
      fibonacciSeries.push(nextFibonacci);
  }

  return fibonacciSeries;
}

const n = 12; // Change this to the number of Fibonacci numbers you want
const result = generateFibonacci(n);
console.log(result);

//Op:
[
  0,  1,  1,  2,  3,
  5,  8, 13, 21, 34,
 55, 89
]

43. What is the oytput of the below question?

console.log(2+"2")//22
console.log(2 + +"2")//4
console.log(2-"2");//0
console.log(6 * "2")//12
console.log(6/ "4")//1.5
console.log(6 * "abc")//NaN
console.log(6 / "abc")//NaN

44. Given the input, i want to the output with space

const input = "MyNameIsGuru";
let output = input[0]; // Initialize output with the first character

for (let i = 1; i < input.length; i++) {
    // Check if the current character is an uppercase letter
    if (input[i] === input[i].toUpperCase()) {
        // Add a space before the uppercase letter
        output += ' ' + input[i];
    } else {
        // Keep the lowercase letters or other characters as they are
        output += input[i];
    }
}

console.log(output);

//Output
//My Name Is Guru
40. Find the max combination which having summation will be 0?

function findMaxZeroSumSubarray(arr) {
  let sum = 0;
  let startIndex = 0;
  let endIndex = -1;
  let sumMap = new Map();
  let maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === 0) {
      maxLen = i + 1;
      endIndex = i;
    } else {
      if (sumMap.has(sum)) {
        if (i - sumMap.get(sum) > maxLen) {
          maxLen = i - sumMap.get(sum);
          endIndex = i;
        }
      } else {
        sumMap.set(sum, i);
      }
    }
  }

  startIndex = endIndex - maxLen + 1;

  return arr.slice(startIndex, endIndex + 1);
}

let arr = [2, -2, 3, -3, 0, 5, 6, -11, 4, 5, 6];
let maxZeroSumSubarray = findMaxZeroSumSubarray(arr);
console.log(maxZeroSumSubarray);

//OP:
[
  2, -2, 3,  -3,
  0,  5, 6, -11
]


