/**
 * Unknown
 * It accepts any value but with narrowing (checking for the type to assign to it)
 */
var message;
var userName;
message = 5;
message = 'Max';
// userName = message; // error, variable with type unknown may be change its type (different to string)
if (typeof message === 'string') {
    userName = message; // checked that message is a string
}
/**
 * Never
 * Some fn never return a value
 * never type represents a value which are never observed, in a return type, it means that the function throws an exception or terminates the execution of the program
 */
function errorMessage(msg) {
    throw new Error(message = msg);
}
errorMessage('Hubo un error en la petición');
// It also appears when ts determines there´s nothing else in a union type
function fn(x) {
    if (typeof x === "string") {
        // do something
    }
    else if (typeof x === "number") {
        // do something else
    }
    else {
        x; // has type 'never'!
    }
}
