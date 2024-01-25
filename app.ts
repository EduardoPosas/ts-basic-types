/**
 * Objects ts
 * 1. Type object: we need to be more specific
 * 2. Defining a key-type pairs
 * 3. Inferred types: let ts to infer types, values are assigned to object props
 */

// const user: object = {
//   name: 'Alexander',
//   age: 27
// }

// const user: {
//   name: string,
//   age: number
// } = {
//   name: 'alexander',
//   age: 27
// }

const user = {
  name: 'Alexander',
  age: 27
}

console.log(user.age);
// console.log(user.address); // cannot access to an unexisting prop 

/**
 * Nested Objects, also are inferred
 */

const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
console.log(product.details.title);

// explicitly typed
// {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   }
// }