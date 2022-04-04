// Let's see some numbers

let integer = 42
let negativeNumber = -100
console.log(integer + negativeNumber) // I could also have saved it in a variable before printing...

let floatingPointNumber = 10 / 3
console.log(floatingPointNumber) // We will see a floating point number as a result. Still a number.

console.log(10 / 0) // This will result Infinity - it's a choice that JS designers made...

console.log(0 / 0) // This is not possible, JS returns NaN, Not a Number
// Some other (saner) languages would throw an error here.
// JS chooses to return a value, that actually is the result of and erroneus operation.
