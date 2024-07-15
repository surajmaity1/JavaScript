import * as ns from "../exports/barrel.js";
// import { a } from "./barrel.js"; // SyntaxError: The requested module './barrel.js' contains conflicting star exports for name 'a'
// export DefaultExport from "./mod2.js"; // Invalid
export { default as DefaultExport } from "./mod2.js";
export { default, fun } from "./mod2.js"; // The "export from" syntax allows the as token to be omitted, which makes the default export still re-exported as default export.

console.log(ns.a); // undefined because it is duplicate present in both mode1 and mode2
console.log(ns.b); // it will print result because it is only present in mode2
