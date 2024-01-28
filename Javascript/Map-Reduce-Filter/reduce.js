const arr = [1, 4, 5, 9, 8];

const output = arr.reduce((acc, curr) => {
    if (acc > curr) {
        curr = acc;
    }
    return acc;
},0)