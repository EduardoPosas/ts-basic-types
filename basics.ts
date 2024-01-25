/**
 * Numbers
 * Strings
 * Booleans
 */

const addUp = (n1: number, n2: number, print: boolean) => {
  if (print) {
    console.log(n1 + n2)
  }
  return n1 + n2;
}

/**
 * Values cannot be string, otherwise it throws an error
 */
const value1 = 20;
const value2 = 20;
const result = addUp(value1, value2, true);
console.log(result);