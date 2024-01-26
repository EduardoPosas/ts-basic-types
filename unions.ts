/**
 * Union Type
 * is a type formed form two or more other types , representing values that may be one of those types
 * ts only allow an operation if its valid for every member of the union
 */

// string | number 
function printId(id: number | string) {
  console.log('Your Id is' + id)
}

printId('78467'); // ok
printId(4324234); // ok
// printId({id: 1234}); // throws an error

// can´t use methods of only a type string uses or only type number
// function printIne(id: number | string) {
//   console.log(id.toUppercase());
// }

// Narrow the code
function printIne(ine: string | number) {
  if (typeof ine === 'string') {
    console.log(ine.toUpperCase()) // specific method of a type string
  } else {
    console.log(ine); // ine of type number
  }
}

printIne('abdhfyr');
printIne('12343');

// Another example of narrow
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

welcomePeople(['alex', 'cara', 'cami']);
welcomePeople('hailey');

// When all the members in union have somthing in common
// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

console.log(getFirstThree([0, 1, 2, 3, 5]));
console.log(getFirstThree('alexander'));