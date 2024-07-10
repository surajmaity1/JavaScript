const user = {
  naam: "suraj",
  age: 23,
  greet() {
    console.log("Hello!");
    console.log(this.age);
  }
};

console.log(user.naam);
user.greet();
console.log(typeof user);

// destructuring object
// you've to use variable as same property name
// also you can use alias like uid: id, here uid is actual refering to uid of object's property and userId is alias
const {uid: userId, ueamil} = {
  uid: "001",
  ueamil: "e@e.com"
};

// console.log(uid); // uid is not defined
console.log(userId);
console.log(ueamil);


// spread operator

const adminUser = {
  isAdmin: true,
  ...user
};

console.log(adminUser);

