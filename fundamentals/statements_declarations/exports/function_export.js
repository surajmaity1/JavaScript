// Works because `foo` is a function declaration,
// not a function expression
// foo();

// export default function foo() {
//     console.log("foo fun");
// }

// It's still technically a declaration, but it's allowed
// to be anonymous
// export default function () {
//     console.log("Hi");
// }


export function bar() {
    return "bar fun";
}

function function1() {
    return "function1 fun";
}

function function2() {
    return "function2 fun";
}

export {function1 as default, function2};