#!/usr/bin/env node

console.log("Hello world");
const x = String.prototype.charCodeAt();
console.log(x);
console.log();

{ 1
2 } 3
// is transformed by ASI into:

{ 1
;2 ;} 3;

// Which is valid grammar encoding three statements,
// each consisting of a number literal

