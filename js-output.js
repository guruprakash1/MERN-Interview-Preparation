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
