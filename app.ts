/** Literal Types
 * when we know the exact value or values that a variable could have
 * boolean is a case where just have two values, true or false
 */

let changingString = 'Hello'; // just a simple string type, it can be reasigned; not a literal value

const constatnString = 'Hola'; // this just have one possible and known value (literal type representation)


// By combining multiples literals into unions, you can express a much more useful concept
function printText(s: string, alignment: 'left' | 'center' | 'right') { }

printText('hola mundo', 'center'); // ok
// printText('hola mundo', 'baseline'); // error


// By combining with other non-literal types
interface Options {
  width: number
}

function configure(x: Options | 'auto') { }

configure({ width: 100 }); //ok
configure('auto'); // ok
// configure('semi-auto'); // error


