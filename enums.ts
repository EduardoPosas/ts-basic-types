/**
 * Enums
 * Es un custom type, no está disponible en js
 * allows to define a set of named constants
 * can be useful to create a set of disctint cases
 * Numeric enums
 * String enums
 * Heterogeneous enums
 * 
 * enums without initializers either need to be first  or come after numeric enums initialized with numeric constants or other constant enum member 
 */

// Numeric enum
enum Roles {
  USER = 1, // initialized to 1
  ADMIN, // 2
  SUPERUSER // 3
}

// enum UserResponse {
//   No, //  0
//   Yes, // 1
// }

// String enum
// not incrementing behaviour, they serialize well
// allow to give a meaningful and readable value when code runs, independent of the name of the enum
enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

const person = {
  name: 'Alex',
  age: 27,
  role: Roles.SUPERUSER,
  direction: Direction.UP
}

console.log(person.role);
console.log(person.direction);
console.log(person);

if (person.role === Roles.SUPERUSER) {
  console.log(`${person.name} es un ${Roles[person.role]}`)
}
