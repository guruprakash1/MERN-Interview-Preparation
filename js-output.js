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

//Output : 3, 3 , 3 -> 3 times 3
// Why?
// As we declare var and it is global scope and setTimeout is executed in separte thread and it will take some time.
//As var is global scope so the loop is finished before the settimeOut function

6. What will be output of below question?
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1)
}

//Output : 0, 1 , 2 
// Why?
// Because let is function scope
//As it is block scope so every time out the value will be different.

7. . What will be output of below question?
console.log(+true);
console.log(typeof +true);

//Output: 1 and second console number
// Why?
//Because we added + sign, so it is converting it to number.

