
// const message = “Hello”;

const hobbies = ["Sports", "Cooking"];
// hobbies = []; // TypeError: Assignment to constant variable.
hobbies.push("Working");
console.log(hobbies);

const bigInteger =  234567890123456789012345678901234567890n;
console.log(typeof bigInteger);

var symbol1 = Symbol('symbol');
console.log(typeof symbol1);