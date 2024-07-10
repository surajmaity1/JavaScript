class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hi!");
  }
}

const user1 = new User("Manuel", 35);
user1.greet();
console.log(user1);
console.log(typeof User);
console.log(typeof user1);