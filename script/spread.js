const max = Math.max(12, 85, 999, 78);
console.log(max); 
// Output: 999

const numbers = [12, 85, 999, 78];
const largest = Math.max(numbers);
console.log(largest);
// Output: NaN

// Spread operator:
const num = [12, 65, 45, 39];
const large = Math.max(...num);
console.log(large);
// Output: 65

