//Give the output of below code
console.log(null==undefined);

//Output
true

//Write a mul function which will return the multipliaction of these 3
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

Write a program to check the occurance of the array

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
