/**
 * Numbers
 * Strings
 * Booleans
 */
var addUp = function (n1, n2, print) {
    if (print) {
        console.log(n1 + n2);
    }
    return n1 + n2;
};
/**
 * Values cannot be string, otherwise it throws an error
 */
var value1 = 20;
var value2 = 20;
var result = addUp(value1, value2, true);
console.log(result);
