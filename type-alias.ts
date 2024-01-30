/**
 * Type aliases / Custom types
 * Its common to want to use the same type more than once and refer to it by a single name
 * It is a name fon any type 
 */

type Point = {
  x: number,
  y: number
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 25, y: 50 });

// use a type alias to name any type, it cold be a union also:
type Id = number | string;

// type alliases do not create versions of the same type, its just a name for custom types
type UserInputSanitizedString = string;
 
// function sanitizeInput(str: string): UserInputSanitizedString {
//   return sanitize(str);
// }
 
// Create a sanitized input
// let userInput = sanitizeInput(getInput());
 
// Can still be re-assigned with a string though
// userInput = "new input";