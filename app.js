/**
 * Type aliases / Custom types
 * Its common to want to use the same type more than once and refer to it by a single name
 * It is a name fon any type
 */
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 25, y: 50 });
// function sanitizeInput(str: string): UserInputSanitizedString {
//   return sanitize(str);
// }
// Create a sanitized input
// let userInput = sanitizeInput(getInput());
// Can still be re-assigned with a string though
// userInput = "new input";
