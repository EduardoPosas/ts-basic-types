/** Literal Types
 * when we know the exact value or values that a variable could have
 * boolean is a case where just have two values, true or false
 */
var changingString = 'Hello'; // just a simple string type, it can be reasigned; not a literal value
var constatnString = 'Hola'; // this just have one possible and known value (literal type representation)
// By combining multiples literals into unions, you can express a much more useful concept
function printText(s, alignment) { }
printText('hola mundo', 'center'); // ok
function configure(x) { }
configure({ width: 100 }); //ok
configure('auto'); // ok
// configure('semi-auto'); // error
