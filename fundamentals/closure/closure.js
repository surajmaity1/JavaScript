function makeAdder(x) {
    function add(y) {
        return x + y;
    }

    return add;
}

var plusOne = makeAdder(1);
var plusTen = makeAdder(10);
console.log(plusOne(5));
console.log(plusOne(7));
console.log(plusOne(19));
console.log(plusTen(5));
console.log(plusTen(87));
