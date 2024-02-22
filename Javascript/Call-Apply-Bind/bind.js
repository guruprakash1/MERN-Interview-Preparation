let name = {
    firstanme: 'Prakash',
    lastname: 'Guru'
}

function printNames(state) {
    console.log('Your name is ' + this.firstanme + ' ' + this.lastname + ' and state is ' + state); //Here we an use this value
}

const bindfun = printNames.bind(name, 'Odisha'); //Simillar to call but we need to put in a function and we can call it later.

//Bind creates shallow copy

bindfun(); //Here we are calling it later
// Your name is Prakash Guru and state is Odisha