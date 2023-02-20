/* Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. */

// Hoisting of var:
console.log(greeter);
var greeter = "hello world";
// Output: undefined
// Explanation: The variable greeter is declared after the console.log statement.The variable is hoisted to the top of the scope and initialized with a value of undefined.

/* It is interpreted as:
var greeter;
console.log(greeter); // greeter is undefined
greeter = "hello world";
 */
/* ------------------------------------------------------------------------------------------------------------------------------- */
// Hoisting of let:
console.log(greeter);
let greeter = "hello world";
// Output: ReferenceError: greeter is not defined

// Explanation: The variable greeter is declared after the console.log statement.
//The variable is hoisted to the top of the scope but is not initialized.
// So, when we try to access the variable before initialization, a ReferenceError is thrown.

/* It is interpreted as:
let greeter;
console.log(greeter); 
greeter = "hello world";
output: ReferenceError: greeter is not defined */

/* ------------------------------------------------------------------------------------------------------------------------------- */

// Hoisting of const:
const greeting = "say Hi";
// const greeting = "say Hello instead"; 
// Output:  error - Identifier 'greeting' has already been declared
