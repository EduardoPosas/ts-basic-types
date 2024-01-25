/**
 * Arrays
 * 1. Can be mix typed o strict typed
 * helps with the IDE autocompletion because of types
 * 2. any[]: basically means "it doesn´t care about types"
 * not recommended because it avoids types of ts
 * mixed arrays are also inferred
 */

const person = {
  name: 'Alexander',
  age: 27,
  hobbies: ['soccer', 'dogs', 'programming'] // This prop is inferred array of strings string[]
}

// array with multiple data types
const activites: any[] = ['name', 2];
console.log(activites[0]);

// we can iterate over the array values
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}