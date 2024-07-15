export { xd };
const xd = 1; // we declare it in anywhere
// This works, because `export` is only a declaration, but doesn't
// utilize the value of `xd`.



// with default
// export default value; // ReferenceError: Cannot access 'value' before initialization
const value = "value";
export default value; // this is same as -> export {value as default}; 

// alias 
const twice = 2;
export { twice as two};

// export default myFunction; // Identifier '.default' has already been declared


