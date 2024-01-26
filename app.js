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
var Roles;
(function (Roles) {
    Roles[Roles["USER"] = 1] = "USER";
    Roles[Roles["ADMIN"] = 2] = "ADMIN";
    Roles[Roles["SUPERUSER"] = 3] = "SUPERUSER"; // 3
})(Roles || (Roles = {}));
// enum UserResponse {
//   No, //  0
//   Yes, // 1
// }
// String enum
// not incrementing behaviour, they serialize well
// allow to give a meaningful and readable value when code runs, independent of the name of the enum
var Direction;
(function (Direction) {
    Direction["UP"] = "UP";
    Direction["DOWN"] = "DOWN";
    Direction["LEFT"] = "LEFT";
    Direction["RIGHT"] = "RIGHT";
})(Direction || (Direction = {}));
var person = {
    name: 'Alex',
    age: 27,
    role: Roles.SUPERUSER,
    direction: Direction.UP
};
console.log(person.role);
console.log(person.direction);
console.log(person);
if (person.role === Roles.SUPERUSER) {
    console.log("".concat(person.name, " es un ").concat(Roles[person.role]));
}
