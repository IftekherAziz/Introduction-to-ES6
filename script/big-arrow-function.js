const addName = (firstName, lastName) => firstName + lastName;
const fullName = addName("John", "Doe"); // JohnDoe
console.log(fullName);

/* ----------------------------------------------- */

const getFullName = (firstName, lastName) => firstName + " " + lastName;
const name = getFullName('John', 'Doe'); // John Doe
console.log(name);

/* ----------------------------------------------- */

// no perameter arrow function:
const sayHello = () => "Hello World";

/* ----------------------------------------------- */

// arrow function with one parameter:
const sayHi = name => "Hi " + name;

/* ----------------------------------------------- */

// arrow function with multiple parameters and multiple lines of code:

const add = (a, b,c) => {
    const sum = a + b ;
    const sum2 = b + c;
    const mul = sum * sum2;
    const result = mul / 2;
    return result;
}