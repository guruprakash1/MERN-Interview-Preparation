let name1 = {
    firstanme: 'Prakash',
    lastname: 'Guru'
}

function printNames(state, country) {
    console.log('Your name is ' + this.firstanme + ' ' + this.lastname + ' and state is ' + state + ' and country is ' + country);//Here we an use this value
}


printNames.apply(name1, ['Odisha', 'India']);//Here we are passing the values as array of arguments

// Your name is Prakash Guru and state is Odisha and country is India