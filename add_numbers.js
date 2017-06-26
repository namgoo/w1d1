// Requirements
// - Take 2 numbers from the command line
// add two number together
// print the output to the console.

var args = process.argv.slice(2);

console.log(process.argv);
var number1 = parseInt(process.argv[0]);
var number2 = parseInt(process.argv[1]);

// console.log(number1);
// console.log(number2);

// console.log(typeof number1);

if (Number.isNaN(number1)
  || Number.isNaN(number2)) {
  console.log("Input was not a number.")
} else {
  var sum = number1 + number2;
  cosnole.log(sum);
}


var sum = number1 + number2;
console.log(sum);