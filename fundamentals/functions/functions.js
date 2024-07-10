// arrow function

const hello1 = hello => {
    console.log(hello);
}

const hello2 = (hello) => {
    console.log(hello);
}

const fun = () => {
    console.log()
}

hello1("Suraj");
hello2("Sun");

const num = number => { 
    return number + 3;
}

console.log(typeof num(3));

// Destructuring in Function Parameter Lists

/*
function storeOrder(order) { // normal 
    localStorage.setItem('id', order.id);
    localStorage.setItem('currency', order.currency);
}

function storeOrder({id, currency}) { // destructuring
    localStorage.setItem('id', id);
    localStorage.setItem('currency', currency);
}

storeOrder({id: 5, currency: 'USD', amount: 15.99}); // one argument / value!
*/


// Using function as values

function handleTimeout() {
  console.log("Timed out!");
}

const handleTimeout2 = () => {
  console.log("Timed out ... again!");
};

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
  console.log("More timing out...");
}, 4000);

console.log("Guess when I'll execute");


// Nested function
function init() {
  function greet() {
    console.log("HI");
  }

  greet();
}
// greet(); // ReferenceError: greet is not defined
init();