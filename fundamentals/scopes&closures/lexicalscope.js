// we should not use eval, with ...
// eval
function evalExample(str, val) {
    eval(str); // cheating lexical
    console.log(b, val);
}

var b = 32;
evalExample(`var b = 5342.51`, 322);

console.log('----------');

function evalExampleStrictMode(str) {

    eval(str);
    console.log(mango);
}

evalExampleStrictMode(`var mango = "yellow colour"`);

console.log('----------');

var objectWithExample = {
    firstVariable: 1,
    secondVariable: 2,
    thirdVariable: 3,
}

// more tedious to repeat objectWithExample
console.log(objectWithExample.firstVariable);
console.log(objectWithExample.secondVariable);
console.log(objectWithExample.thirdVariable);

// 'easier' short-hand ( bad practice )
with (objectWithExample) {
    console.log(firstVariable);
    console.log(secondVariable);
    console.log(thirdVariable);
}

