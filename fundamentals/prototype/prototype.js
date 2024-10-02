const userObject = {
    age: 54
};

const john = Object.create(userObject);
john.name = "John";
console.log(john.age);
