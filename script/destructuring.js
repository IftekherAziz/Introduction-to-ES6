// Object destructuring:
const person = {
    name: 'John',
    age: 30,
    address: { city: 'New York', state: 'NY' }
};

// We can destructure the object like this: 
// (Object properties must match the variable)

const { name, age } = person;
console.log(name, age); 

// We can also destructure the object and rename the variables:
const { name: firstName, age: years } = person;
console.log(firstName, years);

console.log(firstName);
console.log(years);

// Array destructuring:
const numbers = [1, 2, 3, 4, 5];

// We can destructure the array like this:
const [num1, num2] = numbers;
console.log(num1, num2);     

// We can also destructure the array and rename the variables:
const [n1, n2] = numbers;
console.log(n1, n2);

