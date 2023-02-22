// Problem 1: write an arrow function that will take 3 parameters, wll multiply the parameters and will return the result:

/* const multiply = (a, b, c) => {
    return a * b * c;
}
const result = multiply(2, 3, 4);
console.log(result); */

/* ----------------------------------------------------------------------------------------------------------------------------- */

// Problem 2: write the following sentence in three lines and print the result:
// I am a web developer and I love to code . I love to eat biriyani 

/* const lines = `I am a web developer
and I love to code 
I love to eat biriyani`;
console.log(lines); */

/* ----------------------------------------------------------------------------------------------------------------------------- */

// Problem 3: write a function that will take 2 parameters: 
// One perameter will come from you and the other parameter will be a default parameter.
//Add these two perameter and return the result:

/* const add = (a, b = 10) => {
    return a + b;
}
const ouput = add(5);
console.log(ouput); */

/* ----------------------------------------------------------------------------------------------------------------------------- */

// Problem 4: Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the name of your friends
// b) Check if the length of each element is even, push elements with even length to a new array and return the result

/* const filterEvenLengthNames = (friendNames) => {
  const evenLengthNames = [];
  for(let friend of friendNames){
    if(friend.length % 2 === 0){
      evenLengthNames.push(friend);
    }
  }
  return evenLengthNames;
  
};
const friends = ["Alice", "Bob", "John", "Charlie", "Dave", "Eve"];
const evenLengthNames = filterEvenLengthNames(friends);
console.log(evenLengthNames);  */

/* ------------------------------------------------------------------------------------------------------------------------------- */

// Problem 5: Write an arrow function it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements

/* const squareAndAverage = (numbers) => {
   let sum = 0;
   let average = 0;
    for(let number of numbers){
      square = number * number; // square = 1 * 1 = 1
      sum += square; // sum = sum + square;
    }
    average = sum / numbers.length; // average = 1 / 5 = 0.2
    return average; // 0.2
}

const numbers = [1, 2, 3, 4,5];
const average = squareAndAverage(numbers);
console.log(average); */


/* ------------------------------------------------------------------------------------------------------------------------------ */

// Problem 6: Write an arrow function where it will do the following;
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the result


/* const combineAndFindMax = (array1, array2) =>{

  const newArray = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]
  const max = Math.max(...newArray);
  return max;
  
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const result = combineAndFindMax(array1, array2);
console.log(result); */


