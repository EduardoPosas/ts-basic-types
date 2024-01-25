/**
 * Arrays
 * 1. Can be mix typed o strict typed
 * helps with the IDE autocompletion because of types
 * 2. any[]: basically means "it doesn´t care about types"
 * not recommended because it avoids types of ts
 * mixed arrays are also inferred
 */
var person = {
    name: 'Alexander',
    age: 27,
    hobbies: ['soccer', 'dogs', 'programming'] // This prop is inferred array of strings string[]
};
// array with multiple data types
var activites = ['name', 2];
console.log(activites[0]);
// we can iterate over the array values
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
