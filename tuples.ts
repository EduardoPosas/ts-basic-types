/**
 * Tuples
 * it is an array with a fixed size (2 elements)
 * ts infer basic data types
 * in case of tuple, we need to say ts that we want a tuple
 * type that only exists in ts, not in js

 */

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // declaring a tuple 
} = {
  name: 'Alexander',
  age: 27,
  hobbies: ['programming', 'soccer', 'excercise'],
  role: [2, 'author']
}

// person.role.push('item');; // special case, ts do not detects this as an error
person.role[1] = 'admin'; // value assigned, same type
// person.role[1] = true; // throws an error
// person.role = [1, 'admin', 'item']; // throws an error, detected by ts

console.log(person.role)