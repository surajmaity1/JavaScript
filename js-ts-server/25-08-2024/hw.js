/*
    create a set time out
    but without promise
*/
const value = setTimeout(() => {
    console.log('setTimeout completed');
}, 2000);

console.log(value);