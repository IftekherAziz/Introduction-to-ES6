// Problem 1: write an arrow function that will take 3 parameters, wll multiply the parameters and will return the result:

const multiply = (a, b, c) => {
    return a * b * c;
}
const result = multiply(2, 3, 4);
console.log(result);

// Problem 2: write the following sentence in three lines and print the result:
// I am a web developer and I love to code . I love to eat biriyani 

const lines = `I am a web developer
and I love to code 
I love to eat biriyani`;
console.log(lines);

// Problem 3: write a function that will take 2 parameters: One perameter will come from you and the other parameter will be a default parameter.Add these two perameter and return the result:

const add = (a, b = 10) => {
    return a + b;
}
const ouput = add(5);
console.log(ouput);

// Problem 4: Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the name of your friends
// b) Check if the length of each element is even, push elements with even length to a new array and return the result

const filterEvenLengthNames = (friendNames) => {
  return friendNames.filter((name) => name.length % 2 === 0);
  
};
const friends = ["Alice", "Bob", "John", "Charlie", "Dave", "Eve"];
const evenLengthNames = filterEvenLengthNames(friends);
console.log(evenLengthNames); 

// Problem 5: Write an arrow function it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements



// Problem 6: Write an arriw function where it will do the following;
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the result