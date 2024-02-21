let name = {
    firstanme: 'Prakash',
    lastname: 'Guru'
}

function printNames(state) {
    console.log('Your name is ' + this.firstanme + ' ' + this.lastname + ' and state is ' + state);//Here we an use this value
}

// printNames.call(name);

//op
//Your name is Prakash Guru


printNames.call(name, 'Odisha');

// Your name is Prakash Guru and state is Odisha