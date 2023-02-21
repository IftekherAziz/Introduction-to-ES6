// function declaration:
function add (first, second) {
    const total = first + second;
    return total;
}
const result = add(10, 20);
console.log(result);

// function expression:
const add2 = function add2(first, second) {
    const total = first + second;
    return total;
}
const result2 = add2(10, 30);
console.log(result2);

//  annonymous function:
const add3 = function (first, second) {
    const total = first + second;
    return total;
}
const result3 = add3(10, 40);
console.log(result3);

// arrow function:
const add4 = (first, second) => first + second;
const result4 = add4(10, 50);
console.log(result4);

// arrow function with multiple lines:
const add5 = (first, second) => {
    const sum = first + second;
    return sum;
}
const result5 = add5(10, 60);
console.log(result5);

// Difference between function declaration and function expression and annonymous function:
// function declaration: It should be called before it is declared. It can be called from anywhere. 
// function expression: It should be called after it is declared. It can be called from anywhere. 
// annonymous function: It should be called after it is declared. It can not be called from outside.