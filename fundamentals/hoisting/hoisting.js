hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized
var hoistedVariable;

hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling

function hoistedFunction() {
    console.log(" Hello world! ");
}

// Hoisting takes place in the local scope as well
function doSomething() {
    x = 33;
    console.log(x);
    var x;
}

doSomething(); // Outputs 33 since the local variable “x” is hoisted inside the local scope

//Note - Variable initializations are not hoisted, only variable declarations are hoisted:

var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;

const aa = true;
const bb = false;
const check = aa && aa;
console.log(check);

console.log(typeof NaN);

console.log("-------");

function foo() {
    var a = 3;

    function bar() {
        var b = 4;

        function baz() {
            var c = 5;
            console.log(a, b, c);
        }

        baz();
        console.log(a, b);
    }

    bar();
    console.log(a);
}

foo();