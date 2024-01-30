/**
 * Function return types & void
 * A function can infer the return type
 * void means that the function does not return anything
 */

const add = (n1: number, n2: number): number => n1 + n2;

function concatenate(t1: string, t2: string): string {
  return `${t1}  ${t2}`
}

console.log(add(10, 5));
console.log(concatenate('hola', 'mundo'));

// void
function cartTotal(...items: number[]): void {
  const total = items.reduce((previous, current) => previous + current, 0);
  console.log(total);
}

cartTotal(10, 20, 30);

/**
 * Function as types
 * 1. Function type, it more general
 * 2. Arrow fn notation, we define a type with certain parameters and the returning value
 */

function multiplyTwoNumbers(n1: number, n2: number) {
  return n1 * n2;
}

let multiply: (a: number, b: number) => number;
// let multiply: Function; // this is general, could cause some errors since it could receive diferent functions with diferent parameters, types and functioning
// multiply = cartTotal // error
multiply = add;

console.log(multiply(2, 6));

// Callbacks

function addAndPrint(n1: number, n2: number, cb: (result: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndPrint(25, 10, (result) => {
  console.log(result);
  return result; // not error but it is unused since the cb return type is void
})