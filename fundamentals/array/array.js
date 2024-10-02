const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);
console.log(typeof hobbies);

const index = hobbies.findIndex((item) => item === "Cooking");

/*
above line is same like this -
const index = hobbies.findIndex((item) => {
    return item === 'Cooking';
});
*/
console.log(index);

const newHobbies = hobbies.map((item) => ({text: item + " Hobby"}));
console.log(newHobbies);

const userNameData = ["Max", "Schwarzmüller"];

const fName = userNameData[0];
const lName = userNameData[1];


// destructuring array
// you don't have to use variable as same property name
const [firstName, lastName] = ["Max", "Schwarzmüller"];

console.log(firstName);
console.log(lastName);

// spread operator

const anotherHobbies = ["Reading"];

const mergedHobbies = [...hobbies, ...anotherHobbies];
console.log(mergedHobbies);

const obj1 = {def: "hello"};
const obj2 = {def: "hello"};
const obj2 = obj1;

console.log(obj1 == obj2);
console.log(obj1 === obj2);

const arr1 = [1, "hello"];
const arr2 = [1, "hello"];
const arr2 = arr1;

console.log(arr1 == arr2);
console.log(arr1 === arr2);

const arrayThree = [1, true, "h"];
const arrayFour = "1,true,h";

console.log(arrayThree == arrayFour)
