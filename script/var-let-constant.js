// Variables declared with var are in the function scope.
// Variables declared with let are in the block scope and can be reassigned.
// Variables declared with const are in the block scope and cannot be reassigned.

/* --------------------------------------------------------------------------------------------------------------------- */

// var is function scoped when it is declared within a function. 
// This means that it is available and can be accessed only within that function.
// var can be updated and re-declared within its scope.

// var: 
var x = 1;
if (x === 1) {
  var x = 2; //this var will change the value of x outside the condition and print the same value inside and outside the condition
  console.log("x inside the condition:", x);
}
console.log("x outside the condition:", x);

/* --------------------------------------------------------------------------------------------------------------------- */

// let is block scoped when it is declared within a block.This means that it is available and can be accessed only within that block.
// A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.
// let can be updated but not re-declared.

// let:
let y = 1;
if (y === 1) {
  let y = 2;
  console.log("y inside the condition:", y);
}
console.log("y outside the condition:", y);

/* --------------------------------------------------------------------------------------------------------------------- */

// const is block scoped when it is declared within a block.This means that it is available and can be accessed only within that block.
// const cannot be updated or re-declared.

// const:
const z = 1;
if (z === 1) {
  const z = 2;
  console.log("z inside the condition:", z);
}
console.log("z outside the condition:", z);
