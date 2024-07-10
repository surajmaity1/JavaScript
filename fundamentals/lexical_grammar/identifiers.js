const decl = 1; // Variable declaration (may also be `let` or `var`)
function fn() {} // Function declaration
const obj = { key: "value" }; // Object keys
// Class declaration
class C {
  #priv = "value"; // Private property
}
lbl: console.log(1); // Label

const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello

// function import() {} // Illegal: import is a reserved word.


// Most notably, private properties and object properties allow reserved words.

const obj2 = { import: "value" }; // Legal despite `import` being reserved
class D {
  #import = "value";
}

// const els\u{65} = 1; // `els\u{65}` encodes the same identifier as `else`
//console.log(typeof null); // object

// const data = 0888; // 888 parsed as decimal
// console.log(data);

// 0888 // 888 parsed as decimal
// 0777 // parsed as octal, 511 in decimal


let data = 0b101; // Binary // (or 0b101) or 5 in decimal
console.log(data);

data = 0o755; // 493 // Octal
console.log(data);
data = 0XA; // 10 // Hexadecimal
console.log(data);

data = 0b11101001010101010101n; // 955733 // BigInt
console.log(data);

data = 0o755n; // 955733 // octal BigInt
console.log(data);

