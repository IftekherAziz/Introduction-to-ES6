// function add(a, b) {
//     return a + b;
// }
// const result = add(1, 2);
// console.log(result);
//  Output result: 3

/* ---------------- */

// function add(a, b) {
//   return a + b;
// }
// const sum = add(1);
// console.log(sum);
//  Output result: NaN

/* ---------------- */

// function add(a, b) {
//   return a + b;
// }
// const res = add(1, 6, 3, 4, 5);
// console.log(res);
// Output result: 7

/* ---------------- */

function add(a = 0, b = 1)  {
  return a + b;
}
const adding = add();
console.log(adding);
// Output result: 1