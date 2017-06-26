// Requirements
// - Take 2 numbers from the command line
// add two number together
// print the output to the console.

var args = process.argv.slice(2);


var number1 = parseInt(args[0]);
var number2 = parseInt(args[1]);

// console.log(number1);
// console.log(number2);

// console.log(typeof number1);

// var sum = number1 + number2;
// console.log(sum);

if (Number.isNaN(number1)
  || Number.isNaN(number2)) {
  console.log("Input was not a number.")
} else {
  var result = 0;
  for (var i = 0; i < args.length; i++) {
    console.log(args[i])
    result = result +Number(args[i]);
  }
    console.log(result)
}


//