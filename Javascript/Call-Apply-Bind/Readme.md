call, apply, and bind are methods in JavaScript that are used to manipulate the this value of a function.

We can also called as function borowwing.

call(), apply() and bind() methods belong to the Function.prototype property.

Call:

    The call() method calls a function with a given this value and arguments provided individually.

    It takes the this value as the first argument and then the function arguments separated by commas.

Example:


let name = {
  firstname: 'Prakash',
  lastname: 'Guru'
};

const callApplyBindNames = function (state) {
  console.log(this.firstname + " " + this.lastname + ' and state is ' + state);
}

callApplyBindNames.call(name, 'Puri'); // Prakash Guru and state is Puri


Apply:

    The apply() method is similar to call(), but it takes arguments as an array.

    It is particularly useful when the number of function arguments is not known beforehand.

Example:


callApplyBindNames.apply(name, ['Pipili, Puri']); // Prakash Guru and state is Pipili, Puri


Bind:

    The bind() method creates a new function with the same body as the original function but with a fixed this value.

    It does not immediately execute the function; instead, it returns a new function that can be called later.

Example:

const boundFunction = callApplyBindNames.bind(name, 'Pipili');
boundFunction(); // Prakash Guru and state is Pipili
