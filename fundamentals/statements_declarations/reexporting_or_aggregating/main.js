import { xd } from "../exports/exports.js";
import { two } from "../exports/exports.js";
import value from "../exports/exports.js";
// import {value} from "./exports.js"; // The requested module './exports.js' does not provide an export named 'value'
import sameValue from "../exports/exports.js"; // note that we have the freedom to use import sameValue instead of import value, because value was default export

// import foo, {bar} from "./function_export.js";
export { default as function1, function2 } from "../exports/function_export.js";
console.log(xd);
console.log(two);
console.log(value);
console.log(sameValue);

// foo();
// console.log(bar());