/**
 * Function return types & void
 * A function can infer the return type
 * void means that the function does not return anything
 */
var add = function (n1, n2) { return n1 + n2; };
function concatenate(t1, t2) {
    return "".concat(t1, "  ").concat(t2);
}
console.log(add(10, 5));
console.log(concatenate('hola', 'mundo'));
// void
function cartTotal() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var total = items.reduce(function (previous, current) { return previous + current; }, 0);
    console.log(total);
}
cartTotal(10, 20, 30);
/**
 * Function as types
 * 1. Function type, it more general
 * 2. Arrow fn notation, we define a type with certain parameters and the returning value
 */
function multiplyTwoNumbers(n1, n2) {
    return n1 * n2;
}
var multiply;
// let multiply: Function; // this is general, could cause some errors since it could receive diferent functions with diferent parameters, types and functioning
// multiply = cartTotal // error
multiply = add;
console.log(multiply(2, 6));
// Callbacks
function addAndPrint(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndPrint(25, 10, function (result) {
    console.log(result);
    return result; // not error but it is unused since the cb return type is void
});
